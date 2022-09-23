const {
    runWithErrorHandling,
    createLogger,
    verifyToken,
  } = require("../../utils");
  const {
    aquos: { deleteAquo },
  } = require("../../logic");
  const { NotFoundError } = require("errors");
  const logger = createLogger(module);
  
  module.exports = (req, res) => {
    runWithErrorHandling(
      () => {
        debugger;
  
        const {
          params: { aquoId },
        } = req;
  
        return deleteAquo (aquoId).then(() => res.status(200).send());
      },
      res,
      logger
    );
  };