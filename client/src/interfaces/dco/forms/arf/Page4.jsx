import React, { use, useEffect, useState } from 'react'
import '../styles/arf.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Page4({ request, inputHandler, checkboxHandler }) {
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
            <h5 className='mb-2 mt-3 text-primary fw-bold'>Filled out by RADDL staff</h5>
            <div className='row'>
                <div className='col'>
                    <div className='card p-4 mb-3 shadow-sm border'>
                        <span className='mb-3 text-primary fw-bold ' style={{ fontSize: 20 }}>ASSESSMENT</span>

                        <div className='col-auto'>
                            <span className='text-primary fw-bold border-primary col-auto' style={{ fontSize: 17 }}>1. Sample Labeling</span>
                            <div className='row g-1'>
                                {sampleLabel.map((label, index) => (
                                    <div className='form-check col-5 mt-0' key={index}>
                                        <div className='d-flex align-items-center gap-2'>
                                            <input type='checkbox' className='form-check-input border border-dark' name='sampleLabel' value={label} onChange={checkboxHandler} checked={(request.data.sampleLabel || []).includes(label)} />
                                            <label className='form-check-label' htmlFor={`label-${index}`}>{label}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='col-auto mt-2'>
                            <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>2. Quantity of Sample</span>
                            <div className='row g-1'>
                                {quantityOfSample.map((quantity, index) => (
                                    <div className='form-check mt-0' key={index}>
                                        <div className='d-flex align-items-center gap-2'>
                                            <input type='checkbox' className='form-check-input border border-dark' name='quantityOfSample' value={quantity} onChange={checkboxHandler} checked={(request.data.quantityOfSample || []).includes(quantity)} />
                                            <label className='form-check-label' htmlFor={`quantity-${index}`}>{quantity}</label>
                                            {quantity === 'Others' && (
                                                <input type='text' className='col-4 border-0 border-bottom border-dark' name='sampleQuantityOthers' value={request.data.sampleQuantityOthers} onChange={inputHandler} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='col-auto mt-2'>
                            <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>3. Proper preservation used for sample Type</span>
                            <div className='row g-1'>
                                {preservationUsed.map((preservation, index) => (
                                    <div className='form-check mt-0' key={index}>
                                        <div className='d-flex align-items-center gap-2'>
                                            <input type='checkbox' className='form-check-input border border-dark' name='preservationUsed' value={preservation} onChange={checkboxHandler} checked={(request.data.preservationUsed || []).includes(preservation)} />
                                            <label className='form-check-label' htmlFor={`preservation-${index}`}>{preservation}</label>
                                            {preservation === 'Other' && (
                                                <input type='text' className='col-4 border-0 border-bottom border-dark' name='preserveOthers' value={request.data.preserveOthers} onChange={inputHandler} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='col-auto mt-2'>
                            <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>4. Proper transport</span>
                            <div className='row g-1'>
                                {transport.map((transport, index) => (
                                    <div className='form-check mt-0' key={index}>
                                        <div className='d-flex align-items-center gap-2'>
                                            <input type='checkbox' className='form-check-input border border-dark' name='transport' value={transport} onChange={checkboxHandler} checked={(request.data.transport || []).includes(transport)} />
                                            <label className='form-check-label' htmlFor={`transport-${index}`}>{transport}</label>
                                            {transport === 'Other' && (
                                                <input type='text' className='col-4 border-0 border-bottom border-dark' name='tranportOthers' value={request.data.tranportOthers} onChange={inputHandler} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='col-auto mt-2'>
                            <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>5. State of sample when it reached the laboratory</span>
                            <div className='row g-1'>
                                {stateOfSample.map((state, index) => (
                                    <div className='form-check mt-0' key={index}>
                                        <div className='d-flex align-items-center gap-2'>
                                            <input type='checkbox' className='form-check-input border border-dark' name='stateOfSample' value={state} onChange={checkboxHandler} checked={(request.data.stateOfSample || []).includes(state)} />
                                            <label className='form-check-label' htmlFor={`state-${index}`}>{state}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card p-4 mb-3 shadow-sm border'>
                        <span className='mb-3 text-primary fw-bold '>CRITERIA FOR REJECTION OF SAMPLES</span>
                        <div className='col-auto'>
                            <div className='row g-1'>
                                <div className='row g-1'>
                                    {rejectionOfSamples.map((rejection, index) => (
                                        <div className='form-check mt-0' key={index}>
                                            <div className='d-flex align-items-center gap-2'>
                                                <input type='checkbox' className='form-check-input border border-dark' name='rejectionOfSamples' value={rejection} onChange={checkboxHandler} checked={(request.data.rejectionOfSamples || []).includes(rejection)} />
                                                <label className='form-check-label' htmlFor={`rejection-${index}`}>{rejection}</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card p-4 mb-3 shadow-sm border'>
                        <span className='mb-3 text-primary fw-bold '>REVIEW OF REQUEST</span>
                        <div className='col-auto'>
                            <div className='row g-1'>
                                <label className='form-label mb-0' style={{ fontSize: 17 }}>1. Sample Storage</label>
                                {sampleStorage.map((storage, index) => (
                                    <div className='form-check mt-0 mb-2' key={index}>
                                        <div className='d-flex align-items-center gap-2 ps-3'>
                                            <input type='checkbox' className='form-check-input border border-dark' name='sampleStorage' value={storage} onChange={checkboxHandler} checked={(request.data.sampleStorage || []).includes(storage)} />
                                            <label className='form-check-label' htmlFor={`storage-${index}`}>{storage}</label>
                                        </div>
                                    </div>
                                ))}

                                <label className='form-label mb-0' style={{ fontSize: 17 }}>2. Sample retention (days, months, years)</label>
                                <input type='text' className='form-control border border-dark mb-2' id='sampleRetentionDate' name='sampleRetentionDate' value={request.data.sampleRetentionDate} onChange={inputHandler} />

                                <label className='form-label mb-0' style={{ fontSize: 17 }}>3. Sample storage location</label>
                                <input type='text' className='form-control border border-dark mb-2' id='sampleStorageLocation' name='sampleStorageLocation' value={request.data.sampleStorageLocation} onChange={inputHandler} />

                                <label className='form-label mb-0' style={{ fontSize: 17 }}>4. Sample disposal date</label>
                                <input type='date' className='form-control border border-dark mb-4' id='sampleDisposalDate' name='sampleDisposalDate' value={request.data.sampleDisposalDate} onChange={inputHandler} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page4