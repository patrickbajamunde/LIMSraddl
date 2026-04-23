import mongoose from "mongoose";

const speciesSchema = new mongoose.Schema({
    Bovine:{
        type: String,
    },
    Bubaline:{
        type: String,
    },
    Swine:{
        type: String,
    },
    Caprine:{
        type: String,
    },
    Ovine:{
        type: String,
    },
    Feline:{
        type: String,
    },
    Equine:{
        type: String,
    },
    Canine:{
        type: String,
    },
    Avian:{
        type: String,
    },
    Others:{
        type: String,
    }
})

const clientSchema = new mongoose.Schema({

    requestId: {
        type: String,
        required: true,
        unique: true,
    },

    recordId:{
        type: String,
    },

    labAccessionNumber: {
        type: String,
    },

    clientType: {
        type: String,
    },

    clientName: {
        type: String,
    },

    clientAge: {
        type: Number
    },

    clientAddress: {
        type: String,
    },

    clientEmail: {
        type: String,
    },

    clientContact: {
        type: String,
    },

    clientGender: {
        type: String,
    },

    sampleDisposalDate: {
        type: Date,
    },

    sampleStorageLocation:{
        type: String,
    },

    sampleRetentionDate: {
        type: String,
    },

    reportDue: {
        type: Date,
    },

    transactionDate: {
        type: Date,
        default: Date.now,
    },

    receivedBy: {
        type: String,
    },

    status: {
        type: String,
    },

    locOfFarm: {
        type: String,
    },

    barangay: {
        type: String
    },
    municipality: {
        type: String,
    },
    province: {
        type: String,
    },

    contactNo :{
        type: String,
    },

    email:{
        type: String
    },

    dateSubmitted: {
        type: Date,
    },

    dateCollected: {
        type: Date,
    },

    samplingDate: {
        type: Date,
    },
    samplingTime: {
        type: String,
    },

    specimenAge:{
        type: String,
    },

    specimen: [String],
    wholeAnimal: [String],
    specimenPart: [String],
    pathologyList: [String],
    rapidPlateTest: [String],
    isoAndIdenList: [String],
    bloodParasiteExam: [String],
    fecalysis:[String],
    parasiteIden: [String],
    virologyList: [String],
    elisaList: [String],
    pcrList: [String],
    purposeList: [String],
    sampleLabel: [String],
    quantityOfSample: [String],
    preservationUsed: [String],
    transport: [String],
    stateOfSample: [String],
    rejectionOfSamples: [String],
    sampleStorage: [String],
    sex: [String],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userName: {
        type: String,
    },

})

export default mongoose.model("Client", clientSchema, "clients");
