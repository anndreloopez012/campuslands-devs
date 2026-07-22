# Resolución ejercicio 10 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula la selección de un catálogo de películas de miedo para una maratón de cine de terror (`maraton_terror.js`). Se define una colección de títulos con su duración, nivel de sustos y calificación, se filtran las películas con un rating aceptable ($\ge 7.0$), se acumulan en la lista sin exceder el límite máximo de 360 minutos (6 horas), se calcula la suma total de sustos y se imprime el resultado final.

```javascript
// 1. Catálogo base de películas de miedo
const peliculas = [
  { titulo: "El Conjuro", duracionMin: 112, sustos: 15, rating: 7.5 },
  { titulo: "Hereditary", duracionMin: 127, sustos: 12, rating: 7.3 },
  { titulo: "Scream", duracionMin: 111, sustos: 8, rating: 7.4 },
  { titulo: "Un Lugar en Silencio", duracionMin: 90, sustos: 10, rating: 7.5 },
  { titulo: "La Bruja", duracionMin: 92, sustos: 5, rating: 7.0 },
  { titulo: "La Monja", duracionMin: 96, sustos: 14, rating: 5.3 },
  { titulo: "IT (Eso)", duracionMin: 135, sustos: 18, rating: 7.3 }
];

// 2. Filtrar películas con rating mayor o igual a 7.0
const peliculasRecomendadas = peliculas.filter(peli => peli.rating >= 7.0);

// 3. Acumular películas sin superar el límite de 360 minutos (6 horas)
const MAX_MINUTOS = 360;
const maratonFinal = [];
let duracionAcumulada = 0;

for (const peli of peliculasRecomendadas) {
  if (duracionAcumulada + peli.duracionMin <= MAX_MINUTOS) {
    maratonFinal.push(peli);
    duracionAcumulada += peli.duracionMin;
  }
}

// 4. Calcular el total de sustos acumulados en la maratón
const totalSustos = maratonFinal.reduce((acumulador, peli) => acumulador + peli.sustos, 0);

// 5. Muestra de la lista final organizada
console.log("=== MARATÓN DE PELÍCULAS DE MIEDO (MÁX. 6 HORAS) ===");
console.log("Películas seleccionadas:\n");

maratonFinal.forEach((peli, index) => {
  console.log(`${index + 1}.${peli.titulo}`);
  console.log(`   - Duración: ${peli.duracionMin} min | Rating: ${peli.rating} \vert{} Sustos:${peli.sustos}`);
});

console.log("\n--- RESUMEN DE LA MARATÓN ---");
console.log(`Duración total: ${duracionAcumulada} minutos (${(duracionAcumulada / 60).toFixed(2)} horas)`);
console.log(`Tiempo restante disponible: ${MAX_MINUTOS - duracionAcumulada} minutos`);
console.log(`Sustos totales garantizados: ${totalSustos}`);
```

- Breve explicación

Primero, se crea el listado de películas representando cada título como un objeto con su duración en minutos, cantidad de sustos y puntuación de calidad (rating). Mediante el método `.filter()`, se descartan aquellas producciones cuya calificación sea menor a 7.0 para garantizar la calidad de la maratón.

A continuación, se define una constante de límite de tiempo de 360 minutos y se recorren las películas filtradas usando un bucle. Se evalúa con una condición si el tiempo de la película actual, sumado al acumulado previo, no sobrepasa las 6 horas; si la condición se cumple, se agrega el título a la lista `maratonFinal` y se actualiza el tiempo transcurrido.

Finalmente, mediante el método `.reduce()`, se calcula la suma acumulada de sustos de todas las películas elegidas y se muestra en consola la programación de la maratón junto con la métrica total de tiempo y sustos.