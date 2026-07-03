# Resolución: Control de Inventario Streetwear

**Autor:** 

Sergio Ajù

## Razonamiento del problema
He diseñado un script que automatiza la detección de productos críticos. La lógica principal utiliza un condicional para filtrar el stock bajo y una operación matemática para proyectar la demanda futura basada en las ventas de la semana. 

Para evitar resultados ilógicos (como sugerir reposiciones negativas cuando el stock actual supera la demanda), utilicé un método de validación que garantiza un mínimo de 0.

## Estructura de la solución
- `inventario.js`: Contiene el arreglo de objetos y la función que genera el reporte.
- `reporte.txt`: Salida generada tras ejecutar la lógica.

## Casos de validación
1. **Caso normal:** 
   - Entrada: Stock 3, Ventas 8. 
   - Proceso: (8 * 2) - 3 = 13. 
   - Resultado: Reposición sugerida 13.
2. **Caso límite:** 
   - Entrada: Stock 10, Ventas 2. 
   - Proceso: (2 * 2) - 10 = -6. 
   - Resultado: Reposición sugerida 0 (validado).

## Instrucciones de ejecución
1. Asegúrate de tener instalado Node.js.
2. Ejecuta el archivo en tu terminal: `node inventario.js`.