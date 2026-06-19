# Ejercicio 09 — Organización de estudio de tatuajes

**Autora:** Maria Montepeque

---

## Razonamiento

El problema pide organizar un estudio de tatuajes en cuatro áreas clave: referencias visuales, diseños propios, información de clientes y agenda. La decisión principal fue separar lo que es **contenido artístico** (referencias, diseños) de lo que es **información operativa** (clientes, agenda), que tiene implicaciones de privacidad distintas.

Para los clientes decidí crear una subcarpeta por cliente usando un ID anónimo (`cliente-001`, `cliente-002`…) en lugar de nombres reales, de modo que los archivos de datos sensibles nunca estén expuestos directamente en el árbol. La ficha de diseño vive como plantilla reutilizable dentro de `disenos/plantillas/`.

---

## Estructura de carpetas

```
resoluciones/maria-montepeque/
├── solucion.md                          ← este archivo
├── validar.js
│
└── estudio-tatuajes/
    ├── README.md                        ← política de privacidad
    │
    ├── referencias/                     ← imágenes de inspiración (no de clientes)
    │   ├── estilos/
    │   │   ├── blackwork/
    │   │   ├── acuarela/
    │   │   ├── neotradicional/
    │   │   └── realismo/
    │   ├── anatomia/
    │   │   ├── manos/
    │   │   ├── rostros/
    │   │   └── cuerpo/
    │   └── flora-fauna/
    │
    ├── disenos/                         ← trabajo propio del artista
    │   ├── plantillas/
    │   │   └── ficha-diseno.md          ← plantilla reutilizable
    │   ├── bocetos/
    │   ├── arte-final/
    │   └── archivo-historico/
    │
    ├── clientes/                        ← datos privados de clientes
    │   ├── cliente-001/
    │   │   ├── ficha-diseno.md          ← copia completada de la plantilla
    │   │   └── imagenes/
    │   │       └── .gitkeep
    │   └── cliente-002/
    │       ├── ficha-diseno.md
    │       └── imagenes/
    │           └── .gitkeep
    │
    └── agenda/                          ← citas y disponibilidad
        ├── citas-activas.md
        ├── citas-historial.md
        └── disponibilidad.md
```

---

## Archivos clave

### `estudio-tatuajes/README.md`

```markdown
# Estudio de Tatuajes — Política de privacidad

## Datos de clientes

La carpeta `clientes/` contiene información personal y sensible.
**No debe compartirse, publicarse ni subirse a repositorios públicos.**

Cada cliente se identifica con un ID anónimo (`cliente-001`, `cliente-002`…).
Su nombre real, contacto y preferencias viven únicamente dentro de su carpeta.

## Imágenes

- Las imágenes en `referencias/` son solo para uso interno del artista.
- Las imágenes en `clientes/*/imagenes/` son privadas y NO deben versionarse.
  Agregar a `.gitignore`: `clientes/*/imagenes/*`

## Responsabilidad

Quien acceda a este repositorio acepta tratar la información de clientes
con confidencialidad y de acuerdo con las leyes de protección de datos aplicables.
```

---

### `estudio-tatuajes/disenos/plantillas/ficha-diseno.md`

```markdown
# Ficha de diseño

## Datos del cliente
- **ID de cliente:** cliente-XXX
- **Fecha de consulta:** AAAA-MM-DD
- **Fecha de cita:** AAAA-MM-DD

## Detalles del tatuaje
- **Zona del cuerpo:** (ej. antebrazo izquierdo)
- **Tamaño aproximado:** (ej. 10 × 8 cm)
- **Estilo:** (ej. blackwork, acuarela, realismo)
- **Colores:** (ej. solo negro / color completo)

## Descripción del diseño
<!-- Describe aquí la idea, referencias visuales y elementos clave -->

## Referencias adjuntas
- [ ] Sin referencias
- [ ] Referencias en `clientes/cliente-XXX/imagenes/`

## Cotización
- **Precio estimado:** Q
- **Anticipo recibido:** Q
- **Saldo pendiente:** Q

## Estado
- [ ] En boceto
- [ ] Aprobado por cliente
- [ ] Tatuado
- [ ] Retoque pendiente
- [ ] Finalizado

## Notas adicionales
<!-- Alergias, preferencias de sesión, observaciones -->
```

---

### `estudio-tatuajes/agenda/citas-activas.md`

```markdown
# Citas activas

| Fecha       | Hora  | Cliente     | Servicio          | Duración est. |
|-------------|-------|-------------|-------------------|---------------|
| 2025-07-01  | 10:00 | cliente-001 | Primera sesión    | 3 horas       |
| 2025-07-03  | 14:00 | cliente-002 | Retoque           | 1 hora        |
```

---

## Casos de validación

### Caso normal — cliente con diseño completo

```
cliente-001/
  ficha-diseno.md   → tiene zona, estilo, precio y estado "Tatuado"
  imagenes/         → carpeta existe (vacía en repo; imágenes en local)
```

### Caso límite — cliente sin información completa

```
cliente-002/
  ficha-diseno.md   → fecha de cita vacía, precio en Q0, estado "En boceto"
  imagenes/         → carpeta con .gitkeep (sin imágenes todavía)
```

El sistema sigue funcionando: los campos vacíos o en cero son válidos en etapa de consulta inicial. El validador (`validar.js`) reporta advertencias en lugar de errores fatales para estos casos.
