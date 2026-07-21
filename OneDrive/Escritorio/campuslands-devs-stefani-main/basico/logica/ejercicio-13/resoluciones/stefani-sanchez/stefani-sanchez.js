// Nombre: Stefani Sanchez
// Ejercicio 13 - Estadisticas de torneo de pingpong
//
// Razonamiento: Se calcula winrate = victorias/partidos*100 (se valida partidos != 0).
// Se calcula diferencia de puntos. Se ordena por winrate y en caso de empate
// se usa diferencia de puntos como desempate.

const jugadores = [
  { nombre: "Alejandro M.",  partidos: 10, victorias: 8, puntosFavor: 210, puntosContra: 140 },
  { nombre: "Beatriz T.",    partidos: 10, victorias: 7, puntosFavor: 195, puntosContra: 160 },
  { nombre: "Carlos F.",     partidos: 10, victorias: 7, puntosFavor: 200, puntosContra: 155 },
  { nombre: "Diana R.",      partidos: 10, victorias: 5, puntosFavor: 175, puntosContra: 180 },
  { nombre: "Eduardo S.",    partidos: 10, victorias: 3, puntosFavor: 150, puntosContra: 200 },
  { nombre: "Fabiola N.",    partidos:  0, victorias: 0, puntosFavor:   0, puntosContra:   0 }, // caso limite
];

function calcularEstadisticas(lista) {
  return lista.map(jugador => {
    if (jugador.partidos === 0) {
      return { ...jugador, winrate: 0, diferenciaPuntos: 0, advertencia: "Sin partidos registrados" };
    }
    const winrate         = (jugador.victorias / jugador.partidos) * 100;
    const diferenciaPuntos = jugador.puntosFavor - jugador.puntosContra;
    return { ...jugador, winrate, diferenciaPuntos };
  });
}

function ordenarRanking(lista) {
  return [...lista].sort((a, b) => {
    if (b.winrate !== a.winrate) return b.winrate - a.winrate;
    return b.diferenciaPuntos - a.diferenciaPuntos;
  });
}

const conEstadisticas = calcularEstadisticas(jugadores);
const ranking         = ordenarRanking(conEstadisticas);

console.log("=== RANKING TORNEO DE PINGPONG ===");
console.log("Pos | Jugador          | PJ | V | Winrate | Dif. Puntos");
ranking.forEach((j, i) => {
  if (j.advertencia) {
    console.log(` ${i + 1}  | ${j.nombre.padEnd(16)} | ${j.partidos}  | - | ${j.advertencia}`);
  } else {
    console.log(` ${i + 1}  | ${j.nombre.padEnd(16)} | ${j.partidos} | ${j.victorias} | ${j.winrate.toFixed(1)}%   | ${j.diferenciaPuntos}`);
  }
});

// Validacion: 8 victorias de 10 partidos = 80%
const testWinrate = (8 / 10) * 100;
console.log(`\nValidacion: 8/10 victorias => ${testWinrate}% (esperado 80)`);
// Validacion: partidos = 0 no divide entre cero
const testCero = jugadores.find(j => j.partidos === 0);
const statsCero = calcularEstadisticas([testCero])[0];
console.log(`Validacion: partidos=0 => winrate: ${statsCero.winrate} (sin division por cero)`);
