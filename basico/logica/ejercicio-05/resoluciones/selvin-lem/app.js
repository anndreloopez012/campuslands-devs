function calcularTabla(equipos) {
  return equipos
    .map((equipo) => {
      const puntos = equipo.victorias * 3 + equipo.empates;
      const diferenciaGoles = equipo.golesFavor - equipo.golesContra;
      return { ...equipo, puntos, diferenciaGoles };
    })
    .sort((a, b) => {
      if (b.puntos !== a.puntos) return b.puntos - a.puntos;
      if (b.diferenciaGoles !== a.diferenciaGoles) return b.diferenciaGoles - a.diferenciaGoles;
      return b.golesFavor - a.golesFavor;
    })
    .map((equipo, indice) => ({ posicion: indice + 1, ...equipo }));
}

const equipos = [
  { 
    nombre: "Halcones FS", 
    victorias: 4, 
    empates: 1, 
    derrotas: 0, 
    golesFavor: 20, 
    golesContra: 8 
},
  { 
    nombre: "Tigres FS", 
    victorias: 4, 
    empates: 0, 
    derrotas: 1, 
    golesFavor: 18, 
    golesContra: 10 
 },
  { 
    nombre: "Panteras FS", 
    victorias: 2, 
    empates: 2, 
    derrotas: 1, 
    golesFavor: 12, 
    golesContra: 12 
 },
  { 
    nombre: "Lobos FS", 
    victorias: 0, 
    empates: 1, 
    derrotas: 4, 
    golesFavor: 5, 
    golesContra: 22 
 },
];

console.table(calcularTabla(equipos));

// Caso límite: equipo sin partidos jugados
const equiposLimite = [
  { nombre: "Nuevo FS", 
    victorias: 0, 
    empates: 0, 
    derrotas: 0, 
    golesFavor: 0, 
    golesContra: 0 
},
];

console.table(calcularTabla(equiposLimite));
