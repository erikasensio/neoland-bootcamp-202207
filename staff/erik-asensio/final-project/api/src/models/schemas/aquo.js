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
    }
})



module.exports = aquo