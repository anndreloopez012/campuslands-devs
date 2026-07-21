// Logica pura del catalogo
export async function cargarAutos() {
  const respuesta = await fetch("data/autos.json");
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar autos.json (status ${respuesta.status})`);
  }
  return respuesta.json();
}

export function formatearPrecio(precioUSD) {
  if (!precioUSD || precioUSD <= 0) {
    return "Precio no disponible";
  }
  return `$${precioUSD.toLocaleString("en-US")}`;
}

export function ordenarPorPrecio(autos) {
  return [...autos].sort((a, b) => b.precioUSD - a.precioUSD);
}