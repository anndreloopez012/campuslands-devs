function diagnosticar(sintomas) {
    const recomendaciones = [];
  
    sintomas.forEach(sintoma => {
      // Normalizar el texto para evitar problemas con mayúsculas o espacios
      const sintomaNormalizado = sintoma.toLowerCase().trim();
  
      if (sintomaNormalizado === 'no enciende') {
        recomendaciones.push({
          sintoma: 'No enciende',
          causa: 'Falla en el sistema de encendido o batería baja',
          sugerencia: 'Revisar voltaje de la batería, bujía y el sistema de inyección/carburador.'
        });
      } else if (sintomaNormalizado === 'vibra') {
        recomendaciones.push({
          sintoma: 'Vibra',
          causa: 'Desajuste en el chasis, motor o desbalanceo de neumáticos',
          sugerencia: 'Apretar los soportes del motor y verificar el balanceo de las ruedas.'
        });
      } else if (sintomaNormalizado === 'pierde aceite') {
        recomendaciones.push({
          sintoma: 'Pierde aceite',
          causa: 'Empacaduras desgastadas o tapón de drenaje flojo',
          sugerencia: 'Localizar el origen de la fuga, revisar el nivel de aceite y reemplazar juntas si es necesario.'
        });
      } else if (sintomaNormalizado === 'frena poco') {
        recomendaciones.push({
          sintoma: 'Frena poco',
          causa: 'Pastillas de freno desgastadas o aire en el sistema hidráulico',
          sugerencia: 'Verificar el grosor de las pastillas y realizar una purga del líquido de frenos.'
        });
      } else {
        recomendaciones.push({
          sintoma: sintoma,
          causa: 'Síntoma no reconocido',
          sugerencia: 'Se requiere una inspección visual detallada en el taller.'
        });
      }
    });
  
    return recomendaciones;
  }
  
  function generarReporte(listaDiagnosticos) {
    console.log("==================================================");
    console.log("       REPORTE DE DIAGNÓSTICO MECÁNICO            ");
    console.log("==================================================");
  
    if (listaDiagnosticos.length === 0) {
      console.log("No se reportaron síntomas. ¡La moto está lista!");
      return;
    }
  
    listaDiagnosticos.forEach((item, index) => {
      console.log(`[${index + 1}] Síntoma: ${item.sintoma}`);
      console.log(`    Causa probable: ${item.causa}`);
      console.log(`    Recomendación:  ${item.sugerencia}`);
      console.log("--------------------------------------------------");
    });
  }
  
  // --- Caso de Prueba ---
  const sintomasPiloto = ['no enciende', 'frena poco', 'humo azul'];
  
  // 1. Obtener el diagnóstico basado en los síntomas
  const diagnosticoMoto = diagnosticar(sintomasPiloto);
  
  // 2. Imprimir el reporte final en consola
  generarReporte(diagnosticoMoto);