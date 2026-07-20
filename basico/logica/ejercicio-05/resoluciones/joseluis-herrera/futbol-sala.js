const equipos = [
  {
    nombre: "Barcelona",
    victorias: 3,
    empates: 1,
    derrotas: 0,
    golesFavor: 15,
    golesContra: 5
  },
  {
    nombre: "Madrid",
    victorias: 2,
    empates: 1,
    derrotas: 1,
    golesFavor: 10,
    golesContra: 8
  },
  {
    nombre: "Sevilla",
    victorias: 1,
    empates: 2,
    derrotas: 1,
    golesFavor: 7,
    golesContra: 9
  }
];

equipos.forEach((equipo) => {

  equipo.puntos = (equipo.victorias * 3) + equipo.empates;

  equipo.diferencia = equipo.golesFavor - equipo.golesContra;

});

equipos.sort((a, b) => {

  if (b.puntos !== a.puntos) {
    return b.puntos - a.puntos;
  }

  return b.diferencia - a.diferencia;

});

equipos.forEach((equipo, posicion) => {

  console.log(
    `${posicion + 1}. ${equipo.nombre} | Puntos: ${equipo.puntos} | DG: ${equipo.diferencia}`
  );

});