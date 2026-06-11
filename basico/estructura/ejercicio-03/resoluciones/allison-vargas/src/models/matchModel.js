// Define cómo lucen los datos de una partida de Battle Royale
class MatchModel {
    constructor(id, mode, maxTeams) {
        this.id = id;               // ID único de la partida
        this.mode = mode;           // "Solo", "Duos" o "Squads"
        this.maxTeams = maxTeams;   // Límite de equipos en el mapa
        this.status = "Waiting";    // Estado: Waiting, In-Game, Finished
        this.registeredTeams = [];  // Lista de equipos conectados
    }
}

module.exports = MatchModel;