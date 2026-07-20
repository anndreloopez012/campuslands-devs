//  Primero se crean los equipos con victorias, empates, derrotas, golesFavor y golesContra.
const equipos = [
    { nombre: "Inter", victorias: 5, empates: 2, derrotas: 1, golesFavor: 24, golesContra: 15 },
    { nombre: "Barça", victorias: 6, empates: 0, derrotas: 2, golesFavor: 28, golesContra: 18 },
    { nombre: "ElPozo", victorias: 4, empates: 3, derrotas: 1, golesFavor: 20, golesContra: 14 },
    { nombre: "Paraíso", victorias: 5, empates: 2, derrotas: 1, golesFavor: 22, golesContra: 16 },
    { nombre: "Palma", victorias: 3, empates: 1, derrotas: 4, golesFavor: 15, golesContra: 19 }
];

// Calcular puntos y diferencia de goles para cada equipo
equipos.forEach(equipo => {
    equipo.puntos = (equipo.victorias * 3) + equipo.empates;
    equipo.difGoles = equipo.golesFavor - equipo.golesContra;
});

//  Ordenar por puntos (descendiente) y luego por diferencia de goles (descendiente)
equipos.sort((a, b) => {
    if (b.puntos !== a.puntos) {
        return b.puntos - a.puntos;
    }
    return b.difGoles - a.difGoles;
});

//  Imprimimos la tabla con las posiciones
console.log("=== TABLA DE CLASIFICACIÓN DE FÚTBOL SALA ===");
console.log("Pos | Equipo             | Pts | PJ | V  | E  | D  | GF | GC | DG");
console.log("------------------------------------------------------------------");

equipos.forEach((equipo, indice) => {
    const posicion = indice + 1;
    const partidosJugados = equipo.victorias + equipo.empates + equipo.derrotas;
    
    // Formateo simple para mantener las columnas alineadas en la consola
    const nombreFormateado = equipo.nombre.padEnd(18, ' ');
    const pts = stringify(equipo.puntos);
    const pj = stringify(partidosJugados);
    const v = stringify(equipo.victorias);
    const e = stringify(equipo.empates);
    const d = stringify(equipo.derrotas);
    const gf = stringify(equipo.golesFavor);
    const gc = stringify(equipo.golesContra);
    const dg = stringify(equipo.difGoles, true);

    console.log(` ${posicion}  | ${nombreFormateado} | ${pts}  | ${pj}  | ${v}  | ${e}  | ${d}  | ${gf} | ${gc} | ${dg}`);
});

// Función auxiliar para formatear los números en la tabla de la consola
function stringify(valor, conSigno = false) {
    let texto = valor.toString();
    if (conSigno && valor > 0) texto = "+" + texto;
    return texto.padStart(2, ' ');
}