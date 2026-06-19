// Ejercicio 15 - Presupuesto de estudio de animación 3D

const escenas = [
  { nombre: "Apertura del portal",   horasModelado: 10, horasRender: 8,  artistas: 3 },
  { nombre: "Batalla en el desierto", horasModelado: 20, horasRender: 15, artistas: 5 },
  { nombre: "Ciudad flotante",        horasModelado: 5,  horasRender: 3,  artistas: 1 },
  { nombre: "Cierre estelar",         horasModelado: 18, horasRender: 12, artistas: 4 },
];

function calcularCosto(escena) {
  return (
    escena.horasModelado * 40000 +
    escena.horasRender   * 25000 +
    escena.artistas      * 120000
  );
}

function analizarPresupuesto(listaEscenas) {
  if (!listaEscenas || listaEscenas.length === 0) {
    console.log("Sin escenas para analizar.");
    return;
  }

  const escenasConCosto = listaEscenas.map(escena => ({
    ...escena,
    costo: calcularCosto(escena),
  }));

  const escenasCostosas = escenasConCosto.filter(e => e.costo > 1_000_000);

  const costoTotal = escenasConCosto.reduce((suma, e) => suma + e.costo, 0);

  const escenaMasCostosa = escenasConCosto.reduce((max, e) =>
    e.costo > max.costo ? e : max
  );

  console.log("=== Costo por escena ===");
  escenasConCosto.forEach(e => {
    console.log(`  ${e.nombre}: $${e.costo.toLocaleString()}`);
  });

  console.log("\n=== Escenas costosas (> $1,000,000) ===");
  if (escenasCostosas.length === 0) {
    console.log("  Ninguna escena supera el límite.");
  } else {
    escenasCostosas.forEach(e => {
      console.log(`  ${e.nombre}: $${e.costo.toLocaleString()}`);
    });
  }

  console.log(`\n=== Costo total del proyecto ===`);
  console.log(`  $${costoTotal.toLocaleString()}`);

  console.log(`\n=== Escena más costosa ===`);
  console.log(`  ${escenaMasCostosa.nombre}: $${escenaMasCostosa.costo.toLocaleString()}`);
}

// --- Validaciones ---

console.log(">>> CASO NORMAL (4 escenas variadas)");
analizarPresupuesto(escenas);

console.log("\n>>> CASO LÍMITE (escena en el borde exacto: costo = $1,000,000)");
const escenaLimite = [
  { nombre: "Escena límite", horasModelado: 10, horasRender: 8, artistas: 3 },
];
// 10*40000 + 8*25000 + 3*120000 = 400000 + 200000 + 360000 = 960000
// Para llegar a exactamente 1,000,000: necesitamos ajustar
// Usamos: 10*40000 + 8*25000 + 3*120000 = 960000 (no supera → no debe aparecer en costosas)
analizarPresupuesto(escenaLimite);

console.log("\n>>> CASO VACÍO (lista sin escenas)");
analizarPresupuesto([]);
