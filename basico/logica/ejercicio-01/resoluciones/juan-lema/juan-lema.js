// ranking-battle-royale.js
// Autor: Juan Lema
// Ejercicio 1 de lógica - Ranking de escuadras battle royale

function obtenerPuntosPorLugar(lugarFinal) {
  const tablaDePuntos = { 1: 20, 2: 14, 3: 10 };
  return tablaDePuntos[lugarFinal] ?? 4;
}

function calcularPuntajeEscuadra(escuadra) {
  return escuadra.bajas * 3 + obtenerPuntosPorLugar(escuadra.posicion);
}

function generarRankingFinal(escuadras) {
  if (!Array.isArray(escuadras) || escuadras.length === 0) {
    console.log("No hay escuadras para mostrar.");
    return [];
  }

  const tablaOrdenada = escuadras
    .map((e) => ({ nombre: e.nombre, puntaje: calcularPuntajeEscuadra(e) }))
    .sort((a, b) => b.puntaje - a.puntaje);

  console.log("=== RANKING BATTLE ROYALE ===");
  tablaOrdenada.forEach((equipo, i) =>
    console.log(`${i + 1}. ${equipo.nombre} - ${equipo.puntaje} pts.`),
  );

  return tablaOrdenada;
}

// --- Validación: caso normal ---
console.log("\n--- Caso normal ---");
generarRankingFinal([
  { nombre: "Nova", bajas: 8, posicion: 1, revividos: 2 },
  { nombre: "Fenix", bajas: 5, posicion: 2, revividos: 1 },
  { nombre: "Halcón", bajas: 3, posicion: 5, revividos: 0 },
]);

console.log("\n--- Caso límite: vacío ---");
generarRankingFinal([]);

console.log("\n--- Caso límite: bajas/posición en cero ---");
generarRankingFinal([
  { nombre: "Sombra", bajas: 0, posicion: 10, revividos: 0 },
  { nombre: "Ceniza", bajas: 0, posicion: 3, revividos: 0 },
]);
