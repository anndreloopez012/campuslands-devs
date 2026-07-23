
// Modelo de datos para una partida de Battle Royale
class MatchModel {
    constructor(idPartida, mapa, modoJuego, equiposMaximos) {
        this.idPartida = idPartida;
        this.mapa = mapa;
        this.modoJuego = modoJuego; // Ej: Squad, Duos, Solo
        this.equiposMaximos = equiposMaximos;
        this.estado = "Pendiente"; // Pendiente, En curso, Finalizada
    }
}

module.exports = MatchModel;