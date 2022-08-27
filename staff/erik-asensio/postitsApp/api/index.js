const express = require("express")
const api = express()
const { DuplicityError, AuthError, FormatError } = require('./errors')

const registerUser = require("./logic/registerUser")
const authenticateUser = require("./logic/authenticateUser")

const mongoose = require("mongoose")

const mongoUrl = "mongodb://localhost:27017/postits"
const jsonBodyParser = express.json()


mongoose.connect(mongoUrl)
    .then(() => {
        api.post("/api/users", jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            res.status(409).json({ error: error.message })
                        else
                            res.status(500).json({ error: error.message })

                        return
                    })
            } catch (error) {
                if (error instanceof DuplicityError)
                    res.status(409).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            }
        })
    

// api.post("/api/users/auth", jsonBodyParser, (req, res) => {

//     try {
//         const { user: { email, password } } = req;
//         authenticateUser(email, password, error => {
//             if (error) {
//                 if (error.message.startsWith("credenciales incorrectas")) {
//                     res.status(401).json(error.message)
//                 } else {
//                     res.status(500).json(error.message)
//                 }
//             }
//             res.status(200).send()
//         })
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// })

api.listen(8080, () => console.log("api started"))

process.on('SIGINT', () => {
    if (!process.stopped) {
        process.stopped = true

        console.log('\napi stopped')

        mongoose.disconnect()
            .then(() => {
                console.log('db disconnected')

                process.exit(0)
            })
    }
})
})
.catch(error => {
        console.error(error)
    })
