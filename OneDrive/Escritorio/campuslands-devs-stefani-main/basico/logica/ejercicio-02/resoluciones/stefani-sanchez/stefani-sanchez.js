// Ejercicio 02 - Inventario táctico de shooter
// Alumna: Stefani Sanchez
//
// Problema:
//   Un equipo de shooter competitivo revisa armas antes de entrar a ranked.
//
// Proceso de pensamiento:
//   1. Defino un arreglo de armas con nombre, tipo, municion y rareza.
//   2. Filtro las armas con municion >= 30.
//   3. Separo por tipo: rifle, pistola, francotirador.
//   4. Marco como recomendadas las de rareza 'rara' o 'epica'.
//   5. Muestro un resumen por tipo.

// ── Datos de entrada ──────────────────────────────────────────────────────────

var armas = [
  { nombre: "AK-47",       tipo: "rifle",          municion: 45, rareza: "epica"  },
  { nombre: "M4A4",        tipo: "rifle",          municion: 30, rareza: "rara"   },
  { nombre: "MP5",         tipo: "pistola",        municion: 20, rareza: "comun"  },
  { nombre: "Glock-18",    tipo: "pistola",        municion: 35, rareza: "rara"   },
  { nombre: "AWP",         tipo: "francotirador",  municion: 10, rareza: "epica"  },
  { nombre: "SSG 08",      tipo: "francotirador",  municion: 30, rareza: "comun"  },
  { nombre: "USP-S",       tipo: "pistola",        municion: 18, rareza: "comun"  },
];

// ── Funciones ─────────────────────────────────────────────────────────────────

function tieneMunicionSuficiente(arma) {
  return arma.municion >= 30;
}

function esRecomendada(arma) {
  return arma.rareza === "rara" || arma.rareza === "epica";
}

// ── Procesamiento ─────────────────────────────────────────────────────────────

var armasFiltradas = armas.filter(tieneMunicionSuficiente);

var rifles          = armasFiltradas.filter(function(a) { return a.tipo === "rifle"; });
var pistolas        = armasFiltradas.filter(function(a) { return a.tipo === "pistola"; });
var francotiradores = armasFiltradas.filter(function(a) { return a.tipo === "francotirador"; });

function mostrarGrupo(nombre, lista) {
  console.log("\n=== " + nombre.toUpperCase() + " ===");
  if (lista.length === 0) {
    console.log("  (ninguna con municion suficiente)");
    return;
  }
  lista.forEach(function(arma) {
    var etiqueta = esRecomendada(arma) ? " [RECOMENDADA]" : "";
    console.log("  " + arma.nombre + " | " + arma.municion + " balas | " + arma.rareza + etiqueta);
  });
}

// ── Mostrar resultado ─────────────────────────────────────────────────────────

console.log("=== INVENTARIO TACTICO - CARGA DE COMBATE ===");
mostrarGrupo("Rifles",          rifles);
mostrarGrupo("Pistolas",        pistolas);
mostrarGrupo("Francotiradores", francotiradores);

// ── Validacion con el ejemplo del README ──────────────────────────────────────
// "Si un rifle tiene 45 balas y rareza epica, debe aparecer como recomendado."
// AK-47: 45 balas, epica => aparece como [RECOMENDADA] ✅

// ── Caso extremo: arreglo vacio ───────────────────────────────────────────────
var armasVacias = [];
var filtradas = armasVacias.filter(tieneMunicionSuficiente);
console.log("\nCaso extremo - sin armas:", filtradas.length === 0 ? "ok (0 armas)" : "error");
