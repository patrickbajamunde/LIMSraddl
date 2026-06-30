import React from 'react';

export const RoaModal = ({ show,
  onClose,
  reportDetails,
  onChange,
  onSubmit,
  isEditing,
  counter,
  setCounter
}) => {
  if (!show) return null;

  return (
    <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <form onSubmit={onSubmit}>
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Chemical Analysis Results Details</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div className='row g-3 mb-3'>
                <div className="col-12">
                  <h6 className="fw-bold text-secondary mb-2">Sample Information</h6>
                </div>
              </div>
              {!isEditing && (
                <div className='row g-3 mb-3'>

                  <div className="col-md-6">
                    <label className="form-label">Number of Samples</label>
                    <input
                      type="text"
                      className="form-control border-black"
                      name="sampleNo"
                      value={counter}
                      onChange={(e) => setCounter(parseInt(e.target.value) || 0)}
                    />
                  </div>
                </div>
              )}


              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Sample No.</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="sampleNo"
                    value={reportDetails.sampleNo}
                    onChange={(e) => onChange('sampleNo', e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Field Sample ID</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="fieldSampleID"
                    value={reportDetails.fieldSampleID}
                    onChange={(e) => onChange('fieldSampleID', e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Name of Owner</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="nameOfOwner"
                    value={reportDetails.nameOfOwner}
                    onChange={(e) => onChange('nameOfOwner', e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="address"
                    value={reportDetails.address}
                    onChange={(e) => onChange('address', e.target.value)}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Species</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="species"
                    value={reportDetails.species}
                    onChange={(e) => onChange('species', e.target.value)}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Age</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="age"
                    value={reportDetails.age}
                    onChange={(e) => onChange('age', e.target.value)}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Sex</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="sex"
                    value={reportDetails.sex}
                    onChange={(e) => onChange('sex', e.target.value)}
                  />
                </div>

                <div className="col-12 mt-3">
                  <h6 className="fw-bold text-secondary mb-1">Test Results</h6>
                </div>

                <div className="col-md-12">
                  <label className="form-label">Results</label>
                  <input
                    type="text"
                    className="form-control border-black"
                    name="result"
                    value={reportDetails.result}
                    onChange={(e) => onChange('result', e.target.value)}
                  />
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {isEditing ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

