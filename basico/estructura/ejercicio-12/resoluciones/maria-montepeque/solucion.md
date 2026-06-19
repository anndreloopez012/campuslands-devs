# Ejercicio 12 – Registro de soldadura industrial

**Alumna:** Maria Montepeque
**Nivel:** Básica retadora
**Temática:** Soldadura

---

## Razonamiento

El problema pide organizar cuatro tipos de información distintos para un proyecto de soldadura:

- **Prácticas** – registros de sesiones de trabajo realizadas
- **Materiales** – catálogo de insumos disponibles
- **Seguridad** – checklist y protocolos de protección
- **Evidencias** – archivos multimedia de respaldo (imágenes, videos)

La decisión clave es mantener reportes y evidencias **en carpetas separadas**, ya que mezclarlos dificulta la búsqueda y el mantenimiento. Las evidencias se referencian desde los reportes usando rutas relativas, no se embeben.

Se usa una convención de ID por práctica (`practica-NNN`) que enlaza el reporte en texto con sus evidencias en la carpeta correspondiente.

---

## Estructura de carpetas

```
resoluciones/maria-montepeque/
├── solucion.md               ← este archivo
├── validar.js                ← script de validación
│
├── practicas/
│   ├── practica-001.md       ← caso normal (práctica completa)
│   └── practica-002.md       ← caso límite (práctica sin soldadura ejecutada)
│
├── materiales/
│   └── catalogo.md           ← listado de materiales con stock y unidad
│
├── seguridad/
│   └── checklist.md          ← ítems de verificación antes de soldar
│
└── evidencias/
    ├── practica-001/
    │   ├── foto-cordon-01.jpg
    │   └── video-proceso.mp4
    └── practica-002/
        └── (vacío – sin evidencias registradas)
```

---

## Archivos de contenido

### `practicas/practica-001.md` — Caso normal

```markdown
# Práctica 001 – Soldadura TIG en acero inoxidable

**Fecha:** 2025-06-10
**Técnico:** Maria Montepeque
**Duración:** 2 horas

## Material usado

- Electrodo de tungsteno 2.4 mm
- Varilla ER308L – 1.5 m
- Gas argón – 12 L

## Procedimiento

1. Limpieza de la superficie con acetona.
2. Ajuste de amperaje a 90 A.
3. Ejecución de cordón de soldadura en posición plana.
4. Enfriamiento controlado durante 10 minutos.

## Resultado

Cordón uniforme sin porosidades visibles. Aprobado.

## Evidencias

- evidencias/practica-001/foto-cordon-01.jpg
- evidencias/practica-001/video-proceso.mp4
```

---

### `practicas/practica-002.md` — Caso límite (práctica cancelada / sin ejecución)

```markdown
# Práctica 002 – Soldadura MIG en acero al carbono

**Fecha:** 2025-06-12
**Técnico:** Maria Montepeque
**Duración:** 0 horas

## Material usado

(ninguno – práctica cancelada antes de iniciar)

## Procedimiento

Práctica suspendida por falla en el equipo de soldadura. No se ejecutó ningún cordón.

## Resultado

Sin resultado. Estado: **Pendiente de reagendar**.

## Evidencias

(sin evidencias – carpeta evidencias/practica-002/ reservada y vacía)
```

---

### `materiales/catalogo.md`

```markdown
# Catálogo de materiales – Soldadura industrial

| ID  | Material                  | Unidad | Stock disponible | Estado    |
|-----|---------------------------|--------|-----------------|-----------|
| M01 | Electrodo E6013 3.2 mm    | unidad | 150             | Disponible|
| M02 | Electrodo de tungsteno 2.4 mm | unidad | 30          | Disponible|
| M03 | Varilla ER308L             | metro  | 0               | Agotado   |
| M04 | Gas argón (cilindro)       | unidad | 4               | Disponible|
| M05 | Alambre MIG ER70S-6 0.8 mm | kg    | 12              | Disponible|

> Los materiales con stock 0 deben solicitarse antes de planificar la práctica.
```

---

### `seguridad/checklist.md`

```markdown
# Checklist de seguridad – Antes de soldar

Marca cada ítem antes de iniciar cualquier práctica.

## Equipo de protección personal (EPP)

- [ ] Careta de soldadura con filtro adecuado al proceso
- [ ] Guantes de cuero para soldar
- [ ] Delantal de cuero o manta ignífuga
- [ ] Botas con punta de acero
- [ ] Respirador con filtro para humos metálicos

## Área de trabajo

- [ ] Zona libre de materiales inflamables a 2 m alrededor
- [ ] Extintor visible y accesible
- [ ] Ventilación activa o extractor de humos encendido
- [ ] Piso limpio y sin líquidos

## Equipo de soldadura

- [ ] Cables sin daños visibles en el aislante
- [ ] Conexión a tierra verificada
- [ ] Presión de gas correcta (si aplica)
- [ ] Amperaje ajustado según material y electrodo

## Antes de encender el arco

- [ ] Compañero o supervisor notificado
- [ ] Señalización de área activa colocada
- [ ] Todos los presentes con EPP puesto

---

> Si algún ítem queda sin marcar, **no iniciar la práctica**.
```

---

## Evidencias aceptadas

Las evidencias válidas para respaldar una práctica son:

| Tipo     | Extensiones aceptadas         | Requisito mínimo             |
|----------|-------------------------------|------------------------------|
| Imagen   | `.jpg`, `.jpeg`, `.png`       | Al menos una foto del cordón |
| Video    | `.mp4`, `.mov`                | Opcional, máx. 2 minutos     |
| Documento| `.pdf`                        | Solo para informes adjuntos  |

**No se aceptan:**
- Archivos de texto sueltos dentro de `evidencias/`
- Carpetas sin ningún archivo (excepto cuando la práctica fue cancelada)
- Imágenes sin nombre descriptivo (ej. `IMG_0042.jpg` no es válido)

Las evidencias **siempre van en su subcarpeta** `evidencias/practica-NNN/` y **nunca dentro de `practicas/`**.

---

## Explicación del proceso

1. Identifiqué cuatro dominios de información → cuatro carpetas raíz.
2. Separé reportes (`practicas/`) de archivos multimedia (`evidencias/`) para evitar mezclar tipos de contenido.
3. Usé el ID `practica-NNN` como clave de enlace entre ambas carpetas.
4. El caso límite (`practica-002`) modela una práctica con duración cero y sin materiales, lo que obliga a que el sistema soporte campos vacíos sin romperse.
5. El checklist de seguridad es un archivo independiente para que pueda imprimirse o consultarse sin abrir ningún reporte.
