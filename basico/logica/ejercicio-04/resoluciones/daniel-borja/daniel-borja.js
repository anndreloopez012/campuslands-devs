// 1. Datos de Entrada: Arreglo de jugadores bajo el análisis del Coach
const listaJugadores = [
    { rol: "Top", kills: 4, deaths: 2, assists: 8, oro: 13500, objetivos: 4 },
    { rol: "Jungla", kills: 7, deaths: 0, assists: 5, oro: 11800, objetivos: 1 }, // Caso límite: 0 deaths
    { rol: "Mid", kills: 12, deaths: 4, assists: 6, oro: 15100, objetivos: 3 },
    { rol: "ADC", kills: 8, deaths: 5, assists: 4, oro: 14200, objetivos: 5 },
    { rol: "Soporte", kills: 1, deaths: 6, assists: 15, oro: 9500, objetivos: 0 } // Caso límite: 0 objetivos
];

/**
 * Procesa y evalúa las métricas operativas de la escuadra */
function evaluarDesempenoMOBA(jugadores) {
    console.log("=== INFORME TÉCNICO DEL COACH - CAMPUSLANDS ESPORTS ===\n");

    // Paso 2 y 3: Mapeo, cálculo de KDA (evitando división por 0) y validación de oro económico
    const jugadoresProcesados = jugadores.map(jugador => {
        // Operación segura: si deaths es 0, usamos 1 como denominador matemático
        const divisorDeaths = jugador.deaths === 0 ? 1 : jugador.deaths;
        const kdaCalculado = ((jugador.kills + jugador.assists) / divisorDeaths).toFixed(2);
        
        // Validación de rendimiento económico continuo
        const superaMetaOro = jugador.oro > 12000;

        return {
            ...jugador,
            kda: parseFloat(kdaCalculado),
            eficienciaEconomica: superaMetaOro
        };
    });

    // Paso 4: Ordenamiento algorítmico descendente basado en el KDA
    jugadoresProcesados.sort((jugadorA, jugadorB) => jugadorB.kda - jugadorA.kda);

    // Renderizado de métricas principales ordenadas en consola
    jugadoresProcesados.forEach((jugador, indice) => {
        console.log(`${indice + 1}. Rol: [${jugador.rol}] | KDA: ${jugador.kda} (${jugador.kills}/${jugador.deaths}/${jugador.assists})`);
        console.log(`   Oro Acumulado: ${jugador.oro} -> ${jugador.eficienciaEconomica ? "✅ META SUPERADA" : "❌ DEFICIT ECONOMICO"}`);
        console.log(`   Objetivos Controlados: ${jugador.objetivos}`);
        
        // Paso 5: Alertas operativas en tiempo real para roles con control deficiente de objetivos
        // Se considera alerta si el jugador posee menos de 2 objetivos estratégicos
        if (jugador.objetivos < 2) {
            console.log(`    ALERTA OPERATIVA: El rol [${jugador.rol}] muestra baja participación en objetivos clave del mapa.`);
        }
        console.log("-------------------------------------------------------");
    });
}

// Ejecución controlada del programa principal
evaluarDesempenoMOBA(listaJugadores);