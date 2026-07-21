function calcularRelacionPesoPotencia(moto) {
  if (moto.pesoKg === 0) return 0;
  return moto.hp / moto.pesoKg;
}

function compararMotos(motos, limiteMantenimiento = 500000) {
  const motosConMetrica = motos
    .map((moto) => ({
      ...moto,
      relacionPesoPotencia: calcularRelacionPesoPotencia(moto),
    }))
    .filter((moto) => moto.mantenimientoMensual < limiteMantenimiento);

  const ordenadasPorRendimiento = [...motosConMetrica].sort(
    (a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia
  );

  const mejorParaPista = ordenadasPorRendimiento[0] ?? null;
  const mejorEconomica = [...motosConMetrica].sort(
    (a, b) => a.mantenimientoMensual - b.mantenimientoMensual
  )[0] ?? null;

  return { ranking: ordenadasPorRendimiento, mejorParaPista, mejorEconomica };
}

// Caso normal
const motos = [
  { 
    marca: "Yamaha", 
    modelo: "R6", hp: 120, 
    pesoKg: 190, 
    mantenimientoMensual: 450000 
},
  { 
    marca: "Kawasaki", 
    modelo: "ZX-10R", 
    hp: 200, 
    pesoKg: 207, 
    mantenimientoMensual: 600000 
  },
  { 
    marca: "Honda", 
    modelo: "CBR600RR", 
    hp: 118, 
    pesoKg: 194, 
    mantenimientoMensual: 380000 
  },
  { 
    marca: "Ducati", 
    modelo: "Panigale V2", 
    hp: 155, 
    pesoKg: 200, 
    mantenimientoMensual: 700000 
  },
];

console.log(compararMotos(motos));

const motosLimite = [
  { marca: "Prototipo", modelo: "X1", hp: 100, pesoKg: 0, mantenimientoMensual: 100000 },
];

console.log(compararMotos(motosLimite));