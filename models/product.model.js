const mongoose = require('mongoose');

const product = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
    },
    coverURL: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    comment: {
        type: Array,
        default: []
    },
    like: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("product", product)