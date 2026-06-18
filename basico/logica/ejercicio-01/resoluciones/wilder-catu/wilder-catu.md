# README - Sistema de Ranking de Escuadras

## Descripción

Este programa fue desarrollado en JavaScript y simula un sistema de ranking para escuadras de un juego Battle Royale.

El programa permite:

* Guardar información de las escuadras
* Calcular puntos según bajas y posición
* Ordenar las escuadras por puntaje
* Mostrar el ranking final

---

## Tecnologías Utilizadas

* JavaScript

---

## Estructura del Programa

El código se divide en las siguientes partes:

1. Creación del arreglo de escuadras
2. Función para calcular puntos
3. Asignación de puntos
4. Ordenamiento del ranking
5. Mostrar resultados

---

## Explicación del Código

### 1. Arreglo de Escuadras

Se creó un arreglo llamado `escuadras` donde cada objeto guarda información de una escuadra:

* nombre
* bajas
* posicion
* revividos

Ejemplo:

```js
{
  nombre: "Shadow Hunters",
  bajas: 8,
  posicion: 1,
  revividos: 3
}
```

---

### 2. Cálculo de Puntos

Se creó una función llamada `calcularPuntos()`.

La función calcula:

* 3 puntos por cada baja
* Puntos extra según la posición:

| Posición | Puntos |
| -------- | ------ |
| 1        | 20     |
| 2        | 14     |
| 3        | 10     |
| Otras    | 4      |

---

### 3. Asignación de Puntos

Se utilizó `forEach()` para recorrer el arreglo y guardar los puntos en cada escuadra.

```js
escuadra.puntos = calcularPuntos(escuadra);
```

---

### 4. Ordenamiento

Se utilizó `sort()` para ordenar las escuadras de mayor a menor puntaje.

```js
escuadras.sort((a, b) => b.puntos - a.puntos);
```

---

### 5. Mostrar Resultados

Finalmente se mostró el ranking usando `console.log()`.

Ejemplo:

```txt
1. Shadow Hunters | Puntos: 44
2. Night Wolves | Puntos: 29
```

---

## Cómo Pensé la Solución

Primero analicé qué información necesitaba guardar y decidí usar un arreglo de objetos porque facilita organizar los datos.

Luego separé el cálculo de puntos en una función para evitar repetir código.

Después utilicé `sort()` para ordenar automáticamente el ranking.

Finalmente mostré los resultados recorriendo el arreglo.

---

## Evidencia de Validación

### Ejemplo 1

Shadow Hunters

* 8 bajas = 24 puntos
* Posición 1 = 20 puntos
* Total = 44 puntos

### Ejemplo 2

Fire Squad

* 6 bajas = 18 puntos
* Posición 3 = 10 puntos
* Total = 28 puntos

Los resultados coinciden correctamente con las reglas establecidas.

---

## Ejecución del Programa

### En navegador

1. Abrir la consola del navegador
2. Copiar el código
3. Ejecutarlo

### En Node.js

```bash
node archivo.js
```

---

## Conclusión

Con este programa se logró crear un sistema básico de ranking utilizando:

* arreglos
* objetos
* funciones
* recorridos
* ordenamiento de datos

El código queda organizado y fácil de modificar en el futuro.
