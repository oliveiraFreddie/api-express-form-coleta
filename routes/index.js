const express = require('express');
const router = express.Router();

// Importar e usar as rotas de cada recurso
const clientesRouter = require('./clientes');
const coletasRouter = require('./coletas');

router.use('/clientes', clientesRouter);
router.use('/coletas', coletasRouter);

module.exports = router;
