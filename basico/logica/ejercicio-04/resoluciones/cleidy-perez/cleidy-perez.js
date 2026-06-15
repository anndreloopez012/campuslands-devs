const jugadores = [
    {
        nombre: "Nova",
        rol: "Tirador",
        kills: 12,
        deaths: 3,
        assists: 8,
        oro: 13500,
        objetivos: 5
    },
    {
        nombre: "Blaze",
        rol: "Soporte",
        kills: 2,
        deaths: 4,
        assists: 15,
        oro: 9800,
        objetivos: 1
    },
    {
        nombre: "Shadow",
        rol: "Asesino",
        kills: 9,
        deaths: 6,
        assists: 4,
        oro: 12100,
        objetivos: 2
    },
    {
        nombre: "Titan",
        rol: "Tanque",
        kills: 3,
        deaths: 2,
        assists: 12,
        oro: 11000,
        objetivos: 0
    },
    {
        nombre: "Spark",
        rol: "Mago",
        kills: 10,
        deaths: 1,
        assists: 7,
        oro: 14500,
        objetivos: 4
    }
];

// Calcular KDA y validar oro
const estadisticas = jugadores.map(jugador => ({
    ...jugador,
    kda: ((jugador.kills + jugador.assists) / Math.max(jugador.deaths, 1)).toFixed(2),
    oroAlto: jugador.oro > 12000
}));

// Ordenar por KDA de mayor a menor
estadisticas.sort((a, b) => b.kda - a.kda);

// Mostrar reporte
console.log("=== REPORTE DE JUGADORES ===");

estadisticas.forEach(jugador => {
    console.log(`
Jugador: ${jugador.nombre}
Rol: ${jugador.rol}
Kills: ${jugador.kills}
Deaths: ${jugador.deaths}
Assists: ${jugador.assists}
KDA: ${jugador.kda}
Oro: ${jugador.oro} ${jugador.oroAlto ? "(Supera 12000)" : ""}
Objetivos: ${jugador.objetivos}
`);
});

// Alertas para pocos objetivos
console.log("=== ALERTAS DE OBJETIVOS ===");

estadisticas.forEach(jugador => {
    if (jugador.objetivos < 2) {
        console.log(
            `${jugador.nombre} (${jugador.rol}) participó en pocos objetivos (${jugador.objetivos}).`
        );
    }
});