const mongoose = require('mongoose');

const cargaSchema = new mongoose.Schema({
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
});

const Carga = mongoose.model('Carga', cargaSchema);

module.exports = Carga;
