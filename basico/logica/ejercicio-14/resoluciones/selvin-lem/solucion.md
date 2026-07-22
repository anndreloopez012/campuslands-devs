# Laboratorio de fórmulas químicas

**Nombre:** aelvin-lem

## Cómo pensé el problema

El ejercicio pide calcular la masa total de cada compuesto y detectar
cuáles tienen componentes con gramos inválidos (menores o iguales a 0).
Dividí la solución siguiendo el flujo del README: definir datos, validar
componentes, sumar gramos y filtrar los compuestos incompletos.

1. **Datos de entrada**: cada compuesto es un objeto con `nombre` y un
   arreglo `componentes`, donde cada componente tiene `simbolo` y
   `gramos`. Usé arreglos anidados porque un compuesto puede tener
   varios componentes.
2. **Validación por componente**: separé la regla `gramos > 0` en su
   propia función (`esComponenteValido`) para no repetirla y poder
   reutilizarla tanto al validar el compuesto completo como al filtrar
   los componentes inválidos específicos.
3. **Compuesto completo**: usé `every()` en `esCompuestoCompleto` para
   verificar que todos los componentes del compuesto sean válidos; si
   uno solo falla, el compuesto se considera incompleto.
4. **Masa total**: usé `reduce()` en `calcularMasaTotal` para sumar los
   gramos de todos los componentes, sin importar si son válidos o no,
   porque el objetivo pide calcular la masa total además de detectar
   incompletos.
5. **Filtrado**: en vez de solo descartar los compuestos incompletos,
   los guardé en un arreglo aparte junto con el detalle de qué
   componentes específicos fallaron (`componentesInvalidos`), para que
   la evidencia de validación sea más clara.
