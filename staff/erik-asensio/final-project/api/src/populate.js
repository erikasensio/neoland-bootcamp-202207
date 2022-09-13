const { connect, disconnect } = require('mongoose')
const { User, Aquo } = require('./models')

connect('mongodb://localhost:27017/postits')
    // .then(() => {
    //     return Promise.all([
    //         User.deleteMany(),
    //         aquo.deleteMany()
    //     ])
    // })
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
            // email: 'pepito@grillo.com',
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
        const aquo1 = new aquo({ user: pepito.id, name: 'Bedroom', type: "Aquarium" })
        const aquo2 = new aquo({ user: wendy.id, name: 'Hall', type: "Plant" })
        const aquo3 = new aquo({ user: peter.id, name: 'Kitchen', type: "Aquarium" })
        const aquo4 = new aquo({ user: james.id, name: 'Garden', type: "Plant" })

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