const supplier = require('../models/supplier.modal');
const mongoose = require('mongoose');



const addSupplier = async (req, res) => {
    try {
        let { firmName, partyName, gst, email, mobile, whatsapp, other, location, city, state, pin, accountNo, branchName, branchAddress, ifsc, bankOther } = req.body;
        if (!firmName || !partyName || !gst || !email || !mobile || !whatsapp || !other || !location || !city || !state || !pin || !accountNo || !branchName || !branchAddress || !ifsc || !bankOther) {
            return res.status(400).json({ success: false, message: "firmName, partyName, gst, email, mobile, whatsapp, other, location, city, state, pin, accountNo, branchName, branchAddress, ifsc, bankOther  are required" })
        }
        const data = await supplier.create({ firmName, partyName, gst, email, mobile, whatsapp, other, location, city, state, pin, accountNo, branchName, branchAddress, ifsc, bankOther })
        return res.status(200).json({ success: true, message: data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getAllSupplier = async (req, res) => {
    try {
        const data = await supplier.find({})
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getSupplierById = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "id is not provided" })
        }
        if (mongoose.Types.ObjectId.isValid(_id)) {
            _id = mongoose.Types.ObjectId(_id)
            const data = await supplier.findOne({ _id }).select('_id firmName partyName gst email mobile whatsapp other location city state pin accountNo branchName branchAddress ifsc bankOther ')
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

const updateSupplier = async (req, res) => {
    try {
        let _id = req.query.id
        const data = await supplier.findOneAndUpdate({ _id }, req.body)
        if (!data) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const deleteSupplier = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "Supplier ID is not provided" })
        }
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ success: false, message: "Supplier ID is not valid" })
        } else {
            const data = await supplier.findByIdAndDelete(_id, { new: true })
            return res.status(200).json({ success: true, message: "deleted" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "post no longer exists" })
    }
}



module.exports = {
    addSupplier,
    getAllSupplier,
    getSupplierById,
    updateSupplier,
    deleteSupplier
}