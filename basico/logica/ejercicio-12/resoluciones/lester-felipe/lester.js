// Definición de Datos
const inventarioPrendas = [
    { nombre: "Sudadera Oversize Hoodie", talla: "M", stock: 3, ventasSemana: 12 },
    { nombre: "Camiseta Graphic Tee", talla: "L", stock: 10, ventasSemana: 8 },
    { nombre: "Pantalón Cargo Streetwear", talla: "S", stock: 2, ventasSemana: 15 },
    { nombre: "Gorra Snapback Retro", talla: "M", stock: 15, ventasSemana: 4 },
    { nombre: "Chaqueta Bomber Techwear", talla: "XL", stock: 4, ventasSemana: 6 },
    { nombre: "Pantalón Jogger Minimal", talla: "S", stock: 8, ventasSemana: 5 }
  ];
  
  // Procesamiento de la Información (Lógica de Negocio)
  function procesarInventarioYReposicion(inventario) {
    return inventario.map(prenda => {
      // Regla de negocio: bajo stock si es menor a 5
      const bajoStock = prenda.stock < 5;
  
      let unidadesReposicion = (prenda.ventasSemana * 2) - prenda.stock;
  
      // Control para evitar valores negativos
      unidadesReposicion = Math.max(0, unidadesReposicion);
  
      return {
        ...prenda,
        bajoStock,
        unidadesReposicion
      };
    });
  }
  
  function generarReportePorTalla(prendasProcesadas) {
    console.log("=====================================================================");
    console.log("       REPORTE DE CONTROL DE STOCK Y REPOSICIÓN - STREETWEAR         ");
    console.log("=====================================================================");

    const reporteViaTallas = {};
  
    prendasProcesadas.forEach(prenda => {
      if (!reporteViaTallas[prenda.talla]) {
        reporteViaTallas[prenda.talla] = [];
      }
      reporteViaTallas[prenda.talla].push(prenda);
    });

    for (const talla in reporteViaTallas) {
      console.log(`\n[ TALLA: ${talla} ]`);
      console.log("---------------------------------------------------------------------");
  
      reporteViaTallas[talla].forEach(item => {
        const alertaStock = item.bajoStock ? "⚠️ BAJO STOCK" : "✅ OK";
        console.log(`- Producto: ${item.nombre.padEnd(28)} | Stock: ${String(item.stock).padStart(2)} | Estado: ${alertaStock.padEnd(13)} | Reposición sugerida: ${item.unidadesReposicion} u.`);
      });
    }
    console.log("\n=====================================================================");
  }

  const inventarioAnalizado = procesarInventarioYReposicion(inventarioPrendas);
  generarReportePorTalla(inventarioAnalizado);