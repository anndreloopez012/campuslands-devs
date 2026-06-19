const MotoModel = require('./model');

const MotosController = {
  registrarMoto: async (req, res) => {
    try {
      // Lógica para asociar la moto al cliente_id proporcionado
      res.status(201).json({ message: "Motocicleta registrada exitosamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  obtenerPorPlaca: async (req, res) => {
    try {
      res.status(200).json({ message: "Datos de la moto encontrados" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = MotosController;