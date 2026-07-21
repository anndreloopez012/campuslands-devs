const prendas = [
  { nombre: "Hoodie Oversize",   talla: "M", stock: 3,  ventasSemana: 8 },
  { nombre: "Hoodie Oversize",   talla: "L", stock: 12, ventasSemana: 5 },
  { nombre: "Cargo Pants",       talla: "S", stock: 0,  ventasSemana: 4 },
  { nombre: "Cargo Pants",       talla: "M", stock: 6,  ventasSemana: 2 },
  { nombre: "Tee Basica",        talla: "S", stock: 4,  ventasSemana: 1 },
  { nombre: "Tee Basica",        talla: "M", stock: 20, ventasSemana: 3 },
];

function esBajoStock(prenda) {
  return prenda.stock < 5;
}

function calcularReposicion(prenda) {
  const reposicion = prenda.ventasSemana * 2 - prenda.stock;
  return reposicion < 0 ? 0 : reposicion;
}

function procesarInventario(listaPrendas) {
  return listaPrendas.map((prenda) => ({
    ...prenda,
    bajoStock: esBajoStock(prenda),
    reposicionSugerida: calcularReposicion(prenda),
  }));
}

function agruparPorTalla(inventarioProcesado) {
  return inventarioProcesado.reduce((grupos, prenda) => {
    const talla = prenda.talla;
    if (!grupos[talla]) {
      grupos[talla] = [];
    }
    grupos[talla].push(prenda);
    return grupos;
  }, {});
}

function generarReporte(listaPrendas) {
  if (listaPrendas.length === 0) {
    return "No hay prendas para mostrar.";
  }

  const procesado = procesarInventario(listaPrendas);
  const agrupado = agruparPorTalla(procesado);

  let reporte = "";
  for (const talla of Object.keys(agrupado).sort()) {
    reporte += `\nTalla ${talla}\n`;
    agrupado[talla].forEach((p) => {
      const alerta = p.bajoStock ? " (BAJO STOCK)" : "";
      reporte += `  - ${p.nombre}: stock ${p.stock}, ventas ${p.ventasSemana}, reposicion sugerida ${p.reposicionSugerida}${alerta}\n`;
    });
  }
  return reporte;
}

console.log("=== Caso normal ===");
console.log(generarReporte(prendas));

console.log("=== Caso limite: inventario vacio ===");
console.log(generarReporte([]));

console.log("=== Caso limite: prenda con ventas altas y stock 0 ===");
console.log(
  generarReporte([{ nombre: "Jacket Tecnica", talla: "L", stock: 0, ventasSemana: 8 }])
);

module.exports = {
  esBajoStock,
  calcularReposicion,
  procesarInventario,
  agruparPorTalla,
  generarReporte,
};