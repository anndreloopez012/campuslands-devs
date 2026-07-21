// Ejercicio 15 - Presupuesto de estudio de animacion 3D
// Autor: Juan Lema

const COSTO_HORA_MODELADO = 40000;
const COSTO_HORA_RENDER = 25000;
const COSTO_ARTISTA = 120000;
const UMBRAL_ESCENA_COSTOSA = 1000000;

// 1. Crea el listado de escenas del proyecto (datos de entrada)
function crearEscenas() {
  return [
    { nombre: "Batalla final", horasModelado: 25, horasRender: 15, artistas: 5 },
    { nombre: "Introduccion", horasModelado: 10, horasRender: 8, artistas: 3 },
    { nombre: "Persecucion nocturna", horasModelado: 18, horasRender: 12, artistas: 4 },
    { nombre: "Dialogo simple", horasModelado: 4, horasRender: 2, artistas: 2 },
    { nombre: "Explosion espacial", horasModelado: 30, horasRender: 20, artistas: 6 },
  ];
}

// 2. Calcula el costo de una sola escena
function calcularCosto(escena) {
  const { horasModelado, horasRender, artistas } = escena;
  return (
    horasModelado * COSTO_HORA_MODELADO +
    horasRender * COSTO_HORA_RENDER +
    artistas * COSTO_ARTISTA
  );
}

// Agrega el campo "costo" a cada escena sin mutar el arreglo original
function calcularCostos(escenas) {
  return escenas.map((escena) => ({ ...escena, costo: calcularCosto(escena) }));
}

// 3. Filtra las escenas cuyo costo supera el umbral
function filtrarEscenasCostosas(escenasConCosto, umbral = UMBRAL_ESCENA_COSTOSA) {
  return escenasConCosto.filter((escena) => escena.costo > umbral);
}

// 4. Calcula el costo total del proyecto
function calcularCostoTotal(escenasConCosto) {
  return escenasConCosto.reduce((total, escena) => total + escena.costo, 0);
}

// 5. Encuentra la escena mas costosa (o null si no hay escenas)
function obtenerEscenaMasCostosa(escenasConCosto) {
  if (escenasConCosto.length === 0) return null;

  return escenasConCosto.reduce((masCostosa, escena) =>
    escena.costo > masCostosa.costo ? escena : masCostosa
  );
}

// Formatea un numero como moneda simple (Q 1,000,000)
function formatearMoneda(numero) {
  return `Q ${numero.toLocaleString("es-GT")}`;
}

// Orquesta todo el proceso y arma el reporte final
function analizarPresupuesto(escenas) {
  const escenasConCosto = calcularCostos(escenas);
  const escenasCostosas = filtrarEscenasCostosas(escenasConCosto);
  const costoTotal = calcularCostoTotal(escenasConCosto);
  const escenaMasCostosa = obtenerEscenaMasCostosa(escenasConCosto);

  return { escenasConCosto, escenasCostosas, costoTotal, escenaMasCostosa };
}

function imprimirReporte(resultado) {
  const { escenasConCosto, escenasCostosas, costoTotal, escenaMasCostosa } = resultado;

  console.log("--- Costo por escena ---");
  if (escenasConCosto.length === 0) {
    console.log("  (no hay escenas para mostrar)");
  } else {
    escenasConCosto.forEach((escena) => {
      console.log(`  ${escena.nombre}: ${formatearMoneda(escena.costo)}`);
    });
  }

  console.log("\n--- Escenas costosas (costo > Q 1,000,000) ---");
  if (escenasCostosas.length === 0) {
    console.log("  (ninguna escena supera el umbral)");
  } else {
    escenasCostosas.forEach((escena) => {
      console.log(`  ${escena.nombre}: ${formatearMoneda(escena.costo)}`);
    });
  }

  console.log(`\nCosto total del proyecto: ${formatearMoneda(costoTotal)}`);

  if (escenaMasCostosa) {
    console.log(
      `Escena mas costosa: ${escenaMasCostosa.nombre} (${formatearMoneda(escenaMasCostosa.costo)})`
    );
  } else {
    console.log("Escena mas costosa: no hay escenas para evaluar.");
  }
}

// ---- Caso normal ----
const escenas = crearEscenas();
const resultadoNormal = analizarPresupuesto(escenas);
imprimirReporte(resultadoNormal);

// ---- Caso limite: lista vacia ----
console.log("\n\n--- Caso limite: sin escenas ---");
const resultadoVacio = analizarPresupuesto([]);
imprimirReporte(resultadoVacio);

// ---- Caso limite: escena en cero (no debe romper el calculo) ----
console.log("\n\n--- Caso limite: escena con horas y artistas en 0 ---");
const resultadoCero = analizarPresupuesto([
  { nombre: "Escena vacia de prueba", horasModelado: 0, horasRender: 0, artistas: 0 },
]);
imprimirReporte(resultadoCero);

module.exports = {
  crearEscenas,
  calcularCosto,
  calcularCostos,
  filtrarEscenasCostosas,
  calcularCostoTotal,
  obtenerEscenaMasCostosa,
  analizarPresupuesto,
};