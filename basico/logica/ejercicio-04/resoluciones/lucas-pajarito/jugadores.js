// 1. Lista de jugadores
const jugadores = [
  {
    rol: "Top",
    kills: 8,
    deaths: 2,
    assists: 5,
    oro: 12500,
    objetivos: 3
  },
  {
    rol: "Jungla",
    kills: 5,
    deaths: 4,
    assists: 10,
    oro: 11800,
    objetivos: 1
  },
  {
    rol: "Mid",
    kills: 12,
    deaths: 3,
    assists: 7,
    oro: 14500,
    objetivos: 4
  },
  {
    rol: "ADC",
    kills: 10,
    deaths: 1,
    assists: 8,
    oro: 15000,
    objetivos: 2
  },
  {
    rol: "Support",
    kills: 1,
    deaths: 5,
    assists: 18,
    oro: 9800,
    objetivos: 1
  }
];

// 2. Calcular KDA
jugadores.forEach(jugador => {
  jugador.KDA =
    (jugador.kills + jugador.assists) /
    Math.max(jugador.deaths, 1);
});

// 3. Validar oro
function validarOro(jugadores) {
  jugadores.forEach(jugador => {
    if (jugador.oro > 12000) {
      console.log(`${jugador.rol}: MUY BUENA CANTIDAD DE ORO`);
    } else {
      console.log(`${jugador.rol}: Aún falta oro por conseguir`);
    }
  });
}

// 5. Mostrar alertas por pocos objetivos
function validarObjetivos(jugadores) {
  jugadores.forEach(jugador => {
    if (jugador.objetivos < 2) {
      console.log(`${jugador.rol}: Mejorar cantidad de objetivos.`);
    } else {
      console.log(`${jugador.rol}: Excelente participación en objetivos.`);
    }
  });
}

// 4. Ordenar por KDA (de mayor a menor)
jugadores.sort((a, b) => b.KDA - a.KDA);

// Mostrar resultados
console.log("Jugadores ordenados por KDA:");
console.table(jugadores);

console.log("Validación de oro:");
validarOro(jugadores);

console.log("Validación de objetivos:");
validarObjetivos(jugadores);
