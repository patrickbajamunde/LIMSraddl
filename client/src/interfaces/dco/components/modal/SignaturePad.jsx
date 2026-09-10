import React, { use, useEffect, useState, useRef } from 'react'
import SignaturePad from 'react-signature-canvas'

export const ReceivedBySignature = ({ setRequest, request, show, closeModal }) => {

    const sigCanvasRef = useRef(null);


    const handleSignatureSave = () => {
        const sign = sigCanvasRef.current;
        if (sign && !sign.isEmpty()) {
            const signatureData = sign.getTrimmedCanvas().toDataURL('image/png');
            setRequest(prevRequest => ({
                ...prevRequest,
                data: {
                    ...prevRequest.data,
                    signature: signatureData
                }
            }));
            closeModal();
        }
    };

    const handleClearSignature = () => {
        sigCanvasRef.current.clear();
        setRequest(prevRequest => ({
            ...prevRequest,
            data: { ...prevRequest.data, signature: "" }
        }));
    };


    if (!show) return null;
    return (

        <div className='modal fade show' style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Received By Signature</h5>
                        <button type='button' className='btn-close' onClick={closeModal}></button>
                    </div>
                    <div className='modal-body'>
                        <div style={{ border: '2px solid'}}>
                            <SignaturePad
                                ref={sigCanvasRef}
                                penColor='black'
                                canvasProps={{ width: 500, height: 200, className: 'sigCanvas', background: 'white' }}
                            />
                        </div>

                        <div className="modal-footer ">
                            <button type='button' onClick={handleClearSignature} className='btn btn-primary mt-2'>
                                Clear
                            </button>
                            <button type='button' onClick={handleSignatureSave} className='btn btn-primary mt-2'>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}