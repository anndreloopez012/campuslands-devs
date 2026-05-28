const escuadrasParticipantes = [
    { nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 },
    { nombre: 'Alpha Team', bajas: 12, posicion: 2, revividos: 4 },
    { nombre: 'Shadows', bajas: 3, posicion: 3, revividos: 1 },
    { nombre: 'Apex Hunters', bajas: 0, posicion: 15, revividos: 0 },
    { nombre: 'Ghost Squad', bajas: 5, posicion: 4, revividos: 3 }
];

function obtenerPuntosPorPosicion(posicion) {
    if (posicion === 1) return 20;
    if (posicion === 2) return 14;
    if (posicion === 3) return 10;
    return 4;
}

function generarRankingTorneo(listaEscuadras) {
    if (!listaEscuadras || listaEscuadras.length === 0) return [];

    const escuadrasConPuntaje = listaEscuadras.map(escuadra => {
        const puntosBajas = escuadra.bajas * 3;
        const puntosPosicion = obtenerPuntosPorPosicion(escuadra.posicion);
        const puntajeTotal = puntosBajas + puntosPosicion;

        return {
            nombre: escuadra.nombre,
            puntos: puntajeTotal
        };
    });

    escuadrasConPuntaje.sort((escuadraA, escuadraB) => escuadraB.puntos - escuadraA.puntos);

    return escuadrasConPuntaje;
}

function mostrarRanking(ranking) {
    if (ranking.length === 0) {
        console.log("No hay datos de escuadras para mostrar.");
        return;
    }

    console.log("=== RANKING FINAL DEL TORNEO BATTLE ROYALE ===");
    ranking.forEach((escuadra, indice) => {
        const lugarTabla = indice + 1;
        console.log(`${lugarTabla}. ${escuadra.nombre} - ${escuadra.puntos} pts.`);
    });
}

const rankingFinal = generarRankingTorneo(escuadrasParticipantes);
mostrarRanking(rankingFinal);