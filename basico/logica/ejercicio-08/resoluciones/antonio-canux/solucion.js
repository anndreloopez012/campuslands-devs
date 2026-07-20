// 1. Definición del catálogo de autos
const catalogo = [
  { marca: "Bugatti", modelo: "Chiron Super Sport", ceroACien: 2.4, precioUSD: 3900000, unidades: 30 },
  { marca: "Koenigsegg", modelo: "Jesko", ceroACien: 2.5, precioUSD: 3000000, unidades: 125 },
  { marca: "Rimac", modelo: "Nevera", ceroACien: 1.85, precioUSD: 2400000, unidades: 150 },
  { marca: "Pagani", modelo: "Huayra BC", ceroACien: 2.8, precioUSD: 2500000, unidades: 20 },
  { marca: "Nissan", modelo: "GT-R50 by Italdesign", ceroACien: 2.9, precioUSD: 1100000, unidades: 50 },
  { marca: "Porsche", modelo: "918 Spyder", ceroACien: 2.6, precioUSD: 845000, unidades: 918 },
  { marca: "McLaren", modelo: "P1", ceroACien: 2.8, precioUSD: 1150000, unidades: 375 },
  { marca: "Ferrari", modelo: "LaFerrari", ceroACien: 3.1, precioUSD: 1420000, unidades: 499 }
];

console.log("--- INICIANDO ANÁLISIS DEL CATÁLOGO ---");

// 2. Filtrar autos que hacen 0-100 km/h en menos de 3 segundos
const subTresSegundos = catalogo.filter(auto => auto.ceroACien < 3.0);

console.log("\n1. Autos con 0-100 km/h en menos de 3s:");
console.table(subTresSegundos.map(a => ({ Marca: a.marca, Modelo: a.modelo, '0-100': a.ceroACien })));


// 3. Clasificar exclusividad: unidades < 500 es extrema
const catalogoClasificado = catalogo.map(auto => {
  return {
    ...auto,
    clasificacionExclusividad: auto.unidades < 500 ? "Extrema" : "Estándar de lujo"
  };
});

console.log("\n2. Clasificación de exclusividad:");
console.table(catalogoClasificado.map(a => ({ Modelo: a.modelo, Unidades: a.unidades, Exclusividad: a.clasificacionExclusividad })));


// 4. Calcular precio promedio del catálogo
const valorTotal = catalogo.reduce((acumulador, auto) => acumulador + auto.precioUSD, 0);
const precioPromedio = valorTotal / catalogo.length;

// Formateamos el número para que se vea como moneda
const formatoMoneda = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(precioPromedio);
console.log(`\n3. El precio promedio del catálogo es: ${formatoMoneda}`);


// 5. Mostrar top 3 por aceleración (ordenando de menor a mayor tiempo)
// Usamos el spread operator [...] para no mutar el arreglo original al usar sort()
const top3Aceleracion = [...catalogo]
  .sort((a, b) => a.ceroACien - b.ceroACien)
  .slice(0, 3);

console.log("\n4. TOP 3: Vehículos con mejor aceleración:");
top3Aceleracion.forEach((auto, index) => {
  console.log(`   #${index + 1} - ${auto.marca} ${auto.modelo} (${auto.ceroACien}s)`);
});