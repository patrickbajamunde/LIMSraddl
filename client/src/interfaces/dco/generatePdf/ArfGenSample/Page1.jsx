import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import styles from '../Styles';
import image1 from '../../../analysts/components/images/DA5.jpg';
import image2 from '../../../dco/components/images/unnamed.png'
import terms from '../data/Terms';
import { useEffect, useState } from 'react';

const TestPdf = ({ request }) => {


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

    const specimenList = [
        "Bovine",
        "Bubaline",
        "Swine",
        "Caprine",
        "Ovine",
        "Feline",
        "Equine",
        "Canine",
        "Avian (Specify)",
        "Others",
    ]

    const sexList = [
        "Male",
        "Female"
    ]

    const wholeAnimal = [
        "Live",
        "Dead/Sacrificed (Hours since death)"
    ]

    const specimenPart = [
        'Swab',
        'Blood',
        'Serum',
        'Others',
        'Feces',
        'Blood Smear',
        'Tissue/Organs',
    ]

    const pathologyList = [
        "Gross Examination/Necropsy",
        "Complete Blood Count (Haemocytometry, Microhematocrit Tube Method)",
        "Others"
    ]

    const rapidPlateTest = [
        "Brucella spp",
        "M. gallisepticum",
        "S. pullorum",
        "Others",
        "M. synoviae",
    ]

    const isoAndIdenList = [
        "Bacterial(Biochemical Reaction Method and Plate Method using Differential Agars)",
        "Antibiotic Sensitivity Test(Kirby - Bauer Method)",
        "Bacterial Count",
    ]

    const bloodParasiteExam = [
        "CATT(Trypanosomiasis)",
        "Direct Smear",
        "Giemsa - Stained Smear",
        "Microhematocrit Centrifugation Technique"
    ]

    const fecalysisList = [
        "Direct Smear",
        "Test Tube Flotation Method",
        "McMaster Method",
        "Sedimentation Technique"
    ]
    const parasiteIden = [
        "Parasite Identification",
    ]

    const virologyList = [
        "Hemagglutination-Inhibition Test (HI)",
        "Newcastle Disease",
        "Avian Influenza",
        "Others"
    ]

    const elisaList = [
        "African Swine Fever Virus (ASFV)",
        "Infectious Laryngotracheitis Virus (ILTV) in serum",
        "Influenza A Virus (IAV)",
        "New Castle Disease Virus (NCDV)",
        "Bluetongue Virus (BTV)",
        "Paratuberculosis (Johne’s Disease)",
        "Brucellosis",
        "Porcine Reproductive and Respiratory Syndrome Virus (PRRSV)",
        "Caprine Arthritis Encephalitis Virus (CAEV)",
        "Q - Fever (Coxiella burnetti) Virus",
        "Classical Swine Fever Virus (CSFV)",
        "Others",
        "Infectious Bursal Disease Virus (IBDV) in serum",
    ]

    const pcrList = [
        "African Swine Fever(ASF)",
        "Avian Influenza A",
        "Q - Fever(Coxiella burnetii)",
        "Others"
    ]

    const purposeList = [
        "Diagnostics",
        "Disease Investigation",
        "Regulatory",
        "Farm Accreditation",
        "Local Shipment",
        "Research/Thesis",
        "Surveillance",
        "Others",
        "Imported Under Quarantine",
    ]

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

    const bacteOthers2 = [
        "Water Coliforn Count",
        "Others"
    ]

    const isChecked = (value, request) => {
        return (request ?? []).includes(value) ? styles.checkedBox : styles.checkbox;
    }

    const isChecked2 = (value, request) => {
        return (request ?? []).some(item => item.name === value) ? styles.checkedBox : styles.checkbox;
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

                <View style={[styles.table, { marginTop: 15 }]}>
                    <View style={styles.row}>
                        {/*------------------------------------------ Request Details ----------------------------------------*/}
                        <View style={[{ width: '55%' }]}>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellFour, { width: '21.5%', paddingLeft: 4, paddingBottom: 8 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 9, }]}>REQUEST ID:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '78.5%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                                    <Text style={[styles.normalFont, { paddingLeft: 20, fontSize: 9 }]}>{request.requestId}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[{ width: '45%' }]}>
                            <View style={[styles.row, { width: '100%' }]}>
                                <Text style={[styles.cellTwo, styles.boldFont, { width: '43%', fontSize: 9, paddingLeft: 4, paddingBottom: 8 }]}>Document Type </Text>
                                <View style={[styles.cellTwo, styles.row, { width: '57%', borderLeftWidth: 0 }]}>
                                    <View style={[styles.row, styles.normalFont, { alignItems: 'center', paddingLeft: 5, borderRightWidth: 1, paddingRight: 10, paddingBottom: 8 }]}>
                                        <Text style={styles.checkbox}></Text>
                                        <Text style={[{ fontSize: 9 }]}>Hardcopy</Text>
                                    </View>
                                    <View style={[styles.row, styles.normalFont, { alignItems: 'center', paddingLeft: 10, paddingBottom: 8 }]}>
                                        <Text style={styles.checkbox}></Text>
                                        <Text style={[{ fontSize: 9 }]}>E-copy</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[{ width: "55%" }]}>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '55%', borderBottomWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 9, paddingLeft: 4 }]}>LABORATORY ACCESSION NUMBER:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '45%', borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }]}>
                                    <Text style={[styles.normalFont, { paddingLeft: 20 }]}>{request.labAccessionNumber}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.cellTwo, styles.boldFont, { width: "45%", borderBottomWidth: 0, paddingLeft: 4 }]}>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '65%' }]} >
                                    <Text style={[styles.boldFont, { fontSize: 9 }]}>DATE SUBMITTED (MM/DD/YYYY):</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '35%', borderLeftWidth: 0, borderBottomWidth: 0, borderRightWidth: 0 }]}>
                                    <Text style={{ fontWeight: 'normal' }}>{request.data?.dateSubmitted}</Text>
                                </View>
                            </View>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '42%', borderBottomWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 9 }]}>TIME:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '58%', borderRightWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0 }]}>
                                    <Text style={{ fontWeight: 'normal' }}>{request.data?.samplingTime}</Text>
                                </View>
                            </View>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '42%', borderBottomWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 9 }]}>DATE COLLECTED:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '58%', borderRightWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0 }]}>
                                    <Text style={{ fontWeight: 'normal' }}>{formatDate(request.data?.dateCollected)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Customer details ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[{ width: '55%', paddingLeft: 4, paddingBottom: 2 }]}>
                            <Text style={[styles.boldFont, { fontSize: 9 }]}>ORIGIN OF SAMPLES:</Text>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Owner/Farm:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.locOfFarm || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Baranggay:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.barangay || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Municipality</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.municipality || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Province:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.province || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Contact No.</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.contactNo || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Email:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.email || ' '}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: '45%', borderBottomWidth: 0, paddingLeft: 4, paddingBottom: 2 }]}>
                            <Text style={[styles.boldFont, { fontSize: 9 }]}>SUBMITTED BY:</Text>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Name:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientName || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Address:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientAddress || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Age:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientAge || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Sex:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientGender || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Contact:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientContact || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 9 }]}>Email:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientEmail || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ SPECIMEN / QUANTITY SUBMITTED----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>SPECIMEN / QUANTITY SUBMITTED</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '14%', borderBottomWidth: 0, borderRightWidth: 1, paddingBottom: 6, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 9 }]}>Species: </Text>
                        </View>
                        <View style={[styles.row, { flexWrap: 'wrap', width: '86%', borderBottomWidth: 0, paddingBottom: 3 }]}>
                            {specimenList.map((specimen, index) => (
                                <View key={index} style={[styles.row, { width: '25%', alignItems: 'center', paddingLeft: 18 }]}>
                                    <Text style={isChecked2(specimen, request.data.specimen)}/>
                                    <Text style={styles.row}>{specimen}</Text>
                                    <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center', width: '20%' }]}>
                                        {request.data.specimen.find(item => item.name === specimen)?.quantity || ' '}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    {/*------------------------------------------ specimen gender ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[{ width: '55%' }]}>
                            <Text style={[styles.normalFont, { fontSize: 9, paddingLeft: 4 }]}>Age:</Text>
                        </View>
                        <View style={[styles.cellTwo, styles.row, { width: '45%', borderBottomWidth: 0, borderRightWidth: 0 }]}>
                            <Text style={[styles.normalFont, { fontSize: 9, paddingLeft: 15, paddingVertical: 1 }]}>Sex:</Text>
                            {sexList.map((sex, index) => (
                                <View key={index} style={[styles.row, { alignItems: 'center', paddingLeft: 18, }]}>
                                    <Text style={isChecked(sex, request.data.sex)}></Text>
                                    <Text style={styles.row}>{sex}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    {/*------------------------------------------ Specimen----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '14%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 9 }]}>Specimen: </Text>
                        </View>

                        <View style={[styles.row, { flexWrap: 'wrap', width: '86%', borderBottomWidth: 0 }]}>
                            <View style={[styles.row, { width: '100%', borderBottomWidth: 1, paddingBottom: 2 }]}>
                                <Text style={[styles.normalFont, { fontSize: 9, paddingLeft: 8 }]}>Whole Animal </Text>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                    <Text style={[isChecked2(wholeAnimal[0], request.data.wholeAnimal)]}></Text>
                                    <Text style={styles.row}>{wholeAnimal[0]}</Text>
                                    <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center', width: '20%' }]}>
                                        {request.data.wholeAnimal.find(item => item.name === wholeAnimal[0])?.quantity || ' '}
                                    </Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 80, }]}>
                                    <Text style={[isChecked2(wholeAnimal[1], request.data.wholeAnimal)]}></Text>
                                    <Text style={styles.row}>{wholeAnimal[1]}</Text>
                                    <Text style={[{ borderBottomWidth: 0.5, width: '20%', paddingLeft: 12 }]}>
                                        {request.data.wholeAnimal.find(item => item.name === wholeAnimal[1])?.quantity || ' '}
                                    </Text>
                                </View>
                            </View>
                            {specimenPart.map((specimen, index) => (
                                <View key={index} style={[styles.row, { width: '25%', alignItems: 'center', paddingLeft: 18, paddingBottom: 2 }]}>
                                    <Text style={isChecked2(specimen, request.data.specimenPart)}>
                                    </Text>
                                    <Text style={styles.row}>{specimen}</Text>
                                    <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center', width: '20%' }]}>
                                        {request.data.specimenPart.find(item => item.name === specimen)?.quantity || ' '}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    {/*------------------------------------------ Examination Requested ----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>EXAMINATION REQUESTED</Text>
                        </View>
                    </View>
                    {/*------------------------------------------ Pathology----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>PATHOLOGY</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, { width: "48%", borderLeftWidth: 0, textAlign: 'center', borderRightWidth: 0 }]}>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(pathologyList[0], request.data.pathologyList)}></Text>
                                <Text style={styles.row}>{pathologyList[0]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: "52%", borderLeftWidth: 0 }]}>
                            <View style={[styles.row]}>
                                <Text style={[isChecked(pathologyList[1], request.data.pathologyList), { marginTop: 3 }]}></Text>
                                <Text style={[styles.row, { flexWrap: 'wrap', width: '85%' }]}>{pathologyList[1]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(pathologyList[2], request.data.pathologyList)}></Text>
                                <Text style={styles.row}>{pathologyList[2]}: </Text>
                                <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.pathologyOthers || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Bacteriology----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>BACTERIOLOGY</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[{ width: '55%' }]}>
                            <View style={[styles.cellFour, styles.boldFont, { textAlign: 'center', fontSize: 9 }]}>
                                <Text>Isolation & Identification</Text>
                            </View>
                            <View style={[styles.row, { paddingLeft: 18 }]}>
                                <Text style={[isChecked(isoAndIdenList[0], request.data.isoAndIdenList), { marginTop: 3 }]} />
                                <Text style={[styles.row, { flexWrap: 'wrap', width: '85%' }]}>{isoAndIdenList[0]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(isoAndIdenList[1], request.data.isoAndIdenList)}></Text>
                                <Text style={styles.row}>{isoAndIdenList[1]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(isoAndIdenList[2], request.data.isoAndIdenList)}></Text>
                                <Text style={styles.row}>{isoAndIdenList[2]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: '45%', borderBottomWidth: 0, borderRightWidth: 0 }]}>
                            <View style={[styles.cellFour, styles.boldFont, { textAlign: 'center', fontSize: 9 }]}>
                                <Text>Rapid Plate Test</Text>
                            </View>
                            <View style={[styles.row, { width: '86%', flexWrap: 'wrap', paddingLeft: 18 }]}>
                                {rapidPlateTest.map((test, index) => (
                                    <View key={index} style={[styles.row, { alignItems: 'center', width: '50%' }]}>
                                        <Text style={isChecked(test, request.data.rapidPlateTest)} />
                                        <Text>{test}</Text>
                                        {test === 'Others' && (
                                            <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.rpcOthers || ' '}</Text>
                                        )}
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.row, { width: "100%", borderLeftWidth: 0, paddingLeft: 4, paddingTop: 2, paddingBottom: 5 }]}>
                            <Text>Other Tests:</Text>
                            <Text style={{ fontSize: 9, borderBottomWidth: 0.5, textAlign: 'center' }}>{request.data.otherTests || ' '}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.row, { width: "100%", borderLeftWidth: 0, paddingLeft: 18 }]}>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(bacteOthers2[0], request.data.bacteOthers2)} />
                                <Text style={styles.normalFont}>{bacteOthers2[0]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 198 }]}>
                                <Text style={isChecked(bacteOthers2[1], request.data.bacteOthers2)} />
                                <Text style={styles.normalFont}>{bacteOthers2[1]}</Text>
                                <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.bacteOthers || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Parasitology----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>PARASITOLOGY</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[{ width: '55%' }]}>
                            <View style={styles.row}>
                                <View style={[{ width: '50%' }]}>
                                    <View style={[styles.cellFour, styles.boldFont, { textAlign: 'center', fontSize: 9 }]}>
                                        <Text>Fecalysis</Text>
                                    </View>
                                    {fecalysisList.map((fecalysis, index) => (
                                        <View key={index} style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                            <Text style={isChecked(fecalysis, request.data.fecalysis)} />
                                            <Text>{fecalysis}</Text>
                                        </View>
                                    ))}
                                </View>
                                <View style={[styles.cellTwo, { width: '50%', borderBottomWidth: 0, borderRightWidth: 0 }]}>
                                    <View style={[styles.cellFour, styles.boldFont, { textAlign: 'center', fontSize: 9 }]}>
                                        <Text>Parasite Identification</Text>
                                    </View>
                                    {parasiteIden.map((parasite, index) => (
                                        <View key={index} style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                            <Text style={isChecked(parasite, request.data.parasiteIden)} />
                                            <Text>{parasite}</Text>
                                        </View>
                                    ))}

                                </View>
                            </View>

                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 8, borderTopWidth: 1 }]}>
                                <Text style={styles.normalFont}>Other Tests:</Text>
                                <Text style={styles.normalFont}>{request.data.parasiteOthers}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: '45%', borderBottomWidth: 0, borderRightWidth: 0 }]}>
                            <View style={[styles.cellFour, styles.boldFont, { textAlign: 'center', fontSize: 9 }]}>
                                <Text>Blood Parasite Examination</Text>
                            </View>
                            <View style={[{ width: '86%', paddingLeft: 18 }]}>
                                {bloodParasiteExam.map((exam, index) => (
                                    <View key={index} style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(exam, request.data.bloodParasiteExam)} />
                                        <Text>{exam}</Text>
                                    </View>
                                ))}
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 8, borderTopWidth: 1 }]}>
                                <Text style={styles.normalFont}>Other Tests:</Text>
                                <Text style={styles.normalFont}>{request.data.bloodParaOthers}</Text>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Virology----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>VIROLOGY</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={[styles.cellTwo, styles.row, { width: "100%", borderLeftWidth: 0, paddingLeft: 8 }]}>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(virologyList[0], request.data.virologyList)} />
                                <Text style={styles.normalFont}>{virologyList[0]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: "100%", borderLeftWidth: 0, paddingLeft: 18 }]}>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(virologyList[1], request.data.virologyList)} />
                                <Text style={styles.normalFont}>{virologyList[1]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(virologyList[2], request.data.virologyList)} />
                                <Text style={styles.normalFont}>{virologyList[2]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(virologyList[3], request.data.virologyList)} />
                                <Text style={styles.normalFont}>{virologyList[3]}</Text>
                                <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.virologyOthers || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Enzyme-Linked Immunosorbent Assay (ELISA)----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>Enzyme-Linked Immunosorbent Assay (ELISA)</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[{ width: '62%' }]}>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[0], request.data.elisaList)} />
                                <Text>{elisaList[0]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[2], request.data.elisaList)} />
                                <Text>{elisaList[2]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[4], request.data.elisaList)} />
                                <Text>{elisaList[4]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[6], request.data.elisaList)} />
                                <Text>{elisaList[6]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[8], request.data.elisaList)} />
                                <Text>{elisaList[8]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[10], request.data.elisaList)} />
                                <Text>{elisaList[10]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[12], request.data.elisaList)} />
                                <Text>{elisaList[12]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: '38%', borderBottomWidth: 0, borderRightWidth: 0 }]}>
                            <View style={[styles.row, { paddingLeft: 18 }]}>
                                <Text style={[isChecked(elisaList[1], request.data.elisaList), { marginTop: 3 }]} />
                                <Text style={[styles.row, { flexWrap: 'wrap', width: '82%' }]}>{elisaList[1]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[3], request.data.elisaList)} />
                                <Text>{elisaList[3]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[5], request.data.elisaList)} />
                                <Text>{elisaList[5]}</Text>
                            </View>
                            <View style={[styles.row, { paddingLeft: 18 }]}>
                                <Text style={[isChecked(elisaList[7], request.data.elisaList), { marginTop: 3 }]} />
                                <Text style={[styles.row, { flexWrap: 'wrap', width: '82%' }]}>{elisaList[7]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[9], request.data.elisaList)} />
                                <Text>{elisaList[9]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(elisaList[11], request.data.elisaList)} />
                                <Text>{elisaList[11]}</Text>
                                <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.elisaOthers || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Polymerase Chain Reaction (PCR)----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>Polymerase Chain Reaction (PCR)</Text>
                        </View>
                    </View>
                    <View style={[styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        {pcrList.map((pcr, index) => (
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(pcr, request.data.pcrList)} />
                                <Text>{pcr}</Text>
                                {pcr === 'Others' && (
                                    <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center' }]}>{request.data.pcrOthers || ' '}</Text>
                                )}
                            </View>
                        ))}
                    </View>

                    {/*------------------------------------------ Purpose----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 9 }}>PURPOSE</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[{ width: '62%' }]}>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(purposeList[0], request.data.purposeList)} />
                                <Text>{purposeList[0]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(purposeList[2], request.data.purposeList)} />
                                <Text>{purposeList[2]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(purposeList[4], request.data.purposeList)} />
                                <Text>{purposeList[4]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(purposeList[6], request.data.purposeList)} />
                                <Text>{purposeList[6]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(purposeList[8], request.data.purposeList)} />
                                <Text>{purposeList[8]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: '38%', borderBottomWidth: 0, borderRightWidth: 0 }]}>
                            <View style={[styles.row, { paddingLeft: 18 }]}>
                                <Text style={[isChecked(purposeList[1], request.data.purposeList), { marginTop: 3 }]} />
                                <Text style={[styles.row, { flexWrap: 'wrap', width: '82%' }]}>{purposeList[1]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(purposeList[3], request.data.purposeList)} />
                                <Text>{purposeList[3]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: 'center', paddingLeft: 18 }]}>
                                <Text style={isChecked(purposeList[5], request.data.purposeList)} />
                                <Text>{purposeList[5]}</Text>
                            </View>
                            <View style={[styles.row, { paddingLeft: 18 }]}>
                                <Text style={[isChecked(purposeList[7], request.data.purposeList), { marginTop: 3 }]} />
                                <Text style={[styles.row, { flexWrap: 'wrap', width: '82%' }]}>{purposeList[7]}</Text>
                                <Text style={[{ borderBottomWidth: 0.5}]}>{request.data.purposeOthers || ' '}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </Page>

        )
    }
    return generatePdf()

}

export default TestPdf