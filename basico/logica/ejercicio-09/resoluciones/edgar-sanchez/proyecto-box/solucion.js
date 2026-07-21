// 1. Definición del listado de canciones
const canciones = [
  { titulo: "Eye of the Tiger", artista: "Survivor", bpm: 109, duracionSeg: 245 },
  { titulo: "Till I Collapse", artista: "Eminem", bpm: 171, duracionSeg: 298 },
  { titulo: "Bleed It Out", artista: "Linkin Park", bpm: 140, duracionSeg: 164 },
  { titulo: "X Gon' Give It To Ya", artista: "DMX", bpm: 190, duracionSeg: 218 },
  { titulo: "Kickstart My Heart", artista: "Mötley Crüe", bpm: 179, duracionSeg: 284 },
  { titulo: "Custer", artista: "Slipknot", bpm: 136, duracionSeg: 254 },
  { titulo: "Bulls On Parade", artista: "Rage Against The Machine", bpm: 83, duracionSeg: 231 }
];

// 2. Filtrar canciones con BPM > 135
const cancionesFiltradas = canciones.filter(cancion => cancion.bpm > 135);

// 3. Agrupar por intensidad usando reduce
const playlist = cancionesFiltradas.reduce((acc, cancion) => {
  let intensidad = "media";
  if (cancion.bpm > 175) {
    intensidad = "explosiva";
  } else if (cancion.bpm > 150) {
    intensidad = "alta";
  }
  
  acc[intensidad].push({ ...cancion, intensidad });
  return acc;
}, { media: [], alta: [], explosiva: [] });

// 4. Sumar duración total
const duracionTotalSeg = cancionesFiltradas.reduce((total, c) => total + c.duracionSeg, 0);
const duracionTotalMin = duracionTotalSeg / 60;

// 5. Validar que la playlist dure entre 15 y 25 minutos
const esValida = duracionTotalMin >= 15 && duracionTotalMin <= 25;

// --- Salida de Resultados ---
console.log("=== PLAYLIST PARA KICKBOXING ===");
Object.keys(playlist).forEach(nivel => {
  console.log(`\n[Intensidad ${nivel.toUpperCase()}] (${playlist[nivel].length} canciones):`);
  playlist[nivel].forEach(t => {
    const mins = Math.floor(t.duracionSeg / 60);
    const segs = String(t.duracionSeg % 60).padStart(2, '0');
    console.log(`  - ${t.titulo} - ${t.artista} (${t.bpm} BPM) [${mins}:${segs}]`);
  });
});

console.log("\n--- RESUMEN Y VALIDACIÓN ---");
const minsTotales = Math.floor(duracionTotalSeg / 60);
const segsTotales = String(duracionTotalSeg % 60).padStart(2, '0');
console.log(`Duración total: ${minsTotales}:${segsTotales} (${duracionTotalMin.toFixed(2)} min)`);

if (esValida) {
  console.log(" Status: ¡PLAYLIST VÁLIDA! Cumple con el rango permitido (15 a 25 min).");
} else {
  console.log(" Status: PLAYLIST INVÁLIDA. Requiere más o menos canciones.");
}