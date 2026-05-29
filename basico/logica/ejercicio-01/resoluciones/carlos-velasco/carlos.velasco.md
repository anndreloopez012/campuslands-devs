# Documentación Técnica: Sistema de Ranking de Jugadores

## Introducción

Este documento detalla la implementación de un algoritmo diseñado para procesar estadísticas de jugadores tras una partida y generar una tabla de clasificación (ranking) basada en un sistema de puntuación ponderado. La solución está construida con JavaScript moderno, empleando métodos de orden superior para la manipulación eficiente de datos.

---

## Objetivo

El propósito de la función `calcularRanking` es transformar una colección de objetos (estadísticas individuales) en un reporte ordenado de forma descendente, calculando el puntaje total de cada participante mediante la combinación de bajas confirmadas y la posición final alcanzada en la partida.

---

## Lógica del Algoritmo

La función procesa el array de entrada siguiendo una arquitectura de tubería (*pipeline*) que transforma los datos en tres etapas secuenciales:

### 1. Transformación (`map`)

Se utiliza `.map()` para crear un nuevo array donde cada objeto jugador original se extiende con una propiedad calculada llamada `puntos`.

* **Puntos por Posición:** Se aplica una lógica condicional donde:
* 1er lugar: 20 pts.
* 2do lugar: 14 pts.
* 3er lugar: 10 pts.
* Otros: 4 pts.


* **Cálculo Total:** Se aplica la fórmula $PuntosTotales = (Bajas \times 3) + PuntosPosicion$.

### 2. Ordenamiento (`sort`)

Una vez enriquecidos los datos, el método `.sort((a, b) => b.puntos - a.puntos)` organiza el array de forma descendente, comparando la propiedad `puntos` de cada par de objetos. Esto asegura que el jugador con mayor puntuación ocupe el índice inicial.

### 3. Visualización (`forEach`)

Finalmente, se emplea `.forEach()` para iterar sobre el array ordenado e imprimir en consola el ranking formateado, utilizando el índice del bucle para numerar la posición en el podio.

---

## Ejemplo de Entrada y Salida

### Entrada (Data Source)

```javascript
const jugadores = [
  { nombre: 'Madada', bajas: 8, posicion: 1, revividos: 2 },
  { nombre: 'Zero', bajas: 2, posicion: 3, revividos: 0 },
  { nombre: 'Kira', bajas: 5, posicion: 2, revividos: 1 },
  { nombre: 'Leo', bajas: 10, posicion: 10, revividos: 0 }
];

```

### Salida (Consola)

```text
1. Madada - 44 pts.
2. Leo - 34 pts.
3. Kira - 29 pts.
4. Zero - 16 pts.

```

---

## Implementación en el DOM

El archivo `index.html` cuenta con una estructura estándar HTML5 necesaria para cargar el script. La integración se realiza mediante el enlace al archivo `main.js` dentro del documento:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ranking de Jugadores</title>
</head>
<body>
    <script src="./main.js"></script>
</body>
</html>

```

---

