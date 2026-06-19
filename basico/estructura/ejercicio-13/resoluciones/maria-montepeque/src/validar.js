// validar.js — casos de prueba para tabla-posiciones.js

const { calcularTabla } = require("./tabla-posiciones");

// Caso 1: Partidos normales con ganador, empate y partido pendiente
const partidosNormales = [
  {
    id: "partido-001",
    local: "comunicaciones-fc",
    visitante: "municipal-fc",
    goles_local: 2,
    goles_visitante: 1,
    estado: "finalizado"
  },
  {
    id: "partido-002",
    local: "xelajú-mc",
    visitante: "antigua-gfc",
    goles_local: 0,
    goles_visitante: 0,
    estado: "finalizado"
  },
  {
    id: "partido-003",
    local: "municipal-fc",
    visitante: "antigua-gfc",
    goles_local: null,
    goles_visitante: null,
    estado: "pendiente"
  }
];

console.log("=== Caso 1: Partidos normales (incluye pendiente) ===");
const tablaCase1 = calcularTabla(partidosNormales);
tablaCase1.forEach(fila => {
  console.log(
    `${fila.posicion}. ${fila.equipo} — PJ:${fila.partidos_jugados} V:${fila.victorias} E:${fila.empates} D:${fila.derrotas} GF:${fila.goles_favor} GC:${fila.goles_contra} DG:${fila.diferencia_goles} Pts:${fila.puntos}`
  );
});

// Caso 2: Un solo partido (caso límite con un mínimo de equipos)
const unSoloPartido = [
  {
    id: "partido-unico",
    local: "cobán-imperial",
    visitante: "deportivo-petapa",
    goles_local: 0,
    goles_visitante: 0,
    estado: "finalizado"
  }
];

console.log("\n=== Caso 2: Un solo partido (empate, mínimo de datos) ===");
const tablaCase2 = calcularTabla(unSoloPartido);
tablaCase2.forEach(fila => {
  console.log(
    `${fila.posicion}. ${fila.equipo} — Pts:${fila.puntos} V:${fila.victorias} E:${fila.empates}`
  );
});

// Caso 3: Lista vacía (entrada nula)
console.log("\n=== Caso 3: Lista vacía ===");
const tablaCase3 = calcularTabla([]);
console.log(`Resultado: ${tablaCase3.length === 0 ? "arreglo vacío (correcto)" : "error inesperado"}`);
