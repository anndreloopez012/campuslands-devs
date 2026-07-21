
const canciones = [
  { titulo: "Blinding Lights", artista: "The Weeknd", bpm: 171, duracionSeg: 200 },
  { titulo: "As It Was", artista: "Harry Styles", bpm: 174, duracionSeg: 167 },
  { titulo: "Levitating", artista: "Dua Lipa", bpm: 103, duracionSeg: 203 },
  { titulo: "Physical", artista: "Dua Lipa", bpm: 147, duracionSeg: 193 },
  { titulo: "Don't Start Now", artista: "Dua Lipa", bpm: 124, duracionSeg: 183 },
  { titulo: "Head & Heart", artista: "Joel Corry", bpm: 123, duracionSeg: 166 },
  { titulo: "Run Boy Run", artista: "Woodkid", bpm: 136, duracionSeg: 213 },
  { titulo: "Sandstorm", artista: "Darude", bpm: 136, duracionSeg: 223 },
  { titulo: "Firestarter", artista: "The Prodigy", bpm: 140, duracionSeg: 280 }
];

// Función auxiliar para determinar categoría de intensidad
function clasificarIntensidad(bpm) {
  if (bpm >= 136 && bpm <= 145) {
    return 'media';
  } else if (bpm >= 146 && bpm <= 160) {
    return 'alta';
  } else if (bpm > 160) {
    return 'explosiva';
  }
  return 'baja';
}

// 2. Filtrar canciones con bpm mayor a 135
const cancionesFiltradas = canciones.filter(cancion => cancion.bpm > 135);

// 3. Agrupar por intensidad: media, alta, explosiva
const cancionesAgrupadas = cancionesFiltradas.reduce((acc, cancion) => {
  const intensidad = clasificarIntensidad(cancion.bpm);
  if (!acc[intensidad]) {
    acc[intensidad] = [];
  }
  acc[intensidad].push(cancion);
  return acc;
}, { media: [], alta: [], explosiva: [] });

// 4. Sumar duracion total (en segundos y minutos)
const duracionTotalSeg = cancionesFiltradas.reduce((total, cancion) => total + cancion.duracionSeg, 0);
const duracionTotalMin = (duracionTotalSeg / 60).toFixed(2);

// 5. Validar que la playlist dure entre 15 y 25 minutos
const esValida = duracionTotalMin >= 15 && duracionTotalMin <= 25;

// Consola de resultados
console.log("=== CANCIONES FILTRADAS (> 135 BPM) ===");
console.log(cancionesFiltradas);

console.log("\n=== AGRUPACIÓN POR INTENSIDAD ===");
console.log(cancionesAgrupadas);

console.log("\n=== RESUMEN Y VALIDACIÓN DE DURACIÓN ===");
console.log(`Duración total: ${duracionTotalSeg} segundos (${duracionTotalMin} minutos)`);
console.log(`¿La playlist cumple la duración entre 15 y 25 min?: ${esValida ? "SÍ (VÁLIDA )" : "NO (INVÁLIDA )"}`);