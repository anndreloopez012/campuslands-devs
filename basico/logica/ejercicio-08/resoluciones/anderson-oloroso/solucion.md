# Resolución ejercicio 08 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el sistema de clasificación de un club de autos de lujo (`hiperdeportivos.js`). Se define una colección de vehículos hiperdeportivos, se filtran aquellos con aceleración de 0 a 100 km/h en menos de 3 segundos, se evalúa su nivel de exclusividad en función de las unidades fabricadas, se calcula el precio promedio del catálogo completo y se determina el top 3 de los autos más rápidos.

```javascript
// 1. Definición de la colección de hiperdeportivos
const hiperdeportivos = [
  { marca: "Bugatti", modelo: "Chiron Super Sport", ceroACien: 2.4, precioUSD: 3800000, unidades: 500 },
  { marca: "Rimac", modelo: "Nevera", ceroACien: 1.81, precioUSD: 2400000, unidades: 150 },
  { marca: "Koenigsegg", modelo: "Jesko Absolut", ceroACien: 2.5, precioUSD: 3400000, unidades: 125 },
  { marca: "Ferrari", modelo: "SF90 Stradale", ceroACien: 2.5, precioUSD: 524000, unidades: 1000 },
  { marca: "Porsche", modelo: "911 GT3 RS", ceroACien: 3.2, precioUSD: 241300, unidades: 1500 },
  { marca: "McLaren", modelo: "750S", ceroACien: 2.8, precioUSD: 329500, unidades: 750 }
];

// 2. Filtrar autos que hacen 0-100 km/h en menos de 3 segundos
const hiperdeportivosRapidos = hiperdeportivos.filter(auto => auto.ceroACien < 3.0);

// 3. Clasificar nivel de exclusividad
const autosClasificados = hiperdeportivosRapidos.map(auto => ({
  ...auto,
  exclusividad: auto.unidades < 500 ? "Extrema" : "Alta"
}));

// 4. Calcular el precio promedio del catálogo base
const totalPrecios = hiperdeportivos.reduce((acumulador, auto) => acumulador + auto.precioUSD, 0);
const precioPromedioUSD = totalPrecios / hiperdeportivos.length;

// 5. Muestra del top 3 por aceleración (menor tiempo de 0 a 100 km/h)
const top3Aceleracion = [...autosClasificados]
  .sort((a, b) => a.ceroACien - b.ceroACien)
  .slice(0, 3);

console.log("=== CLUB DE VEHÍCULOS HIPERDEPORTIVOS ===");
console.log(`Precio Promedio del Catálogo: $${precioPromedioUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD\n`);
console.log("--- TOP 3 MÁS RÁPIDOS (0-100 km/h < 3s) ---");
top3Aceleracion.forEach((auto, index) => {
  console.log(`${index + 1}. ${auto.marca}${auto.modelo}`);
  console.log(`   - 0-100 km/h: ${auto.ceroACien}s | Unidades: ${auto.unidades} \vert{} Exclusividad:${auto.exclusividad}`);
  console.log(`   - Precio: $${auto.precioUSD.toLocaleString('en-US')} USD`);
});
```

- Breve explicación

Primero, se construye la base de datos de hiperdeportivos asignando a cada modelo sus especificaciones clave (aceleración, precio y unidades producidas). Utilizando `.filter()`, se descartan los vehículos cuya aceleración de 0 a 100 km/h sea mayor o igual a 3 segundos.

A continuación, con el método `.map()` y un operador ternario, se evalúa la cantidad de unidades fabricadas para agregar la propiedad `exclusividad` ("Extrema" si las unidades son menores a 500, o "Alta" en caso contrario). Además, se calcula el precio promedio del catálogo sumando los precios con `.reduce()` y dividiendo el total entre la cantidad de vehículos.

Finalmente, mediante `.sort()` se ordenan los autos filtrados de menor a mayor tiempo de aceleración y con `.slice(0, 3)` se extrae el top 3 de los hiperdeportivos más veloces para mostrarlos en consola en un formato claro y descriptivo.