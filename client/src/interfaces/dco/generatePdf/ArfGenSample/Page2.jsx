import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import styles from '../Styles';
import image1 from '../../../analysts/components/images/DA5.jpg';
import image2 from '../../../dco/components/images/unnamed.png'
import terms from '../data/Terms';
import { useEffect, useState } from 'react';

const Page2 = ({ request, }) => {


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

    const sampleLabel = [
        "Clear and properly labeled"
    ]

    const quantityOfSample = [
        "Serum at least 500 ul to 1 ml",
        "Whole Blood at least 3 ml",
        "Feces at least 10 grams",
        "Organ approximately 2x2 in",
        "Water Sample",
        "Swab(Oropharyngeal / Cloacal Swab)",
        "Others",
    ]

    const preservationUsed = [
        "Whole blood EDTA (Violet Top)",
        "Serum – Clot Activator (Red Top: Clear, straw colored or pale yellow – refer to the Hemolysis reference palette)",
        "Serum – Microcentrifuge tubes/Screw-capped tubes",
        "Other",
    ]

    const transport = [
        "Triple Packaging",
        "Use of leak proof container",
        "Use of proper storage (styrobox or cooler w/ iced gel pack or ice)",
        "Other",
    ]

    const stateOfSample = [
        "All samples: Sterile and free of contamination ",
        "Serum: refer to the hemolysis reference from the BAI",
        "Whole Blood: Bright red and non-hemolyzed",
        "Sample for Necropsy: Submitted within 6 hours after death",
    ]

    const rejectionOfSamples = [
        "Improper collection/transport/storage",
        "Unlabeled/mislabeled",
        "Insufficient samples for the test requested",
        "Improper/incomplete information/no forms attached",
        "Excessive hemolysis",
        "Sample contamination",
        "Swab for Bacteriology",
        "Improper tube type for Whole Blood",
    ]

    const sampleStorage = [
        "Room temperature",
        "Refrigerated",
        "Frozen",
    ]

    const isChecked = (value, request) => {
        return (request ?? []).includes(value) ? styles.checkedBox2 : styles.checkbox2;
    }

    const generatePdf = () => {
        if (!request || !request.data) return;


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
                                <View style={[styles.cellTwo, { width: '100%', borderRightWidth: 0, borderLeftWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 11, }]}>Filled out by the RADDL staff</Text>
                                </View>
                                <View style={[styles.cellFour, styles.boldFont, { textAlign: 'center', width: '100%', borderLeftWidth: 0 }]}>
                                    <Text>ASSESSMENT</Text>
                                </View>

                                <View style={[styles.cellFour, { width: '100%', borderLeftWidth: 0 }]}>
                                    {/*------------------Sample Labeling------------------- */}
                                    <View style={[styles.boldFont, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>1. Sample Labeling</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15 }]}>
                                        <Text style={isChecked(sampleLabel[0], request.data.sampleLabel)} />
                                        <Text>{sampleLabel[0]}</Text>
                                    </View>
                                    {/*------------------Quantity of Sample------------------- */}
                                    <View style={[styles.boldFont, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>2. Quantity of Sample</Text>
                                    </View>
                                    {quantityOfSample.map((quantity, index) => (
                                        <View key={index} style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                            <Text style={isChecked(quantity, request.data.quantityOfSample)} />
                                            <Text>{quantity}</Text>
                                            {quantity === 'Others' && (
                                                <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.sampleQuantityOthers || ' '}</Text>
                                            )}
                                        </View>
                                    ))}
                                    {/*------------------Proper preservation used for sample type------------------- */}
                                    <View style={[styles.boldFont, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>3. Proper preservation used for sample type</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={isChecked(preservationUsed[0], request.data.preservationUsed)} />
                                        <Text>{preservationUsed[0]}</Text>
                                    </View>
                                    <View style={[styles.row, { fontSize: 10, paddingLeft: 15, width: '81%', marginBottom: 3 }]}>
                                        <Text style={[isChecked(preservationUsed[1], request.data.preservationUsed), { marginTop: 3 }]} />
                                        <Text>{preservationUsed[1]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={isChecked(preservationUsed[2], request.data.preservationUsed)} />
                                        <Text>{preservationUsed[2]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={isChecked(preservationUsed[3], request.data.preservationUsed)} />
                                        <Text>{preservationUsed[3]}</Text>
                                        <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.preserveOthers || ' '}</Text>
                                    </View>

                                    {/*------------------Proper Transport------------------- */}
                                    <View style={[styles.boldFont, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>4. Proper Transport</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={isChecked(transport[0], request.data.transport)} />
                                        <Text>{transport[0]}</Text>
                                    </View>
                                    <View style={[styles.row, { fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={[isChecked(transport[1], request.data.transport), { marginTop: 3 }]} />
                                        <Text>{transport[1]}</Text>
                                    </View>
                                    <View style={[styles.row, { fontSize: 10, paddingLeft: 15, width: '84%', marginBottom: 3 }]}>
                                        <Text style={[isChecked(transport[2], request.data.transport), { marginTop: 3 }]} />
                                        <Text>{transport[2]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={isChecked(transport[3], request.data.transport)} />
                                        <Text>{transport[3]}</Text>
                                        <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.tranportOthers || ' '}</Text>
                                    </View>

                                    {/*------------------State of sample when it reached the laboratory------------------- */}
                                    <View style={[styles.boldFont, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>5. State of sample when it reached the laboratory</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={isChecked(stateOfSample[0], request.data.stateOfSample)} />
                                        <Text>{stateOfSample[0]}</Text>
                                    </View>
                                    <View style={[styles.row, { fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={[isChecked(stateOfSample[1], request.data.stateOfSample)]} />
                                        <Text>{stateOfSample[1]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center', fontSize: 10, paddingLeft: 15, marginBottom: 3 }]}>
                                        <Text style={[isChecked(stateOfSample[2], request.data.stateOfSample)]} />
                                        <Text>{stateOfSample[2]}</Text>
                                    </View>
                                    <View style={[styles.row, { fontSize: 10, paddingLeft: 15, width: '81%', marginBottom: 3 }]}>
                                        <Text style={[isChecked(stateOfSample[3], request.data.stateOfSample), { marginTop: 3 }]} />
                                        <Text>{stateOfSample[3]}</Text>
                                    </View>
                                </View>

                                {/*------------------CRITERIA FOR REJECTION OF SAMPLES------------------- */}
                                <View style={[styles.cellFour, { width: '100%', textAlign: 'center', paddingBottom: 5 }]}>
                                    <Text style={styles.boldFont}>CRITERIA FOR REJECTION OF SAMPLES</Text>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    {rejectionOfSamples.map((sample, index) => (
                                        <View style={[styles.row, { alignItems: 'center', paddingLeft: 15, fontSize: 10, marginBottom: 3 }]}>
                                            <Text style={isChecked(sample, request.data.rejectionOfSamples)} />
                                            <Text>{sample}</Text>
                                        </View>
                                    ))}
                                </View>
                                <View style={[styles.cellFour, { width: '100%', textAlign: 'center' }]}>
                                    <Text style={styles.boldFont}>REVIEW OF REQUEST</Text>
                                </View>
                                <View style={[styles.cellFour, { width: '100%', borderBottomWidth: 0 }]}>
                                    <View style={[{ paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>1. Sample Storage:</Text>
                                    </View>
                                    {sampleStorage.map((sample, index) => (
                                        <View style={[styles.row, { alignItems: 'center', paddingLeft: 15 }]}>
                                            <Text style={isChecked(sample, request.data.sampleStorage)} />
                                            <Text>{sample}</Text>
                                        </View>
                                    ))}
                                    <View style={[styles.row, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>2. Sample retention (days, months, years):</Text>
                                        <Text>{request.data.sampleRetentionDate}</Text>
                                    </View>
                                    <View style={[styles.row, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}>3. Sample storage location:</Text>
                                        <Text style={[{ fontSize: 10 }]}>{request.data.sampleStorageLocation}</Text>
                                    </View>
                                    <View style={[styles.row, { paddingLeft: 3 }]}>
                                        <Text style={[{ fontSize: 10 }]}> Sample disposal date:</Text>
                                        <Text style={[{ fontSize: 10 }]}>{formatDate(request.data.sampleDisposalDate)}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '52%', borderRightWidth: 1 }]}>
                                <View style={[styles.cellTwo, { width: '100%', borderRightWidth: 0, textAlign: 'center', borderLeftWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 11, }]}>TERMS AND CONDITIONS</Text>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[0].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[0].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[1].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[1].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[2].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[2].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[3].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[3].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[4].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[4].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[5].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[5].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[6].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[6].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[7].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[7].content}`}</Text>
                                    </Text>
                                    <View style={styles.row}>
                                        <Text> </Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '100%', borderBottomWidth: '0' }]}>
                                    <Text style={[{ flexWrap: 'wrap', textAlign: 'justify', paddingHorizontal: 3 }]} hyphenationCallback={word => [word]}>
                                        <Text style={[styles.termsBold, { fontSize: 10 }]}>{`${terms[8].title}`}</Text>
                                        <Text style={[styles.termsNormal, { fontSize: 10 }]}>{`${terms[8].content}`}</Text>
                                    </Text>
                                    <View style={[styles.row, { paddingBottom: 20 }]}>
                                        <Text> </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>

        )
    }

    return generatePdf()
}

export default Page2