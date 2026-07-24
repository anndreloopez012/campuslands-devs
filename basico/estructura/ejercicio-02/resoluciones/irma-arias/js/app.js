// Lógica para gestionar y renderizar el ranking de jugadores MOBA
document.addEventListener("DOMContentLoaded", () => {
    console.log("Módulo de ranking MOBA cargado correctamente.");
    
    // Simulación de carga de datos desde player.json o API interna
    fetch('player.json')
        .then(response => response.json())
        .then(data => {
            renderizarRanking(data);
        })
        .catch(error => console.error("Error al cargar los datos de los jugadores:", error));
});

function renderizarRanking(jugadores) {
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = "";

    // Ordenar jugadores de mayor a menor puntuación (Caso normal y límite)
    jugadores.sort((a, b) => b.puntuacionRanking - a.puntuacionRanking);

    jugadores.forEach((jugador, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>#${index + 1}</td>
            <td>${jugador.nombre}</td>
            <td>${jugador.rol}</td>
            <td>${jugador.kda}</td>
            <td>${jugador.puntuacionRanking} pts</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}