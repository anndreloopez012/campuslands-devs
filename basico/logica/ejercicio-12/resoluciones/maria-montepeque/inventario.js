// Ejercicio 12 - Control de inventario streetwear
// Maria Montepeque

const prendas = [
  { nombre: "Hoodie Oversized", talla: "S",  stock: 3,  ventasSemana: 8  },
  { nombre: "Hoodie Oversized", talla: "M",  stock: 12, ventasSemana: 5  },
  { nombre: "Cargo Pants",      talla: "M",  stock: 4,  ventasSemana: 6  },
  { nombre: "Cargo Pants",      talla: "L",  stock: 0,  ventasSemana: 4  },
  { nombre: "Bucket Hat",       talla: "U",  stock: 7,  ventasSemana: 2  },
  { nombre: "Tee Grafica",      talla: "XL", stock: 5,  ventasSemana: 0  },
];

function calcularReposicion(stock, ventasSemana) {
  const reposicionBruta = ventasSemana * 2 - stock;
  return Math.max(0, reposicionBruta);
}

function analizarPrenda(prenda) {
  const bajoPedido = prenda.stock < 5;
  const reposicion = calcularReposicion(prenda.stock, prenda.ventasSemana);

  return {
    nombre:      prenda.nombre,
    talla:       prenda.talla,
    stock:       prenda.stock,
    ventasSemana: prenda.ventasSemana,
    bajoPedido,
    reposicion,
  };
}

function mostrarReporte(resultados) {
  console.log("=== REPORTE DE INVENTARIO STREETWEAR ===\n");

  const tallasUnicas = [...new Set(resultados.map(r => r.talla))];

  for (const talla of tallasUnicas) {
    console.log(`--- Talla: ${talla} ---`);
    const prendasDeTalla = resultados.filter(r => r.talla === talla);

    for (const item of prendasDeTalla) {
      const alerta = item.bajoPedido ? "⚠ BAJO STOCK" : "OK";
      console.log(`  ${item.nombre}`);
      console.log(`    Stock actual:   ${item.stock}`);
      console.log(`    Ventas semana:  ${item.ventasSemana}`);
      console.log(`    Estado:         ${alerta}`);
      console.log(`    Reposición:     ${item.reposicion} unidades`);
    }
    console.log();
  }
}

function validar(caso, stock, ventasSemana, esperado) {
  const resultado = calcularReposicion(stock, ventasSemana);
  const ok = resultado === esperado;
  console.log(`[${ok ? "PASS" : "FAIL"}] ${caso}: reposicion=${resultado} (esperado ${esperado})`);
}

// --- Validación ---
console.log("=== VALIDACIÓN ===");
validar("Caso normal (ventas 8, stock 3)",    3, 8, 13);
validar("Caso límite (reposición negativa)",  12, 5, 0);
validar("Caso extremo (stock 0, ventas 0)",   0, 0, 0);
validar("Caso extremo (stock 0, ventas 4)",   0, 4, 8);
console.log();

// --- Reporte principal ---
const resultados = prendas.map(analizarPrenda);
mostrarReporte(resultados);
