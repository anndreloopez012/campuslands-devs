function calcularKDA(jugador) {
  const { kills, deaths, assists } = jugador;
  const kda = (kills + assists) / Math.max(deaths, 1);
  return Math.round(kda * 100) / 100;
}

function tieneOroSuficiente(jugador) {
  return jugador.oro > 12000;
}

function ordenarPorKDA(jugadores) {
  return [...jugadores].sort((a, b) => calcularKDA(b) - calcularKDA(a));
}

function generarAlertas(jugadores, minimoObjetivos = 3) {
  return jugadores
    .filter((j) => j.objetivos < minimoObjetivos)
    .map(
      (j) =>
        `Alerta: ${j.rol} (${j.nombre}) solo controlo ${j.objetivos} objetivo(s).`,
    );
}

function formatearJugador(jugador, posicion) {
  const kda = calcularKDA(jugador);
  const oroTexto = tieneOroSuficiente(jugador)
    ? "oro suficiente"
    : "oro insuficiente";
  return `${posicion}. [${jugador.rol}] ${jugador.nombre} - KDA: ${kda} - Oro: ${jugador.oro} (${oroTexto}) - Objetivos: ${jugador.objetivos}`;
}

function analizarEquipo(jugadores) {
  if (!jugadores || jugadores.length === 0) {
    console.log("No hay jugadores para analizar.");
    return;
  }

  const ordenados = ordenarPorKDA(jugadores);

  console.log("=== Ranking por KDA ===");
  ordenados.forEach((jugador, index) => {
    console.log(formatearJugador(jugador, index + 1));
  });

  const alertas = generarAlertas(jugadores);
  console.log("");
  console.log("=== Alertas de objetivos ===");
  if (alertas.length === 0) {
    console.log("Todos los roles controlaron suficientes objetivos.");
  } else {
    alertas.forEach((alerta) => console.log(alerta));
  }
}

const jugadores = [
  {
    rol: "Top",
    nombre: "IronWall",
    kills: 5,
    deaths: 3,
    assists: 4,
    oro: 13500,
    objetivos: 3,
  },
  {
    rol: "Jungla",
    nombre: "ShadowFang",
    kills: 8,
    deaths: 2,
    assists: 10,
    oro: 12800,
    objetivos: 5,
  },
  {
    rol: "Mid",
    nombre: "ArcaneBolt",
    kills: 10,
    deaths: 4,
    assists: 6,
    oro: 14200,
    objetivos: 2,
  },
  {
    rol: "ADC",
    nombre: "NightArrow",
    kills: 12,
    deaths: 5,
    assists: 3,
    oro: 15100,
    objetivos: 1,
  },
  {
    rol: "Soporte",
    nombre: "RootWarden",
    kills: 1,
    deaths: 6,
    assists: 15,
    oro: 8300,
    objetivos: 4,
  },
];

analizarEquipo(jugadores);
