// Validaciones del simulador de carreras urbanas

const { registrarResultadoCarrera, calcularPuntos } = require("./resultados");

// Caso 1 — Normal: piloto válido en posición 1
const casoNormal = registrarResultadoCarrera("Andy Wallace", 1, 3845);
console.log("Caso normal:", casoNormal);
// Esperado: { piloto: "Andy Wallace", posicion: 1, tiempoSegundos: 3845, puntos: 25 }

// Caso 2 — Límite: posición fuera del rango (posición 11, no hay puntos)
const casoLimite = registrarResultadoCarrera("Mick Doohan", 11, 3990);
console.log("Caso límite (posición 11):", casoLimite);
// Esperado: { ..., puntos: 0 }

// Caso 3 — Vacío/nulo: nombre vacío
const casoVacio = registrarResultadoCarrera("", 2, 3900);
console.log("Caso vacío (nombre vacío):", casoVacio);
// Esperado: { error: "El nombre del piloto no puede estar vacío." }

// Caso 4 — Tiempo en cero (dato corrupto)
const casoTiempoCero = registrarResultadoCarrera("Andy Wallace", 2, 0);
console.log("Caso tiempo en cero:", casoTiempoCero);
// Esperado: { error: "El tiempo debe ser mayor a cero segundos." }
