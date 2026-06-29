# Ejercicio #09 - Playlist para entrenamiento de kickboxing

**Camper:** Antonio Canux

---

## 1. Solución (JavaScript)

El siguiente script resuelve todos los puntos solicitados utilizando programación funcional (métodos de arreglos como `filter` y `reduce`):

```javascript
// 1. Creamos el catálogo de canciones
const catalogoCanciones = [
  { titulo: "Eye of the Tiger", artista: "Survivor", bpm: 109, duracionSeg: 240 },
  { titulo: "Till I Collapse", artista: "Eminem", bpm: 171, duracionSeg: 297 },
  { titulo: "Can't Be Touched", artista: "Roy Jones Jr", bpm: 142, duracionSeg: 226 },
  { titulo: "Remember the Name", artista: "Fort Minor", bpm: 160, duracionSeg: 230 },
  { titulo: "X Gon' Give It To Ya", artista: "DMX", bpm: 146, duracionSeg: 218 },
  { titulo: "Gonna Fly Now", artista: "Bill Conti", bpm: 120, duracionSeg: 168 },
  { titulo: "Bleed It Out", artista: "Linkin Park", bpm: 170, duracionSeg: 164 }
]

// 2. Filtrar canciones con bpm mayor a 135
const playlistFiltrada = catalogoCanciones.filter(cancion => cancion.bpm > 135);

// 3. Agrupar por intensidad
// Definimos los rangos: Media (136-150), Alta (151-165), Explosiva (>165)
const playlistAgrupada = {
  media: playlistFiltrada.filter(c => c.bpm <= 150),
  alta: playlistFiltrada.filter(c => c.bpm > 150 && c.bpm <= 165),
  explosiva: playlistFiltrada.filter(c => c.bpm > 165)
};

// 4. Sumar duración total en segundos
const duracionTotalSegundos = playlistFiltrada.reduce((total, cancion) => total + cancion.duracionSeg, 0);

// Convertimos a minutos
const duracionMinutos = duracionTotalSegundos / 60;

// 5. Validar que la playlist dure entre 15 y 25 minutos
const esValida = duracionMinutos >= 15 && duracionMinutos <= 25;

// === SALIDA DE RESULTADOS ===
console.log("=== PLAYLIST DE KICKBOXING ===");
console.log(`Duración total: ${duracionMinutos.toFixed(2)} minutos`);
console.log(`¿Cumple con el tiempo reglamentario (15-25 min)? ${esValida ? "✓ SÍ" : "X NO"}\n`);

console.log("Canciones agrupadas por intensidad:");
console.log(playlistAgrupada)
```

## 2. Cómo pensé el problema?

Para resolver el problema con eficiencia y código limpio:

**Estructura de datos:** Utilicé un arreglo de objetos para representar las canciones. Esto permite acceder fácilmente a las propiedades bpm y duracionSeg.

**Filtrado inicial:** Utilicé el método filter() para descartar inmediatamente cualquier canción que no cumpla con el requisito base de intensidad (> 135), reduciendo la cantidad de datos a procesar en los siguientes pasos.

**Clasificación condicional:** Definí rangos lógicos para agrupar (Media hasta 150, Alta hasta 165, y Explosiva para el resto). Agruparlas en un solo objeto facilita su consumo posterior (por ejemplo, si una interfaz gráfica necesita renderizar las secciones por separado).

**Acumulación de tiempo:** Utilicé el método reduce() porque es la forma más semántica en JavaScript de tomar un arreglo y "reducirlo" a un único valor (en este caso, la suma total de los segundos).

**Validación:** Convertí los segundos a minutos (/ 60) y usé una evaluación booleana simple (>= 15 && <= 25) para determinar si la playlist es apta.