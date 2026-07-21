// 1. Datos iniciales: Jugadores del torneo
const jugadores = [
  { nombre: "Carlos", partidos: 10, victorias: 8, puntosFavor: 110, puntosContra: 80 },
  { nombre: "Sofia", partidos: 10, victorias: 8, puntosFavor: 115, puntosContra: 75 }, // Mismo winrate que Carlos, pero mejor diferencia de puntos
  { nombre: "Luis", partidos: 8, victorias: 4, puntosFavor: 80, puntosContra: 85 },
  { nombre: "Ana", partidos: 0, victorias: 0, puntosFavor: 0, puntosContra: 0 } // Caso especial: 0 partidos
];

// 2, 3 y 5. Validar partidos y calcular métricas de rendimiento
const estadisticas = jugadores.map(jugador => {
  // 5. Validación: Evitar división por cero
  if (jugador.partidos === 0) {
    return {
      nombre: jugador.nombre,
      partidos: 0,
      winrate: 0,
      diferenciaPuntos: 0
    };
  }

  // 2. Winrate = victorias / partidos * 100
  const winrate = (jugador.victorias / jugador.partidos) * 100;

  // 3. Diferencia de puntos = puntosFavor - puntosContra
  const diferenciaPuntos = jugador.puntosFavor - jugador.puntosContra;

  return {
    nombre: jugador.nombre,
    partidos: jugador.partidos,
    victorias: jugador.victorias,
    winrate: Number(winrate.toFixed(1)), // Redondear a 1 decimal
    diferenciaPuntos
  };
});

// 4. Ordenar la tabla de posiciones por winrate (mayor a menor) y desempatar por diferencia de puntos
const ranking = estadisticas.sort((a, b) => {
  if (b.winrate !== a.winrate) {
    return b.winrate - a.winrate; // Ordena por porcentaje de victorias
  }
  return b.diferenciaPuntos - a.diferenciaPuntos; // Desempata por diferencia de puntos
});

// Asignar posición de ranking final
const tablaFinal = ranking.map((jugador, index) => ({
  posicion: index + 1,
  ...jugador
}));

console.log("=== RANKING DEL TORNEO DE PING PONG ===");
console.table(tablaFinal);