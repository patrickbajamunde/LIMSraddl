import React, { use, useEffect, useState, useRef } from 'react'
import '../styles/arf.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CustomerSignaturePad } from '../../components/modal/SignaturePad';

function Page4({ setRequest, request }) {
    const [receviedModal, setReceivedModal] = useState(false);

    return (
        <div className="d-flex container-fluid w-100 justify-content-center">
            <div className='card p-4 mb-3 shadow-sm border' style={{ width: '600px' }}>
                <div className="row justify-content-center">
                    <h4>Please Sign Here</h4>
                    <div
                        className='border-2 border-opacity-25 border-dark align-items-center d-flex justify-content-center'
                        style={{ height: '200px', borderStyle: 'dashed' }}
                    >
                        {request.data.customerSignature && (
                            <img src={request.data.customerSignature} className='object-fit-contain w-75 h-75' />
                        )}
                    </div>
                </div>

                <div className='d-flex mt-3'>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            setReceivedModal(true);
                        }}>
                        <i className="bi bi-plus-lg"></i>Add Signature
                    </button>
                </div>
                <CustomerSignaturePad
                    setRequest={setRequest}
                    request={request}
                    show={receviedModal}
                    closeModal={() => { setReceivedModal(false) }}
                />
            </div>
        </div>
    )
}

export default Page4