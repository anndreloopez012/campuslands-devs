# Solución – Ejercicio 14: Archivo musical para productores

**Alumna:** Maria Montepeque  
**Dificultad:** Básica retadora  
**Temática:** Música

---

## 1. Cómo pensé el problema

Un archivo musical de producción tiene cuatro tipos de contenido claramente distintos:

| Tipo | Descripción |
|------|-------------|
| **Tracks** | Borradores crudos que salen de la DAW |
| **Samples** | Fragmentos reutilizables (loops, one-shots) |
| **Mixes** | Versiones mezcladas (efectos aplicados, balance ajustado) |
| **Masters** | Archivos finales aprobados para distribución |

Cada tipo tiene un ciclo de vida diferente: los tracks se modifican libremente, las mezclas se revisan en rondas, y los masters son inmutables una vez aprobados. Mezclarlos en una sola carpeta generaría confusión sobre qué archivos son borradores y cuáles son entregables.

La quinta carpeta, `docs/`, resuelve la necesidad de documentar convenciones sin contaminar las carpetas de audio.

---

## 2. Estructura de carpetas

```
basico/estructura/ejercicio-14/resoluciones/maria-montepeque/
├── tracks/                        ← Borradores de canciones
│   ├── tormenta-v01.wav
│   ├── tormenta-v02.wav
│   └── amanecer-v01.wav
├── samples/                       ← Loops y one-shots reutilizables
│   ├── loop-bajo-120bpm.wav
│   ├── hit-caja-seca.wav
│   └── textura-lluvia.wav
├── mixes/                         ← Mezclas intermedias con FX
│   ├── tormenta-v03.wav
│   └── amanecer-v02.wav
├── masters/                       ← Versiones finales (solo lectura)
│   ├── tormenta-v04.wav
│   └── amanecer-v03.wav
├── docs/
│   └── versionado-audio.md        ← Convención de nombres
├── README.md                      ← Descripción del proyecto simulado
└── validar.js                     ← Script de validación
```

---

## 3. Convención de nombres: `cancion-v01.wav`

```
[nombre-cancion]-v[XX].wav
```

- Nombre en minúsculas con guiones.
- Versión con **dos dígitos** para mantener orden alfabético correcto (`v09` antes de `v10`).
- Extensión `.wav` en minúsculas.
- El número de versión **no se reinicia** al pasar de `tracks/` a `mixes/` o a `masters/`; esto permite rastrear la historia completa del archivo.

Ejemplo de ciclo:
```
tracks/tormenta-v01.wav   → borrador inicial
tracks/tormenta-v02.wav   → ajuste de instrumentos
mixes/tormenta-v03.wav    → mezcla con FX
masters/tormenta-v04.wav  → master aprobado
```

---

## 4. ¿Por qué los masters no se mezclan con los borradores?

Los masters representan el producto terminado: ya pasaron por mezcla y masterización, fueron aprobados y están listos para distribuirse o entregarse al cliente. Mezclarlos con borradores crea tres problemas concretos:

1. **Riesgo de sobreescritura accidental.** Si tracks y masters conviven en la misma carpeta, es fácil guardar una versión nueva sobre un master aprobado.
2. **Confusión al entregar.** Cuando el cliente o el sello pide el archivo final, no debería haber duda de cuál es: la carpeta `masters/` contiene únicamente archivos definitivos.
3. **Permisos y flujo de trabajo.** En equipos, la carpeta `masters/` puede marcarse como de solo lectura para evitar modificaciones no autorizadas; eso no es posible si convive con los borradores.

---

## 5. Comandos Git

```bash
# Crear rama desde dev
git checkout dev
git checkout -b feat/ejercicio-14-maria-montepeque

# Agregar los archivos de la solución
git add basico/estructura/ejercicio-14/resoluciones/maria-montepeque/

# Commit descriptivo
git commit -m "feat(ej14): estructura de archivo musical con tracks, samples, mixes y masters"

# Subir rama
git push origin feat/ejercicio-14-maria-montepeque
```

---

## 6. Evidencia de validación

Script ejecutado: `node validar.js`

```
=== Validación: Archivo Musical para Productores ===

--- Archivo: "tormenta-v01.wav" | Carpeta: "tracks" ---
  Nombre    → ✓ Nombre correcto.
  Ubicación → ✓ "tormenta-v01.wav" puede ir en "tracks".
  Master    → ✓ "tormenta-v01.wav" es un borrador en "tracks".

--- Archivo: "amanecer-v04.wav" | Carpeta: "masters" ---
  Nombre    → ✓ Nombre correcto.
  Ubicación → ✓ "amanecer-v04.wav" puede ir en "masters".
  Master    → ✓ "amanecer-v04.wav" es un master: no se mezcla con borradores.

--- Archivo: "cancion.wav" | Carpeta: "mixes" ---
  Nombre    → ✗ "cancion.wav" no sigue el patrón [nombre]-v[XX].wav (ejemplo: tormenta-v01.wav).
  Ubicación → ✓ "cancion.wav" puede ir en "mixes".
  Master    → ✓ "cancion.wav" es un borrador en "mixes".

--- Archivo: "loop-bajo-v01.wav" | Carpeta: "archivos_varios" ---
  Nombre    → ✓ Nombre correcto.
  Ubicación → ✗ "archivos_varios" no es una carpeta reconocida del proyecto.
  Master    → ✓ "loop-bajo-v01.wav" es un borrador en "archivos_varios".

--- Archivo: "" | Carpeta: "tracks" ---
  Nombre    → ✗ El nombre de archivo está vacío o no es texto.
  Ubicación → ✗ Faltan el nombre del archivo o la carpeta destino.
  Master    → ✗ Datos incompletos para validar master vs borrador.

--- Archivo: "tormenta-v02.wav" | Carpeta: "" ---
  Nombre    → ✓ Nombre correcto.
  Ubicación → ✗ Faltan el nombre del archivo o la carpeta destino.
  Master    → ✗ Datos incompletos para validar master vs borrador.
```

### Qué valida cada caso

| # | Caso | Resultado esperado |
|---|------|--------------------|
| 1 | Archivo y carpeta correctos | Todo ✓ |
| 2 | Master en carpeta `masters/` | Todo ✓, separado de borradores |
| 3 | Nombre sin versión | Nombre ✗, detecta que no cumple patrón |
| 4 | Carpeta no reconocida | Ubicación ✗, carpeta inválida |
| 5 | Nombre vacío (caso nulo) | Todo ✗, entrada inválida detectada |
| 6 | Carpeta vacía (caso nulo) | Ubicación ✗ y Master ✗ detectados |
