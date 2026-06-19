// filtrar-disponibles: filtra destinos con disponibilidad activa

const destinos = require("./destinos.json");

function obtenerDestinosDisponibles(lista) {
  if (!lista || lista.length === 0) return [];
  return lista.filter((destino) => destino.disponible === true);
}

const disponibles = obtenerDestinosDisponibles(destinos);

console.log("Destinos disponibles:", disponibles.length);
disponibles.forEach((d) => {
  console.log(`- ${d.nombre} (${d.categoria}) — Q${d.precio_por_noche}/noche`);
});
