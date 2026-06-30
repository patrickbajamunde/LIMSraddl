import axios from 'axios';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import styles from './Styles';
import image1 from '../../analysts/components/images/DA5.jpg';
import image2 from '../../dco/components/images/unnamed.png'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

const GenerateRoa = ({ roaId, icon, disabledIcon, copyType, fileType, copyCode }) => {

    const [report, setReport] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8003/api/report/reportData/${roaId}`)
            .then((response) => {
                setReport(response.data);
            })
            .catch((error) => {
                console.error("Error fetching report data:", error);
                setReport(null);
            })
    }, [roaId]);

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const formatMethod = (method) => {
        const methodArray = method.split('|');

        const methodHeader = methodArray[0]
        const sub = methodArray[1]

        return (
            <View>
                <Text style={[styles.boldFont, { fontSize: 10 }]}>{methodHeader}{'\n'}</Text>
                <Text style={[{ fontSize: 9, fontWeight: 'normal' }]}>{sub}</Text>
            </View >


        );
    }

    const resultFormat = (result) => {
        if (!result) return '';

        const resultArray = result?.split(' ');

        const resultIndex1 = resultArray[0]
        const resultIndex2 = resultArray[1]

        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.boldFont, { fontSize: 10 }]} hyphenationCallback={word => [word]}>{resultIndex1}</Text>
                <Text style={[styles.boldFont, { color: 'red', fontSize: 10 }]} hyphenationCallback={word => [word]}>{resultIndex2}</Text>
            </View>
        )
    }

    const colorChanger = (method) => {
        if (method === 'P|(ppm)') {
            return { color: 'red' };
        }
        return {};
    }

    const interPretationColor = (str) => {
        const str1 = str.substring(0, 4);
        const str2 = str.substring(4);

        return (
            <View style={styles.row}>
                <Text style={[styles.normalFont, { fontSize: 8, color: 'red' }]}>{str1}</Text>
                <Text style={[styles.normalFont, { fontSize: 8 }]}>{str2}</Text>
            </View>
        )
    }

    const normalize = (str) => {
        return str?.trim().toLowerCase() ?? '';
    };


    function generatePdf() {
        if (!report || !report.roaDetails) return;

        const checkMethod = (testMethod) => {
            if (!testMethod || testMethod.trim().length === 0) {
                return {
                    borderBottomWidth: 0,
                    borderRightWidth: 0,
                };
            }
            return {};
        };



        return (
            <Document>
                <Page style={[styles.body, { marginTop: 20, paddingBottom: 260 }]} size="A4">
                    <View style={styles.roaHeaderCont} fixed>
                        <Image style={styles.roaImage} src={image1} />
                        <View style={{ alignItems: 'justify', marginTop: -10 }} >
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Republic of the Philippines</Text>
                            <Text style={[styles.boldFont]}>DEPARTMENT OF AGRICULTURE</Text>
                            <Text style={styles.boldFont} >REGIONAL FIELD OFFICE 5</Text>
                            <Text style={styles.boldFont} >Integrated Laboratories Division</Text>
                            <Text style={styles.boldFont} >Regional Animal Disease Diagnostic Laboratory</Text>
                            <Text style={styles.normalFont} >San Agustin, Pili, Camarines Sur</Text>
                        </View>
                    </View>


                    <View style={[styles.row, { position: 'absolute', right: 50, top: 5 }]} fixed>
                        <Image src={report.qrCode} style={{ width: 80, height: 80 }} />
                    </View>

                    <View style={[{ marginLeft: 15, marginTop: 20 }]} fixed>
                        <View style={[styles.row, { width: '100%' }]}>
                            <View style={[styles.boldFont, { width: '20%' }]}>
                                <Text>Customer Name:</Text>
                                <Text>Address:</Text>
                                <Text>Contact Number:</Text>
                                <Text>Date Received:</Text>
                                <Text>Date Performed:</Text>
                            </View>
                            <View style={[styles.normalFont, { width: '30%' }]}>
                                <Text style={[styles.normalFont, { fontSize: 11, color: '#2f5496' }]}>{report.customerName}</Text>
                                <Text style={[styles.normalFont, { fontSize: 11, color: '#2f5496' }]}>{report.customerAddress}</Text>
                                <Text style={[styles.normalFont, { fontSize: 11, color: '#2f5496' }]}>{report.customerContact}</Text>
                                <Text style={[styles.normalFont, { fontSize: 11 }]}>{formatDate(report.dateReceived)}</Text>
                                <Text style={[styles.normalFont, { fontSize: 11 }]}>{report.datePerformed}</Text>
                            </View>
                            <View style={[styles.boldFont, { width: '20%', marginLeft: 25 }]}>
                                <Text>Report Number:</Text>
                                <Text>Date Issued:</Text>
                                <Text>Date of Collection:</Text>
                                <Text>Purpose:</Text>
                            </View>
                            <View style={[styles.normalFont, { width: '30%' }]}>
                                <Text style={[styles.normalFont, { fontSize: 11 }]}>{report.reportId}-{copyCode}</Text>
                                <Text style={[styles.normalFont, { fontSize: 11 }]}>{formatDate(report.dateIssued)}</Text>
                                <Text style={[styles.normalFont, { fontSize: 11, color: '#2f5496' }]}>{report.dateCollected}</Text>
                                <Text style={[styles.normalFont, { fontSize: 11, color: '#2f5496' }]}>{report.purpose}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.roaTitle, { borderBottomWidth: 0, marginTop: 15 }]} fixed>
                        <View style={[styles.row, styles.boldFont]}>
                            <Text style={[{ width: "100%", textAlign: 'center', fontSize: 18 }]}>REPORT OF ANALYSIS</Text>
                        </View>
                    </View>

                    <View style={[styles.row, styles.normalFont, { marginLeft: 15, }]} fixed>
                        <View style={{ width: '50%' }}>
                            <Text style={[styles.boldFont]}>Laboratory Code: <Text style={{ fontWeight: 'normal', fontSize: 11 }}>{report.labCode}</Text></Text>
                        </View>
                        <View style={{ width: '40%', marginLeft: 11 }}>
                            <Text style={[styles.boldFont]}>Test Method: <Text style={{ fontWeight: 'normal', fontSize: 11 }}>{report.testMethod}</Text></Text>
                        </View>
                    </View>


                    {/*Analysis Result */}
                    <View style={[styles.roaTable]}>
                        {/* HEADER ROW */}
                        <View style={[styles.row, styles.boldFont, { width: '100%', textAlign: 'center' }]} fixed>
                            <Text style={[styles.roaHeader, styles.specificCell, { width: "6%", textAlign: 'center', paddingVertical: 2, paddingHorizontal: 5, fontSize: 11, borderTopWidth: 1 }]}>ITEM NO.</Text>
                            <Text style={[styles.roaHeader, { width: "9%", paddingVertical: 2, fontSize: 11, borderTopWidth: 1 }]}>SAMPLE NO.</Text>
                            <Text style={[styles.roaHeader, { width: "28%", paddingVertical: 2, fontSize: 11, borderTopWidth: 1 }]}>FIELD SAMPLE ID</Text>
                            <Text style={[styles.roaHeader, { width: "15%", paddingVertical: 2, fontSize: 11, borderTopWidth: 1 }]}>ADDRESS</Text>
                            <Text style={[styles.roaHeader, { width: "10%", paddingVertical: 2, fontSize: 11, borderTopWidth: 1 }]}>SPECIES</Text>
                            <Text style={[styles.roaHeader, { width: "9%", paddingVertical: 2, fontSize: 11, borderTopWidth: 1 }]}>AGE</Text>
                            <Text style={[styles.roaHeader, { width: "5%", paddingVertical: 2, fontSize: 11, borderTopWidth: 1 }]}>SEX</Text>
                            <Text style={[styles.roaHeader, { width: "18%", paddingVertical: 2, fontSize: 11, borderTopWidth: 1 }]}>RESULTS</Text>
                        </View>

                        {/* DATA ROWS */}

                        {report.roaDetails && (
                            report.roaDetails.fieldSampleID ? (
                                <View style={{ width: "100%" }}>  {/* ✅ Removed flex: 1 from here */}
                                    {(() => {
                                        const groups = [];
                                        let i = 0;

                                        while (i < report.roaDetails.length) {
                                            const currentOwner = normalize(report.roaDetails[i].nameOfOwner);
                                            const currentAddress = normalize(report.roaDetails[i].address);
                                            const originalName = report.roaDetails[i].nameOfOwner;
                                            const originalAddress = report.roaDetails[i].address;
                                            let j = i + 1;
                                            while (
                                                j < report.roaDetails.length &&
                                                normalize(report.roaDetails[j].nameOfOwner) === currentOwner &&
                                                normalize(report.roaDetails[j].address) === currentAddress
                                            ) {
                                                j++;
                                            }
                                            groups.push({
                                                rows: report.roaDetails.slice(i, j),
                                                originalName,
                                                originalAddress,
                                            });
                                            i = j;
                                        }

                                        return groups.map((group, gi) => (
                                            <View key={gi} style={{ width: '100%', position: 'relative' }}>
                                                {/* Rows for this group */}
                                                {group.rows.map((row, index) => (
                                                    <View style={[styles.row, { flexGrow: 1 }]} key={index} wrap={false}>
                                                        {/* Left columns with actual data */}
                                                        <View style={[styles.roaCell, styles.specificCell, { width: "6%", fontSize: 11, textAlign: 'center', justifyContent: 'center' }]}>
                                                            <Text>{row.itemNo}</Text>
                                                        </View>
                                                        <View style={[styles.roaCell, { width: "9%", fontSize: 11, textAlign: 'center', justifyContent: 'center' }]}>
                                                            <Text>{row.sampleNo}</Text>
                                                        </View>
                                                        <Text style={[styles.roaCell, { width: (row.fieldSampleID?.length ?? 0) <= 2 ? "5%" : "9%", textAlign: 'center', color: '#2f5496' }]}>
                                                            {row.fieldSampleID}
                                                        </Text>

                                                        {/* Empty placeholders for merged columns */}
                                                        <View style={[styles.roaCell, { width: row.fieldSampleID?.length <= 2 ? "23%" : "19%" }]} />
                                                        <View style={[styles.roaCell, { width: "15%", minHeight: 37 }]} />

                                                        {/* Right side actual data */}
                                                        <Text style={[styles.roaCell, { width: "10%", textAlign: 'center', color: '#2f5496' }]}>{row.species}</Text>
                                                        <Text style={[styles.roaCell, { width: "9%", textAlign: 'center' }]}>{row.age}</Text>
                                                        <Text style={[styles.roaCell, { width: "5%", textAlign: 'center' }]}>{row.sex}</Text>
                                                        <Text style={[styles.roaCell, { width: "18%", textAlign: 'center' }]}>{row.result}</Text>
                                                    </View>
                                                ))}

                                                {/* nameOfOwner overlay - spans full group height */}
                                                <View style={[styles.cell, {
                                                    position: 'absolute',
                                                    top: 0,
                                                    bottom: 0,
                                                    left: report.roaDetails[0].fieldSampleID?.length <= 2 ? "20%" : "24%",
                                                    width: report.roaDetails[0].fieldSampleID?.length <= 2 ? "23%" : "19%",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',

                                                }]} fixed>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', color: '#2f5496' }}>
                                                        {group.originalName}
                                                    </Text>
                                                </View>

                                                {/* address overlay - spans full group height */}
                                                <View style={[styles.cell, {
                                                    position: 'absolute',
                                                    top: 0,
                                                    bottom: 0,
                                                    left: '43%',
                                                    width: '15%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                }]} fixed>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', color: '#2f5496' }}>
                                                        {group.originalAddress}
                                                    </Text>
                                                </View>
                                            </View>
                                        ));
                                    })()}
                                </View>
                            ) : (
                                <View style={{ width: "100%" }}>  {/* ✅ Removed flex: 1 from here */}
                                    {(() => {
                                        const groups = [];
                                        let i = 0;

                                        while (i < report.roaDetails.length) {
                                            const currentOwner = normalize(report.roaDetails[i].nameOfOwner);
                                            const currentAddress = normalize(report.roaDetails[i].address);
                                            const originalName = report.roaDetails[i].nameOfOwner;
                                            const originalAddress = report.roaDetails[i].address;
                                            let j = i + 1;
                                            while (
                                                j < report.roaDetails.length &&
                                                normalize(report.roaDetails[j].nameOfOwner) === currentOwner &&
                                                normalize(report.roaDetails[j].address) === currentAddress
                                            ) {
                                                j++;
                                            }
                                            groups.push({
                                                rows: report.roaDetails.slice(i, j),
                                                originalName,
                                                originalAddress,
                                            });
                                            i = j;
                                        }

                                        return groups.map((group, gi) => (
                                            <View key={gi} style={{ width: '100%', position: 'relative' }}>
                                                {/* Rows for this group */}
                                                {group.rows.map((row, index) => (
                                                    <View style={[styles.row, { flexGrow: 1 }]} key={index} wrap={false}>
                                                        {/* Left columns with actual data */}
                                                        <View style={[styles.roaCell, styles.specificCell, { width: "6%", fontSize: 11, textAlign: 'center', justifyContent: 'center' }]}>
                                                            <Text>{row.itemNo}</Text>
                                                        </View>
                                                        <View style={[styles.roaCell, { width: "9%", fontSize: 11, textAlign: 'center', justifyContent: 'center' }]}>
                                                            <Text>{row.sampleNo}</Text>
                                                        </View>

                                                        {/* Empty placeholders for merged columns */}
                                                        <View style={[styles.roaCell, { width: "28%" }]} />
                                                        <View style={[styles.roaCell, { width: "15%" }]}>
                                                            {index === 0 && group.rows.length === 1 && (
                                                                <Text style={{
                                                                    fontSize: 10,
                                                                    color: 'white',
                                                                    flexWrap: 'wrap',
                                                                    width: '100%',
                                                                }}>
                                                                    {group.originalAddress}
                                                                </Text>
                                                            )}
                                                        </View>  {/*25 and 37 */}

                                                        {/* Right side actual data */}
                                                        <Text style={[styles.roaCell, { width: "10%", textAlign: 'center', color: '#2f5496' }]}>{row.species}</Text>
                                                        <Text style={[styles.roaCell, { width: "9%", textAlign: 'center' }]}>{row.age}</Text>
                                                        <Text style={[styles.roaCell, { width: "5%", textAlign: 'center' }]}>{row.sex}</Text>
                                                        <Text style={[styles.roaCell, { width: "18%", textAlign: 'center' }]}>{row.result}</Text>
                                                    </View>
                                                ))}

                                                {/* nameOfOwner overlay - spans full group height */}
                                                <View style={[styles.cell, {
                                                    position: 'absolute',
                                                    top: 0,
                                                    bottom: 0,
                                                    left: "15%",
                                                    width: "28%",
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',

                                                }]} fixed>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', color: '#2f5496' }}>
                                                        {group.originalName}
                                                    </Text>
                                                </View>

                                                {/* address overlay - spans full group height */}
                                                <View style={[styles.cell, {
                                                    position: 'absolute',
                                                    top: 0,
                                                    bottom: 0,
                                                    left: '43%',
                                                    width: '15%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                }]} fixed>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', color: '#2f5496' }}>
                                                        {group.originalAddress}
                                                    </Text>
                                                </View>
                                            </View>
                                        ));
                                    })()}
                                </View>
                            )
                        )}

                    </View>







                    <View style={[styles.row, { marginTop: 5, marginLeft: 20 }]} >
                        <View style={[styles.row]}>
                            <Text style={[styles.boldFont, { fontSize: 10 }]}>Sample Type:  </Text>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>{report.sampleType}</Text>
                        </View>
                    </View>


                    <View style={[{ fontSize: 9, marginTop: 5, paddingHorizontal: 15 }]} >
                        <Text style={styles.normalFont}>---------------------------------------------------------------------- Nothing Follow -----------------------------------------------------------------------------</Text>
                    </View>
                    <View style={[{ fontSize: 9, textAlign: 'justify', marginTop: 5, paddingHorizontal: 20 }]} fixed>
                        <Text style={styles.italicFont}>Note:</Text>
                        <Text style={[styles.italicFont, { paddingLeft: 15 }]}>{'\u2022'}    The above results were those obtained at the time of test and refer only to the particular item submitted. </Text>
                        <Text style={[styles.italicFont, { paddingLeft: 15 }]}>{'\u2022'}    The context in  <Text style={{ color: '#2f5496' }}>blue font</Text> is an information derived from the data provided by the customer.</Text>
                        <View style={[styles.row, { paddingLeft: 15 }]}>
                            <Text style={styles.italicFont}>{'\u2022'} </Text>
                            <Text style={[styles.italicFont, { paddingLeft: 6 }]} hyphenationCallback={word => [word]}>This report shall not be reproduced, except in full, without prior written approval of the Department of Agriculture Regional Field Office 5 – Integrated Laboratories Division.</Text>
                        </View>
                    </View>

                    <View style={[styles.font, { paddingLeft: 55, bottom: 180, position: 'absolute' }]} fixed>
                        <Text style={{ fontWeight: 'bold', bottom: 35 }}>Analyzed/Examined By:</Text>
                        <Text style={{ fontWeight: 'bold' }}>{report.analyzedBy}</Text>
                        <Text>{report.position}</Text>
                    </View>

                    <View style={[styles.font, { paddingLeft: 335, bottom: 180, position: 'absolute' }]} fixed>
                        <Text style={{ fontWeight: 'bold' }}>{report.analyzedBy2}</Text>
                        <Text>{report.position2}</Text>
                    </View>

                    <View style={[styles.row, { position: 'absolute', bottom: 95, gap: 35 }]} fixed>
                        <View style={[styles.font, { paddingLeft: 55 }]}>
                            <Text style={{ fontWeight: 'bold', bottom: 30 }}>Certified By:</Text>
                            <Text style={{ fontWeight: 'bold' }}>MARIA ERLINDA T. LLAMES, DVM</Text>
                            <Text>Veterinarian III/Laboratory Head</Text>
                        </View>

                        <View style={[styles.font, { paddingLeft: 47 }]}>
                            <Text style={{ fontWeight: 'bold', bottom: 30 }}>Noted By:</Text>
                            <Text style={{ fontWeight: 'bold' }}>ANACLETO B. ESPLANA, RAgr, MPA</Text>
                            <Text>OIC-Chief, Integrated Laboratories Division</Text>
                        </View>
                    </View>


                    <View style={[styles.footer, { position: 'absolute', bottom: 20, left: 20, }]} fixed>
                        <View style={[styles.font]}>
                            <Text>ILD5-RADDL-FR-005-0</Text>
                            <Text>Effectivity Date: March 17, 2026</Text>
                        </View>
                    </View>

                    <Text
                        style={[styles.pageNumber, { right: 30 }]}
                        render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
                        fixed />
                </Page>
            </Document >
        )
    }

    return (
        <>
            {report ? (
                <PDFDownloadLink document={generatePdf()} fileName={`${report.reportId}${fileType}`} style={{ padding: 0 }}>
                    <button className="btn p-0 border-0">
                        {icon}
                    </button>
                </PDFDownloadLink>
            ) : (
                <button className="btn p-0 border-0" disabled>
                    {disabledIcon}
                </button>
            )}
        </>
    )

}

export default GenerateRoa