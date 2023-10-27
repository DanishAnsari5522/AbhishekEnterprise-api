const mongoose = require('mongoose');

const material = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true,
    },
    size: {
        type: String,
        require: true,
    },
    materialType: {
        type: String,
        require: true,
    },
    unit: {
        type: String,
        require: true,
    },
    rate: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("material", material)