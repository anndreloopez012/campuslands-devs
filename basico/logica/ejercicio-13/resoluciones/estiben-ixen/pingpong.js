const jugadores = [
    {
        nombre: "Carlos",
        partidos: 10,
        victorias: 8,
        puntosFavor: 220,
        puntosContra: 170
    },
    {
        nombre: "Andrea",
        partidos: 12,
        victorias: 9,
        puntosFavor: 250,
        puntosContra: 205
    },
    {
        nombre: "Luis",
        partidos: 8,
        victorias: 5,
        puntosFavor: 180,
        puntosContra: 175
    },
    {
        nombre: "María",
        partidos: 0,
        victorias: 0,
        puntosFavor: 0,
        puntosContra: 0
    }
];

const rankingJugadores = [];

for (const jugador of jugadores) {
    const porcentajeVictorias = jugador.partidos > 0
        ? (jugador.victorias / jugador.partidos) * 100
        : 0;

    const diferenciaPuntos = jugador.puntosFavor - jugador.puntosContra;

    const promedioPuntos = jugador.partidos > 0
        ? jugador.puntosFavor / jugador.partidos
        : 0;

    rankingJugadores.push({
        nombre: jugador.nombre,
        partidos: jugador.partidos,
        victorias: jugador.victorias,
        porcentajeVictorias: Number(porcentajeVictorias.toFixed(2)),
        promedioPuntos: Number(promedioPuntos.toFixed(2)),
        diferenciaPuntos
    });
}

rankingJugadores.sort((jugadorA, jugadorB) => {
    if (jugadorB.porcentajeVictorias !== jugadorA.porcentajeVictorias) {
        return jugadorB.porcentajeVictorias - jugadorA.porcentajeVictorias;
    }

    return jugadorB.diferenciaPuntos - jugadorA.diferenciaPuntos;
});

console.table(rankingJugadores);