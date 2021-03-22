
const quartosController = require('../../controllers/quarto.controller');

module.exports = (router) => {

  router
    .route('/quarto')
    .get(
      quartosController.getQuartos
    );

  router
    .route('/quarto/:quartoid')
    .get(
      quartosController.getQuartoPorId
    );


  router
    .route('/quarto/:quartoid/reserva')
    .post(
      quartosController.postQuartoInscricao
    );


  router
    .route('/quarto/:quartoid/reserva/:idreserva')
    .delete(
      quartosController.deleteQuartoReserva
    );

}