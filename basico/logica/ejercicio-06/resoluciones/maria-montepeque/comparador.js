// Comparador de motos deportivas

const motos = [
  { marca: "Ducati",    modelo: "Panigale V4",  hp: 214, pesoKg: 175, mantenimientoMensual: 620000 },
  { marca: "Kawasaki",  modelo: "Ninja ZX-10R", hp: 203, pesoKg: 207, mantenimientoMensual: 420000 },
  { marca: "Yamaha",    modelo: "YZF-R1",       hp: 200, pesoKg: 201, mantenimientoMensual: 390000 },
  { marca: "Honda",     modelo: "CBR1000RR-R",  hp: 217, pesoKg: 201, mantenimientoMensual: 480000 },
  { marca: "Suzuki",    modelo: "GSX-R1000",    hp: 199, pesoKg: 203, mantenimientoMensual: 310000 },
];

function calcularRelacionPotenciaPeso(moto) {
  return moto.hp / moto.pesoKg;
}

function filtrarPorMantenimiento(listado, limiteMantenimiento) {
  return listado.filter(moto => moto.mantenimientoMensual < limiteMantenimiento);
}

function ordenarPorRelacion(listado) {
  return [...listado].sort((a, b) => {
    const relacionA = calcularRelacionPotenciaPeso(a);
    const relacionB = calcularRelacionPotenciaPeso(b);
    return relacionB - relacionA;
  });
}

function encontrarMejorDePista(listado) {
  if (listado.length === 0) return null;
  const ordenadas = ordenarPorRelacion(listado);
  return ordenadas[0];
}

function encontrarMejorEconomica(listado) {
  if (listado.length === 0) return null;
  return listado.reduce((menor, moto) =>
    moto.mantenimientoMensual < menor.mantenimientoMensual ? moto : menor
  );
}

function mostrarMoto(moto) {
  const relacion = calcularRelacionPotenciaPeso(moto).toFixed(3);
  console.log(`  ${moto.marca} ${moto.modelo}`);
  console.log(`    HP: ${moto.hp} | Peso: ${moto.pesoKg} kg | Relación: ${relacion}`);
  console.log(`    Mantenimiento: Q${moto.mantenimientoMensual.toLocaleString()}/mes`);
}

function comparar(listado) {
  console.log(`\nTotal de motos en catálogo: ${listado.length}`);

  const aptas = filtrarPorMantenimiento(listado, 500000);
  console.log(`Motos con mantenimiento menor a Q500,000: ${aptas.length}`);

  const mejorPista = encontrarMejorDePista(aptas);
  const mejorEconomica = encontrarMejorEconomica(aptas);

  if (mejorPista) {
    console.log("\nMejor opción para pista (mayor relación hp/kg):");
    mostrarMoto(mejorPista);
  } else {
    console.log("\nNo hay motos aptas para pista con ese límite de mantenimiento.");
  }

  if (mejorEconomica) {
    console.log("\nMejor opción económica (menor mantenimiento entre las aptas):");
    mostrarMoto(mejorEconomica);
  } else {
    console.log("\nNo hay motos económicas disponibles.");
  }
}

// --- Caso normal ---
console.log("=== CASO NORMAL ===");
comparar(motos);

// --- Caso límite: solo motos con mantenimiento exactamente en el borde ---
console.log("\n=== CASO LÍMITE: umbral muy bajo (solo motos < Q350,000) ===");
const motosRestringidas = filtrarPorMantenimiento(motos, 350000);
const mejorPistaRestringida = encontrarMejorDePista(motosRestringidas);
const mejorEconomicaRestringida = encontrarMejorEconomica(motosRestringidas);

console.log(`Motos aptas: ${motosRestringidas.length}`);
if (mejorPistaRestringida) {
  console.log("Mejor para pista:");
  mostrarMoto(mejorPistaRestringida);
}
if (mejorEconomicaRestringida) {
  console.log("Mejor económica:");
  mostrarMoto(mejorEconomicaRestringida);
}

// --- Caso vacío ---
console.log("\n=== CASO VACÍO: catálogo sin motos ===");
comparar([]);
