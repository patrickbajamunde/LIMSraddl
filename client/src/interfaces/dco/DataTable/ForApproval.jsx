import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Arf from "../generatePdf/Arf";

export default function ForApproval() {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [clientTypeFilter, setClientTypeFilter] = useState("");
    const [client, setclient] = useState([]);

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8003/api/dbcontrol/forApproval", {
                });
                setclient(response.data);
                setFilteredData(response.data); // Initialize the table with fetched data
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchData();
    }, []);
    const deletRequest = async (arfId) => {
        try {
            //confirm first if the user wants to delete the data
            const confirmDelete = window.confirm("Are you sure you want to delete this request?");
            if (!confirmDelete) return;

            //if confirmDelete is true send a DELETE request from the API
            await axios.delete(`http://localhost:8003/api/client/delete/arf/${arfId}`, {
                withCredentials: true,
            });


            // this function creates a new array excluding the item whose ._id is equal to the arfId thus "deleting" the item
            setclient(prev => prev.filter(item => item._id !== arfId));
            setFilteredData(prev => prev.filter(item => item._id !== arfId));

            alert("Request deleted successfully.");
        } catch (error) {
            console.error("Error deleting request", error);
            alert("Failed to delete the request.");
        }

    };

    const updateStatus = async (id, requestId) => {
        try {
            const confirmUpdate = window.confirm(`Do you want to approve ${requestId}?`);
            if (!confirmUpdate) return;

            // Call the API to update the status to "Released"
            const response = await axios.put(
                `http://localhost:8003/api/client/update/arf/${id}`,
                { status: "approved" },
                { withCredentials: true }
            );

            // Option 1: Refetch data from the server, or
            // Option 2: Update state locally; here we update the status in both filteredData and client arrays:
            setclient(prev => prev.map(item => item._id === id ? { ...item, status: "approved" } : item));
            setFilteredData(prev => prev.map(item => item._id === id ? { ...item, status: "approved" } : item));

            window.location.reload();
            alert(`Request ${requestId} approved successfully.`);
        } catch (error) {
            console.error("Error approving request", error);
            alert("Failed to approve the request");
        }
    };

    const columns = [
        {
            name: "Item No.",
            selector: (row) => row.index,
            sortable: true,
        },
        {
            name: "Transaction Date",
            selector: (row) => formatDate(row.transactionDate),
            sortable: true,
        },
        {
            name: "Request No.",
            selector: (row) => row.requestId,
            sortable: true,
        },
        {
            name: "Created By",
            selector: (row) => row.userName,
            sortable: true,
        },
        {
            name: "Form",
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            cell: (row) => (
                <div className="d-flex justify-content-center">
                    <button className={`btn btn-sm ${row.status === "approved" ? "btn-success opacity-100 disabled " : row.status === "for approval" ? "btn-primary" : "btn-secondary"} text-white`}
                        onClick={() =>
                            navigate(`/Dco/approveRequest/${row._id}`, {
                                state: { from: "/Dco/AnalysisRequestForms/" },
                            })
                        }
                    >
                        {row.status}
                    </button>
                </div>
            )
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="d-flex align-items-center gap-2">
                    <button type="button" className="btn p-0 border-0 " onClick={() => deletRequest(row._id)}><i className="bi bi-trash text-danger "></i></button>
                    <Link
                        to={`/Dco/updateRequest/${row._id}`}
                        state={{ from: '/Dco/AnalysisRequestForms/' }}
                        type="button"
                        className="btn p-0 border-0"><i className="bi bi-pencil-square text-success "></i>
                    </Link>
                    <Arf
                        requestId={row._id}
                        icon={<i className="bi bi-box-arrow-down text-primary"></i>}
                        disabledIcon={<i className="bi bi-box-arrow-down text-secondary"></i>}
                    />
                    <Link to={`/Dco/requestData/${row._id}`} state={{ from: '/Dco/AnalysisRequestForms/' }} type="button" className="btn p-0 border-0"><i class="bi bi-eye"></i></Link>
                </div>
            ),
        },
    ];

    const handleDelete = (row) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete ${row.sampleDescription}?`
        );
        if (confirmDelete) {
            const updatedData = data.filter((item) => item.itemNo !== row.itemNo);
            setData(updatedData);
        }
    };


    const handleAction = (row) => {
        alert(`Action clicked for ${row.sampleDescription}`);
    };

    // Filter the data based on the search term
    React.useEffect(() => {
        const filtered = client.filter((item) =>
            Object.values(item)
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase())
        );
        setFilteredData(filtered);
    }, [search, client]);

    const navigate = useNavigate();
    return (
        <React.Fragment>
            <h1>Analysis Request Forms</h1>
            <div className="row mb-3">
                <div className="col-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control border"

                    />
                </div>

                <div className="col-2">
                    <select value={clientTypeFilter} onChange={(e) => setClientTypeFilter(e.target.value)} className="form-select border">
                        <option value="">All Clients</option>
                        <option value="Regulatory">Regulatory</option>
                        <option value="Corn Program">Corn Program</option>
                        <option value="Rice Program">Rice Program</option>
                        <option value="LGU">LGU</option>
                        <option value="Student">Student</option>
                        <option value="Private">Private</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Government Agency">Government Agency</option>
                        <option value="High Value Crops Program">High Value Crops Program</option>
                        <option value="Research">Research</option>
                    </select>
                </div>

            </div>


            <div>
                <DataTable
                    columns={columns}
                    data={filteredData
                        .filter((row) => (clientTypeFilter ? row.clientType === clientTypeFilter : true))
                        .map((row, index) => ({ ...row, index: index + 1 }))} // Now using filtered API data
                    noDataComponent="No data available"
                    pagination
                />
            </div>
        </React.Fragment>
    );
}
