const express = require("express")
const route = express.Router()
const {addpaymentVoucher,updatepaymentVoucher,getAllpaymentVoucher,getpaymentVoucher,liveSearch} =require("../controllers/paymentVoucher.controller")

route.post("/addpaymentVoucher", addpaymentVoucher)
route.get("/getAllpaymentVoucher", getAllpaymentVoucher)
route.get("/getpaymentVoucher", getpaymentVoucher)
route.get("/liveSearch", liveSearch)
route.route('/updatepaymentVoucher/:id').put(updatepaymentVoucher)


module.exports = route