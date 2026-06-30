import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import UpdateRabies from './UpdateRabies';
import UpdateRGeneral from './UpdateRGeneral';


function UpdateRequest() {

    const common = {
        labAccessionNumber: "",
        requestId: "",
        recordId: "",
        clientType: "",
        clientName: "",
        clientAge: "",
        clientAddress: "",
        clientEmail: "",
        clientContact: "",
        clientGender: "",
        locOfFarm: "",
        barangay: "",
        municipality: "",
        province: "",
        contactNo: "",
        email: "",
    }

    

    const [request, setRequest] = useState({ ...common, data: {}});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8003/api/client/getClient/${id}`)
            .then((response) => {
                setRequest(response.data)
            })
            .catch((error) => {
                console.error("Error fetching report details", error)
                setRequest(null)
            })
    }, [id]);

    if (!request) return <p>Loading...</p>

    if (request.type === 'RABIES') {
        return <UpdateRabies request={request} setRequest={setRequest} common={common} />
    } else {
        return <UpdateRGeneral request={request} setRequest={setRequest} common={common} />
    }

}

export default UpdateRequest