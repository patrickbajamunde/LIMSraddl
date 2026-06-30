import React, { use, useEffect, useState } from 'react'
import '../styles/arf.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Page1({request, inputHandler}) {
    return (
        <div className='card p-4 mb-3 shadow-sm border'>
            <h5 className='mb-4 text-primary fw-bold'>Request Details</h5>
            <div className="row g-4">
                <div className='col-md-6'>
                    <label className='form-label'>Type Of Customer</label>
                    <select id='clientType' name="clientType" onChange={inputHandler} value={request.clientType} className='form-select border-dark'>
                        <option value="">Choose...</option>
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

                <div className='col-md-6'>
                    <label className='form-label'>Laboratory Accession Number</label>
                    <input type='text' className='form-control border border-dark' id='labAccessionNumber' name='labAccessionNumber' onChange={inputHandler} value={request.labAccessionNumber} />
                </div>

                <div className="col-md-6">
                    <label className='form-label'>Record ID</label>
                    <input type="text" className="form-control border border-dark" id="recordId" name="recordId" onChange={inputHandler} value={request.recordId} placeholder="Auto-generated" />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Request ID</label>
                    <input type="text" className="form-control border border-dark" id="requestId" name="requestId" onChange={inputHandler} value={request.requestId} placeholder="Auto-generated" />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Date Submitted</label>
                    <input type="date" className="form-control border border-dark" id="dateSubmitted" name='dateSubmitted' value={request.data.dateSubmitted} onChange={inputHandler} />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Received By</label>
                    <select id='receivedBy' name='receivedBy' onChange={inputHandler} value={request.data.receivedBy} className='form-select border-dark'>
                        <option value="">Choose...</option>
                        <option value="Fernando T. Almonte JR.">Fernando T. Almonte JR.</option>

                    </select>
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Time</label>
                    <input type="time" className="form-control border border-dark" id="samplingTime" name='samplingTime' value={request.data.samplingTime} onChange={inputHandler} />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Date Collected</label>
                    <input type="date" className="form-control border border-dark" id="dateCollected" name='dateCollected' value={request.data.dateCollected} onChange={inputHandler} />
                </div>
            </div>
        </div>
    )
}

export default Page1