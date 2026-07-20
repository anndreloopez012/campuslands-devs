
const canciones = [
    { titulo: "Adrenalina", artista: "PowerBeat", bpm: 140, duracionSeg: 200 },
    { titulo: "GolpeFinal", artista: "TrainingPro", bpm: 160, duracionSeg: 240 },
    { titulo: "RitmoLento", artista: "ChillGuy", bpm: 120, duracionSeg: 300 },
    { titulo: "PoderExtremo", artista: "FighterX", bpm: 180, duracionSeg: 300 },
    { titulo: "ComboRapido", artista: "BeatMaster", bpm: 150, duracionSeg: 250 },
    { titulo: "Resistencia", artista: "GymLife", bpm: 138, duracionSeg: 250 }
  ];
  

  const playlistFiltrada = canciones.filter(c => c.bpm > 135);
  
  const playlistClasificada = playlistFiltrada.map(c => {
    let nivel = "";
    if (c.bpm <= 145) nivel = "media";
    else if (c.bpm <= 165) nivel = "alta";
    else nivel = "explosiva";
    
    return { ...c, nivel };
  });
  
  const totalSegundos = playlistClasificada.reduce((acc, c) => acc + c.duracionSeg, 0);
  const totalMinutos = totalSegundos / 60;
  
  const esValida = totalMinutos >= 15 && totalMinutos <= 25;
  
  console.log("Playlist:", playlistClasificada);
  console.log(`Duración total: ${totalMinutos.toFixed(2)} minutos`);
  console.log(esValida ? "Estado: Playlist válida" : "Estado: Fuera de rango");