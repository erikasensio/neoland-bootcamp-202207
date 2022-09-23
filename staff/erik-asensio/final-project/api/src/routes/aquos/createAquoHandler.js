const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { aquos: { createAquo } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { body: { name, type, pin1, pin2, pin3, ip } } = req

        return createAquo(userId, name, type, pin1, pin2, pin3, ip)
            .then(() => res.status(201).send())
    }, res, logger)
}