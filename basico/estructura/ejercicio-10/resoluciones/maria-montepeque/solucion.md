# Ejercicio 10 — Pipeline de animación 3D

**Alumna:** Maria Montepeque  
**Nivel:** Básica retadora  
**Temática:** Animación 3D

---

## Cómo pensé el problema

Un pipeline de animación 3D tiene etapas secuenciales claras: primero se modela, luego se texturiza, después se renderiza y finalmente se entrega. Cada etapa produce archivos con un ciclo de vida propio: borradores, pruebas y versiones finales. El reto principal es que en producción real es muy fácil confundir un render de prueba con el render final aprobado, lo que puede causar entregas incorrectas.

Mis decisiones de diseño:

1. **Numeración de carpetas (`01-`, `02-`...)** → mantiene el orden visual del pipeline sin depender de la fecha de modificación.
2. **Subcarpetas `_wip/` y `_final/`** dentro de renders y entregas → separan físicamente pruebas de archivos aprobados. Un archivo nunca pasa a `_final/` hasta tener visto bueno.
3. **Versionado por sufijo `_v01`, `_v02`...** → permite rastrear la historia sin sobreescribir archivos.
4. **Carpeta `referencias/`** → centraliza moodboards, concept art y referencias externas, separado del contenido producido.
5. **`docs/pipeline.md`** → documento único de verdad sobre convenciones del proyecto.

---

## Estructura de carpetas

```
basico/estructura/ejercicio-10/resoluciones/maria-montepeque/
│
├── docs/
│   └── pipeline.md
│
├── referencias/
│   ├── concept-art/
│   │   └── personaje-principal-ref.jpg
│   ├── moodboard/
│   │   └── paleta-colores.png
│   └── videos/
│       └── movimiento-referencia.mp4
│
├── 01-modelado/
│   ├── personajes/
│   │   ├── protagonista_v01.blend
│   │   ├── protagonista_v02.blend
│   │   └── protagonista_v03_FINAL.blend
│   ├── escenarios/
│   │   ├── ciudad_v01.blend
│   │   └── ciudad_v02_FINAL.blend
│   └── props/
│       └── vehiculo_v01.blend
│
├── 02-texturas/
│   ├── personajes/
│   │   ├── protagonista-diffuse_v01.png
│   │   ├── protagonista-normal_v01.png
│   │   └── protagonista-roughness_v01.png
│   ├── escenarios/
│   │   ├── ciudad-pavimento_v01.png
│   │   └── ciudad-fachadas_v01.png
│   └── props/
│       └── vehiculo-metalico_v01.png
│
├── 03-renders/
│   ├── _wip/
│   │   ├── escena-01_prueba_v01.png
│   │   ├── escena-01_prueba_v02.png
│   │   └── escena-02_prueba_v01.png
│   └── _final/
│       └── escena-01_APROBADO_v02.png
│
├── 04-entregas/
│   ├── _wip/
│   │   └── corte-rough_v01.mp4
│   └── _final/
│       └── corte-final_APROBADO_v01.mp4
│
└── solucion.md
```

---

## Documento `docs/pipeline.md`

```markdown
# Pipeline del proyecto — Convenciones generales

## Flujo de trabajo

referencias/ → 01-modelado/ → 02-texturas/ → 03-renders/ → 04-entregas/

Ningún archivo avanza a la siguiente etapa sin revisión del líder técnico.

## Convención de nombres

| Elemento        | Formato                              | Ejemplo                          |
|-----------------|--------------------------------------|----------------------------------|
| Modelo          | `nombre-objeto_vNN.blend`            | `protagonista_v02.blend`         |
| Textura         | `nombre-objeto-tipo_vNN.png`         | `protagonista-diffuse_v01.png`   |
| Render prueba   | `escena-NN_prueba_vNN.png`           | `escena-01_prueba_v03.png`       |
| Render aprobado | `escena-NN_APROBADO_vNN.png`         | `escena-01_APROBADO_v02.png`     |
| Entrega final   | `corte-nombre_APROBADO_vNN.mp4`      | `corte-final_APROBADO_v01.mp4`   |

## Versiones

- Siempre incrementar el sufijo `_vNN` al modificar un archivo.
- Nunca sobreescribir la versión anterior.
- El sufijo `_FINAL` solo indica el candidato más reciente a aprobación dentro de modelado.
- La palabra `_APROBADO` está reservada exclusivamente para archivos en carpetas `_final/`.

## Cómo evitar confundir archivos finales con pruebas

1. **Separación física**: pruebas en `_wip/`, aprobados en `_final/`. Son carpetas distintas, no prefijos.
2. **Nombre explícito**: los archivos aprobados llevan `_APROBADO` en el nombre. Si no lo tiene, no está aprobado.
3. **Un solo responsable** mueve archivos de `_wip/` a `_final/` (el líder de cada etapa).
4. **Nunca editar en `_final/`**: si hay correcciones, se trabaja en `_wip/` con nueva versión y se aprueba de nuevo.
5. **Commits descriptivos**: el mensaje de Git debe indicar explicitamente si es una prueba o una aprobación.
   - Prueba: `render: agrego escena-01 prueba v03`
   - Aprobación: `render: apruebo escena-01 v02 → muevo a _final`
```

---

## Casos de validación

### Caso normal — Render en progreso

**Situación:** La artista termina el render v03 de la escena-01 y lo comparte para revisión.

```
03-renders/
  _wip/
    escena-01_prueba_v03.png   ← nuevo archivo, aún en revisión
  _final/
    escena-01_APROBADO_v02.png ← versión anterior ya aprobada, no se toca
```

**Resultado esperado:** El equipo revisa `_wip/escena-01_prueba_v03.png`. Si se aprueba, se copia a `_final/escena-01_APROBADO_v03.png`. La versión v02 permanece como historial.

---

### Caso límite — Proyecto sin renders aprobados aún

**Situación:** El proyecto está en sus primeras horas. Hay modelos en progreso pero aún no hay nada aprobado en ninguna etapa de renders ni entregas.

```
03-renders/
  _wip/
    escena-01_prueba_v01.png
  _final/
    .gitkeep                   ← carpeta existe pero vacía

04-entregas/
  _wip/
    .gitkeep
  _final/
    .gitkeep
```

**Resultado esperado:** El sistema es válido aunque `_final/` esté vacía. Las carpetas vacías con `.gitkeep` se versionan en Git para preservar la estructura desde el inicio del proyecto. La ausencia de archivos en `_final/` confirma que nada ha sido aprobado todavía, lo cual es un estado legítimo.

---

## Evidencia de validación (`validar.js`)

El script verifica la existencia de las carpetas requeridas y que los archivos en `_final/` contengan la palabra `_APROBADO` en el nombre.
