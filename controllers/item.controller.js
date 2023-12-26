const item = require('../models/item.modal');
const company = require('../models/company.modal')
const material = require('../models/material.modal')
const mongoose = require('mongoose');



const addItem = async (req, res) => {
    try {
        let { name, gst, HSNCode, uom } = req.body;
        if (!name || !gst || !HSNCode || !uom) {
            return res.status(400).json({ success: false, message: " Item name, gst ,HSNCode,uom are required" })
        }
        if (HSNCode) {
            const varify = await item.findOne({ HSNCode })
            if (varify) {
                return res.status(401).json({ success: false, message: "Item already exists" })
            } else {
                // create
                const data = await item.create({ name, gst, HSNCode, uom })
                return res.status(200).json({ success: true, message: data })
            }
        }

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
            const data = await item.findOne({ _id }).select('_id name gst HSNCode uom')
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

const updateItem = async (req, res) => {
    try {
        let _id = req.query.id
        const data = await item.findOneAndUpdate({ _id }, req.body)
        if (!data) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}


const deleteItem = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "item ID is not provided" })
        }
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ success: false, message: "item ID is not valid" })
        } else {
            const data = await item.findByIdAndDelete(_id, { new: true })
            return res.status(200).json({ success: true, message: "deleted" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "post no longer exists" })
    }
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Company ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const addCompany = async (req, res) => {
    try {
        let { productName, gst, companyName, size } = req.body;
        if (!productName || !gst || !companyName || !size) {
            return res.status(400).json({ success: false, message: " productName,gst,companyName, size are required" })
        }
        const data = await company.create({ productName, gst, companyName, size })
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

const getCompanyById = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "id is not provided" })
        }
        if (mongoose.Types.ObjectId.isValid(_id)) {
            _id = mongoose.Types.ObjectId(_id)
            const data = await company.findOne({ _id }).select('_id productName gst companyName size')
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

const updateCompany = async (req, res) => {
    try {
        let _id = req.query.id
        const data = await company.findOneAndUpdate({ _id }, req.body)
        if (!data) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}


const deleteCompany = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "company ID is not provided" })
        }
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ success: false, message: "company ID is not valid" })
        } else {
            const data = await company.findByIdAndDelete(_id, { new: true })
            return res.status(200).json({ success: true, message: "deleted" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "post no longer exists" })
    }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Material ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

const addMaterial = async (req, res) => {
    try {
        let { name, company, size, materialType, unit, rate } = req.body;
        if (!name || !company || !size || !materialType || !unit || !rate) {
            return res.status(400).json({ success: false, message: " name, company, size, materialType, unit,rate  are required" })
        }
        const data = await material.create({ name, company, size, materialType, unit, rate })
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

const getMaterialById = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "id is not provided" })
        }
        if (mongoose.Types.ObjectId.isValid(_id)) {
            _id = mongoose.Types.ObjectId(_id)
            const data = await material.findOne({ _id }).select('_id name company size materialType unit rate')
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

const updateMaterial = async (req, res) => {
    try {
        let _id = req.query.id
        const data = await material.findOneAndUpdate({ _id }, req.body)
        if (!data) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}


const deleteMaterial = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "material ID is not provided" })
        }
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ success: false, message: "material ID is not valid" })
        } else {
            const data = await material.findByIdAndDelete(_id, { new: true })
            return res.status(200).json({ success: true, message: "deleted" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "post no longer exists" })
    }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Material End ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



module.exports = {
    addItem,
    getAllItem,
    getItemById,
    updateItem,
    deleteItem,

    addCompany,
    getAllCompany,
    getCompanyById,
    updateCompany,
    deleteCompany,

    addMaterial,
    getAllMaterial,
    getMaterialById,
    updateMaterial,
    deleteMaterial
}