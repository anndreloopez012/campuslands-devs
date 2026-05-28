/**
 * Solución: Ranking de escuadras battle royale
 * * Explicación del razonamiento:
 * 1. Definí un arreglo de objetos con datos de prueba basados en el juego.
 * 2. Creé una función para calcular los puntos de cada escuadra usando condicionales (if/else) para la posición.
 * 3. Utilicé el método `.sort()` para ordenar el arreglo original de mayor a menor puntaje final.
 * 4. Iteré el resultado para imprimirlo con el formato limpio solicitado por el instructor.
 */

const escuadras = [
    { nombre: 'Alpha Team', bajas: 5, posicion: 2, revividos: 1 },
    { nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 },
    { nombre: 'Delta Squad', bajas: 12, posicion: 4, revividos: 0 },
    { nombre: 'Shadows', bajas: 2, posicion: 3, revividos: 3 }
];

function calcularPuntaje(escuadra) {
    let puntosPorBajas = escuadra.bajas * 3;
    let puntosPorPosicion = 0;

    if (escuadra.posicion === 1) {
        puntosPorPosicion = 20;
    } else if (escuadra.posicion === 2) {
        puntosPorPosicion = 14;
    } else if (escuadra.posicion === 3) {
        puntosPorPosicion = 10;
    } else {
        puntosPorPosicion = 4;
    }
    return puntosPorBajas + puntosPorPosicion;
}

const rankingCalculado = escuadras.map(escuadra => {
    return {
        nombre: escuadra.nombre,
        puntosTotales: calcularPuntaje(escuadra)
    };
});

rankingCalculado.sort((a, b) => b.puntosTotales - a.puntosTotales);

console.log("--- RANKING FINAL DEL TORNEO BATTLE ROYALE ---");
rankingCalculado.forEach((escuadra, indice) => {
    console.log(`${indice + 1}. ${escuadra.nombre} - ${escuadra.puntosTotales} pts.`);
});