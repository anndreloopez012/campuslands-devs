const escuadras = [
    { nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 },
    { nombre: 'Alpha', bajas: 4, posicion: 3, revividos: 1 },
    { nombre: 'Omega', bajas: 2, posicion: 5, revividos: 0 },
    { nombre: 'Titan', bajas: 6, posicion: 2, revividos: 4 }
];

function calcularRango(bajas, posicion){
    const puntosPorBajas=bajas * 3;
    let puntosPorPosicion=0;

    switch(posicion){
        case 1:
            puntosPorPosicion=20; 
            break;
        case 2:
            puntosPorPosicion=14; 
            break;
        case 3:
            puntosPorPosicion=10; 
            break;
        case 4:
            puntosPorPosicion=0; 
            break;

    }
    return puntosPorBajas + puntosPorPosicion;
}

const ranking = escuadras.map(e => ({
    nombre: e.nombre,
    puntos: calcularRango(e.bajas, e.posicion)
})).sort((a, b) => b.puntos - a.puntos);

console.log("Salida:");
ranking.forEach((equipo, indice) => {
    console.log(`${indice + 1}. ${equipo.nombre} - ${equipo.puntos} pts.`);
});


