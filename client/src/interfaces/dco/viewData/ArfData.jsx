import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import './styles/arfData.css'
import TestPdf from "../generatePdf/TestPdf";


function ArfData() {

    const [requestData, setRequestData] = useState(null);
    const { id } = useParams();
    const location = useLocation();
    const backRoute = location.state?.from || "/Dco/Walkin/";
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8003/api/client/getClient/${id}`)
            .then((response) => {
                setRequestData(response.data)
            })
            .catch((error) => {
                console.error("Request not found", error)
                setRequestData(null)
            })
    }, [id]);

    function formatDate(dateStr) {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const specimenList = [
        "Bovine",
        "Bubaline",
        "Swine",
        "Caprine",
        "Ovine",
        "Feline",
        "Equine",
        "Canine",
        "Avian (Specify)",
        "Others",
    ]

    const sexList = [
        "Male",
        "Female"
    ]

    const wholeAnimal = [
        "Live",
        "Dead/Sacrificed (Hours since death)"
    ]

    const specimenPart = [
        'Swab',
        'Blood',
        'Serum',
        'Others',
        'Feces',
        'Blood Smear',
        'Tissue/Organs',
    ]

    const pathologyList = [
        "Gross Examination/Necropsy",
        "Complete Blood Count (Haemocytometry, Microhematocrit Tube Method)",
        "Others"
    ]

    const rapidPlateTest = [
        "Brucella spp",
        "M. gallisepticum",
        "S. pullorum",
        "Others",
        "M. synoviae",
    ]

    const isoAndIdenList = [
        "Bacterial(Biochemical Reaction Method and Plate Method using Differential Agars)",
        "Antibiotic Sensitivity Test(Kirby - Bauer Method)",
        "Bacterial Count",
    ]

    const bloodParasiteExam = [
        "CATT(Trypanosomiasis)",
        "Direct Smear",
        "Giemsa - Stained Smear",
        "Microhematocrit Centrifugation Technique"
    ]

    const fecalysisList = [
        "Direct Smear",
        "Test Tube Flotation Method",
        "McMaster Method",
        "Sedimentation Technique"
    ]
    const parasiteIden = [
        "Parasite Identification",
    ]

    const virologyList = [
        "Hemagglutination-Inhibition Test (HI)",
        "Newcastle Disease",
        "Avian Influenza",
        "Others"
    ]

    const elisaList = [
        "African Swine Fever Virus (ASFV)",
        "Infectious Laryngotracheitis Virus (ILTV) in serum",
        "Influenza A Virus (IAV)",
        "New Castle Disease Virus (NCDV)",
        "Bluetongue Virus (BTV)",
        "Paratuberculosis (Johne’s Disease)",
        "Brucellosis",
        "Porcine Reproductive and Respiratory Syndrome Virus (PRRSV)",
        "Caprine Arthritis Encephalitis Virus (CAEV)",
        "Q - Fever (Coxiella burnetti) Virus",
        "Classical Swine Fever Virus (CSFV)",
        "Others",
        "Infectious Bursal Disease Virus (IBDV) in serum",
    ]

    const pcrList = [
        "African Swine Fever(ASF)",
        "Avian Influenza A",
        "Q - Fever(Coxiella burnetii)",
        "Others"
    ]

    const purposeList = [
        "Diagnostics",
        "Disease Investigation",
        "Regulatory",
        "Farm Accreditation",
        "Local Shipment",
        "Research/Thesis",
        "Surveillance",
        "Others",
        "Imported Under Quarantine",
    ]

    const sampleLabel = [
        "Clear and properly labeled"
    ]

    const quantityOfSample = [
        "Serum at least 500 ul to 1 ml",
        "Whole Blood at least 3 ml",
        "Feces at least 10 grams",
        "Organ approximately 2x2 in",
        "Water Sample",
        "Swab(Oropharyngeal / Cloacal Swab)",
        "Others",
    ]

    const preservationUsed = [
        "Whole blood EDTA (Violet Top)",
        "Serum – Clot Activator (Red Top: Clear, straw colored or pale yellow – refer to the Hemolysis reference palette)",
        "Serum – Microcentrifuge tubes/Screw-capped tubes",
        "Other",
    ]

    const transport = [
        "Triple Packaging",
        "Use of leak proof container",
        "Use of proper storage (styrobox or cooler w/ iced gel pack or ice)",
        "Other",
    ]

    const stateOfSample = [
        "All samples: Sterile and free of contamination ",
        "Serum: refer to the hemolysis reference from the BAI",
        "Whole Blood: Bright red and non-hemolyzed",
        "Sample for Necropsy: Submitted within 6 hours after death",
    ]

    const rejectionOfSamples = [
        "Improper collection/transport/storage",
        "Unlabeled/mislabeled",
        "Insufficient samples for the test requested",
        "Improper/incomplete information/no forms attached",
        "Excessive hemolysis",
        "Sample contamination",
        "Swab for Bacteriology",
        "Improper tube type for Whole Blood",
    ]

    const sampleStorage = [
        "Room temperature",
        "Refrigerated",
        "Frozen",
    ]

    return (
        <>
            <div className='d-flex pt-3'>
                <div className='col card border-0 shadow-sm analysis container-fluid mb-5  '>

                    {requestData ? (
                        <>
                            <div className='row card-header text-white ' style={{ backgroundColor: '#003e8fff' }}>
                                <div className="col-auto rounded-circle justify-content-center d-flex align-items-center px-3 bg-white bg-opacity-25">
                                    <i className='bi bi-file-earmark-text fs-1' />
                                </div>
                                <div className="col ">
                                    <div className="row">
                                        <span className='fw-bold fs-2 '>Analysis Request Form</span>
                                        <span className='fs-5 text-decoration-underline'>Request ID: {requestData.requestId}</span>
                                    </div>
                                </div>
                            </div>

                            {/*Request Details*/}
                            <div className='row p-3 '>
                                <div className='row p-3'>
                                    <span className='fs-3 px-1 d-flex justify-items-center'><i className='bi bi-list-check fs-2 me-2 text-success ' />Request Details</span>
                                </div>
                                <div className='row m-1 p-1 gap-5'>
                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>CUSTOMER TYPE</span>
                                                <span className='fs-5 fw-semibold'>{requestData.clientType || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'>RECEIVED BY</span>
                                                <span className='fs-5 fw-semibold'>{requestData.receivedBy || '-'}</span>
                                            </div>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>LOCATION OF FARM</span>
                                                <span className='fs-5 fw-semibold'>{requestData.locOfFarm || '-'}</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>CROPS PLANTED</span>
                                                <span className='fs-5 fw-semibold'>{requestData.cropsPlanted || '-'}</span>
                                            </div>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>AREA</span>
                                                <span className='fs-5 fw-semibold'>{requestData.area || '-'}</span>
                                            </div>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>TOPOGRAPHY</span>
                                                <span className='fs-5 fw-semibold'>{requestData.topography || '-'}</span>
                                            </div>
                                            <div>
                                                <span className='fw-bold fs-5 text-white'>blank</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Client Information */}
                            <div className='row p-3'>
                                <span className='fs-3 px-1 d-flex justify-items-center'><i className='bi bi-person fs-2 me-2 text-success ' />Customer Information</span>
                            </div>
                            <div className='row m-1 p-1 gap-5'>
                                <div className='col'>
                                    <div className='row g-3'>
                                        <div className='card pt-2 pb-2 ps-3'>
                                            <span className='fw-bold text-secondary'>CUSTOMER NAME</span>
                                            <span className='fs-5 fw-semibold'>{requestData.clientName || '-'}</span>
                                        </div>
                                        <div className="card pt-2 pb-2 ps-3">
                                            <span className='fw-bold text-secondary'><i className='bi bi-envelope-fill me-2' />EMAIL</span>
                                            <span className='fs-5 fw-semibold'>{requestData.clientEmail || '-'}</span>
                                        </div>
                                        <div className="card pt-2 pb-2 ps-3">
                                            <span className='fw-bold text-secondary'><i className='bi bi-envelope-fill me-2' />CONTACT NO.</span>
                                            <span className='fs-5 fw-semibold'>{requestData.clientContact || '-'}</span>
                                        </div>

                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='row g-3'>
                                        <div className='card pt-2 pb-2 ps-3'>
                                            <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />ADDRESS</span>
                                            <span className='fs-5 fw-semibold'>{requestData.clientAddress || '-'}</span>
                                        </div>
                                        <div className="card pt-2 pb-2 ps-3">
                                            <span className='fw-bold text-secondary'>GENDER</span>
                                            <span className='fs-5 fw-semibold'>{requestData.clientGender || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Important Dates */}
                            <div className='row p-3 pb-0'>
                                <span className='fs-3 px-1 d-flex justify-items-center'>
                                    <i className='bi bi-calendar-event fs-2 me-2 text-primary' />
                                    Important Dates
                                </span>
                            </div>
                            <div className="row m-1 p-3 gap-5">
                                <div className="col">
                                    <div className='row pt-3 pb-3 border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                                        <span className='fw-bold fs-5 text-primary'>Transaction Date</span>
                                        <span>{formatDate(requestData.transactionDate)}</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className='row pt-3 pb-3 border-start border-4 border-warning bg-warning bg-opacity-25 rounded'>
                                        <span className='fw-bold fs-5 text-warning'>Sample Disposal</span>
                                        <span>{formatDate(requestData.sampleDisposal)}</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className='row pt-3 pb-3 border-start border-4 border-danger bg-danger bg-opacity-25 rounded'>
                                        <span className='fw-bold fs-5 text-danger'>Report Due Date</span>
                                        <span>{formatDate(requestData.reportDue)}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading user details...{/* Or "User not found" if you prefer */}</p>
                    )}

                    {/* Sample Details Table */}
                    <div className='row p-3 pb-0'>
                        <span className='fs-3 px-1 d-flex justify-items-center'>
                            <i className='bi bi-file-medical fs-2 me-2 text-danger' />
                            Specimen / Quantity Submitted
                        </span>
                    </div>
                    <div className='p-3'>
                        {requestData ? (
                            <div>
                                <h4 className='fw-bold mb-0'>Species:</h4>
                                <div className='row g-3 mt-1'>
                                    {specimenList.map((specimen, index) => (
                                        <div className='col-md-3' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border  fs-6 ${(requestData.specimen).includes(specimen) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={specimen} checked={(requestData.specimen).includes(specimen)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{specimen}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p>Loading user details...</p>
                        )}
                    </div>

                    <div className='row m-1'>
                        <div className='col-6'>
                            <div className='card pt-2 pb-2 ps-3 mb-3 shadow-sm'>
                                <span className='fw-bold text-secondary'>AGE</span>
                                <span className='fs-5 fw-semibold'>{requestData.specimenAge || '-'}</span>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                <span className='fw-bold text-secondary'>SEX</span>
                                <span className='fs-5 fw-semibold'>{requestData.sex || '-'}</span>
                            </div>
                        </div>
                    </div>

                    <div className='p-3'>
                        {requestData ? (
                            <div>
                                <h4 className='fw-bold mb-0'>Specimen:</h4>
                                <div className='row mt-3'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Whole Animal</span>
                                            <span className='fs-5 fw-semibold'>{requestData.wholeAnimal || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row g-3'>
                                    {specimenPart.map((specimen, index) => (
                                        <div className='col-md-3' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border border-dark fs-6 ${(requestData.specimenPart).includes(specimen) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={specimen} checked={(requestData.specimenPart).includes(specimen)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{specimen}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p>Loading user details...</p>
                        )}
                    </div>


                    {requestData ? (
                        <>
                            {/*Sample Remarks*/}
                            <div className='row p-3 pb-0'>
                                <span className='fs-3 px-1 d-flex justify-items-center'>
                                    <i className='bi bi-chat-left-quote fs-2 me-2 text-primary' />
                                    Sample Remarks
                                </span>
                            </div>
                            <div className="row m-1 p-3 gap-5">
                                <div className="col">
                                    <div className='row pt-3 pb-3 border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                                        <span className='fw-bold fs-5 text-primary'>Sampling Date</span>
                                        <span>{formatDate(requestData.samplingDate)}</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className='row pt-3 pb-3 border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                                        <span className='fw-bold fs-5 text-primary'>Sampling Time</span>
                                        <span>{requestData.samplingTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='row m-1 p-1 mb-5 gap-5'>

                                <div className="col">
                                    <div className='card border-dark pt-2 pb-2 ps-3'>
                                        <span className='fw-bold text-secondary'>Sample Condition</span>
                                        <span className='fs-5 fw-semibold'>{requestData.sampleCondition || '-'}</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className='card border-dark pt-2 pb-2 ps-3'>
                                        <span className='fw-bold text-secondary'>Other Matters</span>
                                        <span className='fs-5 fw-semibold'>{requestData.otherMatters || '-'}</span>
                                    </div>
                                </div>

                            </div>
                        </>
                    ) : (
                        <p>Loading user details...{/* Or "User not found" if you prefer */}</p>
                    )}



                    <div className="d-flex flex-wrap gap-2 justify-content-center pb-4">
                        <div className="btn btn-primary text-white">
                            <TestPdf requestId={requestData ? requestData._id : null}
                                icon={<span className='text-white fw-bold'>Generate PDF</span>}
                            />
                        </div>
                        <button className="btn btn-success fw-bold">
                            <Link
                                to={`/Dco/updateArf/${id}`}
                                type="button"
                                className="btn p-0 border-0 text-white fw-bold" state={{ from: `/Dco/requestDetails/${id}` }}>Edit Request
                            </Link>
                        </button>
                        <button type='button' className="btn btn-success fw-bold text-white" onClick={() => navigate(`/Dco/GenerateReport/${id}`, { state: { from: `/Dco/requestDetails/${id}` } })}>
                            Generate ROA
                        </button>
                        <button className="btn btn-danger fw-bold">
                            <Link to={backRoute} type="button" className="btn p-0 border-0 d-flex align-items-center gap-2">
                                <span className='text-white fw-bold ps-4 pe-4'>Back</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ArfData