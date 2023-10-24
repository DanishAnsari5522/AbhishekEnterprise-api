const express = require("express")
const route = express.Router()
const { addPurchase, getAllPurchase, getPurchaseById, updatePurchase, deletePurchase } = require('../controllers/purchase.controller')


route.post("/addPurchase", addPurchase)
route.get('/getAllPurchase', getAllPurchase)
route.get('/getPurchaseById', getPurchaseById)
route.patch('/updatePurchase', updatePurchase)
route.delete('/deletePurchase', deletePurchase)


module.exports = route