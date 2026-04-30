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
                            <div className='row p-3'>
                                <span className='fs-3 px-1 d-flex justify-items-center fw-bold'><i className='bi bi-list-check fs-2 me-2 text-success' />Request Details</span>
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

                                    </div>
                                </div>
                            </div>

                            {/*Client Information */}
                            <div className='row p-3'>
                                <span className='fs-3 px-1 d-flex justify-items-center fw-bold'><i className='bi bi-person fs-2 me-2 text-success ' />Customer Information</span>
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
                                <span className='fs-3 px-1 d-flex justify-items-center fw-bold'>
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
                        <span className='fs-3 px-1 d-flex justify-items-center fw-bold'>
                            <i className='bi bi-file-medical fs-2 me-2 text-danger' />
                            Specimen / Quantity Submitted
                        </span>
                    </div>
                    <div className='p-3'>
                        {requestData ? (
                            <div>
                                <h4 className=' mb-0'>Species:</h4>
                                <div className='row g-3 mt-1'>
                                    {specimenList.map((specimen, index) => (
                                        <div className='col-md-3' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.specimen).includes(specimen) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
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

                    {requestData ? (
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
                    ) : (
                        <p>Loading user details...</p>
                    )}


                    <div className='p-3'>
                        {requestData ? (
                            <div>
                                <h4 className=' mb-0'>Specimen:</h4>
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
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.specimenPart).includes(specimen) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
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
                    <div className='row p-3 pb-0'>
                        <span className='fs-3 px-1 d-flex justify-items-center fw-bold'>
                            <i className='bi bi-clipboard2-pulse fs-2 me-2 text-danger' />
                            Examination Requested
                        </span>
                    </div>
                    {requestData ? (
                        <div className='p-3'>
                            <h4 className=' mb-0'>Pathology:</h4>
                            <div className='row g-3 mt-1  '>
                                {pathologyList.map((pathology, index) => (
                                    <div className='col-md-auto' key={index}>
                                        <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.pathologyList).includes(pathology) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                            <input type='checkbox' className='form-check-input border border-dark me-3' value={pathology} checked={(requestData.pathologyList).includes(pathology)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                            <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{pathology}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='container-fluid border border-secondary border-1 mt-3'></div>

                            <h4 className=' mb-0 mt-3'>Bacteriology:</h4>
                            <div className='row g-1 mt-1'>
                                <div className='col-7'>
                                    <span className='text-primary  border-bottom border-primary col-auto fs-5 '>Isolation & Identification</span>
                                    <div className='row g-1 gap-2 mt-2'>
                                        {isoAndIdenList.map((isoAndIdenList, index) => (
                                            <div key={index}>
                                                <div className={`d-flex align-items-center p-2 rounded shadow-sm border  ${(requestData.isoAndIdenList).includes(isoAndIdenList) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                    <input type='checkbox' className='form-check-input border border-dark me-3' value={isoAndIdenList} checked={(requestData.isoAndIdenList).includes(isoAndIdenList)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                    <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{isoAndIdenList}</label>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>

                                <div className='col-5 ps-5'>
                                    <span className='mb-1 text-primary  border-bottom border-primary col-auto fs-5'>Rapid Plate Test</span>
                                    <div className='row g-1 gap-2 mt-2'>
                                        {rapidPlateTest.map((rapidPlateTest, index) => (
                                            <div className='col-5' key={index}>
                                                <div className={`d-flex align-items-center p-2 rounded shadow-sm border  ${(requestData.rapidPlateTest).includes(rapidPlateTest) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                    <input type='checkbox' className='form-check-input border border-dark me-3' value={rapidPlateTest} checked={(requestData.rapidPlateTest).includes(rapidPlateTest)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                    <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{rapidPlateTest}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='container-fluid border border-secondary border-1 mt-3'></div>

                            <h4 className=' mb-0 mt-3'>Parasitology:</h4>
                            <div className='row g-1 mt-1'>
                                <div className='col-4'>
                                    <span className='text-primary  border-bottom border-primary col-auto fs-5 '>Fecalysis</span>
                                    <div className='row g-1 gap-2 mt-2'>
                                        {fecalysisList.map((fecalysis, index) => (
                                            <div key={index}>
                                                <div className={`d-flex align-items-center p-2 rounded shadow-sm border  ${(requestData.fecalysis).includes(fecalysis) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                    <input type='checkbox' className='form-check-input border border-dark me-3' value={fecalysis} checked={(requestData.fecalysis).includes(fecalysis)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                    <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{fecalysis}</label>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>

                                <div className='col-3 ps-5'>
                                    <span className='mb-1 text-primary  border-bottom border-primary col-auto fs-5'>Parasite Identification</span>
                                    <div className='row g-1 gap-2 mt-2'>
                                        {parasiteIden.map((parasite, index) => (
                                            <div className='col-auto' key={index}>
                                                <div className={`d-flex align-items-center p-2 rounded shadow-sm border  ${(requestData.parasiteIden).includes(parasite) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                    <input type='checkbox' className='form-check-input border border-dark me-3' value={parasite} checked={(requestData.parasiteIden).includes(parasite)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                    <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{parasite}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='col-4 ps-5'>
                                    <span className='mb-1 text-primary  border-bottom border-primary col-auto fs-5'>Blood Parasite Examination</span>
                                    <div className='row g-1 gap-2 mt-2'>
                                        {bloodParasiteExam.map((bloodParasiteExam, index) => (
                                            <div className='col-12' key={index}>
                                                <div className={`d-flex align-items-center p-2 rounded shadow-sm border  ${(requestData.bloodParasiteExam).includes(bloodParasiteExam) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                    <input type='checkbox' className='form-check-input border border-dark me-3' value={bloodParasiteExam} checked={(requestData.bloodParasiteExam).includes(bloodParasiteExam)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                    <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{bloodParasiteExam}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='container-fluid border border-secondary border-1 mt-3'></div>

                            <h4 className=' mb-0 mt-3'>Virology:</h4>
                            <div className='row g-3 mt-1 gap-2'>
                                {virologyList.map((virology, index) => (
                                    <div className='col-md-5' key={index}>
                                        <div className={`d-flex align-items-center p-3 rounded shadow-sm border  fs-6 ${(requestData.virologyList).includes(virology) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                            <input type='checkbox' className='form-check-input border border-dark me-3' value={virology} checked={(requestData.virologyList).includes(virology)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                            <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{virology}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className='col-auto mt-3 mb-3'>
                                <span className='text-primary fw-bold border-bottom border-primary col-auto fs-5'>Enzyme-Linked Immunosorbent Assay (ELISA)</span>
                                <div className='row g-3 gap-1 mt-1'>
                                    {elisaList.map((elisa, index) => (
                                        <div className='col-5' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border  fs-6 ${(requestData.elisaList).includes(elisa) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={elisa} checked={(requestData.elisaList).includes(elisa)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{elisa}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <span className='text-primary fw-bold border-bottom border-primary col-auto fs-5'>Polymerase Chain Reaction (PCR):</span>
                            <div className='row g-3 mt-1 gap-2'>
                                {pcrList.map((pcr, index) => (
                                    <div className='col-md-5' key={index}>
                                        <div className={`d-flex align-items-center p-3 rounded shadow-sm border  fs-6 ${(requestData.pcrList).includes(pcr) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                            <input type='checkbox' className='form-check-input border border-dark me-3' value={pcr} checked={(requestData.pcrList).includes(pcr)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                            <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{pcr}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='container-fluid border border-secondary border-1 mt-3'></div>

                            <h4 className=' mb-0 mt-3'>Purpose:</h4>
                            <div className='col-auto'>
                                <div className='row g-3 mt-1 gap-1'>
                                    {purposeList.map((purpose, index) => (
                                        <div className='col-5' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border  fs-6 ${(requestData.purposeList).includes(purpose) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={purpose} checked={(requestData.purposeList).includes(purpose)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{purpose}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ) : (
                        <p>Loading user details...</p>
                    )}

                    {requestData ? (
                        <>
                            {/*Sample Remarks*/}
                            <div className='row p-3 pb-0'>
                                <span className='fs-3 px-1 d-flex justify-items-center fw-bold'>
                                    <i className='bi bi-chat-left-quote fs-2 me-2 text-primary ' />
                                    Assessment
                                </span>
                            </div>
                            <div className='p-3'>
                                {requestData ? (
                                    <div>
                                        <h4 className=' mb-0'>1. Sample Labeling</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {sampleLabel.map((label, index) => (
                                                <div className='col-md-3' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.sampleLabel).includes(label) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={label} checked={(requestData.sampleLabel).includes(label)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{label}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <h4 className=' mb-0 mt-3'>2. Quantity of Sample</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {quantityOfSample.map((quantityOfSample, index) => (
                                                <div className='col-md-4' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.quantityOfSample).includes(quantityOfSample) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={quantityOfSample} checked={(requestData.quantityOfSample).includes(quantityOfSample)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{quantityOfSample}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <h4 className=' mb-0 mt-3'>3. Proper preservation used for sample type</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {preservationUsed.map((preservationUsed, index) => (
                                                <div className='col-md-7' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.preservationUsed).includes(preservationUsed) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={preservationUsed} checked={(requestData.preservationUsed).includes(preservationUsed)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{preservationUsed}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h4 className=' mb-0 mt-3'>4. Proper Transport</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {transport.map((transport, index) => (
                                                <div className='col-md-6' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.transport).includes(transport) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={transport} checked={(requestData.transport).includes(transport)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{transport}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <h4 className=' mb-0 mt-3'>5. State of sample when it reached the laboratory</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {stateOfSample.map((stateOfSample, index) => (
                                                <div className='col-md-5' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.stateOfSample).includes(stateOfSample) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={stateOfSample} checked={(requestData.stateOfSample).includes(stateOfSample)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{stateOfSample}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                ) : (
                                    <p>Loading user details...</p>
                                )}
                            </div>
                        </>
                    ) : (
                        <p>Loading user details...{/* Or "User not found" if you prefer */}</p>
                    )}

                    {requestData ? (
                        <>
                            <div className='row p-3 pb-0'>

                                <div className='fs-3 px-1 d-flex justify-items-center align-items-center fw-bold'>
                                    <span class="material-symbols-outlined fs-2 me-1 text-primary ">
                                        grading
                                    </span>
                                    Review of Request
                                </div>

                            </div>
                            <div className='row m-1'>
                                <div className='col-6'>
                                    <div className='card pt-2 pb-2 ps-3 mb-3 shadow-sm'>
                                        <span className='fw-bold text-secondary'>Sample Storage</span>
                                        <span className='fs-5 fw-semibold'>{requestData.sampleStorage?.join(', ') || '-'}</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                        <span className='fw-bold text-secondary'>Sample Retention</span>
                                        <span className='fs-5 fw-semibold'>{requestData.sampleRetentionDate || '-'}</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                        <span className='fw-bold text-secondary'>Sample Storage Location</span>
                                        <span className='fs-5 fw-semibold'>{requestData.sampleStorageLocation || '-'}</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                        <span className='fw-bold text-secondary'>Sample Disposal Date</span>
                                        <span className='fs-5 fw-semibold'>{formatDate(requestData.sampleDisposalDate) || '-'}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading user details...{/* Or "User not found" if you prefer */}</p>
                    )}



                    <div className="d-flex flex-wrap gap-2 justify-content-center pb-4 mt-4">
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