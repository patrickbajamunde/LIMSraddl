import axios from 'axios';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import styles from '../Styles';
import image1 from '../../../analysts/components/images/DA5.jpg';
import image2 from '../../../dco/components/images/unnamed.png'
import terms from '../data/Terms';
import { useEffect, useState } from 'react';

function Page3({ request }) {
    const placeOfbiting = [
        "Household",
        "Public area (specify)"
    ]

    const siteOfbite = [
        "Head",
        "Low extremity",
        "Neck",
        "Upper extremity",
        "Trunk",
        "Other parts"
    ]

    const natureOfbite = [
        "Mild Scratch",
        "Others",
        "Severe/Multiple"
    ]

    const treatments = [
        "Soap & Water",
        "Iodine",
        "Alcohol",
        "Traditional Methods, Specify"
    ]

    const vaccine = [
        "Tetanus toxoid",
        "Anti-tetanus serum",
        "Antibiotic"
    ]

    const YesAndNo = [
        "Yes",
        "No"
    ]

    const threeOptions = [
        "Yes",
        "No",
        "Unknown"
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

                {/*----------------------------------------------------------------Victim Profile----------------------------------------------------------------------- */}

                <View style={[styles.table, { marginTop: 15 }]}>
                    <View style={[styles.row, styles.cellFour, { width: '100%', borderRightWidth: 1, textAlign: 'center' }]}>
                        <Text style={[styles.boldFont, { width: '100%', fontSize: 16 }]}>VICTIM PROFILE</Text>
                    </View>

                    <View style={[styles.row, styles.cellFour, { width: '100%' }]}>
                        <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                            <Text style={[styles.boldFont]}>Name:</Text>
                        </View>
                        <View style={[styles.cellFour, { width: '25%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                            <Text style={[styles.boldFont]}>Age:</Text>
                        </View>
                        <View style={[styles.cellFour, { width: '25%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                            <Text style={[styles.boldFont]}>Sex:</Text>
                        </View>
                    </View>

                    <View style={[styles.row, styles.cellFour]}>
                        <View style={[styles.cellFour, { width: '100%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                            <Text style={[styles.boldFont]}>Contact Number:</Text>
                        </View>
                    </View>

                    {/*----------------------------------------- Consulted at RHU/Hospital------------------------------------------------ */}
                    <View style={[styles.row, styles.cellFour, { width: '100%' }]}>
                        <View style={[styles.cellFour, { width: '25.5%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                            <Text style={[styles.boldFont, { fontSize: 11 }]}>Consulted at RHU/Hospital:</Text>
                        </View>
                        <View style={[styles.row, { width: '75.5%', }]}>
                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                    <Text style={isCheckedRadio(YesAndNo[0], request.data.consulted)} />
                                    <Text style={[styles.boldFont]}>{YesAndNo[0]}</Text>
                                </View>
                            </View>

                            <View style={[styles.cellFour, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                    <Text style={isCheckedRadio(YesAndNo[1], request.data.consulted)} />
                                    <Text style={[styles.boldFont]}>{YesAndNo[1]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*----------------------------------------- Address ------------------------------------------------ */}

                    <View style={[styles.cellFour, styles.row, { width: "100%", borderRightWidth: 1 }]}>
                        <View style={[styles.row]}>
                            <Text style={[styles.boldFont, { fontSize: 11 }]}>Address</Text>
                        </View>
                        <View style={[styles.row, { paddingHorizontal: 10, paddingTop: 8 }]}>
                            <View style={[{ alignItems: 'center', width: '10%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center', fontSize: 11 }]}>{request.data.victimNo}</Text>
                                <Text style={[styles.row, styles.boldFont]}>No</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '22%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center', fontSize: 11 }]}>{request.data.victimStreet}</Text>
                                <Text style={[styles.row, styles.boldFont]}>Street</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '22%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center', fontSize: 11 }]}>{request.data.victimBarangay}</Text>
                                <Text style={[styles.row, styles.boldFont]}>Barangay</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '24%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center', fontSize: 11 }]}>{request.data.victimCity}</Text>
                                <Text style={[styles.row, styles.boldFont]}>City/Municipality</Text>
                            </View>

                            <View style={[{ alignItems: 'center', width: '22%' }]}>
                                <Text style={[styles.row, { borderBottomWidth: 0.5, width: '100%', textAlign: 'center', fontSize: 11 }]}>{request.data.victimProvince}</Text>
                                <Text style={[styles.row, styles.boldFont]}>Province</Text>
                            </View>
                        </View>
                    </View>

                    {/*----------------------------------------- Pre-Exposure ------------------------------------------------ */}

                    <View style={[styles.row, styles.cellFour, { width: '100%' }]}>
                        <View style={[styles.cellFour, { width: '38%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                            <Text style={[styles.boldFont, { fontSize: 11 }]}>Pre-Exposure rabies vaccination given?</Text>
                        </View>
                        <View style={[styles.row, { width: '62%' }]}>
                            <View style={[styles.cellFour, { width: '35%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                    <Text style={isCheckedRadio(threeOptions[0], request.data.preExposure)} />
                                    <Text style={[styles.boldFont]}>{threeOptions[0]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '35%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                    <Text style={isCheckedRadio(threeOptions[1], request.data.preExposure)} />
                                    <Text style={[styles.boldFont]}>{threeOptions[1]}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '30%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                <View style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                    <Text style={isCheckedRadio(threeOptions[2], request.data.preExposure)} />
                                    <Text style={[styles.boldFont]}>{threeOptions[2]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*----------------------------------------- Circumstance of Bite ------------------------------------------------ */}
                    <View style={[styles.row, { width: '100%' }]}>
                        <View style={[styles.cellFour, { width: '20.5%', borderRightWidth: 1 }]}>
                            <Text style={[styles.boldFont]}>Circumstance of Bite</Text>
                        </View>
                        <View style={[styles.cellFour, { width: '79.5%', borderRightWidth: 1 }]}>
                            <View style={[styles.cellFour, styles.row, { width: '100%', paddingBottom: 7 }]}>
                                <View style={[styles.row, { width: '50%' }]}>
                                    <Text style={[styles.boldFont, { fontSize: 11 }]}>Date of Bite:</Text>
                                    <Text style={{ fontSize: 11, borderBottomWidth: 0.5, width: '70%' }}>{request.data.dateOfbite}</Text>
                                </View>
                                <View style={[styles.row, { width: '50%' }]}>
                                    <Text style={[styles.boldFont, { fontSize: 11 }]}>Time of Bite:</Text>
                                    <Text style={{ fontSize: 11, borderBottomWidth: 0.5, width: '70%' }}>{request.data.timeOfbite}</Text>
                                </View>
                            </View>
                            <View style={[styles.cellFour, styles.row, { width: '100%' }]}>
                                <View style={[styles.cellFour, { width: '18%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 11 }]}>Bite Provoked</Text>
                                </View>
                                <View style={[styles.cellFour, { width: '40%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                    <View style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                        <Text style={isCheckedRadio(YesAndNo[0], request.data.biteProvoked)} />
                                        <Text style={[styles.boldFont]}>{YesAndNo[0]}</Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '35%', borderBottomWidth: 0 }]}>
                                    <View style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                        <Text style={isCheckedRadio(YesAndNo[1], request.data.biteProvoked)} />
                                        <Text style={[styles.boldFont]}>{YesAndNo[1]}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '100%' }]}>
                                <Text style={[styles.boldFont, { fontSize: 11 }]}>Place of biting incident</Text>
                                {placeOfbiting.map((bite, index) => (
                                    <View key={index} style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                        <Text style={isChecked(bite, request.data.placeOfbiting)} />
                                        <Text style={[styles.boldFont]}>{bite}</Text>
                                    </View>
                                ))}
                                <View style={[styles.row, { width: '100%', marginTop: 15 }]}>
                                    <Text style={[styles.boldFont, { fontSize: 11 }]}>Geographic Location:</Text>
                                    <View style={[{ alignItems: 'center', width: '35%' }]}>
                                        <Text style={{ borderBottomWidth: 0.5, width: '100%', textAlign: 'center', fontSize: 11 }}>{request.data.cityBite}</Text>
                                        <Text style={[styles.boldFont, { fontSize: 11 }]}>City/Municipality</Text>
                                    </View>
                                    <View style={[{ alignItems: 'center', width: '35%' }]}>
                                        <Text style={{ borderBottomWidth: 0.5, width: '100%', textAlign: 'center', fontSize: 11 }}>{request.data.provinceBite}</Text>
                                        <Text style={[styles.boldFont, { fontSize: 11 }]}>Province</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '100%' }]}>
                                <Text style={[styles.boldFont, { fontSize: 11 }]}>Sites of Bite</Text>
                            </View>
                            <View style={[styles.cellFour, styles.row, { width: '100%' }]}>
                                <View style={[styles.cellFour, styles.boldFont, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4, paddingVertical: 4 }]}>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(siteOfbite[0], request.data.siteOfbite)} />
                                        <Text>{siteOfbite[0]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(siteOfbite[2], request.data.siteOfbite)} />
                                        <Text>{siteOfbite[2]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(siteOfbite[4], request.data.siteOfbite)} />
                                        <Text>{siteOfbite[4]}</Text>
                                    </View>
                                </View>
                                <View style={[styles.boldFont, { width: '50%', paddingLeft: 4,  paddingVertical: 4 }]}>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(siteOfbite[1], request.data.siteOfbite)} />
                                        <Text>{siteOfbite[1]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(siteOfbite[3], request.data.siteOfbite)} />
                                        <Text>{siteOfbite[3]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(siteOfbite[5], request.data.siteOfbite)} />
                                        <Text>{siteOfbite[5]}</Text>
                                        <Text style={[{fontWeight: 'normal', fontSize: 11, borderBottomWidth: 0.5, textAlign: 'center', width: 60 }]}>{request.data.otherSiteOfbite || ' '}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '100%' }]}>
                                <Text style={[styles.boldFont, { fontSize: 11 }]}>Nature of Bite</Text>
                            </View>
                            <View style={[styles.cellFour, styles.row, { width: '100%' }]}>
                                <View style={[styles.cellFour, styles.boldFont, { width: '50%', borderBottomWidth: 0, borderRightWidth: 1, paddingLeft: 4, paddingBottom: 10 }]}>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(natureOfbite[0], request.data.natureOfbite)} />
                                        <Text>{natureOfbite[0]}</Text>
                                    </View>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(natureOfbite[2], request.data.natureOfbite)} />
                                        <Text>{natureOfbite[2]}</Text>
                                    </View>
                                </View>
                                <View style={[styles.boldFont, { width: '50%', paddingLeft: 4 }]}>
                                    <View style={[styles.row, { alignItems: 'center' }]}>
                                        <Text style={isChecked(natureOfbite[1], request.data.natureOfbite)} />
                                        <Text>{natureOfbite[1]}</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '100%' }]}>
                                <Text style={[styles.boldFont, { fontSize: 11 }]}>Other Victims</Text>
                            </View>
                            <View style={[styles.cellFour, { width: '100%', borderBottomWidth: 0 }]}>
                                {YesAndNo.map((other, index) => (
                                    <View key={index} style={[styles.row, styles.boldFont, { alignItems: 'center', paddingLeft: 4 }]}>
                                        <Text style={isChecked(other, request.data.otherVictims)} />
                                        <Text>{other}</Text>
                                    </View>
                                ))}
                                <View style={[styles.row, { paddingBottom: 7}]}>
                                    <Text style={styles.boldFont}>If Yes, Fill up a Victim Profile Form for each Victim.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*----------------------------------------- Treatment Rceived ------------------------------------------------ */}
                    <View style={[styles.row, { width: '100%' }]}>
                        <View style={[styles.cellFour, { width: '20.5%', borderRightWidth: 1 }]}>
                            <Text style={styles.boldFont}>Treatment Received</Text>
                        </View>
                        <View style={[styles.cellFour, { width: '79.5%', borderRightWidth: 1 }]}>
                            <View style={[styles.cellFour, { width: '100%', paddingBottom: 10 }]}>
                                {treatments.map((treatments, index) => (
                                    <View key={index} style={[styles.row, { alignItems: 'center', paddingLeft: 4 }]}>
                                        <Text style={isChecked(treatments, request.data.treatments)} />
                                        <Text style={styles.boldFont}>{treatments}</Text>
                                    </View>
                                ))}
                            </View>
                            <View style={[styles.cellFour, { paddingVertical: 4}]}>
                                <Text style={styles.boldFont}>*Check all that applies</Text>
                            </View>
                            <View style={[styles.cellFour, styles.row, { width: '100%' }]}>
                                <View style={[styles.cellFour, { width: '35%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                    <View style={[styles.row, { alignItems: 'center', justifyContent: 'center' }]}>
                                        <Text style={isChecked(vaccine[0], request.data.vaccine)} />
                                        <Text style={styles.boldFont}>{vaccine[0]}</Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '35%', borderBottomWidth: 0, borderRightWidth: 1 }]}>
                                    <View style={[styles.row, { alignItems: 'center', justifyContent: 'center' }]}>
                                        <Text style={isChecked(vaccine[1], request.data.vaccine)} />
                                        <Text style={styles.boldFont}>{vaccine[1]}</Text>
                                    </View>
                                </View>
                                <View style={[styles.cellFour, { width: '35%', borderBottomWidth: 0 }]}>
                                    <View style={[styles.row, { alignItems: 'center', justifyContent: 'center' }]}>
                                        <Text style={isChecked(vaccine[2], request.data.vaccine)} />
                                        <Text style={styles.boldFont}>{vaccine[2]}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.cellFour, { width: '100%', borderBottomWidth: 0 }]}>
                                <View style={[styles.row, {marginBottom: 3}]}>
                                    <Text style={styles.boldFont}>Vaccine Brand:</Text>
                                    <Text style={[{ fontSize: 11, borderBottomWidth: 0.5, width: '40%' }]}>  {request.data.vaccineBrand || ' '}</Text>
                                </View>
                                <View style={[styles.row, { width: '100%', justifyContent: 'flex-end', marginBottom: 15 }]}>
                                    <View style={[styles.row]}>
                                        <Text style={[{ fontSize: 11, borderBottomWidth: 0.5, width: 80, textAlign: 'center' }]}>  {request.data.HRIG || ' '}</Text>
                                        <Text style={styles.boldFont}>HRIG</Text>
                                    </View>
                                    <View style={[styles.row, { paddingLeft: 25 }]}>
                                        <Text style={[{ fontSize: 11, borderBottomWidth: 0.5, width: 80, textAlign: 'center' }]}>  {request.data.ERIG || ' '}</Text>
                                        <Text style={styles.boldFont}>ERIG</Text>
                                    </View>
                                    <View style={[styles.row, { paddingLeft: 25 }]}>
                                        <Text style={[{ fontSize: 11, borderBottomWidth: 0.5, width: 80, textAlign: 'center' }]}>{request.data.vaccineOthers || ' '}</Text>
                                        <Text style={styles.boldFont}>Others</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*----------------------------------------- Interviewer ------------------------------------------------ */}
                    <View style={[styles.row, { width: '100%' }]}>
                        <View style={[styles.row, styles.cellFour, { width: '55%', paddingTop: 30, paddingBottom: 10 }]}>
                            <Text style={styles.boldFont}>Interviewer's Name:</Text>
                            <Text style={[{ borderBottomWidth: 0.5, fontSize: 11, width: '65%' }]}>  {request.data.interviewer}</Text>
                        </View>
                        <View style={[styles.cellFour, styles.row, { borderRightWidth: 1, width: '45%', paddingTop: 30, paddingBottom: 10 }]}>
                            <Text style={styles.boldFont}>Date:</Text>
                            <Text style={[{ borderBottomWidth: 0.5, fontSize: 11, width: '55%' }]}>{request.data.interviewDate}</Text>
                        </View>
                    </View>
                    <View style={[styles.cellFour, { width: '100%', borderRightWidth: 1 }]}>
                        <Text style={styles.boldFont}>NOTE: This information is provided by the customer.</Text>
                    </View>
                </View>
            </Page>
        )

    }
    return generatePdf()
}

export default Page3