const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    vehicle_type: String,
    brand: String,
    price: {
        type: Number, 
        min:10000, 
        max:50000
    }
})
module.exports = mongoose.model("Vehicle", vehicleSchema)