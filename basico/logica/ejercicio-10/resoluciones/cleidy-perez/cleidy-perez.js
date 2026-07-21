
const catalogoPeliculas = [
  { titulo: "El Conjuro", duracionMin: 112, sustos: 15, rating: 7.5 },
  { titulo: "Hereditary", duracionMin: 127, sustos: 12, rating: 7.3 },
  { titulo: "Un Lugar En Silencio", duracionMin: 90, sustos: 10, rating: 7.5 },
  { titulo: "Scream", duracionMin: 111, sustos: 8, rating: 7.4 },
  { titulo: "Película Mala 1", duracionMin: 80, sustos: 2, rating: 5.1 },
  { titulo: "Película Mala 2", duracionMin: 95, sustos: 4, rating: 6.8 },
  { titulo: "Siniestro", duracionMin: 110, sustos: 18, rating: 6.8 }, // Rating < 7, debe excluirse
  { titulo: "It (Eso)", duracionMin: 135, sustos: 14, rating: 7.3 }
];

/**
 * Selecciona las películas para la maratón cumpliendo las restricciones:
 * - Rating mayor o igual a 7.
 * - Duración acumulada máxima de 360 minutos (6 horas).
 * 
 * @param {Array} peliculas - Lista de películas a evaluar.
 * @returns {Object} Resultado de la maratón.
 */
function seleccionarMaraton(peliculas) {
  if (!Array.isArray(peliculas) || peliculas.length === 0) {
    return {
      peliculasSeleccionadas: [],
      duracionTotal: 0,
      totalSustos: 0,
      mensaje: "No hay películas disponibles para procesar."
    };
  }

  const RATING_MINIMO = 7.0;
  const DURACION_MAXIMA_MINUTOS = 360;

  const peliculasAptas = peliculas.filter(
    (pelicula) => pelicula.rating >= RATING_MINIMO
  );

  const peliculasSeleccionadas = [];
  let duracionTotal = 0;
  let totalSustos = 0;

  for (const pelicula of peliculasAptas) {
    if (duracionTotal + pelicula.duracionMin <= DURACION_MAXIMA_MINUTOS) {
      peliculasSeleccionadas.push(pelicula);
      duracionTotal += pelicula.duracionMin;
      totalSustos += pelicula.sustos;
    }
  }

  return {
    peliculasSeleccionadas,
    duracionTotal,
    totalSustos,
    mensaje: `Seleccionadas ${peliculasSeleccionadas.length} películas.`
  };
}


const resultadoMaraton = seleccionarMaraton(catalogoPeliculas);

console.log("=== RESULTADO DE LA MARATÓN DE TERROR ===");
console.log("Películas elegidas:");
resultadoMaraton.peliculasSeleccionadas.forEach((p, idx) => {
  console.log(` ${idx + 1}. ${p.titulo} (${p.duracionMin} min, Sustos: ${p.sustos}, Rating: ${p.rating})`);
});
console.log("-----------------------------------------");
console.log(`Duración total: ${resultadoMaraton.duracionTotal} minutos / 360 min máximo.`);
console.log(`Total de sustos: ${resultadoMaraton.totalSustos}`);
console.log("=========================================");