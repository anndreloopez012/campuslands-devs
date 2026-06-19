// validar.js — Ejercicio 05: Tabla de fútbol sala

const equipos = [
  { nombre: "Halcones FC",    victorias: 4, empates: 1, derrotas: 0, golesFavor: 18, golesContra: 7  },
  { nombre: "Tigres Sala",    victorias: 3, empates: 2, derrotas: 0, golesFavor: 14, golesContra: 8  },
  { nombre: "Rayo Indoor",    victorias: 2, empates: 1, derrotas: 2, golesFavor: 10, golesContra: 11 },
  { nombre: "Cóndores",       victorias: 1, empates: 0, derrotas: 4, golesFavor: 6,  golesContra: 16 },
  { nombre: "Sombra Azul",    victorias: 0, empates: 0, derrotas: 5, golesFavor: 3,  golesContra: 20 },
];

const equipoEmpate = { nombre: "Empate Puro", victorias: 0, empates: 5, derrotas: 0, golesFavor: 10, golesContra: 10 };

function calcularPuntos(victorias, empates) {
  return victorias * 3 + empates;
}

function calcularDiferencia(golesFavor, golesContra) {
  return golesFavor - golesContra;
}

function construirFila(equipo) {
  const puntos     = calcularPuntos(equipo.victorias, equipo.empates);
  const diferencia = calcularDiferencia(equipo.golesFavor, equipo.golesContra);
  return { ...equipo, puntos, diferencia };
}

function ordenarTabla(filas) {
  return [...filas].sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    return b.diferencia - a.diferencia;
  });
}

function imprimirTabla(filas) {
  console.log("\nPos | Equipo           | PJ | V  | E  | D  | GF | GC | Dif | Pts");
  console.log("----+------------------+----+----+----+----+----+----+-----+----");
  filas.forEach((fila, indice) => {
    const pos    = String(indice + 1).padStart(3);
    const nombre = fila.nombre.padEnd(16);
    const pj     = String(fila.victorias + fila.empates + fila.derrotas).padStart(3);
    const v      = String(fila.victorias).padStart(3);
    const e      = String(fila.empates).padStart(3);
    const d      = String(fila.derrotas).padStart(3);
    const gf     = String(fila.golesFavor).padStart(3);
    const gc     = String(fila.golesContra).padStart(3);
    const dif    = String(fila.diferencia).padStart(4);
    const pts    = String(fila.puntos).padStart(3);
    console.log(`${pos} | ${nombre} | ${pj} | ${v} | ${e} | ${d} | ${gf} | ${gc} | ${dif} | ${pts}`);
  });
}

function generarTabla(listaEquipos) {
  if (!listaEquipos || listaEquipos.length === 0) {
    console.log("Sin equipos registrados — la tabla está vacía.");
    return;
  }
  const filas     = listaEquipos.map(construirFila);
  const ordenadas = ordenarTabla(filas);
  imprimirTabla(ordenadas);
}

// Caso normal: cinco equipos con resultados distintos
console.log("=== CASO NORMAL: Liga de fútbol sala ===");
generarTabla(equipos);

// Caso límite: equipo con solo empates (0 victorias, 0 derrotas)
console.log("\n=== CASO LÍMITE: equipo con puro empate ===");
generarTabla([equipoEmpate, equipos[0]]);

// Caso vacío
console.log("\n=== CASO VACÍO: lista sin equipos ===");
generarTabla([]);
