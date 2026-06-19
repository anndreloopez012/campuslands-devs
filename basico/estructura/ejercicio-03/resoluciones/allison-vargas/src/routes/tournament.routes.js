// ==========================================
// CAPA DE RUTAS: tournament.routes.js
// ==========================================

// Mapeo simulado de los puntos de acceso (endpoints) del torneo de Battle Royale
const tournamentRoutes = {
    "/api/v1/teams/register": "teamController.registerTeam",
    "/api/v1/matches/score": "teamController.submitMatchScore",
    "/api/v1/leaderboard": "teamController.getGlobalLeaderboard"
};

console.log(" Capa de Rutas: tournament.routes.js mapeada y lista.");