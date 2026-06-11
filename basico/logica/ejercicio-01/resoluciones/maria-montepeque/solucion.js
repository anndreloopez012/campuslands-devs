function generarRanking(escuadras) {
    if (!escuadras || escuadras.length === 0) {
        console.log("No hay escuadras registradas.");
        return [];
    }

    const escuadrasProcesadas = escuadras.map(escuadra => {
        let puntosSupervivenia = 0;

        if (escuadra.posicion === 1) {
            puntosSupervivenia = 20;
        } else if (escuadra.posicion === 2) {
            puntosSupervivenia = 14;
        } else if (escuadra.posicion === 3) {
            puntosSupervivenia = 10;
        } else {
            puntosSupervivenia = 4;
        }

        const puntajeTotal = (escuadra.bajas * 3) + puntosSupervivenia;

        return {
            nombre: escuadra.nombre,
            puntos: puntajeTotal
        };
    });

    escuadrasProcesadas.sort((a, b) => b.puntos - a.puntos);

    console.log("=== RANKING FINAL ===");
    escuadrasProcesadas.forEach((escuadra, indice) => {
        const puestoRanking = indice + 1;
        console.log(`${puestoRanking}. ${escuadra.nombre} - ${escuadra.puntos} pts.`);
    });

    return escuadrasProcesadas;
}

const datosTorneo = [{ nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 }];
console.log("--- Validación Caso Normal ---");
generarRanking(datosTorneo);

const datosLimite = [
    { nombre: 'Alpha', bajas: 0, posicion: 4, revividos: 0 },
    { nombre: 'Omega', bajas: 0, posicion: 2, revividos: 1 }
];
console.log("\n--- Validación Caso Límite ---");
generarRanking(datosLimite);