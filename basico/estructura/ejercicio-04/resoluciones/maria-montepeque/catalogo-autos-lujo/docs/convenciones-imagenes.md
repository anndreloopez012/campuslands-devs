# Convenciones para nombrar imágenes

Todas las imágenes del catálogo viven en `assets/cars/`.

## Formato obligatorio

```
marca-modelo-anio-vista.extension
```

| Parte | Regla | Ejemplo |
|---|---|---|
| `marca` | minúsculas, espacios reemplazados por guiones | `rolls-royce` |
| `modelo` | minúsculas, sin caracteres especiales | `phantom` |
| `anio` | cuatro dígitos | `2024` |
| `vista` | una de: `frontal`, `trasera`, `lateral`, `interior`, `motor` | `frontal` |
| `extension` | `jpg` o `webp`, siempre en minúsculas | `jpg` |

## Ejemplos válidos

- `rolls-royce-phantom-2024-frontal.jpg`
- `ferrari-sf90-2024-lateral.webp`
- `bentley-continental-2023-interior.jpg`

## Ejemplos inválidos

- `Foto Ferrari.JPG` → mayúsculas, espacios y sin vista
- `phantom_frontal.png` → guion bajo, falta marca y año, extensión no permitida
- `auto1.jpg` → nombre genérico sin contexto

## Reglas adicionales

1. El prefijo `marca-modelo-anio` debe coincidir con el campo `id` del auto en `data/autos.json`.
2. No se permiten espacios, tildes, mayúsculas ni guiones bajos.
3. Cada auto debe tener al menos una imagen `frontal` antes de publicarse.
4. Resolución mínima: 1920x1080. Peso máximo: 2 MB por imagen.
