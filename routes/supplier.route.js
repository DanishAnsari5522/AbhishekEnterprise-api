const express = require("express")
const route = express.Router()
const { addSupplier, getAllSupplier, getSupplierById,updateSupplier,deleteSupplier } = require('../controllers/supplier.controller')


route.post("/addSupplier", addSupplier)
route.get('/getAllSupplier', getAllSupplier)
route.get('/getSupplierById', getSupplierById)
route.patch('/updateSupplier', updateSupplier)
route.delete('/deleteSupplier', deleteSupplier)





module.exports = route