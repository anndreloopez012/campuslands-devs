const escuadras = [
    {
        nombre: "Alpha",
        bajas: 5,
        posicion: 1,
        revividos: 2
    },
    {
        nombre: "Bravo",
        bajas: 3,
        posicion: 2,
        revividos: 1
    },
    {
        nombre: "Charlie",
        bajas: 1,
        posicion: 4,
        revividos: 0
    },
    {
        nombre: "Delta",
        bajas: 4,
        posicion: 3,
        revividos: 3
    }
];

// Función para calcular puntos según posición
function calcularPuntosPosicion(posicion) {
    if (posicion === 1) {
        return 20;
    }

    if (posicion === 2) {
        return 14;
    }

    if (posicion === 3) {
        return 10;
    }

    return 4;
}


for (let i = 0; i < escuadras.length; i++) {
    const escuadra = escuadras[i];

    const puntosPorBajas = escuadra.bajas * 3;
    const puntosPorPosicion = calcularPuntosPosicion(escuadra.posicion);

    escuadra.puntosTotales = puntosPorBajas + puntosPorPosicion;
}

escuadras.sort(function (a, b) {
    return b.puntosTotales - a.puntosTotales;
});

console.log("=== RANKING FINAL ===");

for (let i = 0; i < escuadras.length; i++) {
    const escuadra = escuadras[i];

    console.log(
        `${i + 1}. ${escuadra.nombre} - ${escuadra.puntosTotales} puntos`
    );
}