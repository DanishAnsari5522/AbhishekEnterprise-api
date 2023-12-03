const mongoose = require('mongoose');

const purchase = new mongoose.Schema({
    invoiceNo: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        require: true
    },
    gstType: {
        type: String,
        require: true,
    },
    supplierName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    recieverName: {
        type: String,
        require: true
    },
    gstInvoiceNo: {
        type: String,
        default: 'NA'
    },
    gstInvoiceDate: {
        type: String,
        default: 'NA'
    },
    item: {
        type: Array,
        default: []
    },
    approvedByAdmin: {
        type: Boolean,
        default: false
    },
    payment: {
        type: Boolean,
        default: false
    },
    paymentStatus: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("purchase", purchase)