const express = require("express")

const { writeFile, readFile, readdir } = require("fs")

const api = express()

const jsonBodyParser = express.json()

api.post("/api/users", jsonBodyParser, (req, res) => {
    const { body: { name, email, password } } = req

    readdir("./data/users", (error, files) => {
        if (error) {
            res.status(500).json(error.message)

            return
        }

        index = 0
        file = files[index];

        (function iterate() {
            readFile(`./data/users/${file}`, "utf8", (error, json) => {
                if (error) {
                    res.status(500).json(error.message)

                    return
                }

                const user = JSON.parse(json)
                if (user.email === email) {
                    res.status(401).json(`user with email ${email} already exists`)

                    return
                }

                index++

                if (index < files.length) {

                    file = files[index]

                    iterate()

                    return
                }

                const newUser = {
                    id: `id-${Date.now()}`,
                    name,
                    email,
                    password
                }

                const newJson = newUser.stringify(newUser)

                writeFile(`./data/users/${newUser.id}.json`, newJson, "utf8", error => {
                    if (error) {
                        res.status(500).json(error.message)
                        return
                    }
                    res.status(201).send()
                })

            })
        })()
    })
})

api.post("/api/users", jsonBodyParser, (req, res) => {

})

api.listen(8080, () => console.log("api started"))