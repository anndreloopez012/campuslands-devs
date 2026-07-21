// ======================================
// Catálogo de películas de terror
// ======================================

const peliculas = [
    {
        titulo: "El Conjuro",
        duracionMin: 112,
        sustos: 18,
        rating: 7.5
    },
    {
        titulo: "Hereditary",
        duracionMin: 127,
        sustos: 12,
        rating: 7.3
    },
    {
        titulo: "La Monja",
        duracionMin: 96,
        sustos: 20,
        rating: 5.3
    },
    {
        titulo: "Smile",
        duracionMin: 115,
        sustos: 16,
        rating: 6.8
    },
    {
        titulo: "It",
        duracionMin: 135,
        sustos: 22,
        rating: 7.4
    },
    {
        titulo: "Siniestro",
        duracionMin: 110,
        sustos: 25,
        rating: 6.9
    },
    {
        titulo: "Insidious",
        duracionMin: 103,
        sustos: 21,
        rating: 7.1
    }
];

console.log("=== Catálogo de Películas ===");
console.table(peliculas);

// ======================================
// 1. Filtrar películas con rating >= 7
// ======================================

const peliculasRecomendadas = peliculas.filter(
    pelicula => pelicula.rating >= 7
);

console.log("\n=== Películas con rating mayor o igual a 7 ===");
console.table(peliculasRecomendadas);

// ======================================
// 2. Acumular películas sin superar
//    los 360 minutos
// ======================================

let tiempo = 0;

const maraton = [];

for (const pelicula of peliculasRecomendadas) {

    if (tiempo + pelicula.duracionMin <= 360) {
        maraton.push(pelicula);
        tiempo += pelicula.duracionMin;
    }

}

console.log("\n=== Maratón (máximo 360 minutos) ===");
console.table(maraton);

// ======================================
// 3. Calcular total de sustos
// ======================================

const totalSustos = maraton.reduce(
    (total, pelicula) => total + pelicula.sustos,
    0
);

console.log(`\nTotal de sustos: ${totalSustos}`);

// ======================================
// 4. Mostrar lista final
// ======================================

console.log("\n=== Lista Final ===");

maraton.forEach((pelicula, indice) => {

    console.log(
        `${indice + 1}. ${pelicula.titulo} | ${pelicula.duracionMin} min | Rating: ${pelicula.rating}`
    );

});

console.log(`\nDuración total: ${tiempo} minutos`);
