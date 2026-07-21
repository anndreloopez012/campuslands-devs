// Control de inventario streetwear: detectar bajo stock (stock < 5) y calcular reposición
const prendas = [
  { nombre: "Camiseta Over", talla: "M", stock: 3, ventasSemana: 8 },
  { nombre: "Camiseta Over", talla: "L", stock: 7, ventasSemana: 4 },
  { nombre: "Jogger Negro", talla: "S", stock: 2, ventasSemana: 6 },
  { nombre: "Jogger Negro", talla: "M", stock: 5, ventasSemana: 3 },
  { nombre: "Hoodie Flame", talla: "L", stock: 1, ventasSemana: 10 },
  { nombre: "Hoodie Flame", talla: "XL", stock: 6, ventasSemana: 2 }
];

// Agregar estado y reposición a cada prenda
prendas.forEach(p => {
  p.bajoStock = p.stock < 5;
  const reposicion = p.ventasSemana * 2 - p.stock;
  p.reposicion = reposicion > 0 ? reposicion : 0;
});

// Mostrar reporte por talla
console.log("=== REPORTE DE INVENTARIO ===");
const tallas = [...new Set(prendas.map(p => p.talla))];

tallas.forEach(talla => {
  console.log(`\n--- TALLA ${talla} ---`);
  const productos = prendas.filter(p => p.talla === talla);
  productos.forEach(p => {
    const estado = p.bajoStock ? "BAJO STOCK" : "OK";
    console.log(`  ${p.nombre}: stock ${p.stock} | ventas: ${p.ventasSemana} | reposición: ${p.reposicion} ${estado}`);
  });
});