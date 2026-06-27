# Resolución: Diagnóstico Rápido de Mecánica

**Nombre:** Marco Antonio Canux Raquec

---

## 1. Solución en Código (JavaScript)

El siguiente script define la lógica para procesar los síntomas y generar un reporte técnico estructurado.

```javascript
function diagnosticar(sintomas) {
  // Con esta validación inicial: aseguramos recibir un arreglo válido
  if (!Array.isArray(sintomas) || sintomas.length === 0) {
    return "Reporte de Diagnóstico: No se reportaron síntomas válidos. La motocicleta está lista o requiere inspección manual.";
  }

  const recomendaciones = [];

  sintomas.forEach(sintoma => {
    let sintomaNormalizado = sintoma.toLowerCase().trim();

    // Evaluar condicionalmente cada síntoma
    switch (sintomaNormalizado) {
      case 'no enciende':
        recomendaciones.push("No enciende: Revisar voltaje de la batería, estado de las bujías y limpieza del sistema de inyección/carburador.");
        break;
      case 'vibra':
        recomendaciones.push("Vibra excesivamente: Comprobar balanceo de las llantas, tensión y lubricación de la cadena, y ajustar los soportes del motor.");
        break;
      case 'pierde aceite':
        recomendaciones.push("Pierde aceite: Inspeccionar el torque del tapón de drenaje, estado de los empaques del cárter y retenedores de las barras.");
        break;
      case 'frena poco':
        recomendaciones.push("Frena poco: Verificar nivel de líquido de frenos (DOT), medir espesor de pastillas y purgar el sistema para eliminar burbujas de aire.");
        break;
      default:
        recomendaciones.push(`Síntoma no tipificado ('${sintoma}'): Trasladar al banco de pruebas para un diagnóstico profundo.`);
    }
  });

  // Generar y estructurar el reporte final
  const fecha = new Date().toLocaleDateString();
  const reporte = `
========================================
📋 REPORTE DE DIAGNÓSTICO EN PITS
📅 Fecha: ${fecha}
🔍 Síntomas analizados: ${sintomas.length}
========================================
Acciones recomendadas:
${recomendaciones.join('\n')}
========================================
  `;

  return reporte.trim();
}

// 2. Evidencia de Validación (Pruebas)

const sintomasPiloto1 = ['no enciende', 'frena poco'];
const sintomasPiloto2 = ['vibra', 'pierde aceite', 'ruido extraño'];

console.log("--- Caso de Prueba 1 ---");
console.log(diagnosticar(sintomasPiloto1));

console.log("\n--- Caso de Prueba 2 ---");
console.log(diagnosticar(sintomasPiloto2));
```

## 2. Evidencia de Validación (Pruebas)

```javascript
const sintomasPiloto1 = ['no enciende', 'frena poco'];
const sintomasPiloto2 = ['vibra', 'pierde aceite', 'ruido extraño'];

console.log("--- Caso de Prueba 1 ---");
console.log(diagnosticar(sintomasPiloto1));

console.log("\n--- Caso de Prueba 2 ---");
console.log(diagnosticar(sintomasPiloto2));
```

## 3. Explicación del razonamiento
Para resolver este problema, se aplicaron los siguientes criterios lógicos y de estructuración:

**Flexibilidad en los datos de entrada:** Usé un ciclo forEach para iterar sobre el arreglo. Esto permite que la función escale sin importar si el piloto reporta 1 o 10 síntomas simultáneamente.

**Uso de switch en lugar de múltiples if/else:** Como estamos evaluando valores exactos de cadenas de texto ('vibra', 'pierde aceite'), la estructura switch es más eficiente, legible y fácil de expandir en el futuro si se agregan más códigos de falla.

**Manejo de errores (Edge cases):** - Se agregó una validación temprana (!Array.isArray...) por si la función recibe un dato nulo o un formato incorrecto.

**Se usó .toLowerCase().trim()** para normalizar los datos, evitando que el código falle si un piloto escribe "No enciende " con espacios o mayúsculas.

Se incluyó un caso **default** para manejar síntomas inesperados, asegurando que ningún reporte quede en blanco.

**Vocabulario técnico:** Las respuestas no solo cumplen con devolver una recomendación genérica, sino que incluyen diagnósticos coherentes a nivel mecánico (verificar retenedores, purgar sistema, torque), lo cual le da un valor real a la herramienta.