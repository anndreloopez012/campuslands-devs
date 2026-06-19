# Ejercicio 09 — Playlist para entrenamiento de kickboxing

**Alumna:** Maria Montepeque  
**Dificultad:** Media  
**Archivo de solución:** `validar.js`

---

## Cómo pensé el problema

El ejercicio propone organizar canciones como si fuera una sesión real de kickboxing: no todas las canciones son aptas (hay un filtro de intensidad mínima por BPM), y la sesión tiene una duración objetivo que se debe verificar.

Lo descompuse en cinco pasos siguiendo el enunciado:

1. **Datos de entrada**: un arreglo con objetos que representan canciones. Cada canción tiene `titulo`, `artista`, `bpm` y `duracionSeg`.
2. **Filtro**: solo pasan las canciones con `bpm > 135`. Las que tienen exactamente 135 o menos no son suficientemente intensas para la sesión.
3. **Clasificación por intensidad**: definí tres rangos según BPM:
   - **Media**: 136–155 bpm
   - **Alta**: 156–170 bpm
   - **Explosiva**: más de 170 bpm
4. **Suma de duración**: recorro las canciones filtradas y acumulo `duracionSeg`. Luego convierto a minutos para la validación.
5. **Validación**: la playlist es válida si la duración total está entre 15 y 25 minutos.

Decidí incluir en el set original algunas canciones que no pasan el filtro (bpm ≤ 135) para que el paso de filtrado tenga sentido real y no sea decorativo.

---

## Solución completa

```js
// validar.js - Playlist para entrenamiento de kickboxing

const canciones = [
  // Estas pasan el filtro (bpm > 135)
  { titulo: "Warrior",          artista: "Ke$ha",           bpm: 140, duracionSeg: 210 },
  { titulo: "Till I Collapse",  artista: "Eminem",          bpm: 171, duracionSeg: 298 },
  { titulo: "Sandstorm",        artista: "Darude",          bpm: 136, duracionSeg: 230 },
  { titulo: "Pump It",          artista: "Black Eyed Peas", bpm: 155, duracionSeg: 213 },
  { titulo: "Power",            artista: "Kanye West",      bpm: 172, duracionSeg: 289 },
  // Estas NO pasan el filtro (bpm <= 135)
  { titulo: "Eye of the Tiger", artista: "Survivor",        bpm: 109, duracionSeg: 245 },
  { titulo: "Remember the Name",artista: "Fort Minor",      bpm: 135, duracionSeg: 215 },
  { titulo: "Stronger",         artista: "Kanye West",      bpm: 104, duracionSeg: 312 },
];

// ── Paso 1: filtrar canciones con bpm > 135 ──────────────────────────────────
const cancionesFiltradas = canciones.filter(cancion => cancion.bpm > 135);

// ── Paso 2: clasificar por intensidad ────────────────────────────────────────
function clasificarIntensidad(bpm) {
  if (bpm >= 136 && bpm <= 155) return "media";
  if (bpm >= 156 && bpm <= 170) return "alta";
  return "explosiva"; // bpm > 170
}

const cancionesConIntensidad = cancionesFiltradas.map(cancion => ({
  ...cancion,
  intensidad: clasificarIntensidad(cancion.bpm),
}));

// ── Paso 3: agrupar por intensidad ───────────────────────────────────────────
const grupos = { media: [], alta: [], explosiva: [] };

for (const cancion of cancionesConIntensidad) {
  grupos[cancion.intensidad].push(cancion);
}

// ── Paso 4: sumar duración total ─────────────────────────────────────────────
const totalSegundos = cancionesConIntensidad.reduce(
  (acumulado, cancion) => acumulado + cancion.duracionSeg,
  0
);
const totalMinutos = totalSegundos / 60;

// ── Paso 5: validar duración entre 15 y 25 minutos ───────────────────────────
const MINIMO_MIN = 15;
const MAXIMO_MIN = 25;
const duracionValida = totalMinutos >= MINIMO_MIN && totalMinutos <= MAXIMO_MIN;

// ── Resultados ────────────────────────────────────────────────────────────────
console.log("=== PLAYLIST DE KICKBOXING ===\n");
console.log(`Canciones originales: ${canciones.length}`);
console.log(`Canciones filtradas (bpm > 135): ${cancionesFiltradas.length}\n`);

for (const nivel of ["media", "alta", "explosiva"]) {
  console.log(`── Intensidad ${nivel.toUpperCase()} ──`);
  if (grupos[nivel].length === 0) {
    console.log("  (sin canciones en este nivel)");
  } else {
    for (const c of grupos[nivel]) {
      const mins = Math.floor(c.duracionSeg / 60);
      const segs = c.duracionSeg % 60;
      console.log(`  • ${c.titulo} – ${c.artista} | ${c.bpm} bpm | ${mins}:${String(segs).padStart(2,"0")}`);
    }
  }
  console.log();
}

console.log(`Duración total: ${totalSegundos} seg (${totalMinutos.toFixed(2)} min)`);
console.log(`Rango válido: ${MINIMO_MIN}–${MAXIMO_MIN} minutos`);
console.log(`¿Playlist válida? ${duracionValida ? "✅ SÍ" : "❌ NO"}\n`);

// ── Caso límite: lista vacía ──────────────────────────────────────────────────
console.log("=== CASO LÍMITE: lista vacía ===");
const listaVacia = [];
const filtradaVacia = listaVacia.filter(c => c.bpm > 135);
const totalVacio = filtradaVacia.reduce((acc, c) => acc + c.duracionSeg, 0);
const validoVacio = (totalVacio / 60) >= MINIMO_MIN && (totalVacio / 60) <= MAXIMO_MIN;
console.log(`Canciones filtradas: ${filtradaVacia.length}`);
console.log(`Duración total: ${totalVacio} seg`);
console.log(`¿Playlist válida? ${validoVacio ? "✅ SÍ" : "❌ NO — playlist vacía no cumple el rango"}\n`);

// ── Caso límite: duración exactamente en el borde inferior (15 min) ───────────────────────────
console.log("=== CASO LÍMITE: duración exactamente en el borde inferior (15 min) ===");
const cancionBorde = [{ titulo: "BordeSong", artista: "TestArtist", bpm: 160, duracionSeg: 900 }];
const filtradaBorde = cancionBorde.filter(c => c.bpm > 135);
const totalBorde = filtradaBorde.reduce((acc, c) => acc + c.duracionSeg, 0);
const validoBorde = (totalBorde / 60) >= MINIMO_MIN && (totalBorde / 60) <= MAXIMO_MIN;
console.log(`Canciones filtradas: ${filtradaBorde.length}`);
console.log(`Duración total: ${totalBorde} seg (${totalBorde / 60} min)`);
console.log(`¿Playlist válida? ${validoBorde ? "✅ SÍ — cumple exactamente el mínimo" : "❌ NO"}`);
```

