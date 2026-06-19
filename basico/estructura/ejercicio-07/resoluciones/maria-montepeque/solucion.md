# Ejercicio 07 — Biblioteca de ciencia ficción

- **Nombre:** Maria Montepeque

## Solución: árbol de carpetas

```
nombre-apellido/
├── solucion.md
└── biblioteca-ciencia-ficcion/
    ├── books/
    │   ├── data/
    │   │   ├── dune-1965.json          
    │   │   └── neuromante-1984.json    
    │   └── covers/
    │       └── .gitkeep                
    ├── reviews/
    │   ├── plantilla-resena.md         
    │   └── dune-1965-resena.md         
    ├── docs/
    │   └── convenciones-portadas.md    
    └── validar.js                     
```

## Qué hace cada carpeta

- **books/data** → contenido: un archivo JSON por libro, nombrado igual que su `id` (`titulo-anio.json`). Es la fuente de verdad del catálogo.
- **books/covers** → recursos: solo imágenes de portadas. Las convenciones de nombrado están en `docs/convenciones-portadas.md` (`<id>-<vista>.<ext>`, ej. `dune-1965-frontal.jpg`).
- **reviews** → contenido escrito por personas: una reseña por libro, creada copiando `plantilla-resena.md`.
- **docs** → documentación del proyecto que no es ni dato ni recurso.

## Separación entre contenido y recursos

La regla que apliqué: **los datos referencian, no contienen**. El JSON de cada libro guarda solo rutas relativas (`"portada": "books/covers/dune-1965-frontal.jpg"`, `"resena": "reviews/dune-1965-resena.md"`). Así, las imágenes pesadas viven aisladas en `covers/`, el texto vive en `reviews/`, y `data/` se mantiene liviano y versionable. Si un libro aún no tiene portada o reseña, el campo queda en `null` en lugar de inventar una ruta rota.

## Cómo pensé el problema

1. Leí el README dos veces e identifiqué: entrada = requisitos (3 carpetas, JSON de ejemplo, convención de portadas, plantilla de reseña), proceso = diseñar la separación contenido/recursos, salida = árbol documentado y validable.
2. Decidí que el `id` del libro (`titulo-anio`) fuera la llave que conecta todo: el JSON se llama así, la portada empieza así y la reseña empieza así. Una sola convención evita tres convenciones distintas.
3. Incluí dos libros a propósito: Dune como caso normal completo y Neuromante como caso límite (sin portada, sin reseña, `paginas: 0`, etiquetas vacías) para validar que la estructura tolera datos incompletos.
4. Escribí `validar.js` para que la validación sea repetible y no dependa de revisar a ojo.

## Evidencia de validación

Comandos ejecutados (copiados como texto):

```
$ git checkout dev
$ git checkout -b feature/ejercicio-07-nombre-apellido
$ mkdir -p books/data books/covers reviews docs
$ git status
On branch feature/ejercicio-07-nombre-apellido
Untracked files:
  basico/estructura/ejercicio-07/resoluciones/nombre-apellido/
```

Validación ejecutando el script con Node:

```
$ node validar.js
--- Caso normal: catálogo completo ---
Dune (1965) - 412 págs. - portada ok - con reseña
Neuromante (1984) - páginas sin registrar - sin portada - sin reseña
--- Caso límite: libros incompletos (sin portada o sin reseña) ---
[ 'neuromante-1984' ]
--- Caso límite: catálogo vacío no rompe el script ---
[]
```

Casos validados:

- **Caso normal:** Dune tiene JSON válido, su portada cumple la convención `dune-1965-frontal.jpg` y su reseña sigue la plantilla. ✔
- **Caso límite 1:** Neuromante con `portada: null`, `resena: null` y `paginas: 0` no rompe el validador; aparece correctamente en la lista de incompletos. ✔
- **Caso límite 2:** un catálogo vacío devuelve una lista vacía en lugar de un error. ✔

## Checklist de entrega

- [x] Carpeta dentro de `resoluciones/nombre-apellido/`
- [x] `books/data`, `books/covers` y `reviews` creadas
- [x] JSON de ejemplo para un libro (más un caso límite)
- [x] Convenciones de portadas documentadas
- [x] Plantilla de reseña creada y usada en un ejemplo
- [x] Separación contenido/recursos explicada y aplicada
- [x] Explicación del razonamiento y evidencia de validación
- [x] No se modificaron archivos base del ejercicio ni `.gitkeep`
