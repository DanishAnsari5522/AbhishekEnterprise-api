const product = require("../models/product.model")
const mongoose = require('mongoose');



const addProduct = async (req, res) => {
    try {
        let { name, category, coverURL, discription, price } = req.body;
        if (!name || !category || !coverURL || !discription || !price) {
            return res.status(400).json({ success: false, message: " product name, category, coverURL, discription, price  are required" })
        }
        const data = await product.create({ name, category, coverURL, discription, price })
        return res.status(200).json({ success: true, message: data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await product.findOneAndUpdate({ _id: taskID }, req.body)
        if (!task) {
            return res.status(400).json({ success: false, message: "Incorrect id" })
        }
        res.status(200).json({ task })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const products = await product.find({})
        res.send(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const getProduct = async (req, res) => {
    try {
        let _id = req.query.id
        if (!_id) {
            return res.status(404).json({ success: false, message: "id is not provided" })
        }
        if (mongoose.Types.ObjectId.isValid(_id)) {
            _id = mongoose.Types.ObjectId(_id)
            const productInfo = await product.findOne({ _id }).select('_id name category coverURL discription price comment like')
            if (!productInfo) {
                return res.status(400).json({ success: false, message: "Incorrect id" })
            }
            res.send(productInfo)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "server error" })
    }
}

const liveSearch = async (req, res) => {
    try {
        const { name } = req.query;
        const data = await product.find({ name: { $regex: '^' + name, $options: 'i' } }).select("name _id ").sort({ datetime: -1 }).limit(20)
        res.status(200).json({ success: true, data })
        console.log(data);
    } catch (error) {
        res.status(500).json({ success: false, message: "server error" })
    }
}


module.exports = {
    addProduct,
    updateProduct,
    getAllProduct,
    getProduct,
    liveSearch
}