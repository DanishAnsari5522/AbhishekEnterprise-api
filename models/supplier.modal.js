const mongoose = require('mongoose');

const supplier = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        require: true
    },
    gstin: {
        type: String,
        require: true
    },
    accountNo: {
        type: Number,
        require: true
    },
    bank: {
        type: String,
        require: true
    },
    ifsc: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model("supplier", supplier)