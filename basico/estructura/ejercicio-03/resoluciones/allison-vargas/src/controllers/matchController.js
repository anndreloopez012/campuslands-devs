const matchService = require('../services/matchService');

class MatchController {
    // Recibe la petición del usuario y maneja la respuesta
    createNewMatch(req, res) {
        const { mode, maxTeams } = req.body;

        if (!mode) {
            return res.status(400).json({ error: "El modo de juego es obligatorio." });
        }

        try {
            const matchCreated = matchService.createMatch(mode, maxTeams);
            return res.status(201).json({ message: "Torneo creado", data: matchCreated });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new MatchController();