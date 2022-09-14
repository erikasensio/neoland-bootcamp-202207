const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { aquos: { retrieveAquos } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveAquos(userId)
            .then(aquos => res.status(200).json(aquos))
    }, res, logger)
}