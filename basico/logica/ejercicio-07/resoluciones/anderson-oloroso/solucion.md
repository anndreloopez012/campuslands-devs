# Resolución ejercicio 07 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula un sistema de diagnóstico para taller de mecánica de motos (`diagnostico.js`). Se implementa la función `diagnosticar` que toma una lista de síntomas reportados por el piloto, evalúa cada caso mediante estructuras condicionales y retorna un reporte detallado con las recomendaciones técnicas correspondientes para el mecánico.

```javascript
// 1. Función de diagnóstico de síntomas
function diagnosticar(sintomas) {
  if (!Array.isArray(sintomas) || sintomas.length === 0) {
    return "No se reportaron síntomas para evaluar.";
  }

  const recomendaciones = [];

  // 2 y 4. Evaluación condicional de cada síntoma en el arreglo
  for (const sintoma of sintomas) {
    const sintomaNormalizado = sintoma.toLowerCase().trim();

    if (sintomaNormalizado === 'no enciende') {
      recomendaciones.push("- No enciende: Revisar carga de batería, bujía y sistema de encendido/carburador.");
    } else if (sintomaNormalizado === 'vibra') {
      recomendaciones.push("- Vibra: Inspeccionar balanceo de llantas, alineación de cadena y soportes del motor.");
    } else if (sintomaNormalizado === 'pierde aceite') {
      recomendaciones.push("- Pierde aceite: Verificar empaquetadura del cárter, retenes de suspensión o tapón de drenaje.");
    } else if (sintomaNormalizado === 'frena poco') {
      recomendaciones.push("- Frena poco: Comprobar desgaste de pastillas/zapatas, nivel de líquido y purgar sistema de frenos.");
    } else {
      recomendaciones.push(`- ${sintoma}: Síntoma desconocido. Realizar inspección general en taller.`);
    }
  }

  // 5. Generación del reporte final
  return `=== REPORTE DE DIAGNÓSTICO MECÁNICO ===\n${recomendaciones.join('\n')}`;
}

// Pruebas y validación de la función
const sintomasPiloto = ['no enciende', 'frena poco', 'pierde aceite'];
const reporteFinal = diagnosticar(sintomasPiloto);

console.log(reporteFinal);
```

- Breve explicación

Primero, se crea la función `diagnosticar(sintomas)` validando que el parámetro recibido sea un arreglo con información válida. A través de un bucle `for...of`, la función recorre la lista de síntomas reportados por el piloto tras la carrera.

A continuación, mediante estructuras condicionales `if / else if`, se evalúa cada síntoma normalizado en texto en busca de coincidencias específicas ('no enciende', 'vibra', 'pierde aceite', 'frena poco'). Para cada fallo identificado, se añade una sugerencia de reparación concreta al listado de recomendaciones del reporte.

Finalmente, la función procesa y une todas las recomendaciones acumuladas utilizando `.join('\n')` para devolver un reporte escrito claro e integral, facilitando la toma de decisiones del mecánico antes de intervenir la motocicleta.