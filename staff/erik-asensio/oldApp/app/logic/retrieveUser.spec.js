describe("retrieveUser", () => {

    beforeEach(() => {
        users.length=0
    })

    it("should log in", () => { //happy path:)
        const name = "Erik Asensio"
        const email = "erikasensio@gmail.com"
        const password = "123123123"

        const user = {
            name,
            email,
            password,
        }

        users.push(user)

        retrieveUser(email, error =>{

            expect(error).toBeNull()
            expect(user.email).toBe(email)
        })
    })

    it("should throw error", () => { //sad path:(
        const name = "Erik Asensio"
        const email = "erikasensio@gmail.com"
        const password = "123123123"

        const erik = {
            name,
            email,
            password,
        }

        users.push(erik)

        retrieveUser("erikasensioperez@gmail.es", error =>{

            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe("Wrong email")
        })

    })
    it('should fail on invalid email', () => { // unhappy path 😦
        const name = 'Zor Ro'
        const email = 'zor@ro.com'
        const password = '123123123'

        const zorRo = {
            name,
            email,
            password
        }

        users.push(zorRo)

        const invalidEmail = 'zor_ro.com'

        try {
            retrieveUser(invalidEmail, (error, user) => {
                fail('it should not reach this point')
            })
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('Email is not valid')
        }
    })
})
