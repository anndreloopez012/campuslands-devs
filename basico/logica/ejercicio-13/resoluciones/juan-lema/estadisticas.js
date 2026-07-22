// Ejercicio 13 - Logica
// Estadisticas de torneo de pingpong
// Autor: Juan Lema

// --- Datos de entrada ---
// Cada jugador tiene: nombre, partidos jugados, victorias y los puntos
// que anoto (puntosFavor) y los que recibio (puntosContra).
const jugadores = [
  { nombre: "Kenji",   partidos: 10, victorias: 8, puntosFavor: 210, puntosContra: 150 },
  { nombre: "Valeria", partidos: 9,  victorias: 6, puntosFavor: 180, puntosContra: 140 },
  { nombre: "Bruno",   partidos: 12, victorias: 6, puntosFavor: 220, puntosContra: 210 },
  { nombre: "Noelia",  partidos: 7,  victorias: 3, puntosFavor: 120, puntosContra: 130 },
  { nombre: "Diego",   partidos: 0,  victorias: 0, puntosFavor: 0,   puntosContra: 0 },
];

// --- Funciones ---

// Calcula el porcentaje de victorias de un jugador.
// Si no jugo partidos, devuelve 0 para evitar division entre cero.
function calcularWinrate(jugador) {
  if (jugador.partidos === 0) return 0;
  return Math.round((jugador.victorias / jugador.partidos) * 100);
}

// Calcula la diferencia entre puntos a favor y puntos en contra.
function calcularDiferenciaPuntos(jugador) {
  return jugador.puntosFavor - jugador.puntosContra;
}

// Calcula el promedio de puntos anotados por partido.
function calcularPromedioPuntos(jugador) {
  if (jugador.partidos === 0) return 0;
  return Math.round(jugador.puntosFavor / jugador.partidos);
}

// Arma un nuevo objeto de estadisticas por jugador, sin modificar el original.
function construirEstadisticas(jugador) {
  return {
    nombre: jugador.nombre,
    winrate: calcularWinrate(jugador),
    diferencia: calcularDiferenciaPuntos(jugador),
    promedioPuntos: calcularPromedioPuntos(jugador),
  };
}

// Ordena a los jugadores por winrate descendente y, en caso de empate,
// por diferencia de puntos descendente.
function ordenarPorRanking(listaEstadisticas) {
  return [...listaEstadisticas].sort((a, b) => {
    if (b.winrate !== a.winrate) return b.winrate - a.winrate;
    return b.diferencia - a.diferencia;
  });
}

// Muestra el ranking final en consola, con la posicion de cada jugador.
function mostrarRanking(listaJugadores) {
  if (listaJugadores.length === 0) {
    console.log("No hay jugadores para mostrar.");
    return;
  }

  const estadisticas = listaJugadores.map(construirEstadisticas);
  const ranking = ordenarPorRanking(estadisticas);

  ranking.forEach((jugador, indice) => {
    const posicion = indice + 1;
    console.log(
      `${posicion}. ${jugador.nombre} - winrate: ${jugador.winrate}% | ` +
      `diferencia: ${jugador.diferencia} | promedio: ${jugador.promedioPuntos} pts`
    );
  });
}

// --- Ejecucion ---
mostrarRanking(jugadores);

module.exports = {
  calcularWinrate,
  calcularDiferenciaPuntos,
  calcularPromedioPuntos,
  construirEstadisticas,
  ordenarPorRanking,
  mostrarRanking,
};