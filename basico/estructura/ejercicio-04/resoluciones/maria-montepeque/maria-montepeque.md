# Ejercicio 04 — Catálogo de autos de lujo

**Nombre:** Maria Montepeque
## Solución

Estructura creada dentro de `catalogo-autos-lujo/`:

```
catalogo-autos-lujo/
├── data/
│   └── autos.json                   
├── assets/
│   └── cars/
│       └── .gitkeep                 
├── docs/
│   ├── convenciones-imagenes.md      
│   └── checklist-validacion.md       
└── src/
    ├── logica/
    │   └── catalogo.js               
    └── vista/
        └── mostrarCatalogo.js        
```

### Decisiones tomadas

- **`data/autos.json`**: cada auto tiene un `id` único con formato `marca-modelo-anio`, que es el mismo prefijo que usan sus imágenes. Así los datos y los assets quedan conectados por convención.
- **`assets/cars/`**: solo guarda imágenes; sus reglas de nombrado están documentadas en `docs/convenciones-imagenes.md`.
- **`src/` separado en `logica/` y `vista/`**: `catalogo.js` no imprime nada (solo carga, filtra y formatea) y `mostrarCatalogo.js` no contiene reglas de negocio (solo presenta). Cambiar la presentación a HTML en el futuro no tocaría la lógica.
- **`docs/`**: concentra las convenciones y el checklist para que cualquier miembro del equipo pueda validar el catálogo sin preguntar.

## Cómo pensé el problema

1. Leí el README dos veces e identifiqué: entrada = requisitos de organización, proceso = diseñar carpetas y convenciones, salida = estructura documentada y validable.
2. Empecé por los datos (`autos.json`), porque la estructura del JSON define qué necesita mostrar la vista y qué reglas valida la lógica.
3. Definí la convención de imágenes amarrada al `id` de cada auto, para que nunca haya duda de a qué auto pertenece una foto.
4. Separé `src` en dos capas con una sola responsabilidad cada una, y dejé el checklist en `docs/` como cierre del flujo de trabajo.

## Evidencia de validación

Comandos ejecutados (copiados como texto):

```
$ git checkout dev
$ git checkout -b feature/ejercicio-04-nombre-apellido
$ mkdir -p data assets/cars docs src/logica src/vista
$ node -e "require('./data/autos.json')"
$ node src/vista/mostrarCatalogo.js
=== Autos de Lujo Premium ===

Rolls-Royce Phantom (2024)
  Motor: V12 6.75L biturbo | 563 HP
  Color: Negro medianoche
  Precio: $460,000 USD
  Estado: Publicable

Ferrari SF90 Stradale (2024)
  Motor: V8 4.0L híbrido | 986 HP
  Color: Rosso Corsa
  Precio: $528,000 USD
  Estado: Publicable

$ git status
On branch feature/ejercicio-04-nombre-apellido
Untracked files:
  basico/estructura/ejercicio-04/resoluciones/nombre-apellido/
```

Casos validados:

- **Caso normal:** los autos disponibles con precio e imágenes se muestran como "Publicable" con su precio formateado. ✔
- **Caso límite:** el Bentley tiene `precioUsd: 0`, `imagenes: []` y `disponible: false`; el catálogo no se rompe, simplemente lo excluye del listado, y `formatearPrecio(0)` devuelve "Precio bajo consulta" en lugar de un precio inválido. ✔

## Checklist de entrega

- [x] Carpeta dentro de `resoluciones/nombre-apellido/`
- [x] `data/`, `assets/cars/`, `docs/` y `src/` creados
- [x] `data/autos.json` con estructura de ejemplo y JSON válido
- [x] Convenciones de imágenes documentadas
- [x] Lógica y visualización separadas en `src/`
- [x] Checklist de validación incluido
- [x] No se modificaron archivos base del ejercicio ni `.gitkeep`
