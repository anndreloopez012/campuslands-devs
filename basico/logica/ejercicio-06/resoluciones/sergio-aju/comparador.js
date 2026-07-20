const motos = [
    { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 199, mantenimientoMensual: 450000 },
    { marca: "Kawasaki", modelo: "Ninja H2", hp: 310, pesoKg: 238, mantenimientoMensual: 600000 },
    { marca: "Ducati", modelo: "Panigale V4", hp: 214, pesoKg: 198, mantenimientoMensual: 480000 },
    { marca: "Honda", modelo: "CBR1000RR", hp: 189, pesoKg: 195, mantenimientoMensual: 420000 }
];

motos.forEach(moto => {
    moto.relacionPesoPotencia = moto.hp / moto.pesoKg;
});

const motosAccesibles = motos.filter(moto => moto.mantenimientoMensual < 500000);

const ordenadasPorPista = [...motosAccesibles].sort((a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia);

const mejorParaPista = ordenadasPorPista[0];
const mejorEconomica = [...motosAccesibles].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual)[0];

console.log("Mejor opción para pista:", mejorParaPista.modelo);
console.log("Mejor opción económica:", mejorEconomica.modelo);