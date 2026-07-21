
const torneoPingPong = [
  { nombre: "Carlos", partidos: 10, victorias: 8, puntosFavor: 110, puntosContra: 85 },
  { nombre: "Ana", partidos: 12, victorias: 9, puntosFavor: 132, puntosContra: 98 },
  { nombre: "Sofía", partidos: 8, victorias: 7, puntosFavor: 88, puntosContra: 60 },
  { nombre: "Luis", partidos: 0, victorias: 0, puntosFavor: 0, puntosContra: 0 }, // Caso borde de validación
  { nombre: "Mateo", partidos: 10, victorias: 8, puntosFavor: 112, puntosContra: 80 }  // Empata en winrate con Carlos
];

function procesarTorneo(jugadores) {
  return jugadores
    .filter(jugador => jugador.partidos > 0)
    .map(jugador => {
      const winrate = (jugador.victorias / jugador.partidos) * 100;
      const diferenciaPuntos = jugador.puntosFavor - jugador.puntosContra;
      
      return {
        ...jugador,
        winrate: Number(winrate.toFixed(2)),
        diferenciaPuntos: diferenciaPuntos
      };
    })
    .sort((a, b) => {
      if (b.winrate !== a.winrate) {
        return b.winrate - a.winrate; // Descendente por porcentaje de victorias
      }
      return b.diferenciaPuntos - a.diferenciaPuntos; // Desempate por mejor diferencia de puntos
    })
    // Asignar la posición final de ranking
    .map((jugador, index) => ({
      ranking: index + 1,
      ...jugador
    }));
}

// Función para imprimir el reporte final de manera estructurada en consola
function mostrarTablaRanking(rankingFinal) {
  console.log("=======================================================================");
  console.log("           TABLA DE RANKING FINAL - TORNEO DE PING-PONG                ");
  console.log("=======================================================================");
  console.log("Pos | Jugador    | Partidos | Victorias | Winrate (%) | Dif. Puntos");
  console.log("-----------------------------------------------------------------------");
  
  rankingFinal.forEach(j => {
    const pos = j.ranking.toString().padEnd(3);
    const nombre = j.nombre.padEnd(10);
    const partidos = j.partidos.toString().padEnd(8);
    const victorias = j.victorias.toString().padEnd(9);
    const winrate = (j.winrate + "%").padEnd(11);
    const dif = (j.diferenciaPuntos > 0 ? `+${j.diferenciaPuntos}` : j.diferenciaPuntos).toString();
    
    console.log(`${pos} | ${nombre} | ${partidos} | ${victorias} | ${winrate} | ${dif}`);
  });
  console.log("=======================================================================");
}

// Ejecución del Sistema
const rankingProcesado = procesarTorneo(torneoPingPong);
mostrarTablaRanking(rankingProcesado);