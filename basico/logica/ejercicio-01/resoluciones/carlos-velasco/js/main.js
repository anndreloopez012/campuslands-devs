const jugadores = [
  { nombre: 'Madada', bajas: 8, posicion: 1, revividos: 2 },
  { nombre: 'Zero', bajas: 2, posicion: 3, revividos: 0 },
  { nombre: 'Kira', bajas: 5, posicion: 2, revividos: 1 },
  { nombre: 'Leo', bajas: 10, posicion: 10, revividos: 0 }
];

const calcularRanking = (arr) => {
  return arr
    .map(p => {
      let puntosPosicion = 0;
      if (p.posicion === 1) puntosPosicion = 20;
      else if (p.posicion === 2) puntosPosicion = 14;
      else if (p.posicion === 3) puntosPosicion = 10;
      else puntosPosicion = 4;

      const puntosTotales = (p.bajas * 3) + puntosPosicion;

      return { ...p, puntos: puntosTotales };
    })
    .sort((a, b) => b.puntos - a.puntos)
    .forEach((p, index) => {
      console.log(`${index + 1}. ${p.nombre} - ${p.puntos} pts.`);
    });
};

calcularRanking(jugadores);