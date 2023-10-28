const mongoose = require('mongoose');

const purchase = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    gstType: {
        type: String,
        require: true,
    },
    invoiceNo: {
        type: String,
        required: true,
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
        require: true
    },
    gstInvoiceDate: {
        type: String,
        require: true
    },
    product: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    materialType: {
        type: String,
        require: true,
    },
    hsnCode: {
        type: String,
        required: true,
    },
    uom: {
        type: String,
        require: true
    },
    rate: {
        type: String,
        require: true
    },
    qty: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model("purchase", purchase)