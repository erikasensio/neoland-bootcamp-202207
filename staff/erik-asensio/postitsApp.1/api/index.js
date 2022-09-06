const express = require("express")

const api = express()

const registerUser = require("./logic/registerUser")
const authenticateUser = require("./logic/authenticateUser")

const jsonBodyParser = express.json()

api.post("/api/users", jsonBodyParser, (req, res) => {
    try {
        const { body: { name, email, password } } = req
        registerUser(name, email, password, error => {
            if (error) {
                if (error.message.startsWith("user with email")) {
                    res.status(409).json(error.message)
                } else {
                    res.status(500).json(error.message)
                }
                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

api.post("/api/users/auth", jsonBodyParser, (req, res) => {

    try {
        const { body: { email, password } } = req;
        authenticateUser(email, password, error => {
            if (error) {
                if (error.message.startsWith("credenciales incorrectas")) {
                    res.status(401).json(error.message)
                } else {
                    res.status(500).json(error.message)
                }
            }
            res.status(200).send()
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

api.listen(8080, () => console.log("api started"))