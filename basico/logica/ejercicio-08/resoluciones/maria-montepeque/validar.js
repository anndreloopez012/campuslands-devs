// validar.js — Ejercicio 08: Catálogo de hiperdeportivos

const hiperdeportivos = [
  { marca: "Bugatti",    modelo: "Chiron Super Sport", ceroACien: 2.4, precioUSD: 3900000, unidades: 60   },
  { marca: "Koenigsegg", modelo: "Jesko Absolut",      ceroACien: 2.5, precioUSD: 3000000, unidades: 125  },
  { marca: "Rimac",      modelo: "Nevera",             ceroACien: 1.97,precioUSD: 2400000, unidades: 150  },
  { marca: "Pagani",     modelo: "Huayra R",           ceroACien: 2.8, precioUSD: 3100000, unidades: 30   },
  { marca: "Lamborghini",modelo: "Veneno",             ceroACien: 2.9, precioUSD: 4500000, unidades: 14   },
  { marca: "Ferrari",    modelo: "LaFerrari",          ceroACien: 2.9, precioUSD: 1400000, unidades: 499  },
  { marca: "McLaren",    modelo: "Speedtail",          ceroACien: 3.2, precioUSD: 2200000, unidades: 106  },
  { marca: "Porsche",    modelo: "918 Spyder",         ceroACien: 2.6, precioUSD:  850000, unidades: 918  },
];

function clasificarExclusividad(unidades) {
  return unidades < 500 ? "extrema" : "alta";
}

function filtrarPorAceleracion(autos, limiteSeg) {
  return autos.filter(auto => auto.ceroACien < limiteSeg);
}

function calcularPrecioPromedio(autos) {
  if (autos.length === 0) return 0;
  const total = autos.reduce((suma, auto) => suma + auto.precioUSD, 0);
  return Math.round(total / autos.length);
}

function obtenerTop3PorAceleracion(autos) {
  return [...autos]
    .sort((a, b) => a.ceroACien - b.ceroACien)
    .slice(0, 3);
}

function analizarCatalogo(autos) {
  if (!autos || autos.length === 0) {
    return { error: "El catálogo está vacío o no fue proporcionado." };
  }

  const rapidosSubTres = filtrarPorAceleracion(autos, 3);

  const autosConExclusividad = rapidosSubTres.map(auto => ({
    ...auto,
    exclusividad: clasificarExclusividad(auto.unidades),
  }));

  const precioPromedio = calcularPrecioPromedio(rapidosSubTres);
  const top3 = obtenerTop3PorAceleracion(rapidosSubTres);

  return { autosConExclusividad, precioPromedio, top3 };
}

function imprimirResultados(etiqueta, autos) {
  console.log(`\n${"=".repeat(52)}`);
  console.log(`CASO: ${etiqueta}`);
  console.log("=".repeat(52));

  const resultado = analizarCatalogo(autos);

  if (resultado.error) {
    console.log(`⚠️  ${resultado.error}`);
    return;
  }

  const { autosConExclusividad, precioPromedio, top3 } = resultado;

  console.log(`\nAutos con 0-100 en menos de 3 segundos (${autosConExclusividad.length} encontrados):`);
  autosConExclusividad.forEach(auto => {
    console.log(
      `  • ${auto.marca} ${auto.modelo} — ${auto.ceroACien}s | ` +
      `${auto.unidades} uds | exclusividad: ${auto.exclusividad}`
    );
  });

  console.log(`\nPrecio promedio: $${precioPromedio.toLocaleString("en-US")} USD`);

  console.log("\nTop 3 por aceleración:");
  top3.forEach((auto, i) => {
    console.log(
      `  ${i + 1}. ${auto.marca} ${auto.modelo} — ${auto.ceroACien}s`
    );
  });
}

// Caso 1 — Normal: catálogo completo
imprimirResultados("Catálogo completo", hiperdeportivos);

// Caso 2 — Límite: un solo auto con exactamente 2.99s (justo bajo el límite)
const casoLimite = [
  { marca: "Test",  modelo: "Límite exacto", ceroACien: 2.99, precioUSD: 1000000, unidades: 250 },
  { marca: "Test2", modelo: "Fuera de rango", ceroACien: 3.0,  precioUSD: 2000000, unidades: 800 },
];
imprimirResultados("Caso límite (2.99s incluido, 3.0s excluido)", casoLimite);

// Caso 3 — Vacío: sin autos
imprimirResultados("Catálogo vacío", []);
