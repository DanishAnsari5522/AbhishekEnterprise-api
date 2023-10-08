const mongoose = require('mongoose');

const company = new mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model("company", company)