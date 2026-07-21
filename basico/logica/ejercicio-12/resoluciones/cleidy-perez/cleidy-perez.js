// 1. Definición del inventario de prendas
const prendas = [
  { nombre: "Hoodie Oversize", talla: "M", stock: 3, ventasSemana: 8 },
  { nombre: "Polera Graphic", talla: "L", stock: 2, ventasSemana: 5 },
  { nombre: "Pantalón Cargo", talla: "S", stock: 10, ventasSemana: 2 },
  { nombre: "Polera Basic", talla: "M", stock: 4, ventasSemana: 1 }
];

// 2, 3 y 4. Procesar prendas para detectar stock bajo y calcular reposición
const reportePrendas = prendas.map(prenda => {
  const bajoStock = prenda.stock < 5;
  
  // Reposición = ventasSemana * 2 - stock (si da negativo, se fija en 0)
  const calculoReposicion = (prenda.ventasSemana * 2) - prenda.stock;
  const reposicion = Math.max(0, calculoReposicion);

  return {
    ...prenda,
    bajoStock,
    reposicionSugerida: reposicion
  };
});

// 5. Muestra de reporte
console.log("=== REPORTE GENERAL DE INVENTARIO ===");
console.table(reportePrendas);