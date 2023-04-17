const { Int32 } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name_surname: { 
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true
    }, 
    career: {
        type: String,
        require: true
    }, 
    address: {
        type: String,
        require: false
    },
    birthday: {
        type: String,
        require: false
    },
    phone: {
        type: String,
        require: false
    },
    facebook: {
        type: String,
        require: false
    },
    twitter: {
        type: String,
        require: false
    },
    linkedin: {
        type: String,
        require: false
    },
    image: {
        type: String,
        require: false
    }
}, { timestamps: true})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact