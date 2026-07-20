# Sistema de Ranking de Escuadras

## Descripción

Este programa simula un sistema de puntuación para varias escuadras de un videojuego. Cada escuadra obtiene una cantidad de puntos según:

- El número de bajas realizadas.
- La posición final obtenida en la partida.

Posteriormente, las escuadras se ordenan de mayor a menor puntuación para generar un ranking final.

---

## Estructura de los datos

Las escuadras se almacenan en un arreglo de objetos. Cada objeto representa una escuadra y contiene la siguiente información:

| Propiedad | Descripción |
|-----------|-------------|
| `nombre` | Nombre de la escuadra. |
| `bajas` | Cantidad de eliminaciones realizadas. |
| `posicion` | Posición final obtenida en la partida. |
| `revividos` | Número de compañeros revividos (dato informativo, no utilizado en el cálculo). |

Ejemplo:

```javascript
{
    nombre: "Alpha",
    bajas: 5,
    posicion: 1,
    revividos: 2
}
```

---

## Cálculo de puntos por posición

El programa utiliza una función llamada `calcularPuntosPosicion()` para asignar puntos según la posición obtenida.

| Posición | Puntos |
|----------|--------|
| 1 | 20 |
| 2 | 14 |
| 3 | 10 |
| 4 o inferior | 4 |

---

## Cálculo del puntaje total

Para cada escuadra se calcula:

1. Los puntos obtenidos por bajas.

```
Puntos por bajas = bajas × 3
```

2. Los puntos obtenidos por posición.

3. La suma de ambos valores.

```
Puntos totales = (bajas × 3) + puntos por posición
```

El resultado se almacena en una nueva propiedad llamada `puntosTotales`.

---

## Ordenamiento

Después de calcular la puntuación de todas las escuadras, el arreglo se ordena de forma descendente utilizando el método:

```javascript
sort()
```

Esto permite que la escuadra con mayor puntuación aparezca en la primera posición del ranking.

---

## Salida del programa

Finalmente, se imprime en la consola el ranking de las escuadras mostrando:

- Posición en el ranking.
- Nombre de la escuadra.
- Puntos totales obtenidos.

Ejemplo:

```
=== RANKING FINAL ===
1. Alpha - 35 puntos
2. Delta - 22 puntos
3. Bravo - 23 puntos
4. Charlie - 7 puntos
```

---

## Algoritmo utilizado

1. Crear un arreglo con la información de las escuadras.
2. Definir una función para asignar puntos según la posición.
3. Recorrer el arreglo de escuadras.
4. Calcular los puntos por bajas.
5. Calcular los puntos por posición.
6. Obtener los puntos totales.
7. Ordenar las escuadras de mayor a menor puntuación.
8. Mostrar el ranking final en la consola.

---

## Tecnologías utilizadas

- JavaScript
- Arreglos
- Objetos
- Funciones
- Ciclos `for`
- Método `sort()`
- `console.log()` para mostrar resultados