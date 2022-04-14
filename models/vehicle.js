const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    vehicle_type: String,
    brand: String,
    price: Number
})
module.exports = mongoose.model("Vehicle", vehicleSchema)