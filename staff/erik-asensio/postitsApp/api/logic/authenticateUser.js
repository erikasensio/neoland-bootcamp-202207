const { readdir, readFile } = require('fs')
function authenticateUser(email, password, callback) {
    readdir("./data/users", (error, files) => {
        if (error) {
            // res.status(500).json(error.message)
            callback(error)
        }

        index = 0
        file = files[0]

        if (files === 0) {
            res.status(401).json("there is not any user")
        }

        (function iterate() {
            readFile(`./data/users/${file}`, "utf8", (error, json) => {
                if (error) {
                    // res.status(500).json(error.message)
                    callback(error)
                }
                const user = JSON.parse(json)

                if (user.email === email) {
                    if (user.email === email && user.password === password) {
                        // res.status(200).send()
                        callback(null)
                        return
                    }
                } else {
                    index++
                    if (index < files.length) {
                        file = files[index]
                        iterate()
                        return
                    } else {
                        // res.status(401).json("credenciales incorrectas")
                        callback(new Error("credenciales incorrectas"))
                    }
                }
            })
        })()
    })
}

module.exports = authenticateUser