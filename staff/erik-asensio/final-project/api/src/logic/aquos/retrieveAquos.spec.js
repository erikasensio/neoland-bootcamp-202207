const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Aquo } = require('../../models')
const { NotFoundError } = require('errors')
const retrieveAquos = require('./retrieveAquos')

describe('retrieveAquos', () => {
    beforeAll(() => connect('mongodb://localhost:27017/aquo-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Aquo.deleteMany()]))

    it('succeeds on existing user and aquos', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const name1 = 'hola mundo'
        const name2 = 'hello world'
        const name3 = 'pryvit svit'

        const type1 = 'acuarium'
        const type2 = 'plant'
        const type3 = 'acuarium'

        const input1_1 = '2'
        const input1_2 = '8'
        const input1_3 = '09'

        const input2_1 = '5'
        const input2_2 = '12'
        const input2_3 = '9'

        const input3_1 = '6'
        const input3_2 = '9'
        const input3_3 = '3'

        const ip_1 = '12424356'
        const ip_2 = '23423453'
        const ip_3 = '23456543'



        const user = new User({ name, email, password })

        return Promise.all([
            user.save(),
            Aquo.create({ user: user.id, name: name1, type: type1, pin1: input1_1, pin2: input2_1, pin3: input3_1,ip: ip_1 }), // create() -> new, save()
            Aquo.create({ user: user.id, name: name2, type: type2, pin1: input1_2, pin2: input2_2, pin3: input3_2,ip: ip_2 }),
            Aquo.create({ user: user.id, name: name3, type: type3, pin1: input1_3, pin2: input2_3, pin3: input3_3,ip: ip_3 })
        ])
            .then(([user, aquo1, aquo2, aquo3]) =>
                retrieveAquos(user.id)
                    .then(aquos => {
                        expect(aquos).toHaveLength(3)

                        const _aquo1 = aquos.find(aquo => aquo.id === aquo1.id)
                        expect(_aquo1).toBeDefined()
                        expect(_aquo1.name).toEqual(aquo1.name)
                        expect(_aquo1.type).toEqual(aquo1.type)
                        expect(_aquo1.pin1).toEqual(aquo1.pin1)
                        expect(_aquo1.pin2).toEqual(aquo1.pin2)
                        expect(_aquo1.pin3).toEqual(aquo1.pin3)
                        expect(_aquo1.ip).toEqual(aquo1.ip)

                        const _aquo2 = aquos.find(aquo => aquo.id === aquo2.id)
                        expect(_aquo2).toBeDefined()
                        expect(_aquo2.name).toEqual(aquo2.name)
                        expect(_aquo2.type).toEqual(aquo2.type)
                        expect(_aquo2.pin1).toEqual(aquo2.pin1)
                        expect(_aquo2.pin2).toEqual(aquo2.pin2)
                        expect(_aquo2.pin3).toEqual(aquo2.pin3)
                        expect(_aquo2.ip).toEqual(aquo2.ip)

                        const _aquo3 = aquos.find(aquo => aquo.id === aquo3.id)
                        expect(_aquo3).toBeDefined()
                        expect(_aquo3.name).toEqual(aquo3.name)
                        expect(_aquo3.type).toEqual(aquo3.type)
                        expect(_aquo3.pin1).toEqual(aquo3.pin1)
                        expect(_aquo3.pin2).toEqual(aquo3.pin2)
                        expect(_aquo3.pin3).toEqual(aquo3.pin3)
                        expect(_aquo3.ip).toEqual(aquo3.ip)
                    })
            )
    })

    it('fails on non-existing user', () => {  // unhappy path
        const userId = new ObjectId().toString()

        return retrieveAquos(userId)
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual(`user with id ${userId} not found`)
            })
    })

    afterAll(() => disconnect())
})