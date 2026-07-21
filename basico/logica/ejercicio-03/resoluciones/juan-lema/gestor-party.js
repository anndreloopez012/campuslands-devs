// rpg.js
// Gestor de personajes RPG: calcula poder, detecta personajes debiles
// y sugiere que estadistica entrenar.

const UMBRAL_PODER_DEBIL = 60;

function calcularPoder(personaje) {
  const { nivel, ataque, defensa } = personaje;
  return nivel * 2 + ataque + defensa;
}

function esDebil(personaje) {
  return calcularPoder(personaje) < UMBRAL_PODER_DEBIL;
}

function obtenerDebiles(party) {
  return party.filter(esDebil);
}

function sugerirMejora(personaje) {
  const { ataque, defensa } = personaje;
  // Se entrena la estadistica mas baja. En empate, se prioriza ataque.
  return ataque <= defensa ? "entrenar ataque" : "entrenar defensa";
}

function generarReporte(party) {
  if (party.length === 0) {
    return "No hay personajes en la party.";
  }

  return party
    .map((personaje) => {
      const poder = calcularPoder(personaje);
      const debil = poder < UMBRAL_PODER_DEBIL;
      const linea = `${personaje.nombre} (${personaje.clase}) — Poder: ${poder}`;

      return debil
        ? `${linea} — DEBIL — sugerencia: ${sugerirMejora(personaje)}`
        : linea;
    })
    .join("\n");
}

// ---- Datos de ejemplo ----
const party = [
  { nombre: "Aranok", clase: "Mago", nivel: 12, ataque: 35, defensa: 10 },
  { nombre: "Brenna", clase: "Guerrera", nivel: 8, ataque: 20, defensa: 15 },
  { nombre: "Corvin", clase: "Pícaro", nivel: 5, ataque: 12, defensa: 8 },
  { nombre: "Doria", clase: "Clériga", nivel: 10, ataque: 8, defensa: 30 },
];

console.log(generarReporte(party));
console.log(
  "Personajes debiles:",
  obtenerDebiles(party).map((p) => p.nombre),
);
