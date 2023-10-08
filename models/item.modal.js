const mongoose = require('mongoose');

const item = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    gst: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model("item", item)