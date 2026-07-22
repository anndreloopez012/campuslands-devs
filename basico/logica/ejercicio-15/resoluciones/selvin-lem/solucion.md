# Presupuesto de estudio de animación 3D

**Nombre:** selvin  lem

## Cómo pensé el problema

El ejercicio pide calcular el costo de producción de cada escena de
animación 3D, detectar cuáles son costosas y encontrar la más cara del
proyecto. Dividí la solución siguiendo el flujo del README: definir
datos, calcular costo, filtrar costosas, sumar total y encontrar el
máximo.

1. **Datos de entrada**: cada escena es un objeto con `nombre`,
   `horasModelado`, `horasRender` y `artistas`. Usé un arreglo de
   objetos porque cada escena tiene varios atributos relacionados.
2. **Constantes con nombre**: en vez de dejar los números 40000, 25000
   y 120000 sueltos dentro de la fórmula, los declaré como constantes
   (`COSTO_HORA_MODELADO`, `COSTO_HORA_RENDER`, `COSTO_ARTISTA`) para
   que el cálculo sea más legible y fácil de ajustar si cambian las
   tarifas.
3. **Cálculo de costo**: separé la fórmula en su propia función
   (`calcularCostoEscena`) que suma el costo de modelado, el costo de
   render y el costo de artistas.
4. **Escena costosa**: usé una función aparte (`esEscenaCostosa`) para
   la regla `costo > 1000000`, y luego filtré con `filter()` sobre las
   escenas ya con costo calculado.
5. **Costo total y escena más costosa**: usé `reduce()` dos veces, una
   para sumar todos los costos (`calcularCostoTotalProyecto`) y otra
   para comparar y quedarme con la escena de mayor costo
   (`encontrarEscenaMasCostosa`), en vez de ordenar el arreglo completo
   solo para sacar el máximo.

## Evidencia de validación

**Caso normal (del ejemplo del README):** Intro del bosque, con 10h de
modelado, 8h de render y 3 artistas. El costo es
`10*40000 + 8*25000 + 3*120000 = 400000 + 200000 + 360000 = 960000`,
que coincide exactamente con el ejemplo del README y queda por debajo
del límite, así que no entra en `escenasCostosas`.

**Caso límite (escena costosa):** Batalla final, con 20h de modelado,
15h de render y 6 artistas. El costo es
`20*40000 + 15*25000 + 6*120000 = 800000 + 375000 + 720000 = 1895000`,
que supera el límite de 1000000, por lo que sí entra en
`escenasCostosas` y también resulta ser la `escenaMasCostosa`.

**Caso límite (escena barata):** Dialogo cocina, con 4h de modelado,
2h de render y 1 artista. El costo es
`4*40000 + 2*25000 + 1*120000 = 160000 + 50000 + 120000 = 330000`,
muy por debajo del límite, confirmando que el filtro no marca escenas
pequeñas como costosas.



