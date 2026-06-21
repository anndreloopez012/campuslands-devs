const jugadores = [
    { rol: "Mid", kills: 8, deaths: 0, assists: 4, oro: 13000, objetivos: 2 },
    { rol: "Jungla", kills: 2, deaths: 5, assists: 10, oro: 9000, objetivos: 0 }
];

const analizarDesempeno = (jugadores) => {
    return jugadores.map(j => {
        const kda = (j.kills + j.assists) / Math.max(j.deaths, 1);
        return {
            ...j,
            kda: kda.toFixed(2),
            esRico: j.oro > 12000,
            alertaObjetivos: j.objetivos < 1 ? "¡Alerta: Priorizar objetivos!" : "OK"
        };
    }).sort((a, b) => b.kda - a.kda);
};

console.table(analizarDesempeno(jugadores));