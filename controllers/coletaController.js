const SolicitacaoColeta = require('../models/Coleta');

const coletaController = {
  // Função para criar uma nova solicitação de coleta
  create: async (req, res) => {
    try {
      const novaSolicitacaoColeta = await SolicitacaoColeta.create(req.body);
      res.status(201).json(novaSolicitacaoColeta);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Função para listar todas as solicitações de coleta
  list: async (req, res) => {
    try {
      const solicitacoesColeta = await SolicitacaoColeta.find();
      res.json(solicitacoesColeta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Função para buscar uma solicitação de coleta por ID
  getById: async (req, res) => {
    try {
      const solicitacaoColeta = await SolicitacaoColeta.findById(req.params.id);
      if (!solicitacaoColeta) {
        return res.status(404).json({ message: 'Solicitação de coleta não encontrada' });
      }
      res.json(solicitacaoColeta);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Função para atualizar uma solicitação de coleta por ID
  updateById: async (req, res) => {
    try {
      const solicitacaoColetaAtualizada = await SolicitacaoColeta.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!solicitacaoColetaAtualizada) {
        return res.status(404).json({ message: 'Solicitação de coleta não encontrada' });
      }
      res.json(solicitacaoColetaAtualizada);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Função para excluir uma solicitação de coleta por ID
  deleteById: async (req, res) => {
    try {
      const solicitacaoColetaExcluida = await SolicitacaoColeta.findByIdAndDelete(req.params.id);
      if (!solicitacaoColetaExcluida) {
        return res.status(404).json({ message: 'Solicitação de coleta não encontrada' });
      }
      res.json({ message: 'Solicitação de coleta excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = coletaController;

