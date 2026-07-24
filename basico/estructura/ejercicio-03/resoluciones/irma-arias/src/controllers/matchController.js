// Controlador para gestionar las solicitudes sobre partidas de Battle Royale
const MatchService = require('../services/matchService');
const matchService = new MatchService();

class MatchController {
    crearPartida(req, res) {
        try {
            const { idPartida, mapa, modoJuego, equiposMaximos, equiposRegistrados } = req.body;
            
            // Validación mediante el servicio
            matchService.validarCapacidadEquipos(equiposRegistrados, equiposMaximos);

            console.log(`Partida ${idPartida} creada exitosamente en el mapa ${mapa}.`);
            return { status: 201, mensaje: "Partida de Battle Royale registrada con éxito." };
        } catch (error) {
            return { status: 400, error: error.message };
        }
    }
}

module.exports = MatchController;