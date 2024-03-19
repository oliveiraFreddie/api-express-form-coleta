const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  cnpj: {
    type: String,
    required: true,
    unique: true,
  },
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
