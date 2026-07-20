# Maratón de Películas de Miedo

**Autor:** 

Sergio Ajù

## Razonamiento del problema
Para construir la maratón, el proceso lógico fue:
1. **Filtrado:** Descartar películas con un rating menor a 7.
2. **Selección:** Iterar sobre las películas filtradas y agregarlas a la lista de reproducción solo si el tiempo acumulado no excede el límite de 360 minutos (6 horas).
3. **Cálculo:** Sumar los sustos y la duración de las películas seleccionadas para mostrar el resultado final.

## Validación
El script verifica la condición de corte mediante un acumulador de tiempo. Se incluyeron películas con distintos ratings para asegurar que el filtro `rating >= 7` funciona correctamente.