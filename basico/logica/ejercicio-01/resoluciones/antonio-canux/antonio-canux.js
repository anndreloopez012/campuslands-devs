const escuadras = [
    {
        nombre: "Nova",
        bajas: 8,
        posicion: 1,
        revividos: 2
    },
    {
        nombre: "Hacker",
        bajas: 7,
        posicion: 2,
        revividos: 3
    },
    {
        nombre: "Campers",
        bajas: 12,
        posicion: 3,
        revividos: 4
    },
    {
        nombre: "Ninja",
        bajas: 6,
        posicion: 4,
        revividos: 2
    }
]

function calcularPuntos(escuadra){
    let puntosPosicion;

    if (escuadra.posicion === 1){
        puntosPosicion = 20;
    }else if (escuadra.posicion === 2){
        puntosPosicion = 14;
    }else if (escuadra.posicion === 3){
        puntosPosicion = 10;   
    }else {
        puntosPosicion = 4;
    }

    return (escuadra.bajas * 3) + puntosPosicion
}

escuadras.forEach((escuadra) => {
    escuadra.puntos = calcularPuntos(escuadra);
});

escuadras.sort((a, b) => b.puntos - a.puntos);

escuadras.forEach((escuadra, index) => {
  console.log(
    `${index + 1}. ${escuadra.nombre} - ${escuadra.puntos} pts`
  );
});
