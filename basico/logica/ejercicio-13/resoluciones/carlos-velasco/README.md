# Estadísticas de Torneo de Ping Pong

Este ejercicio desarrolla una solución para calcular estadísticas de rendimiento de los jugadores participantes en un torneo de ping pong. A partir de la información registrada de cada jugador, el programa obtiene indicadores de desempeño como el porcentaje de victorias, el promedio de puntos anotados por partido y la diferencia entre puntos a favor y puntos en contra.

Además, la solución genera un ranking ordenando a los jugadores según su porcentaje de victorias y, en caso de empate, utilizando la diferencia de puntos como criterio de desempate.

Este tipo de procesamiento es común en sistemas de gestión deportiva donde es necesario clasificar participantes utilizando métricas objetivas.

---

# Objetivo del ejercicio

Desarrollar una solución que permita calcular automáticamente las estadísticas de cada jugador de un torneo de ping pong y generar un ranking basado en su rendimiento.

La solución debe:

- Registrar la información de cada jugador.
- Calcular el porcentaje de victorias.
- Calcular el promedio de puntos obtenidos por partido.
- Calcular la diferencia de puntos.
- Ordenar el ranking utilizando criterios de rendimiento.
- Validar que un jugador tenga al menos un partido disputado antes de realizar los cálculos.

---

# Análisis del problema

Cada jugador posee información básica sobre su desempeño durante el torneo:

- cantidad de partidos disputados;
- victorias obtenidas;
- puntos anotados;
- puntos recibidos.

A partir de estos datos es posible obtener indicadores que permitan comparar objetivamente el rendimiento de los participantes.

El principal desafío consiste en evitar divisiones entre cero cuando un jugador aún no ha disputado partidos, ya que esto produciría resultados inválidos.

Una vez calculadas las estadísticas, los jugadores deben ordenarse para construir un ranking deportivo.

---

# Lógica de la solución

La solución sigue el siguiente flujo de procesamiento:

1. Registrar todos los jugadores dentro de un arreglo.
2. Recorrer el arreglo utilizando `map()`.
3. Validar que el número de partidos sea mayor que cero.
4. Calcular:
   - porcentaje de victorias;
   - promedio de puntos por partido;
   - diferencia de puntos.
5. Generar un nuevo objeto con las estadísticas calculadas.
6. Ordenar los jugadores utilizando `sort()`.
7. Mostrar el ranking final mediante `console.table()`.

Este enfoque mantiene los datos originales sin modificarlos y facilita la reutilización de la información.

---

# Herramientas utilizadas

## JavaScript

JavaScript fue utilizado para implementar toda la lógica del ejercicio.

Se aprovecharon características modernas del lenguaje como:

- Arrays
- Objetos
- Arrow Functions
- map()
- sort()
- console.table()

Estas herramientas permiten escribir código más legible y fácil de mantener.

---

# Explicación técnica

## Array de objetos

Cada jugador es representado mediante un objeto que contiene toda su información.

Ejemplo:

```javascript
{
    nombre: "Carlos",
    partidos: 10,
    victorias: 8,
    puntosFavor: 220,
    puntosContra: 180
}
```

Este enfoque facilita acceder y manipular cada propiedad.

---

## map()

El método `map()` recorre todos los jugadores y devuelve un nuevo arreglo con las estadísticas calculadas.

Su ventaja es que no modifica el arreglo original.

---

## sort()

El método `sort()` organiza el ranking.

El criterio utilizado es:

1. Mayor porcentaje de victorias.
2. Mayor diferencia de puntos.

Esto permite obtener una clasificación similar a la utilizada en competiciones deportivas.

---

## Validación de partidos

Antes de realizar cualquier división se verifica que:

```javascript
partidos > 0
```

Si un jugador no ha disputado encuentros, sus estadísticas se asignan a cero.

Esta validación evita errores matemáticos y hace la aplicación más robusta.

---

# Fórmulas utilizadas

## Porcentaje de victorias

```text
(victorias / partidos) × 100
```

---

## Promedio de puntos

```text
puntosFavor / partidos
```

---

## Diferencia de puntos

```text
puntosFavor - puntosContra
```

---

# Solución implementada

La solución calcula automáticamente todas las estadísticas de cada jugador y posteriormente genera un ranking ordenado.

El algoritmo evita modificar la información original, creando un nuevo arreglo con todos los datos calculados.

Finalmente, el ranking se imprime en formato tabular para facilitar su lectura.

---

# Código fuente

El archivo `solucion.js` contiene la implementación completa del algoritmo descrito en este documento.

---

# Validación de la solución

## Caso normal

Jugador:

- 10 partidos
- 8 victorias

Resultado esperado:

```text
WinRate = 80%
```

La fórmula produce correctamente el porcentaje esperado.

---

## Caso límite

Jugador:

```text
0 partidos
```

Resultado esperado:

```text
WinRate = 0%
Promedio = 0
```

La validación evita divisiones entre cero.

---

# Complejidad del algoritmo

El recorrido mediante `map()` posee una complejidad:

```text
O(n)
```

La ordenación mediante `sort()` tiene una complejidad aproximada de:

```text
O(n log n)
```

Por lo tanto, la complejidad dominante del algoritmo corresponde al proceso de ordenamiento.

---

# Conclusión

Este ejercicio permitió aplicar estructuras de datos, validaciones, operaciones matemáticas y algoritmos de ordenamiento para resolver un problema común en aplicaciones deportivas.

La implementación demuestra cómo transformar datos básicos en indicadores de rendimiento útiles para generar clasificaciones automáticas, utilizando buenas prácticas de programación como la inmutabilidad de los datos, validación de entradas y separación entre procesamiento y presentación de resultados.

---

## Autor

**Carlos Velasco**