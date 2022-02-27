const boom = require('@hapi/boom');

//DTO (DATA TRANSFER OBJECT) CRITERIOS (REQ, TIPO, FORM)
//PROPIEDAD DEL REQ (props, query, body)
function validatorHandler(dto, prop) {
  return (req, res, next) => {
    const data = req[prop];
    const { error } = dto.validate(data);
    if (error) {
      next(boom.badRequest(error)) //PASA AL ERROR
    }
    next(); //PASA A LAS RUTAS
  };
}

module.exports = validatorHandler;
