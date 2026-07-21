function clasificarIntensidad(bpm) {
  if (bpm > 160) return "explosiva";
  if (bpm > 145) return "alta";
  return "media";
}

function organizarPlaylist(canciones, minSegundos = 900, maxSegundos = 1500) {
  const cancionesFiltradas = canciones
    .filter((cancion) => cancion.bpm > 135)
    .map((cancion) => ({ ...cancion, intensidad: clasificarIntensidad(cancion.bpm) }));

  const duracionTotalSeg = cancionesFiltradas.reduce(
    (suma, cancion) => suma + cancion.duracionSeg,
    0
  );

  const agrupadasPorIntensidad = cancionesFiltradas.reduce((grupos, cancion) => {
    const clave = cancion.intensidad;
    grupos[clave] = grupos[clave] ?? [];
    grupos[clave].push(cancion);
    return grupos;
  }, {});

  const duracionValida = duracionTotalSeg >= minSegundos && duracionTotalSeg <= maxSegundos;

  return {
    cancionesFiltradas,
    agrupadasPorIntensidad,
    duracionTotalSeg,
    duracionTotalMin: (duracionTotalSeg / 60).toFixed(1),
    duracionValida,
  };
}

// Caso normal
const canciones = [
  { 
    titulo: "Thunder Kick", 
    artista: "DJ Rex", 
    bpm: 150, 
    duracionSeg: 240 
},
  { 
    titulo: "Fast Combo", 
    artista: "Nova", 
    bpm: 165, 
    duracionSeg: 200 
},
  { 
    titulo: "Warm Round", 
    artista: "Kali", 
    bpm: 138, 
    duracionSeg: 220 
  },
  { 
    titulo: "Slow Cool", 
    artista: "Mira", 
    bpm: 120, 
    duracionSeg: 180 
  },
];

console.log(organizarPlaylist(canciones));

// Caso límite: ninguna canción supera 135 bpm
const cancionesLimite = [
  { 
    titulo: "Chill Stretch", 
    artista: "Sol", 
    bpm: 100, 
    duracionSeg: 200 
  },
];

console.log(organizarPlaylist(cancionesLimite));