const express = require("express")

const { writeFile, readFile, readdir } = require("fs")

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

    const { body: { email, password } } = req;


    readdir("./data/users", (error, files) => {
        if (error) {
            res.status(500).json(error.message)
        }

        index = 0
        file = files[0]

        if (files === 0) {
            res.status(401).json("there is not any user")
        }

        (function iterate() {
            readFile(`./data/users/${file}`, "utf8", (error, json) => {
                if (error) {
                    res.status(500).json(error.message)
                }
                const user = JSON.parse(json)

                if (user.email === email) {
                    if (user.email === email && user.password === password) {
                        res.status(200).send()
                        return
                    }
                }else{
                    index++
                    if (index < files.length) {
                        file = files[index]
                        iterate()
                        return
                    }else{
                        res.status(401).json("credenciales incorrectas")
                    }
                }
            })
        })()
    })

})

function writeUser({ name, email, password }, callback) {
    const newUser = {
        id: `id-${Date.now()}`,
        name,
        email,
        password
    }

    const newJson = JSON.stringify(newUser)

    writeFile(`./data/users/${newUser.id}.json`, newJson, "utf8", (error) => {
        if (error) {
            res.status(500).json(error.message)
            return
        }

        callback(null)
    })
}

api.listen(8080, () => console.log("api started"))