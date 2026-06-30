import React, { use, useEffect, useState } from 'react'
import '../forms/styles/arf.css'
import axios from 'axios';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import Page2 from '../forms/rabies/Page2';
import Page3 from '../forms/rabies/Page3';
import Page1 from '../forms/rabies/Page1';

function UpdateRabies({ request, setRequest, common }) {


    const generalData = {
        specimen: [],
        specimenAge: "",
        specimenBreed: "",
        animalResidence: [],
        animalNo: "",
        animalStreet: "",
        animalBarangay: "",
        animalCity: "",
        animalProvince: "",
        sex: [],
        mannerOfDeath: [],
        dateTimeOfDeath: "",
        causeOfDeath: "",
        vacHistory: [],
        dateOfVaccine: "",
        vaccineType: "",
        damVaccinated: [],
        contactWithOtherAnimals: "",
        contactWithAnimals: [],
        animalCondition: [],
        changesAfterBiting: "",
        observedChanges: [],
        otherSigns: "",
        otherChanges: [],
        purposeList: [],
        purposeOthers: "",

        victimName: "",
        victimContact: "",
        victimAge: "",
        victimGender: "",
        consulted: "",
        victimNo: "",
        victimStreet: "",
        victimBarangay: "",
        victimCity: "",
        victimProvince: "",
        preExposure: "",
        dateOfbite: "",
        timeOfbite: "",
        biteProvoked: "",
        placeOfbiting: [],
        cityBite: "",
        provinceBite: "",
        siteOfbite: [],
        natureOfbite: [],
        otherVictims: "",
        treatments: [],
        vaccine: [],
        vaccineBrand: "",
        HRIG: "",
        ERIG: "",
        vaccineOthers: "",
        interviewer: "",
        interviewDate: "",
        sampleTypeOthers: "",
        typeOfSample: [],
        sampleLabel: [],
        transport: [],
        stateOfSample: [],
        rejectionOfSamples: [],
        sampleStorage: [],
        sampleDisposalDate: "",
        sampleStorageLocation: "",
        sampleRetentionDate: "",
        reportDue: "",
        receivedBy: "",
        dateSubmitted: "",
        dateCollected: "",
        samplingTime: "",
        otherIllness: "",
        otherSiteOfbite: ""
    }

    const customerCategory = (clientType) => {
        const categoryMap = {
            "Regulatory": "RG",
            "Rice Program": "RP",
            "Corn Program": "CP",
            "High Value Crops Program": "HV",
            "Research Division": "RD",
            "LGU": "LG",
            "Student": "ST",
            "Private": "PR",
            "Farmer": "FR",
            "Government Agency": "GA",
            "Research": "RS"
        }
        return categoryMap[clientType] || "";
    }

    const specimenList = [
        "Feline",
        "Canine",
        "Others",
    ]

    const sexList = [
        "Male",
        "Female"
    ]

    const animalResidence = [
        "Stray",
        "Home"
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

    const contactWithOtherAnimals = [
        "Yes",
        "No"
    ]
    {/*------------------------------------------------------------- */ }





    // State to hold request data

    const [successMessage, setSuccessMessage] = useState("")

    const [selectedSpecimen, setSelectedSpecimen] = useState([]);
    const { id } = useParams();

    const location = useLocation();
    const backRoute = location.state?.from || "/Dco/Walkin/";
    const navigate = useNavigate();



    const requestIdGenerator = (clientType) => {
        const getCategoryId = customerCategory(clientType)
        if (!getCategoryId) return '';

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');

        const raddl = 'RADDL';
        const ar = 'AR';

        const defaultSequence = '0000';
        return `${year}-${month}-${raddl}-${ar}-${defaultSequence}-${getCategoryId}`;
    }

    const recordIdGenerator = (clientType) => {
        const now = new Date();
        const year = now.getFullYear();

        const raddl = 'RADDL';
        const fr = 'FR';

        const formCode = '002'
        const defaultSequence = '0000';

        return `${year}-${raddl}-${fr}-${formCode}-${defaultSequence}`;
    }



    const inputHandler = (e) => {
        const { name, value, dataset } = e.target;

        if (dataset.parent) {
            setRequest({
                ...request,
                [dataset.parent]: {
                    ...request[dataset.parent],
                    [name]: value
                }
            });
        } else if (dataset.specimen) {
            const field = dataset.field;
            setRequest(prev => ({
                ...prev,
                data: {
                    ...prev.data,
                    [field]: prev.data[field].map(item =>
                        item.name === dataset.specimen
                            ? { ...item, quantity: value }
                            : item
                    )
                }
            }));
        } else if (name === 'clientType') {
            const categoryId = requestIdGenerator(value);
            const recordId = recordIdGenerator(value);
            setRequest({
                ...request,
                clientType: value,
                requestId: categoryId,
                recordId: recordId
            });

        } else if (name in request.data) {  // ← only change here
            setRequest(prev => ({ ...prev, data: { ...prev.data, [name]: value } }));
        } else {
            setRequest({ ...request, [name]: value });
        }
    };

    const checkboxHandler = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'specimen' || name === 'mannerOfDeath' || name === 'specimenPart') {
            setRequest(prev => {
                const currentArray = prev.data[name] || [];
                const updatedArray = checked ? [...currentArray, { name: value, quantity: '' }] : currentArray.filter(item => item.name !== value);
                return {
                    ...prev,
                    data: {
                        ...prev.data,
                        [name]: updatedArray
                    }
                }
            });
        } else {
            setRequest(otherRequestData => {
                const currentArray = otherRequestData.data[name] || []
                const updatedArray = checked ? [...currentArray, value] : currentArray.filter(item => item !== value);
                return {
                    ...otherRequestData,
                    data: {
                        ...otherRequestData.data,
                        [name]: updatedArray
                    }
                }
            })
        }
    }



    const submitForm = async (e) => {
        e.preventDefault();
        const form = { ...request };
        await axios.put(`http://localhost:8003/api/client/update/arf/${id}`, form,
            {
                withCredentials: true,
            }
        )
            .then((response) => {
                setRequest({
                    ...common, data: generalData
                });
                setSuccessMessage("Form updated successfully!");
                navigate(backRoute)

                setTimeout(() => setSuccessMessage(""), 3000);
            })
            .catch((error) => {
                console.log(error)
            })
    }


    function formatDateForInput(dateStr) {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toISOString().split("T")[0];
    }

    return (

        <div className='d-flex mt-4 '>
            <div className=' analysis card container-fluid shadow-sm border bordered-darker  mb-5'>
                <div className='row g-6'>
                    <div className='message col-md-4'>
                        {successMessage && (
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>
                        )}
                    </div>
                    <div className='head container rounded-top' style={{ backgroundColor: '#003e8fff' }}>
                        <div className='mt-1'>
                            <i className='bi bi-info-circle text-white fs-5 ms-1 me-1' />
                            <span className='ms-2 fs-5 text-white'>ANALYSIS REQUEST FORM (RABIES)</span>
                        </div>
                    </div>

                    <form className='mt-3 mb-4' onSubmit={submitForm}>

                        <Page1
                            request={request}
                            inputHandler={inputHandler}
                            checkboxHandler={checkboxHandler}
                        />


                        <Page2
                            request={request}
                            inputHandler={inputHandler}
                            checkboxHandler={checkboxHandler}
                        />
                        <Page3
                            request={request}
                            inputHandler={inputHandler}
                            checkboxHandler={checkboxHandler}
                        />

                        <div className='col-md-6 gap-3 offset-md-6 d-flex justify-content-end pe-3'>
                            <button type='button' className="btn btn-primary col-md-2" onClick={() => navigate(backRoute)}>Back</button>
                            <button type="button" className="btn btn-primary col-md-3 fw-bold" onClick={submitForm}>Update Request</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UpdateRabies
