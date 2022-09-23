const { User, Aquo } = require("../../models")
const { NotFoundError, SystemError } = require('errors')
const { validateString } = require('validators')
const { verifyObjectIdString } = require('../../utils')

/**
 * Creates a note for a user.
 * 
 * @param {string} userId The user id.
 * @param {string} name The aquo type.
 * @param {string} type The aquo type.
 * @param {string} pin1 The pin1.
 * @param {string} pin2 The pin1.
 * @param {string} pin3 The pin1.
 * 
 * @returns {Promise}
 *
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 * 
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */
function createAquo(userId, name, type, pin1, pin2, pin3, ip) {
    verifyObjectIdString(userId, 'user id')
    validateString(name, "name")
    validateString(type, "type")
    validateString(pin1, "pin1")
    validateString(pin2, "pin2")
    validateString(pin3, "pin3")
    validateString(ip, "ip")

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Aquo.create({ user: user._id, name, type, pin1, pin2, pin3, ip})
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(aquo => { })
}

module.exports = createAquo