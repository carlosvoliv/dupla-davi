const { Router } = require("express");

const { name, version } = require('../../package.json');

const cursoRoutesV1 = require('../routes/v1/quarto');

module.exports = (app) => {

  const router = Router();

  // HealthCheck
  router.route('/').get((req, res) => {
    res.send({ name, version });
  });

  cursoRoutesV1(router);

  app.use('/v1', router);

}

