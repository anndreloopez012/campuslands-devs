// Datos: marca, modelo, hp, pesoKg, mantenimientoMensual
const motos = [
  { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 201, mantenimientoMensual: 450000 },
  { marca: "Honda", modelo: "CBR1000RR", hp: 190, pesoKg: 195, mantenimientoMensual: 480000 },
  { marca: "Kawasaki", modelo: "Ninja ZX-10R", hp: 210, pesoKg: 207, mantenimientoMensual: 520000 },
  { marca: "Suzuki", modelo: "GSX-R1000", hp: 195, pesoKg: 200, mantenimientoMensual: 460000 }
];

// Calcular relación peso-potencia y filtrar mantenimiento < 500000
const analisis = motos
  .filter(m => m.mantenimientoMensual < 500000)
  .map(m => ({
    ...m,
    relacion: m.hp / m.pesoKg // Mayor es mejor
  }))
  .sort((a, b) => b.relacion - a.relacion);

// Mejor para pista (mayor relación) y económico (menor mantenimiento)
const mejorPista = analisis[0];
const mejorEconomico = analisis.reduce((a, b) => 
  a.mantenimientoMensual < b.mantenimientoMensual ? a : b
);

console.log("Mejor para pista:", `${mejorPista.marca} ${mejorPista.modelo} (Relación: ${mejorPista.relacion.toFixed(3)})`);
console.log("Mejor económico:", `${mejorEconomico.marca} ${mejorEconomico.modelo} (Mant: $${mejorEconomico.mantenimientoMensual})`);