// ==========================================
// CAPA DE MODELOS: match.model.js
// ==========================================

// Estructura obligatoria que debe cumplir un objeto de tipo Partida (Match)
const MatchModel = {
    matchId: "String (Identificador único de la sala)",
    mapName: "String (Erangel / Miramar / Bermuda)",
    gameMode: "String (Squad / Solo / Duo)",
    totalTeams: "Number (Máximo 20 equipos)",
    winnerTeamId: "String (ID del equipo ganador)",
    isActive: "Boolean"
};

console.log(" Capa de Modelos: match.model.js (Moldes de Datos) inicializada.");