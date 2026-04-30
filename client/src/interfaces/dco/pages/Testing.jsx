import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import TestPdf from '../generatePdf/TestPdf'

function Testing() {
    return (
        <div className='d-flex '>
            <div className=' analysis container-fluid mb-5'>
                <PDFViewer width="100%" height="1000px">
                    <TestPdf />
                </PDFViewer>
            </div>
        </div>
    )
}

export default Testing