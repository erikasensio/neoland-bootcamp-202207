const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { aquos: { createAquo } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { body: { name, type, input1, input2, input3 } } = req

        return createAquo(userId, name, type, input1, input2, input3)
            .then(() => res.status(201).send())
    }, res, logger)
}