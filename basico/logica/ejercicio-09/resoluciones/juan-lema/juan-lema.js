// Ejercicio 09 - Logica
// Playlist para entrenamiento de kickboxing
// Autor: Juan Lema

// 1. Canciones de entrada (titulo, artista, bpm, duracionSeg)
function crearCanciones() {
  return [
    { titulo: "Warm Body",     artista: "DJ Hollow",   bpm: 118, duracionSeg: 180 },
    { titulo: "Iron Fist",     artista: "Kane Beats",  bpm: 140, duracionSeg: 210 },
    { titulo: "Ring Rush",     artista: "Nyra V",      bpm: 152, duracionSeg: 195 },
    { titulo: "Low Guard",     artista: "MC Trece",    bpm: 128, duracionSeg: 200 },
    { titulo: "Overdrive",     artista: "Blaze",       bpm: 168, duracionSeg: 175 },
    { titulo: "Combo Chain",   artista: "Kane Beats",  bpm: 146, duracionSeg: 190 },
    { titulo: "Slow Recovery", artista: "DJ Hollow",   bpm: 100, duracionSeg: 220 },
    { titulo: "Final Round",   artista: "Blaze",       bpm: 171, duracionSeg: 205 },
  ];
}

// 2. Filtra canciones aptas para entrenamiento (bpm > 135)
function filtrarPorBpm(canciones, bpmMinimo) {
  return canciones.filter((cancion) => cancion.bpm > bpmMinimo);
}

// 3. Clasifica una cancion segun su intensidad
function clasificarIntensidad(bpm) {
  if (bpm <= 145) return "media";
  if (bpm <= 160) return "alta";
  return "explosiva";
}

// Agrupa una lista de canciones por intensidad
function agruparPorIntensidad(canciones) {
  const grupos = { media: [], alta: [], explosiva: [] };

  canciones.forEach((cancion) => {
    const intensidad = clasificarIntensidad(cancion.bpm);
    grupos[intensidad].push(cancion);
  });

  return grupos;
}

// 4. Suma la duracion total (en segundos) de una lista de canciones
function calcularDuracionTotal(canciones) {
  return canciones.reduce((total, cancion) => total + cancion.duracionSeg, 0);
}

// 5. Valida que la playlist dure entre minMinutos y maxMinutos
function validarDuracion(duracionTotalSeg, minMinutos, maxMinutos) {
  const minSeg = minMinutos * 60;
  const maxSeg = maxMinutos * 60;
  return duracionTotalSeg >= minSeg && duracionTotalSeg <= maxSeg;
}

// Utilidad: formatea segundos como mm:ss para mostrar en consola
function formatearDuracion(seg) {
  const minutos = Math.floor(seg / 60);
  const segundos = seg % 60;
  return `${minutos}:${String(segundos).padStart(2, "0")}`;
}

// Orquesta todo el proceso y arma el reporte final
function armarPlaylist(canciones, bpmMinimo, minMinutos, maxMinutos) {
  const candidatas = filtrarPorBpm(canciones, bpmMinimo);
  const grupos = agruparPorIntensidad(candidatas);
  const duracionTotalSeg = calcularDuracionTotal(candidatas);
  const duracionValida = validarDuracion(duracionTotalSeg, minMinutos, maxMinutos);

  return { candidatas, grupos, duracionTotalSeg, duracionValida };
}

function imprimirReporte(resultado) {
  const { grupos, duracionTotalSeg, duracionValida } = resultado;

  console.log("--- Playlist kickboxing (bpm > 135) ---");
  ["media", "alta", "explosiva"].forEach((intensidad) => {
    console.log(`\nIntensidad ${intensidad}:`);
    if (grupos[intensidad].length === 0) {
      console.log("  (sin canciones)");
    } else {
      grupos[intensidad].forEach((c) => {
        console.log(`  ${c.titulo} - ${c.artista} (${c.bpm} bpm, ${formatearDuracion(c.duracionSeg)})`);
      });
    }
  });

  console.log(`\nDuracion total: ${formatearDuracion(duracionTotalSeg)} (${duracionTotalSeg} seg)`);
  console.log(`Valida para sesion de 15-25 min: ${duracionValida ? "si" : "no"}`);
}

// ---- Caso normal ----
const canciones = crearCanciones();
const resultadoNormal = armarPlaylist(canciones, 135, 15, 25);
imprimirReporte(resultadoNormal);

// ---- Caso limite: lista vacia ----
console.log("\n\n--- Caso limite: lista vacia ---");
const resultadoVacio = armarPlaylist([], 135, 15, 25);
imprimirReporte(resultadoVacio);

module.exports = {
  crearCanciones,
  filtrarPorBpm,
  clasificarIntensidad,
  agruparPorIntensidad,
  calcularDuracionTotal,
  validarDuracion,
  formatearDuracion,
  armarPlaylist,
};