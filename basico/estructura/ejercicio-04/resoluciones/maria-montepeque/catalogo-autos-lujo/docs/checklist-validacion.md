# Checklist de validación del catálogo

## Estructura

- [ ] Existen las carpetas `data/`, `assets/cars/`, `docs/` y `src/`.
- [ ] `data/autos.json` es un JSON válido (se puede comprobar con `node -e "require('./data/autos.json')"`).
- [ ] La lógica está en `src/logica/` y la visualización en `src/vista/`, sin mezclarse.

## Datos

- [ ] Todo auto tiene `id`, `marca`, `modelo`, `anio`, `precioUsd` y `disponible`.
- [ ] Ningún `id` está repetido.
- [ ] Caso límite: un auto con `precioUsd` en `0` o con `imagenes` vacías no rompe el catálogo (se marca como no publicable, no como error).

## Imágenes

- [ ] Cada nombre de archivo cumple `marca-modelo-anio-vista.extension`.
- [ ] El prefijo del archivo coincide con el `id` del auto en `autos.json`.
- [ ] Solo extensiones `jpg` o `webp` en minúsculas.

## Entrega

- [ ] Todo el trabajo está dentro de `resoluciones/nombre-apellido/`.
- [ ] No se modificó el README base del ejercicio ni archivos `.gitkeep`.
- [ ] El trabajo se hizo en una rama propia creada desde `dev`.
