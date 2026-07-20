// 1. Datos de Entrada: Equipos con su historial competitivo base
const ligaFutsalCampus = [
    { nombre: "Atlético Coder FC", victorias: 4, empates: 1, derrotas: 0, golesFavor: 15, golesContra: 4 }, // Caso ejemplo del enunciado (13 pts)
    { nombre: "Deportivo Backend", victorias: 3, empates: 2, derrotas: 0, golesFavor: 18, golesContra: 10 }, // Empate en puntos (11 pts, GD: +8)
    { nombre: "Real Frontend", victorias: 3, empates: 2, derrotas: 0, golesFavor: 12, golesContra: 6 },     // Empate en puntos (11 pts, GD: +6)
    { nombre: "Cyber Security United", victorias: 1, empates: 0, derrotas: 4, golesFavor: 8, golesContra: 16 },
    { nombre: "Inter de Sistemas", victorias: 0, empates: 1, derrotas: 4, golesFavor: 5, golesContra: 22 }  // Caso límite: 0 victorias
];

/** Calcula las métricas estadísticas y renderiza la tabla de posiciones clasificada */
function actualizarTablaFutsal(equipos) {
    console.log("=== LIGA DE FÚTBOL SALA CAMPUSLANDS - TABLA OFICIAL ===\n");

    // Paso 2 y 3: Mapeo, cálculo estricto de puntos y diferencias de goles sin mutar originales
    const tablaProcesada = equipos.map(equipo => {
        const puntosCalculados = (equipo.victorias * 3) + equipo.empates;
        const diferenciaGolesCalculada = equipo.golesFavor - equipo.golesContra;

        return {
            ...equipo,
            puntos: puntosCalculados,
            diferenciaGoles: diferenciaGolesCalculada
        };
    });

    // Paso 4: Ordenamiento jerárquico secundario avanzado (Puntos -> Diferencia de Goles)
    tablaProcesada.sort((equipoA, equipoB) => {
        // Criterio principal: Puntos descendentes
        if (equipoB.puntos !== equipoA.puntos) {
            return equipoB.puntos - equipoA.puntos;
        }
        // Criterio secundario (Desempate): Gol Diferencia descendente
        return equipoB.diferenciaGoles - equipoA.diferenciaGoles;
    });

    // Paso 5: Imprimir la tabla estructurada con su respectiva posición
    console.log(String("POS | EQUIPO                 | PJ | V  | E  | D  | GF | GC | GD  | PTS").toUpperCase());
    console.log("-------------------------------------------------------------------------");

    tablaProcesada.forEach((equipo, indice) => {
        const posicion = String(indice + 1).padStart(2, '0');
        const nombreAlineado = equipo.nombre.padEnd(22, ' ');
        const partidosJugados = equipo.victorias + equipo.empates + equipo.derrotas;
        
        // Formateo visual del signo del gol diferencia
        const signoGD = equipo.diferenciaGoles > 0 ? "+" : "";
        const gdFormateado = `${signoGD}${equipo.diferenciaGoles}`.padEnd(3, ' ');

        console.log(
            `${posicion}  | ${nombreAlineado} | ${partidosJugados}  | ${equipo.victorias}  | ${equipo.empates}  | ${equipo.derrotas}  | ${equipo.golesFavor} | ${equipo.golesContra} | ${gdFormateado} | ${equipo.puntos} pts`
        );
    });
    console.log("-------------------------------------------------------------------------");
}

// Ejecución controlada del sistema analítico de la liga
actualizarTablaFutsal(ligaFutsalCampus);