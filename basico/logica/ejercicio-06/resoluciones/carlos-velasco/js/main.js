const motos = [
  { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 200, mantenimientoMensual: 450000 },
  { marca: "Kawasaki", modelo: "Ninja", hp: 210, pesoKg: 190, mantenimientoMensual: 600000 },
  { marca: "Honda", modelo: "CBR", hp: 190, pesoKg: 205, mantenimientoMensual: 300000 }
];

motos.forEach(m => m.relacion = m.hp / m.pesoKg);

const filtradas = motos.filter(m => m.mantenimientoMensual < 500000);
const ordenadas = [...filtradas].sort((a, b) => b.relacion - a.relacion);

const mejorPista = ordenadas[0];
const mejorEconomica = [...filtradas].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual)[0];

console.log("Mejor para pista:", mejorPista);
console.log("Mejor económica:", mejorEconomica);