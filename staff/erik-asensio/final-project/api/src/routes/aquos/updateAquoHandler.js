const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { aquos: { updateAquo} } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { body: { name, type, pin1, pin2, pin3, ip }, params: { aquoId } } = req

        return updateAquo(userId, aquoId, name, type, pin1, pin2, pin3, ip)
            .then(() => res.status(204).send())
    }, res, logger)
}