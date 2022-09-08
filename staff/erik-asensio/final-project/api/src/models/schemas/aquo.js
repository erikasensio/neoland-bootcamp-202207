const { Schema } = require('mongoose')

const aquo = new Schema({
    name: {
        type: String,
        required: true
    },

    photo: {
        type: File,
    },

    type: {
        type: String,
        required: true
    }
})

module.exports = aquo