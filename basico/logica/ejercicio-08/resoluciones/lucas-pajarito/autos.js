// Lista de autos
const autos = [
  {
    marca: "Bugatti",
    modelo: "Chiron Super Sport",
    ceroACien: 2.4,
    precioUSD: 3900000,
    unidades: 500
  },
  {
    marca: "Rimac",
    modelo: "Nevera",
    ceroACien: 1.85,
    precioUSD: 2400000,
    unidades: 150
  },
  {
    marca: "Koenigsegg",
    modelo: "Jesko Absolut",
    ceroACien: 2.5,
    precioUSD: 3000000,
    unidades: 125
  },
  {
    marca: "Ferrari",
    modelo: "SF90 Stradale",
    ceroACien: 2.5,
    precioUSD: 625000,
    unidades: 2000
  },
  {
    marca: "Lamborghini",
    modelo: "Revuelto",
    ceroACien: 2.5,
    precioUSD: 608000,
    unidades: 1000
  },
  {
    marca: "Tesla",
    modelo: "Model S Plaid",
    ceroACien: 2.1,
    precioUSD: 110000,
    unidades: 50000
  }
];

// 1. Filtrar autos con aceleración menor a 3 segundos
const rapidos = autos.filter(auto => auto.ceroACien < 3);

console.log("=== Autos que aceleran de 0 a 100 km/h en menos de 3 segundos ===");
console.table(rapidos);

// 2. Clasificar exclusividad
const clasificados = autos.map(auto => ({
    ...auto,
    exclusividad: auto.unidades < 500 ? "Extrema" : "Normal"
}));

console.log("=== Clasificación de exclusividad ===");
console.table(clasificados);

// 3. Calcular precio promedio
const sumaPrecios = autos.reduce((total, auto) => total + auto.precioUSD, 0);

const promedio = sumaPrecios / autos.length;

console.log("Precio promedio: $" + promedio.toLocaleString());

// 4. Top 3 por aceleración
const top3 = [...autos]
.sort((a, b) => a.ceroACien - b.ceroACien)
.slice(0, 3);

console.log("=== Top 3 Autos Más Rápidos ===");
console.table(top3);
