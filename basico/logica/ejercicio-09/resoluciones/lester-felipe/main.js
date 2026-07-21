//  Crear el inventario de canciones disponibles
const repertorioCanciones = [
    { titulo: "Eye of the Tiger (Remix)", artista: "Surv", bpm: 140, duracionSeg: 240 },
    { titulo: "Thunderstruck", artista: "AC/DC", bpm: 133, duracionSeg: 292 }, // No pasa el filtro (>135 bpm)
    { titulo: "Kickback", artista: "Kenshi Y.", bpm: 170, duracionSeg: 193 },
    { titulo: "Spitfire", artista: "The Prodigy", bpm: 142, duracionSeg: 305 },
    { titulo: "Bulls on Parade", artista: "RATM", bpm: 150, duracionSeg: 230 },
    { titulo: "Bleed It Out", artista: "Linkin Park", bpm: 140, duracionSeg: 164 },
    { titulo: "Till I Collapse", artista: "Eminem", bpm: 171, duracionSeg: 297 }
];

// Función principal para organizar la playlist de Kickboxing
function organizarPlaylistKickboxing(canciones) {
    //  Filtrar canciones con bpm mayor a 135
    const cancionesFiltradas = canciones.filter(cancione => cancione.bpm > 135);

    //  Agrupar por intensidad: media, alta, explosiva
    const playlistAgrupada = {
        media: [],
        alta: [],
        explosiva: []
    };

    cancionesFiltradas.forEach(cancion => {
        if (cancion.bpm > 135 && cancion.bpm <= 145) {
            playlistAgrupada.media.push(cancion);
        } else if (cancion.bpm > 145 && cancion.bpm <= 160) {
            playlistAgrupada.alta.push(cancion);
        } else if (cancion.bpm > 160) {
            playlistAgrupada.explosiva.push(cancion);
        }
    });

    //  Sumar duracion total (usando reduce sobre las canciones que entraron a la playlist)
    const duracionTotalSegundos = cancionesFiltradas.reduce((total, cancion) => total + cancion.duracionSeg, 0);
    const duracionTotalMinutos = duracionTotalSegundos / 60;

    //  Validar que la playlist dure entre 15 y 25 minutos
    const esValida = duracionTotalMinutos >= 15 && duracionTotalMinutos <= 25;

    // Retornar los resultados estructurados
    return {
        cancionesFiltradas,
        playlistAgrupada,
        duracionTotalMinutos: parseFloat(duracionTotalMinutos.toFixed(2)),
        esValida
    };
}

// Ejecución del programa y renderizado en consola
const resultado = organizarPlaylistKickboxing(repertorioCanciones);

console.log("=== SISTEMA DE PLAYLIST PARA KICKBOXING ===");
console.log("\nCanciones que cumplen con el ritmo (>135 BPM):", resultado.cancionesFiltradas.length);

console.log("\nDistribución por Intensidad de Ronda:");
console.log("- Media (136-145 BPM):", resultado.playlistAgrupada.media.map(c => c.titulo).join(", "));
console.log("- Alta (146-160 BPM):", resultado.playlistAgrupada.alta.map(c => c.titulo).join(", "));
console.log("- Explosiva (>160 BPM):", resultado.playlistAgrupada.explosiva.map(c => c.titulo).join(", "));

console.log(`\nDuración total estimada: ${resultado.duracionTotalMinutos} minutos`);
console.log(`¿La playlist cumple la regla de tiempo (15-25 min)?: ${resultado.esValida ? "SÍ ✅" : "NO ❌"}`);