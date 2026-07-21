const catalogoPeliculas = [
    { titulo: "El Exorcista", duracionMin: 122, sustos: 5, rating: 8.1 },
    { titulo: "Scream", duracionMin: 111, sustos: 8, rating: 7.4 },
    { titulo: "Halloween", duracionMin: 91, sustos: 6, rating: 7.7 },
    { titulo: "La Monja", duracionMin: 96, sustos: 15, rating: 5.3 },
    { titulo: "Hereditary", duracionMin: 127, sustos: 4, rating: 7.3 },
    { titulo: "El Conjuro", duracionMin: 112, sustos: 10, rating: 7.5 }
];

const peliculasAptas = catalogoPeliculas.filter(pelicula => pelicula.rating >= 7);

const LIMITE_TIEMPO = 360;
let tiempoAcumulado = 0;
let sustosTotales = 0;
const listaMaraton = [];

for (let i = 0; i < peliculasAptas.length; i++) {
    const peliculaActual = peliculasAptas[i];

    if (tiempoAcumulado + peliculaActual.duracionMin <= LIMITE_TIEMPO) {
        listaMaraton.push(peliculaActual.titulo);
        tiempoAcumulado += peliculaActual.duracionMin;
        sustosTotales += peliculaActual.sustos;
    }
}

console.log("=== PLAN DE MARATÓN DE TERROR ===");
console.log("Películas seleccionadas:", listaMaraton.join(", "));
console.log(`Duración total: ${tiempoAcumulado} minutos`);
console.log(`Total de sustos esperados: ${sustosTotales}`);