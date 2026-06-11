/**
 * Lógica de Procesamiento de Tabla de Clasificación de Esports
 * Desarrollado por: Allison Vargas
 */

// Calcula el ratio de victorias evitando divisiones por cero indeterminadas
const obtenerPorcentajeVictorias = (victorias, derrotas) => {
    const partidasTotales = victorias + derrotas;
    if (partidasTotales === 0) return 0; // <-- Aquí tenía el typo 'partidastotales'
    return Math.round((victorias / partidasTotales) * 100);
};

// Genera un nuevo arreglo ordenado por rendimiento descendente
const procesarOrdenRanking = (listaJugadores) => {
    return [...listaJugadores].sort((jugadorA, jugadorB) => {
        const rateA = obtenerPorcentajeVictorias(jugadorA.victorias, jugadorA.derrotas);
        const rateB = obtenerPorcentajeVictorias(jugadorB.victorias, jugadorB.derrotas);
        return rateB - rateA; // Mayor a menor
    });
};

// Renderiza las filas dentro del nodo del DOM correspondiente
const construirInterfazRanking = (datosJugadores) => {
    const contenedorLista = document.getElementById("ranking-list");
    contenedorLista.innerHTML = ""; // Limpieza del estado previo

    // Manejo del caso límite: Datos vacíos
    if (!datosJugadores || datosJugadores.length === 0) {
        contenedorLista.innerHTML = `<li class="ranking-status">Sin registros actuales en la base de datos de la temporada.</li>`;
        return;
    }

    const jugadoresOrdenados = procesarOrdenRanking(datosJugadores);

    jugadoresOrdenados.forEach((jugador, indice) => {
        const posicionActual = indice + 1;
        const winrateCalculado = obtenerPorcentajeVictorias(jugador.victorias, jugador.derrotas);

        const filaItem = document.createElement("li");
        // Asignación de clases estructurales y de podio decorativo
        filaItem.className = `player-card podium-${posicionActual}`;
        
        filaItem.innerHTML = `
            <div class="player-position">#${posicionActual}</div>
            <div class="player-details">
                <span class="player-name">${jugador.nick}</span>
                <span class="player-role">${jugador.rol}</span>
            </div>
            <div class="player-performance">
                <div class="player-winrate">${winrateCalculado}% WR</div>
                <div class="player-ratio">
                    <span class="stat-w">${jugador.victorias}V</span> - 
                    <span class="stat-l">${jugador.derrotas}D</span>
                </div>
            </div>
        `;
        
        contenedorLista.appendChild(filaItem);
    });
};

// Inicializador asíncrono del módulo
const inicializarAplicacion = async () => {
    try {
        const peticion = await fetch("data/players.json");
        if (!peticion.ok) throw new Error("Fallo en la comunicación con el archivo de origen");
        
        const datosCargados = await peticion.json();
        construirInterfazRanking(datosCargados);
    } catch (error) {
        console.error("Fallo del aplicativo en inicialización:", error);
        const contenedorLista = document.getElementById("ranking-list");
        contenedorLista.innerHTML = `
            <li class="ranking-status" style="color: var(--color-loss);">
                Error crítico: No se ha podido procesar el origen JSON. Asegúrate de ejecutar este entorno con Live Server.
            </li>
        `;
    }
};

// Disparo de la lógica
inicializarAplicacion();