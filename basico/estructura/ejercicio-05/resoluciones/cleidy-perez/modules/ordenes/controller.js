const OrdenModel = require('./model');

const OrdenesController = {
  crearOrden: async (req, res) => {
    try {
      // Inicia una orden en estado 'Pendiente'
      res.status(201).json({ message: "Orden de trabajo abierta" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  actualizarEstado: async (req, res) => {
    try {
      // Cambia el estado (ej: de 'Pendiente' a 'En Reparación')
      res.status(200).json({ message: "Estado de la orden actualizado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = OrdenesController;