const UMBRAL_BAJO_STOCK = 5;
const FACTOR_DEMANDA = 2;

const prendas = [
  { nombre: "Hoodie Oversize", talla: "M", stock: 3, ventasSemana: 8 },
  { nombre: "Hoodie Oversize", talla: "L", stock: 12, ventasSemana: 4 },
  { nombre: "Cargo Pants", talla: "S", stock: 2, ventasSemana: 1 },
  { nombre: "Cargo Pants", talla: "XL", stock: 4, ventasSemana: 0 },
  { nombre: "Gorra Snapback", talla: "Única", stock: 20, ventasSemana: 6 },
];

function tieneBajoStock(stock) {
  return stock < UMBRAL_BAJO_STOCK;
}

function calcularReposicion(ventasSemana, stock) {
  const reposicion = ventasSemana * FACTOR_DEMANDA - stock;
  return Math.max(reposicion, 0);
}

function generarReporte(listaPrendas) {
  return listaPrendas.map((prenda) => {
    const bajoStock = tieneBajoStock(prenda.stock);
    const reposicionSugerida = calcularReposicion(prenda.ventasSemana, prenda.stock);

    return {
      nombre: prenda.nombre,
      talla: prenda.talla,
      stock: prenda.stock,
      ventasSemana: prenda.ventasSemana,
      bajoStock,
      reposicionSugerida,
    };
  });
}

function agruparPorTalla(reporte) {
  const agrupado = {};

  for (const item of reporte) {
    if (!agrupado[item.talla]) {
      agrupado[item.talla] = [];
    }
    agrupado[item.talla].push(item);
  }

  return agrupado;
}

const reporte = generarReporte(prendas);
const reportePorTalla = agruparPorTalla(reporte);

console.log("Reporte completo:");
console.log(reporte);

console.log("\nReporte agrupado por talla:");
console.log(reportePorTalla);