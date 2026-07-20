// 1. Arreglo de objetos con los datos de las escuadras
const escuadras = [
    { nombre: "Alpha Team", bajas: 12, posicion: 1, revividos: 4 },
    { nombre: "Beta Squad", bajas: 5, posicion: 5, revividos: 2 },
    { nombre: "Delta Force", bajas: 15, posicion: 3, revividos: 1 },
    { nombre: "Omega Crew", bajas: 8, posicion: 2, revividos: 6 },
    { nombre: "Ghost Riders", bajas: 2, posicion: 10, revividos: 0 }
];

// 2. Función para calcular el puntaje total de una escuadra
const calcularPuntaje = (escuadra) => {
    let puntosPosicion = 4; // Por defecto para "otros" por encima del top 3
    
    if (escuadra.posicion === 1) puntosPosicion = 20;
    else if (escuadra.posicion === 2) puntosPosicion = 14;
    else if (escuadra.posicion === 3) puntosPosicion = 10;

    const puntosBajas = escuadra.bajas * 3;
    
    // Nota: El requerimiento no especificó puntos por revividos, 
    // pero se mantiene la propiedad en el objeto. Si sumaran, se añadirían aquí.
    return puntosBajas + puntosPosicion;
};

// 3. Procesar, ordenar y mostrar el ranking
const generarRanking = (listaEscuadras) => {
    // Calculamos los puntos y mapeamos a un nuevo arreglo para no mutar el original
    const rankingCalculado = listaEscuadras.map(escuadra => ({
        nombre: escuadra.nombre,
        puntajeTotal: calcularPuntaje(escuadra)
    }));

    // Ordenar de mayor a menor puntaje
    rankingCalculado.sort((a, b) => b.puntajeTotal - a.puntajeTotal);

    // Mostrar el ranking final en consola
    console.log("=== RANKING BATTLE ROYALE ===");
    rankingCalculado.forEach((escuadra, indice) => {
        console.log(`${indice + 1}. ${escuadra.nombre} - ${escuadra.puntajeTotal} pts`);
    });
};

// Ejecución del programa
generarRanking(escuadras);