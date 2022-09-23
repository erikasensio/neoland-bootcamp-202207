const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Aquo } = require("../../models")
const { NotFoundError } = require('errors')
const createAquo = require('./createAquo')

describe('createAquo', () => {
    beforeAll(() => connect('mongodb://127.0.0.1:27017/aquo-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Aquo.deleteMany()]))

    it('succeeds on correct data', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const aquoName="jardin"
        const type="acuarium"
        const pin1="5"
        const pin2="8"
        const pin3="20"
        const ip="2034345"

        return User.create({ name, email, password })
            .then(user =>
                createAquo(user.id, aquoName, type, pin1, pin2, pin3, ip)
                    .then(res => {
                        expect(res).toBeUndefined()

                        return Aquo.find()
                    })
                    .then(aquos => {
                        expect(aquos).toHaveLength(1)

                        const [aquo] = aquos

                        expect(aquo.user.toString()).toEqual(user.id)
                        expect(aquo.type).toEqual(type)
                        expect(aquo.pin1).toEqual(pin1)
                        expect(aquo.pin2).toEqual(pin2)
                        expect(aquo.pin3).toEqual(pin3)
                        expect(aquo.ip).toEqual(ip)
                    })
            )

    })

    it('fails on non-existing user', () => {  // unhappy path
        const userId = new ObjectId().toString()
        
        return expect(createAquo(userId, aquoName="hello", type="acuarium", pin1="5", pin2="7", pin3="20", ip="3453455")).rejects.toThrowError(NotFoundError, `user with id ${userId} not found`)
    })

    afterAll(() => disconnect())
})