# Convenciones para nombrar portadas

Todas las portadas de la biblioteca viven en `books/covers/`. Ningún archivo de imagen debe guardarse fuera de esa carpeta: los datos (`books/data/`) y las reseñas (`reviews/`) solo la **referencian** por ruta relativa, nunca la contienen.

## Formato obligatorio

```
<id-del-libro>-<vista>.<extension>
```

| Parte | Regla | Ejemplo |
|---|---|---|
| `id-del-libro` | Igual al campo `id` del JSON en `books/data/`: minúsculas, palabras separadas por guiones, terminado en el año de publicación | `dune-1965` |
| `vista` | Una de: `frontal`, `trasera`, `lomo`, `edicion-especial` | `frontal` |
| `extension` | `jpg` para fotografías, `png` si la portada necesita transparencia | `jpg` |

## Ejemplos válidos

```
dune-1965-frontal.jpg
dune-1965-trasera.jpg
fundacion-1951-frontal.jpg
neuromante-1984-edicion-especial.png
```

## Ejemplos inválidos y por qué

| Nombre | Problema |
|---|---|
| `Dune.jpg` | Mayúsculas y sin año ni vista: dos ediciones de Dune chocarían |
| `portada1.jpg` | No dice de qué libro es |
| `dune 1965 frontal.jpg` | Espacios rompen rutas en scripts y URLs |
| `dune-1965.jpeg` | Falta la vista y la extensión no es estándar del proyecto |

## Reglas adicionales

1. El `id` del archivo de portada **debe existir** primero como JSON en `books/data/`. Sin datos no hay portada.
2. Si un libro aún no tiene portada, su campo `portada` en el JSON queda en `null`; nunca se inventa una ruta.
3. Resolución mínima recomendada: 600 px de ancho para `frontal`.
