const fs = require("fs");
const path = require("path");

// --- Rutas de datos ---
const rutaEquipos = path.join(__dirname, "..", "data", "equipos", "liga-nacional.json");
const rutaPartidos = [
  path.join(__dirname, "..", "data", "partidos", "jornada-1.json"),
  path.join(__dirname, "..", "data", "partidos", "jornada-2.json"),
];

// --- Entrada ---
function cargarEquipos(ruta) {
  const contenido = fs.readFileSync(ruta, "utf-8");
  return JSON.parse(contenido);
}

function cargarPartidos(rutas) {
  return rutas
    .map((ruta) => JSON.parse(fs.readFileSync(ruta, "utf-8")))
    .flatMap((jornada) => jornada.partidos);
}

// --- Proceso ---
function inicializarTabla(equipos) {
  const tabla = {};
  for (const equipo of equipos) {
    tabla[equipo.id] = {
      id: equipo.id,
      nombre: equipo.nombre,
      jugados: 0,
      ganados: 0,
      empatados: 0,
      perdidos: 0,
      golesFavor: 0,
      golesContra: 0,
      puntos: 0,
    };
  }
  return tabla;
}

function aplicarPartido(tabla, partido) {
  const local = tabla[partido.local];
  const visitante = tabla[partido.visitante];
  if (!local || !visitante) return;

  local.jugados += 1;
  visitante.jugados += 1;
  local.golesFavor += partido.golesLocal;
  local.golesContra += partido.golesVisitante;
  visitante.golesFavor += partido.golesVisitante;
  visitante.golesContra += partido.golesLocal;

  if (partido.golesLocal > partido.golesVisitante) {
    local.ganados += 1;
    local.puntos += 3;
    visitante.perdidos += 1;
  } else if (partido.golesLocal < partido.golesVisitante) {
    visitante.ganados += 1;
    visitante.puntos += 3;
    local.perdidos += 1;
  } else {
    local.empatados += 1;
    visitante.empatados += 1;
    local.puntos += 1;
    visitante.puntos += 1;
  }
}

function construirTabla(equipos, partidos) {
  const tabla = inicializarTabla(equipos);
  for (const partido of partidos) {
    aplicarPartido(tabla, partido);
  }
  return Object.values(tabla);
}

function ordenarTabla(tabla) {
  return [...tabla].sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    const diferenciaA = a.golesFavor - a.golesContra;
    const diferenciaB = b.golesFavor - b.golesContra;
    return diferenciaB - diferenciaA;
  });
}

// --- Salida ---
function imprimirTabla(tabla) {
  if (tabla.length === 0) {
    console.log("No hay equipos para mostrar.");
    return;
  }
  console.log("Pos | Equipo            | PJ | PG | PE | PP | GF | GC | Pts");
  tabla.forEach((equipo, indice) => {
    const pos = String(indice + 1).padEnd(3);
    const nombre = equipo.nombre.padEnd(17);
    console.log(
      `${pos} | ${nombre} | ${equipo.jugados}  | ${equipo.ganados}  | ${equipo.empatados}  | ${equipo.perdidos}  | ${equipo.golesFavor}  | ${equipo.golesContra}  | ${equipo.puntos}`
    );
  });
}

function main() {
  const equipos = cargarEquipos(rutaEquipos);
  const partidos = cargarPartidos(rutaPartidos);
  const tabla = construirTabla(equipos, partidos);
  const tablaOrdenada = ordenarTabla(tabla);
  imprimirTabla(tablaOrdenada);
}

main();

module.exports = { construirTabla, ordenarTabla, inicializarTabla, aplicarPartido };
