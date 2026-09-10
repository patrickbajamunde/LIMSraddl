import React from 'react'
import '../forms/styles/arf.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RoaModal } from '../components/modal/Modal';
import { PhysicalModal } from '../components/modal/PhysicalModal';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';
import { TestMethods, InterpretResults, InterpretResultsHeader } from '../forms/roaTable/ReportTable';
import { components } from 'react-select';
import Creatable from 'react-select/creatable';

function UpdateReport() {

  const defReportId = () => {
    const now = new Date()
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0')

    const rfcal = 'RSL'
    const roa = 'ROA';

    const numberSeries = '0000';
    return `${year}-${month}-${rfcal}-${roa}-${numberSeries}`
  }


  const report = {
    customerName: "",
    customerAddress: "",
    customerContact: "",
    dateReceived: "",
    datePerformed: "",
    dateIssued: "",
    reportId: defReportId(),
    analyzedBy: "",
    status: "For release",
    sampleSource: "",
    url: '',
    qrCode: '',
    purpose: '',
    dateCollected: '',
    labCode: '',
    testMethod: '',
    sampleType: '',
  }

  const analystPRC = (analyzedBy) => {
    const PrcTable = {
      "MARYFRANIE I. BELANO, RChT": "0004756",
      "KRIZZA ASHLEY V. BALOLOY, RChT": "0007263",
      "JENNIS A. RABLANDO, RChT": "0000628",
    }
    return PrcTable[analyzedBy] || "";
  }

  const designation = (analyzedBy) => {
    const DesignationTable = {
      "JULIE ANN C. SIARES": "Laboratory Analyst",
      "MA. CRISSA F. JARANILLA": "Laboratory Analyst",
      "CARL VINCENT DC. SARGENTO": "Laboratory Analyst",
      "MA. CRISTINA V. CANON": "Laboratory Analyst",
      "MARIAH NICKOLE T. GARCIA": "Laboratory Analyst",
      "QUENNIE MAE M. BELANO": "Laboratory Analyst",
      "QUELLY JEAN O. CAÑON": "Laboratory Analyst"
    }
    return DesignationTable[analyzedBy] || "";
  }

  const analystList = [
    "JULIE ANN C. SIARES",
    "MA. CRISSA F. JARANILLA",
    "CARL VINCENT DC. SARGENTO",
    "MA. CRISTINA V. CANON",
    "MARIAH NICKOLE T. GARCIA",
    "QUENNIE MAE M. BELANO",
    "QUELLY JEAN O. CAÑON"
  ]


  const [result, setResult] = useState(report);

  //date setState
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  //modal setState
  const [showModal, setShowModal] = useState(false)

  const [roaReport, setRoaReport] = useState([]) //holds sample details in an array

  const [reportDetails, setReportDetails] = useState({
    sampleNo: '',
    fieldSampleID: '',
    address: '',
    species: '',
    age: '',
    sex: '',
    result: '',
    flotation: '',
    sedimentation: '',
    spRatio: '',
    interpretation: '',
    snRatio: '',
    hemoglobin: '',
    redBlood: '',
    whiteBlood: '',
    heterophils: '',
    lymphocytes: '',
    eosinophils: '',
    monocytes: '',
    basophils: '',
    platelets: '',
  });// state of report details before change in the modal

  const [counter, setCounter] = useState(1);


  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();

  const location = useLocation();
  const backRoute = location.state?.from || "/Dco/ForRelease/"
  const navigate = useNavigate()
  const [analystMenuOpen, setAnalystMenuOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const [inputs, setInputs] = useState([
    {
      result: "",
      status: ""
    }
  ])


  const qrGenerator = async (url) => {
    if (!url || url.trim() === '') return;

    try {
      const qrDataUrl = await QRCode.toDataURL(url, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
        }
      });

      setResult(prev => ({
        ...prev,
        qrCode: qrDataUrl
      }));
    } catch (error) {

    }
  }

  const inputHandler = (e) => {
    const { name, value, dataset } = e.target;
    if (name === 'analyzedBy') {
      const prc = analystPRC(value);
      const position = designation(value);
      setResult({
        ...result,
        [name]: value,
        analystPRC: prc,
        position: position,
      });
    } else if (name === 'analyzedBy2') {
      const prc = analystPRC(value);
      const position = designation(value);
      setResult({
        ...result,
        [name]: value,
        analystPRC2: prc,
        position2: position,
      });
    } else if (name === 'datePerformedFrom') {
      setDateFrom(value);
    }
    else if (name === 'datePerformedTo') {
      setDateTo(value);
    }
    else if (dataset.parent) {
      setResult({
        ...result,
        [dataset.parent]: {
          ...result[dataset.parent],
          [name]: value
        }
      });
    } else if (name === 'url') {
      setResult({ ...result, [name]: value });
      if (value.trim() !== '') {
        qrGenerator(value);  // Generate QR code when URL is entered
      }
    } else if (dataset.array && dataset.index !== undefined) {
      const idx = parseInt(dataset.index);
      setResult({
        ...result,
        roaDetails: result.roaDetails.map((item, index) => index === idx ? { ...item, [name]: value } : item)
      })
    }
    else {
      setResult({ ...result, [name]: value });
    }
  }

  const formatDateRange = (fromDate, toDate) => {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    const fromMonth = from.toLocaleDateString('en-US', { month: 'long' });
    const fromDay = from.getDate();
    const fromYear = from.getFullYear();

    const toMonth = to.toLocaleDateString('en-US', { month: 'long' });
    const toDay = to.getDate();
    const toYear = to.getFullYear();

    // Same month and year: "January 15 - 20, 2024"
    if (fromMonth === toMonth && fromYear === toYear) {
      return `${fromMonth} ${fromDay} - ${toDay}, ${fromYear}`;
    }
    // Same year, different months: "January 15 - February 20, 2024"
    else if (fromYear === toYear) {
      return `${fromMonth} ${fromDay} - ${toMonth} ${toDay}, ${fromYear}`;
    }
    // Different years: "December 15, 2023 - January 20, 2024"
    else {
      return `${fromMonth} ${fromDay}, ${fromYear} - ${toMonth} ${toDay}, ${toYear}`;
    }
  };

  const addDateRange = () => {
    if (dateFrom && dateTo) {
      const dateRange = formatDateRange(dateFrom, dateTo);
      const currentDates = result.datePerformed ? result.datePerformed + ', ' : '';

      setResult(prev => ({
        ...prev,
        datePerformed: currentDates + dateRange
      }));
      setDateFrom('');
      setDateTo('');
    }
  };

  const reportInputHandler = (name, value, parent) => {
    if (parent) {
      setReportDetails(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [name]: value
        }
      }));
    } else {
      setReportDetails(prev => ({ ...prev, [name]: value }));
    }

  }


  const openEditModal = (index, testMethod) => {
    const reportToEdit = result.roaDetails[index];
    setReportDetails({
      itemNo: reportToEdit.itemNo,
      sampleNo: reportToEdit.sampleNo,
      fieldSampleID: reportToEdit.fieldSampleID,
      nameOfOwner: reportToEdit.nameOfOwner,
      address: reportToEdit.address,
      species: reportToEdit.species,
      age: reportToEdit.age,
      sex: reportToEdit.sex,
      result: reportToEdit.result
    });
    setEditingIndex(index);
    setIsEditing(true);
    setShowModal(true)
  };



  const deleteEntry = (index) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      const updatedReport = result.roaDetails.filter((_, i) => i !== index);
      setResult({
        ...result,
        roaDetails: updatedReport
      });
    }
  }

  const addSelectedValue = (value) => {
    const analyzedBy = result.analyzedBy.map((analyst) => analyst.name)
    const currentValue = [...analyzedBy, value];

    const selectedAnalyst = currentValue.map((name) => ({
      name: name,
      position: designation(name)
    }))

    setResult({
      ...result,
      analyzedBy: selectedAnalyst
    })
  }

  const removeSelectedValue = (value) => {
    const analyzedBy = result.analyzedBy.map((analyst) => analyst.name)
    const currentValue = analyzedBy.filter((n) => n !== value);

    const selectedAnalyst = currentValue.map((name) => ({
      name: name,
      position: designation(name)
    }))

    setResult({
      ...result,
      analyzedBy: selectedAnalyst
    })
  }

  const analystNames = (result.analyzedBy || []).map((analyst) => analyst.name)
  const availableValues = analystList.filter(item => !analystNames.includes(item));

  const submitReport = (e) => {
    e.preventDefault();
    if (isEditing && editingIndex !== null) {
      const updatedReport = [...result.roaDetails];
      updatedReport[editingIndex] = reportDetails
      setResult({
        ...result,
        roaDetails: updatedReport
      });
    } else {
      const updatedReport = result.roaDetails ?? [];

      const newEntries = Array(parseInt(counter)).fill(null).map((_, index) => ({
        ...reportDetails,
        itemNo: updatedReport.length + index + 1,
        sampleNo: parseInt(reportDetails.sampleNo) + index,
      }));
      setResult({
        ...result,
        roaDetails: [...updatedReport, ...newEntries]
      });
    }
    setReportDetails({
      labCode: '',
      customerCode: '',
      sampleDescription: '',
      results: {
        method1Results: ''
      },
      testMethod: ''
    });
    setShowModal(false);
    setIsEditing(false);
    setEditingIndex(null);
  }




  const submitForm = async (e) => {
    e.preventDefault();
    const form = { ...result };
    await axios.put(`http://localhost:8003/api/report/update/report/${id}`, form, {
      withCredentials: true,
    })
      .then((response) => {
        setResult({
          customerName: "",
          customerAddress: "",
          customerContact: "",
          dateReceived: "",
          datePerformed: "",
          dateIssued: "",
          reportId: "",
          analyzedBy: "",
          sampleSource: "",
          url: '',
          qrCode: '',
          purpose: '',
          dateCollected: '',
          labCode: '',
          testMethod: '',
          sampleType: '',
        })
        console.log("Report created successfully.")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    axios.get(`http://localhost:8003/api/report/reportData/${id}`)
      .then((response) => {
        setResult(response.data)
      })
      .catch((error) => {
        console.error("Error fetching report details", error)
        setResult(null)
      })
  }, [id]);


  function formatDateForInput(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0];
  }

  const columns = TestMethods(result.testMethod)
  const table = InterpretResults(result.testMethod)
  const header = InterpretResultsHeader(result.testMethod)

  const interpretInputHandler = (index, key, value) => {
    const inputValue = result.interpretationTable.map((row, i) => i === index ? { ...row, [key]: value } : row)

    setInputs(inputValue)
    setResult({
      ...result,
      interpretationTable: inputValue
    })
  }

  const addField = () => {
    setResult({
      ...result,
      interpretationTable: [...result.interpretationTable, { result: "", status: "" }]
    })
  }

  const deleteField = (index) => {
    setResult({
      ...result,
      interpretationTable: result.interpretationTable.filter((_, i) => i !== index)
    })
  };

  const selectOptions = [
    { value: '', label: 'Choose...' },
    { value: 'CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA', label: 'CAPRINE ARTHRITIS ENCEPHALITIS VIRUS ANTIBODY DETECTION - ELISA' },
    { value: 'INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA', label: 'INFECTIOUS LARYNGOTRACHEITIS VIRUS ANTIBODY DETECTION - ELISA' },
    { value: 'Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA', label: 'Q FEVER (Coxiella burnetii) ANTIBODY DETECTION - ELISA' },
    { value: 'INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA', label: 'INFECTIOUS BURSAL DISEASE VIRUS ANTIBODY DETECTION - ELISA' },
    { value: 'INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA', label: 'INFLUENZA A VIRUS ANTIBODY DETECTION - ELISA' },
    { value: 'BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA', label: 'BRUCELLOSIS (Brucella abortus, Brucella melitensis, Brucella suis) ANTIBODY DETECTION - ELISA' },
    { value: 'FECALYSIS (FLOTATION AND SEDIMENTATION TECHNIQUE)', label: 'FECALYSIS (FLOTATION AND SEDIMENTATION TECHNIQUE)' },
    { value: 'McMASTER COUNTING TECHNIQUE', label: 'McMASTER COUNTING TECHNIQUE' },
    { value: 'CLINICAL HEMATOLOGY (Complete Blood Count)', label: 'CLINICAL HEMATOLOGY (Complete Blood Count)' },
    { value: 'NECROPSY', label: 'NECROPSY' },
    { value: 'BACTERIAL ISOLATION AND IDENTIFICATION - 2', label: 'BACTERIAL ISOLATION AND IDENTIFICATION - 2' }
  ];

  const selectChange = (selectOptions) => {
    setResult(prev => ({
      ...prev,
      testMethod: selectOptions.value
    }))
  }

  const selectValue = (testMethod) => {
    return testMethodOptions.find(option => option.value === testMethod) || null;
  }

  const [testMethodOptions, setTestMethodOptions] = useState(selectOptions);


  const addTestMethod = (testMethod) => {
    const newTestMethod = { value: testMethod, label: testMethod, __isCustom: true }
    setTestMethodOptions(prevOptions => [
      ...prevOptions,
      newTestMethod
    ])
    setResult(prev => ({ ...prev, testMethod }))
  }

  const removeTestMethod = (testMethod) => {
    setTestMethodOptions(prevOptions => prevOptions.filter(option => option.value !== testMethod));
  }

  const customOption = (props) => {
    return (
      <components.Option {...props}>
        <div className="d-flex justify-content-between align-items-center">
          <span>{props.data.label}</span>
          {props.data.__isCustom && (
            <button
              type="button"
              className="btn btn-sm btn-link text-danger p-0 ms-2"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                props.selectProps.onRemoveOption(props.data.value);
              }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          )}
        </div>
      </components.Option>
    );
  };

  return (
    <div className='d-flex mt-4'>
      <div className='analysis card container-fluid shadow-sm border bordered-darker mb-5'>
        <div className='row g-6'>
          <div className='head container rounded-top' style={{ backgroundColor: '#003e8fff' }}>

            <div className='mt-1'>
              <i className='bi bi-info-circle text-white fs-5 ms-1 me-1' />
              <span className='ms-2 fs-5 text-white'>ROA Form</span>
            </div>
          </div>
          <form className='mt-4 mb-4' onSubmit={submitForm}>
            <div className='card p-4 mb-3 shadow-sm border'>
              <label className='form-label'>G-drive Folder URL:</label>
              <input type="text" className="form-control border-dark" name='url' onChange={inputHandler} value={result.url} placeholder="Enter link here" />
            </div>

            <div className='card p-4 mb-3 shadow-sm border'>
              <h5 className='mb-4 text-primary fw-bold'>Report Details</h5>
              <div className='row g-4'>
                <div className='col-md-6'>
                  <label className='form-label'>Report Id: </label>
                  <input type="text" className="date form-control border-dark" name='reportId' id='reportId' onChange={inputHandler} value={result.reportId} placeholder="" />
                </div>

                <div className='col-md-6'>
                  <label className='form-label '>Date Issued: </label>
                  <input type="date" className="date form-control border-dark" name='dateIssued' onChange={inputHandler} value={result.dateIssued} placeholder="" />
                </div>


                <div className='col-md-6'>
                  <div className='position-relative'>
                    <label className='form-label'>Analyzed By</label>
                    <div className='form-control border-dark d-flex flex-wrap align-items-center gap-1 ' onClick={() => setAnalystMenuOpen((open) => !open)}>
                      {result.analyzedBy.length === 0 ? (
                        <span>Choose analysts...</span>
                      ) : (
                        result.analyzedBy.map((value, index) => (
                          <span key={index} className='bg-primary bg-opacity-50 text-white  rounded-4 p-1' style={{ fontSize: 11 }}>
                            {value.name}
                            <button
                              className='ms-2 text-dark border-0 bg-transparent'
                              onClick={(e) => {
                                e.stopPropagation();
                                removeSelectedValue(value.name);
                              }}
                              style={{ cursor: 'pointer', fontSize: 12 }}
                            >
                              X
                            </button>
                          </span>
                        ))
                      )}

                    </div>
                    {analystMenuOpen && (
                      <div className='card mt-1 border border-dark position-absolute w-100 z-3'>
                        {availableValues.map((analyst, index) => (
                          <span key={index} className='button mb-1 px-3 ' onClick={() => { addSelectedValue(analyst) }}>
                            {analyst}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>



                <div className="col-md-6 ">
                  <label className='form-label '>Date Received: </label>
                  <input type="date" className="date form-control border-dark" name='dateReceived' onChange={inputHandler} value={result.dateReceived} placeholder="" />
                </div>

                <div className="col-md-6 ">
                  <label className='form-label '>Purpose: </label>
                  <input type="text" className="date form-control border-dark" name='purpose' onChange={inputHandler} value={result.purpose} placeholder="" />
                </div>

                <div className='col-md-6 mt-3'>
                  {/*Date Performed*/}
                  <div className="col">
                    <div className='col-md'>
                      <label className=" col-md-3 col-form-label">Date Performed:</label>
                      <div className='col-auto'>
                        <input type="text" className="date form-control border-dark" id="datePerformed" name="datePerformed" onChange={inputHandler} value={result.datePerformed} placeholder="" />
                      </div>
                    </div>


                  </div>
                </div>


                <div className="col-md-6">
                  <label className='form-label '>Date of Collection: </label>
                  <input type="date" className="date form-control border-dark" name='dateCollected' onChange={inputHandler} value={result.dateCollected} placeholder="" />
                </div>
                <div className="col-md-6">
                  <div className=" row mt-4">

                    {/*FROM*/}
                    <div className="col-sm-5">
                      <div className="row ">
                        <label className="col-sm-4 col-form-label">From</label>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control border-dark"
                            id="datePerformedFrom"
                            name="datePerformedFrom"
                            onChange={inputHandler}
                            value={dateFrom}
                          />
                        </div>
                      </div>
                    </div>

                    {/*TO*/}
                    <div className="col-sm-5">
                      <div className="row ">
                        <label className="col-sm-4 col-form-label ">To</label>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control border-dark"
                            id="datePerformedTo"
                            name="datePerformedTo"
                            onChange={inputHandler}
                            value={dateTo}
                          />
                        </div>
                      </div>
                    </div>

                    {/*BUTTON*/}
                    <div className='col-sm d-flex align-items-center justify-content-center'>
                      <button type='button' className='btn btn-primary' onClick={addDateRange}><i className="bi bi-plus-lg fs-8"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='container-fluid shadow-sm border border-secondary border-1 mt-3' />

            {/*Customer Details*/}
            <div className='card p-4 mb-3 shadow-sm border mt-3'>
              <h5 className='mb-4 text-primary fw-bold'>Customer Details</h5>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className='form-label'>Customer Name:</label>
                  <input type="text" className="date form-control border-dark" name='customerName' onChange={inputHandler} value={result.customerName} placeholder="e.g. John P. Doe" />
                </div>

                <div className="col-md-6">
                  <label className='form-label'>Contact No./Email:</label>
                  <input type="tel" className="form-control border-dark" id="mobile" name='customerContact' onChange={inputHandler} value={result.customerContact} placeholder="e.g. 09123456789" />
                </div>

                <div className='col-md-6'>
                  <label className='form-label'>Address:</label>
                  <input type="text" className="date form-control border-dark" name='customerAddress' onChange={inputHandler} value={result.customerAddress} placeholder="Street, Barangay, City" />
                </div>
              </div>
            </div>

            <div className='container-fluid border border-secondary border-1 mt-3' />

            <div className='card p-4 mb-3 mt-3 shadow-sm border'>
              <h5 className='mb-4 text-primary fw-bold'>Chemical Analysis Result</h5>

              <div className='row g-4'>
                <div className='col-md-6'>
                  <label className='form-label'>Laboratory Code</label>
                  <input type='text' className='form-control border-dark' name='labCode' value={result.labCode} onChange={inputHandler} />
                </div>

                <div className='col-md-6'>
                  <label className='form-label'>Test Method</label>
                  <Creatable
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: 'black',
                        borderRadius: '6px',
                      }),
                    }}

                    options={testMethodOptions}
                    name='testMethod'
                    value={selectValue(result.testMethod)}
                    onChange={selectChange}
                    onCreateOption={addTestMethod}
                    onRemoveOption={removeTestMethod}
                    components={{ Option: customOption }}
                  />
                </div>

                <div className='col-md-6'>
                  <label className='form-label'>Sample Type</label>
                  <input type='text' className='form-control border-dark' name='sampleType' value={result.sampleType} onChange={inputHandler} />
                </div>
              </div>

              <div className='d-flex mt-3'>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (!isEditing) {
                      setReportDetails({
                        ...reportDetails,
                        itemNo: roaReport.length + 1
                      });
                    }
                    setShowModal(true);
                  }}>
                  <i className="bi bi-plus-lg me-2 fs-6"></i>Add Sample Details
                </button>
              </div>

              {/*Table for ROA Details */}
              <div className="row mt-2">
                <div className="col-12">
                  <table className="table table-bordered border-dark">
                    <thead className="table-primary border-dark">
                      <tr className='text-center'>
                        {columns.map(col => <th key={col.key}>{col.label}</th>)}
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.roaDetails && result.roaDetails.length > 0 ? (
                        result.roaDetails.map((reportItem, index) => (
                          <tr key={index}>
                            {columns.map(col =>
                              <td key={col.key}>
                                <input type='text' className='border-0 shadow-none bg-transparent' style={{ boxShadow: 'none', outline: 0, width: '100%' }} name={col.key} data-index={index} data-array='roaReport' onChange={inputHandler} value={reportItem[col.key ?? '']}></input>
                              </td>
                            )}

                            <td>

                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => deleteEntry(index)}
                                title="Delete Sample"
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="15" className="text-center">No samples added yet.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card p-4 mb-3 mt-3 shadow-sm border">
              <h5 className='mb-4 text-primary fw-bold'>Interpretation of Results</h5>
              <table className="table table-bordered border-dark w-50">
                <thead className="table-primary border-dark">
                  <tr className='text-center'>
                    {header.map(header =>
                      <th key={header.key} colSpan={header.colSpan ?? 1}>
                        {header.label}
                      </th>
                    )}
                    <th style={{ width: '1%', whiteSpace: 'nowrap' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {result.interpretationTable?.map((field, index) => (
                    <tr key={index}>
                      {table.map(cell =>
                        <td key={cell.key} className='pb-0 pt-1 px-0'>
                          <input type='text' className='form-control border border-dark border-0' style={{ boxShadow: 'none', outline: 0, width: '100%' }} name={cell.key} value={field[cell.key] ?? ''} onChange={(e) => interpretInputHandler(index, cell.key, e.target.value)} />
                        </td>
                      )}
                      <td>
                        {result.interpretationTable.length > 1 &&
                          <button type='button' className='btn btn-sm btn-outline-danger' onClick={() => deleteField(index)}><i className="bi bi-trash"></i></button>
                        }

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type='button' className='btn btn-primary col-2 fw-bold' onClick={addField}>+ Add Row</button>

            </div>


            <div className='col-md-6 gap-3 offset-md-6 d-flex justify-content-end pe-3'>
              <button type='button' className="btn btn-primary col-md-2" onClick={() => navigate(backRoute)}>Back</button>
              <button type='submit' className="btn btn-primary col-md-2" >Save</button>
            </div>
          </form>

        </div>
      </div>
      <RoaModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setReportDetails({
            itemNo: '',
            sampleNo: '',
            fieldSampleID: '',
            address: '',
            species: '',
            age: '',
            sex: '',
            result: ''
          });
        }}
        reportDetails={reportDetails}
        onChange={reportInputHandler}
        onSubmit={submitReport}
        isEditing={isEditing}
        counter={counter}
        setCounter={setCounter}
        testMethod={result.testMethod}
      />
    </div>
  )
}

export default UpdateReport