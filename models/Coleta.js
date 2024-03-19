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
  carga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carga',
    required: true,
  },
}, { timestamps: true }); 

const SolicitacaoColeta = mongoose.model('SolicitacaoColeta', solicitacaoColetaSchema);

module.exports = SolicitacaoColeta;
