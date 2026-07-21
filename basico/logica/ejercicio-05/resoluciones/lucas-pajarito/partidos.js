const equipos = [
  {
    nombre: "Los Tigres",
    victorias: 4,
    derrotas: 1,
    empates: 0,
    golesAFavor: 10,
    golesEnContra: 5
  },
  {
    nombre: "Águilas FC",
    victorias: 3,
    derrotas: 2,
    empates: 1,
    golesAFavor: 8,
    golesEnContra: 6
  },
  {
    nombre: "Leones Unidos",
    victorias: 5,
    derrotas: 0,
    empates: 1,
    golesAFavor: 15,
    golesEnContra: 4
  },
  {
    nombre: "Halcones FC",
    victorias: 2,
    derrotas: 3,
    empates: 1,
    golesAFavor: 7,
    golesEnContra: 9
  },
  {
    nombre: "Panteras FC",
    victorias: 1,
    derrotas: 4,
    empates: 2,
    golesAFavor: 6,
    golesEnContra: 12
  }
];

function calcularPuntos(equipo) {
  const puntosPorVictoria = 3;
  const puntosPorEmpate = 1;
  const puntosPorDerrota = 0;

  const puntos = (equipo.victorias * puntosPorVictoria + equipo.empates * puntosPorEmpate + equipo.derrotas * puntosPorDerrota)

  return puntos;
}   

function calcularDiferenciaDeGoles(equipo) {
  const diferenciaDeGoles = equipo.golesAFavor - equipo.golesEnContra;
  return diferenciaDeGoles;
}

function ordenarEquiposPorPuntosYDiferenciaDeGoles(equipos) {
  return equipos.sort((a, b) => {
    const puntosA = calcularPuntos(a);
    const puntosB = calcularPuntos(b);  

    if (puntosA !== puntosB) {
      return puntosB - puntosA; // Ordenar por puntos de mayor a menor
    }

    const diferenciaDeGolesA = calcularDiferenciaDeGoles(a);
    const diferenciaDeGolesB = calcularDiferenciaDeGoles(b)

    return diferenciaDeGolesB - diferenciaDeGolesA; // Ordenar por diferencia de goles de mayor a menor
    });
}

const equiposOrdenados = ordenarEquiposPorPuntosYDiferenciaDeGoles(equipos);

console.log("Tabla de posiciones:");
equiposOrdenados.forEach((equipo, index) => {
  const puntos = calcularPuntos(equipo);    
    const diferenciaDeGoles = calcularDiferenciaDeGoles(equipo);

    console.log(`${index + 1}. ${equipo.nombre} - Puntos: ${puntos}, Diferencia de Goles: ${diferenciaDeGoles}`);
}); 
