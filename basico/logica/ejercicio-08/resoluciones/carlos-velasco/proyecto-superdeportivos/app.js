const autos = [
  { marca: "Bugatti", modelo: "Chiron", ceroACien: 2.4, precioUSD: 3000000, unidades: 500 },
  { marca: "Koenigsegg", modelo: "Jesko", ceroACien: 2.5, precioUSD: 2800000, unidades: 125 },
  { marca: "Rimac", modelo: "Nevera", ceroACien: 1.8, precioUSD: 2100000, unidades: 150 },
  { marca: "Ferrari", modelo: "SF90", ceroACien: 2.5, precioUSD: 500000, unidades: 2000 }
];

const rapidos = autos.filter(auto => auto.ceroACien < 3);

rapidos.forEach(auto => {
  auto.exclusividad = auto.unidades < 500 ? "Extrema" : "Alta";
});

const totalPrecio = rapidos.reduce((sum, auto) => sum + auto.precioUSD, 0);
const precioPromedio = totalPrecio / rapidos.length;

const topTres = [...rapidos].sort((a, b) => a.ceroACien - b.ceroACien).slice(0, 3);

console.log("Precio promedio:", precioPromedio);
console.log("Top 3 aceleración:", topTres);
console.log("Lista clasificada:", rapidos);