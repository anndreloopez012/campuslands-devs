# Resumen - Diagnóstico rápido de mecánica

## Planteamiento del problema
Se requería una función que, dado un arreglo de síntomas reportados por pilotos, devolviera una recomendación mecánica por cada síntoma y generara un reporte final.

## Cómo se llevó a cabo
1. Se definió un diccionario `RECOMENDACIONES` que mapea cada síntoma conocido a su consejo.
2. Se creó `diagnosticarSintoma` para normalizar el texto y buscar la recomendación, con mensaje por defecto si no se reconoce.
3. Se creó `diagnosticar` que recorre el arreglo de síntomas y arma un reporte de texto.
4. Se manejó el caso de arreglo vacío con un mensaje explícito.
5. Se validó con un caso normal (dos síntomas conocidos) y un caso límite (arreglo vacío y síntoma no reconocido).

## Pasos seguidos
- Definir diccionario de síntomas y recomendaciones.
- Normalizar texto de entrada (trim + minúsculas).
- Usar operador `??` para manejar valores no encontrados.
- Recorrer arreglo con `map` para generar recomendaciones.
- Construir reporte final con `join`.
- Probar con datos normales y datos límite.