const mongoose = require('mongoose');

const supplier = new mongoose.Schema({
    firmName: {
        type: String,
        require: true
    },
    partyName: {
        type: String,
        require: true,
    },
    gst: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    whatsapp: {
        type: String,
        require: true
    },
    other: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true,
    },
    pin: {
        type: Number,
        required: true,
    },
    accountNo: {
        type: Number,
        require: true
    },
    branchName: {
        type: String,
        require: true
    },
    branchAddress: {
        type: String,
        require: true
    },
    ifsc: {
        type: String,
        require: true
    },
    bankOther: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model("supplier", supplier)