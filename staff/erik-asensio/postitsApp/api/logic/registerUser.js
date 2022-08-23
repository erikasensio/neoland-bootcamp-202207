const { writeFile, readdir, readFile } = require('fs')

function registerUser(name, email, password, callback) {
    const folder = "./data/users"
    
    readdir(folder, (error, files) => {
        if (error) {
            callback(error)

            return
        }

        index = 0
        file = files[index];

        if (files.length === 0) {
            writeUser({ name, email, password }, error => {
                if (error) {
                    callback(error)
                }
                callback(null)
            })
            return
        };

        (function iterate() {

            readFile(`${folder}/${file}`, "utf8", (error, json) => {
                if (error) {
                    callback(error)

                    return
                }

                const user = JSON.parse(json)
                if (user.email === email) {
                    callback(new Error(`user with email: ${user.email} already exists`))

                    return
                }

                index++

                if (index < files.length) {
                    file = files[index]
                    iterate()
                    return
                }

                writeUser({ name, email, password }, error => {
                    if (error) {
                        callback(error)
                    }
                    callback(null)
                })
            })
        })()
    })
}

function writeUser({ name, email, password }, callback) {
    const newUser = {
        id: `id-${Date.now()}`,
        name,
        email,
        password
    }

    const newJson = JSON.stringify(newUser)

    writeFile(`./data/users/${newUser.id}.json`, newJson, "utf8", error => {
        if (error) {
            callback(error)
            return
        }
        callback(null)
    })
}

module.exports = registerUser