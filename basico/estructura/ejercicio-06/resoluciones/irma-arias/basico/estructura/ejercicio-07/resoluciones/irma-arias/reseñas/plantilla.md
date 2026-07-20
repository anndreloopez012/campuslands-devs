
# Reseña de: [Título del libro]
**Autor:** **Calificación:** /5
**Opinión:** ```

### 6. El `README.md` (Tu explicación)
Abre `README.md` y pega esto:
```markdown
# Biblioteca de Ciencia Ficción
**Autora:** Irma Arias

## Razonamiento
He estructurado la biblioteca separando los metadatos (JSON) de los recursos visuales (portadas) y las opiniones (reseñas). Esto permite que el sistema sea modular: podemos añadir libros sin tocar las reseñas y viceversa.

## Estructura
- `libros/datos/`: Contiene la información técnica en formato JSON.
- `libros/portadas/`: Carpeta destinada a imágenes (nomenclatura: titulo-autor.jpg).
- `reseñas/`: Archivos Markdown con las críticas literarias.