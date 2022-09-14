const { User, Aquo } = require('../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../utils')

function retrieveAquos(userId) {
    verifyObjectIdString(userId, 'user id')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Aquo.find({ user: userId }, 'text visibility createdAt modifiedAt').lean()
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(aquos => {
            aquos.forEach(aquo => {
                // sanitize
                debugger

                aquo.id = aquo._id.toString()
                delete aquo._id

                delete aquo.__v
            })

            return aquos
        })
}

module.exports = retrieveAquos