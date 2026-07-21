// Playlist kickboxing: filtra bpm>135, agrupa por intensidad y valida duración
const canciones = [
  { titulo: "Lose Yourself", artista: "Eminem", bpm: 171, duracionSeg: 326 },
  { titulo: "Till I Collapse", artista: "Eminem", bpm: 150, duracionSeg: 297 },
  { titulo: "Remember the Name", artista: "Fort Minor", bpm: 140, duracionSeg: 210 },
  { titulo: "Bulls on Parade", artista: "Rage Against", bpm: 160, duracionSeg: 228 }
];

// Filtrar bpm > 135
const filtradas = canciones.filter(c => c.bpm > 135);

// Clasificar por intensidad
const grupos = { media: [], alta: [], explosiva: [] };
filtradas.forEach(c => {
  if (c.bpm >= 150) grupos.explosiva.push(c);
  else if (c.bpm >= 135) grupos.alta.push(c);
  else grupos.media.push(c);
});

// Calcular duración total en minutos
const totalMin = filtradas.reduce((sum, c) => sum + c.duracionSeg, 0) / 60;

// Validar duración
const valida = totalMin >= 15 && totalMin <= 25;

// Mostrar resultados
console.log(`Canciones: ${filtradas.length}, Duración: ${totalMin.toFixed(2)} min, Válida: ${valida}`);
console.log("Media:", grupos.media.length, "Alta:", grupos.alta.length, "Explosiva:", grupos.explosiva.length);