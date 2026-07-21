// Manejo de posters asociados a cada pelicula del catalogo
const posters = {
  "Blade Runner 2049": "posters/blade-runner-2049.jpg",
  "Interstellar": "posters/interstellar.jpg",
  "Dune": "posters/dune.jpg",
};

function obtenerPoster(titulo) {
  return posters[titulo] || "posters/default.jpg";
}

module.exports = { obtenerPoster };