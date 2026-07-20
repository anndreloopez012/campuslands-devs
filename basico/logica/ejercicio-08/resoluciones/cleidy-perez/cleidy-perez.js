const autos = [
    { marca: "Ferrari", modelo: "SF90 Stradale", ceroACien: 2.5, precioUSD: 510000, unidades: 799 },
    { marca: "Bugatti", modelo: "Chiron Super Sport", ceroACien: 2.2, precioUSD: 3900000, unidades: 30 },
    { marca: "Porsche", modelo: "911 Turbo S", ceroACien: 2.7, precioUSD: 230000, unidades: 1200 },
    { marca: "Tesla", modelo: "Model S Plaid", ceroACien: 2.1, precioUSD: 90000, unidades: 5000 },
    { marca: "Lamborghini", modelo: "Aventador Ultimae", ceroACien: 2.8, precioUSD: 500000, unidades: 350 },
    { marca: "Toyota", modelo: "Corolla GR", ceroACien: 4.9, precioUSD: 40000, unidades: 8000 }
];

const rapidos = autos.filter(a => a.ceroACien < 3);
console.log("Autos rápidos:", rapidos);

const clasificados = autos.map(a => {
    return { ...a, exclusividad: a.unidades < 500 ? "extrema" : "alta" };
});
console.log("Autos clasificados:", clasificados);

const totalPrecios = autos.reduce((suma, a) => suma + a.precioUSD, 0);
const promedio = totalPrecios / autos.length;
console.log("Precio promedio: $" + promedio);

const top3 = [...autos].sort((a, b) => a.ceroACien - b.ceroACien).slice(0, 3);
console.log("Top 3 más rápidos:", top3);