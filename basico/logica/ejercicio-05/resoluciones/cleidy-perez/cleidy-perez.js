const equipos = [
  { nombre: "Real Madrid", victorias: 5, empates: 2, derrotas: 1, golesFavor: 15, golesContra: 8 },
  { nombre: "Barcelona", victorias: 6, empates: 0, derrotas: 2, golesFavor: 18, golesContra: 10 },
  { nombre: "Atlético", victorias: 4, empates: 4, derrotas: 0, golesFavor: 12, golesContra: 6 },
  { nombre: "Sevilla", victorias: 5, empates: 2, derrotas: 1, golesFavor: 14, golesContra: 9 }
];

equipos.forEach(equipo => {
  equipo.puntos = (equipo.victorias * 3) + equipo.empates;
  equipo.difGoles = equipo.golesFavor - equipo.golesContra;
});

equipos.sort((a, b) => {
    return (b.puntos - a.puntos) || (b.difGoles - a.difGoles);
});

console.log("=== TABLA DE POSICIONES ===");
const tablaVisual = equipos.map((equipo, indice) => {
  return {
    Posición: indice + 1,
    Equipo: equipo.nombre,
    Puntos: equipo.puntos,
    "Dif. Goles": equipo.difGoles,
    PJ: equipo.victorias + equipo.empates + equipo.derrotas
  };
});

console.table(tablaVisual);