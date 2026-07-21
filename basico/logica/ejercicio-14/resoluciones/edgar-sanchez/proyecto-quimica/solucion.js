// 1 y 2. Definición de compuestos con su estructura de componentes
const compuestos = [
    {
      nombre: "Agua Destilada",
      componentes: [
        { simbolo: "H", gramos: 2.0 },
        { simbolo: "O", gramos: 16.0 }
      ]
    },
    {
      nombre: "Solución Salina Incompleta",
      componentes: [
        { simbolo: "Na", gramos: 23.0 },
        { simbolo: "Cl", gramos: 0.0 } // Componente inválido (<= 0)
      ]
    },
    {
      nombre: "Dióxido de Carbono",
      componentes: [
        { simbolo: "C", gramos: 12.0 },
        { simbolo: "O", gramos: 32.0 }
      ]
    },
    {
      nombre: "Mezcla Errónea",
      componentes: [
        { simbolo: "Fe", gramos: -5.0 } // Gramos negativos
      ]
    }
  ];
  
  // 3 y 4. Sumar masa total y validar componentes por compuesto
  const compuestosProcesados = compuestos.map(c => {
    // 3. Sumar gramos
    const masaTotalGramos = c.componentes.reduce((total, comp) => total + comp.gramos, 0);
  
    // 4. Validar que ningún componente tenga gramos <= 0
    const tieneComponentesInvalidos = c.componentes.some(comp => comp.gramos <= 0);
    const esValido = !tieneComponentesInvalidos && c.componentes.length > 0;
  
    return {
      ...c,
      masaTotalGramos,
      esValido,
      estado: esValido ? "Aprobado" : "Incompleto / Inválido"
    };
  });
  
  // 5. Filtrar compuestos (separar válidos de incompletos)
  const compuestosValidos = compuestosProcesados.filter(c => c.esValido);
  const compuestosIncompletos = compuestosProcesados.filter(c => !c.esValido);
  
  // --- Salida de Resultados ---
  console.log("=== COMPUESTOS VÁLIDOS (LABORATORIO) ===");
  compuestosValidos.forEach(c => {
    const formulaStr = c.componentes.map(comp => `${comp.gramos}g de ${comp.simbolo}`).join(" + ");
    console.log(`✓ ${c.nombre} | Masa Total: ${c.masaTotalGramos.toFixed(2)}g`);
    console.log(`   Composición: ${formulaStr}`);
  });
  
  console.log("\n=== COMPUESTOS INCOMPLETOS / RECHAZADOS ===");
  compuestosIncompletos.forEach(c => {
    console.log(`✗ ${c.nombre} | Estado: ${c.estado}`);
  });
  
  console.log("\n--- RESUMEN DEL LOTE ---");
  console.log(`Total procesados: ${compuestosProcesados.length}`);
  console.log(`Mezclas aprobadas: ${compuestosValidos.length}`);
  console.log(`Mezclas rechazadas: ${compuestosIncompletos.length}`);