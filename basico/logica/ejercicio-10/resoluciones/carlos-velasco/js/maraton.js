const peliculas = [
  { titulo: "Hereditary", duracionMin: 127, sustos: 8, rating: 7.3 },
  { titulo: "The Conjuring", duracionMin: 112, sustos: 9, rating: 7.5 },
  { titulo: "Barbarian", duracionMin: 102, sustos: 6, rating: 7.0 },
  { titulo: "The Shining", duracionMin: 146, sustos: 4, rating: 8.4 },
  { titulo: "Low Budget Film", duracionMin: 90, sustos: 2, rating: 5.0 }
];

const limite_tiempo = 360;

const calificadas = peliculas.filter(p => p.rating >= 7)

const maraton = calificadas.reduce((acc, p) => {
  if (acc.tiempoTotal + p.duracionMin <= limite_tiempo) {
    acc.peliculas.push(p);
    acc.tiempoTotal += p.duracionMin;
    acc.sustosTotales += p.sustos;
  }
  return acc;
}, { peliculas: [], tiempoTotal: 0, sustosTotales: 0 }); 

const crearReporteMaraton = ({ peliculas, tiempoTotal, sustosTotales }) => {
  if (peliculas.length === 0) {
    return "No hay películas disponibles para el maratón dentro del límite de tiempo.";
  }

  const lineas = [
    "Maratón de películas",
    "---------------------",
    `Tiempo total: ${tiempoTotal} min`,
    `Sustos totales: ${sustosTotales}`,
    "",
    "Películas seleccionadas:"
  ];

  peliculas.forEach((pelicula, index) => {
    lineas.push(`${index + 1}. ${pelicula.titulo}`);
    lineas.push(`   Duración: ${pelicula.duracionMin} min`);
    lineas.push(`   Sustos: ${pelicula.sustos}`);
    lineas.push(`   Rating: ${pelicula.rating}`);
    lineas.push("");
  });

  return lineas.join("\n");
};

console.log(crearReporteMaraton(maraton));