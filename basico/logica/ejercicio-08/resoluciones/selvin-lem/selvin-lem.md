# Resumen - Catálogo de hiperdeportivos

## Planteamiento del problema
Se requería filtrar autos hiperdeportivos por aceleración 0-100 km/h menor a 3 segundos, clasificar su exclusividad según unidades producidas, calcular precio promedio y obtener el top 3 por aceleración.

## Cómo se llevó a cabo
1. Se definió `clasificarExclusividad` que retorna "extrema" si unidades < 500, y "estandar" en caso contrario.
2. Se creó `catalogarHiperdeportivos` que filtra autos con ceroACien < 3 y les agrega la exclusividad.
3. Se calculó el precio promedio con `reduce` sobre el arreglo filtrado, protegiendo contra división por cero.
4. Se obtuvo el top 3 ordenando por menor ceroACien y usando `slice(0, 3)`.
5. Se validó con un caso normal (4 autos, algunos hiperdeportivos) y un caso límite (ningún auto cumple el filtro).

## Pasos seguidos
- Definir función de clasificación de exclusividad.
- Filtrar autos por aceleración con `filter`.
- Agregar exclusividad con `map`.
- Calcular precio promedio con `reduce` y validación de arreglo vacío.
- Ordenar y recortar con `sort` + `slice` para el top 3.
- Probar con datos normales y datos límite.