---

## Evidencia de validación

```
=== PLAYLIST DE KICKBOXING ===

Canciones originales: 8
Canciones filtradas (bpm > 135): 5

── Intensidad MEDIA ──
  • Warrior – Ke$ha | 140 bpm | 3:30
  • Sandstorm – Darude | 136 bpm | 3:50
  • Pump It – Black Eyed Peas | 155 bpm | 3:33

── Intensidad ALTA ──
  (sin canciones en este nivel)

── Intensidad EXPLOSIVA ──
  • Till I Collapse – Eminem | 171 bpm | 4:58
  • Power – Kanye West | 172 bpm | 4:49

Duración total: 1240 seg (20.67 min)
Rango válido: 15–25 minutos
¿Playlist válida? ✅ SÍ

=== CASO LÍMITE: lista vacía ===
Canciones filtradas: 0
Duración total: 0 seg
¿Playlist válida? ❌ NO — playlist vacía no cumple el rango

=== CASO LÍMITE: duración exactamente en el borde inferior (15 min) ===
Canciones filtradas: 1
Duración total: 900 seg (15 min)
¿Playlist válida? ✅ SÍ — cumple exactamente el mínimo
```

---

## Comandos Git

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-09/maria-montepeque
# ... trabajo en la carpeta ...
git add basico/logica/ejercicio-09/resoluciones/maria-montepeque/
git commit -m "ejercicio-09: playlist kickboxing con filtro bpm y validacion de duracion"
git push origin ejercicio-09/maria-montepeque
```

---

## Decisiones de diseño

- **`bpm > 135` estricto**: "Remember the Name" tiene exactamente 135 bpm y queda excluida, confirmando que el filtro es mayor estricto, no mayor o igual.
- **Rangos de intensidad**: los definí en función de referencias reales de entrenamiento. La categoría "alta" quedó vacía en este set, lo que el código maneja explícitamente mostrando `(sin canciones en este nivel)` en lugar de omitir la sección.
- **Constantes para los límites**: `MINIMO_MIN` y `MAXIMO_MIN` están nombrados claramente para que la regla de negocio sea legible sin comentarios adicionales.
- **Tres casos de validación**: caso normal (playlist válida), lista vacía (duración 0, fuera de rango), y borde exacto en 15 minutos (verifica que el `>=` funciona correctamente).
