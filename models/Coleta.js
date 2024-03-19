const mongoose = require('mongoose');

const solicitacaoColetaSchema = new mongoose.Schema({
  clienteColeta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  clienteEntrega: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  dimensoes: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
}, { timestamps: true }); 

const SolicitacaoColeta = mongoose.model('SolicitacaoColeta', solicitacaoColetaSchema);

module.exports = SolicitacaoColeta;
