/**
 * Análisis de Desempeño: Equipo MOBA
 * Autor: Sergio Ajú
 * Propósito: Evaluación de métricas clave (KDA, Economía y Objetivos)
 */
const rosterJugadores = [
    { nombre: "Juan", rol: "Top", kills: 8, deaths: 2, assists: 10, oro: 13000, objetivos: 2 },
    { nombre: "Bryan", rol: "Jungla", kills: 7, deaths: 5, assists: 8, oro: 11000, objetivos: 10 },
    { nombre: "Pepe", rol: "Mid", kills: 9, deaths: 1, assists: 4, oro: 14000, objetivos: 3 }
];
const obtenerEstadisticas = (equipo) => {
    return equipo.map(jugador => ({
        ...jugador,
        indiceKDA: (jugador.kills + jugador.assists) / Math.max(jugador.deaths, 1)
    })).sort((a, b) => b.indiceKDA - a.indiceKDA);
};
const generarReporteDesempeno = (jugadoresProcesados) => {
    console.log("--- Reporte de Desempeño: Roster MOBA ---");
    jugadoresProcesados.forEach(j => {
        const estatusEconomico = j.oro > 12000 ? "Superavit" : "Deficit";
        console.log(`Jugador: ${j.nombre} | Rol: ${j.rol}`);
        console.log(` >> KDA: ${j.indiceKDA.toFixed(2)} | Balance Oro: ${estatusEconomico}`);
        if (j.objetivos < 5) {
            console.warn(` >> [ALERTA]: El rol ${j.rol} presenta baja participación en control de objetivos.`);
        }
        console.log("-----------------------------------------");
    });
};
const dataFinal = obtenerEstadisticas(rosterJugadores);
generarReporteDesempeno(dataFinal);