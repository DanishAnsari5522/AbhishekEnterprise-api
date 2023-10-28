const purchase = require('../models/purchase.modal');
const mongoose = require('mongoose');



const addPurchase = async (req, res) => {
    try {
        let { date, gstType, invoiceNo, supplierName, address, recieverName, gstInvoiceNo, gstInvoiceDate, product, company, size, materialType, hsnCode, uom, rate, qty } = req.body;
        if (!date || !gstType || !invoiceNo || !supplierName || !address || !recieverName || !gstInvoiceNo || !gstInvoiceDate || !product || !company || !size || !materialType || !hsnCode || !uom || !rate || !qty) {
            return res.status(400).json({ success: false, message: "date, gstType, invoiceNo, supplierName, address, recieverName, gstInvoiceNo, gstInvoiceDate, product, company, size, materialType, hsnCode, uom, rate, qty  are required" })
        }
        const data = await purchase.create({ date, gstType, invoiceNo, supplierName, address, recieverName, gstInvoiceNo, gstInvoiceDate, product, company, size, materialType, hsnCode, uom, rate, qty })
        return res.status(200).json({ success: true, message: data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getAllPurchase = async (req, res) => {
    try {
        const data = await purchase.find({})
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getPurchaseById = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "id is not provided" })
        }
        if (mongoose.Types.ObjectId.isValid(_id)) {
            _id = mongoose.Types.ObjectId(_id)
            const data = await purchase.findOne({ _id }).select('_id date gstType invoiceNo supplierName address recieverName  gstInvoiceNo gstInvoiceDate product company size materialType hsnCode uom rate qty')
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

const updatePurchase = async (req, res) => {
    try {
        let _id = req.query.id
        const data = await purchase.findOneAndUpdate({ _id }, req.body)
        if (!data) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({ success: true, message: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const deletePurchase = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "purchase ID is not provided" })
        }
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ success: false, message: "purchase ID is not valid" })
        } else {
            const data = await purchase.findByIdAndDelete(_id, { new: true })
            return res.status(200).json({ success: true, message: "deleted" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "post no longer exists" })
    }
}



module.exports = {
    addPurchase,
    getAllPurchase,
    getPurchaseById,
    updatePurchase,
    deletePurchase
}