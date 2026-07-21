// Ejercicio 04 - Control de líneas MOBA
// Alumna: Stefani Sanchez
//
// Problema:
//   Un coach MOBA analiza desempeño de top, jungla, mid, ADC y soporte.
//
// Proceso de pensamiento:
//   1. Guardo jugadores con rol, kills, deaths, assists, oro y objetivos.
//   2. Calculo KDA = (kills + assists) / max(deaths, 1) para evitar division por cero.
//   3. Marco como "oro alto" si supera 12000.
//   4. Ordeno por KDA de mayor a menor.
//   5. Muestro alertas para roles con pocos objetivos (< 2).

// ── Datos de entrada ──────────────────────────────────────────────────────────

var jugadores = [
  { nombre: "SkyHawk",  rol: "Top",     kills: 5,  deaths: 2, assists: 8,  oro: 13200, objetivos: 1 },
  { nombre: "NightOwl", rol: "Jungla",  kills: 8,  deaths: 3, assists: 12, oro: 11800, objetivos: 3 },
  { nombre: "StarFire",  rol: "Mid",    kills: 10, deaths: 0, assists: 5,  oro: 14500, objetivos: 2 },
  { nombre: "AimBot",   rol: "ADC",     kills: 7,  deaths: 4, assists: 6,  oro: 15000, objetivos: 1 },
  { nombre: "Guardian", rol: "Soporte", kills: 1,  deaths: 5, assists: 20, oro: 8000,  objetivos: 0 },
];

// ── Funciones ─────────────────────────────────────────────────────────────────

function calcularKDA(jugador) {
  var divisor = Math.max(jugador.deaths, 1);
  return (jugador.kills + jugador.assists) / divisor;
}

function oroAlto(jugador) {
  return jugador.oro > 12000;
}

// ── Procesamiento ─────────────────────────────────────────────────────────────

var jugadoresConKDA = jugadores.map(function(j) {
  return {
    nombre:     j.nombre,
    rol:        j.rol,
    kda:        calcularKDA(j),
    oro:        j.oro,
    oroAlto:    oroAlto(j),
    objetivos:  j.objetivos,
  };
});

jugadoresConKDA.sort(function(a, b) { return b.kda - a.kda; });

// ── Mostrar resultado ─────────────────────────────────────────────────────────

console.log("=== ANALISIS DE LINEAS MOBA ===\n");
console.log("Ranking por KDA:");
jugadoresConKDA.forEach(function(j, i) {
  var kdaStr  = j.kda.toFixed(2);
  var oroStr  = j.oroAlto ? " [ORO ALTO]" : "";
  console.log("  " + (i + 1) + ". " + j.nombre + " [" + j.rol + "] - KDA: " + kdaStr + oroStr);
});

console.log("\nAlertas por pocos objetivos (< 2):");
jugadoresConKDA.forEach(function(j) {
  if (j.objetivos < 2) {
    console.log("  ALERTA: " + j.nombre + " [" + j.rol + "] - solo " + j.objetivos + " objetivo(s)");
  }
});

// ── Validacion ────────────────────────────────────────────────────────────────
// StarFire: deaths = 0 => divisor = max(0,1) = 1 => KDA = (10+5)/1 = 15 (no divide entre 0) ✅
var star = jugadoresConKDA.find(function(j) { return j.nombre === "StarFire"; });
console.log("\nValidacion - StarFire KDA = 15:", star.kda === 15 ? "✓" : "✗ Error");
