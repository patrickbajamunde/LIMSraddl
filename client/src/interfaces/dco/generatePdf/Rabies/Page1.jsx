import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import styles from '../Styles';
import image1 from '../../../analysts/components/images/DA5.jpg';
import image2 from '../../../dco/components/images/unnamed.png'
import terms from '../data/Terms';
import { useEffect, useState } from 'react';

const Rabies = ({ request }) => {


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
        "Canine",
        "Feline",
        "Others",
    ]

    const animalResidence = [
        "Stray",
        "Home"
    ]
    const sexList = [
        "Male",
        "Female"
    ]

    const mannerOfDeath = [
        "Euthanasia",
        "Found Dead",
        "Others"
    ]

    const vacHistory = [
        "Vaccinated",
        "Unvaccinated",
        "Unknown",
        "Outdated"
    ]

    const damVaccinated = [
        "Yes",
        "No",
        "Unknown"
    ]

    const contactWithOtherAnimals = [
        "Yes",
        "No"
    ]

    const contactWithAnimals = [
        "Household",
        "Pound",
        "Neighborhood"
    ]

    const animalCondition = [
        "Confined in household",
        "Free-roaming and owned",
        "Stray"
    ]

    const observedChanges = [
        "Aimless Running",
        "Apprehensive Watchful look",
        "Convulsion/Seizure",
        "Drooling Saliva",
        "Eating Inanimate Objects",
        "Lethargy/Weakness",
        "Paralysis",
        "Restlesness",
        "Sudden Isolation/Hiding",
        "Unprovoked Aggressiveness"
    ]

    const otherChanges = [
        "Diarrhea",
        "Vomiting",
        "Inappetence",
        "Others"
    ]

    const purposeList = [
        "Diagnostics",
        "Surveillance",
        "Confirmatory",
        "Others",
    ]

    const isChecked = (value, request) => {
        return (request ?? []).includes(value) ? styles.checkedBox : styles.checkbox;
    }

    const isChecked2 = (value, request) => {
        return (request ?? []).some(item => item.name === value) ? styles.checkedBox : styles.checkbox;
    }

    const isCheckedRadio = (request, data) => {
        return (request === data) ? styles.checkedBox : styles.checkbox;
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
                        <Text style={[styles.titleBold, { fontSize: 12, }]}>(RABIES)</Text>
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

                <View style={[styles.table, { marginTop: 6 }]}>
                    <View style={styles.row}>
                        {/*------------------------------------------ Request Details ----------------------------------------*/}
                        <View style={[{ width: '51.5%' }]}>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellFour, { width: '21.5%', paddingLeft: 4, paddingBottom: 8 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 10, }]}>REQUEST ID:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '78.5%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                                    <Text style={[styles.normalFont, { paddingLeft: 20, fontSize: 10 }]}>{request.requestId}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[{ width: '48.5%' }]}>
                            <View style={[styles.row, { width: '100%' }]}>
                                <Text style={[styles.cellTwo, styles.boldFont, { width: '43%', fontSize: 10, paddingLeft: 4, paddingBottom: 8 }]}>Document Type </Text>
                                <View style={[styles.cellTwo, styles.row, { width: '57%', borderLeftWidth: 0 }]}>
                                    <View style={[styles.row, styles.normalFont, { alignItems: 'center', paddingLeft: 5, borderRightWidth: 1, paddingRight: 10, paddingBottom: 8 }]}>
                                        <Text style={styles.checkbox}></Text>
                                        <Text style={[{ fontSize: 10 }]}>Hardcopy</Text>
                                    </View>
                                    <View style={[styles.row, styles.normalFont, { alignItems: 'center', paddingLeft: 10, paddingBottom: 8 }]}>
                                        <Text style={styles.checkbox}></Text>
                                        <Text style={[{ fontSize: 10 }]}>E-copy</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[{ width: "51.5%" }]}>
                            <View style={[{ width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '100%', borderBottomWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 10, paddingLeft: 4 }]}>LABORATORY ACCESSION NUMBER:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '100%', borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }]}>
                                    <Text style={[styles.normalFont, { paddingLeft: 20, fontSize: 10 }]}>{request.labAccessionNumber}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.cellTwo, styles.boldFont, { width: "48.5%", borderBottomWidth: 0, paddingLeft: 4 }]}>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '65%' }]} >
                                    <Text style={[styles.boldFont, { fontSize: 10 }]}>DATE SUBMITTED (MM/DD/YYYY):</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '35%', borderLeftWidth: 0, borderBottomWidth: 0, borderRightWidth: 0 }]}>
                                    <Text style={{ fontWeight: 'normal', fontSize: 10 }}>{request.data?.dateSubmitted}</Text>
                                </View>
                            </View>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '42%', borderBottomWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 10 }]}>TIME:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '58%', borderRightWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0 }]}>
                                    <Text style={{ fontWeight: 'normal', fontSize: 10 }}>{request.data?.samplingTime}</Text>
                                </View>
                            </View>
                            <View style={[styles.row, { width: '100%' }]}>
                                <View style={[styles.cellThree, { width: '42%', borderBottomWidth: 0 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 10 }]}>DATE COLLECTED:</Text>
                                </View>
                                <View style={[styles.cellTwo, { width: '58%', borderRightWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0 }]}>
                                    <Text style={{ fontWeight: 'normal', fontSize: 10 }}>{formatDate(request.data?.dateCollected)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Customer details ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[{ width: '51.5%', paddingLeft: 4, paddingBottom: 8, }]}>
                            <Text style={[styles.boldFont, { fontSize: 10 }]}>ORIGIN OF SAMPLES:</Text>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Owner/Farm:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.locOfFarm || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Baranggay:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.barangay || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Municipality</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.municipality || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Province:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.province || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Contact No.</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.contactNo || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Email:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.email || ' '}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { width: '48.5%', borderBottomWidth: 0, paddingLeft: 4, paddingBottom: 2 }]}>
                            <Text style={[styles.boldFont, { fontSize: 10 }]}>SUBMITTED BY:</Text>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Name:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientName || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Address:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientAddress || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Age:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientAge || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Sex:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientGender || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Contact:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientContact || ' '}</Text>
                            </View>
                            <View style={[styles.row]}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>Email:</Text>
                                <Text style={{ borderBottomWidth: '0.5', width: '70%' }}> {request.clientEmail || ' '}</Text>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ ANIMAL PROFILE----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 10 }}>ANIMAL PROFILE</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.5%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Species: </Text>
                            <View style={[styles.row, { marginVertical: 8 }]}>
                                <Text style={[styles.normalFont, { fontSize: 10, }]}>Age:</Text>
                                <Text style={[{ borderBottom: 0.5, width: '30%' }]}>{request.data.specimenAge || ' '}</Text>
                            </View>

                        </View>
                        <View style={[styles.cellFour, { width: '24%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.row, { alignItems: "center", marginVertical: 6 }]}>
                                <Text style={isChecked2(specimenList[0], request.data.specimen)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{specimenList[0]}</Text>
                            </View>
                            <View style={[styles.row, { alignItems: "center" }]}>
                                <Text style={isChecked2(specimenList[2], request.data.specimen)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{specimenList[2]}</Text>
                                <View style={[{ borderBottomWidth: 0.5, textAlign: 'center', width: '20%' }]}>
                                    <Text>{request.data.specimen.find(item => item.name === specimenList[2])?.quantity || ' '}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.cellFour, { width: '24%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.row, { alignItems: "center", marginVertical: 6 }]}>
                                <Text style={isChecked2(specimenList[1], request.data.specimen)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{specimenList[1]}</Text>
                            </View>
                        </View>
                        <View style={[{ paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={styles.row}>
                                <Text style={[styles.normalFont, { fontSize: 10, }]}>Breed:</Text>
                                <Text style={[{ borderBottom: 0.5, width: 60 }]}>{request.data.specimenBreed || ''}</Text>
                            </View>

                        </View>

                    </View>
                    {/*------------------------------------------ residence of animal ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[{ width: '27.34%' }]}>
                            <Text style={[styles.normalFont, { fontSize: 10, paddingLeft: 4 }]}>Residence of Animal for the Last 3 Months</Text>
                        </View>
                        <View style={[styles.cellTwo, { width: '30%', borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(animalResidence[0], request.data.animalResidence)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{animalResidence[0]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(animalResidence[1], request.data.animalResidence)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{animalResidence[1]}</Text>
                            </View>
                        </View>
                    </View>
                    {/*------------------------------------------ Address----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, { width: "100%", borderLeftWidth: 0, paddingLeft: 4 }]}>
                            <Text style={{ fontSize: 10 }}>*Please Indicate the address below</Text>
                        </View>
                    </View>
                    <View style={[styles.cellTwo, { width: "100%", borderLeftWidth: 0, }]}>
                        <View style={[styles.row, { paddingHorizontal: 10, paddingTop: 7 }]}>
                            <View style={[{ alignItems: 'center', width: '10%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center' }]}>{request.data.animalNo}</Text>
                                <Text style={[styles.row]}>No</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '22%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center' }]}>{request.data.animalStreet}</Text>
                                <Text style={[styles.row]}>Street</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '22%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center' }]}>{request.data.animalBarangay}</Text>
                                <Text style={[styles.row]}>Barangay</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '24%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center' }]}>{request.data.animalCity}</Text>
                                <Text style={[styles.row]}>City/Municipality</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '22%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center' }]}>{request.data.animalProvince}</Text>
                                <Text style={[styles.row]}>Province</Text>
                            </View>
                        </View>
                    </View>
                    {/*------------------------------------------ Sex ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[{ width: '27.34%', paddingVertical: 8 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10, paddingLeft: 4 }]}>Sex</Text>
                        </View>
                        <View style={[styles.cellTwo, { width: '30%', borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(sexList[0], request.data.sex)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{sexList[0]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellTwo, { borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={[styles.row, { alignItems: 'center' }]}>
                                <Text style={isChecked(sexList[1], request.data.sex)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{sexList[1]}</Text>
                            </View>
                        </View>
                    </View>
                    {/*------------------------------------------ Manner of death ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.5%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4, paddingVertical: 8 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Manner of death: </Text>
                        </View>
                        <View style={[styles.cellFour, { width: '24%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={[styles.row, { alignItems: "center" }]}>
                                <Text style={isChecked2(mannerOfDeath[0], request.data.mannerOfDeath)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{mannerOfDeath[0]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellFour, { width: '24%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={[styles.row, { alignItems: "center" }]}>
                                <Text style={isChecked2(mannerOfDeath[1], request.data.mannerOfDeath)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{mannerOfDeath[1]}</Text>
                            </View>
                        </View>
                        <View style={[styles.cellFour, { borderBottomWidth: 0, paddingLeft: 4, justifyContent: 'center' }]}>
                            <View style={[styles.row, { alignItems: "center" }]}>
                                <Text style={isChecked2(mannerOfDeath[2], request.data.mannerOfDeath)} />
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>{mannerOfDeath[2]}</Text>
                                <View style={[{ borderBottomWidth: 0.5, width: 50 }]}>
                                    <Text>    {request.data.mannerOfDeath.find(item => item.name === mannerOfDeath[2])?.quantity || ' '}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*------------------------------------------ Date and time of death ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.5%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Date and time of death: </Text>
                        </View>
                        <View style={[styles.cellFour, { borderBottomWidth: 0, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>{request.data.dateTimeOfDeath}</Text>
                        </View>
                    </View>
                    {/*------------------------------------------ Possible cause of death ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.5%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Possible cause of death: </Text>
                        </View>
                        <View style={[styles.cellFour, { borderBottomWidth: 0, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>{request.data.causeOfDeath}</Text>
                        </View>
                    </View>
                    {/*------------------------------------------ Vaccination History----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Animal Vaccination History</Text>
                        </View>
                        <View style={[styles.cellFour, styles.row, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 8 }]}>
                                    <Text style={isChecked(vacHistory[0], request.data.vacHistory)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{vacHistory[0]}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>Date of Vaccination:</Text>
                                    <Text style={[styles.normalFont, { fontSize: 10, borderBottomWidth: 0.5, width: '30%' }]}>{request.data.dateOfVaccine || ' '}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>Type of Vaccine:</Text>
                                    <Text style={[styles.normalFont, { fontSize: 10, borderBottomWidth: 0.5, width: '30%' }]}>     {request.data.vaccineType || ' '}</Text>
                                </View>

                            </View>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, paddingLeft: 4 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 3 }]}>
                                    <Text style={isChecked(vacHistory[1], request.data.vacHistory)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{vacHistory[1]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 3 }]}>
                                    <Text style={isChecked(vacHistory[2], request.data.vacHistory)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{vacHistory[2]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 3 }]}>
                                    <Text style={isChecked(vacHistory[3], request.data.vacHistory)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{vacHistory[3]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*------------------------------------------ Dam vaccinated ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Dam vaccinated (for puppies up to 6 months old)</Text>
                        </View>
                        <View style={[styles.cellFour, styles.row, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isChecked(damVaccinated[0], request.data.damVaccinated)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{damVaccinated[0]}</Text>
                                </View>
                                <View style={[styles.row, { marginBottom: 5 }]}>
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>Date of Vaccination:</Text>
                                    <Text style={[styles.normalFont, { fontSize: 10, borderBottomWidth: 0.5, width: '30%' }]}>{request.data.damVaccinated.find(item => item.name === damVaccinated[0])?.quantity || ' '}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 5 }]}>
                                    <Text style={isChecked(damVaccinated[2], request.data.damVaccinated)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{damVaccinated[2]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, paddingLeft: 4 }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isChecked(damVaccinated[1], request.data.damVaccinated)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{damVaccinated[1]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*------------------------------------------ Contact with other animals ----------------------------------------*/}

                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Contact with other animals</Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={[styles.normalFont, { fontSize: 10 }]}>if yes:</Text>
                            </View>
                        </View>
                        <View style={[styles.row, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, }]}>
                                <View style={[styles.row, { alignItems: 'center', marginVertical: 8 }]}>
                                    <Text style={isCheckedRadio(contactWithOtherAnimals[0], request.data.contactWithOtherAnimals)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{damVaccinated[0]}</Text>
                                </View>

                                <View style={[styles.row, { width: '90%', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 3 }]}>
                                    {contactWithAnimals.map((animals, index) => (
                                        <View key={index} style={[styles.row, { alignItems: 'center', marginBottom: 4 }]}>
                                            <Text style={isChecked(animals, request.data.contactWithAnimals)} />
                                            <Text style={[styles.normalFont, { fontSize: 10 }]}>{animals}</Text>
                                        </View>
                                    ))}
                                </View>

                            </View>
                            <View style={[{ width: '50%', paddingLeft: 4, marginVertical: 8 }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isCheckedRadio(contactWithOtherAnimals[1], request.data.contactWithOtherAnimals)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{damVaccinated[1]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Condition of animal ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]} hyphenationCallback={word => [word]}>Condition of animal before bitting incident:</Text>
                        </View>
                        <View style={[styles.row, styles.cellFour, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1, }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 5 }]}>
                                    <Text style={isChecked(animalCondition[0], request.data.animalCondition)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{animalCondition[0]}</Text>
                                </View>

                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 5 }]}>
                                    <Text style={isChecked(animalCondition[1], request.data.animalCondition)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{animalCondition[1]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, paddingLeft: 4 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingVertical: 5 }]}>
                                    <Text style={isChecked(animalCondition[2], request.data.animalCondition)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{animalCondition[2]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Changes two weeks prior to or after biting incident ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]} hyphenationCallback={word => [word]}>Changes two weeks prior to or after biting incident</Text>
                        </View>
                        <View style={[styles.row, styles.cellFour, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1, }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isCheckedRadio(contactWithOtherAnimals[0], request.data.changesAfterBiting)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{contactWithOtherAnimals[0]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, paddingLeft: 4 }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isCheckedRadio(contactWithOtherAnimals[1], request.data.changesAfterBiting)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{contactWithOtherAnimals[1]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Changes observed ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>If Yes, check changes observed</Text>
                        </View>
                        <View style={[styles.row, styles.cellFour, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '35%', borderBottomWidth: 0, borderRightWidth: 1, }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingBottom: 2 }]}>
                                    <Text style={isChecked(observedChanges[0], request.data.observedChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{observedChanges[0]}</Text>
                                </View>
                                <View style={[styles.row, { paddingBottom: 2 }]}>
                                    <Text style={[isChecked(observedChanges[1], request.data.observedChanges), { marginTop: 3 }]} />
                                    <Text style={[styles.normalFont, { fontSize: 10, flexWrap: 'wrap', width: '80%' }]}>{observedChanges[1]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingBottom: 2 }]}>
                                    <Text style={isChecked(observedChanges[2], request.data.observedChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{observedChanges[2]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingBottom: 2 }]}>
                                    <Text style={isChecked(observedChanges[3], request.data.observedChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{observedChanges[3]}</Text>
                                </View>
                            </View>

                            <View style={[styles.cellFour, { width: '37%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingBottom: 2 }]}>
                                    <Text style={isChecked(observedChanges[4], request.data.observedChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{observedChanges[4]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingBottom: 2 }]}>
                                    <Text style={isChecked(observedChanges[5], request.data.observedChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{observedChanges[5]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingBottom: 2 }]}>
                                    <Text style={isChecked(observedChanges[6], request.data.observedChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{observedChanges[6]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', paddingBottom: 2 }]}>
                                    <Text style={isChecked(observedChanges[7], request.data.observedChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{observedChanges[7]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '33%', borderBottomWidth: 0, paddingLeft: 2 }]}>
                                <View style={[styles.row, { paddingBottom: 4 }]}>
                                    <Text style={[isChecked(observedChanges[8], request.data.observedChanges), { marginTop: 3 }]} />
                                    <Text style={[styles.normalFont, { fontSize: 10, flexWrap: 'wrap', width: '40%' }]} hyphenationCallback={word => [word]}>{observedChanges[8]}</Text>
                                </View>
                                <View style={[styles.row, { paddingBottom: 2 }]}>
                                    <Text style={[isChecked(observedChanges[9], request.data.observedChanges), { marginTop: 3 }]} />
                                    <Text style={[styles.normalFont, { fontSize: 10, flexWrap: 'wrap', width: '80%' }]} hyphenationCallback={word => [word]}>{observedChanges[9]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Other signs of illness two weeks prior to or after biting incident ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>Other signs of illness two weeks prior to or after biting incident</Text>
                        </View>

                        <View style={[styles.row, styles.cellFour, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1, }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isCheckedRadio(contactWithOtherAnimals[0], request.data.otherSigns)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{contactWithOtherAnimals[0]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, paddingLeft: 4 }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isCheckedRadio(contactWithOtherAnimals[1], request.data.otherSigns)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{contactWithOtherAnimals[1]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*------------------------------------------ check changes observed ----------------------------------------*/}
                    <View style={[styles.row, styles.cellTwo, { width: '100%', borderLeftWidth: 0, borderRightWidth: 0 }]}>
                        <View style={[styles.cellFour, { width: '27.44%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <Text style={[styles.normalFont, { fontSize: 10 }]}>If Yes, check changes observed</Text>
                        </View>
                        <View style={[styles.row, styles.cellFour, { width: '72.56%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4 }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1, }]}>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isChecked(otherChanges[0], request.data.otherChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{otherChanges[0]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center' }]}>
                                    <Text style={isChecked(otherChanges[1], request.data.otherChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{otherChanges[1]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, paddingLeft: 4 }]}>
                                <View style={[styles.row, { alignItems: 'center', marginVertical: 5 }]}>
                                    <Text style={isChecked(otherChanges[2], request.data.otherChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{otherChanges[2]}</Text>
                                </View>
                                <View style={[styles.row, { alignItems: 'center', marginBottom: 5 }]}>
                                    <Text style={isChecked(otherChanges[3], request.data.otherChanges)} />
                                    <Text style={[styles.normalFont, { fontSize: 10 }]}>{otherChanges[3]}</Text>
                                    <Text style={[{ borderBottomWidth: 0.5, textAlign: 'center', width: 60 }]}>{request.data.otherIllness || ' '}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*------------------------------------------ Purpose----------------------------------------*/}
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.boldFont, { width: "100%", borderLeftWidth: 0, textAlign: 'center' }]}>
                            <Text style={{ fontSize: 10 }}>PURPOSE</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.cellTwo, styles.row, { width: '100%', borderLeftWidth: 0 }]}>
                            <View style={[styles.row, styles.cellFour, { width: '25%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4, fontSize: 10 }]}>
                                    <Text style={isChecked(purposeList[0], request.data.purposeList)} />
                                    <Text>{purposeList[0]}</Text>
                                </View>
                            </View>
                            <View style={[styles.row, styles.cellFour, { width: '25%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4, fontSize: 10 }]}>
                                    <Text style={isChecked(purposeList[1], request.data.purposeList)} />
                                    <Text>{purposeList[1]}</Text>
                                </View>
                            </View>
                            <View style={[styles.row, styles.cellFour, { width: '25%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4, fontSize: 10 }]}>
                                    <Text style={isChecked(purposeList[2], request.data.purposeList)} />
                                    <Text>{purposeList[2]}</Text>
                                </View>
                            </View>
                            <View style={[styles.row, styles.cellFour, { width: '25%', borderBottomWidth: 0 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4, fontSize: 10 }]}>
                                    <Text style={isChecked(purposeList[3], request.data.purposeList)} />
                                    <Text>{purposeList[3]}</Text>
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

export default Rabies