
# Ejercicio: Tabla de fútbol sala

## Descripción

En este ejercicio se desarrolló una lógica funcional en JavaScript para procesar las estadísticas de una tabla de posiciones de un torneo. El sistema toma un conjunto de datos de equipos y calcula automáticamente su desempeño basado en el sistema de puntuación estándar.

El proceso incluyó:

* **Estructuración de datos:** Definición de un arreglo de objetos `equipos` con propiedades clave: goles, victorias, empates y derrotas.
* **Lógica de procesamiento (`calcular_punto`):** Implementación de una función que utiliza programación funcional (`map`, `sort`) para:
    * Calcular los puntos totales (3 por victoria, 1 por empate).
    * Determinar la diferencia de goles.
    * Ordenar los equipos según su puntaje y diferencia de goles (criterios de desempate).
    * Asignar una posición final basada en el ranking calculado.
* **Visualización:** Uso de `console.table()` para una representación clara y organizada de la tabla de posiciones en la terminal.

### Estructura del Proyecto

```text
raiz/
├── src/
│   └── torneo.js
└── README.md

```

## Lógica del Sistema

El cálculo de puntos y la jerarquía se gestionan mediante el siguiente flujo:

1. **Cálculo:** Se recorre el arreglo aplicando la fórmula:
`puntos = (victorias * 3) + empates`
2. **Ordenamiento:** Se utiliza una comparación lógica para ordenar de mayor a menor, priorizando puntos y, en caso de empate, la diferencia de goles.
3. **Posicionamiento:** Se añade una propiedad `posicion` a cada objeto para identificar el ranking.

## Código del Ejercicio

```javascript
const equipos = [
    {
        nombre: "rojos",
        integrantes: 11,
        golesFavor: 3,
        golesContra: 1,
        victorias: 2,
        empates: 0,
        derrotas: 0
    },
    {
        nombre: "verde",
        integrantes: 11,
        golesFavor: 6,
        golesContra: 2,
        victorias: 1,
        empates: 1,
        derrotas: 0
    }
];

const calcular_punto = (arr) => {
    if (!arr || arr.length === 0) return "no hay equipos";
    
    return arr
        .map(e => ({
            ...e,
            puntos: (e.victorias * 3) + e.empates,
            difGoles: e.golesFavor - e.golesContra
        }))
        .sort((a, b) => b.puntos - a.puntos || b.difGoles - a.difGoles)
        .map((e, index) => ({ posicion: index + 1, ...e }));
};

console.table(calcular_punto(equipos));

```

## Evidencia

*(Aquí puedes insertar la captura de pantalla de la terminal mostrando el resultado de `console.table`)*

---

**Hecho por:**

* *Carlos Velasco*
