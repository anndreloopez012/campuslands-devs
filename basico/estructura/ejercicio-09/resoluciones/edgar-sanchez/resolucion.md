# Estructura del Proyecto: Tatuajes y Dibujo

Este documento describe la arquitectura de directorios del estudio de tatuajes y dibujo, detallando la función de cada carpeta, la plantilla técnica para fichas de diseño y los protocolos de privacidad para la protección de datos personales de los clientes.

---

## 1. Árbol de Estructura de Directorios

Se han creado las carpetas aplicando una convención de nomenclatura estándar en minúsculas y sin espacios (`snake_case` / `kebab-case`):

```text
estudio-tatuajes/
├── referencias/        # Imágenes de inspiración, estilos (realismo, tradicional, etc.) y bocetos generales
├── disenos/            # Diseños finales, plantillas (stencils) y fichas técnicas de tatuaje
├── clientes/           # Fichas de datos, consentimientos informados y carpetas privadas
├── agenda/             # Control de citas, calendario de turnos y disponibilidad de la agenda
└── README.md           # Documentación principal y políticas de privacidad de datos
```

---

## 2. Uso y Propósito de Cada Carpeta

* **`referencias/`**: Alberga imágenes de archivo, paletas de colores, tablas de agujas/sombras e ideas visuales. Sirve como banco de inspiración previo al diseño.
* **`disenos/`**: Contiene los vectores, artes finales preparados para estarcido (stencil) y las fichas técnicas individuales de cada trabajo a realizar.
* **`clientes/`**: Almacena el registro administrativo de los usuarios. **Nota:** No incluye fotos reales ni datos sensibles al público; únicamente utiliza identificadores únicos (`cliente-001`) y archivos *placeholder*.
* **`agenda/`**: Gestiona la disponibilidad de turnos, fechas de sesiones, retoques y tiempos estimados por trabajo.

---

## 3. Plantilla de Ficha de Diseño (`disenos/plantilla-diseno.md`)

Esta plantilla se utiliza para registrar técnicamente cada arte antes de la sesión de tatuado:

```markdown
# Ficha Técnica de Diseño

## Información General
- **Código de Diseño:** DES-001
- **Cliente ID:** CLI-001 *(Ver carpeta clientes/)*
- **Artista / Diseñador:** Edgar Sánchez
- **Estado:** [ ] Boceto / [ ] Aprobado / [x] Listo para Stencil

## Detalles del Arte
- **Estilo:** Neotradicional / Blackwork / Realismo
- **Zona del Cuerpo:** Antebrazo derecho
- **Dimensiones Estimadas:** 15cm x 10cm
- **Paleta de Colores:** Negro línea, Sombras en escala de grises, Acentos en rojo

## Agujas y Materiales Requeridos
- **Línea:** 0807RL (Round Liner)
- **Sombra/Relleno:** 1209RM (Round Magnum)
- **Pigmentos:** Dynamic Black, Solid Ink Red

## Recursos Gráficos
- **Archivo Stencil:** `disenos/stencils/DES-001-stencil.png` (Placeholder)
- **Vista Previa:** `disenos/previews/DES-001-preview.png` (Placeholder)
```

---

## 4. Políticas de Privacidad y Manejo de Datos (Protección de Clientes)

### Principios de Seguridad y Confidencialidad
1. **Uso Exclusivo de Placeholders:** En el repositorio de código y carpetas públicas no se almacenan fotografías reales de los clientes, tatuajes finalizados en la piel con rostros visibles, ni documentos de identidad. Todas las imágenes de prueba deben ser archivos *placeholder* (ej. `avatar-placeholder.png`).
2. **Protección de Datos Personales:** Los nombres reales, números telefónicos, expedientes médicos (alergias o condiciones de la piel) y firmas de consentimiento informado se mantienen en almacenamiento seguro fuera del repositorio accesible por desarrolladores.
3. **Nomenclatura Anónima:** Los clientes se registran mediante identificadores anónimos (`CLI-001`, `CLI-002`) para evitar vincular el diseño o la sesión con la identidad directa de la persona en el código o en los commits de Git.
4. **Cumplimiento de Buenas Prácticas:** Se prohíbe la subida de datos sensibles a repositorios remotos sin encriptación previa.
