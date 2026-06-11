/**
 * EJERCICIO: Ranking de escuadras Battle Royale
 * Objetivo: Calcular puntaje total y generar ranking ordenado.
 */

// 1. Arreglo de objetos para guardar las escuadras
const escuadras = [
    { nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 },
    { nombre: 'Shadow', bajas: 5, posicion: 3, revividos: 1 },
    { nombre: 'Titans', bajas: 12, posicion: 2, revividos: 4 },
    { nombre: 'Alpha', bajas: 2, posicion: 10, revividos: 0 }
];

/**
 * Función para calcular los puntos de una escuadra
 * Reglas: bajas * 3, top 1 = 20, top 2 = 14, top 3 = 10, otros = 4.
 */
function calcularPuntaje(escuadra) {
    let puntosBajas = escuadra.bajas * 3;
    let puntosPosicion = 0;

    if (escuadra.posicion === 1) {
        puntosPosicion = 20;
    } else if (escuadra.posicion === 2) {
        puntosPosicion = 14;
    } else if (escuadra.posicion === 3) {
        puntosPosicion = 10;
    } else {
        puntosPosicion = 4;
    }

    return puntosBajas + puntosPosicion;
}

// 2. Procesar datos y generar ranking
function generarRanking(listaEscuadras) {
    // Calculamos puntos para cada una
    const resultados = listaEscuadras.map(escuadra => {
        return {
            nombre: escuadra.nombre,
            puntosTotales: calcularPuntaje(escuadra)
        };
    });

    // 4. Ordenar de mayor a menor puntaje
    resultados.sort((a, b) => b.puntosTotales - a.puntosTotales);

    // 5. Mostrar el ranking con el formato solicitado
    console.log("--- RANKING DEL TORNEO ---");
    resultados.forEach((escuadra, indice) => {
        console.log(`${indice + 1}. ${escuadra.nombre} - ${escuadra.puntosTotales} pts.`);
    });
}

// Validación
generarRanking(escuadras);