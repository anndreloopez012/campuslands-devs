# Ejercicio: Control de líneas MOBA

## Descripción
En este ejercicio se desarrolló una función de procesamiento de datos para evaluar el desempeño individual de jugadores en una partida. El proceso incluyó:

* **Estructuración de datos:** Creación de un array de objetos con estadísticas de juego: nombre, rol, KDA (kills, deaths, assists), oro y objetivos completados.
* **Cálculo de métricas:** Implementación de una fórmula para calcular el KDA, utilizando `Math.max` para evitar divisiones por cero en caso de cero muertes.
* **Procesamiento lógico:** Uso de métodos encadenados (`map`, `sort`, `forEach`) para transformar, ordenar los jugadores según su eficiencia (KDA descendente) y evaluar su situación económica y de objetivos.
* **Salida de alertas:** Visualización del KDA calculado, clasificación de nivel de oro y generación de advertencias en consola para los jugadores que no cumplen con el mínimo de objetivos requeridos.

### Estructura del Proyecto
```text
raiz/
├── data/
├── js/
│   └── main.js
└── README.md

```

## Comandos Utilizados

Para implementar esta lógica se utilizaron las siguientes funciones clave de JavaScript:

```javascript
// map: Calcula el KDA de cada jugador basándose en sus estadísticas.
pj.map(p => ({...p, kda: (p.kills + p.assists) / Math.max(p.deaths, 1)}))

// sort: Ordena a los jugadores de mayor a menor KDA.
.sort((a, b) => b.kda - a.kda)

// forEach: Itera para mostrar el reporte y lanzar alertas de objetivos mediante console.warn.
.forEach(p => { ... });

```

## Evidencia

---

**Hecho por:**

* *Carlos Velasco*
