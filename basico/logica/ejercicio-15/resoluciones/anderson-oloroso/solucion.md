# Resolución ejercicio 15 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el sistema de presupuestos y estimación de costos de un estudio de animación 3D (`costos_animacion.js`). Se define una colección de escenas con sus métricas de producción, se calcula el costo individual aplicando las tarifas por hora de modelado, hora de render y tarifa por artista, se identifican las escenas de alto costo ($\ge \$1,000,000$), se calcula el costo global del proyecto y se determina cuál es la escena más costosa.

```javascript
// 1. Registro base de escenas en producción 3D
const escenas = [
  { nombre: "Escena 01 - Introducción Ciudad", horasModelado: 12, horasRender: 8, artistas: 2 },
  { nombre: "Escena 02 - Batalla del Robot Giant", horasModelado: 25, horasRender: 18, artistas: 4 },
  { nombre: "Escena 03 - Interior Nave Espacial", horasModelado: 10, horasRender: 5, artistas: 1 },
  { nombre: "Escena 04 - Climax Volcán en Erupción", horasModelado: 30, horasRender: 24, artistas: 5 },
  { nombre: "Escena 05 - Créditos Finales", horasModelado: 3, horasRender: 2, artistas: 1 }
];

// Tarifas del estudio
const TARIFA_MODELADO = 40000;
const TARIFA_RENDER = 25000;
const TARIFA_ARTISTA = 120000;

// 2. Cálculo del costo de producción por escena
const escenasConCosto = escenas.map(escena => {
  const costoModelado = escena.horasModelado * TARIFA_MODELADO;
  const costoRender = escena.horasRender * TARIFA_RENDER;
  const costoArtistas = escena.artistas * TARIFA_ARTISTA;
  
  const costoTotalEscena = costoModelado + costoRender + costoArtistas;

  return {
    ...escena,
    costoTotalEscena
  };
});

// 3. Filtrar escenas con costo mayor a 1,000,000
const escenasCostosas = escenasConCosto.filter(escena => escena.costoTotalEscena > 1000000);

// 4. Calcular el costo total del proyecto
const costoTotalProyecto = escenasConCosto.reduce((acumulador, escena) => acumulador + escena.costoTotalEscena, 0);

// 5. Determinar la escena más costosa
const escenaMasCostosa = [...escenasConCosto].sort((a, b) => b.costoTotalEscena - a.costoTotalEscena)[0];

// Muestra de resultados
console.log("=== ESTUDIO DE ANIMACIÓN 3D - CONTROL DE PRESUPUESTO ===");
console.log("\n--- DETALLE DE ESCENAS ---");

escenasConCosto.forEach((escena, index) => {
  const etiquetaCostosa = escena.costoTotalEscena > 1000000 ? "⚠️ [ALTO COSTO]" : "✅ [DENTRO DE RANGO]";
  console.log(`${index + 1}. ${escena.nombre} ${etiquetaCostosa}`);
  console.log(`   - Modelado: ${escena.horasModelado}h | Render: ${escena.horasRender}h | Artistas: ${escena.artistas}`);
  console.log(`   - Costo escena: $${escena.costoTotalEscena.toLocaleString('es-CO')}`);
});

console.log("\n--- ESCENAS DE ALTO COSTO (> $1,000,000) ---");
escenasCostosas.forEach(escena => {
  console.log(`• ${escena.nombre}: $${escena.costoTotalEscena.toLocaleString('es-CO')}`);
});

console.log("\n--- RESUMEN GENERAL DEL PROYECTO ---");
console.log(`Costo Total del Proyecto: $${costoTotalProyecto.toLocaleString('es-CO')}`);
console.log(`Escena más costosa: ${escenaMasCostosa.nombre} ($${escenaMasCostosa.costoTotalEscena.toLocaleString('es-CO')})`);
```
- Breve explicación
Primero, se construye la estructura de datos que representa las escenas de la producción. Mediante .map(), se calcula el costo total de cada una aplicando la fórmula $Costo = (\text{horasModelado} \times 40000) + (\text{horasRender} \times 25000) + (\text{artistas} \times 120000)$
.A continuación, con el método .filter(), se seleccionan las escenas cuya inversión supera el millón de pesos/unidades monetarias ($> 1000000$) para ponerlas bajo revisión del productor. Adicionalmente, mediante .reduce(), se suman todos los costos individuales para obtener el presupuesto global de la producción 3D.
Finalmente, se utiliza .sort() ordenando de mayor a menor según el costo total para extraer mediante el índice [0] la escena con el costo de producción más elevado y presentar un informe detallado y ordenado en consola.