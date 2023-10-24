const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const http = require("http")
const server = http.createServer(app)

// const orders = require("./routes/order.routes")
const auth = require("./routes/auth.route")
const user = require("./routes/user.route")
const product = require('./routes/product.route')
const item = require('./routes/item.route')
const supplier = require('./routes/supplier.route')
const purchase = require('./routes/purchase.route')

const PORT = process.env.PORT || 5000
const authlogin = require("./middleware/auth.middleware")

app.use(express.json())
app.use(cors())

// app.use("/v1/orders", orders)
app.use("/v1/auth", auth)
app.use("/v1/user", authlogin, user)
app.use("/v1/product", authlogin, product)
app.use("/v1/item", item)
app.use("/v1/supplier", supplier)
app.use("/v1/purchase", purchase)






app.get("/", (req, res) => {
    res.status(200).json({ msg: "welcome v1" })
})

const init = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.mongo_URL)
        server.listen(PORT, () => console.log('server is listening at PORT ' + PORT))
    } catch (error) {
        console.log(error)
    }
}
init()