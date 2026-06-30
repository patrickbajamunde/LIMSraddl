import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import './styles/arfData.css'
import Arf from '../generatePdf/Arf'


function RabiesData({requestData, setRequestData, id}) {


    const location = useLocation();
    const backRoute = location.state?.from || "/Dco/Walkin/";
    const navigate = useNavigate();


    function formatDate(dateStr) {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const specimenList = [
        "Feline",
        "Canine",
        "Others",
    ]

    const sexList = [
        "Male",
        "Female"
    ]

    const animalResidence = [
        "Stray",
        "Home"
    ]

    const mannerOfDeath = [
        "Euthanasia",
        "Found Dead",
        "Others"
    ]

    const vacHistory = [
        "Vaccinated",
        "Unvaccinated",
        "Unknown",
        "Outdated"
    ]

    const damVaccinated = [
        "Yes",
        "No",
        "Unknown"
    ]

    const contactWithAnimals = [
        "Household",
        "Pound",
        "Neighborhood"
    ]

    const animalCondition = [
        "Confined in household",
        "Free-roaming and owned",
        "Stray"
    ]

    const observedChanges = [
        "Aimless Running",
        "Apprehensive Watchful look",
        "Convulsion/Seizure",
        "Drooling Saliva",
        "Eating Inanimate Objects",
        "Lethargy/Weakness",
        "Paralysis",
        "Restlesness",
        "Sudden Isolation/Hiding",
        "Unprovoked Aggressiveness"
    ]

    const otherChanges = [
        "Diarrhea",
        "Vomiting",
        "Inappetence",
        "Others"
    ]

    const purposeList = [
        "Diagnostics",
        "Surveillance",
        "Confirmatory",
        "Others",
    ]

    const contactWithOtherAnimals = [
        "Yes",
        "No"
    ]

    const placeOfbiting = [
        "Household",
        "Public area (specify)"
    ]

    const siteOfbite = [
        "Head",
        "Low extremity",
        "Neck",
        "Upper extremity",
        "Trunk",
        "Other parts"
    ]

    const natureOfbite = [
        "Mild Scratch",
        "Others",
        "Severe/Multiple"
    ]

    const treatments = [
        "Soap & Water",
        "Iodine",
        "Alcohol",
        "Traditional Methods, Specify"
    ]

    const vaccine = [
        "Tetanus toxoid",
        "Anti-tetanus serum",
        "Antibiotic"
    ]

    const sampleLabel = [
        "Clear and properly labeled"
    ]

    const typeOfSample = [
        "Head",
        "Brain/Organ",
        "Whole Body",
        "Others"
    ]


    const transport = [
        "Triple Packaging",
        "Use of leak proof container",
        "Use of proper storage (styrobox or cooler w/ iced gel pack or ice)",
    ]

    const stateOfSample = [
        "All samples are sterile and free of contamination ",
        "Burnt"
    ]

    const rejectionOfSamples = [
        "Improper collection/transport/storage",
        "Unlabeled/mislabeled",
        "Insufficient samples for the test requested",
        "Improper/incomplete information/no forms attached",
        "Decomposition state",
        "Non-brain tissue, improperly fixed",
        "Sample contamination"
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
                                <div className="rounded-circle justify-content-center d-flex align-items-center bg-white bg-opacity-25 mt-3"
                                    style={{ width: '80px', height: '80px' }}>
                                    <i className='bi bi-file-earmark-text fs-2' />
                                </div>
                                <div className="col ">
                                    <div className="row">
                                        <span className='fw-bold fs-2 '>Analysis Request Form</span>
                                        <span className='fs-5 text-decoration-underline'>Request ID: {requestData.requestId}</span>
                                        <span className='fs-5 text-decoration-underline'>Laboratory Accession Number: {requestData.labAccessionNumber}</span>
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
                                            <span className='fs-5 fw-semibold'>{requestData.data.receivedBy || '-'}</span>
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
                                        <span>{requestData.data.sampleDisposalDate}</span>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className='row pt-3 pb-3 border-start border-4 border-danger bg-danger bg-opacity-25 rounded'>
                                        <span className='fw-bold fs-5 text-danger'>Report Due Date</span>
                                        <span>{formatDate(requestData.data.reportDue)}</span>
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
                            Animal Profile
                        </span>
                    </div>
                    <div className='p-3'>
                        {requestData ? (
                            <div>
                                <h4 className=' mb-0'>Species:</h4>
                                <div className='row g-3 mt-1'>
                                    <div className='btn-group' role='group'>
                                        {specimenList.map((specimenList, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="checkbox" name="specimenList" id={`specimenList-${index}`} value={specimenList} checked={(requestData.data.specimen || []).some(item => item.name === specimenList)} />
                                                <label className={`btn shadow-sm px-5 py-2 fw-bold fs-5 ${(requestData.data.specimen).some(item => item.name === specimenList) ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={(requestData.data.specimen).some(item => item.name === specimenList) ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{specimenList}</label>
                                            </>
                                        ))}
                                    </div>
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
                                    <span className='fs-5 fw-semibold'>{requestData.data.specimenAge || '-'}</span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                    <span className='fw-bold text-secondary'>BREED</span>
                                    <span className='fs-5 fw-semibold'>{requestData.data.specimenBreed || '-'}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading user details...</p>
                    )}

                    <div className='container-fluid border border-secondary border-1 mt-3'></div>

                    <div className='p-3'>
                        {requestData ? (
                            <div>
                                <h4 className=' mb-0 fw-bold'>Animal Residence:</h4>
                                <div className='row mt-3'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Residence of Animal for the Last 3 Months</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.animalResidence?.join(', ') || '-'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='row m-1 p-1 gap-5'>
                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>NO</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.animalNo}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />BARANGAY</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.animalBarangay || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'><i className='bi bi-envelope-fill me-2' />PROVINCE</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.animalProvince || '-'}</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />STREET</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.animalStreet || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'>CITY/MUNICIPALITY</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.animalCity || '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Sex</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.sex?.join(', ') || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-fluid border border-secondary border-1 mt-3'></div>
                                <h4 className=' mb-0 fw-bold'>Manner of Death:</h4>
                                <div className='row g-3 mt-1  '>
                                    {mannerOfDeath.map((mannerOfDeath, index) => (
                                        <div className='col-md-auto' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.mannerOfDeath).some(item => item.name === mannerOfDeath) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={mannerOfDeath} checked={(requestData.data.mannerOfDeath).some(item => item.name === mannerOfDeath)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{mannerOfDeath}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <div className='row mt-3'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Date and time of death</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.dateTimeOfDeath || '-'}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Possible cause of death</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.causeOfDeath || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-fluid border border-secondary border-1 mt-3'></div>
                                <h4 className=' mb-0 fw-bold'>Animal Vaccination History</h4>
                                <div className='row g-3 mt-1  '>
                                    {vacHistory.map((vacHistory, index) => (
                                        <div className='col-md-auto' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.vacHistory).includes(vacHistory) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={vacHistory} checked={(requestData.data.vacHistory).includes(vacHistory)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{vacHistory}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Date of vaccination</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.dataOfVaccine || '-'}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Type of vaccine</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.vaccineType || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-fluid border border-secondary border-1 mt-3'></div>
                                <h4 className=' mb-0 fw-bold'>Dam vaccinated (for puppies up to 6 months old)</h4>
                                <div className='row g-3 mt-1  '>
                                    {damVaccinated.map((damVaccinated, index) => (
                                        <div className='col-md-auto' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.damVaccinated).includes(damVaccinated) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={damVaccinated} checked={(requestData.data.damVaccinated).includes(damVaccinated)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{damVaccinated}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='container-fluid border border-secondary border-1 mt-3'></div>
                                <h4 className=' mb-0 fw-bold mt-3'>Contact with other animals</h4>
                                <div className='row g-3 mt-1 mb-2'>
                                    <div className='btn-group col-3' role='group'>
                                        {contactWithOtherAnimals.map((contact, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="radio" name="contactWithOtherAnimals" id={`contactWithOtherAnimals-${index}`} value={contact} checked={requestData.data.contactWithOtherAnimals === contact} />
                                                <label className={`btn shadow-sm  fw-bold fs-6 ${requestData.data.contactWithOtherAnimals === contact ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={requestData.data.contactWithOtherAnimals === contact ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{contact}</label>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <span className='fw-bold mb-0 mt-3 fs-5'>*if Yes:</span>
                                <div className='row g-3 mt-1  '>
                                    {contactWithAnimals.map((contactWithAnimals, index) => (
                                        <div className='col-md-3' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.contactWithAnimals).includes(contactWithAnimals) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={contactWithAnimals} checked={(requestData.data.contactWithAnimals).includes(contactWithAnimals)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{contactWithAnimals}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h4 className=' mb-0 fw-bold mt-3'>Condition of animal before biting incident</h4>
                                <div className='row g-3 mt-1  '>
                                    {animalCondition.map((animalCondition, index) => (
                                        <div className='col-md-3' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.animalCondition).includes(animalCondition) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={animalCondition} checked={(requestData.data.animalCondition).includes(animalCondition)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{animalCondition}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <h4 className=' mb-0 fw-bold mt-3'>Changes two weeks prior to or after biting incident</h4>
                                <div className='row g-3 mt-1 mb-2'>
                                    <div className='btn-group col-3' role='group'>
                                        {contactWithOtherAnimals.map((contact, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="radio" name="changesAfterBiting" id={`contactWithOtherAnimals-${index}`} value={contact} checked={requestData.data.changesAfterBiting === contact} />
                                                <label className={`btn shadow-sm  fw-bold fs-6 ${requestData.data.changesAfterBiting === contact ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={requestData.data.changesAfterBiting === contact ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{contact}</label>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <span className='fw-bold fs-5'>*If Yes, check changes observed</span>
                                <div className='row g-3 mt-1'>
                                    {observedChanges.map((observedChanges, index) => (
                                        <div className='col-md-4' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.observedChanges).includes(observedChanges) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={observedChanges} checked={(requestData.data.observedChanges).includes(observedChanges)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{observedChanges}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h4 className=' mb-0 fw-bold mt-3'>Other signs of illness two weeks prior to or after biting incident</h4>
                                <div className='row g-3 mt-1 mb-2'>
                                    <div className='btn-group col-3' role='group'>
                                        {contactWithOtherAnimals.map((contact, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="radio" name="otherSigns" id={`contactWithOtherAnimals-${index}`} value={contact} checked={requestData.data.otherSigns === contact} />
                                                <label className={`btn shadow-sm  fw-bold fs-6 ${requestData.data.otherSigns === contact ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={requestData.data.otherSigns === contact ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{contact}</label>
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <span className=' fs-5 fw-bold'>If Yes, check changes observed</span>
                                <div className='row g-3 mt-1'>
                                    {otherChanges.map((otherChanges, index) => (
                                        <div className='col-md-2' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.otherChanges).includes(otherChanges) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={otherChanges} checked={(requestData.data.otherChanges).includes(otherChanges)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{otherChanges}</label>
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
                            <i className='bi bi-file-medical fs-2 me-2 text-danger' />
                            Purpose
                        </span>
                    </div>
                    {requestData ? (
                        <div className='p-3'>
                            <div className='row g-3 mt-1'>
                                {purposeList.map((purposeList, index) => (
                                    <div className='col-md-2' key={index}>
                                        <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.purposeList).includes(purposeList) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                            <input type='checkbox' className='form-check-input border border-dark me-3' value={purposeList} checked={(requestData.data.purposeList).includes(purposeList)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                            <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{purposeList}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>Loading user details...</p>
                    )}

                    <div className='row p-3 pb-0'>
                        <span className='fs-3 px-1 d-flex justify-items-center fw-bold'>
                            <i className='bi bi-clipboard2-pulse fs-2 me-2 text-danger' />
                            Victim Profile
                        </span>
                    </div>
                    <div className='p-3'>
                        {requestData ? (
                            <>
                                <div className='row m-1 p-1 gap-5'>
                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>Name</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimName || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />Age</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimAge || '-'}</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />Contact Number</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimContact || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'>Sex</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimGender || '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className=' mb-0 fw-bold mt-3'> Consulted at RHU / Hospital</h5>
                                <div className='row g-3 mt-1 mb-2'>
                                    <div className='btn-group col-3' role='group'>
                                        {contactWithOtherAnimals.map((contact, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="radio" name="consulted" id={`contactWithOtherAnimals-${index}`} value={contact} checked={requestData.data.consulted === contact} />
                                                <label className={`btn shadow-sm  fw-bold fs-6 ${requestData.data.consulted === contact ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={requestData.data.consulted === contact ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{contact}</label>
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <h5 className=' mb-0 fw-bold mt-3'> Address</h5>
                                <div className='row m-1 p-1 gap-5'>
                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>NO</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimNo || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />BARANGAY</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimBarangay || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'><i className='bi bi-envelope-fill me-2' />PROVINCE</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimProvince || '-'}</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />STREET</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimStreet || '-'}</span>
                                            </div>
                                            <div className="card pt-2 pb-2 ps-3">
                                                <span className='fw-bold text-secondary'>CITY/MUNICIPALITY</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.victimCity || '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h5 className=' mb-0 fw-bold mt-3'> Pre-exposure rabies vaccination given?</h5>
                                <div className='row g-3 mt-1 mb-2'>
                                    <div className='btn-group col-3' role='group'>
                                        {damVaccinated.map((contact, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="radio" name="preExposure" id={`contactWithOtherAnimals-${index}`} value={contact} checked={requestData.data.conpreExposuresulted === contact} />
                                                <label className={`btn shadow-sm  fw-bold fs-6 ${requestData.data.preExposure === contact ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={requestData.data.preExposure === contact ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{contact}</label>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className='container-fluid border border-secondary border-1 mt-3'></div>
                                <h4 className=' mb-0 fw-bold mt-3'>Circumstances of Bite</h4>
                                <div className='row m-1'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-2 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Date of Bite</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.dateOfbite || '-'}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Time of Bite</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.timeOfbite || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='fw-bold '>Bite Provoked</h5>
                                <div className='row g-3 mt-1 mb-2'>
                                    <div className='btn-group col-3' role='group'>
                                        {contactWithOtherAnimals.map((contact, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="radio" name="biteProvoked" id={`contactWithOtherAnimals-${index}`} value={contact} checked={requestData.data.biteProvoked === contact} />
                                                <label className={`btn shadow-sm  fw-bold fs-6 ${requestData.data.biteProvoked === contact ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={requestData.data.biteProvoked === contact ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{contact}</label>
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <h5 className='fw-bold '>Place of biting incident</h5>
                                <div className='row g-3 mt-1'>
                                    {placeOfbiting.map((placeOfbiting, index) => (
                                        <div className='col-md-3' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.placeOfbiting)?.includes(placeOfbiting) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={placeOfbiting} checked={(requestData.data.placeOfbiting)?.includes(placeOfbiting)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{placeOfbiting}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h5 className='ms-2 mt-3'> Geographic Location</h5>
                                <div className='row m-1 p-1 gap-5'>
                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>City / Municipality</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.cityBite || '-'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'><i className='bi bi-geo-alt-fill me-2' />Province</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.provinceBite || '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className='fw-bold mt-3'>Site of Bite</h5>
                                <div className='row g-3'>
                                    {siteOfbite.map((bite, index) => (
                                        <div className='col-md-4' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.siteOfbite)?.includes(bite) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={bite} checked={(requestData.data.siteOfbite)?.includes(bite)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{bite}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h5 className='fw-bold mt-4'>Nature of bite</h5>
                                <div className='row g-3'>
                                    {natureOfbite.map((bite, index) => (
                                        <div className='col-md-4' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.natureOfbite)?.includes(bite) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={bite} checked={(requestData.data.natureOfbite)?.includes(bite)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{bite}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h5 className='fw-bold mt-4'>Other Victims</h5>
                                <div className='row g-3 mt- mb-2'>
                                    <div className='btn-group col-3' role='group'>
                                        {contactWithOtherAnimals.map((contact, index) => (
                                            <>
                                                <input className="btn-check border border-dark " type="radio" name="otherVictims" id={`contactWithOtherAnimals-${index}`} value={contact} checked={requestData.data.otherVictims === contact} />
                                                <label className={`btn shadow-sm  fw-bold fs-6 ${requestData.data.otherVictims === contact ? ' border-primary text-primary bg-primary bg-opacity-10' : 'border border-primary text-secondary'}`} style={requestData.data.otherVictims === contact ? { borderBottomWidth: '5px' } : {}} htmlFor={`specimenList-${index}`}>{contact}</label>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className='container-fluid border border-secondary border-1 mt-3'></div>
                                <h4 className='fw-bold  '>Treatment Received</h4>
                                <div className='row g-3'>
                                    {treatments.map((treatments, index) => (
                                        <div className='col-md-5' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.treatments)?.includes(treatments) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={treatments} checked={(requestData.data.treatments)?.includes(treatments)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{treatments}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='row g-3 mt-3'>
                                    {vaccine.map((vaccine, index) => (
                                        <div className='col-md-5' key={index}>
                                            <div className={`d-flex align-items-center p-3 rounded shadow-sm border fs-6 ${(requestData.data.vaccine)?.includes(vaccine) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                <input type='checkbox' className='form-check-input border border-dark me-3' value={vaccine} checked={(requestData.data.vaccine)?.includes(vaccine)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{vaccine}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='row mt-4'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Vaccine Brand</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.vaccineBrand || '-'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row m-1 p-1 gap-4'>
                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>HRIG</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.HRIG || '-'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>ERIG</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.ERIG || '-'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='row g-3'>
                                            <div className='card pt-2 pb-2 ps-3'>
                                                <span className='fw-bold text-secondary'>Others</span>
                                                <span className='fs-5 fw-semibold'>{requestData.data.Others || '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Interviewer's Name</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.interviewer || '-'}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='card pt-2 pb-1 ps-3 mb-3 shadow-sm'>
                                            <span className='fw-bold text-secondary'>Date</span>
                                            <span className='fs-5 fw-semibold'>{requestData.data.interviewerDate || '-'}</span>
                                        </div>
                                    </div>
                                </div>

                            </>
                        ) : (
                            <p>Loading user details...</p>
                        )}
                    </div>

                    {requestData ? (
                        <>

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
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.data.sampleLabel).includes(label) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={label} checked={(requestData.data.sampleLabel).includes(label)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{label}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>



                                        <h4 className=' mb-0 mt-3'>2. Type of Sample</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {typeOfSample.map((sample, index) => (
                                                <div className='col-md-auto' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.data.typeOfSample)?.includes(sample) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={sample} checked={(requestData.data.typeOfSample)?.includes(sample)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{sample}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h4 className=' mb-0 mt-3'>3. Proper Transport</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {transport.map((transport, index) => (
                                                <div className='col-md-auto' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.data.transport)?.includes(transport) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={transport} checked={(requestData.data.transport).includes(transport)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                                        <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{transport}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <h4 className=' mb-0 mt-3'>4. State of sample when it reached the laboratory</h4>
                                        <div className='row g-3 mt-1 ms-3'>
                                            {stateOfSample.map((stateOfSample, index) => (
                                                <div className='col-md-5' key={index}>
                                                    <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.data.stateOfSample)?.includes(stateOfSample) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                                        <input type='checkbox' className='form-check-input border border-dark me-3' value={stateOfSample} checked={(requestData.data.stateOfSample)?.includes(stateOfSample)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
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
                        <p>Loading user details...</p>
                    )}
                    {requestData ? (
                        <>
                            <div className='row p-3 pb-0'>

                                <div className='fs-3 px-1 d-flex justify-items-center align-items-center fw-bold'>
                                    <i class="bi bi-bookmark-x text-danger"></i>
                                    Criteria for Rejection
                                </div>

                            </div>
                            <div className='row g-3 mt-1 ms-3'>
                                {rejectionOfSamples.map((sample, index) => (
                                    <div className='col-md-5' key={index}>
                                        <div className={`d-flex align-items-center p-2 rounded shadow-sm border ${(requestData.data.rejectionOfSamples).includes(sample) ? 'border-primary bg-primary bg-opacity-10' : ''}`}>
                                            <input type='checkbox' className='form-check-input border border-dark me-3' value={sample} checked={(requestData.data.rejectionOfSamples).includes(sample)} disabled style={{ opacity: 1, pointerEvents: 'none' }} />
                                            <label className='form-check-label m-0' style={{ opacity: 1, pointerEvents: 'none' }}>{sample}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>Loading user details...</p>
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
                                        <span className='fs-5 fw-semibold'>{requestData.data.sampleStorage?.join(', ') || '-'}</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                        <span className='fw-bold text-secondary'>Sample Retention</span>
                                        <span className='fs-5 fw-semibold'>{requestData.data.sampleRetentionDate || '-'}</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                        <span className='fw-bold text-secondary'>Sample Storage Location</span>
                                        <span className='fs-5 fw-semibold'>{requestData.data.sampleStorageLocation || '-'}</span>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='card pt-2 pb-2 ps-3 shadow-sm'>
                                        <span className='fw-bold text-secondary'>Sample Disposal Date</span>
                                        <span className='fs-5 fw-semibold'>{requestData.data.sampleDisposalDate || '-'}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading user details...</p>
                    )}



                    <div className="d-flex flex-wrap gap-2 justify-content-center pb-4 mt-4">
                        <div className="btn btn-primary text-white">
                            <Arf requestId={requestData ? requestData._id : null}
                                icon={<span className='text-white fw-bold'>Generate PDF</span>}
                            />
                        </div>
                        <button className="btn btn-success fw-bold">
                            <Link
                                to={`/Dco/updateRequest/${id}`}
                                type="button"
                                className="btn p-0 border-0 text-white fw-bold" state={{ from: `/Dco/requestData/${id}` }}>Edit Request
                            </Link>
                        </button>
                        <button type='button' className="btn btn-success fw-bold text-white" onClick={() => navigate(`/Dco/GenerateReport/${id}`, { state: { from: `/Dco/requestData/${id}` } })}>
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

export default RabiesData