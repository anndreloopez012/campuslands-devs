# Resumen - Playlist para entrenamiento de kickboxing

## Planteamiento del problema
Se requería filtrar canciones por bpm mayor a 135, clasificarlas por intensidad, calcular la duración total de la playlist y validar que estuviera entre 15 y 25 minutos.

## Cómo se llevó a cabo
1. Se definió `clasificarIntensidad` con rangos de bpm (media, alta, explosiva).
2. Se creó `organizarPlaylist` que filtra canciones con bpm > 135 y les agrega intensidad.
3. Se calculó la duración total en segundos con `reduce` y su conversión a minutos.
4. Se agruparon las canciones por intensidad usando `reduce` sobre un objeto acumulador.
5. Se validó si la duración total cae en el rango de 15 a 25 minutos (900-1500 seg).
6. Se probó con un caso normal (canciones mixtas) y un caso límite (ninguna supera el bpm mínimo).

## Pasos seguidos
- Definir función de clasificación de intensidad por rangos de bpm.
- Filtrar canciones con `filter` (bpm > 135).
- Agregar intensidad con `map`.
- Sumar duración total con `reduce`.
- Agrupar por intensidad con `reduce` sobre un objeto.
- Validar rango de duración total en segundos.
- Probar con datos normales y datos límite.