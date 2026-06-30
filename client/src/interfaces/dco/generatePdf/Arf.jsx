import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import styles from './Styles';
import image1 from '../../analysts/components/images/DA5.jpg';
import image2 from '../../dco/components/images/unnamed.png'
import terms from './data/Terms';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import Rabies from './Rabies';
import ArfGenSample from './ArfGenSample';

function Arf({ requestId, icon, disabledIcon }) {
    const [request, setRequest] = useState(null)


    useEffect(() => {
        // Fetch request data using the requestId passed as a prop
        axios.get(`http://192.168.100.200:8003/api/client/getClient/${requestId}`)
            .then((response) => {
                setRequest(response.data);
            })
            .catch((error) => {
                console.error("Error fetching request:", error);
                setRequest(null);
            });
    }, [requestId]);

    if (!request) {
        return (
            <button className="btn p-0 border-0" disabled>
                {disabledIcon}
            </button>
        );
    }
    


    const handleDownload = async () => {
        const formType = request.type === 'RABIES' ? <Rabies request={request} setRequest={setRequest} /> :
            <ArfGenSample request={request} setRequest={setRequest} />;
        const blob = await pdf(formType).toBlob();
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = url;
        link.download = `${request.requestId}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    }
    return (
        <>
            {request.data ? (
                <button className="btn p-0 border-0" onClick={handleDownload}>
                    {icon}
                </button>
            ) : (
                <button className="btn p-0 border-0" disabled>
                    {disabledIcon}
                </button>
            )}
        </>
    );
}

export default Arf