import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({

    type : {
        type: String,
        enum: ['GENERAL', 'RABIES'],
        required: true
    },


    //common fields
    requestId: String,
    recordId: String,
    labAccessionNumber: String,
    clientName: String,
    clientType: String,
    clientAge: Number,
    clientAddress: String,
    clientEmail: String,
    clientContact: String,
    clientGender: String,
    locOfFarm:  String,
    barangay: String,
    municipality: String,
    province: String,
    contactNo:  String,
    email:  String,
    transactionDate: { type: Date, default: Date.now },



    data: {
        type: mongoose.Schema.Types.Mixed
    },

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
