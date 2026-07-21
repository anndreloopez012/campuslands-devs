// 1. Definición del listado de prendas
const prendas = [
    { nombre: "Hoodie Oversize Heavyweight", talla: "M", stock: 3, ventasSemana: 8 },
    { nombre: "T-Shirt Graphic Acid Wash", talla: "L", stock: 12, ventasSemana: 5 },
    { nombre: "Cargo Pants Tactical", talla: "S", stock: 2, ventasSemana: 6 },
    { nombre: "Jacket Denim Vintage", talla: "M", stock: 4, ventasSemana: 3 },
    { nombre: "Jogger Fleece Tech", talla: "XL", stock: 1, ventasSemana: 7 },
    { nombre: "T-Shirt Basic Boxy Fit", talla: "S", stock: 8, ventasSemana: 4 },
    { nombre: "Cap Corduroy Streetwear", talla: "L", stock: 0, ventasSemana: 5 }
  ];
  
  // 2, 3, 4 y 5. Procesar inventario y agrupar por talla
  const reportePorTalla = prendas.reduce((acc, p) => {
    // 2. Marcar bajo stock
    const bajoStock = p.stock < 5;
    
    // 3 y 4. Reposición = ventasSemana * 2 - stock (usando Math.max para evitar negativos)
    const reposicionSugerida = Math.max(0, (p.ventasSemana * 2) - p.stock);
  
    const prendaProcesada = {
      ...p,
      bajoStock,
      reposicionSugerida
    };
  
    // 5. Agrupar por talla
    if (!acc[p.talla]) {
      acc[p.talla] = [];
    }
    acc[p.talla].push(prendaProcesada);
  
    return acc;
  }, {});
  
  // --- Salida de Resultados ---
  console.log("=== REPORTE DE CONTROL DE STOCK POR TALLA ===");
  
  let totalPiezasReponer = 0;
  
  Object.keys(reportePorTalla).forEach(talla => {
    console.log(`\n--- TALLA [${talla}] ---`);
    
    reportePorTalla[talla].forEach(item => {
      const alerta = item.bajoStock ? "⚠️ [BAJO STOCK]" : "✓ [STOCK OK]";
      console.log(`  ${alerta} ${item.nombre}`);
      console.log(`     Stock actual: ${item.stock} | Ventas/Semana: ${item.ventasSemana} | Reposición sugerida: ${item.reposicionSugerida} unidades`);
      
      totalPiezasReponer += item.reposicionSugerida;
    });
  });
  
  console.log("\n--------------------------------------------------");
  console.log(`Total global de prendas sugeridas a reponer: ${totalPiezasReponer} unidades`);