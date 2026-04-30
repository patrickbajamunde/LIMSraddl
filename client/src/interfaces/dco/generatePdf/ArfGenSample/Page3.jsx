import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import styles from '../Styles';
import image1 from '../../../analysts/components/images/DA5.jpg';
import image2 from '../../../dco/components/images/unnamed.png'
import terms from '../data/Terms';
import { useEffect, useState } from 'react';

const Page3 = ({ request, }) => {


    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const numericDate = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };



    const generatePdf = () => {
        if (!request) return;


        const normalize = (str) => str?.trim().replace(/\s+/g, ' ') ?? '';

        return (
            <Page style={[styles.body, { marginTop: 10 }]} size="A4">
                <View style={[styles.headerContainer3, styles.row, { marginLeft: 14, marginRight: 14 }]} fixed>
                    <View style={[styles.headerCell, { justifyContent: 'center', paddingRight: 5 }]}>
                        <Image style={styles.image} src={image1} />
                    </View>

                    <View style={[styles.headerOffice, styles.headerCell, { paddingRight: 8, paddingLeft: 2 }]}>
                        <View style={{ lineHeight: 0.55 }}>
                            <Text style={[styles.normalFont, { fontSize: 8 }]} >Republic of the Philippines</Text>
                            <Text style={[styles.boldFont, { fontSize: 8 }]} >DEPARTMENT OF AGRICULTURE</Text>
                            <Text style={[styles.boldFont, { fontSize: 8 }]} >REGIONAL FIELD OFFICE 5</Text>
                            <Text style={[styles.boldFont, { fontSize: 8 }]} >INTEGRATED LABORATORIES DIVISION</Text>
                            <Text style={[styles.normalFont, { fontSize: 8 }]} >San Agustin, Pili, Camarines Sur</Text>
                        </View>
                    </View>

                    <View style={[styles.formTitle, styles.headerCell, { alignItems: 'center' }]} >
                        <Text style={[styles.titleBold, { fontSize: 12, paddingHorizontal: 25 }]}>ANALYSIS REQUEST FORM</Text>
                        <Text style={[styles.titleBold, { fontSize: 12, }]}>(GENERAL SAMPLE)</Text>
                    </View>

                    <View style={[styles.headerCell, { flexDirection: 'column', }]}>
                        <Text style={[styles.boldFont, { fontSize: 8, paddingLeft: 3 }]}>Document Code</Text>
                        <Text style={[styles.normalFont, { fontSize: 8, borderBottom: 1, paddingLeft: 3, paddingBottom: 3, paddingRight: 5 }]}>ILD5-RADDL-FR-001-0</Text>
                        <Text style={[styles.boldFont, { fontSize: 8, paddingLeft: 3, paddingTop: 3 }]}>Record ID</Text>
                        <View style={[styles.normalFont, { fontSize: 8, paddingRight: 2, paddingLeft: 3 }]}>
                            <Text>{request.recordId.substring(0, 18)}</Text>
                            <Text>{request.recordId.substring(18)}</Text>
                        </View>
                    </View>

                    <View style={[styles.headerCell, { flexDirection: 'column', width: '13%', borderRightWidth: 0 }]}>
                        <Text style={[styles.boldFont, { fontSize: 8, paddingLeft: 3 }]}>Effectivity Date</Text>
                        <View style={[styles.row, { borderBottom: 1, width: '100%' }]}>
                            <Text style={[styles.normalFont, { fontSize: 8, paddingLeft: 3, paddingBottom: 3, }]}>March 17, 2026</Text>
                        </View>
                        <Text style={[styles.boldFont, { fontSize: 8, paddingLeft: 3, paddingTop: 3 }]}>Page No.</Text>
                        <Text
                            style={[styles.testPdfpage]}
                            render={({ pageNumber, totalPages }) => pageNumber <= 3 ? ` ${pageNumber}   of   3` : ''}
                            fixed />
                    </View>
                </View>

                <View style={[styles.table, { marginTop: 20 }]}>
                    <View style={[styles.row]}>
                        <View style={[styles.row, { width: '100%' }]}>
                            <View style={[styles.cellTwo, { width: '48%', borderLeftWidth: 0 }]}>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[9].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[9].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%', borderBottomWidth: 0 }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[10].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[10].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '52%', borderRightWidth: 1 }]}>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[11].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[11].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[12].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[12].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[13].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[13].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%', borderBottomWidth: 0 }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[14].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[14].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.row,]}>
                        <View style={[styles.row, styles.cellTwo, styles.boldFont, { width: '100%', alignItems: 'center', fontSize: 10, justifyContent: 'center', borderLeftWidth: 0, paddingVertical: 3 }]}>
                            <Text style={styles.checkbox2} />
                            <Text>I agree with terms and conditions of DA RFO5 ILD-Regional Animal Disease Diagnostic Laboratory Disclaimer.</Text>
                        </View>
                    </View>
                    <View style={[styles.row, {width: '100%'}]}>
                        <View style={[styles.cellTwo, {width:'48%', borderLeftWidth: 0}]}>
                            <Text>Receiving Staff</Text>
                        </View>
                        <View style={[styles.cellTwo, {width:'52%', borderLeftWidth: 0}]}>
                            <Text>Client Printed Name and Signature</Text>
                        </View>
                    </View>
                </View>
            </Page>

        )
    }

    return generatePdf()
}

export default Page3