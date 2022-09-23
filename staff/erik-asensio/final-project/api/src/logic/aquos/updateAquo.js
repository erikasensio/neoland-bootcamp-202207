const { NotFoundError, AuthError } = require("errors")
const { User, Aquo } = require("../../models")
const { verifyObjectIdString } = require("../../utils")
const { validateString } = require("validators")

function updateAquo(userId, aquoId, name, type, pin1, pin2, pin3, ip) {

    verifyObjectIdString(userId)
    verifyObjectIdString(aquoId)
    validateString(name)
    validateString(type)
    validateString(pin1)
    validateString(pin2)
    validateString(pin3)
    validateString(ip)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Aquo.findById(aquoId)
        })
        .then(aquo => {
            if (!aquo) throw new NotFoundError(`note with id ${aquoId} not found`)

            if(aquo.user.toString() !== userId) throw new AuthError(`note with id ${noteId} does not belong to user with id ${userId}`)

            aquo.name = name
            aquo.type = type
            aquo.pin1 = pin1
            aquo.pin2 = pin2
            aquo.pin3 = pin3
            aquo.ip = ip

            return aquo.save()
        })
        .then(() => {})
}

module.exports = updateAquo