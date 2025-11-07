import React from 'react'

function Page2() {
    return (
        <div className='row gx-3'>
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
                            <input type="tel" className="form-control border border-dark" id="clientContact" name='clientContact'  placeholder="09XXXXXXXXX" />
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
                            <input type="text" className="form-control border border-dark" id="clientAddress" name='clientAddress'  placeholder="Street, Barangay, City" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className='card p-4 shadow-sm border mt-3'>
                    <h5 className='mb-4 text-primary fw-bold'>Submitted By:</h5>
                    <div className='col'>
                        <div className='col'>
                            <label className='form-label'>Name</label>
                            <input type="text" className="form-control border border-dark" id="clientName" name='clientName'  placeholder="Full Name" />
                        </div>

                        <div>
                            <label className='form-label'>Address</label>
                            <input type="email" className="form-control border border-dark" id="clientEmail" name='clientEmail' placeholder="example@email.com" />
                        </div>

                        <div>
                            <label className='form-label'>Age</label>
                            <input type="tel" className="form-control border border-dark" id="clientContact" name='clientContact'  placeholder="09XXXXXXXXX" />
                        </div>

                        <div>
                            <label className='form-label'>Sex</label>
                            <input type="text" className="form-control border border-dark" id="clientAddress" name='clientAddress'  placeholder="Street, Barangay, City" />
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
                            <input type="text" className="form-control border border-dark" id="clientAddress" name='clientAddress'  placeholder="Street, Barangay, City" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2