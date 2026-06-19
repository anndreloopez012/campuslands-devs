/**
 * Nombre: Sergio Aju
 * Ejercicio: Tabla de posiciones - Fútbol Sala
 */

const equipos = [
    { nombre: "Leones FC", V: 4, E: 1, D: 0, GF: 10, GC: 2 },
    { nombre: "Tigres Sala", V: 3, E: 2, D: 0, GF: 8, GC: 3 },
    { nombre: "Furia Roja", V: 4, E: 0, D: 1, GF: 12, GC: 5 }
];

function calcularTabla(listaEquipos) {
    // 1. Calcular puntos y diferencia
    const tablaProcesada = listaEquipos.map(equipo => {
        return {
            ...equipo,
            puntos: (equipo.V * 3) + equipo.E,
            difGoles: equipo.GF - equipo.GC
        };
    });

    // 2. Ordenar por puntos (descendente) y luego por difGoles (descendente)
    tablaProcesada.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos;
        }
        return b.difGoles - a.difGoles;
    });

    // 3. Imprimir tabla
    console.log("Tabla de Posiciones:");
    tablaProcesada.forEach((equipo, index) => {
        console.log(`${index + 1}. ${equipo.nombre} | Pts: ${equipo.puntos} | DG: ${equipo.difGoles}`);
    });
}

calcularTabla(equipos);