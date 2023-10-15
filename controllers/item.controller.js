const item = require('../models/item.modal');
const company = require('../models/company.modal')
const material = require('../models/material.modal')
const mongoose = require('mongoose');



const addItem = async (req, res) => {
    try {
        let { name, gst,HSNCode } = req.body;
        if (!name || !gst ||!HSNCode) {
            return res.status(400).json({ success: false, message: " Item name, gst ,HSNCode are required" })
        }
        const data = await item.create({ name, gst,HSNCode })
        return res.status(200).json({ success: true, message: data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getAllItem = async (req, res) => {
    try {
        const data = await item.find({})
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getItemById = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "id is not provided" })
        }
        if (mongoose.Types.ObjectId.isValid(_id)) {
            _id = mongoose.Types.ObjectId(_id)
            const data = await item.findOne({ _id }).select('_id name gst')
            if (!data) {
                return res.status(400).json({ success: false, message: "Incorrect id" })
            }
            return res.status(200).json({ success: true, message: data })

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Company ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const addCompany = async (req, res) => {
    try {
        let { productName, companyName, size } = req.body;
        if (!productName || !companyName || !size) {
            return res.status(400).json({ success: false, message: " productName,companyName, size are required" })
        }
        const data = await company.create({ productName, companyName, size })
        return res.status(200).json({ success: true, message: data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getAllCompany = async (req, res) => {
    try {
        const data = await company.find({})
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Material ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const addMaterial = async (req, res) => {
    try {
        let { name, company, size, materialType, unit } = req.body;
        if (!name || !company || !size || !materialType || !unit) {
            return res.status(400).json({ success: false, message: " name, company, size, materialType, unit  are required" })
        }
        const data = await material.create({ name, company, size, materialType, unit })
        return res.status(200).json({ success: true, message: data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}


const getAllMaterial = async (req, res) => {
    try {
        const data = await material.find({})
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

module.exports = {
    addItem,
    getAllItem,
    getItemById,

    addCompany,
    getAllCompany,

    addMaterial,
    getAllMaterial
}