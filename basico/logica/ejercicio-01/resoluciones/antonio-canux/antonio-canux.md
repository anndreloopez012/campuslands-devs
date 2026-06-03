# Antonio Canux

## Ejercicio 01 - Ranking de escuadras battle royale

### Objetivo

Desarrollar un programa que calcule el puntaje total de cada escuadra y genere un ranking ordenado de mayor a menor según los puntos obtenidos.

### Análisis del problema

Cada escuadra posee los siguientes datos:

* Nombre
* Bajas
* Posición final
* Revividos

Para calcular el puntaje se utilizaron las siguientes reglas:

* Cada baja otorga 3 puntos.
* Posición 1: 20 puntos.
* Posición 2: 14 puntos.
* Posición 3: 10 puntos.
* Cualquier otra posición: 4 puntos.

Posteriormente se ordenaron las escuadras de mayor a menor puntaje para generar el ranking final.

### Solución implementada

Se utilizó un arreglo de objetos para almacenar la información de las escuadras.

Luego se creó una función encargada de calcular los puntos de cada escuadra según las reglas establecidas.

Finalmente se ordenó el arreglo utilizando el puntaje total calculado y se mostró el ranking en consola.

### Evidencia de validación

#### Caso normal

Entrada:

* Nova: 8 bajas, posición 1.
* Hacker: 7 bajas, posición 2.
* Campers: 12 bajas, posición 3.
* Ninja: 6 bajas, posición 4.

Resultado:

1. Campers - 46 pts
2. Nova - 44 pts
3. Hacker - 35 pts
4. Ninja - 22 pts

#### Caso límite

Entrada:

* Rookie: 0 bajas, posición 10.

Resultado:

1. Rookie - 4 pts

### Conclusión

La solución cumple con el objetivo solicitado, calcula correctamente los puntos según las reglas del torneo y genera un ranking ordenado de mayor a menor puntaje.
