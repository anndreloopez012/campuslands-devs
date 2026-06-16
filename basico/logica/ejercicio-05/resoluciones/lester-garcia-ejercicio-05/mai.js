// Definición de Datos (La Jornada Cruda)
// Registro de los equipos.
const equiposIniciales = [
    { nombre: "Titanes FC", victorias: 5, empates: 2, derrotas: 1, golesFavor: 18, golesContra: 10 },
    { nombre: "Rayos de Aliga", victorias: 6, empates: 0, derrotas: 2, golesFavor: 22, golesContra: 15 },
    { nombre: "Gatos Negros", victorias: 4, empates: 3, derrotas: 1, golesFavor: 14, golesContra: 11 },
    { nombre: "Futsal Club", victorias: 5, empates: 2, derrotas: 1, golesFavor: 20, golesContra: 12 },
    { nombre: "Deportivo Humildad", victorias: 2, empates: 1, derrotas: 5, golesFavor: 9, golesContra: 19 }
];

// Procesamiento de la Información (Lógica de Negocio)
function procesarTablaPosiciones(listaEquipos) {
    // Calcular puntos y diferencia de goles sin mutar el arreglo original (.map)
    const equiposProcesados = listaEquipos.map(equipo => {
        const puntos = (equipo.victorias * 3) + equipo.empates;
        const diferenciaGoles = equipo.golesFavor - equipo.golesContra;
        
        return {
            ...equipo,
            puntos: puntos,
            diferenciaGoles: diferenciaGoles
        };
    });

    // Ordenar por puntos de forma descendente. 
    // Si hay empate en puntos, se desempata por diferencia de goles.
    equiposProcesados.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos; // Mayor puntaje primero
        }
        return b.diferenciaGoles - a.diferenciaGoles; // Mayor diferencia de goles primero (desempate)
    });

    return equiposProcesados;
}

//  Presentación de Resultados (Interfaz de Usuario por Consola)
function imprimirTabla(tablaOrdenada) {
    console.log("=====================================================================");
    console.log("             TABLA DE POSICIONES - LIGA DE FÚTBOL SALA               ");
    console.log("=====================================================================");
    console.log("POS | EQUIPO             | PTS | PJ | V  | E  | D  | GF | GC | DG ");
    console.log("---------------------------------------------------------------------");

    //Imprimir tabla incluyendo la posición dinámica
    tablaOrdenada.forEach((equipo, indice) => {
        const posicion = indice + 1;
        const partidosJugados = equipo.victorias + equipo.empates + equipo.derrotas;
        
        // Formateo visual simple para alinear las columnas en la consola
        const posStr = posicion.toString().padEnd(3);
        const nomStr = equipo.nombre.padEnd(18);
        const ptsStr = equipo.puntos.toString().padEnd(3);
        const pjStr  = partidosJugados.toString().padEnd(2);
        const vStr   = equipo.victorias.toString().padEnd(2);
        const eStr   = equipo.empates.toString().padEnd(2);
        const dStr   = equipo.derrotas.toString().padEnd(2);
        const gfStr  = equipo.golesFavor.toString().padEnd(2);
        const gcStr  = equipo.golesContra.toString().padEnd(2);
        const dgStr  = (equipo.diferenciaGoles > 0 ? `+${equipo.diferenciaGoles}` : equipo.diferenciaGoles).toString().padEnd(2);

        console.log(`${posStr} | ${nomStr} | ${ptsStr} | ${pjStr} | ${vStr} | ${eStr} | ${dStr} | ${gfStr} | ${gcStr} | ${dgStr}`);
    });
    console.log("=====================================================================");
}

// --- Ejecución del Sistema ---
const tablaOficial = procesarTablaPosiciones(equiposIniciales);
imprimirTabla(tablaOficial);