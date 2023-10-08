const express = require("express")
const user = express.Router()
const {liveSearch, editProfile, updateDp, getLoggedInUserInfo, discoverPeople } = require("../controllers/user.controller")
// user.get("/", getUserById)
user.get("/discover-people", discoverPeople)
user.get("/loggedin-user", getLoggedInUserInfo)
user.get("/search", liveSearch)
user.patch("/edit", editProfile)
user.patch("/updatedp", updateDp)
module.exports = user