function seleccionarMaraton(peliculas, limiteMinutos = 360, ratingMinimo = 7) {
  const candidatas = peliculas.filter((pelicula) => pelicula.rating >= ratingMinimo);

  const seleccionadas = [];
  let minutosAcumulados = 0;

  for (const pelicula of candidatas) {
    const nuevoTotal = minutosAcumulados + pelicula.duracionMin;
    if (nuevoTotal <= limiteMinutos) {
      seleccionadas.push(pelicula);
      minutosAcumulados = nuevoTotal;
    }
  }

  const totalSustos = seleccionadas.reduce((suma, pelicula) => suma + pelicula.sustos, 0);

  return { seleccionadas, minutosAcumulados, totalSustos };
}

// Caso normal
const peliculas = [
  { 
    titulo: "El Conjuro", 
    duracionMin: 112, 
    sustos: 15, 
    rating: 7.5 
},
  { 
    titulo: "Hereditary", 
    duracionMin: 127, 
    sustos: 20, 
    rating: 7.3 },
  { 
    titulo: "It", 
    duracionMin: 135, 
    sustos: 18, 
    rating: 7.2 },
  { 
    titulo: "Terror Genérico", 
    duracionMin: 90, 
    sustos: 5, 
    rating: 5.0 },
];

console.log(seleccionarMaraton(peliculas));

// Caso límite: ninguna película cumple el rating mínimo
const peliculasLimite = [
  { 
    titulo: "Susto Barato", 
    duracionMin: 80, 
    sustos: 3, 
    rating: 4.0 
},
];

console.log(seleccionarMaraton(peliculasLimite));