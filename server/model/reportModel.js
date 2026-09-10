import mongoose from "mongoose";

const roaModel = new mongoose.Schema({
    itemNo: {
        type: String,
    },

    sampleNo: {
        type: String,
    },

    fieldSampleID: {
        type: String,
    },

    nameOfOwner: {
        type: String,
    },

    address: {
        type: String,
    },

    species: {
        type: String,
    },

    age: {
        type: String
    },

    sex: {
        type: String,
    },
    result: {
        type: String
    },
    flotation: {
        type: String
    },
    sedimentation: {
        type: String
    },
    spRatio: {
        type: String
    },
    interpretation: {
        type: String
    },
    snRatio: {
        type: String
    },
    packedCellVolume: {
        type: String
    },
    hemoglobin: {
        type: String
    },
    redBlood: {
        type: String
    },
    whiteBlood: {
        type: String
    },
    heterophils: {
        type: String
    },
    lymphocytes: {
        type: String
    },
    eosinophils: {
        type: String
    },
    monocytes: {
        type: String
    },
    basophils: {
        type: String
    },
    platelets: {
        type: String
    },
    bacteCount: {
        type: String
    },
    bacteIdentified: {
        type: String
    }
})

const reportSchema = new mongoose.Schema({

    customerName: {
        type: String,
    },

    customerAddress: {
        type: String,
    },

    customerContact: {
        type: String
    },

    dateReceived: {
        type: Date,
    },

    datePerformed: {
        type: String,
    },

    dateIssued: {
        type: Date
    },

    reportId: {
        type: String,
    },

    requestId: {
        type: String,
        unique: true
    },

    status: {
        type: String,
    },

    purpose: {
        type: String,
    },

    dateCollected: {
        type: String,
    },

    labCode: {
        type: String,
    },

    testMethod: {
        type: String,
    },

    sampleType: {
        type: String,
    },

    roaDetails: [roaModel],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userName: {
        type: String,
    },
    url: {
        type: String,
    },
    qrCode: {
        type: String,
    },

    analyzedBy: [],
    interpretationTable: []


})

export default mongoose.model("Report", reportSchema, "reports");