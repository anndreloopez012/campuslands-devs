// Maratón de películas de miedo — Maria Montepeque

const peliculas = [
  { titulo: "El exorcista",         duracionMin: 122, sustos: 9, rating: 8.0 },
  { titulo: "Hereditary",           duracionMin: 127, sustos: 8, rating: 7.3 },
  { titulo: "It Follows",           duracionMin: 100, sustos: 6, rating: 6.8 },
  { titulo: "La Llorona",           duracionMin:  97, sustos: 7, rating: 6.5 },
  { titulo: "Get Out",              duracionMin: 104, sustos: 7, rating: 7.7 },
  { titulo: "A Quiet Place",        duracionMin:  90, sustos: 8, rating: 7.5 },
  { titulo: "The Witch",            duracionMin: 102, sustos: 6, rating: 6.9 },
  { titulo: "Midsommar",            duracionMin: 148, sustos: 5, rating: 7.1 },
  { titulo: "Sinister",             duracionMin: 110, sustos: 9, rating: 6.8 },
  { titulo: "The Babadook",         duracionMin:  93, sustos: 7, rating: 6.8 },
];

const LIMITE_MINUTOS = 360;
const RATING_MINIMO  = 7.0;

function armarMaraton(listaPeliculas, limiteMinutos, ratingMinimo) {
  const aptas = listaPeliculas.filter(p => p.rating >= ratingMinimo);

  const seleccionadas = [];
  let minutosAcumulados = 0;

  for (const pelicula of aptas) {
    const minutosRestantes = limiteMinutos - minutosAcumulados;

    if (pelicula.duracionMin <= minutosRestantes) {
      seleccionadas.push(pelicula);
      minutosAcumulados += pelicula.duracionMin;
    }
  }

  const totalSustos = seleccionadas.reduce((suma, p) => suma + p.sustos, 0);

  return { seleccionadas, minutosAcumulados, totalSustos };
}

function mostrarResultado(resultado) {
  if (resultado.seleccionadas.length === 0) {
    console.log("No hay películas que cumplan los criterios para la maratón.");
    return;
  }

  console.log("=== Maratón de películas de miedo ===\n");
  console.log("Películas seleccionadas:");

  resultado.seleccionadas.forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.titulo} — ${p.duracionMin} min | sustos: ${p.sustos} | rating: ${p.rating}`);
  });

  console.log(`\nDuración total : ${resultado.minutosAcumulados} minutos`);
  console.log(`Total de sustos: ${resultado.totalSustos}`);
}

// --- Caso normal ---
console.log(">>> CASO NORMAL (límite 360 min, rating >= 7.0)\n");
const resultadoNormal = armarMaraton(peliculas, LIMITE_MINUTOS, RATING_MINIMO);
mostrarResultado(resultadoNormal);

// --- Caso límite: maratón muy corta (100 minutos) ---
console.log("\n>>> CASO LÍMITE (límite 100 min, rating >= 7.0)\n");
const resultadoLimite = armarMaraton(peliculas, 100, RATING_MINIMO);
mostrarResultado(resultadoLimite);

// --- Caso vacío: lista sin películas ---
console.log("\n>>> CASO VACÍO (lista sin películas)\n");
const resultadoVacio = armarMaraton([], LIMITE_MINUTOS, RATING_MINIMO);
mostrarResultado(resultadoVacio);
