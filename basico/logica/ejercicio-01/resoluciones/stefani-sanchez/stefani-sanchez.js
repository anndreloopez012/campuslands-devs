

const escuadras = [
    {
        nombre: "Nova",
        bajas: 8,
        posicion: 1,
        revividos: 2
    },
    {
        nombre: "Shadow",
        bajas: 5,
        posicion: 2,
        revividos: 1
    },
    {
        nombre: "Titan",
        bajas: 2,
        posicion: 4,
        revividos: 0
    },
    {
        nombre: "Ghost",
        bajas: 0,
        posicion: 3,
        revividos: 3
    }
];


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

const ranking = escuadras.map((escuadra) => {

    const puntosBajas = escuadra.bajas * 3;

    const puntosPosicion = calcularPuntosPosicion(escuadra.posicion);

    const puntosTotales = puntosBajas + puntosPosicion;

    return {
        ...escuadra,
        puntos: puntosTotales
    };
});


ranking.sort((a, b) => b.puntos - a.puntos);


console.log("===== RANKING FINAL =====");

ranking.forEach((escuadra, index) => {
    console.log(
        `${index + 1}. ${escuadra.nombre} - ${escuadra.puntos} pts`
    );
});

