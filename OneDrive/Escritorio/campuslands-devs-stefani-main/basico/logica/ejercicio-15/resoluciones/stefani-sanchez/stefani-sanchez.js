// Nombre: Stefani Sanchez
// Ejercicio 15 - Presupuesto de estudio de animacion 3D
//
// Razonamiento: Se calcula el costo de cada escena con la formula:
// costo = horasModelado*40000 + horasRender*25000 + artistas*120000
// Se filtran las escenas costosas (> 1,000,000), se calcula el total del proyecto
// y se identifica la escena mas costosa.

const escenas = [
  { nombre: "Intro Bosque",       horasModelado: 8,  horasRender: 6,  artistas: 2 },
  { nombre: "Batalla Final",      horasModelado: 20, horasRender: 30, artistas: 5 },
  { nombre: "Ciudad al amanecer", horasModelado: 12, horasRender: 10, artistas: 3 },
  { nombre: "Cueva del dragon",   horasModelado: 15, horasRender: 20, artistas: 4 },
  { nombre: "Creditos",           horasModelado: 3,  horasRender: 2,  artistas: 1 },
  { nombre: "Rio en tormenta",    horasModelado: 10, horasRender: 8,  artistas: 2 },
];

function calcularCosto(escena) {
  return escena.horasModelado * 40_000 +
         escena.horasRender   * 25_000 +
         escena.artistas      * 120_000;
}

function procesarEscenas(lista) {
  const conCosto = lista.map(escena => ({
    ...escena,
    costo: calcularCosto(escena),
  }));

  const costosas    = conCosto.filter(e => e.costo > 1_000_000);
  const costoTotal  = conCosto.reduce((sum, e) => sum + e.costo, 0);
  const masCostosa  = conCosto.reduce((max, e) => e.costo > max.costo ? e : max, conCosto[0]);

  return { conCosto, costosas, costoTotal, masCostosa };
}

const { conCosto, costosas, costoTotal, masCostosa } = procesarEscenas(escenas);

console.log("=== PRESUPUESTO ESTUDIO DE ANIMACION 3D ===\n");
conCosto.forEach(e => {
  const alerta = e.costo > 1_000_000 ? " [COSTOSA]" : "";
  console.log(`${e.nombre.padEnd(22)} | Costo: $${e.costo.toLocaleString()}${alerta}`);
});

console.log(`\n--- Escenas con costo > $1,000,000 (${costosas.length}) ---`);
costosas.forEach(e => console.log(`  ${e.nombre} => $${e.costo.toLocaleString()}`));

console.log(`\nCosto total del proyecto: $${costoTotal.toLocaleString()}`);
console.log(`Escena mas costosa: "${masCostosa.nombre}" con $${masCostosa.costo.toLocaleString()}`);

// Validacion: 10h modelado, 8h render, 3 artistas => 10*40000 + 8*25000 + 3*120000 = 960000
const testCosto = 10 * 40_000 + 8 * 25_000 + 3 * 120_000;
console.log(`\nValidacion: 10h modelado, 8h render, 3 artistas => $${testCosto.toLocaleString()} (esperado 960,000)`);
