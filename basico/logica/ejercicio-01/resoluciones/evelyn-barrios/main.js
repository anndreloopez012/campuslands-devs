//datos de entrada 
//ejercicio ranking de escuadras tipo battle royale

const listaEscuadras = [
    {nombre: "Nova", bajas: 8, posicion: 1, revividos: 2},
    {nombre: "Delta", bajas: 5, posicion: 3, revividos: 1},
    {nombre: "Fenix", bajas: 12, posicion: 2, revividos: 0},
    {nombre: "Delta", bajas: 2, posicion: 5, revividos: 4}
];


//2. función dedicada a calcular el puntaje de una sola escuadra
function calcularPuntosEscuadra(escuadra){
    const puntosPorBajas = escuadra.bajas * 3;
    let puntosPorPosicion = 0;
    if (escuadra.posicion === 1){
        puntosPorPosicion = 20;
    }else if (escuadra.posicion === 2){
        puntosPorPosicion = 14;
    }else if (escuadra.posicion === 3){
        puntosPorPosicion = 10;
    }else {
        puntosPorPosicion = 4;
    }
    return puntosPorBajas + puntosPorPosicion;
}


// funcion que ordena el ranking, calcula el puntaje 
function generarRanking(escuadras) {
    if (escuadras.length === 0) {
        console.log("No hay escuadras registradas en el torneo.");
        return;
    }

    const escuadrasConPuntos = escuadras.map(function(escuadra) {
        return {
            nombre: escuadra.nombre,
            puntosTotales: calcularPuntosEscuadra(escuadra)
        };
    });

    escuadrasConPuntos.sort(function(a, b) {
        return b.puntosTotales - a.puntosTotales;
    });

    console.log("=== RANKING FINAL DEL TORNEO BATTLE ROYALE ===");
    escuadrasConPuntos.forEach(function(escuadra, indice) {
        const numeroPosicion = indice + 1;
        console.log(numeroPosicion + ". " + escuadra.nombre + " - " + escuadra.puntosTotales + " pts.");
    });
}

generarRanking(listaEscuadras);
