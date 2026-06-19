// validar.js — Ejercicio 04: Control de líneas MOBA

const jugadores = [
  { rol: "top",     nombre: "Garen",   kills: 8,  deaths: 2, assists: 3,  oro: 13500, objetivos: 2 },
  { rol: "jungla",  nombre: "Hecarim", kills: 5,  deaths: 0, assists: 10, oro: 11800, objetivos: 5 },
  { rol: "mid",     nombre: "Orianna", kills: 12, deaths: 4, assists: 7,  oro: 15200, objetivos: 1 },
  { rol: "adc",     nombre: "Jinx",    kills: 3,  deaths: 3, assists: 2,  oro: 9800,  objetivos: 0 },
  { rol: "soporte", nombre: "Thresh",  kills: 1,  deaths: 1, assists: 14, oro: 7200,  objetivos: 3 },
];

// Caso límite: deaths = 0 → se divide entre 1
const casoLimite = { rol: "mid", nombre: "Faker", kills: 10, deaths: 0, assists: 5, oro: 16000, objetivos: 0 };

// Caso vacío / null
const casoVacio = null;

function calcularKDA(kills, deaths, assists) {
  const denominador = Math.max(deaths, 1);
  return (kills + assists) / denominador;
}

function validarOro(oro) {
  return oro > 12000;
}

function evaluarJugador(jugador) {
  if (!jugador) {
    return { error: "Jugador nulo o indefinido — no se puede evaluar." };
  }

  const kda = calcularKDA(jugador.kills, jugador.deaths, jugador.assists);
  const oroBueno = validarOro(jugador.oro);
  const alertaObjetivos = jugador.objetivos < 2
    ? `⚠️  ALERTA: ${jugador.rol} (${jugador.nombre}) tiene pocos objetivos (${jugador.objetivos})`
    : null;

  return {
    nombre: jugador.nombre,
    rol: jugador.rol,
    kda: parseFloat(kda.toFixed(2)),
    oroBueno,
    alertaObjetivos,
  };
}

function ordenarPorKDA(lista) {
  return [...lista].sort((a, b) => b.kda - a.kda);
}

// ─── Evaluación principal ───────────────────────────────────────────────────

console.log("=== CASO NORMAL: equipo completo ===\n");

const resultados = jugadores.map(evaluarJugador);
const ordenados = ordenarPorKDA(resultados);

ordenados.forEach((j, i) => {
  console.log(`#${i + 1} ${j.nombre} [${j.rol}] — KDA: ${j.kda} | Oro >12k: ${j.oroBueno}`);
  if (j.alertaObjetivos) console.log(`   ${j.alertaObjetivos}`);
});

// ─── Caso límite: deaths = 0 ─────────────────────────────────────────────────

console.log("\n=== CASO LÍMITE: deaths = 0 ===\n");
const resLimite = evaluarJugador(casoLimite);
console.log(`${resLimite.nombre} [${resLimite.rol}] — KDA: ${resLimite.kda} | Oro >12k: ${resLimite.oroBueno}`);
if (resLimite.alertaObjetivos) console.log(`   ${resLimite.alertaObjetivos}`);

// ─── Caso vacío / null ────────────────────────────────────────────────────────

console.log("\n=== CASO VACÍO: jugador null ===\n");
const resVacio = evaluarJugador(casoVacio);
console.log(resVacio.error);
