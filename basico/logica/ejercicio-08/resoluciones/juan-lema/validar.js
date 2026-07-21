// resoluciones/juan-lema/solucion.js
// Juan Lema — Ejercicio 08: Catálogo de hiperdeportivos

// 1. Catalogo de hiperdeportivos
const autos = [
  { marca: "Bugatti",      modelo: "Chiron",       ceroACien: 2.4, precioUSD: 3000000, unidades: 500  },
  { marca: "Koenigsegg",  modelo: "Jesko",         ceroACien: 2.5, precioUSD: 3200000, unidades: 125  },
  { marca: "Ferrari",     modelo: "SF90",          ceroACien: 2.5, precioUSD: 625000,  unidades: 2000 },
  { marca: "Pagani",      modelo: "Huayra",        ceroACien: 2.8, precioUSD: 2600000, unidades: 100  },
  { marca: "McLaren",     modelo: "P1",            ceroACien: 2.8, precioUSD: 1150000, unidades: 375  },
  { marca: "Lamborghini", modelo: "Revuelto",      ceroACien: 2.5, precioUSD: 608000,  unidades: 1499 },
  { marca: "Toyota",      modelo: "GR86",          ceroACien: 6.1, precioUSD: 28000,   unidades: 50000},
];

// 2. Filtra autos con 0-100 km/h en menos de 3 segundos
function filtrarPorAceleracion(listaAutos) {
  return listaAutos.filter((auto) => auto.ceroACien < 3);
}

// 3. Clasifica exclusividad segun unidades producidas
function clasificarExclusividad(auto) {
  return auto.unidades < 500 ? "extrema" : "normal";
}

function agregarExclusividad(listaAutos) {
  return listaAutos.map((auto) => ({
    ...auto,
    exclusividad: clasificarExclusividad(auto),
  }));
}

// 4. Calcula el precio promedio de una lista de autos
function calcularPrecioPromedio(listaAutos) {
  if (listaAutos.length === 0) return 0;
  const suma = listaAutos.reduce((acc, auto) => acc + auto.precioUSD, 0);
  return Math.round(suma / listaAutos.length);
}

// 5. Obtiene el top 3 por aceleracion (menor tiempo = mas rapido)
function obtenerTop3PorAceleracion(listaAutos) {
  return [...listaAutos]
    .sort((a, b) => a.ceroACien - b.ceroACien)
    .slice(0, 3);
}

// --- Ejecucion principal ---
function generarReporte(listaAutos) {
  const veloces = filtrarPorAceleracion(listaAutos);
  const conExclusividad = agregarExclusividad(veloces);
  const precioPromedio = calcularPrecioPromedio(veloces);
  const top3 = obtenerTop3PorAceleracion(listaAutos);

  console.log("Autos con 0-100 en menos de 3s:");
  conExclusividad.forEach((auto) => {
    console.log(
      `- ${auto.marca} ${auto.modelo}: ${auto.ceroACien}s | ${auto.unidades} unidades | exclusividad: ${auto.exclusividad}`
    );
  });

  console.log(`\nPrecio promedio (autos filtrados): $${precioPromedio.toLocaleString()}`);

  console.log("\nTop 3 por aceleracion:");
  top3.forEach((auto, i) => {
    console.log(`${i + 1}. ${auto.marca} ${auto.modelo} — ${auto.ceroACien}s`);
  });
}

generarReporte(autos);

module.exports = {
  filtrarPorAceleracion,
  clasificarExclusividad,
  calcularPrecioPromedio,
  obtenerTop3PorAceleracion,
};