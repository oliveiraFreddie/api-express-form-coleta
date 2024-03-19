const Cliente = require('../models/Cliente');

const clienteController = {
  // Função para criar um novo cliente
  create: async (req, res) => {
    try {
      const novoCliente = await Cliente.create(req.body);
      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Função para listar todos os clientes
  list: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Função para buscar um cliente por ID
  getById: async (req, res) => {
    try {
      const cliente = await Cliente.findById(req.params.id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Função para atualizar um cliente por ID
  updateById: async (req, res) => {
    try {
      const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!clienteAtualizado) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      res.json(clienteAtualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Função para excluir um cliente por ID
  deleteById: async (req, res) => {
    try {
      const clienteExcluido = await Cliente.findByIdAndDelete(req.params.id);
      if (!clienteExcluido) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      res.json({ message: 'Cliente excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = clienteController;
