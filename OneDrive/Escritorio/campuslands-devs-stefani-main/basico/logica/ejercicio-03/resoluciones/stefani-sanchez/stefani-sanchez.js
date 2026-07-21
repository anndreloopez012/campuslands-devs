// Ejercicio 03 - Gestor de personajes RPG
// Alumna: Stefani Sanchez
//
// Problema:
//   Una party RPG evalua personajes antes de entrar a una mazmorra.
//
// Proceso de pensamiento:
//   1. Defino personajes con nombre, clase, nivel, ataque y defensa.
//   2. Calculo poder = nivel * 2 + ataque + defensa.
//   3. Filtro personajes con poder < 60 (debiles).
//   4. Funcion que sugiere entrenar ataque o defensa segun el valor menor.
//   5. Muestro reporte de la party.

// ── Datos de entrada ──────────────────────────────────────────────────────────

var personajes = [
  { nombre: "Arion",   clase: "Mago",     nivel: 12, ataque: 35, defensa: 10 },
  { nombre: "Torga",   clase: "Guerrero", nivel: 8,  ataque: 20, defensa: 25 },
  { nombre: "Syla",    clase: "Arquera",  nivel: 5,  ataque: 15, defensa: 8  },
  { nombre: "Drakus",  clase: "Paladin",  nivel: 15, ataque: 30, defensa: 30 },
  { nombre: "Nim",     clase: "Rogue",    nivel: 3,  ataque: 10, defensa: 5  },
];

// ── Funciones ─────────────────────────────────────────────────────────────────

function calcularPoder(personaje) {
  return personaje.nivel * 2 + personaje.ataque + personaje.defensa;
}

function sugerirMejora(personaje) {
  if (personaje.ataque < personaje.defensa) {
    return "Entrenar ATAQUE (actual: " + personaje.ataque + ")";
  } else if (personaje.defensa < personaje.ataque) {
    return "Entrenar DEFENSA (actual: " + personaje.defensa + ")";
  }
  return "Balanceado, entrenar cualquiera";
}

// ── Procesamiento ─────────────────────────────────────────────────────────────

var personajesConPoder = personajes.map(function(p) {
  return {
    nombre:  p.nombre,
    clase:   p.clase,
    nivel:   p.nivel,
    ataque:  p.ataque,
    defensa: p.defensa,
    poder:   calcularPoder(p),
  };
});

var debiles  = personajesConPoder.filter(function(p) { return p.poder < 60; });
var fuertes  = personajesConPoder.filter(function(p) { return p.poder >= 60; });

// ── Mostrar resultado ─────────────────────────────────────────────────────────

console.log("=== REPORTE DE PARTY RPG ===\n");

console.log(">> Personajes listos para la mazmorra:");
fuertes.forEach(function(p) {
  console.log("  " + p.nombre + " [" + p.clase + "] - Poder: " + p.poder);
});

console.log("\n>> Personajes debiles (poder < 60) - necesitan entrenamiento:");
debiles.forEach(function(p) {
  console.log("  " + p.nombre + " [" + p.clase + "] - Poder: " + p.poder + " => " + sugerirMejora(p));
});

// ── Validacion con ejemplo del README ─────────────────────────────────────────
// Mago nivel 12, ataque 35, defensa 10 => poder = 12*2 + 35 + 10 = 69
// 69 >= 60 => NO es debil ✅
var arion = personajesConPoder.find(function(p) { return p.nombre === "Arion"; });
console.log("\nValidacion - Arion poder esperado 69:", arion.poder === 69 ? "✓" : "✗ Error");
