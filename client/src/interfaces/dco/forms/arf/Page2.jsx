import React, { use, useEffect, useState } from 'react'
import '../styles/arf.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Page2({ request, inputHandler, checkboxHandler }) {

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
    return (
        <>
            <div className='row gx-3'>
                <div className="col-md-6">
                    <div className='card p-4 shadow-sm border'>
                        <h5 className='mb-4 text-primary fw-bold'>Origin of Samples:</h5>
                        <div className='col'>
                            <div>
                                <label className='form-label'>Owner/Farm</label>
                                <input type="text" className="form-control border border-dark" id="locOfFarm" name='locOfFarm' value={request.locOfFarm} onChange={inputHandler} placeholder="Owner/Farm Name" />
                            </div>

                            <div>
                                <label className='form-label'>Barangay</label>
                                <input type="email" className="form-control border border-dark" id="barangay" name='barangay' value={request.barangay} onChange={inputHandler} placeholder="example@email.com" />
                            </div>

                            <div>
                                <label className='form-label'>Municipality</label>
                                <input type="tel" className="form-control border border-dark" id="municipality" name='municipality' value={request.municipality || ''} onChange={inputHandler} placeholder="09XXXXXXXXX" />
                            </div>

                            <div>
                                <label className='form-label'>Province</label>
                                <input type="text" className="form-control border border-dark" id="province" name='province' value={request.province} onChange={inputHandler} placeholder="Province" />
                            </div>

                            <div>
                                <label className='form-label'>Contact No.</label>
                                <input type="tel" className="form-control border border-dark" id="contactNo" name='contactNo' value={request.contactNo || ''} onChange={inputHandler} placeholder="09XXXXXXXXX" />
                            </div>
                            <div>
                                <label className='form-label'>Email</label>
                                <input type="text" className="form-control border border-dark" id="email" name='email' value={request.email} onChange={inputHandler} placeholder="Street, Barangay, City" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className='card p-4 shadow-sm border '>
                        <h5 className='mb-4 text-primary fw-bold'>Submitted By:</h5>
                        <div className='col'>
                            <div className='col'>
                                <label className='form-label'>Name</label>
                                <input type="text" className="form-control border border-dark" id="clientName" name='clientName' value={request.clientName} onChange={inputHandler} placeholder="Full Name" />
                            </div>

                            <div>
                                <label className='form-label'>Address</label>
                                <input type="email" className="form-control border border-dark" id="clientAddress" name='clientAddress' value={request.clientAddress} onChange={inputHandler} placeholder="example@email.com" />
                            </div>

                            <div>
                                <label className='form-label'>Age</label>
                                <input type="tel" className="form-control border border-dark" id="clientAge" name='clientAge' value={request.clientAge} onChange={inputHandler} />
                            </div>

                            <div>
                                <label className='form-label'>Sex</label>
                                <select id='clientGender' name="clientGender" onChange={inputHandler} value={request.clientGender} className='form-select border-dark'>
                                    <option value="">Choose...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div>
                                <label className='form-label'>Contact No.</label>
                                <input type="tel" className="form-control border border-dark" id="clientContact" name='clientContact' value={request.clientContact || ''} onChange={inputHandler} placeholder="09XXXXXXXXX" />
                            </div>

                            <div>
                                <label className='form-label'>Email</label>
                                <input type="text" className="form-control border border-dark" id="clientEmail" name='clientEmail' value={request.clientEmail} onChange={inputHandler} placeholder="Street, Barangay, City" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/*Specimen / Quantity Submitted*/}

            <div className='card p-4 mb-3 mt-3 shadow-sm border'>
                <h5 className='mb-4 text-primary fw-bold'>Specimen/Quantity Submitted</h5>
                <div className='row g-1'>
                    <h5 className='fw-bold mb-0'>Species:</h5>
                    {specimenList.map((specimen, index) => (
                        <div className='form-check col-3 mt-0' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border border-dark' id={`specimen-${index}`} name='specimen' value={specimen} onChange={checkboxHandler} checked={(request.data.specimen || []).some(item => item.name === specimen)} />
                                <label className='form-check-label' htmlFor={`specimen-${index}`}>{specimen}:</label>
                                <input type='text' className='col-4 border-0 border-bottom border-dark ' data-specimen={specimen} data-field='specimen' onChange={inputHandler} value={(request.data.specimen || []).find(item => item.name === specimen)?.quantity || ''} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className='col-3 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                    <label className='form-label mt-2'>Age:</label>
                    <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='specimenAge' value={request.data.specimenAge} onChange={inputHandler} />
                </div>

                <div className='col-3 pb-2 ps-2 mb-4 border-start border-4 mt-3 border-primary bg-primary bg-opacity-25 rounded'>
                    <div className='row g-1 pt-2'>
                        <label className='form-label col-2'>Sex:</label>
                        {sexList.map((gender, index) => (
                            <div className='form-check col-3' key={index}>
                                <input type='checkbox' className='form-check-input border border-dark' name='sex' value={gender} onChange={checkboxHandler} checked={(request.data.sex || []).includes(gender)} />
                                <label className='form-check-label' htmlFor={`gender-${index}`}>{gender}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <h5 className='fw-bold mb-0'>Specimen:</h5>
                <div className='col-9 pb-2 ps-2 mb-3 border-start border-4 mt-3 border-primary bg-primary bg-opacity-25 rounded'>
                    <div className='d-flex align-items-center gap-3 pt-2'>
                        <label className='form-label mb-0 col-2'>Whole Animal:</label>
                        <div className='form-check col-3'>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border border-dark' name='wholeAnimal' value={wholeAnimal[0]} onChange={checkboxHandler} checked={(request.data.wholeAnimal || []).some(item => item.name === wholeAnimal[0])} />
                                <label className='form-check-label'>{wholeAnimal[0]}</label>
                                <input type='text' className='col-4 border-0 border-bottom border-dark bg-transparent' data-field="wholeAnimal" data-specimen={wholeAnimal[0]} onChange={inputHandler} value={(request.data.wholeAnimal || []).find(item => item.name === wholeAnimal[0])?.quantity || ''} />
                            </div>
                        </div>
                        <div className='form-check col-7'>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border border-dark' name='wholeAnimal' value={wholeAnimal[1]} onChange={checkboxHandler} checked={(request.data.wholeAnimal || []).some(item => item.name === wholeAnimal[1])} />
                                <label className='form-check-label'>{wholeAnimal[1]}</label>
                                <input type='text' className='col-4 border-0 border-bottom border-dark bg-transparent' data-field="wholeAnimal" data-specimen={wholeAnimal[1]} onChange={inputHandler} value={(request.data.wholeAnimal || []).find(item => item.name === wholeAnimal[1])?.quantity || ''} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row g-1'>
                    {specimenPart.map((specimen, index) => (
                        <div className='form-check col-3 mt-0' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border border-dark' id={`specimen-${index}`} name='specimenPart' value={specimen} onChange={checkboxHandler} checked={(request.data.specimenPart || []).some(item => item.name === specimen)} />
                                <label className='form-check-label' htmlFor={`specimen-${index}`}>{specimen}:</label>
                                <input type='text' className='col-4 border-0 border-bottom border-dark ' data-specimen={specimen} data-field="specimenPart" onChange={inputHandler} value={(request.data.specimenPart || []).find(item => item.name === specimen)?.quantity || ''} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page2