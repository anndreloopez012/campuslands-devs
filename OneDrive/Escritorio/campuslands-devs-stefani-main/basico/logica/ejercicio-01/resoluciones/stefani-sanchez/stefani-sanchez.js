// Ejercicio 01 - Ranking de escuadras battle royale
// Alumna: Stefani Sanchez
//
// Problema:
//   Un torneo battle royale necesita ordenar escuadras por puntos,
//   bajas y supervivencia.
//
// Proceso de pensamiento:
//   1. Defino las escuadras con sus datos base: nombre, bajas, posicion, revividos.
//   2. Calculo el puntaje total de cada escuadra:
//      - Puntos por bajas: bajas * 3
//      - Puntos por posicion: top 1 = 20, top 2 = 14, top 3 = 10, otros = 4
//   3. Sumo ambos valores para obtener el puntaje final.
//   4. Ordeno el arreglo de mayor a menor puntaje.
//   5. Muestro el ranking numerado con nombre y puntos.

// ── Datos de entrada ──────────────────────────────────────────────────────────

const escuadras = [
  { nombre: "Nova",      bajas: 8, posicion: 1, revividos: 2 },
  { nombre: "Phantom",   bajas: 5, posicion: 2, revividos: 1 },
  { nombre: "Titan",     bajas: 3, posicion: 3, revividos: 0 },
  { nombre: "Vortex",    bajas: 6, posicion: 5, revividos: 3 },
  { nombre: "Striker",   bajas: 2, posicion: 8, revividos: 1 },
];

// ── Funciones de cálculo ──────────────────────────────────────────────────────

/**
 * Calcula los puntos obtenidos según la posición final de la escuadra.
 * @param {number} posicion - Posición final en el torneo (1 es el mejor).
 * @returns {number} Puntos por posición.
 */
function calcularPuntosPorPosicion(posicion) {
  if (posicion === 1) return 20;
  if (posicion === 2) return 14;
  if (posicion === 3) return 10;
  return 4;
}

/**
 * Calcula el puntaje total de una escuadra.
 * @param {Object} escuadra - Objeto con los datos de la escuadra.
 * @returns {number} Puntaje total.
 */
function calcularPuntajeTotal(escuadra) {
  const puntosBajas    = escuadra.bajas * 3;
  const puntosPosicion = calcularPuntosPorPosicion(escuadra.posicion);
  return puntosBajas + puntosPosicion;
}

// ── Procesamiento ─────────────────────────────────────────────────────────────

// Agrego el puntaje calculado a cada escuadra
const escuadrasConPuntaje = escuadras.map(function(escuadra) {
  return {
    nombre:   escuadra.nombre,
    bajas:    escuadra.bajas,
    posicion: escuadra.posicion,
    puntaje:  calcularPuntajeTotal(escuadra),
  };
});

// Ordeno de mayor a menor puntaje
const ranking = escuadrasConPuntaje.sort(function(a, b) {
  return b.puntaje - a.puntaje;
});

// ── Mostrar resultado ─────────────────────────────────────────────────────────

console.log("=== RANKING BATTLE ROYALE ===");
ranking.forEach(function(escuadra, indice) {
  const puesto = indice + 1;
  console.log(puesto + ". " + escuadra.nombre + " - " + escuadra.puntaje + " pts");
});

// ── Validación con el ejemplo del README ──────────────────────────────────────
// Entrada:  [{ nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 }]
// Esperado: 1. Nova - 44 pts
//
// Verificación manual:
//   puntosBajas    = 8 * 3 = 24
//   puntosPosicion = 20  (posicion 1)
//   total          = 24 + 20 = 44  ✅

// ── Caso extremo: escuadra sin bajas en última posición ───────────────────────
const casosExtremos = [
  { nombre: "Cero", bajas: 0, posicion: 20, revividos: 0 },
];
const extremoConPuntaje = casosExtremos.map(function(e) {
  return { nombre: e.nombre, puntaje: calcularPuntajeTotal(e) };
});
console.log("\n=== CASO EXTREMO ===");
console.log("Cero bajas, ultima posicion => " + extremoConPuntaje[0].puntaje + " pts");
// Esperado: 0*3 + 4 = 4 pts
