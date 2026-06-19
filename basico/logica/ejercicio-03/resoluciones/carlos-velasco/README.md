# Ejercicio: Sistema de gestión y reporte de personajes (RPG)

## Descripción
En este ejercicio se implementó una lógica de gestión de datos para un equipo de personajes (party) dentro de un contexto de juego. El proceso incluyó:

* **Definición de entidades:** Creación de una estructura de datos (array de objetos) para representar a los personajes con atributos clave: nombre, clase, nivel, ataque y defensa.
* **Lógica de análisis:** Implementación de funciones para calcular el poder total de cada personaje y determinar, mediante una comparación condicional, qué estadística requiere mejorar (ataque o defensa).
* **Procesamiento de datos:** Uso de métodos avanzados de arrays como `forEach` para recorrer la lista y `reduce` para realizar un cálculo acumulativo del poder total de todo el equipo.
* **Reporte visual:** Generación de una salida estructurada en consola que muestra el estado actual de los personajes y alertas para aquellos que cumplen con criterios de "debilidad".

### Estructura del Proyecto
```text
raiz/
├── data/
├── js/
│   └── main.js
└── README.md

```

## Comandos Utilizados

Para el desarrollo de la lógica de negocio se utilizaron las siguientes funciones de JavaScript:

```javascript
// reduce: Acumula el cálculo de poder de todos los personajes de la party.
const poderTotal = arr.reduce((acc, pj) => acc + ((pj.nivel * 2) + pj.ataque + pj.defensa), 0);

// forEach: Itera sobre cada personaje para realizar cálculos y mostrar alertas en consola.
arr.forEach(pj => { ... });

// Operador ternario: Define una sugerencia de entrenamiento rápida basada en una comparación.
return pj.ataque < pj.defensa ? "Entrenar Ataque" : "Entrenar Defensa";

```



**Hecho por:**

* *Carlos Elias Tzoy Velasco*
