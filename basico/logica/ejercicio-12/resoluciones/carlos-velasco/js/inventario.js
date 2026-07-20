const productos = [
  { nombre: "Hoodie Oversize", talla: "M", stock: 3, ventasSemana: 8 },
  { nombre: "T-Shirt Boxy", talla: "L", stock: 10, ventasSemana: 5 },
  { nombre: "Cargo Pants", talla: "S", stock: 2, ventasSemana: 6 },
  { nombre: "Beanie", talla: "U", stock: 1, ventasSemana: 10 }
];

const reporte = productos.map(item => {
  const bajoStock = item.stock < 5;
  const reposicionSugerida = bajoStock 
    ? Math.max(0, (item.ventasSemana * 2) - item.stock) 
    : 0;

  return {
    ...item,
    estado: bajoStock ? "Bajo Stock" : "Stock Saludable",
    reposicionSugerida
  };
});

console.table(reporte);