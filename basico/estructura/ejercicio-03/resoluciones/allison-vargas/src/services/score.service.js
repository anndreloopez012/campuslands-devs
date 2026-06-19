// ==========================================
// ⚡ CAPA DE SERVICIOS: score.service.js
// ==========================================

/**
 * Calcula el puntaje de una partida basado en la posición y bajas (Kills)
 * @param {number} placement - Posición final del equipo (1 a 20)
 * @param {number} totalKills - Cantidad de enemigos eliminados
 */
function calculateMatchPoints(placement, totalKills) {
    let placementPoints = 0;

    // Reglas del Torneo: Puntos fijos según el TOP alcanzado
    if (placement === 1) {
        placementPoints = 15; // ¡Winner Winner Chicken Dinner! 
    } else if (placement === 2) {
        placementPoints = 12;
    } else if (placement <= 5) {
        placementPoints = 10;
    } else if (placement <= 10) {
        placementPoints = 5;
    } else {
        placementPoints = 0;
    }

    // Cada baja (kill) otorga 1 punto adicional
    const pointsPerKill = 1;
    const finalScore = placementPoints + (totalKills * pointsPerKill);

    console.log(`⚡ Servicio: Cálculo completado. Posición: ${placement}º, Kills: ${totalKills} ➔ Puntaje Total: ${finalScore} pts.`);
    return finalScore;
}

console.log("Capa de Servicios: score.service.js (Lógica de Negocio) cargada.");