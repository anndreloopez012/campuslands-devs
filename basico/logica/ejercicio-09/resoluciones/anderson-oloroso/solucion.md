# Resolución ejercicio 09 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula la generación de una playlist optimizada para entrenamientos de kickboxing por rondas (`kickboxing_playlist.js`). Se define una lista de canciones con sus atributos de ritmo y tiempo, se filtran las de alta energía (BPM > 135), se agrupan en niveles de intensidad según sus pulsaciones por minuto, se calcula la duración total acumulada y se valida que el tiempo total se encuentre dentro del rango recomendado de 15 a 25 minutos.

```javascript
// 1. Canciones base para el entrenamiento de kickboxing
const canciones = [
  { titulo: "Eye of the Tiger", artista: "Survivor", bpm: 109, duracionSeg: 245 },
  { titulo: "Combustion", artista: "Meshuggah", bpm: 140, duracionSeg: 220 },
  { titulo: "Bleed It Out", artista: "Linkin Park", bpm: 140, duracionSeg: 164 },
  { titulo: "Thunderstruck", artista: "AC/DC", bpm: 134, duracionSeg: 292 },
  { titulo: "Kickstart My Heart", artista: "Mötley Crüe", bpm: 178, duracionSeg: 284 },
  { titulo: "Warrior's Code", artista: "Dropkick Murphys", bpm: 155, duracionSeg: 150 },
  { titulo: "Spitfire", artista: "The Prodigy", bpm: 166, duracionSeg: 307 },
  { titulo: "Bulls on Parade", artista: "Rage Against The Machine", bpm: 166, duracionSeg: 231 }
];

// 2. Filtrar canciones con BPM mayor a 135
const cancionesAltaEnergia = canciones.filter(cancion => cancion.bpm > 135);

// 3. Agrupar por intensidad
// Media: 136 - 145 BPM | Alta: 146 - 165 BPM | Explosiva: > 165 BPM
const playlistConIntensidad = cancionesAltaEnergia.map(cancion => {
  let intensidad = "Media";
  if (cancion.bpm > 165) {
    intensidad = "Explosiva";
  } else if (cancion.bpm >= 146) {
    intensidad = "Alta";
  }

  return {
    ...cancion,
    intensidad
  };
});

// 4. Sumar duración total en segundos y convertir a minutos
const duracionTotalSeg = playlistConIntensidad.reduce((total, cancion) => total + cancion.duracionSeg, 0);
const duracionTotalMin = Number((duracionTotalSeg / 60).toFixed(2));

// 5. Validar que la playlist dure entre 15 y 25 minutos
const esDuracionValida = duracionTotalMin >= 15 && duracionTotalMin <= 25;

console.log("=== PLAYLIST PARA SESIÓN DE KICKBOXING ===");
console.log("Canciones seleccionadas por ronda:\n");

playlistConIntensidad.forEach((cancion, index) => {
  const minutos = Math.floor(cancion.duracionSeg / 60);
  const segundos = cancion.duracionSeg % 60;
  const tiempoFormateado = `${minutos}:${segundos.toString().padStart(2, '0')}`;
  
  console.log(`${index + 1}. "${cancion.titulo}" - ${cancion.artista}`);
  console.log(`   - BPM: ${cancion.bpm} | Intensidad: ${cancion.intensidad} \vert{} Duración: ${tiempoFormateado}`);
});

console.log("\n--- RESUMEN DEL ENTRENAMIENTO ---");
console.log(`Duración Total: ${duracionTotalMin} minutos (${duracionTotalSeg} segundos)`);
console.log(`Estado de validación (15-25 min): ${esDuracionValida ? "Aceptada (Tiempo óptimo)" : "Rechazada (Ajustar canciones)"}`);
```

- Breve explicación

Primero, se construye la colección base de temas musicales con sus respectivas métricas de ritmo y tiempo. Mediante `.filter()`, se descartan aquellas canciones con un pulso menor o igual a 135 BPM para asegurar un ritmo de combate adecuado.

A continuación, con el método `.map()`, se clasifica cada tema dentro de una escala de intensidad ("Media", "Alta" o "Explosiva") dependiendo de su rango de BPM. Luego, se utiliza `.reduce()` para sumar la duración individual de cada tema en segundos y se transforma dicho valor a minutos para simplificar el análisis.

Finalmente, se implementa una condición de validación que verifica si la duración total acumulada cumple con el tiempo objetivo de la sesión (entre 15 y 25 minutos), imprimiendo en consola el desglose detallado de la playlist junto con el resultado del control de calidad.