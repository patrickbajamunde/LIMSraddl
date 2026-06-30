import React, { useState, useEffect } from 'react'
import '../forms/styles/arf.css'
import axios from 'axios';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';

function UpdateRGeneral({ request, setRequest }) {


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

  const navigate = useNavigate();



  const [successMessage, setSuccessMessage] = useState("")

  const [editingIndex, setEditingIndex] = useState(null); // Track which sample is being edited
  const [isEditing, setIsEditing] = useState(false); // Track if we're in edit mode
  const { id } = useParams();

  const location = useLocation();
  const backRoute = location.state?.from || "/Dco/Walkin/";



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


  const submitForm = async (e) => {
    e.preventDefault();
    const form = { ...request };
    await axios.put(`http://localhost:8003/api/client/update/arf/${id}`, form,
      {
        withCredentials: true,
      }
    )
      .then((response) => {
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
              <span className='ms-2 fs-5 text-white'>ANALYSIS REQUEST FORM (GENERAL SAMPLE)</span>
            </div>
          </div>

          <form className='mt-3 mb-4' onSubmit={submitForm}>
            {/* --- Request Details --- */}
            <div className='card p-4 mb-3 shadow-sm border'>
              <h5 className='mb-4 text-primary fw-bold'>Request Details</h5>
              <div className="row g-4">
                <div className='col-md-6'>
                  <label className='form-label'>Type Of Customer</label>
                  <select id='clientType' name="clientType" onChange={inputHandler} value={request.clientType} className='form-select border-dark'>
                    <option value="">Choose...</option>
                    <option value="Regulatory">Regulatory</option>
                    <option value="Corn Program">Corn Program</option>
                    <option value="Rice Program">Rice Program</option>
                    <option value="LGU">LGU</option>
                    <option value="Student">Student</option>
                    <option value="Private">Private</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Government Agency">Government Agency</option>
                    <option value="High Value Crops Program">High Value Crops Program</option>
                    <option value="Research">Research</option>
                  </select>
                </div>

                <div className='col-md-6'>
                  <label className='form-label'>Laboratory Accession Number</label>
                  <input type='text' className='form-control border border-dark' id='labAccessionNumber' name='labAccessionNumber' onChange={inputHandler} value={request.labAccessionNumber} />
                </div>

                <div className="col-md-6">
                  <label className='form-label'>Record ID</label>
                  <input type="text" className="form-control border border-dark" id="recordId" name="recordId" onChange={inputHandler} value={request.recordId} placeholder="Auto-generated" />
                </div>
                <div className='col-md-6'>
                  <label className='form-label'>Request ID</label>
                  <input type="text" className="form-control border border-dark" id="requestId" name="requestId" onChange={inputHandler} value={request.requestId} placeholder="Auto-generated" />
                </div>
                <div className='col-md-6'>
                  <label className='form-label'>Date Submitted</label>
                  <input type="date" className="form-control border border-dark" id="dateSubmitted" name='dateSubmitted' value={request.data.dateSubmitted} onChange={inputHandler} />
                </div>
                <div className='col-md-6'>
                  <label className='form-label'>Received By</label>
                  <select id='receivedBy' name='receivedBy' onChange={inputHandler} value={request.data.receivedBy} className='form-select border-dark'>
                    <option value="">Choose...</option>
                    <option value="Fernando T. Almonte JR.">Fernando T. Almonte JR.</option>

                  </select>
                </div>
                <div className='col-md-6'>
                  <label className='form-label'>Time</label>
                  <input type="time" className="form-control border border-dark" id="samplingTime" name='samplingTime' value={request.data.samplingTime} onChange={inputHandler} />
                </div>
                <div className='col-md-6'>
                  <label className='form-label'>Date Collected</label>
                  <input type="date" className="form-control border border-dark" id="dateCollected" name='dateCollected' value={request.data.dateCollected} onChange={inputHandler} />
                </div>
              </div>
            </div>

            <div className='container-fluid shadow-sm border border-secondary border-1 mt-3 mb-3'>
            </div>

            <div className='row gx-3'>
              <div className="col-md-6">
                <div className='card p-4 shadow-sm border'>
                  <h5 className='mb-4 text-primary fw-bold'>Origin of Samples:</h5>
                  <div className='col'>
                    <div>
                      <label className='form-label'>Owner/Farm</label>
                      <input type="text" className="form-control border border-dark" id="locOfFarm" name='locOfFarm' value={request.locOfFarm} onChange={inputHandler} placeholder="Owner/Farm Name" />
                    </div>

                    <div>
                      <label className='form-label'>Barangay</label>
                      <input type="email" className="form-control border border-dark" id="barangay" name='barangay' value={request.barangay} onChange={inputHandler} placeholder="example@email.com" />
                    </div>

                    <div>
                      <label className='form-label'>Municipality</label>
                      <input type="tel" className="form-control border border-dark" id="municipality" name='municipality' value={request.municipality || ''} onChange={inputHandler} placeholder="09XXXXXXXXX" />
                    </div>

                    <div>
                      <label className='form-label'>Province</label>
                      <input type="text" className="form-control border border-dark" id="province" name='province' value={request.province} onChange={inputHandler} placeholder="Province" />
                    </div>

                    <div>
                      <label className='form-label'>Contact No.</label>
                      <input type="tel" className="form-control border border-dark" id="contactNo" name='contactNo' value={request.contactNo || ''} onChange={inputHandler} placeholder="09XXXXXXXXX" />
                    </div>
                    <div>
                      <label className='form-label'>Email</label>
                      <input type="text" className="form-control border border-dark" id="email" name='email' value={request.email} onChange={inputHandler} placeholder="Street, Barangay, City" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className='card p-4 shadow-sm border '>
                  <h5 className='mb-4 text-primary fw-bold'>Submitted By:</h5>
                  <div className='col'>
                    <div className='col'>
                      <label className='form-label'>Name</label>
                      <input type="text" className="form-control border border-dark" id="clientName" name='clientName' value={request.clientName} onChange={inputHandler} placeholder="Full Name" />
                    </div>

                    <div>
                      <label className='form-label'>Address</label>
                      <input type="email" className="form-control border border-dark" id="clientAddress" name='clientAddress' value={request.clientAddress} onChange={inputHandler} placeholder="example@email.com" />
                    </div>

                    <div>
                      <label className='form-label'>Age</label>
                      <input type="tel" className="form-control border border-dark" id="clientAge" name='clientAge' value={request.clientAge} onChange={inputHandler} />
                    </div>

                    <div>
                      <label className='form-label'>Sex</label>
                      <select id='clientGender' name="clientGender" onChange={inputHandler} value={request.clientGender} className='form-select border-dark'>
                        <option value="">Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className='form-label'>Contact No.</label>
                      <input type="tel" className="form-control border border-dark" id="clientContact" name='clientContact' value={request.clientContact || ''} onChange={inputHandler} placeholder="09XXXXXXXXX" />
                    </div>

                    <div>
                      <label className='form-label'>Email</label>
                      <input type="text" className="form-control border border-dark" id="clientEmail" name='clientEmail' value={request.clientEmail} onChange={inputHandler} placeholder="Street, Barangay, City" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='container-fluid border border-secondary border-1 mt-3'></div>

            {/*Specimen / Quantity Submitted*/}

            <div className='card p-4 mb-3 mt-3 shadow-sm border'>
              <h5 className='mb-4 text-primary fw-bold'>Specimen/Quantity Submitted</h5>
              <div className='row g-1'>
                <h5 className='fw-bold mb-0'>Species:</h5>
                {specimenList.map((specimen, index) => (
                  <div className='form-check col-3 mt-0' key={index}>
                    <div className='d-flex align-items-center gap-2'>
                      <input type='checkbox' className='form-check-input border border-dark' id={`specimen-${index}`} name='specimen' value={specimen} onChange={checkboxHandler} checked={(request.data.specimen || []).some(item => item.name === specimen)} />
                      <label className='form-check-label' htmlFor={`specimen-${index}`}>{specimen}:</label>
                      <input type='text' className='col-4 border-0 border-bottom border-dark ' data-specimen={specimen} data-field='specimen' onChange={inputHandler} value={(request.data.specimen || []).find(item => item.name === specimen)?.quantity || ''} />
                    </div>
                  </div>
                ))}
              </div>

              <div className='col-3 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                <label className='form-label mt-2'>Age:</label>
                <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='specimenAge' value={request.data.specimenAge} onChange={inputHandler} />
              </div>

              <div className='col-3 pb-2 ps-2 mb-4 border-start border-4 mt-3 border-primary bg-primary bg-opacity-25 rounded'>
                <div className='row g-1 pt-2'>
                  <label className='form-label col-2'>Sex:</label>
                  {sexList.map((gender, index) => (
                    <div className='form-check col-3' key={index}>
                      <input type='checkbox' className='form-check-input border border-dark' name='sex' value={gender} onChange={checkboxHandler} checked={(request.data.sex || []).includes(gender)} />
                      <label className='form-check-label' htmlFor={`gender-${index}`}>{gender}</label>
                    </div>
                  ))}
                </div>
              </div>

              <h5 className='fw-bold mb-0'>Specimen:</h5>
              <div className='col-9 pb-2 ps-2 mb-3 border-start border-4 mt-3 border-primary bg-primary bg-opacity-25 rounded'>
                <div className='d-flex align-items-center gap-3 pt-2'>
                  <label className='form-label mb-0 col-2'>Whole Animal:</label>
                  <div className='form-check col-3'>
                    <div className='d-flex align-items-center gap-2'>
                      <input type='checkbox' className='form-check-input border border-dark' name='wholeAnimal' value={wholeAnimal[0]} onChange={checkboxHandler} checked={(request.data.wholeAnimal || []).some(item => item.name === wholeAnimal[0])} />
                      <label className='form-check-label'>{wholeAnimal[0]}</label>
                      <input type='text' className='col-4 border-0 border-bottom border-dark bg-transparent' data-field="wholeAnimal" data-specimen={wholeAnimal[0]} onChange={inputHandler} value={(request.data.wholeAnimal || []).find(item => item.name === wholeAnimal[0])?.quantity || ''} />
                    </div>
                  </div>
                  <div className='form-check col-7'>
                    <div className='d-flex align-items-center gap-2'>
                      <input type='checkbox' className='form-check-input border border-dark' name='wholeAnimal' value={wholeAnimal[1]} onChange={checkboxHandler} checked={(request.data.wholeAnimal || []).some(item => item.name === wholeAnimal[1])} />
                      <label className='form-check-label'>{wholeAnimal[1]}</label>
                      <input type='text' className='col-4 border-0 border-bottom border-dark bg-transparent' data-field="wholeAnimal" data-specimen={wholeAnimal[1]} onChange={inputHandler} value={(request.data.wholeAnimal || []).find(item => item.name === wholeAnimal[1])?.quantity || ''} />
                    </div>
                  </div>
                </div>
              </div>


              <div className='row g-1'>
                {specimenPart.map((specimen, index) => (
                  <div className='form-check col-3 mt-0' key={index}>
                    <div className='d-flex align-items-center gap-2'>
                      <input type='checkbox' className='form-check-input border border-dark' id={`specimen-${index}`} name='specimenPart' value={specimen} onChange={checkboxHandler} checked={(request.data.specimenPart || []).some(item => item.name === specimen)} />
                      <label className='form-check-label' htmlFor={`specimen-${index}`}>{specimen}:</label>
                      <input type='text' className='col-4 border-0 border-bottom border-dark ' data-specimen={specimen} data-field="specimenPart" onChange={inputHandler} value={(request.data.specimenPart || []).find(item => item.name === specimen)?.quantity || ''} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='container-fluid border border-secondary border-1 mt-3'></div>

            <h5 className='mb-2 mt-3 text-primary fw-bold'>Examination Requested</h5>
            {/*Examination Requested*/}
            <div className='card p-4 mb-3 shadow-sm border mt-3'>
              <span className='mb-3 text-primary fw-bold '>PATHOLOGY</span>
              <div className='row g-1'>
                {pathologyList.map((pathology, index) => (
                  <div className='form-check col-auto mt-0 me-3' key={index}>
                    <div className='d-flex align-items-center gap-2'>
                      <input type='checkbox' className='form-check-input border border-dark' name='pathologyList' value={pathology} onChange={checkboxHandler} checked={(request.data.pathologyList || []).includes(pathology)} />
                      <label className='form-check-label' htmlFor={`pathology-${index}`}>{pathology}</label>
                      {pathology === 'Others' && (
                        <input type='text' className='col-4 border-0 border-bottom border-dark' name='pathologyOthers' value={request.data.pathologyOthers} onChange={inputHandler} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
              <span className='mb-3 text-primary fw-bold '>BACTERIOLOGY</span>
              <div className='row g-1'>
                <div className='col-7'>
                  <div className='row g-1'>
                    <span className='mb-1 text-primary fw-bold border-bottom border-primary col-auto'>Isolation & Identification</span>
                    {isoAndIdenList.map((isoAndIdenList, index) => (
                      <div className='form-check mt-0' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='isoAndIdenList' value={isoAndIdenList} onChange={checkboxHandler} checked={(request.data.isoAndIdenList || []).includes(isoAndIdenList)} />
                          <label className='form-check-label' htmlFor={`isoAndIdenList-${index}`}>{isoAndIdenList}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-5'>
                  <span className='text-primary fw-bold border-bottom border-primary col-auto '>Rapid Plate Test</span>
                  <div className='row g-1 mt-1'>
                    {rapidPlateTest.map((rapidPlateTest, index) => (
                      <div className='form-check col-5 mt-0' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='rapidPlateTest' value={rapidPlateTest} onChange={checkboxHandler} checked={(request.data.rapidPlateTest || []).includes(rapidPlateTest)} />
                          <label className='form-check-label' htmlFor={`rapidPlateTest-${index}`}>{rapidPlateTest}</label>
                          {rapidPlateTest === 'Others' && (
                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='rpcOthers' value={request.data.rpcOthers} onChange={inputHandler} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-3 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                <label className='form-label mt-2'>Other Tests:</label>
                <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='otherTests' value={request.data.otherTests} onChange={inputHandler} />
              </div>
              <div className='row g-1 mt-3'>
                {bacteOthers2.map((bacte, index) => (
                  <div className='form-check col-5 mt-0' key={index}>
                    <input type='checkbox' className='form-check-input border border-dark' name='bacteOthers2' value={bacte} onChange={checkboxHandler} checked={(request.data.bacteOthers2 || []).includes(bacte)} />
                    <label className='form-check-label' htmlFor={`rapidPlateTest-${index}`}>{bacte}</label>
                    {bacte === 'Others' && (
                      <input type='text' className='col-4 border-0 border-bottom border-dark' name='bacteOthers' value={request.data.bacteOthers} onChange={inputHandler} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
              <span className='mb-3 text-primary fw-bold '>PARASITOLOGY</span>
              <div className='row g-1'>

                <div className='col-4'>
                  <div className='row g-1'>
                    <span className='mb-1 text-primary fw-bold border-bottom border-primary col-auto'>Fecalysis</span>
                    {fecalysisList.map((fecalysis, index) => (
                      <div className='form-check mt-0' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='fecalysis' value={fecalysis} onChange={checkboxHandler} checked={(request.data.fecalysis || []).includes(fecalysis)} />
                          <label className='form-check-label' htmlFor={`fecalysis-${index}`}>{fecalysis}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='col-9 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                    <label className='form-label mt-2'>Other Tests:</label>
                    <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='parasiteOthers' value={request.data.parasiteOthers} onChange={inputHandler} />
                  </div>
                </div>

                <div className='col-3 '>
                  <span className='text-primary fw-bold border-bottom border-primary col-auto '>Parasite Identification</span>
                  <div className='row g-1 mt-1'>
                    {parasiteIden.map((parasite, index) => (
                      <div className='form-check col-auto mt-0' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='parasiteIden' value={parasite} onChange={checkboxHandler} checked={(request.data.parasiteIden || []).includes(parasite)} />
                          <label className='form-check-label' htmlFor={`parasite-${index}`}>{parasite}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='col-4'>
                  <span className='text-primary fw-bold border-bottom border-primary col-auto '>Blood Parasite Examination</span>
                  <div className='row g-1 mt-1'>
                    {bloodParasiteExam.map((bloodParasiteExam, index) => (
                      <div className='form-check mt-0' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='bloodParasiteExam' value={bloodParasiteExam} onChange={checkboxHandler} checked={(request.data.bloodParasiteExam || []).includes(bloodParasiteExam)} />
                          <label className='form-check-label' htmlFor={`bloodParasiteExam-${index}`}>{bloodParasiteExam}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='col-9 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
                    <label className='form-label mt-2'>Other Tests:</label>
                    <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='bloodParaOthers' value={request.data.bloodParaOthers} onChange={inputHandler} />
                  </div>
                </div>
              </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
              <span className='mb-3 text-primary fw-bold '>VIROLOGY</span>
              <div className='row g-1'>

                <div className='row g-1 mb-2'>
                  {virologyList.map((virology, index) => (
                    <div className='form-check mt-0' key={index}>
                      <div className='d-flex align-items-center gap-2'>
                        <input type='checkbox' className='form-check-input border border-dark' name='virologyList' value={virology} onChange={checkboxHandler} checked={(request.data.virologyList || []).includes(virology)} />
                        <label className='form-check-label' htmlFor={`virology-${index}`}>{virology}</label>
                        {virology === 'Others' && (
                          <input type='text' className='col-4 border-0 border-bottom border-dark' name='virologyOthers' value={request.data.virologyOthers} onChange={inputHandler} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='col-auto mb-2'>
                  <span className='text-primary fw-bold border-bottom border-primary col-auto '>Enzyme-Linked Immunosorbent Assay (ELISA)</span>
                  <div className='row g-1 mt-1'>
                    {elisaList.map((elisa, index) => (
                      <div className='form-check col-5 mt-0 ' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='elisaList' value={elisa} onChange={checkboxHandler} checked={(request.data.elisaList || []).includes(elisa)} />
                          <label className='form-check-label' htmlFor={`elisa-${index}`}>{elisa}</label>
                          {elisa === 'Others' && (
                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='elisaOthers' value={request.data.elisaOthers} onChange={inputHandler} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className='text-primary fw-bold border-bottom border-primary col-auto '>Polymerase Chain Reaction (PCR)</span>
                  <div className='row g-1 mt-1'>
                    {pcrList.map((pcrList, index) => (
                      <div className='form-check mt-0' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='pcrList' value={pcrList} onChange={checkboxHandler} checked={(request.data.pcrList || []).includes(pcrList)} />
                          <label className='form-check-label' htmlFor={`pcrList-${index}`}>{pcrList}</label>
                          {pcrList === 'Others' && (
                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='pcrOthers' value={request.data.pcrOthers} onChange={inputHandler} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='card p-4 mb-3 shadow-sm border mt-3'>
              <span className='mb-3 text-primary fw-bold '>PURPOSE</span>
              <div className='col-auto'>
                <div className='row g-1'>
                  <div className='row g-1'>
                    {purposeList.map((purpose, index) => (
                      <div className='form-check col-5 mt-0' key={index}>
                        <div className='d-flex align-items-center gap-2'>
                          <input type='checkbox' className='form-check-input border border-dark' name='purposeList' value={purpose} onChange={checkboxHandler} checked={(request.data.purposeList || []).includes(purpose)} />
                          <label className='form-check-label' htmlFor={`purpose-${index}`}>{purpose}</label>
                          {purpose === 'Others' && (
                            <input type='text' className='col-4 border-0 border-bottom border-dark' name='purposeOthers' value={request.data.purposeOthers} onChange={inputHandler} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='container-fluid border border-secondary border-1 mt-3'></div>
            <h5 className='mb-2 mt-3 text-primary fw-bold'>Filled out by RADDL staff</h5>
            <div className='row'>
              <div className='col'>
                <div className='card p-4 mb-3 shadow-sm border'>
                  <span className='mb-3 text-primary fw-bold ' style={{ fontSize: 20 }}>ASSESSMENT</span>

                  <div className='col-auto'>
                    <span className='text-primary fw-bold border-primary col-auto' style={{ fontSize: 17 }}>1. Sample Labeling</span>
                    <div className='row g-1'>
                      {sampleLabel.map((label, index) => (
                        <div className='form-check col-5 mt-0' key={index}>
                          <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className='form-check-input border border-dark' name='sampleLabel' value={label} onChange={checkboxHandler} checked={(request.data.sampleLabel || []).includes(label)} />
                            <label className='form-check-label' htmlFor={`label-${index}`}>{label}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='col-auto mt-2'>
                    <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>2. Quantity of Sample</span>
                    <div className='row g-1'>
                      {quantityOfSample.map((quantity, index) => (
                        <div className='form-check mt-0' key={index}>
                          <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className='form-check-input border border-dark' name='quantityOfSample' value={quantity} onChange={checkboxHandler} checked={(request.data.quantityOfSample || []).includes(quantity)} />
                            <label className='form-check-label' htmlFor={`quantity-${index}`}>{quantity}</label>
                            {quantity === 'Others' && (
                              <input type='text' className='col-4 border-0 border-bottom border-dark' name='sampleQuantityOthers' value={request.data.sampleQuantityOthers} onChange={inputHandler} />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='col-auto mt-2'>
                    <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>3. Proper preservation used for sample Type</span>
                    <div className='row g-1'>
                      {preservationUsed.map((preservation, index) => (
                        <div className='form-check mt-0' key={index}>
                          <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className='form-check-input border border-dark' name='preservationUsed' value={preservation} onChange={checkboxHandler} checked={(request.data.preservationUsed || []).includes(preservation)} />
                            <label className='form-check-label' htmlFor={`preservation-${index}`}>{preservation}</label>
                            {preservation === 'Other' && (
                              <input type='text' className='col-4 border-0 border-bottom border-dark' name='preserveOthers' value={request.data.preserveOthers} onChange={inputHandler} />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='col-auto mt-2'>
                    <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>4. Proper transport</span>
                    <div className='row g-1'>
                      {transport.map((transport, index) => (
                        <div className='form-check mt-0' key={index}>
                          <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className='form-check-input border border-dark' name='transport' value={transport} onChange={checkboxHandler} checked={(request.data.transport || []).includes(transport)} />
                            <label className='form-check-label' htmlFor={`transport-${index}`}>{transport}</label>
                            {transport === 'Other' && (
                              <input type='text' className='col-4 border-0 border-bottom border-dark' name='tranportOthers' value={request.data.tranportOthers} onChange={inputHandler} />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='col-auto mt-2'>
                    <span className='text-primary fw-bold border-primary col-auto ' style={{ fontSize: 17 }}>5. State of sample when it reached the laboratory</span>
                    <div className='row g-1'>
                      {stateOfSample.map((state, index) => (
                        <div className='form-check mt-0' key={index}>
                          <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className='form-check-input border border-dark' name='stateOfSample' value={state} onChange={checkboxHandler} checked={(request.data.stateOfSample || []).includes(state)} />
                            <label className='form-check-label' htmlFor={`state-${index}`}>{state}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card p-4 mb-3 shadow-sm border'>
                  <span className='mb-3 text-primary fw-bold '>CRITERIA FOR REJECTION OF SAMPLES</span>
                  <div className='col-auto'>
                    <div className='row g-1'>
                      <div className='row g-1'>
                        {rejectionOfSamples.map((rejection, index) => (
                          <div className='form-check mt-0' key={index}>
                            <div className='d-flex align-items-center gap-2'>
                              <input type='checkbox' className='form-check-input border border-dark' name='rejectionOfSamples' value={rejection} onChange={checkboxHandler} checked={(request.data.rejectionOfSamples || []).includes(rejection)} />
                              <label className='form-check-label' htmlFor={`rejection-${index}`}>{rejection}</label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card p-4 mb-3 shadow-sm border'>
                  <span className='mb-3 text-primary fw-bold '>REVIEW OF REQUEST</span>
                  <div className='col-auto'>
                    <div className='row g-1'>
                      <label className='form-label mb-0' style={{ fontSize: 17 }}>1. Sample Storage</label>
                      {sampleStorage.map((storage, index) => (
                        <div className='form-check mt-0 mb-2' key={index}>
                          <div className='d-flex align-items-center gap-2 ps-3'>
                            <input type='checkbox' className='form-check-input border border-dark' name='sampleStorage' value={storage} onChange={checkboxHandler} checked={(request.data.sampleStorage || []).includes(storage)} />
                            <label className='form-check-label' htmlFor={`storage-${index}`}>{storage}</label>
                          </div>
                        </div>
                      ))}

                      <label className='form-label mb-0' style={{ fontSize: 17 }}>2. Sample retention (days, months, years)</label>
                      <input type='text' className='form-control border border-dark mb-2' id='sampleRetentionDate' name='sampleRetentionDate' value={request.data.sampleRetentionDate} onChange={inputHandler} />

                      <label className='form-label mb-0' style={{ fontSize: 17 }}>3. Sample storage location</label>
                      <input type='text' className='form-control border border-dark mb-2' id='sampleStorageLocation' name='sampleStorageLocation' value={request.data.sampleStorageLocation} onChange={inputHandler} />

                      <label className='form-label mb-0' style={{ fontSize: 17 }}>4. Sample disposal date</label>
                      <input type='date' className='form-control border border-dark mb-4' id='sampleDisposalDate' name='sampleDisposalDate' value={request.data.sampleDisposalDate} onChange={inputHandler} />
                    </div>
                  </div>
                </div>
              </div>
            </div>



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

export default UpdateRGeneral