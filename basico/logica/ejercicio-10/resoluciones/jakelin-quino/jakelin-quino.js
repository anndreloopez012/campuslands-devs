// Maratón de películas de miedo: filtramos rating >= 7 y duración máxima 6 horas (360 min)
const peliculas = [
  { titulo: "El Exorcista", duracionMin: 122, sustos: 8, rating: 8.0 },
  { titulo: "El Resplandor", duracionMin: 146, sustos: 7, rating: 8.4 },
  { titulo: "Halloween", duracionMin: 91, sustos: 9, rating: 7.7 },
  { titulo: "La Monja", duracionMin: 96, sustos: 6, rating: 5.9 },
  { titulo: "It", duracionMin: 135, sustos: 8, rating: 7.3 },
  { titulo: "El Conjuro", duracionMin: 112, sustos: 9, rating: 7.5 },
  { titulo: "Actividad Paranormal", duracionMin: 86, sustos: 5, rating: 6.3 },
  { titulo: "Scream", duracionMin: 111, sustos: 7, rating: 7.4 }
];

// Filtrar rating >= 7
const filtradas = peliculas.filter(p => p.rating >= 7);

// Seleccionar películas sin pasar 360 minutos
const seleccionadas = [];
let totalMin = 0;

for (const p of filtradas) {
  if (totalMin + p.duracionMin <= 360) {
    seleccionadas.push(p);
    totalMin += p.duracionMin;
  }
}

// Calcular total de sustos
const totalSustos = seleccionadas.reduce((sum, p) => sum + p.sustos, 0);

// Mostrar resultados
console.log("=== MARATÓN DE MIEDO ===");
console.log(`Películas seleccionadas: ${seleccionadas.length}`);
console.log(`Duración total: ${totalMin} minutos (${(totalMin/60).toFixed(1)} horas)`);
console.log(`Total de sustos: ${totalSustos}`);
console.log("\nLista de películas:");
seleccionadas.forEach(p => {
  console.log(`- ${p.titulo} (${p.duracionMin} min, sustos: ${p.sustos}, rating: ${p.rating})`);
});