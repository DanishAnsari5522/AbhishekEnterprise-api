const mongoose = require('mongoose');

const paymentVoucher = new mongoose.Schema({
    voucherNo: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true,
    },
    voucherType: {
        type: String,
        required: true,
    },
    payeseName: {
        type: String,
        require: true
    },
    payTo: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    state: {
        type: String,
        return: true
    },
    accountNo: {
        type: String,
        return: true
    },
    accountType: {
        type: String,
        default: ''
    },
    bankAccount: {
        type: String,
        default: ''
    },
    transactionType: {
        type: String,
        default: ''
    },
    payAmount: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("paymentVoucher", paymentVoucher)