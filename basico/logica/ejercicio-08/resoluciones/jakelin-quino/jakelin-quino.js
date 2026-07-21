// Autos: marca, modelo, ceroACien, precioUSD, unidades
const autos = [
  { marca: "Bugatti", modelo: "Chiron", ceroACien: 2.4, precioUSD: 3300000, unidades: 500 },
  { marca: "Koenigsegg", modelo: "Jesko", ceroACien: 2.5, precioUSD: 2800000, unidades: 125 },
  { marca: "Rimac", modelo: "Nevera", ceroACien: 1.85, precioUSD: 2400000, unidades: 150 },
  { marca: "Tesla", modelo: "Roadster", ceroACien: 1.9, precioUSD: 200000, unidades: 1000 },
  { marca: "Pagani", modelo: "Huayra", ceroACien: 2.8, precioUSD: 3400000, unidades: 100 }
];

// Filtrar aceleración < 3s
const rapidos = autos.filter(a => a.ceroACien < 3);

// Clasificar exclusividad
const conExclusividad = rapidos.map(a => ({
  ...a,
  exclusividad: a.unidades < 500 ? "Extrema" : "Alta"
}));

// Top 3 por aceleración
const top3 = [...conExclusividad].sort((a, b) => a.ceroACien - b.ceroACien).slice(0, 3);

// Precio promedio
const promedio = conExclusividad.reduce((sum, a) => sum + a.precioUSD, 0) / conExclusividad.length;

console.log("Top 3 aceleración:", top3.map(a => `${a.marca} ${a.modelo} (${a.ceroACien}s)`));
console.log("Precio promedio:", `$${Math.round(promedio).toLocaleString()}`);
console.log("Exclusividad extrema:", conExclusividad.filter(a => a.exclusividad === "Extrema").map(a => a.modelo));