import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import image1 from '../dco/components/images/DA2.png';
import image2 from './images/microscope-solid-3.png'
import image3 from './images/paw-solid.png'
import './styles/welcome.css';
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const navigate = useNavigate();

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <div className='col w-100 z-3 p-2 d-flex align-items-center' style={{ background: '#38406eff' }}>
                <div className='pe-3'>
                    <img src={image1} alt="description" className='image-style' />
                </div>
                <div className='border-end border-opacity-50 border-white border-2 pe-3'>
                    <span className='fw-bold text-white fs-5'>LIMS</span>
                </div>
                <div className='ps-3'>
                    <span className='text-white'>Integrated Laboratories Division RFO 5</span>
                </div>
                <div className='position-absolute end-0 pe-4 '>
                    <div className='d-inline-block border-start border-white border-2 border-opacity-50 ps-3 text-white opacity-50  '>
                        <i class="bi bi-calendar-check pe-2"></i>
                        <span>{currentDate}</span>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className='welcome-title'>
                    <p className='welcome'>Welcome to</p>
                    <span className='raddl'>RADDL</span>
                    <span>Regional Animal Disease Diagnostic Laboratory</span>
                </div>
                <div className='row text-center mt-3 mb-3'>
                    <h4 className='mb-0 fw-bold'>Select a form to proceed</h4>
                </div>
                <div className='customer-forms'>
                    <button className="general-sample" onClick={() => navigate('/Dco/Arf/')}>
                        <div className='general-sample-box'>
                            <img src={image2} alt="General Sample" className='general-sample-img ' />
                        </div>
                        <span>General Sample</span>
                    </button>

                    <button className="rabies" onClick={() => navigate('/Dco/Rabies/')} >
                        <div className='rabies-box'>
                            <img src={image3} alt="Rabies" className='rabies-img' />
                        </div>
                        <span>Rabies</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Welcome