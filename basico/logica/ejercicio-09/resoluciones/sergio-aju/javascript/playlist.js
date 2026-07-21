const canciones = [
    { titulo: "Eye of the Tiger", artista: "Survivor", bpm: 109, duracionSeg: 245 },
    { titulo: "Power", artista: "Kanye West", bpm: 154, duracionSeg: 292 },
    { titulo: "Thunderstruck", artista: "AC/DC", bpm: 134, duracionSeg: 292 },
    { titulo: "Till I Collapse", artista: "Eminem", bpm: 171, duracionSeg: 297 },
    { titulo: "B.O.B.", artista: "Outkast", bpm: 155, duracionSeg: 310 },
    { titulo: "Work B**ch", artista: "Britney Spears", bpm: 128, duracionSeg: 248 }
];

const playlistFiltrada = canciones.filter(c => c.bpm > 135);

let duracionTotalSegundos = 0;

const playlistDetallada = playlistFiltrada.map(cancion => {
    let intensidad = "";
    if (cancion.bpm > 160) intensidad = "Explosiva";
    else if (cancion.bpm > 145) intensidad = "Alta";
    else intensidad = "Media";
    
    duracionTotalSegundos += cancion.duracionSeg;
    
    return { ...cancion, intensidad };
});

const duracionMinutos = duracionTotalSegundos / 60;
const esValida = duracionMinutos >= 15 && duracionMinutos <= 25;

console.log("Playlist:", playlistDetallada);
console.log(`Duración total: ${duracionMinutos.toFixed(2)} minutos`);
console.log(`¿Es válida la playlist?: ${esValida ? "Sí" : "No"}`);
