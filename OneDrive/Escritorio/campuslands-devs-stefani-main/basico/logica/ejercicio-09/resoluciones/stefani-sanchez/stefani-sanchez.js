// Nombre: Stefani Sanchez
// Ejercicio 09 - Playlist para entrenamiento de kickboxing
//
// Razonamiento: Se filtran canciones con bpm > 135 y se agrupan por intensidad.
// Se suma la duracion total y se valida que este entre 15 y 25 minutos.
// Intensidad: media (136-149 bpm), alta (150-164 bpm), explosiva (>= 165 bpm).

const canciones = [
  { titulo: "Eye of the Tiger",  artista: "Survivor",       bpm: 109, duracionSeg: 245 },
  { titulo: "Stronger",          artista: "Kanye West",      bpm: 128, duracionSeg: 291 },
  { titulo: "Till I Collapse",   artista: "Eminem",          bpm: 171, duracionSeg: 297 },
  { titulo: "Jump",              artista: "Kris Kross",      bpm: 140, duracionSeg: 218 },
  { titulo: "Lose Yourself",     artista: "Eminem",          bpm: 171, duracionSeg: 326 },
  { titulo: "Thunderstruck",     artista: "AC/DC",           bpm: 134, duracionSeg: 292 },
  { titulo: "Power",             artista: "Kanye West",      bpm: 138, duracionSeg: 292 },
  { titulo: "Sabotage",          artista: "Beastie Boys",    bpm: 148, duracionSeg: 169 },
  { titulo: "Killing in the Name",artista: "Rage Against",   bpm: 150, duracionSeg: 313 },
  { titulo: "Crazy Train",       artista: "Ozzy Osbourne",   bpm: 138, duracionSeg: 282 },
  { titulo: "Welcome to the Jungle",artista: "Guns N Roses", bpm: 168, duracionSeg: 273 },
  { titulo: "Seven Nation Army", artista: "White Stripes",   bpm: 124, duracionSeg: 231 },
  { titulo: "War Pigs",          artista: "Black Sabbath",   bpm: 168, duracionSeg: 477 },
  { titulo: "Bodies",            artista: "Drowning Pool",   bpm: 178, duracionSeg: 198 },
];

function clasificarIntensidad(bpm) {
  if (bpm >= 165) return "explosiva";
  if (bpm >= 150) return "alta";
  return "media"; // 136-149
}

function armarPlaylist(lista) {
  const filtradas = lista.filter(c => c.bpm > 135);

  const conIntensidad = filtradas.map(c => ({
    ...c,
    intensidad: clasificarIntensidad(c.bpm),
  }));

  const grupos = {
    media:     conIntensidad.filter(c => c.intensidad === "media"),
    alta:      conIntensidad.filter(c => c.intensidad === "alta"),
    explosiva: conIntensidad.filter(c => c.intensidad === "explosiva"),
  };

  const duracionTotalSeg = conIntensidad.reduce((sum, c) => sum + c.duracionSeg, 0);
  const duracionTotalMin = duracionTotalSeg / 60;
  const esValida = duracionTotalMin >= 15 && duracionTotalMin <= 25;

  return { grupos, duracionTotalMin, esValida, total: conIntensidad.length };
}

const { grupos, duracionTotalMin, esValida, total } = armarPlaylist(canciones);

console.log("=== PLAYLIST DE KICKBOXING ===");
["media", "alta", "explosiva"].forEach(intensidad => {
  console.log(`\n-- Intensidad ${intensidad.toUpperCase()} --`);
  if (grupos[intensidad].length === 0) {
    console.log("  (ninguna cancion)");
  } else {
    grupos[intensidad].forEach(c => {
      const min = Math.floor(c.duracionSeg / 60);
      const seg = c.duracionSeg % 60;
      console.log(`  ${c.titulo} - ${c.artista} | ${c.bpm} bpm | ${min}:${String(seg).padStart(2,"0")}`);
    });
  }
});

console.log(`\nDuracion total: ${duracionTotalMin.toFixed(2)} minutos`);
console.log(`Playlist valida (15-25 min): ${esValida}`);
console.log(`Total de canciones: ${total}`);

// Validacion: 150 bpm => intensidad alta
console.log("\nValidacion: 150 bpm =>", clasificarIntensidad(150), "(esperado alta)");
