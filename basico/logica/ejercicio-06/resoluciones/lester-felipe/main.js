const inventarioMotos = [
    { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 199, mantenimientoMensual: 450000 },
    { marca: "Honda", modelo: "CBR600RR", hp: 121, pesoKg: 193, mantenimientoMensual: 380000 },
    { marca: "Kawasaki", modelo: "Ninja 400", hp: 45, pesoKg: 168, mantenimientoMensual: 220000 },
    { marca: "Ducati", modelo: "Panigale V2", hp: 155, pesoKg: 200, mantenimientoMensual: 650000 },
    { marca: "Suzuki", modelo: "GSX-R1000", hp: 202, pesoKg: 202, mantenimientoMensual: 480000 }
];

const motosConRendimiento = inventarioMotos.map(moto => ({
    ...moto,
    relacionPesoPotencia: moto.hp / moto.pesoKg
}));

const motosFiltradas = motosConRendimiento.filter(moto => moto.mantenimientoMensual < 500000);

const motosOrdenadas = [...motosFiltradas].sort((a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia);

const mejorPista = motosOrdenadas[0];

const mejorEconomica = motosFiltradas.reduce((min, moto) => 
    moto.mantenimientoMensual < min.mantenimientoMensual ? moto : min
, motosFiltradas[0]);

console.log("--- MOTOS FILTRADAS Y ORDENADAS POR RELACION PESO-POTENCIA ---");
console.table(motosOrdenadas);

console.log("--- MEJOR OPCION PARA PISTA (MAYOR RELACION HP/KG) ---");
console.log(`${mejorPista.marca} ${mejorPista.modelo} - Relación: ${mejorPista.relacionPesoPotencia.toFixed(2)} hp/kg`);

console.log("--- MEJOR OPCION ECONOMICA (MENOR COSTO MANTENIMIENTO) ---");
console.log(`${mejorEconomica.marca} ${mejorEconomica.modelo} - Costo: ${mejorEconomica.mantenimientoMensual}`);