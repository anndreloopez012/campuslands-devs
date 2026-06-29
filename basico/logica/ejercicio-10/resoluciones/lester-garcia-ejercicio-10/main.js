// Definición del catálogo de películas de miedo
const catalogoPeliculas = [
  { titulo: "El Conjuro", duracionMin: 112, sustos: 15, rating: 7.5 },
  { titulo: "Hereditary", duracionMin: 127, sustos: 12, rating: 7.3 },
  { titulo: "Siniestro", duracionMin: 110, sustos: 18, rating: 6.8 }, // No pasará el filtro de rating
  { titulo: "Un Lugar En Silencio", duracionMin: 90, sustos: 8, rating: 7.5 },
  { titulo: "La Bruja", duracionMin: 92, sustos: 5, rating: 6.9 }, // No pasará el filtro de rating
  { titulo: "Insidious", duracionMin: 103, sustos: 14, rating: 7.0 },
  { titulo: "It (Eso)", duracionMin: 135, sustos: 11, rating: 7.3 }
];

// Función principal para planificar la maratón
function planificarMaraton(peliculas) {
  const LIMITE_MINUTOS = 360; // 6 horas equivalen a 360 minutos

  // Filtrar películas con rating mayor o igual a 7
  const peliculasAptas = peliculas.filter(p => p.rating >= 7);

  // Acumular películas sin pasarse del límite de 360 minutos
  let tiempoAcumulado = 0;
  const listaFinal = [];

  for (const pelicula of peliculasAptas) {
    if (tiempoAcumulado + pelicula.duracionMin <= LIMITE_MINUTOS) {
      listaFinal.push(pelicula);
      tiempoAcumulado += pelicula.duracionMin;
    }
  }

  //Calcular el total de sustos de la selección final
  const totalSustos = listaFinal.reduce((acumulador, pelicula) => acumulador + pelicula.sustos, 0);

  // Mostrar la lista final y el resumen
  console.log("=== SELECCIÓN FINAL PARA LA MARATÓN DE MIEDO ===");
  listaFinal.forEach((pelicula, index) => {
    console.log(`${index + 1}. ${pelicula.titulo} (${pelicula.duracionMin} min) - Rating: ${pelicula.rating} - Sustos: ${pelicula.sustos}`);
  });

  console.log("\n================================================");
  console.log(`Duración Total: ${tiempoAcumulado} minutos (${(tiempoAcumulado / 60).toFixed(1)} horas)`);
  console.log(`Total de Sustos Garantizados: ${totalSustos}`);
  console.log("================================================");
}

// Ejecutar el sistema con el catálogo definido
planificarMaraton(catalogoPeliculas);