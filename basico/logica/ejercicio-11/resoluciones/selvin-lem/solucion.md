# Control de inventario streetwear

**Nombre:** selvin lem

## Cómo pensé el problema

El ejercicio pide detectar productos con bajo stock y calcular una
reposición sugerida por talla. Dividí la solución siguiendo el flujo
del README: definir datos, evaluar bajo stock, calcular reposición y
armar el reporte agrupado.

1. **Datos de entrada**: cada prenda es un objeto con `nombre`, `talla`,
   `stock` y `ventasSemana`. Usé un arreglo de objetos porque cada
   prenda tiene varios atributos relacionados entre sí.
2. **Bajo stock**: separé la regla `stock < 5` en su propia función
   (`tieneBajoStock`) para que quede clara y fácil de ajustar si el
   umbral cambia.
3. **Reposición sugerida**: apliqué la fórmula `ventasSemana * 2 - stock`
   en `calcularReposicion`, y usé `Math.max(reposicion, 0)` para evitar
   que el resultado sea negativo cuando el stock ya cubre la demanda
   proyectada.
4. **Reporte por talla**: en vez de solo devolver un arreglo plano,
   agrupé el reporte con `agruparPorTalla` usando un objeto donde cada
   llave es la talla, porque el objetivo pide mostrar el reporte por
   talla y así queda más fácil de leer.

## Evidencia de validación

**Caso normal (del ejemplo del README):** Hoodie Oversize talla M,
stock 3, ventasSemana 8. Como `3 < 5`, se marca `bajoStock: true`.
La reposición es `8 * 2 - 3 = 13`, que coincide exactamente con el
ejemplo dado en el README.

**Caso límite (reposición negativa):** Cargo Pants talla XL, stock 4,
ventasSemana 0. La fórmula da `0 * 2 - 4 = -4`, pero como se aplica
`Math.max(reposicion, 0)`, la reposición sugerida queda en `0` en vez
de un número negativo. Además, como `4 < 5`, sí se marca como bajo
stock aunque no necesite reposición inmediata.

**Caso límite (borde exacto del umbral):** Cargo Pants talla S, stock
2, ventasSemana 1. Con `2 < 5` se marca bajo stock, y la reposición es
`1 * 2 - 2 = 0`.
