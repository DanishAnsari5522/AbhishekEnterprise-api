const express = require("express")
const route = express.Router()
const { addProduct, updateProduct, getAllProduct, getProduct,liveSearch } = require("../controllers/product.controller")

route.post("/addProduct", addProduct)
route.get("/getAllProduct", getAllProduct)
route.get("/getProduct", getProduct)
route.get("/liveSearch", liveSearch)
route.route('/updateProduct/:id').put(updateProduct)


module.exports = route