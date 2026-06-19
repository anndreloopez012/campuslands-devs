// validar.js - Estadísticas de torneo de pingpong

const jugadores = [
  {
    nombre: "Carlos Ajú",
    partidos: 10,
    victorias: 8,
    puntosFavor: 220,
    puntosContra: 180,
  },
  {
    nombre: "Lucía Tahay",
    partidos: 10,
    victorias: 6,
    puntosFavor: 195,
    puntosContra: 190,
  },
  {
    nombre: "Diego Cúmez",
    partidos: 8,
    victorias: 8,
    puntosFavor: 210,
    puntosContra: 155,
  },
  {
    nombre: "Ana Xoyón",
    partidos: 0,
    victorias: 0,
    puntosFavor: 0,
    puntosContra: 0,
  },
];

function calcularEstadisticas(jugador) {
  if (jugador.partidos === 0) {
    return {
      nombre: jugador.nombre,
      winrate: null,
      diferenciaPuntos: null,
      promedioPuntosFavor: null,
      error: "Sin partidos jugados",
    };
  }

  const winrate = (jugador.victorias / jugador.partidos) * 100;
  const diferenciaPuntos = jugador.puntosFavor - jugador.puntosContra;
  const promedioPuntosFavor = jugador.puntosFavor / jugador.partidos;

  return {
    nombre: jugador.nombre,
    winrate: parseFloat(winrate.toFixed(2)),
    diferenciaPuntos,
    promedioPuntosFavor: parseFloat(promedioPuntosFavor.toFixed(2)),
    error: null,
  };
}

function generarRanking(listaJugadores) {
  const conEstadisticas = listaJugadores.map(calcularEstadisticas);

  const validos = conEstadisticas
    .filter((j) => j.error === null)
    .sort((a, b) => {
      if (b.winrate !== a.winrate) return b.winrate - a.winrate;
      return b.diferenciaPuntos - a.diferenciaPuntos;
    });

  const invalidos = conEstadisticas.filter((j) => j.error !== null);

  return { validos, invalidos };
}

function mostrarResultados(jugadores) {
  const { validos, invalidos } = generarRanking(jugadores);

  console.log("=== RANKING DEL TORNEO DE PINGPONG ===\n");

  validos.forEach((jugador, indice) => {
    console.log(`#${indice + 1} ${jugador.nombre}`);
    console.log(`   Winrate:           ${jugador.winrate}%`);
    console.log(`   Diferencia puntos: ${jugador.diferenciaPuntos}`);
    console.log(`   Promedio puntos:   ${jugador.promedioPuntosFavor}`);
    console.log("");
  });

  if (invalidos.length > 0) {
    console.log("=== JUGADORES SIN PARTIDOS ===\n");
    invalidos.forEach((jugador) => {
      console.log(`  ${jugador.nombre}: ${jugador.error}`);
    });
  }
}

mostrarResultados(jugadores);
