import React, { use, useEffect, useState } from 'react'
import '../styles/arf.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Page2({ request, inputHandler, checkboxHandler }) {

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

    const damVaccinated = [
        "Yes",
        "No",
        "Unknown"
    ]

    const contactWithOtherAnimals = [
        "Yes",
        "No"
    ]

    return (
        <>
            

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <h5 className='mb-2 text-primary fw-bold'>VICTIM PROFILE</h5>
                <div className='row g-4'>
                    <div className='col-md-6'>
                        <label className='form-label'>Name:</label>
                        <input type='text' className='form-control border border-dark' name='victimName' value={request.data.victimName} onChange={inputHandler} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Contact Number:</label>
                        <input type='text' className='form-control border border-dark' name='victimContact' value={request.data.victimContact} onChange={inputHandler} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Age:</label>
                        <input type='text' className='form-control border border-dark' name='victimAge' value={request.data.victimAge} onChange={inputHandler} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Sex:</label>
                        <select id='victimGender' name="victimGender" onChange={inputHandler} value={request.data.victimGender} className='form-select border-dark'>
                            <option value="">Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className='row g-2 mt-3'>
                    <span className='mb-2 text-primary fw-bold'>Consulted at RHU/Hospital</span>
                    <div className='btn-group col-5' role='group'>
                        {contactWithOtherAnimals.map((contactWithOtherAnimals, index) => (
                            <>
                                <input className="btn-check border border-dark " type="radio" name="consulted" id={`consulted-${index}`} onChange={inputHandler} value={contactWithOtherAnimals} checked={request.data.consulted === contactWithOtherAnimals} />
                                <label className="btn btn-outline-primary" htmlFor={`consulted-${index}`}>{contactWithOtherAnimals}</label>
                            </>
                        ))}
                    </div>
                </div>
                <span className='mb-2 text-primary fw-bold mt-4 '>ADDRESS</span>
                <div className='row g-4'>
                    <div className='col-md-6'>
                        <label className='form-label'> No.</label>
                        <input className='form-control border border-dark' name='victimNo' onChange={inputHandler} value={request.data.victimNo} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Street</label>
                        <input className='form-control border border-dark' name='victimStreet' onChange={inputHandler} value={request.data.victimStreet} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Barangay</label>
                        <input className='form-control border border-dark' name='victimBarangay' onChange={inputHandler} value={request.data.victimBarangay} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>City/Municipality</label>
                        <input className='form-control border border-dark' name='victimCity' onChange={inputHandler} value={request.data.victimCity} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Province</label>
                        <input className='form-control border border-dark' name='victimProvince' onChange={inputHandler} value={request.data.victimProvince} />
                    </div>
                </div>

                <div className='row g-2 mt-3'>
                    <span className='mb-2 text-primary fw-bold'>Pre-Exposure rabies vaccination given?</span>
                    <div className='btn-group col-5' role='group'>
                        {damVaccinated.map((preExposure, index) => (
                            <>
                                <input className="btn-check border border-primary " type="radio" name="preExposure" id={`preExposure-${index}`} onChange={inputHandler} value={preExposure} checked={request.data.preExposure === preExposure}/>
                                <label className="btn btn-outline-primary py-1" htmlFor={`preExposure-${index}`}>{preExposure}</label>
                            </>
                        ))}
                    </div>
                </div>

            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <span className='mb-4 text-primary fw-bold'>Circumstance of Bite</span>
                <div className='row g-4'>
                    <div className='col-md-6'>
                        <label className='form-label'>Date of Bite</label>
                        <input type="date" className='form-control border-dark' name='dateOfbite' onChange={inputHandler} value={request.data.dateOfbite} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Time of Bite</label>
                        <input type="time" className='form-control border-dark' name='timeOfbite' onChange={inputHandler} value={request.data.timeOfbite} />
                    </div>
                </div>

                <div className='row g-2 mt-3'>
                    <span className='mb-2 text-primary fw-bold'>Bite provoked</span>
                    <div className='btn-group col-5' role='group'>
                        {contactWithOtherAnimals.map((biteProvoked, index) => (
                            <>
                                <input className="btn-check border border-dark " type="radio" name="biteProvoked" id={`biteProvoked-${index}`} onChange={inputHandler} value={biteProvoked} checked={request.data.biteProvoked === biteProvoked} />
                                <label className="btn btn-outline-primary py-1" htmlFor={`biteProvoked-${index}`}>{biteProvoked}</label>
                            </>
                        ))}
                    </div>
                </div>

                <div className='row g-1 mt-3'>
                    <span className='mb-2 text-primary fw-bold'>Place of biting incident</span>
                    {placeOfbiting.map((placeOfbiting, index) => (
                        <div className='form-check col-auto mt-0 me-5' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border border-dark' name='placeOfbiting' value={placeOfbiting} onChange={checkboxHandler} checked={(request.data.placeOfbiting || []).includes(placeOfbiting)} />
                                <label className='form-check-label' htmlFor={`purpose-${index}`}>{placeOfbiting}</label>
                            </div>
                        </div>
                    ))}
                    <div>
                        <span className=' fw-bold'>Geographic Location</span>
                        <div className="col-auto ps-2">
                            <div className='row ps-1 gap-5 mt-2'>
                                <div className='col-auto pb-2 ps-1 gap-1 d-flex align-items-center border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                                    <label className='form-label mt-2'>City/Municipality:</label>
                                    <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='cityBite' onChange={inputHandler} value={request.data.cityBite} />
                                </div>
                                <div className='col-auto pb-2 ps-1 gap-1 d-flex align-items-center  border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                                    <label className='form-label mt-2'>Province:</label>
                                    <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='provinceBite' onChange={inputHandler} value={request.data.provinceBite} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row g-1 mt-3'>
                    <span className='mb-2 text-primary fw-bold'>Sites of Bite</span>
                    {siteOfbite.map((siteOfbite, index) => (
                        <div className='form-check col-5 mt-0 me-5' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border-dark' name='siteOfbite' value={siteOfbite} onChange={checkboxHandler} checked={(request.data.siteOfbite || []).includes(siteOfbite)} />
                                <label className='form-check-label' htmlFor={`siteOfbite-${index}`}>{siteOfbite}</label>
                                {siteOfbite === "Other parts" && (
                                    <input type='text' className='col-4 border-0 border-bottom border-dark' name='otherSiteOfbite' value={request.data.otherSiteOfbite} onChange={inputHandler} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='row g-1 mt-3'>
                    <span className='mb-2 text-primary fw-bold'>Nature of bite</span>
                    {natureOfbite.map((natureOfbite, index) => (
                        <div className='form-check col-5 mt-0 me-5' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border-dark' name='natureOfbite' value={natureOfbite} onChange={checkboxHandler} checked={(request.data.natureOfbite || []).includes(natureOfbite)} />
                                <label className='form-check-label' htmlFor={`natureOfbite-${index}`}>{natureOfbite}</label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='row g-1 mt-3'>
                    <span className='mb-2 text-primary fw-bold'>Other Victims</span>
                    <div className='btn-group col-5' role='group'>
                        {contactWithOtherAnimals.map((otherVictims, index) => (
                            <>
                                <input className="btn-check border border-dark " type="radio" name="otherVictims" id={`otherVictims-${index}`} onChange={inputHandler} value={otherVictims} checked={request.data.otherVictims === otherVictims} />
                                <label className="btn btn-outline-primary py-1" htmlFor={`otherVictims-${index}`}>{otherVictims}</label>
                            </>
                        ))}
                    </div>
                    <span className='mb-2 fw-bold'>*If Yes, Fill up a Victim Profile for eacg Victim</span>
                </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <span className='mb-2 text-primary fw-bold'>Treatment Received </span>
                <div className='row g-1 mt-1'>
                    {treatments.map((treatments, index) => (
                        <div className='form-check col-4 mt-0 me-5' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border-dark' name='treatments' value={treatments} onChange={checkboxHandler} checked={(request.data.treatments || []).includes(treatments)} />
                                <label className='form-check-label' htmlFor={`natureOfbite-${index}`}>{treatments}</label>
                            </div>
                        </div>
                    ))}
                </div>
                <span className='mb-2 fw-bold mt-3'>*Check all that applies </span>
                <div className='row g-1 mt-'>
                    {vaccine.map((vaccine, index) => (
                        <div className='form-check col-4 mt-0 me-5' key={index}>
                            <div className='d-flex algin-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border-dark' name='vaccine' value={vaccine} onChange={checkboxHandler} checked={(request.data.vaccine || []).includes(vaccine)} />
                                <label className='form-check-label' htmlFor={`vaccine-${index}`}>{vaccine}</label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='col-3 pb-2 ps-1 gap-1 d-flex align-items-center border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                    <label className='form-label mt-2'>Vaccine Brand:</label>
                    <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='vaccineBrand' onChange={inputHandler} value={request.data.vaccineBrand} />
                </div>

                <div className="col-auto ps-2">
                    <div className='row ps-1 gap-5 mt-2'>
                        <div className='col-auto pb-2 ps-1 gap-1 d-flex align-items-center border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                            <label className='form-label mt-2'>HRIG</label>
                            <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='HRIG' onChange={inputHandler} value={request.data.HRIG} />
                        </div>
                        <div className='col-auto pb-2 ps-1 gap-1 d-flex align-items-center  border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                            <label className='form-label mt-2'>ERIG:</label>
                            <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='ERIG' onChange={inputHandler} value={request.data.ERIG} />
                        </div>
                        <div className='col-auto pb-2 ps-1 gap-1 d-flex align-items-center  border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
                            <label className='form-label mt-2'>Others:</label>
                            <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='vaccineOthers' onChange={inputHandler} value={request.data.vaccineOthers} />
                        </div>
                    </div>
                </div>

                <div className='row g-4 mt-2'>
                    <div className='col-md-6'>
                        <label className='form-label'>Interviewer's Name:</label>
                        <input type="text" className='form-control border-dark' name='interviewer' onChange={inputHandler} value={request.data.interviewer} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Date:</label>
                        <input type="date" className='form-control border-dark' name='interviewDate' onChange={inputHandler} value={request.data.interviewDate} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Page2