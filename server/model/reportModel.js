import mongoose from "mongoose";

const methodResults = new mongoose.Schema({
    method1Results: { type: String },
    method2Results: { type: String },
    method3Results: { type: String },
    method4Results: { type: String },
    method5Results: { type: String },
    method6Results: { type: String },
})

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
})


const methodology = new mongoose.Schema({
    method1: { type: String },
    method2: { type: String },
    method3: { type: String },
    method4: { type: String },
    method5: { type: String },
    method6: { type: String },
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


    analyzedBy: {
        type: String,
    },

    analystPRC: {
        type: String,
    },
    position: {
        type: String,
    },

    analyzedBy2: {
        type: String,
    },
    analystPRC2: {
        type: String,
    },
    position2: {
        type: String,
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

    method: methodology,

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

    ChemSelectedMethod: {
        type: String,
    },


})

export default mongoose.model("Report", reportSchema, "reports");