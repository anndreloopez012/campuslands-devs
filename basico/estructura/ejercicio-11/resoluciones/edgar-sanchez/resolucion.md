# Estructura del Proyecto: Diseño 3D Arquitectura

Este documento detalla la organización de carpetas, estándares de nomenclatura y protocolos para la gestión de proyectos de visualización 3D y diseño arquitectónico.

---

## 1. Árbol de Estructura de Directorios

```text
proyecto-arquitectura-3d/
├── planos/             # Archivos CAD/BIM (.dwg, .rvt) y esquemas técnicos
├── modelos/            # Modelos 3D (.skp, .3ds, .blend, .max)
├── materiales/         # Texturas PBR, mapas HDRI y catálogo de acabados
├── renders/            # Salidas visuales (separadas en borradores y finales)
│   ├── borradores/     # Pruebas de iluminación, encuadre y avance
│   └── finales/        # Renders en alta resolución para cliente
└── docs/               # Documentación técnica del proyecto
    ├── convenciones.md # Reglas de nomenclatura y estándares de trabajo
    └── plantilla-entrega.md # Formulario técnico de entrega de renders
```

---

## 2. Convenciones de Nomenclatura (`docs/convenciones.md`)

Para garantizar la consistencia en el proyecto, se utilizan nombres descriptivos en minúsculas y separados por guiones medios (`kebab-case`):

### Estándar para Vistas y Renders:
* `fachada-principal`
* `fachada-posterior`
* `corte-transversal-a`
* `isometria-conjunto`
* `perspectiva-interior-sala`

### Regla de Versionado:
`[Proyecto]_[TipoVista]_[Estado]_[Version].[ext]`  
* **Borrador:** `casa-bosque_fachada-principal_draft_v01.jpg`
* **Final:** `casa-bosque_fachada-principal_final_v01.png`

---

## 3. Separación de Borradores y Finales

1. **`renders/borradores/`:**
   * Archivos de bajo peso o resolución media para revisión interna.
   * Llevan el prefijo o sufijo `draft` o `prueba`.
2. **`renders/finales/`:**
   * Renders terminados en alta resolución (4K+), post-procesados y listos para presentación al cliente.

---

## 4. Plantilla de Entrega (`docs/plantilla-entrega.md`)

```markdown
# Reporte de Entrega Arquitectónica

## Datos del Proyecto
- **Proyecto:** Casa Campestre El Bosque
- **Cliente:** Constructora Alfa
- **Fecha:** 2026-07-20
- **Versión de Entrega:** Final v1.0

## Archivos Incluidos
- **Planos:** `planos/casa-bosque_planos-aprobados_v02.dwg`
- **Modelo 3D:** `modelos/casa-bosque_model-final_v03.skp`
- **Renders Entregados:**
  - `renders/finales/casa-bosque_fachada-principal_final_v01.png`
  - `renders/finales/casa-bosque_perspectiva-interior-sala_final_v01.png`

## Configuración Técnica de Render
- **Motor de Render:** V-Ray / Corona / Unreal Engine
- **Resolución:** 3840 x 2160 (4K)
- **Formato:** PNG 16-bit