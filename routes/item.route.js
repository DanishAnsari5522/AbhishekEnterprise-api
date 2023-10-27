const express = require("express")
const route = express.Router()
const { addItem, getAllItem, getItemById, updateItem, deleteItem } = require('../controllers/item.controller')


route.post("/addItem", addItem)
route.get('/getAllItem', getAllItem)
route.get('/getItemById', getItemById)
route.patch('/updateItem', updateItem)
route.delete('/deleteItem', deleteItem)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Company ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
const { addCompany, getAllCompany, getCompanyById, updateCompany, deleteCompany } = require('../controllers/item.controller')

route.post("/addCompany", addCompany)
route.get('/getAllCompany', getAllCompany)
route.get('/getCompanyById', getCompanyById)
route.patch('/updateCompany', updateCompany)
route.delete('/deleteCompany', deleteCompany)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Material ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
const { addMaterial, getAllMaterial, getMaterialById, updateMaterial, deleteMaterial } = require('../controllers/item.controller')

route.post("/addMaterial", addMaterial)
route.get('/getAllMaterial', getAllMaterial)
route.get('/getMaterialById', getMaterialById)
route.patch('/updateMaterial', updateMaterial)
route.delete('/deleteMaterial', deleteMaterial)




module.exports = route