const canciones = [
    { titulo: "Ritmo Veloz", artista: "DJ Uno", bpm: 140, duracionSeg: 240 },
    { titulo: "Calma", artista: "Banda Suave", bpm: 100, duracionSeg: 300 },
    { titulo: "Energía Pura", artista: "Electro Boy", bpm: 150, duracionSeg: 360 },
    { titulo: "Subidón", artista: "Dance Master", bpm: 160, duracionSeg: 300 },
    { titulo: "Vibe", artista: "Chill Girl", bpm: 120, duracionSeg: 200 }
];

let playlist = [];

for (let i = 0; i < canciones.length; i++) {
    let cancion = canciones[i];

    if (cancion.bpm > 135) {
        if (cancion.bpm < 145) {
            cancion.intensidad = "Media";
        } else if (cancion.bpm < 155) {
            cancion.intensidad = "Alta";
        } else {
            cancion.intensidad = "Explosiva";
        }
        playlist.push(cancion);
    }
}

let totalSegundos = 0;

for (let i = 0; i < playlist.length; i++) {
    totalSegundos = totalSegundos + playlist[i].duracionSeg;
}

let totalMinutos = totalSegundos / 60;
console.log("Duración total de la playlist: " + totalMinutos + " minutos");

if (totalMinutos >= 15 && totalMinutos <= 25) {
    console.log("La playlist es correcta.");
} else if (totalMinutos < 15) {
    console.log("La playlist es muy corta.");
} else {
    console.log("La playlist es muy larga");
}