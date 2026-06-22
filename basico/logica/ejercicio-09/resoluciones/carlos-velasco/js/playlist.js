const canciones = [
  { titulo: "Eye of the Tiger", artista: "Survivor", bpm: 140, duracionSeg: 240 },
  { titulo: "Till I Collapse", artista: "Eminem", bpm: 170, duracionSeg: 297 },
  { titulo: "Thunderstruck", artista: "AC/DC", bpm: 138, duracionSeg: 292 },
  { titulo: "Lose Yourself", artista: "Eminem", bpm: 171, duracionSeg: 326 },
  { titulo: "Power", artista: "Kanye West", bpm: 154, duracionSeg: 292 }
];

const filtradas = canciones.filter(c => c.bpm > 135);

const playlist = filtradas.map(c => {
  let intensidad = "";
  if (c.bpm < 150) intensidad = "media";
  else if (c.bpm < 165) intensidad = "alta";
  else intensidad = "explosiva";
  return { ...c, intensidad };
});

const totalSegundos = playlist.reduce((sum, c) => sum + c.duracionSeg, 0);
const totalMinutos = totalSegundos / 60;

const esValida = totalMinutos >= 15 && totalMinutos <= 25;

console.log("Playlist:", playlist);
console.log(`Duración total: ${totalMinutos.toFixed(2)} minutos`);
console.log(esValida ? "Playlist válida para la ronda" : "Ajustar duración de la playlist");