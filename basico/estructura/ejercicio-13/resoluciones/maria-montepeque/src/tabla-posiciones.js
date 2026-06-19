// tabla-posiciones.js — calcula la tabla de posiciones a partir de partidos finalizados

function calcularTabla(partidos) {
  if (!partidos || partidos.length === 0) {
    return [];
  }

  const posiciones = {};

  for (const partido of partidos) {
    if (partido.estado !== "finalizado") {
      continue;
    }

    const equipoLocal = partido.local;
    const equipoVisitante = partido.visitante;
    const golesLocal = partido.goles_local ?? 0;
    const golesVisitante = partido.goles_visitante ?? 0;

    if (!posiciones[equipoLocal]) {
      posiciones[equipoLocal] = crearRegistroEquipo(equipoLocal);
    }
    if (!posiciones[equipoVisitante]) {
      posiciones[equipoVisitante] = crearRegistroEquipo(equipoVisitante);
    }

    posiciones[equipoLocal].partidos_jugados += 1;
    posiciones[equipoVisitante].partidos_jugados += 1;
    posiciones[equipoLocal].goles_favor += golesLocal;
    posiciones[equipoLocal].goles_contra += golesVisitante;
    posiciones[equipoVisitante].goles_favor += golesVisitante;
    posiciones[equipoVisitante].goles_contra += golesLocal;

    if (golesLocal > golesVisitante) {
      posiciones[equipoLocal].victorias += 1;
      posiciones[equipoLocal].puntos += 3;
      posiciones[equipoVisitante].derrotas += 1;
    } else if (golesLocal < golesVisitante) {
      posiciones[equipoVisitante].victorias += 1;
      posiciones[equipoVisitante].puntos += 3;
      posiciones[equipoLocal].derrotas += 1;
    } else {
      posiciones[equipoLocal].empates += 1;
      posiciones[equipoLocal].puntos += 1;
      posiciones[equipoVisitante].empates += 1;
      posiciones[equipoVisitante].puntos += 1;
    }
  }

  const tabla = Object.values(posiciones);
  tabla.sort((a, b) => b.puntos - a.puntos || b.diferencia_goles - a.diferencia_goles);

  return tabla.map((equipo, indice) => ({
    posicion: indice + 1,
    ...equipo,
    diferencia_goles: equipo.goles_favor - equipo.goles_contra
  }));
}

function crearRegistroEquipo(idEquipo) {
  return {
    equipo: idEquipo,
    partidos_jugados: 0,
    victorias: 0,
    empates: 0,
    derrotas: 0,
    goles_favor: 0,
    goles_contra: 0,
    diferencia_goles: 0,
    puntos: 0
  };
}

module.exports = { calcularTabla };
