// ==========================================
// 🎮 CAPA DE CONTROLADORES: team.controller.js
// ==========================================

function registerTeam(requestData) {
    const { teamName, players, region } = requestData;

    // CASO LÍMITE DE VALIDACIÓN: Si faltan datos obligatorios o el equipo no tiene miembros
    if (!teamName || !players || players.length === 0) {
        console.error("Error en Controlador: El nombre del equipo o los jugadores están vacíos.");
        return { status: 400, message: "Error: Datos de registro incompletos." };
    }

    console.log(`Controlador: Datos validados con éxito para el equipo [${teamName}] de la región [${region}].`);
    return { status: 200, message: "Equipo listo para ser procesado por el servicio." };
}

console.log("Capa de Controladores: team.controller.js vinculada con éxito.");