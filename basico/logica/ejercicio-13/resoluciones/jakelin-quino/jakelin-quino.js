// Estadísticas pingpong: winrate, diferencia y ranking
const jugadores = [
  { nombre: "Juan", partidos: 10, victorias: 8, puntosFavor: 120, puntosContra: 90 },
  { nombre: "María", partidos: 8, victorias: 5, puntosFavor: 95, puntosContra: 80 },
  { nombre: "Carlos", partidos: 12, victorias: 9, puntosFavor: 150, puntosContra: 110 },
  { nombre: "Ana", partidos: 0, victorias: 0, puntosFavor: 0, puntosContra: 0 }
];

// Calcular y ordenar
const ranking = jugadores
  .filter(j => j.partidos > 0)
  .map(j => ({
    ...j,
    winrate: (j.victorias / j.partidos) * 100,
    dif: j.puntosFavor - j.puntosContra
  }))
  .sort((a, b) => b.winrate - a.winrate || b.dif - a.dif);

// Mostrar
console.log("=== RANKING ===");
ranking.forEach((j, i) => {
  console.log(`${i+1}. ${j.nombre} - Winrate: ${j.winrate.toFixed(1)}% | Dif: ${j.dif}`);
});