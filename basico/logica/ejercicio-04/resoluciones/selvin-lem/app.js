// app.js
const jugadores = require("./jugadores.json");

const ORO_MINIMO = 12000;
const OBJETIVOS_MINIMOS = 2;

function calcularKDA(jugador) {
  const divisorMuertes = Math.max(jugador.deaths, 1);
  return (jugador.kills + jugador.assists) / divisorMuertes;
}

function tieneOroSuficiente(jugador) {
  return jugador.oro > ORO_MINIMO;
}

function tienePocosObjetivos(jugador) {
  return jugador.objetivos < OBJETIVOS_MINIMOS;
}

function construirReporteJugador(jugador) {
  return {
    nombre: jugador.nombre,
    rol: jugador.rol,
    kda: Number(calcularKDA(jugador).toFixed(2)),
    oroSuficiente: tieneOroSuficiente(jugador),
    alertaObjetivos: tienePocosObjetivos(jugador)
  };
}

function ordenarPorKDA(reportes) {
  return [...reportes].sort((jugadorA, jugadorB) => jugadorB.kda - jugadorA.kda);
}

function generarAlertasObjetivos(reportes) {
  return reportes
    .filter((reporte) => reporte.alertaObjetivos)
    .map((reporte) => `${reporte.rol} (${reporte.nombre}) tiene pocos objetivos: revisar participación en mapa.`);
}

function analizarEquipo(listaJugadores) {
  const reportes = listaJugadores.map(construirReporteJugador);
  const reportesOrdenados = ordenarPorKDA(reportes);
  const alertas = generarAlertasObjetivos(reportesOrdenados);

  return {
    reportesOrdenados,
    alertas
  };
}

const resultado = analizarEquipo(jugadores);

console.log("Reporte ordenado por KDA:");
console.table(resultado.reportesOrdenados);

console.log("\nAlertas de objetivos:");
resultado.alertas.forEach((alerta) => console.log(alerta));