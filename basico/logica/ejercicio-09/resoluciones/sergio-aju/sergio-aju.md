# Ejercicio 09: Playlist para Kickboxing

**Alumno:** Sergio Ajú

## Lógica del Problema
1. **Entrada:** Un arreglo de objetos con título, artista, bpm y duración.
2. **Filtrado:** Se eliminaron las canciones con menos de 135 BPM.
3. **Clasificación:** Se utilizó una función para categorizar por intensidad (Media: 136-145, Alta: 146-160, Explosiva: >160).
4. **Acumulación:** Se sumó la duración total convirtiendo segundos a minutos para validar el rango objetivo (15-25 min).

## Validación
- La lista filtrada asegura alta energía para el entrenamiento.
- La suma total del tiempo se valida mediante una condición que verifica si el resultado está dentro del rango permitido.