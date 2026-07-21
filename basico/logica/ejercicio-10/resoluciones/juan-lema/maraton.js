// Ejercicio 10 - Logica
// Maraton de peliculas de miedo
// Autor: Juan Lema

// 1. Datos de entrada: peliculas con titulo, duracion, sustos y rating
const peliculas = [
  { titulo: "La Casa Silenciosa", duracionMin: 95, sustos: 14, rating: 7.8 },
  { titulo: "El Sotano", duracionMin: 110, sustos: 20, rating: 8.1 },
  { titulo: "Ojos en la Niebla", duracionMin: 100, sustos: 11, rating: 6.5 },
  { titulo: "Ultima Llamada", duracionMin: 120, sustos: 18, rating: 7.2 },
  { titulo: "El Pasillo", duracionMin: 85, sustos: 9, rating: 6.9 },
  { titulo: "Reflejo", duracionMin: 105, sustos: 16, rating: 7.5 },
];

const LIMITE_MINUTOS = 360;
const RATING_MINIMO = 7;

// 2. Filtra las peliculas que cumplen con el rating minimo
function filtrarPorRating(lista, ratingMinimo) {
  return lista.filter((pelicula) => pelicula.rating >= ratingMinimo);
}

// 3. Selecciona peliculas acumulando duracion sin pasar el limite de minutos
function seleccionarMaraton(lista, limiteMinutos) {
  const seleccion = [];
  let minutosAcumulados = 0;

  for (const pelicula of lista) {
    const nuevaDuracion = minutosAcumulados + pelicula.duracionMin;
    if (nuevaDuracion <= limiteMinutos) {
      seleccion.push(pelicula);
      minutosAcumulados = nuevaDuracion;
    }
  }

  return { seleccion, minutosAcumulados };
}

// 4. Calcula el total de sustos de la seleccion final
function calcularTotalSustos(seleccion) {
  return seleccion.reduce((total, pelicula) => total + pelicula.sustos, 0);
}

// 5. Muestra la lista final en consola
function mostrarSeleccion(seleccion, minutosAcumulados, totalSustos) {
  if (seleccion.length === 0) {
    console.log("No hay peliculas para mostrar.");
    return;
  }

  console.log("=== Maraton de peliculas de miedo ===");
  seleccion.forEach((pelicula, indice) => {
    console.log(
      `${indice + 1}. ${pelicula.titulo} - ${pelicula.duracionMin} min - ` +
        `${pelicula.sustos} sustos - rating ${pelicula.rating}`
    );
  });
  console.log(`Duracion total: ${minutosAcumulados} min`);
  console.log(`Total de sustos: ${totalSustos}`);
}

// Funcion principal que orquesta el flujo completo
function armarMaraton(lista) {
  const aptas = filtrarPorRating(lista, RATING_MINIMO);
  const { seleccion, minutosAcumulados } = seleccionarMaraton(aptas, LIMITE_MINUTOS);
  const totalSustos = calcularTotalSustos(seleccion);
  mostrarSeleccion(seleccion, minutosAcumulados, totalSustos);
  return { seleccion, minutosAcumulados, totalSustos };
}

// Ejecucion caso normal
armarMaraton(peliculas);

// --- Validacion caso limite: arreglo vacio ---
console.log("\n=== Caso limite: sin peliculas ===");
armarMaraton([]);