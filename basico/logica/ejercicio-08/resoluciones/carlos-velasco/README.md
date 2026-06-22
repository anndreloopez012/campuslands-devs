# Catálogo de hiperdeportivos
## Estructura y Procesamiento de Datos: Análisis de Rendimiento y Exclusividad de Superdeportivos

Se ha desarrollado un script en JavaScript para procesar una base de datos de vehículos de alta gama, permitiendo filtrar por rendimiento, categorizar por exclusividad, calcular proyecciones financieras y organizar el ranking de aceleración.

* **Descripción del proceso:**
* **Estructura de Datos:** Se define una colección `autos` con especificaciones técnicas (modelo, aceleración, costo y unidades fabricadas).
* **Procesamiento de Datos:**
* **Filtrado:** Se segmenta el inventario para obtener únicamente los vehículos con una aceleración menor a 3 segundos.
* **Enriquecimiento:** Se utiliza `forEach` para inyectar dinámicamente la propiedad `exclusividad` basada en el volumen de producción.
* **Cálculo Financiero:** Mediante `reduce`, se suma el costo total de los vehículos filtrados para obtener el precio promedio.
* **Clasificación:** Se utiliza `sort` y `slice` para generar un *Top 3* basado exclusivamente en la velocidad de aceleración.




* **Tecnologías:** JavaScript (Node.js).

### Lógica del Código

```text
// Definición del conjunto de datos con superdeportivos
const autos = [
  { marca: "Bugatti", modelo: "Chiron", ceroACien: 2.4, precioUSD: 3000000, unidades: 500 },
  { marca: "Koenigsegg", modelo: "Jesko", ceroACien: 2.5, precioUSD: 2800000, unidades: 125 },
  { marca: "Rimac", modelo: "Nevera", ceroACien: 1.8, precioUSD: 2100000, unidades: 150 },
  { marca: "Ferrari", modelo: "SF90", ceroACien: 2.5, precioUSD: 500000, unidades: 2000 }
];

// Filtra los autos que alcanzan los 100 km/h en menos de 3 segundos
const rapidos = autos.filter(auto => auto.ceroACien < 3);

// Asigna una categoría de exclusividad basada en la cantidad de unidades fabricadas
rapidos.forEach(auto => {
  auto.exclusividad = auto.unidades < 500 ? "Extrema" : "Alta";
});

// Calcula el precio promedio de la lista de autos filtrados (rapidos)
const totalPrecio = rapidos.reduce((sum, auto) => sum + auto.precioUSD, 0);
const precioPromedio = totalPrecio / rapidos.length;

// Crea un Top 3 ordenado de menor a mayor tiempo de aceleración
const topTres = [...rapidos].sort((a, b) => a.ceroACien - b.ceroACien).slice(0, 3);

// Salida de resultados en consola
console.log("Precio promedio:", precioPromedio);
console.log("Top 3 aceleración:", topTres);
console.log("Lista clasificada:", rapidos);

```

---

**Estructura del Proyecto:**

```text
proyecto-superdeportivos/
└── app.js

```

**Hecho por:**

* *Carlos Velasco*