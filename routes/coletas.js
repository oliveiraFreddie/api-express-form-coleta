const express = require('express');
const router = express.Router();
const coletaController = require('../controllers/coletaController');

// Definir rotas para o recurso Coleta
router.post('/', coletaController.create);
router.get('/', coletaController.list);
router.get('/:id', coletaController.getById);
router.put('/:id', coletaController.updateById);
router.delete('/:id', coletaController.deleteById);

module.exports = router;
