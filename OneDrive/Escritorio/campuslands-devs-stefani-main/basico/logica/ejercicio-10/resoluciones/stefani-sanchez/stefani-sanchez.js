// Nombre: Stefani Sanchez
// Ejercicio 10 - Maraton de peliculas de miedo
//
// Razonamiento: Se filtran peliculas con rating >= 7, luego se acumulan
// hasta no superar 360 minutos (6 horas) en total. Se cuenta el total de sustos.

const peliculas = [
  { titulo: "El Conjuro",         duracionMin: 112, sustos: 18, rating: 7.5 },
  { titulo: "It",                 duracionMin: 135, sustos: 22, rating: 7.3 },
  { titulo: "Hereditary",         duracionMin: 127, sustos: 14, rating: 7.3 },
  { titulo: "Midsommar",          duracionMin: 148, sustos: 10, rating: 7.1 },
  { titulo: "The Witch",          duracionMin:  92, sustos:  9, rating: 6.8 },
  { titulo: "Get Out",            duracionMin: 104, sustos: 12, rating: 7.7 },
  { titulo: "A Quiet Place",      duracionMin:  90, sustos: 15, rating: 7.5 },
  { titulo: "Us",                 duracionMin: 116, sustos: 13, rating: 6.8 },
  { titulo: "Sinister",           duracionMin: 110, sustos: 20, rating: 6.8 },
  { titulo: "The Babadook",       duracionMin:  93, sustos: 11, rating: 6.8 },
  { titulo: "Insidious",          duracionMin: 103, sustos: 17, rating: 6.8 },
];

const MAXIMO_MINUTOS = 360;
const RATING_MINIMO   = 7;

function seleccionarMaraton(lista) {
  const aptas = lista.filter(p => p.rating >= RATING_MINIMO);

  const seleccionadas = [];
  let minutosTotales  = 0;
  let sustosTotales   = 0;

  for (const pelicula of aptas) {
    if (minutosTotales + pelicula.duracionMin <= MAXIMO_MINUTOS) {
      seleccionadas.push(pelicula);
      minutosTotales += pelicula.duracionMin;
      sustosTotales  += pelicula.sustos;
    }
  }

  return { seleccionadas, minutosTotales, sustosTotales };
}

const { seleccionadas, minutosTotales, sustosTotales } = seleccionarMaraton(peliculas);

console.log("=== MARATON DE PELICULAS DE MIEDO ===");
console.log(`\nPeliculas seleccionadas (max ${MAXIMO_MINUTOS} min, rating >= ${RATING_MINIMO}):\n`);
seleccionadas.forEach((p, i) => {
  console.log(`  ${i + 1}. ${p.titulo} | ${p.duracionMin} min | Rating: ${p.rating} | Sustos: ${p.sustos}`);
});
console.log(`\nDuracion total: ${minutosTotales} min (${(minutosTotales / 60).toFixed(1)} horas)`);
console.log(`Total de sustos: ${sustosTotales}`);

// Validacion: 100 + 110 + 120 = 330 minutos
const testSum = 100 + 110 + 120;
console.log(`\nValidacion: 100+110+120 = ${testSum} min (esperado 330)`);
