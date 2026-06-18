# Ejercicio 07: Biblioteca de Ciencia Ficción

**Nombre:** Irma Arias

## Arquitectura de la Biblioteca
- **libros/datos/**: Contiene archivos JSON con los metadatos de cada libro.
- **libros/portadas/**: Almacena las imágenes de portada. Convención: `nombre-libro_portada.jpg`.
- **resenas/**: Archivos Markdown para las opiniones de los usuarios.

## Explicación del Razonamiento
He separado los recursos multimedia (imágenes) de los archivos de texto (datos y reseñas). Esta estructura facilita que el proyecto pueda escalar sin que la carpeta de datos se sature con archivos pesados.

## Ejemplo de Datos (dune.json)
```json
{
  "isbn": "978-0441172719",
  "titulo": "Dune",
  "autor": "Frank Herbert",
  "año": 1965
}