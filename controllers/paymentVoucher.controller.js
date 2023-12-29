const paymentVoucher=require("../models/paymentVoucher.modal")
const mongoose = require('mongoose');



const addpaymentVoucher = async (req, res) => {
    try {
        let { voucherNo, date, voucherType, payeseName, payTo,address,state,accountNo } = req.body;
        if (!voucherNo || !date || !voucherType || !payeseName || !payTo ||!address ||!state||!accountNo) {
            return res.status(400).json({ success: false, message: "voucherNo, date, voucherType, payeseName, payTo,address,state,accountNo Are Required" })
        }
        const data = await paymentVoucher.create({ voucherNo, date, voucherType, payeseName, payTo,address,state,accountNo})
        return res.status(200).json({ success: true, message: data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const updatepaymentVoucher = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await paymentVoucher.findOneAndUpdate({ _id: taskID }, req.body)
        if (!task) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({ task })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getAllpaymentVoucher = async (req, res) => {
    try {
        const paymentVouchers = await paymentVoucher.find({})
        res.send(paymentVouchers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getpaymentVoucher = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "id is not provided" })
        }
        if (mongoose.Types.ObjectId.isValid(_id)) {
            _id = mongoose.Types.ObjectId(_id)
            const paymentVoucherInfo = await paymentVoucher.findOne({ _id }).select('_id name category coverURL discription price comment like')
            if (!paymentVoucherInfo) {
                return res.status(400).json({ success: false, message: "Incorrect id" })
            }
            res.send(paymentVoucherInfo)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const liveSearch = async (req, res) => {
    try {
        const { name } = req.query;
        const data = await paymentVoucher.find({ name: { $regex: '^' + name, $options: 'i' } }).select("name _id ").sort({ datetime: -1 }).limit(20)
        res.status(200).json({ success: true, data })
        console.log(data);
    } catch (error) {
        res.status(500).json({ success: false, message: "server error" })
    }
}


module.exports = {
    addpaymentVoucher,
    updatepaymentVoucher,
    getAllpaymentVoucher,
    getpaymentVoucher,
    liveSearch
}