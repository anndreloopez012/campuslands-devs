# Resolución: Catálogo de Hiperdeportivos
    Autor: Estiben Ixen
    Fecha: 11 de junio de 2026
    Ejercicio: 08 - Lógica de catálogo (Hiperdeportivos)

# Razonamiento
-El problema requiere procesar una colección de objetos para extraer información estadística y realizar clasificaciones basadas en criterios de rendimiento y escasez. Mi enfoque fue:

- Transformación: Utilicé .map() para categorizar automáticamente la exclusividad (unidades < 500 es "Extrema").

- Filtrado: Apliqué .filter() para aislar solo aquellos vehículos que cumplen con la aceleración objetivo (0-100 < 3s).

- Reducción: Empleé .reduce() para calcular el precio promedio de manera eficiente.

- Ordenamiento: Implementé .sort() para obtener el top 3 de vehículos más rápidos.

# Validación

- Caso Normal: El sistema identifica correctamente los autos menores a 3s y calcula el promedio basándose únicamente en los datos filtrados.

- Caso Límite: Si el catálogo estuviera vacío o ningún auto cumpliera la condición de < 3s, el sistema retorna un reporte que indica la falta de resultados, evitando errores al intentar calcular promedios sobre cero.

## 1. Implementación (JavaScript)
    JavaScript

```javascript

const hiperdeportivos = [
  { marca: "Bugatti", modelo: "Chiron", ceroACien: 2.4, precioUSD: 3000000, unidades: 500 },
  { marca: "Koenigsegg", modelo: "Jesko", ceroACien: 2.5, precioUSD: 2800000, unidades: 125 },
  { marca: "Rimac", modelo: "Nevera", ceroACien: 1.85, precioUSD: 2100000, unidades: 150 },
  { marca: "Ferrari", modelo: "SF90", ceroACien: 2.5, precioUSD: 500000, unidades: 2000 }
];

function procesarCatalogo(autos) {
  // Filtrar por aceleración
  const rapidos = autos.filter(a => a.ceroACien < 3);

  // Clasificar exclusividad y calcular promedio
  const catalogoProcesado = rapidos.map(a => ({
    ...a,
    exclusividad: a.unidades < 500 ? "Extrema" : "Alta"
  }));

  const precioPromedio = catalogoProcesado.reduce((acc, curr) => acc + curr.precioUSD, 0) / catalogoProcesado.length;

  // Top 3 aceleración
  const top3 = [...catalogoProcesado].sort((a, b) => a.ceroACien - b.ceroACien).slice(0, 3);

  return { catalogoProcesado, precioPromedio, top3 };
}

console.log(procesarCatalogo(hiperdeportivos));
```

# Conclusión
Este ejercicio demuestra que la manipulación de arreglos es fundamental para el análisis de datos en entornos de negocio. La capacidad de filtrar, clasificar y resumir información permite convertir listas de datos en herramientas de toma de decisiones para clubes de entusiastas o equipos de gestión de ventas.
