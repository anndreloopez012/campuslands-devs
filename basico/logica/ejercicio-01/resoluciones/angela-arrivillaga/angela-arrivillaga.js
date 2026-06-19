let escuadras = [
    { nombre: 'Hallownest', bajas: 8, posicion: 1, revividos: 2 },
    { nombre: 'Dirtmouth', bajas: 5, posicion: 2, revividos: 1 },
    { nombre: 'Deepnest', bajas: 10, posicion: 3, revividos: 0 }
];

// funcion para calcular puntos
function calcularPuntos(escuadra) {
    let puntos = escuadra.bajas * 3;
    
    if (escuadra.posicion === 1) {
        puntos += 20;
    } else if (escuadra.posicion === 2) {
        puntos += 14;
    } else if (escuadra.posicion === 3) {
        puntos += 10;
    } else {
        puntos += 4;
    }
    
    return puntos;
}

// asignamos puntos
escuadras.forEach(escuadra => {
    escuadra.puntos = calcularPuntos(escuadra);
});

// ordenamos de mayor a menor
escuadras.sort((a, b) => b.puntos - a.puntos);

// ranking
console.log("--- Ranking de Escuadras ---");
escuadras.forEach((e, index) => {
    console.log(`${index + 1}. ${e.nombre} - ${e.puntos} pts.`);
});