// Nombre: Stefani Sanchez
// Ejercicio 08 - Catalogo de hiperdeportivos
//
// Razonamiento: Se filtran autos que hacen 0-100 en menos de 3 segundos.
// Se clasifica exclusividad segun unidades producidas (< 500 = extrema).
// Se calcula el precio promedio y se muestran el top 3 mas rapidos.

const autos = [
  { marca: "Bugatti",    modelo: "Chiron",        ceroACien: 2.4, precioUSD: 3_000_000, unidades: 500  },
  { marca: "Koenigsegg", modelo: "Jesko",          ceroACien: 2.5, precioUSD: 2_800_000, unidades: 125  },
  { marca: "Rimac",      modelo: "Nevera",         ceroACien: 1.97,precioUSD: 2_400_000, unidades: 150  },
  { marca: "Ferrari",    modelo: "SF90 Stradale",  ceroACien: 2.5, precioUSD: 625_000,   unidades: 1199 },
  { marca: "Lamborghini",modelo: "Revuelto",       ceroACien: 2.5, precioUSD: 608_000,   unidades: 1000 },
  { marca: "Porsche",    modelo: "918 Spyder",     ceroACien: 2.6, precioUSD: 845_000,   unidades: 918  },
  { marca: "SSC",        modelo: "Tuatara",        ceroACien: 2.5, precioUSD: 1_900_000, unidades: 100  },
  { marca: "Aston Martin",modelo:"Valkyrie",       ceroACien: 2.5, precioUSD: 3_200_000, unidades: 150  },
];

function clasificarExclusividad(unidades) {
  return unidades < 500 ? "extrema" : "alta";
}

function procesarCatalogo(lista) {
  // Filtrar los que hacen 0-100 en menos de 3 segundos
  const rapidos = lista.filter(auto => auto.ceroACien < 3);

  // Agregar exclusividad a cada auto
  const conExclusividad = rapidos.map(auto => ({
    ...auto,
    exclusividad: clasificarExclusividad(auto.unidades),
  }));

  // Precio promedio
  const precioPromedio = rapidos.reduce((sum, a) => sum + a.precioUSD, 0) / rapidos.length;

  // Top 3 por aceleracion (menor ceroACien = mas rapido)
  const top3 = [...conExclusividad]
    .sort((a, b) => a.ceroACien - b.ceroACien)
    .slice(0, 3);

  return { conExclusividad, precioPromedio, top3 };
}

const { conExclusividad, precioPromedio, top3 } = procesarCatalogo(autos);

console.log("=== AUTOS CON 0-100 < 3s ===");
conExclusividad.forEach(auto => {
  console.log(`${auto.marca} ${auto.modelo} | ${auto.ceroACien}s | $${auto.precioUSD.toLocaleString()} | Exclusividad: ${auto.exclusividad}`);
});

console.log(`\nPrecio promedio: $${Math.round(precioPromedio).toLocaleString()}`);

console.log("\n=== TOP 3 MAS RAPIDOS ===");
top3.forEach((auto, i) => {
  console.log(`${i + 1}. ${auto.marca} ${auto.modelo} - ${auto.ceroACien}s`);
});

// Validacion: 250 unidades => exclusividad extrema
console.log("\nValidacion: 250 unidades =>", clasificarExclusividad(250), "(esperado extrema)");
console.log("Validacion: 600 unidades =>", clasificarExclusividad(600), "(esperado alta)");
