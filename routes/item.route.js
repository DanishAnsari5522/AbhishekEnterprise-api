const express = require("express")
const route = express.Router()
const { addItem, getAllItem, getItemById } = require('../controllers/item.controller')


route.post("/addItem", addItem)
route.get('/getAllItem', getAllItem)
route.get('/getItemById', getItemById)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Company ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
const { addCompany, getAllCompany } = require('../controllers/item.controller')

route.post("/addCompany", addCompany)
route.get('/getAllCompany', getAllCompany)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Material ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
const { addMaterial, getAllMaterial } = require('../controllers/item.controller')

route.post("/addMaterial", addMaterial)
route.get('/getAllMaterial', getAllMaterial)






module.exports = route