# Playlist para entrenamiento de Kickboxing

**Autor:**

Sergio Ajù

## Razonamiento del problema
1. **Entrada:** Un array de objetos con propiedades de canción.
2. **Filtrado:** Se descartan canciones con BPM <= 135.
3. **Clasificación:** Se asigna un nivel (Media, Alta, Explosiva) basándose en el rango de BPM.
4. **Validación:** Se suma la duración total (segundos) y se convierte a minutos para verificar si el rango es de 15-25 minutos.

## Evidencia de validación
El script realiza un `console.log` final que imprime la playlist filtrada y un mensaje de éxito o error dependiendo de si la duración total está dentro del rango permitido.