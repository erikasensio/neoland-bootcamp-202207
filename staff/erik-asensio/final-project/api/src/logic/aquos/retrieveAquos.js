const { User, Aquo } = require('../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../utils')
const axios = require('axios').default;

function retrieveAquos(userId) {
    verifyObjectIdString(userId, 'user id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Aquo.find({ user: userId }).lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(aquos => {
            aquos.forEach(aquo => {
                // sanitize

                aquo.id = aquo._id.toString()
                aquo.user = userId
                aquo.name = aquo.name
                aquo.type = aquo.type
                aquo.pin1 = aquo.pin1
                aquo.pin2 = aquo.pin2
                aquo.pin3 = aquo.pin3
                aquo.ip = aquo.ip

                delete aquo._id
                delete aquo.__v
            })
            return Promise.allSettled(aquos.map(aquo => axios.get(`http://${aquo.ip}:8080/pins/inputs`, {timeout: 10000})))
                .then(responses => {
                    const aquos2 = responses.map((response, index) => {

                        const { status } = response
                        const aquo = aquos[index]

                        // if (status === 200) {
                        if (status === "fulfilled") {
                            // const { data } = response
                            const { value: { data } } = response

                            const { pin1, pin2, pin3 } = data

                            aquo.pin1 = pin1
                            aquo.pin2 = pin2
                            aquo.pin3 = pin3
                        } else {
                            aquo.pin1 = '-'
                            aquo.pin2 = '-'
                            aquo.pin3 = '-'
                        }

                        // return aquo
                        return aquo
                    })

                    return aquos2
                })
        })
}

module.exports = retrieveAquos