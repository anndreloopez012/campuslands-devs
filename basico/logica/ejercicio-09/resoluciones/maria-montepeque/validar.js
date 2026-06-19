// validar.js - Playlist para entrenamiento de kickboxing

const canciones = [
  // Estas pasan el filtro (bpm > 135)
  { titulo: "Warrior",          artista: "Ke$ha",           bpm: 140, duracionSeg: 210 },
  { titulo: "Till I Collapse",  artista: "Eminem",          bpm: 171, duracionSeg: 298 },
  { titulo: "Sandstorm",        artista: "Darude",          bpm: 136, duracionSeg: 230 },
  { titulo: "Pump It",          artista: "Black Eyed Peas", bpm: 155, duracionSeg: 213 },
  { titulo: "Power",            artista: "Kanye West",      bpm: 172, duracionSeg: 289 },
  // Estas NO pasan el filtro (bpm <= 135)
  { titulo: "Eye of the Tiger", artista: "Survivor",        bpm: 109, duracionSeg: 245 },
  { titulo: "Remember the Name",artista: "Fort Minor",      bpm: 135, duracionSeg: 215 },
  { titulo: "Stronger",         artista: "Kanye West",      bpm: 104, duracionSeg: 312 },
];

// ── Paso 1: filtrar canciones con bpm > 135 ──────────────────────────────────
const cancionesFiltradas = canciones.filter(cancion => cancion.bpm > 135);

// ── Paso 2: clasificar por intensidad ────────────────────────────────────────
function clasificarIntensidad(bpm) {
  if (bpm >= 136 && bpm <= 155) return "media";
  if (bpm >= 156 && bpm <= 170) return "alta";
  return "explosiva"; // bpm > 170
}

const cancionesConIntensidad = cancionesFiltradas.map(cancion => ({
  ...cancion,
  intensidad: clasificarIntensidad(cancion.bpm),
}));

// ── Paso 3: agrupar por intensidad ───────────────────────────────────────────
const grupos = { media: [], alta: [], explosiva: [] };

for (const cancion of cancionesConIntensidad) {
  grupos[cancion.intensidad].push(cancion);
}

// ── Paso 4: sumar duración total ─────────────────────────────────────────────
const totalSegundos = cancionesConIntensidad.reduce(
  (acumulado, cancion) => acumulado + cancion.duracionSeg,
  0
);
const totalMinutos = totalSegundos / 60;

// ── Paso 5: validar duración entre 15 y 25 minutos ───────────────────────────
const MINIMO_MIN = 15;
const MAXIMO_MIN = 25;
const duracionValida = totalMinutos >= MINIMO_MIN && totalMinutos <= MAXIMO_MIN;

// ── Resultados ────────────────────────────────────────────────────────────────
console.log("=== PLAYLIST DE KICKBOXING ===\n");
console.log(`Canciones originales: ${canciones.length}`);
console.log(`Canciones filtradas (bpm > 135): ${cancionesFiltradas.length}\n`);

for (const nivel of ["media", "alta", "explosiva"]) {
  console.log(`── Intensidad ${nivel.toUpperCase()} ──`);
  if (grupos[nivel].length === 0) {
    console.log("  (sin canciones en este nivel)");
  } else {
    for (const c of grupos[nivel]) {
      const mins = Math.floor(c.duracionSeg / 60);
      const segs = c.duracionSeg % 60;
      console.log(`  • ${c.titulo} – ${c.artista} | ${c.bpm} bpm | ${mins}:${String(segs).padStart(2,"0")}`);
    }
  }
  console.log();
}

console.log(`Duración total: ${totalSegundos} seg (${totalMinutos.toFixed(2)} min)`);
console.log(`Rango válido: ${MINIMO_MIN}–${MAXIMO_MIN} minutos`);
console.log(`¿Playlist válida? ${duracionValida ? "✅ SÍ" : "❌ NO"}\n`);

// ── Caso límite: lista vacía ──────────────────────────────────────────────────
console.log("=== CASO LÍMITE: lista vacía ===");
const listaVacia = [];
const filtradaVacia = listaVacia.filter(c => c.bpm > 135);
const totalVacio = filtradaVacia.reduce((acc, c) => acc + c.duracionSeg, 0);
const validoVacio = (totalVacio / 60) >= MINIMO_MIN && (totalVacio / 60) <= MAXIMO_MIN;
console.log(`Canciones filtradas: ${filtradaVacia.length}`);
console.log(`Duración total: ${totalVacio} seg`);
console.log(`¿Playlist válida? ${validoVacio ? "✅ SÍ" : "❌ NO — playlist vacía no cumple el rango"}\n`);

// ── Caso límite: duración exactamente en el borde inferior (15 min) ───────────────────────────
console.log("=== CASO LÍMITE: duración exactamente en el borde inferior (15 min) ===");
const cancionBorde = [{ titulo: "BordeSong", artista: "TestArtist", bpm: 160, duracionSeg: 900 }];
const filtradaBorde = cancionBorde.filter(c => c.bpm > 135);
const totalBorde = filtradaBorde.reduce((acc, c) => acc + c.duracionSeg, 0);
const validoBorde = (totalBorde / 60) >= MINIMO_MIN && (totalBorde / 60) <= MAXIMO_MIN;
console.log(`Canciones filtradas: ${filtradaBorde.length}`);
console.log(`Duración total: ${totalBorde} seg (${totalBorde / 60} min)`);
console.log(`¿Playlist válida? ${validoBorde ? "✅ SÍ — cumple exactamente el mínimo" : "❌ NO"}`);
