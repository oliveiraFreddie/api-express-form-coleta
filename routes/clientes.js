const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Definir rotas para o recurso Cliente
router.post('/', clienteController.create);
router.get('/', clienteController.list);
router.get('/:id', clienteController.getById);
router.put('/:id', clienteController.updateById);
router.delete('/:id', clienteController.deleteById);

module.exports = router;
