import React, { use, useEffect, useState } from 'react'
import './styles/arf.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Page2 from './rabies/Page2';
import Page3 from './rabies/Page3';
import Page1 from './rabies/Page1';
import image1 from '../components/images/DA2.png';

function Rabies() {

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





  const [request, setRequest] = useState({ ...common, data: generalData }); // State to hold request data

  const [successMessage, setSuccessMessage] = useState("")

  const [selectedSpecimen, setSelectedSpecimen] = useState([]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const [page, setPage] = useState(1)

  const nextPage = () => {
    setPage((p) => p + 1)
  }

  const previousPage = () => {
    setPage((p) => p - 1)
  }


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
    const form = { ...request, type: 'RABIES' };
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

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
          <span className='text-white'>Analysis Request Form — Rabies</span>
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


      <div className='d-flex mt-5 w-75 container '>
        <div className='row g-6'>
          <div className='message col-md-4'>
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
          </div>


          <form className='mt-5 mb-4' onSubmit={submitForm}>
            {page === 1 &&
              <Page1
                request={request}
                inputHandler={inputHandler}
                checkboxHandler={checkboxHandler}
              />
            }

            {page === 2 &&
              <Page2
                request={request}
                inputHandler={inputHandler}
                checkboxHandler={checkboxHandler}
              />
            }


            {page === 3 &&
              <Page3
                request={request}
                inputHandler={inputHandler}
                checkboxHandler={checkboxHandler}
              />
            }


            <div className='col d-flex align-item-center justify-content-end gap-3'>
              <button type="button" className='btn btn-primary px-5' onClick={previousPage} disabled={page === 1}>Back</button>
              {page === 3 ?
                <button type="button" className="btn btn-success px-5" onClick={submitForm}>Submit</button>
                :
                <button type="button" className="btn btn-primary px-5" onClick={nextPage}>Next</button>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Rabies
