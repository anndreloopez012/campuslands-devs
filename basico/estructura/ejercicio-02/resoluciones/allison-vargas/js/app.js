// Esperar a que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema de Ranking eSports inicializado correctamente.");
    initRanking();
});

function initRanking() {
    const tableBody = document.getElementById("ranking-body");
    
    // CASO DE VALIDACIÓN: Si el contenedor de la tabla no existe en el HTML
    if (!tableBody) {
        console.error("Error técnico crítico: No se encontró el elemento 'ranking-body' en la interfaz.");
        return;
    }

    // Nota técnica de simulación de ruta
    console.log("Conexión exitosa preparada para la ruta relativa: data/players.json");
}