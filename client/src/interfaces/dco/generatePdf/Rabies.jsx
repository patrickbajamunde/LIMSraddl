import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import styles from './Styles';
import image1 from '../../analysts/components/images/DA5.jpg';
import image2 from '../../dco/components/images/unnamed.png'
import terms from './data/Terms';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import Page1 from './Rabies/Page1'
import Page2 from './Rabies/Page2';
import Page3 from './Rabies/Page3';



const Rabies = ({ requestId, icon, disabledIcon, request, setRequest }) => {




    const isChecked = (value, request) => {
        return (request ?? []).includes(value) ? styles.checkedBox : styles.checkbox;
    }

    return (
        <Document>

            <Page1 request={request} />
            <Page2 request={request} />
            <Page3 request={request} />


        </Document>

    )

}

export default Rabies