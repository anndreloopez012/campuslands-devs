// ============================================
// Playlist de canciones
// ============================================

const canciones = [
    {
        titulo: "Titanium",
        artista: "David Guetta ft. Sia",
        bpm: 126,
        duracionSeg: 245
    },
    {
        titulo: "Animals",
        artista: "Martin Garrix",
        bpm: 128,
        duracionSeg: 302
    },
    {
        titulo: "Tsunami",
        artista: "DVBBS & Borgeous",
        bpm: 140,
        duracionSeg: 215
    },
    {
        titulo: "Hardwell Live",
        artista: "Hardwell",
        bpm: 150,
        duracionSeg: 360
    },
    {
        titulo: "The Hum",
        artista: "Dimitri Vegas & Like Mike",
        bpm: 138,
        duracionSeg: 285
    },
    {
        titulo: "Wake Me Up",
        artista: "Avicii",
        bpm: 124,
        duracionSeg: 247
    }
];

console.log("=== Playlist ===");
console.table(canciones);

// ============================================
// 1. Filtrar canciones con BPM mayor a 135
// ============================================

const cancionesRapidas = canciones.filter(
    cancion => cancion.bpm > 135
);

console.log("\n=== Canciones con BPM mayor a 135 ===");
console.table(cancionesRapidas);

// ============================================
// 2. Agrupar por intensidad
// ============================================

const cancionesClasificadas = canciones.map(cancion => {

    let intensidad;

    if (cancion.bpm <= 120) {
        intensidad = "Media";
    } else if (cancion.bpm <= 140) {
        intensidad = "Alta";
    } else {
        intensidad = "Explosiva";
    }

    return {
        ...cancion,
        intensidad
    };
});

console.log("\n=== Clasificación por intensidad ===");
console.table(cancionesClasificadas);

// ============================================
// 3. Calcular duración total
// ============================================

const duracionTotalSeg = canciones.reduce(
    (total, cancion) => total + cancion.duracionSeg,
    0
);

const minutos = Math.floor(duracionTotalSeg / 60);
const segundos = duracionTotalSeg % 60;

console.log(
    `\nDuración total: ${minutos} min ${segundos} seg`
);

// ============================================
// 4. Validar duración de la playlist
// ============================================

const minimo = 15 * 60;
const maximo = 25 * 60;

console.log("\n=== Validación ===");

if (duracionTotalSeg >= minimo && duracionTotalSeg <= maximo) {
    console.log("✅ La playlist cumple con la duración requerida.");
} else {
    console.log("❌ La playlist NO cumple con la duración requerida.");
}
