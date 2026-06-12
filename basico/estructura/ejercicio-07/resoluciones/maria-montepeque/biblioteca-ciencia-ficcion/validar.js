// Validador de la biblioteca de ciencia ficción

const fs = require("fs");
const path = require("path");

const carpetaDatos = path.join(__dirname, "books", "data");

function cargarLibros() {
  const archivosJson = fs
    .readdirSync(carpetaDatos)
    .filter((nombreArchivo) => nombreArchivo.endsWith(".json"));

  return archivosJson.map((nombreArchivo) => {
    const contenido = fs.readFileSync(path.join(carpetaDatos, nombreArchivo), "utf8");
    return JSON.parse(contenido);
  });
}

function tienePortadaValida(libro) {
  if (!libro.portada) {
    return false;
  }
  const nombrePortada = path.basename(libro.portada);
  return nombrePortada.startsWith(libro.id + "-");
}

function describirLibro(libro) {
  const paginas = libro.paginas > 0 ? libro.paginas + " págs." : "páginas sin registrar";
  const portada = tienePortadaValida(libro) ? "portada ok" : "sin portada";
  const resena = libro.resena ? "con reseña" : "sin reseña";
  return libro.titulo + " (" + libro.anioPublicacion + ") - " + paginas + " - " + portada + " - " + resena;
}

const biblioteca = cargarLibros();

console.log("--- Caso normal: catálogo completo ---");
biblioteca.forEach((libro) => console.log(describirLibro(libro)));

console.log("--- Caso límite: libros incompletos (sin portada o sin reseña) ---");
const librosIncompletos = biblioteca.filter(
  (libro) => !tienePortadaValida(libro) || !libro.resena
);
console.log(librosIncompletos.map((libro) => libro.id));

console.log("--- Caso límite: catálogo vacío no rompe el script ---");
const catalogoVacio = [];
const incompletosEnVacio = catalogoVacio.filter((libro) => !libro.portada);
console.log(incompletosEnVacio);
