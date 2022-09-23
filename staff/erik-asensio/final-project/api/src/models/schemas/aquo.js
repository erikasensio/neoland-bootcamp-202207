const { Schema, Types: { ObjectId } } = require('mongoose')


const aquo = new Schema({

    user: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    photo: {
        type: String,
    },

    type: {
        type: String,
        required: true
    },
    pin1: {
        type: String,
        required: true
    },
    pin2: {
        type: String,
        required: true
    },
    pin3: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    }
})



module.exports = aquo