const motos = [
    { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 199, mantenimientoMensual: 450000 },
    { marca: "Honda", modelo: "CBR600RR", hp: 121, pesoKg: 193, mantenimientoMensual: 380000 },
    { marca: "Kawasaki", modelo: "Ninja 400", hp: 45, pesoKg: 168, mantenimientoMensual: 180000 },
    { marca: "BMW", modelo: "S1000RR", hp: 207, pesoKg: 197, mantenimientoMensual: 650000 }
];

const motosConRelacion = motos.map(moto => ({
    ...moto,
    relacionPesoPotencia: moto.hp / moto.pesoKg
}));


const motosFiltradas = motosConRelacion.filter(moto => moto.mantenimientoMensual < 500000);


const motosOrdenadas = [...motosFiltradas].sort((a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia);


const mejorOpcionPista = motosOrdenadas[0];
const mejorOpcionEconomica = [...motosFiltradas].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual)[0];


console.log("--- MEJOR OPCIÓN PARA PISTA (Mayor Potencia/Peso) ---");
console.log(`${mejorOpcionPista.marca} ${mejorOpcionPista.modelo} - Relación: ${mejorOpcionPista.relacionPesoPotencia.toFixed(2)} hp/kg`);

console.log("\n--- MEJOR OPCIÓN ECONÓMICA (Menor Mantenimiento) ---");
console.log(`${mejorOpcionEconomica.marca} ${mejorOpcionEconomica.modelo} - Mantenimiento: $${mejorOpcionEconomica.mantenimientoMensual}`);