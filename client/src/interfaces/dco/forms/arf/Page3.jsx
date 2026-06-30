import React, { use, useEffect, useState } from 'react'
import '../styles/arf.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Page3({ request, inputHandler, checkboxHandler }) {

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

    const bacteOthers2 = [
        "Water Coliforn Count",
        "Others"
    ]
    return (
        <>
            <h5 className='mb-2 mt-3 text-primary fw-bold'>Examination Requested</h5>
            {/*Examination Requested*/}
            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <span className='mb-3 text-primary fw-bold '>PATHOLOGY</span>
                <div className='row g-1'>
                    {pathologyList.map((pathology, index) => (
                        <div className='form-check col-auto mt-0 me-3' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                                <input type='checkbox' className='form-check-input border border-dark' name='pathologyList' value={pathology} onChange={checkboxHandler} checked={(request.data.pathologyList || []).includes(pathology)} />
                                <label className='form-check-label' htmlFor={`pathology-${index}`}>{pathology}</label>
                                {pathology === 'Others' && (
                                    <input type='text' className='col-4 border-0 border-bottom border-dark' name='pathologyOthers' value={request.data.pathologyOthers} onChange={inputHandler} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <span className='mb-3 text-primary fw-bold '>BACTERIOLOGY</span>
                <div className='row g-1'>
                    <div className='col-7'>
                        <div className='row g-1'>
                            <span className='mb-1 text-primary fw-bold border-bottom border-primary col-auto'>Isolation & Identification</span>
                            {isoAndIdenList.map((isoAndIdenList, index) => (
                                <div className='form-check mt-0' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='isoAndIdenList' value={isoAndIdenList} onChange={checkboxHandler} checked={(request.data.isoAndIdenList || []).includes(isoAndIdenList)} />
                                        <label className='form-check-label' htmlFor={`isoAndIdenList-${index}`}>{isoAndIdenList}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-5'>
                        <span className='text-primary fw-bold border-bottom border-primary col-auto '>Rapid Plate Test</span>
                        <div className='row g-1 mt-1'>
                            {rapidPlateTest.map((rapidPlateTest, index) => (
                                <div className='form-check col-5 mt-0' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='rapidPlateTest' value={rapidPlateTest} onChange={checkboxHandler} checked={(request.data.rapidPlateTest || []).includes(rapidPlateTest)} />
                                        <label className='form-check-label' htmlFor={`rapidPlateTest-${index}`}>{rapidPlateTest}</label>
                                        {rapidPlateTest === 'Others' && (
                                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='rpcOthers' value={request.data.rpcOthers} onChange={inputHandler} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-3 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                    <label className='form-label mt-2'>Other Tests:</label>
                    <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='otherTests' value={request.data.otherTests} onChange={inputHandler} />
                </div>
                <div className='row g-1 mt-3'>
                    {bacteOthers2.map((bacte, index) => (
                        <div className='form-check col-5 mt-0' key={index}>
                            <input type='checkbox' className='form-check-input border border-dark' name='bacteOthers2' value={bacte} onChange={checkboxHandler} checked={(request.data.bacteOthers2 || []).includes(bacte)} />
                            <label className='form-check-label' htmlFor={`rapidPlateTest-${index}`}>{bacte}</label>
                            {bacte === 'Others' && (
                                <input type='text' className='col-4 border-0 border-bottom border-dark' name='bacteOthers' value={request.data.bacteOthers} onChange={inputHandler} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <span className='mb-3 text-primary fw-bold '>PARASITOLOGY</span>
                <div className='row g-1'>

                    <div className='col-4'>
                        <div className='row g-1'>
                            <span className='mb-1 text-primary fw-bold border-bottom border-primary col-auto'>Fecalysis</span>
                            {fecalysisList.map((fecalysis, index) => (
                                <div className='form-check mt-0' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='fecalysis' value={fecalysis} onChange={checkboxHandler} checked={(request.data.fecalysis || []).includes(fecalysis)} />
                                        <label className='form-check-label' htmlFor={`fecalysis-${index}`}>{fecalysis}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-9 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                            <label className='form-label mt-2'>Other Tests:</label>
                            <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='parasiteOthers' value={request.data.parasiteOthers} onChange={inputHandler} />
                        </div>
                    </div>

                    <div className='col-3 '>
                        <span className='text-primary fw-bold border-bottom border-primary col-auto '>Parasite Identification</span>
                        <div className='row g-1 mt-1'>
                            {parasiteIden.map((parasite, index) => (
                                <div className='form-check col-auto mt-0' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='parasiteIden' value={parasite} onChange={checkboxHandler} checked={(request.data.parasiteIden || []).includes(parasite)} />
                                        <label className='form-check-label' htmlFor={`parasite-${index}`}>{parasite}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='col-4'>
                        <span className='text-primary fw-bold border-bottom border-primary col-auto '>Blood Parasite Examination</span>
                        <div className='row g-1 mt-1'>
                            {bloodParasiteExam.map((bloodParasiteExam, index) => (
                                <div className='form-check mt-0' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='bloodParasiteExam' value={bloodParasiteExam} onChange={checkboxHandler} checked={(request.data.bloodParasiteExam || []).includes(bloodParasiteExam)} />
                                        <label className='form-check-label' htmlFor={`bloodParasiteExam-${index}`}>{bloodParasiteExam}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-9 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                            <label className='form-label mt-2'>Other Tests:</label>
                            <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='bloodParaOthers' value={request.data.bloodParaOthers} onChange={inputHandler} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <span className='mb-3 text-primary fw-bold '>VIROLOGY</span>
                <div className='row g-1'>

                    <div className='row g-1 mb-2'>
                        {virologyList.map((virology, index) => (
                            <div className='form-check mt-0' key={index}>
                                <div className='d-flex align-items-center gap-2'>
                                    <input type='checkbox' className='form-check-input border border-dark' name='virologyList' value={virology} onChange={checkboxHandler} checked={(request.data.virologyList || []).includes(virology)} />
                                    <label className='form-check-label' htmlFor={`virology-${index}`}>{virology}</label>
                                    {virology === 'Others' && (
                                        <input type='text' className='col-4 border-0 border-bottom border-dark' name='virologyOthers' value={request.data.virologyOthers} onChange={inputHandler} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='col-auto mb-2'>
                        <span className='text-primary fw-bold border-bottom border-primary col-auto '>Enzyme-Linked Immunosorbent Assay (ELISA)</span>
                        <div className='row g-1 mt-1'>
                            {elisaList.map((elisa, index) => (
                                <div className='form-check col-5 mt-0 ' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='elisaList' value={elisa} onChange={checkboxHandler} checked={(request.data.elisaList || []).includes(elisa)} />
                                        <label className='form-check-label' htmlFor={`elisa-${index}`}>{elisa}</label>
                                        {elisa === 'Others' && (
                                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='elisaOthers' value={request.data.elisaOthers} onChange={inputHandler} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <span className='text-primary fw-bold border-bottom border-primary col-auto '>Polymerase Chain Reaction (PCR)</span>
                        <div className='row g-1 mt-1'>
                            {pcrList.map((pcrList, index) => (
                                <div className='form-check mt-0' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='pcrList' value={pcrList} onChange={checkboxHandler} checked={(request.data.pcrList || []).includes(pcrList)} />
                                        <label className='form-check-label' htmlFor={`pcrList-${index}`}>{pcrList}</label>
                                        {pcrList === 'Others' && (
                                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='pcrOthers' value={request.data.pcrOthers} onChange={inputHandler} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
                <span className='mb-3 text-primary fw-bold '>PURPOSE</span>
                <div className='col-auto'>
                    <div className='row g-1'>
                        <div className='row g-1'>
                            {purposeList.map((purpose, index) => (
                                <div className='form-check col-5 mt-0' key={index}>
                                    <div className='d-flex align-items-center gap-2'>
                                        <input type='checkbox' className='form-check-input border border-dark' name='purposeList' value={purpose} onChange={checkboxHandler} checked={(request.data.purposeList || []).includes(purpose)} />
                                        <label className='form-check-label' htmlFor={`purpose-${index}`}>{purpose}</label>
                                        {purpose === 'Others' && (
                                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='purposeOthers' value={request.data.purposeOthers} onChange={inputHandler} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3