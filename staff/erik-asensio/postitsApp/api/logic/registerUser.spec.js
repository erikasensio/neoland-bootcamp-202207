const { readdir, unlink, readFile, writeFile } = require("fs")
const registerUser = require("./registerUser")

describe("registerUser", () => {
    const folder = "./data/users"

    beforeEach(done => {
        readdir(folder, (error, files) => {
            if (error) {
                done(error)

                return
            }
            if (!files.length) return done()
            let count = 0

            files.forEach(file => {
                unlink(`${folder}/${file}`, error => {

                    count++

                    if (count === files.length)
                        done()
                })
            })
        })
    })

    it("succeeds registering an user", done => { //happy path

        const name = "escarabajo"
        const email = "escara@bajo.com"
        const password = "123123123"

        registerUser(name, email, password, error => {
            expect(error).toBeNull()

            readdir(folder, (error, files) => {
                if (error) {
                    done(error)

                    return
                }

                expect(files).toHaveLength(1)
                const file = files[0]

                readFile(`${folder}/${file}`, "utf8", (error, json) => {
                    if (error) {
                        done(error)
                    }

                    const user = JSON.parse(json)

                    expect(typeof user.id).toBe("string")
                    expect(user.name).toBe(name)
                    expect(user.email).toBe(email)
                    expect(user.password).toBe(password)

                    done()
                })

            })
        })
    })

    it("error registering an existent user", done => { //unhappy path
        const folder = "./data/users"
        const id = Date.now()
        const name = "escarabajo"
        const email = "escara@bajo.com"
        const password = "123123123"

        const user = { id: Date.now(), name, email, password }

        writeFile(`${folder}/${user.id}.json`, "utf8", error => {
            if (error) return done(error)

            done()
        })

        registerUser(name, email, password, error => {
            expect(error).toBe(error)
            expect(error.message).toBe(`user with email ${email} already exists`)

            readdir(folder, (error, files) => {
                if (error) return done(error)

                expect(files).toHaveLength(1)

                readFile(`${folder}/${user.id}.json`, "utf8", (error, json) => {
                    if (error) return done(error)
                    done(error)

                    const _user = JSON.parse(json)

                    expect(typeof user.id).toEqual("string")
                    expect(_user.name).toEqual(user.name)
                    expect(_user.email).toEqual(user.email)
                    expect(_user.password).toEqual(user.password)
                    done()
                })
            })
        })
    })
})