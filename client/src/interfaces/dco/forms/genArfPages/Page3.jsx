import React from 'react'

function Page3() {
    return (
        <div className='card p-4 mb-3 shadow-sm border'>
            <h5 className='mb-4 text-primary fw-bold'>Specimen / Quantity Submitted</h5>
            <div className='row g-4'>
                <div className='col-md-4'>
                    <label className='form-label'>Type Of Customer</label>
                    <select id='clientType' name="clientType" className='form-select border-dark'>
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
                <div className='col-md-4'>
                    <label className='form-label'>Request ID</label>
                    <input type="text" className="form-control border border-dark" id="requestId" name="requestId" placeholder="Auto-generated" />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Laboratory Accession Number</label>
                    <input type="text" className="form-control border border-dark" id="transactionDate" name='transactionDate' />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Date Submitted</label>
                    <input type="date" className="form-control border border-dark" id="transactionDate" name='transactionDate' />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Time</label>
                    <input type="time" className="form-control border border-dark" id="transactionDate" name='transactionDate' />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Date Collected</label>
                    <input type="date" className="form-control border border-dark" id="transactionDate" name='transactionDate' />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Received By</label>
                    <select id='receivedBy' name='receivedBy' className='form-select border-dark'>
                        <option value="">Choose...</option>
                        <option value="Susan P. Bergantin">Susan P. Bergantin</option>
                        <option value="Jessa Mae M. Luces">Jessa Mae M. Luces</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Page3