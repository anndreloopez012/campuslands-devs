const MatchModel = require('../models/matchModel');
const activeMatches = []; // Simulación de base de datos

class MatchService {
    // Lógica de negocio: Crear una partida validando que los datos sean correctos
    createMatch(mode, maxTeams) {
        if (!mode || !maxTeams || maxTeams <= 0) {
            throw new Error("La configuración del torneo no es válida.");
        }

        const newMatch = new MatchModel(Date.now().toString(), mode, maxTeams);
        activeMatches.push(newMatch);
        return newMatch;
    }
}

module.exports = new MatchService();