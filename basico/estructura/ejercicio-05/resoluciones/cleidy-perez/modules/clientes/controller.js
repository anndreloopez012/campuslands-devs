const ClienteModel = require('./model');

const ClientesController = {
  crearCliente: async (req, res) => {
    try {
    
      res.status(201).json({ message: "Cliente creado con éxito" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  obtenerClientes: async (req, res) => {
    try {
      res.status(200).json({ message: "Lista de clientes devuelta" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ClientesController;