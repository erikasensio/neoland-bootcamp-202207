const mongoose = require("mongoose")

const { Schema, model, Types: { ObjectId } } = mongoose

const user = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = model("User", user)

const note = new Schema({
    user: {
        type: ObjectId,
        ref: "user",
        required: true
    },
    text: {
        type: String
    }
})

const Note = model("Note", note)

module.exports = {User, Note}