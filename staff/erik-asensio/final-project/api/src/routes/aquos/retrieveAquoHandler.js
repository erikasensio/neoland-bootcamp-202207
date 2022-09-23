const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { aquos: { retrieveAquo } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        const { params: { aquoId }} = req

        return retrieveAquo(aquoId)
            .then(aquo => res.status(200).json(aquo))
    }, res, logger)
}