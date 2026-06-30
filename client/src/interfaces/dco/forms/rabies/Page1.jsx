import React, { use, useEffect, useState } from 'react'
import '../styles/arf.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Page1({ request, inputHandler, checkboxHandler }) {
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

  const sampleLabel = [
    "Clear and properly labeled"
  ]

  const typeOfSample = [
    "Head",
    "Brain/Organ",
    "Whole Body",
    "Others"
  ]


  const transport = [
    "Triple Packaging",
    "Use of leak proof container",
    "Use of proper storage (styrobox or cooler w/ iced gel pack or ice)",
  ]

  const stateOfSample = [
    "All samples are sterile and free of contamination ",
    "Burnt"
  ]

  const rejectionOfSamples = [
    "Improper collection/transport/storage",
    "Unlabeled/mislabeled",
    "Insufficient samples for the test requested",
    "Improper/incomplete information/no forms attached",
    "Decomposition state",
    "Non-brain tissue, improperly fixed",
    "Sample contamination"
  ]

  const sampleStorage = [
    "Room temperature",
    "Refrigerated",
    "Frozen",
  ]
  return (
    <>
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
                <input type="email" className="form-control border border-dark" id="barangay" name='barangay' value={request.barangay} onChange={inputHandler} placeholder="Barangay" />
              </div>

              <div>
                <label className='form-label'>Municipality</label>
                <input type="tel" className="form-control border border-dark" id="municipality" name='municipality' value={request.municipality || ''} onChange={inputHandler} placeholder="Municipality" />
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
                <input type="text" className="form-control border border-dark" id="email" name='email' value={request.email} onChange={inputHandler} placeholder="xxxx@email.com" />
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
                <input type="text" className="form-control border border-dark" id="clientEmail" name='clientEmail' value={request.clientEmail} onChange={inputHandler} placeholder="xxxx@email.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className='card p-4 mb-3 mt-3 shadow-sm border'>
        <h5 className='mb-4 text-primary fw-bold'>ANIMAL PROFILE</h5>
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

        <div className="col-auto ps-2">
          <div className='row ps-1 gap-5'>
            <div className='col-3 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
              <label className='form-label mt-2'>Age:</label>
              <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='specimenAge' value={request.data.specimenAge} onChange={inputHandler} />
            </div>
            <div className='col-3 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
              <label className='form-label mt-2'>Breed:</label>
              <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='specimenBreed' value={request.data.specimenBreed} onChange={inputHandler} />
            </div>
          </div>
        </div>

        <div className='col-5 pb-2 ps-2 mb-2 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
          <div className='row g-1 pt-2'>
            <label className='form-label col-4'>Residence of Animal for the Last 3 Months:</label>
            {animalResidence.map((animal, index) => (
              <div className='form-check col-3' key={index}>
                <input type='checkbox' className='form-check-input border border-dark' name='animalResidence' value={animal} onChange={checkboxHandler} checked={(request.data.animalResidence || []).includes(animal)} />
                <label className='form-check-label' htmlFor={`animal-${index}`}>{animal}</label>
              </div>
            ))}
          </div>
        </div>

        <span className='fw-bold mb-0 mt-3'>*Please indicate the address below:</span>
        <div className='row g-4'>
          <div className='col-md-6'>
            <label className='form-label'> No.</label>
            <input className='form-control border border-dark' name='animalNo' onChange={inputHandler} value={request.data.animalNo} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Street</label>
            <input className='form-control border border-dark' name='animalStreet' onChange={inputHandler} value={request.data.animalStreet} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Barangay</label>
            <input className='form-control border border-dark' name='animalBarangay' onChange={inputHandler} value={request.data.animalBarangay} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>City/Municipality</label>
            <input className='form-control border border-dark' name='animalCity' onChange={inputHandler} value={request.data.animalCity} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Province</label>
            <input className='form-control border border-dark' name='animalProvince' onChange={inputHandler} value={request.data.animalProvince} />
          </div>
        </div>


        <div className='col-3 pb-2 ps-2 mb-4 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
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

        <div className='col-8 pb-2 ps-2 mb-3 border-start border-4 border-primary bg-primary bg-opacity-25 rounded'>
          <div className='d-flex align-items-center gap-3 pt-2'>
            <label className='form-label mb-0 col-3'>Manner of Death:</label>
            <div className='form-check col-2'>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' name='mannerOfDeath' value={mannerOfDeath[0]} onChange={checkboxHandler} checked={(request.data.mannerOfDeath || []).some(item => item.name === mannerOfDeath[0])} />
                <label className='form-check-label'>{mannerOfDeath[0]}</label>
              </div>
            </div>
            <div className='form-check col-2'>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' name='mannerOfDeath' value={mannerOfDeath[1]} onChange={checkboxHandler} checked={(request.data.mannerOfDeath || []).some(item => item.name === mannerOfDeath[1])} />
                <label className='form-check-label'>{mannerOfDeath[1]}</label>
              </div>
            </div>
            <div className='form-check col-5'>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' name='mannerOfDeath' value={mannerOfDeath[2]} onChange={checkboxHandler} checked={(request.data.mannerOfDeath || []).some(item => item.name === mannerOfDeath[2])} />
                <label className='form-check-label'>{mannerOfDeath[2]}</label>
                <input type='text' className='col-4 border-0 border-bottom border-dark bg-transparent' data-field="mannerOfDeath" data-specimen={mannerOfDeath[2]} onChange={inputHandler} value={(request.data.mannerOfDeath || []).find(item => item.name === mannerOfDeath[2])?.quantity || ''} />
              </div>
            </div>
          </div>
        </div>

        <div className='row g-4'>
          <div className='col-md-6'>
            <label className='form-label'>Date and time of death</label>
            <input className='form-control border border-dark' name='dateTimeOfDeath' onChange={inputHandler} value={request.data.dateTimeOfDeath} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Possible cause of death</label>
            <input className='form-control border border-dark' name='causeOfDeath' onChange={inputHandler} value={request.data.causeOfDeath} />
          </div>
        </div>

        <div className='row g-1 mt-3'>
          <span className='mb-3 text-primary fw-bold '>Animal Vaccination History</span>
          {vacHistory.map((vaccine, index) => (
            <div className='form-check col-3 mt-0' key={index}>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' id={`vaccine-${index}`} name='vacHistory' value={vaccine} onChange={checkboxHandler} checked={(request.data.vacHistory || []).includes(vaccine)} />
                <label className='form-check-label' htmlFor={`vaccine-${index}`}>{vaccine}:</label>
              </div>
            </div>
          ))}
        </div>
        <div className="col-auto ps-2">
          <div className='row ps-1 gap-5'>
            <div className='col-4 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
              <label className='form-label mt-2'>Date of Vaccination:</label>
              <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='dateOfVaccine' value={request.data.dateOfVaccine} onChange={inputHandler} />
            </div>
            <div className='col-4 pb-2 ps-1 d-flex align-items-center gap-1 border-start border-4 mt-4 border-primary bg-primary bg-opacity-25 rounded'>
              <label className='form-label mt-2'>Type of Vaccine:</label>
              <input type='text' className='border-0 border-bottom border-dark bg-transparent' name='vaccineType' value={request.data.vaccineType} onChange={inputHandler} />
            </div>
          </div>
        </div>


        <div className='row g-1 mt-3'>
          <span className='mb-3 text-primary fw-bold '>Dam Vaccinated (for puppies up to 6 months old)</span>
          {damVaccinated.map((vaccine, index) => (
            <div className='form-check col-3 mt-0' key={index}>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' id={`vaccine-${index}`} name='damVaccinated' value={vaccine} onChange={checkboxHandler} checked={(request.data.damVaccinated || []).includes(vaccine)} />
                <label className='form-check-label' htmlFor={`vaccine-${index}`}>{vaccine}:</label>
              </div>
              {vaccine === "Yes" && (
                <div className='mt-1'>
                  <label className='form-label'>Date of Vaccination</label>
                  <input type='text' className='col-4 border-0 border-bottom border-dark ' data-specimen={vaccine} data-field="specimenPart" onChange={inputHandler} value={(request.data.damVaccinated || []).find(item => item.name === vaccine)?.quantity || ''} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='row g-1 mt-3'>
          <span className='mb-2 text-primary fw-bold '>Contact with other animals</span>
          <div className='d-flex'>
            {contactWithOtherAnimals.map((contactWithOtherAnimals, index) => (
              <div className="form-check form-check-inline">
                <input className="form-check-input border border-dark " type="radio" name="contactWithOtherAnimals" id={`contactWithOtherAnimals-${index}`} onChange={inputHandler} value={contactWithOtherAnimals} checked={request.data.contactWithOtherAnimals === contactWithOtherAnimals} />
                <label className="form-check-label" htmlFor="inlineRadio1">{contactWithOtherAnimals}</label>
              </div>
            ))}
          </div>
          <span className='fw-bold mb-0 mt-3'>*if Yes:</span>
          {contactWithAnimals.map((contactWithAnimals, index) => (
            <div className='form-check col-2 mt-0 ms-1' key={index}>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' id={`contactWithAnimals-${index}`} name='contactWithAnimals' value={contactWithAnimals} onChange={checkboxHandler} checked={(request.data.contactWithAnimals || []).includes(contactWithAnimals)} />
                <label className='form-check-label' htmlFor={`vaccine-${index}`}>{contactWithAnimals}</label>
              </div>
            </div>
          ))}
        </div>

        <div className='row g-1 mt-3'>
          <span className='mb-3 text-primary fw-bold '>Condition of animal before biting incident:</span>
          {animalCondition.map((animalCondition, index) => (
            <div className='form-check col-3 mt-0' key={index}>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' id={`animalCondition-${index}`} name='animalCondition' value={animalCondition} onChange={checkboxHandler} checked={(request.data.animalCondition || []).includes(animalCondition)} />
                <label className='form-check-label' htmlFor={`animalCondition-${index}`}>{animalCondition}:</label>
              </div>
            </div>
          ))}
        </div>

        <div className='row g-1 mt-3'>
          <span className='mb-3 text-primary fw-bold '>Changes two weeks prior to or after biting incident</span>
          <div className='d-flex'>
            {contactWithOtherAnimals.map((contactWithOtherAnimals, index) => (
              <div className="form-check form-check-inline">
                <input className="form-check-input border border-dark " type="radio" name="changesAfterBiting" id={`contactWithOtherAnimals-${index}`} onChange={inputHandler} value={contactWithOtherAnimals} checked={request.data.changesAfterBiting === contactWithOtherAnimals} />
                <label className="form-check-label" htmlFor="inlineRadio1">{contactWithOtherAnimals}</label>
              </div>
            ))}
          </div>
          <span className='fw-bold mb-0 mt-3'>*if Yes:</span>
          {observedChanges.map((observedChanges, index) => (
            <div className='form-check col-3 mt-0 ms-1' key={index}>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' id={`otherChanges-${index}`} name='observedChanges' value={observedChanges} onChange={checkboxHandler} checked={(request.data.observedChanges || []).includes(observedChanges)} />
                <label className='form-check-label' htmlFor={`vaccine-${index}`}>{observedChanges}</label>
              </div>
            </div>
          ))}
        </div>


        <div className='row g-1 mt-3'>
          <span className='mb-2 text-primary fw-bold '>Other Signs of Illness two weeks prior to or after biting incident</span>
          <div className='d-flex'>
            {contactWithOtherAnimals.map((contactWithOtherAnimals, index) => (
              <div className="form-check form-check-inline">
                <input className="form-check-input border border-dark " type="radio" name="otherSigns" id={`contactWithOtherAnimals-${index}`} onChange={inputHandler} value={contactWithOtherAnimals} checked={request.data.otherSigns === contactWithOtherAnimals} />
                <label className="form-check-label" htmlFor="inlineRadio1">{contactWithOtherAnimals}</label>
              </div>
            ))}
          </div>
          <span className='fw-bold mb-0 mt-2'>*if Yes:</span>
          {otherChanges.map((otherChanges, index) => (
            <div className='form-check col-2 mt-0 ms-1' key={index}>
              <div className='d-flex align-items-center gap-2'>
                <input type='checkbox' className='form-check-input border border-dark' id={`otherChanges-${index}`} name='otherChanges' value={otherChanges} onChange={checkboxHandler} checked={(request.data.otherChanges || []).includes(otherChanges)} />
                <label className='form-check-label' htmlFor={`otherChanges-${index}`}>{otherChanges}</label>
                {otherChanges === "Others" && ( 
                  <input type='text' className='col-4 border-0 border-bottom border-dark' name='otherIllness' value={request.data.otherIllness} onChange={inputHandler} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <div className='card p-4 mb-3 shadow-sm border mt-3'>
        <span className='mb-3 text-primary fw-bold '>PURPOSE</span>
        <div className='row g-1'>
          {purposeList.map((purpose, index) => (
            <div className='form-check col-auto mt-0 me-5' key={index}>
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
    </>
  )
}

export default Page1