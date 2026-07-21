// Nombre: Stefani Sanchez
// Ejercicio 12 - Control de inventario streetwear
//
// Razonamiento: Se marca bajo stock cuando stock < 5.
// Reposicion sugerida = ventasSemana * 2 - stock, con minimo de 0 (no negativa).
// Se muestra reporte agrupado por talla.

const prendas = [
  { nombre: "Hoodie Oversize",    talla: "S",  stock: 2,  ventasSemana: 8  },
  { nombre: "Cargo Pants",        talla: "M",  stock: 10, ventasSemana: 4  },
  { nombre: "Bucket Hat",         talla: "XL", stock: 3,  ventasSemana: 6  },
  { nombre: "Air Max Replica",    talla: "L",  stock: 7,  ventasSemana: 5  },
  { nombre: "Balaclava",          talla: "XL", stock: 1,  ventasSemana: 9  },
  { nombre: "Crop Top Vintage",   talla: "S",  stock: 4,  ventasSemana: 7  },
  { nombre: "Tech Fleece",        talla: "M",  stock: 6,  ventasSemana: 3  },
  { nombre: "Jogger Tapered",     talla: "L",  stock: 0,  ventasSemana: 10 },
];

function calcularReposicion(stock, ventasSemana) {
  const reposicion = ventasSemana * 2 - stock;
  return Math.max(reposicion, 0); // evitar negativo
}

function procesarInventario(lista) {
  return lista.map(prenda => {
    const bajoStock   = prenda.stock < 5;
    const reposicion  = calcularReposicion(prenda.stock, prenda.ventasSemana);
    return { ...prenda, bajoStock, reposicion };
  });
}

function agruparPorTalla(lista) {
  const grupos = {};
  lista.forEach(prenda => {
    if (!grupos[prenda.talla]) grupos[prenda.talla] = [];
    grupos[prenda.talla].push(prenda);
  });
  return grupos;
}

const inventarioProcesado = procesarInventario(prendas);
const porTalla            = agruparPorTalla(inventarioProcesado);

console.log("=== REPORTE DE INVENTARIO STREETWEAR ===");
Object.entries(porTalla).forEach(([talla, prendas]) => {
  console.log(`\n-- Talla ${talla} --`);
  prendas.forEach(p => {
    const alerta = p.bajoStock ? " [!!! BAJO STOCK !!!]" : "";
    console.log(`  ${p.nombre} | Stock: ${p.stock} | Ventas/sem: ${p.ventasSemana} | Reposicion sugerida: ${p.reposicion}${alerta}`);
  });
});

// Validacion: ventasSemana=8, stock=3 => reposicion = 8*2-3 = 13
console.log("\nValidacion: ventasSemana=8, stock=3 =>", calcularReposicion(3, 8), "(esperado 13)");
// Validacion: stock alta, no reposicion negativa
console.log("Validacion: ventasSemana=2, stock=20 =>", calcularReposicion(20, 2), "(esperado 0, no negativo)");
