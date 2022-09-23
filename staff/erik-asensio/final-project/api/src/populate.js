require("dotenv").config()
const mongoose = require("mongoose")
const { connect, disconnect } = require('mongoose')
const {
    env: { MONGO_URL } 
} = process
const { User, Aquo } = require('./models')

connect(MONGO_URL)

    .then(() => Promise.all([User.deleteMany(), Aquo.deleteMany()]))
    .then(() => {
        const pepito = new User({
            name: 'Pepito Grillo',
            email: 'pepito@grillo.com',
            password: '123123123'
        })

        const wendy = new User({
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            password: '12312123'
        })

        const peter = new User({
            name: 'Peter Pan',
            email: 'peter@pan.com',
            password: '123123123'
        })

        const james = new User({
            name: 'James Hook',
            email: 'james@hook.com',
            password: '123123123'
        })

        return Promise.all([
            pepito.save(),
            wendy.save(),
            peter.save(),
            james.save()
        ])
    })
    // .then(users => {
    //     const [pepito, wendy, peter, james] = users
    //     ...
    .then(([pepito, wendy, peter, james]) => {
        const aquo1 = new Aquo({ user: pepito.id, name: "Habitacion", type: "aquarium", pin1: "20.00", pin2: "7.00", pin3: "ON", ip: "172.20.10.3" })
        const aquo2 = new Aquo({ user: pepito.id, name: "Jardin", type: "plant", pin1: "3", pin2: "235", pin3: "ON", ip: "127.0.0.2" })
        const aquo3 = new Aquo({ user: peter.id, name: "Jardin2", type: "plant", pin1: "10", pin2: "125", pin3: "OFF", ip: "127.0.0.3" })
        const aquo4 = new Aquo({ user: james.id, name: "Sofa", type: "aquarium", pin1: "24.00", pin2: "9.00", pin3: "OFF", ip: "127.0.0.4" })

        return Promise.all([
            aquo1.save(),
            aquo2.save(),
            aquo3.save(),
            aquo4.save()
        ])
            .then(() => User.findById(pepito.id, 'name email').lean())
            .then(user => {
                debugger
            })
    })
    .catch(error => {
        debugger
    })
    .then(() => disconnect())