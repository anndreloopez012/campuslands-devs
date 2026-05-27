function calcularPuntosEscuadra(escuadra) {
    const puntosPorBajas = escuadra.bajas * 3;
    let puntosPorPosicion = 4;

    switch (escuadra.posicion) {
        case 1:
            puntosPorPosicion = 20;
            break;
        case 2:
            puntosPorPosicion = 14;
            break;
        case 3:
            puntosPorPosicion = 10;
            break;
    }

    return puntosPorBajas + puntosPorPosicion;
}

function generarRanking(escuadras) {
    if (!escuadras || escuadras.length === 0) {
        console.log("No hay escuadras registradas en el torneo.");
        return;
    }

    const escuadrasConPuntos = escuadras.map(escuadra => ({
        nombre: escuadra.nombre,
        puntosTotales: calcularPuntosEscuadra(escuadra)
    }));

    escuadrasConPuntos.sort((a, b) => b.puntosTotales - a.puntosTotales);

    console.log("=== RANKING FINAL DEL TORNEO ===");
    escuadrasConPuntos.forEach((escuadra, indice) => {
        console.log(`${indice + 1}. ${escuadra.nombre} - ${escuadra.puntosTotales} pts.`);
    });
}