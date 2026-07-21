# - Maratón de películas de miedo

## Planteamiento del problema
Se requería filtrar películas por rating mínimo, acumularlas sin superar 360 minutos totales y calcular el total de sustos de la selección final.

## Cómo se llevó a cabo
1. Se creó `seleccionarMaraton` que filtra las películas con rating >= 7.
2. Se recorrieron las candidatas acumulando duración con un bucle, agregando solo las que no rompen el límite de 360 minutos.
3. Se calculó el total de sustos con `reduce` sobre la lista seleccionada.
4. Se validó con un caso normal (mezcla de buenas y malas calificaciones) y un caso límite (ninguna cumple el rating mínimo).

## Pasos seguidos
- Filtrar candidatas por rating con `filter`.
- Acumular duración con un bucle `for...of`, evaluando cada película antes de sumarla.
- Descartar películas que rompen el límite sin detener el proceso.
- Sumar sustos con `reduce`.
- Probar con datos normales y datos límite.