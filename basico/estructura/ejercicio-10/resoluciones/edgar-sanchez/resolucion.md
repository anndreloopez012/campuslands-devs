# Estructura del Proyecto: Animación 3D

Este documento detalla la organización de directorios, el control de versiones y el flujo de trabajo (*pipeline*) para el desarrollo del proyecto de animación 3D.

---

## 1. Árbol de Estructura de Directorios

```text
proyecto-animacion-3d/
├── 01-modelado/        # Archivos de malla, rigs y escenas 3D (.blend, .ma, .fbx)
├── 02-texturas/        # Mapas UV, imágenes de textura y materiales (PBR)
├── 03-renders/         # Salidas de renderizado de prueba (pre-vis, secuencias de imágenes)
├── 04-entregas/        # Renders finales, composiciones definitivas y exportaciones terminadas
├── referencias/        # Concept art, hojas de modelo (*model sheets*) e inspiración visual
└── docs/
    └── pipeline.md     # Documentación técnica, estándares de nombramiento y flujo de trabajo
```

---

## 2. Documentación del Pipeline (`docs/pipeline.md`)

### Control de Versiones de Archivos
Para evitar la pérdida de trabajo y mantener la trazabilidad, todos los archivos de producción deben usar un sistema de versionado incremental explícito:

* **Nomenclatura estándar:** `[NombreProyecto]_[Etapa]_[Elemento]_v[Número].ext`
* **Ejemplo en Modelado:** `personaje_hero_model_v001.blend`, `personaje_hero_model_v002.blend`
* **Ejemplo en Texturas:** `personaje_hero_albedo_v001.png`, `personaje_hero_roughness_v001.png`

---

## 3. Cómo Evitar Confundir Archivos Finales con Pruebas

Para garantizar que los archivos de prueba no se mezclen con las entregas definitivas del cliente o producción:

1. **Separación Estricta de Directorios:**
   * **`03-renders/`:** Exclusivo para renders de prueba, pruebas de iluminación, *clay renders* y revisiones internas.
   * **`04-entregas/`:** Reservado únicamente para los productos finales aprobados para entrega.
2. **Prohibido el uso de términos ambiguos:** No nombrar archivos como `final.mp4`, `render_final2.png` o `definitivo_vfinal.blend`.
3. **Sufijos de Estado Claros:**
   * Archivo de prueba: `escena01_shot02_test_v003.exr`
   * Archivo final aprobado: `escena01_shot02_FINAL_v001.mov` (ubicado dentro de `04-entregas/`).