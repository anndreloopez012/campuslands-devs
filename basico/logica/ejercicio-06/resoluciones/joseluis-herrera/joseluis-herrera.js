const motos = [
    { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 200, mantenimientoMensual: 4500 },
    { marca: "Kawasaki", modelo: "Ninja", hp: 210, pesoKg: 190, mantenimientoMensual: 6000 },
    { marca: "Honda", modelo: "CBR", hp: 190, pesoKg: 205, mantenimientoMensual: 3000 }
];

motos.forEach(moto => moto.relacion = moto.hp / moto.pesoKg);

const filtradas = motos.filter(moto => moto.mantenimientoMensual < 5000);
const ordenadas = [...filtradas].sort((a, b) => b.relacion - a.relacion);

const mejoresPista = ordenadas[0];
const mejorEconomica = [...filtradas].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual) [0];

console.log("Mejor para pista", mejoresPista);
console.log("Mejor economica", mejorEconomica)