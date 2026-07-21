const jugadores = [
    {
        nombre: "Carlos",
        partidos: 10,
        victorias: 8,
        puntosFavor: 220,
        puntosContra: 180
    },
    {
        nombre: "Andrea",
        partidos: 12,
        victorias: 9,
        puntosFavor: 245,
        puntosContra: 190
    },
    {
        nombre: "Luis",
        partidos: 8,
        victorias: 5,
        puntosFavor: 170,
        puntosContra: 165
    },
    {
        nombre: "María",
        partidos: 0,
        victorias: 0,
        puntosFavor: 0,
        puntosContra: 0
    }
];

const ranking = jugadores.map(jugador => {

    const tienePartidos = jugador.partidos > 0;

    const winRate = tienePartidos
        ? (jugador.victorias / jugador.partidos) * 100
        : 0;

    const promedioPuntos = tienePartidos
        ? jugador.puntosFavor / jugador.partidos
        : 0;

    const diferenciaPuntos =
        jugador.puntosFavor - jugador.puntosContra;

    return {
        nombre: jugador.nombre,
        partidos: jugador.partidos,
        victorias: jugador.victorias,
        winRate: Number(winRate.toFixed(2)),
        promedioPuntos: Number(promedioPuntos.toFixed(2)),
        diferenciaPuntos
    };

});

ranking.sort((a, b) => {

    if (b.winRate !== a.winRate) {
        return b.winRate - a.winRate;
    }

    return b.diferenciaPuntos - a.diferenciaPuntos;

});

console.log("\n========== RANKING DEL TORNEO ==========\n");

console.table(ranking);