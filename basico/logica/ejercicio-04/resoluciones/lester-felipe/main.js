// Guarda jugadores con rol, kills, deaths, assists, oro y objetivos.
const equipo = [
    { rol: "Top", kills: 3, deaths: 5, assists: 4, oro: 11500, objetivos: 1 },
    { rol: "Jungla", kills: 5, deaths: 2, assists: 11, oro: 13000, objetivos: 4 },
    { rol: "Mid", kills: 8, deaths: 1, assists: 6, oro: 14500, objetivos: 1 },
    { rol: "ADC", kills: 10, deaths: 4, assists: 4, oro: 15000, objetivos: 2 },
    { rol: "Soporte", kills: 1, deaths: 6, assists: 15, oro: 8500, objetivos: 0 }
];

function analizarDesempeno(jugadores) {
    console.log("=== REPORTE DEL COACH MOBA ===\n");

    //  Calcula KDA y Valida si el oro supera 12000
    const jugadoresProcesados = jugadores.map(jugador => {
        // Evitamos la división por cero usando Math.max(deaths, 1)
        const kda = (jugador.kills + jugador.assists) / Math.max(jugador.deaths, 1);
        
        return {
            ...jugador,
            kda: Number(kda.toFixed(2)), // Redondeamos a 2 decimales
            oroExcelente: jugador.oro > 12000
        };
    });

    // Ordena por KDA de mayor a menor
    jugadoresProcesados.sort((a, b) => b.kda - a.kda);

    // Mostrar tabla de rendimiento general
    console.log("Rendimiento General (Ordenado por KDA):");
    jugadoresProcesados.forEach((j, index) => {
        console.log(`${index + 1}. [${j.rol}] KDA: ${j.kda} | Oro: ${j.oro} (${j.oroExcelente ? 'Excelente' : 'Insuficiente'}) | Objetivos: ${j.objetivos}`);
    });

    console.log("\n" + "─".repeat(40) + "\n");

    //  Muestra alertas para roles con pocos objetivos
    console.log("ALERTAS DE CONTROL DE OBJETIVOS:");
    let alertasEmitidas = false;

    jugadoresProcesados.forEach(j => {
        
        if (j.objetivos === 0 || (["Jungla", "Soporte"].includes(j.rol) && j.objetivos < 2)) {
            console.log(`- [ALERTA] El rol de ${j.rol} tiene muy baja participación en objetivos (${j.objetivos}). ¡Priorizar Dragones/Barón!`);
            alertasEmitidas = true;
        }
    });

    if (!alertasEmitidas) {
        console.log("- El equipo mantuvo un control de objetivos aceptable.");
    }
}

// Ejecutar el sistema analista
analizarDesempeno(equipo);