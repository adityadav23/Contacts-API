const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Contact must contain name"]
    },
    mobile:{
        type:Number,
        required: [true, "Contact must contain mobile number"]

    },
    address:{
        type: String,
        default: 'No Address'
    }
})

module.exports = mongoose.model('Contact', contactSchema)