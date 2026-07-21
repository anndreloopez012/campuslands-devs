// Equipos: nombre, victorias, empates, derrotas, golesFavor, golesContra
const equipos = [
  { nombre: "Real Madrid", victorias: 4, empates: 1, derrotas: 0, golesFavor: 12, golesContra: 4 },
  { nombre: "Barcelona", victorias: 3, empates: 2, derrotas: 0, golesFavor: 10, golesContra: 5 },
  { nombre: "Atlético", victorias: 2, empates: 1, derrotas: 2, golesFavor: 8, golesContra: 7 },
  { nombre: "Sevilla", victorias: 1, empates: 1, derrotas: 3, golesFavor: 5, golesContra: 9 }
];

// Calcular puntos y diferencia de goles
const tabla = equipos.map(e => ({
  ...e,
  puntos: e.victorias * 3 + e.empates,
  diferencia: e.golesFavor - e.golesContra
}));

// Ordenar por puntos (desc) y diferencia (desc)
tabla.sort((a, b) => b.puntos - a.puntos || b.diferencia - a.diferencia);

// Mostrar tabla con posición
console.log("=== TABLA FÚTBOL SALA ===\n");
tabla.forEach((e, i) => {
  console.log(`${i+1}. ${e.nombre} | Pts:${e.puntos} | GF:${e.golesFavor} | GC:${e.golesContra} | Dif:${e.diferencia}`);
});

// Caso límite: todos empatados
const empateTotal = [
  { nombre: "A", victorias: 0, empates: 2, derrotas: 0, golesFavor: 2, golesContra: 2 },
  { nombre: "B", victorias: 0, empates: 2, derrotas: 0, golesFavor: 1, golesContra: 1 }
];