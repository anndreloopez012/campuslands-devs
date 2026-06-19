# Ejercicio 11 — Proyecto de arquitectura 3D

**Autora:** Maria Montepeque

---

## Razonamiento

Un proyecto de arquitectura 3D tiene cuatro tipos de artefactos bien diferenciados: planos técnicos (2D), modelos 3D, materiales/texturas y renders de salida. A eso se suma documentación de apoyo.

Decisiones clave:

- **Separar borradores de finales** dentro de cada categoría, no en una carpeta global `borradores/`. Así cada tipo de archivo sabe cuál es su estado sin depender de la ubicación externa.
- **Convención de nombres de vistas**: `fachada-principal`, `planta-baja`, `corte-aa`, etc. Nombres descriptivos, kebab-case, sin espacios ni mayúsculas.
- **Plantilla de entrega** en `docs/plantilla-entrega.md`, lista para que el equipo complete los campos antes de enviar al cliente.
- **`docs/convenciones.md`** como fuente de verdad del proyecto: define nomenclatura, unidades, versiones y responsables.

---

## Estructura de carpetas

```
basico/estructura/ejercicio-11/resoluciones/maria-montepeque/
│
├── planos/
│   ├── borradores/
│   │   ├── planta-baja-v1.dwg
│   │   └── corte-aa-v1.dwg
│   └── finales/
│       ├── planta-baja-final.dwg
│       ├── fachada-principal-final.dwg
│       └── corte-aa-final.dwg
│
├── modelos/
│   ├── borradores/
│   │   ├── estructura-base-v1.blend
│   │   └── interiores-v1.blend
│   └── finales/
│       ├── estructura-base-final.blend
│       └── interiores-final.blend
│
├── materiales/
│   ├── texturas/
│   │   ├── concreto-rugoso.png
│   │   ├── vidrio-templado.png
│   │   └── madera-roble.png
│   └── paletas/
│       └── paleta-proyecto.json
│
├── renders/
│   ├── borradores/
│   │   ├── fachada-principal-draft.png
│   │   └── interior-sala-draft.png
│   └── finales/
│       ├── fachada-principal-final.png
│       ├── fachada-lateral-final.png
│       └── interior-sala-final.png
│
└── docs/
    ├── convenciones.md
    └── plantilla-entrega.md
```

---

## Contenido de archivos clave

### `docs/convenciones.md`

```markdown
# Convenciones del proyecto

## Nomenclatura general

- Formato: `nombre-vista-estado.ext`
- Separador: guion medio (`-`), sin espacios ni mayúsculas
- Estado: `v1`, `v2`… para borradores; `final` para versiones aprobadas

## Vistas estándar

| Clave              | Descripción                        |
|--------------------|------------------------------------|
| fachada-principal  | Vista frontal del edificio         |
| fachada-lateral    | Vista lateral derecha              |
| planta-baja        | Corte horizontal planta 0          |
| planta-alta        | Corte horizontal planta 1          |
| corte-aa           | Sección longitudinal eje A–A       |
| interior-sala      | Vista interior sala principal      |

## Unidades

- Planos: metros (m)
- Modelos 3D: centímetros (cm) escalados × 100 al exportar
- Texturas: resolución mínima 2048 × 2048 px

## Carpetas

- `borradores/` → trabajo en progreso, no apto para cliente
- `finales/` → versión revisada y aprobada por el equipo

## Responsables

| Área       | Responsable   |
|------------|---------------|
| Planos     | Equipo CAD    |
| Modelos    | Equipo 3D     |
| Renders    | Equipo Visual |
| Docs       | Coordinación  |
```

---

### `docs/plantilla-entrega.md`

```markdown
# Plantilla de entrega — Proyecto arquitectura 3D

## Datos del proyecto

- **Nombre del proyecto:** _______________
- **Cliente:** _______________
- **Fecha de entrega:** _______________
- **Versión:** _______________

## Archivos incluidos

| Archivo                        | Tipo    | Estado |
|-------------------------------|---------|--------|
| fachada-principal-final.dwg   | Plano   | Final  |
| fachada-principal-final.png   | Render  | Final  |
| estructura-base-final.blend   | Modelo  | Final  |
|                               |         |        |

## Revisión previa a entrega

- [ ] Todos los archivos están en `finales/`
- [ ] Nomenclatura sigue `docs/convenciones.md`
- [ ] Renders a resolución mínima 2048 px
- [ ] Modelos exportados en unidades correctas
- [ ] Documentación completada

## Notas adicionales

_______________
```

---

### `materiales/paletas/paleta-proyecto.json`

```json
{
  "proyecto": "arquitectura-3d",
  "paleta": [
    { "nombre": "concreto",  "hex": "#C0B9B2", "uso": "estructura exterior" },
    { "nombre": "vidrio",    "hex": "#A8C4D4", "uso": "fachadas acristaladas" },
    { "nombre": "madera",    "hex": "#8B6748", "uso": "interiores y revestimientos" },
    { "nombre": "acento",    "hex": "#2C3E50", "uso": "marcos y detalles metálicos" }
  ]
}
```

---

## Casos de validación

### Caso normal — Render de fachada principal listo para cliente

- El archivo existe en `renders/finales/fachada-principal-final.png`
- El nombre sigue la convención: `{vista}-{estado}.{ext}`
- Hay un borrador previo en `renders/borradores/fachada-principal-draft.png` que muestra el historial de trabajo

### Caso límite — Material sin textura asignada

- El material `vidrio-templado.png` existe en `materiales/texturas/`
- Si un modelo referencia un material que no está en esa carpeta, `validar.js` lo detecta y reporta el archivo faltante
- Esto evita renders rotos por referencias vacías

---
