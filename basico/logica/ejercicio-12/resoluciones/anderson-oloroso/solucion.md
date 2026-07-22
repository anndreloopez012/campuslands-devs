# Resolución ejercicio 12 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el sistema de control de inventario de una tienda de ropa urbana (`inventario_ropa.js`). Se define una colección de prendas con información de talla, existencias y ventas semanales. Se identifican las prendas con bajo stock, se calcula la cantidad sugerida de reposición para cubrir la demanda proyectada (sin generar valores negativos) y se muestra un reporte organizado por talla.

```javascript
// 1. Inventario base de prendas de ropa urbana
const prendas = [
  { nombre: "Hoodie Oversize Negro", talla: "M", stock: 3, ventasSemana: 8 },
  { nombre: "Polera Boxy Fit Blanca", talla: "L", stock: 12, ventasSemana: 5 },
  { nombre: "Pantalón Cargo Olive", talla: "S", stock: 2, ventasSemana: 6 },
  { nombre: "Jacket Streetwear", talla: "L", stock: 4, ventasSemana: 7 },
  { nombre: "Polera Graphic Dark", talla: "M", stock: 15, ventasSemana: 4 },
  { nombre: "Pantalón Jogger Grey", talla: "S", stock: 1, ventasSemana: 3 },
  { nombre: "Hoodie Oversize Beige", talla: "XL", stock: 2, ventasSemana: 5 }
];

// 2, 3 y 4. Evaluación de stock y cálculo de reposición sugerida
const reporteInventario = prendas.map(prendas => {
  const bajoStock = prendas.stock < 5;
  const calculoReposicion = (prendas.ventasSemana * 2) - prendas.stock;
  
  // Evitar reposición negativa usando 0 o Math.max
  const reposicionSugerida = Math.max(0, calculoReposicion);

  return {
    ...prendas,
    bajoStock,
    reposicionSugerida
  };
});

// 5. Agrupar y mostrar reporte por talla
const tallasDisponibles = [...new Set(reporteInventario.map(p => p.talla))];

console.log("=== REPORTE DE CONTROL DE STOCK Y REPOSICIÓN URBANA ===");

tallasDisponibles.forEach(talla => {
  console.log(`\n--- TALLA ${talla} ---`);
  const prendasPorTalla = reporteInventario.filter(p => p.talla === talla);

  prendasPorTalla.forEach(item => {
    const estadoStock = item.bajoStock ? "⚠️ ALERTA: BAJO STOCK" : "✅ Stock OK";
    console.log(`• ${item.nombre}`);
    console.log(`   - Stock actual: ${item.stock} unidades | Ventas semana: ${item.ventasSemana}`);
    console.log(`   - Estado: ${estadoStock}`);
    console.log(`   - Reposición sugerida: ${item.reposicionSugerida} unidades`);
  });
});

// Resumen de prendas que requieren reposición inmediata
const prendasAReponer = reporteInventario.filter(p => p.reposicionSugerida > 0);
const totalUnidadesReposicion = prendasAReponer.reduce((total, p) => total + p.reposicionSugerida, 0);

console.log("\n--- RESUMEN GLOBAL DE REPOSICIÓN ---");
console.log(`Total de prendas a solicitar: ${prendasAReponer.length} productos`);
console.log(`Total de unidades a pedir al proveedor: ${totalUnidadesReposicion} unidades`);