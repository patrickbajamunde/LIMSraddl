import React, { use, useEffect, useState } from 'react'
import './styles/arf.css'
import axios from 'axios';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import image1 from '../components/images/DA2.png';
import Page1 from './arf/Page1';
import Page2 from './arf/Page2';
import Page3 from './arf/Page3';
import Page4 from './arf/Page4';


function Arf() {

    const common = {
        labAccessionNumber: "",
        requestId: "",
        recordId: "",
        clientType: "",
        clientName: "",
        clientAge: "",
        clientAddress: "",
        clientEmail: "",
        clientContact: "",
        clientGender: "",
        locOfFarm: "",
        barangay: "",
        municipality: "",
        province: "",
        contactNo: "",
        email: "",
    }

    const generalData = {
        sampleDisposalDate: "",
        sampleStorageLocation: "",
        sampleRetentionDate: "",
        reportDue: "",
        receivedBy: "",
        dateSubmitted: "",
        dateCollected: "",
        samplingTime: "",
        specimenAge: "",
        pathologyOthers: "",
        rpcOthers: "",
        otherTests: "",
        bacteOthers: "",
        bloodParaOthers: "",
        parasiteOthers: "",
        virologyOthers: "",
        elisaOthers: "",
        pcrOthers: "",
        purposeOthers: "",
        sampleQuantityOthers: "",
        preserveOthers: "",
        tranportOthers: "",
        specimen: [],
        wholeAnimal: [],
        specimenPart: [],
        pathologyList: [],
        rapidPlateTest: [],
        isoAndIdenList: [],
        bloodParasiteExam: [],
        fecalysis: [],
        parasiteIden: [],
        virologyList: [],
        elisaList: [],
        pcrList: [],
        purposeList: [],
        sampleLabel: [],
        quantityOfSample: [],
        preservationUsed: [],
        transport: [],
        stateOfSample: [],
        rejectionOfSamples: [],
        sampleStorage: [],
        sex: [],
        bacteOthers2: [],
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


    const [request, setRequest] = useState({ ...common, data: generalData }); // State to hold request data

    const [successMessage, setSuccessMessage] = useState("")

    const [selectedSpecimen, setSelectedSpecimen] = useState([]);

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const [step, setStep] = useState(1)



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

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

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
        if (name === 'specimen' || name === 'wholeAnimal' || name === 'specimenPart') {
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
        const form = { ...request, type: 'GENERAL' };
        await axios.post("http://localhost:8003/api/client/newClient", form,
            {
                withCredentials: true,
            }
        )
            .then((response) => {
                setRequest({
                    ...common, data: generalData
                });
                setSuccessMessage("Form submitted successfully!");

                setTimeout(() => setSuccessMessage(""), 3000);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleNext = () => {
        setStep((s) => s + 1);
    };

    const handleBack = () => {
        setStep((s) => s - 1);
    };

    return (
        <>
            <div className='col w-100 position-fixed z-3 p-2 d-flex align-items-center' style={{ background: '#38406eff' }}>
                <div className='pe-3'>
                    <img src={image1} alt="description" className='image-style' />
                </div>
                <div className='border-end border-opacity-50 border-white border-2 pe-3'>
                    <span className='fw-bold text-white fs-5'>LIMS</span>
                </div>
                <div className='ps-3'>
                    <span className='text-white'>Analysis Request Form — General Sample</span>
                </div>

                <div className='position-absolute end-0 pe-4 '>
                    <div className='d-inline-block  pe-3'>
                        <Link to='/Dco/Home/' className='text-white'>
                            <i class="bi bi-house-fill fs-5"></i>
                        </Link>

                    </div>
                    <div className='d-inline-block border-start border-white border-2 border-opacity-50 ps-3 text-white opacity-50  '>
                        <i class="bi bi-calendar-check pe-2"></i>
                        <span>{currentDate}</span>
                    </div>
                </div>
            </div>
            <div className='d-flex mt-5 w-75 container'>
                <div className='row g-6'>
                    <div className='message col-md-4'>
                        {successMessage && (
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>
                        )}
                    </div>

                    <form className='mt-5 mb-4' onSubmit={submitForm}>

                        {step === 1 &&
                            <Page1
                                request={request}
                                inputHandler={inputHandler}
                            />
                        }

                        {step === 2 &&
                            <Page2
                                request={request}
                                inputHandler={inputHandler}
                                checkboxHandler={checkboxHandler}
                            />
                        }

                        {step === 3 &&
                            <Page3
                                request={request}
                                inputHandler={inputHandler}
                                checkboxHandler={checkboxHandler}
                            />
                        }

                        {step === 4 &&
                            <Page4
                                request={request}
                                inputHandler={inputHandler}
                                checkboxHandler={checkboxHandler}
                            />
                        }

                        <div className='col d-flex align-item-center justify-content-end gap-3'>
                            <button type="button" className='btn btn-primary px-5' onClick={handleBack} disabled={step === 1}>Back</button>
                            {step === 4 ?
                                <button type="button" className="btn btn-success px-5" onClick={submitForm}>Submit</button>
                                :
                                <button type="button" className="btn btn-primary px-5" onClick={handleNext}>Next</button>
                            }
                        </div>











                    </form>
                </div>

            </div>
        </>

    )
}

export default Arf
