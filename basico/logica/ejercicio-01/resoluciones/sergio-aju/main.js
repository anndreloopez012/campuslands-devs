const escuadrasParticipantes = [
    { nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 },
    { nombre: 'Alpha Team', bajas: 12, posicion: 4, revividos: 1 },
    { nombre: 'Shadows', bajas: 3, posicion: 2, revividos: 4 },
    { nombre: 'Ghost Riders', bajas: 0, posicion: 3, revividos: 0 }, // Caso límite: Valores en cero
    { nombre: 'Vipers', bajas: 6, posicion: 12, revividos: 3 }
];


function calcularPuntajeTotal(escuadra) {
    const PUNTOS_POR_BAJA = 3;
    let puntosPorSupervivencia = 0;
   if (escuadra.posicion === 1) {
        puntosPorSupervivencia = 20;
    } else if (escuadra.posicion === 2) {
        puntosPorSupervivencia = 14;
    } else if (escuadra.posicion === 3) {
        puntosPorSupervivencia = 10;
    } else {
        puntosPorSupervivencia = 4; 
    }


    const puntosDeBajas = escuadra.bajas * PUNTOS_POR_BAJA;
    
    return puntosDeBajas + puntosPorSupervivencia;
}

function generarRankingTorneo() {
   const rankingProcesado = escuadrasParticipantes.map(escuadra => {
        return {
            nombre: escuadra.nombre,
            bajas: escuadra.bajas,
            posicion: escuadra.posicion,
            puntosTotales: calcularPuntajeTotal(escuadra)
        };
    });

   rankingProcesado.sort((escuadraA, escuadraB) => {
        return escuadraB.puntosTotales - escuadraA.puntosTotales;
    });

    const tablaContenedor = document.getElementById('tabla-ranking');
    tablaContenedor.innerHTML = '';

    rankingProcesado.forEach((escuadra, indice) => {
        const puestoActual = indice + 1;
        const filaHTML = `
            <tr>
                <td style="font-weight: bold; color: #ff4a4a;">#${puestoActual}</td>
                <td>${escuadra.nombre}</td>
                <td>${escuadra.bajas}</td>
                <td>Top ${escuadra.posicion}</td>
                <td style="font-weight: bold; color: #4aff4a;">${escuadra.puntosTotales} pts</td>
            </tr>
        `;
        tablaContenedor.innerHTML += filaHTML;
       console.log(`${puestoActual}. ${escuadra.nombre} - ${escuadra.puntosTotales} pts.`);
    });
}

generarRankingTorneo();