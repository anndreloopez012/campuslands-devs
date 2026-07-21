// Nombre: Stefani Sanchez
// Ejercicio 05 - Tabla de fútbol sala
//
// Razonamiento: Se calculan puntos (victorias*3 + empates) y diferencia de goles.
// Luego se ordena primero por puntos y como desempate por diferencia de goles.

const equipos = [
  { nombre: "Los Tigres",  victorias: 5, empates: 2, derrotas: 1, golesFavor: 22, golesContra: 10 },
  { nombre: "Rayo FC",     victorias: 4, empates: 3, derrotas: 1, golesFavor: 18, golesContra: 12 },
  { nombre: "Estrellas",   victorias: 4, empates: 1, derrotas: 3, golesFavor: 15, golesContra: 14 },
  { nombre: "Dragones",    victorias: 3, empates: 3, derrotas: 2, golesFavor: 13, golesContra: 13 },
  { nombre: "Condores",    victorias: 2, empates: 2, derrotas: 4, golesFavor: 10, golesContra: 18 },
  { nombre: "Galacticos",  victorias: 0, empates: 1, derrotas: 7, golesFavor:  5, golesContra: 25 },
];

function calcularTabla(lista) {
  return lista
    .map(equipo => {
      const puntos          = equipo.victorias * 3 + equipo.empates;
      const diferenciaGoles = equipo.golesFavor - equipo.golesContra;
      const partidosJugados = equipo.victorias + equipo.empates + equipo.derrotas;
      return { ...equipo, puntos, diferenciaGoles, partidosJugados };
    })
    .sort((a, b) => b.puntos !== a.puntos ? b.puntos - a.puntos : b.diferenciaGoles - a.diferenciaGoles);
}

function imprimirTabla(tabla) {
  console.log("\n=== TABLA DE FUTBOL SALA ===");
  console.log("Pos | Equipo       | PJ | V | E | D | GF | GC | DG | Pts");
  tabla.forEach((eq, i) => {
    console.log(
      ` ${i + 1}  | ${eq.nombre.padEnd(12)} |  ${eq.partidosJugados} | ${eq.victorias} | ${eq.empates} | ${eq.derrotas} | ${String(eq.golesFavor).padStart(2)} | ${String(eq.golesContra).padStart(2)} | ${String(eq.diferenciaGoles).padStart(2)} | ${eq.puntos}`
    );
  });
}

const tabla = calcularTabla(equipos);
imprimirTabla(tabla);

// Validacion: 4V 1E 0D => 4*3+1 = 13 puntos
console.log("\nValidacion: 4V 1E 0D =", 4 * 3 + 1, "puntos (esperado 13)");
