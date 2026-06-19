# Comparador de motos deportivas
## Estructura y Procesamiento de Datos: Análisis de Motocicletas

Se ha desarrollado un script en JavaScript diseñado para procesar una base de datos de motocicletas, calculando métricas de rendimiento y aplicando filtros para determinar las opciones óptimas según el criterio de mantenimiento y relación peso-potencia.

* **Descripción del proceso:**
* **Estructura de Datos:** Se definió un arreglo de objetos `motos` que contiene atributos técnicos (marca, modelo, caballos de fuerza, peso y costo de mantenimiento mensual).
* **Cálculos y Procesamiento:**
* Se añadió dinámicamente la propiedad `relacion` ($hp / pesoKg$) a cada motocicleta para evaluar su eficiencia técnica.
* Se aplicó un filtro (`filter`) para seleccionar únicamente aquellas motocicletas cuyo mantenimiento mensual es inferior a **500,000**.
* Se utilizaron métodos de ordenamiento (`sort`) para identificar la motocicleta con mejor rendimiento en pista (mayor relación) y la opción más económica en mantenimiento.


* **Importancia del procesamiento:** El uso de métodos de ordenamiento y filtrado de forma encadenada permite extraer información crítica de un conjunto de datos bruto de manera eficiente, reduciendo el riesgo de errores manuales al categorizar elementos con múltiples variables.


* **Tecnologías:** JavaScript (Node.js).

### Lógica del Código

```text
// Definición del conjunto de datos inicial con especificaciones técnicas
const motos = [
  { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 200, mantenimientoMensual: 450000 },
  { marca: "Kawasaki", modelo: "Ninja", hp: 210, pesoKg: 190, mantenimientoMensual: 600000 },
  { marca: "Honda", modelo: "CBR", hp: 190, pesoKg: 205, mantenimientoMensual: 300000 }
];

// Cálculo de la relación peso-potencia añadida como nueva propiedad a cada objeto
motos.forEach(m => m.relacion = m.hp / m.pesoKg);

// Filtrado de motocicletas accesibles (mantenimiento < 500,000)
const filtradas = motos.filter(m => m.mantenimientoMensual < 500000);

// Ordenamiento de las motos filtradas de mayor a menor según su relación peso-potencia
const ordenadas = [...filtradas].sort((a, b) => b.relacion - a.relacion);

// Identificación del mejor ejemplar para pista (índice 0 tras el ordenamiento descendente)
const mejorPista = ordenadas[0];

// Identificación del ejemplar más económico tras ordenar por costo de mantenimiento
const mejorEconomica = [...filtradas].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual)[0];

// Visualización de los resultados procesados en consola
console.log("Mejor para pista:", mejorPista);
console.log("Mejor económica:", mejorEconomica);

```

---

**Estructura del Proyecto:**

```text
js/
└── main.js

```

**Hecho por:**

* *Carlos Velasco*