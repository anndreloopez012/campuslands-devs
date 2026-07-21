// ==========================================
// Sistema de análisis de motocicletas
// ==========================================

// 1. Lista de motos
const motos = [
  {
    marca: "Yamaha",
    modelo: "R6",
    hp: 118,
    pesoKg: 190,
    mantenimientoMensual: 650000
  },
  {
    marca: "Kawasaki",
    modelo: "Ninja 400",
    hp: 49,
    pesoKg: 168,
    mantenimientoMensual: 350000
  },
  {
    marca: "Honda",
    modelo: "CBR650R",
    hp: 94,
    pesoKg: 208,
    mantenimientoMensual: 480000
  },
  {
    marca: "Suzuki",
    modelo: "GSX-R750",
    hp: 148,
    pesoKg: 190,
    mantenimientoMensual: 700000
  },
  {
    marca: "KTM",
    modelo: "RC 390",
    hp: 43,
    pesoKg: 172,
    mantenimientoMensual: 280000
  }
];

// 2. Calcular relación peso-potencia
motos.forEach(moto => {
  moto.relacionPesoPotencia = moto.hp / moto.pesoKg;
});

// 3. Filtrar motos con mantenimiento menor a 500000
const motosEconomicas = motos.filter(
  moto => moto.mantenimientoMensual < 500000
);

// 4. Ordenar por mejor relación peso-potencia
const motosOrdenadas = [...motos].sort(
  (a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia
);

// 5. Obtener mejores opciones
const mejorPista = motosOrdenadas[0];

const mejorEconomica = motosEconomicas.sort(
  (a, b) => a.mantenimientoMensual - b.mantenimientoMensual
)[0];

// ==========================================
// Resultados
// ==========================================

console.log("=== Relación Peso-Potencia ===");
motosOrdenadas.forEach(moto => {
  console.log(
    `${moto.marca} ${moto.modelo} | Relación: ${moto.relacionPesoPotencia.toFixed(3)}`
  );
});

console.log("\n=== Motos con mantenimiento menor a $500.000 ===");
motosEconomicas.forEach(moto => {
  console.log(
    `${moto.marca} ${moto.modelo} - $${moto.mantenimientoMensual.toLocaleString()}`
  );
});

console.log("\n🏁 Mejor opción para pista:");
console.log(
  `${mejorPista.marca} ${mejorPista.modelo}
HP: ${mejorPista.hp}
Peso: ${mejorPista.pesoKg} kg
Relación: ${mejorPista.relacionPesoPotencia.toFixed(3)}`
);

console.log("\n💰 Mejor opción económica:");
console.log(
  `${mejorEconomica.marca} ${mejorEconomica.modelo}
Mantenimiento: $${mejorEconomica.mantenimientoMensual.toLocaleString()}`
);