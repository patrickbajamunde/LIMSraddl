import React from 'react'

function Page1() {
    return (
        <>
            {/* Request Details Section */}
            <div className='card p-4 mt-3 shadow-sm border'>
                <h5 className='mb-4 text-primary fw-bold'>Request Details</h5>
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
            {/* Request Details Section */}


            <div className='row gx-3'>
                {/* Origin of Samples */}
                <div className="col-md-6">
                    <div className='card p-4 shadow-sm border mt-3'>
                        <h5 className='mb-4 text-primary fw-bold'>Origin of Samples:</h5>
                        <div className='col'>
                            <div>
                                <label className='form-label'>Owner/Farm</label>
                                <input type="text" className="form-control border border-dark" id="clientName" name='clientName' placeholder="Full Name" />
                            </div>

                            <div>
                                <label className='form-label'>Barangay</label>
                                <input type="email" className="form-control border border-dark" id="clientEmail" name='clientEmail' placeholder="example@email.com" />
                            </div>

                            <div>
                                <label className='form-label'>Municipality</label>
                                <input type="tel" className="form-control border border-dark" id="clientContact" name='clientContact' placeholder="09XXXXXXXXX" />
                            </div>

                            <div>
                                <label className='form-label'>Province</label>
                                <input type="text" className="form-control border border-dark" id="clientAddress" name='clientAddress' placeholder="Street, Barangay, City" />
                            </div>

                            <div>
                                <label className='form-label'>Contact No.</label>
                                <select id='clientGender' name="clientGender" className='form-select border-dark'>
                                    <option value="">Choose...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label className='form-label'>Email</label>
                                <input type="text" className="form-control border border-dark" id="clientAddress" name='clientAddress' placeholder="Street, Barangay, City" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Origin of Samples */}

                {/* Submitted By */}
                <div className="col-md-6">
                    <div className='card p-4 shadow-sm border mt-3'>
                        <h5 className='mb-4 text-primary fw-bold'>Submitted By:</h5>
                        <div className='col'>
                            <div className='col'>
                                <label className='form-label'>Name</label>
                                <input type="text" className="form-control border border-dark" id="clientName" name='clientName' placeholder="Full Name" />
                            </div>

                            <div>
                                <label className='form-label'>Address</label>
                                <input type="email" className="form-control border border-dark" id="clientEmail" name='clientEmail' placeholder="example@email.com" />
                            </div>

                            <div>
                                <label className='form-label'>Age</label>
                                <input type="tel" className="form-control border border-dark" id="clientContact" name='clientContact' placeholder="09XXXXXXXXX" />
                            </div>

                            <div>
                                <label className='form-label'>Sex</label>
                                <input type="text" className="form-control border border-dark" id="clientAddress" name='clientAddress' placeholder="Street, Barangay, City" />
                            </div>

                            <div>
                                <label className='form-label'>Contact</label>
                                <select id='clientGender' name="clientGender" className='form-select border-dark'>
                                    <option value="">Choose...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div>
                                <label className='form-label'>Email</label>
                                <input type="text" className="form-control border border-dark" id="clientAddress" name='clientAddress' placeholder="Street, Barangay, City" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Submitted By */}
            </div>

            {/* Specimen / Quantity Submitted Section */}
            <div className='card p-4 mb-3 mt-3 shadow-sm border'>
                <h5 className='mb-4 text-primary fw-bold'>Specimen / Quantity Submitted</h5>
                <div className='row g-4'>
                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Bovine
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>

                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Ovine
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>

                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Avian
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Bubaline
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Feline
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Swine
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Equine
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Caprine
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                    <div className='col-md-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Canine
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                    <div className='col-2'>
                        <input
                            className="form-check-input border border-dark me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-label">
                            Others
                        </label>
                        <input type='text' className='form-control border border-dark'></input>
                    </div>
                </div>
                <div className="row g-4 mt-2">
                    <div className='col-md-5'>
                        <div className="d-flex align-items-center col-md-6">
                            <label className="col-form-label me-2">Age:</label>
                            <input type='text' className='form-control border-0 border-bottom rounded-0 shadow-none border-dark'></input>
                        </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className="d-flex align-items-center col-md-6">
                        <label className='col-form-label me-2'>Sex:</label>
                        <select id='clientGender' name="clientGender" className='form-select border-dark border-0 border-bottom rounded-0'>
                            <option value="">Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Page1