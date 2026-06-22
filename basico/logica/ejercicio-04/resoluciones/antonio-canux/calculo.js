const jugadores = [
    {rol: "Top", nombre: "Depredador", kills: 6, deaths: 2, assists: 5, oro: 12500, objetivos: 2},
    {rol: "Jungla", nombre: "Tut", kills: 4, deaths: 1, assists: 10, oro: 14000, objetivos: 6},
    {rol: "Mid", nombre: "Armadilo", kills: 9, deaths: 3, assists: 7, oro: 15000, objetivos: 4},
    {rol: "ADC", nombre: "Oslomo", kills: 11, deaths: 2, assists: 4, oro: 16000, objetivos: 3},
    {rol: "Soporte", nombre: "Kingger", kills: 1, deaths: 4, assists: 15, oro: 9000, objetivos: 1}
]

jugadores.forEach(jugador => {
    jugador.kda = (jugador.kills + jugador.assists) / Math.max(jugador.deaths, 1);
});

jugadores.sort((a, b) => b.kda - a.kda)

console.log("=== Ranking por KDA ===")

jugadores.forEach(jugador => {
    console.log(
        `${jugador.rol} | KDA: ${jugador.kda.toFixed(2)}`
    )
    if (jugador.oro > 12000) {
        console.log("✓ Oro superior a 12000");
    } else {
        console.log("⚠ Oro inferior a 12000");
    }

    if (jugador.objetivos < 3) {
        console.log(
            `⚠ Alerta: ${jugador.rol} tiene pocos objetivos`
        )
    }

    console.log("-------------------");
})