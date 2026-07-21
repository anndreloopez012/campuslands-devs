# Resumen - Comparador de motos deportivas

## Planteamiento del problema
Se requería calcular una métrica de rendimiento (relación peso-potencia) para varias motos, filtrar por costo de mantenimiento, ordenar por rendimiento y determinar la mejor moto para pista y la más económica.

## Cómo se llevó a cabo
1. Se definió `calcularRelacionPesoPotencia` con validación de división por cero.
2. Se creó `compararMotos` que agrega la métrica a cada moto.
3. Se filtraron las motos con mantenimiento menor a 500000.
4. Se generó un ranking ordenado por mejor relación peso-potencia.
5. Se extrajo la mejor opción de pista (mayor relación) y la más económica (menor mantenimiento).
6. Se validó con un caso normal (4 motos) y un caso límite (pesoKg en 0).

## Pasos seguidos
- Definir función pura para el cálculo de la métrica.
- Proteger contra división por cero.
- Filtrar por límite de mantenimiento.
- Ordenar por rendimiento (map + filter + sort).
- Extraer mejor para pista y mejor económica con sort secundario.
- Probar con datos normales y datos límite.