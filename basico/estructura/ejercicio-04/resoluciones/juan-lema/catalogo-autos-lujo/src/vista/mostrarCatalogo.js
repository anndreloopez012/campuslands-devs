// Capa de presentacion
import {
  cargarAutos,
  formatearPrecio,
  ordenarPorPrecio,
} from "../logica/catalogo.js";

const IMAGEN_PLACEHOLDER = "assets/cars/placeholder.jpg";

function crearTarjeta(auto) {
  const imagen = auto.imagen || IMAGEN_PLACEHOLDER;
  return `
    <article class="car">
      <img class="car__img" src="${imagen}" alt="${auto.marca} ${auto.modelo}"
           onerror="this.src='${IMAGEN_PLACEHOLDER}'">
      <h2 class="car__title">${auto.marca} ${auto.modelo}</h2>
      <p class="car__meta">${auto.anio} · ${auto.categoria}</p>
      <p class="car__precio">${formatearPrecio(auto.precioUSD)}</p>
    </article>
  `;
}

export function mostrarCatalogo(autos, contenedor) {
  if (!autos || autos.length === 0) {
    contenedor.innerHTML = "<p>No hay autos para mostrar.</p>";
    return;
  }
  const ordenados = ordenarPorPrecio(autos);
  contenedor.innerHTML = ordenados.map(crearTarjeta).join("");
}

async function iniciar() {
  const contenedor = document.getElementById("catalogo");
  try {
    const autos = await cargarAutos();
    mostrarCatalogo(autos, contenedor);
  } catch (error) {
    contenedor.innerHTML = "<p>No se pudo cargar el catalogo.</p>";
    console.error("Error al cargar el catalogo:", error);
  }
}

document.addEventListener("DOMContentLoaded", iniciar);
