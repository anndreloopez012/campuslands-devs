// Ejercicio 06 - Comparador de motos deportivas
// Autor: Juan Lema

const motos = [
  { marca: 'Yamaha', modelo: 'R1', hp: 200, pesoKg: 201, mantenimientoMensual: 450000 },
  { marca: 'Kawasaki', modelo: 'ZX-10R', hp: 203, pesoKg: 207, mantenimientoMensual: 600000 },
  { marca: 'Honda', modelo: 'CBR600RR', hp: 118, pesoKg: 194, mantenimientoMensual: 300000 },
  { marca: 'Suzuki', modelo: 'GSX-R750', hp: 148, pesoKg: 190, mantenimientoMensual: 420000 },
  { marca: 'Ducati', modelo: 'Panigale V4', hp: 214, pesoKg: 198, mantenimientoMensual: 800000 },
];

// Calcula la relacion peso-potencia (hp / pesoKg). Mayor valor = mejor rendimiento.
function calcularRelacion(moto) {
  if (moto.pesoKg === 0) return 0; // evita division entre cero
  return moto.hp / moto.pesoKg;
}

// Agrega la relacion calculada a cada moto sin mutar el arreglo original
function agregarRelacion(listaMotos) {
  return listaMotos.map((moto) => ({
    ...moto,
    relacion: Number(calcularRelacion(moto).toFixed(3)),
  }));
}

// Filtra motos con mantenimiento mensual por debajo del limite
function filtrarPorMantenimiento(listaMotos, limite = 500000) {
  return listaMotos.filter((moto) => moto.mantenimientoMensual < limite);
}

// Ordena de mejor a peor relacion peso-potencia
function ordenarPorRelacion(listaMotos) {
  return [...listaMotos].sort((a, b) => b.relacion - a.relacion);
}

// Mejor moto para pista: mayor relacion, sin filtrar por costo
function mejorParaPista(listaMotos) {
  const ordenadas = ordenarPorRelacion(agregarRelacion(listaMotos));
  return ordenadas[0] ?? null;
}

// Mejor moto economica: mayor relacion entre las que cumplen el limite de mantenimiento
function mejorEconomica(listaMotos, limite = 500000) {
  const conRelacion = agregarRelacion(listaMotos);
  const economicas = filtrarPorMantenimiento(conRelacion, limite);
  const ordenadas = ordenarPorRelacion(economicas);
  return ordenadas[0] ?? null;
}

function mostrarResultado(moto, etiqueta) {
  if (!moto) {
    console.log(`${etiqueta}: no hay motos que cumplan la condicion.`);
    return;
  }
  console.log(
    `${etiqueta}: ${moto.marca} ${moto.modelo} - relacion ${moto.relacion} hp/kg - mantenimiento Q${moto.mantenimientoMensual}`
  );
}

// Ejecucion principal
mostrarResultado(mejorParaPista(motos), 'Mejor para pista');
mostrarResultado(mejorEconomica(motos), 'Mejor economica');

module.exports = {
  calcularRelacion,
  agregarRelacion,
  filtrarPorMantenimiento,
  ordenarPorRelacion,
  mejorParaPista,
  mejorEconomica,
};