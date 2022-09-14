const { User, Aquo } = require("../../models")
const { NotFoundError, SystemError } = require('errors')
const { validateString } = require('validators')
const { verifyObjectIdString } = require('../../utils')

/**
 * Creates a note for a user.
 * 
 * @param {string} userId The user id.
 * @param {string} text The note text.
 * 
 * @returns {Promise}
 *
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 * 
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */
function createAquo(userId, name, type, input1, input2, input3) {
    verifyObjectIdString(userId, 'user id')
    validateString(name, 'text')
    validateString(type, 'text')

    return User.findById(userId).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Aquo.create({ user: user._id, name, type, input1, input2, input3 })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .then(aquo => { })
}

module.exports = createAquo