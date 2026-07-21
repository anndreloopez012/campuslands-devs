const jugadores = [
    { nombre: "Jugador A", partidos: 10, victorias: 8, puntosFavor: 100, puntosContra: 50 },
    { nombre: "Jugador B", partidos: 10, victorias: 5, puntosFavor: 80, puntosContra: 80 },
    { nombre: "Jugador C", partidos: 0, victorias: 0, puntosFavor: 0, puntosContra: 0 }
];
function calcularEstadisticas(listaJugadores) {
    return listaJugadores.map(j => {
        const winrate = j.partidos > 0 ? (j.victorias / j.partidos) * 100 : 0;
        const difPuntos = j.puntosFavor - j.puntosContra;
        return {
            ...j,
            winrate: winrate.toFixed(2) + "%",
            difPuntos
        };
    }).sort((a, b) => {
        if (parseFloat(b.winrate) !== parseFloat(a.winrate)) {
            return parseFloat(b.winrate) - parseFloat(a.winrate);
        }
        return b.difPuntos - a.difPuntos;
    });
}
const ranking = calcularEstadisticas(jugadores);
console.log("Ranking del Torneo:", ranking);