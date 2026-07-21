const peliculas = [
    { titulo: "El Conjuro", duracionMin: 112, sustos: 9, rating: 7.5 },
    { titulo: "Hereditary", duracionMin: 127, sustos: 8, rating: 7.3 },
    { titulo: "Toy Story", duracionMin: 81, sustos: 1, rating: 8.3 },
    { titulo: "La Monja", duracionMin: 96, sustos: 7, rating: 5.4 },
    { titulo: "El Exorcista", duracionMin: 122, sustos: 10, rating: 8.1 }
];

let peliculasBuenas = [];

for (let i = 0; i < peliculas.length; i++) {
    let pelicula = peliculas[i];

    if (pelicula.rating >= 7) {
        peliculasBuenas.push(pelicula);
    }
}

let maraton = [];
let minutosTotales = 0;
let limiteMinutos = 360; 

for (let i = 0; i < peliculasBuenas.length; i++) {
    let pelicula = peliculasBuenas[i];


    if (minutosTotales + pelicula.duracionMin <= limiteMinutos) {
        maraton.push(pelicula);
        minutosTotales = minutosTotales + pelicula.duracionMin; 
    }
}

let totalSustos = 0;

for (let i = 0; i < maraton.length; i++) {
    totalSustos = totalSustos + maraton[i].sustos;
}

console.log("--- PELÍCULAS PARA VER EN LA MARATÓN ---");

for (let i = 0; i < maraton.length; i++) {
    let p = maraton[i];
    console.log("- " + p.titulo + " (" + p.duracionMin + " mins) | Rating: " + p.rating);
}

console.log("---------------------------------");
console.log("Tiempo total: " + minutosTotales + " minutos (" + (minutosTotales / 60) + " horas)");
console.log("Nivel total de sustos: " + totalSustos);