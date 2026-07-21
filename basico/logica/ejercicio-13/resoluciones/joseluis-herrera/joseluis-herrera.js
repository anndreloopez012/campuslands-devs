    const jugadores = [
    { nombre: "Carlos", partidos: 10, victorias: 7, puntosFavor: 150, puntosContra: 120 },
    { nombre: "Ana", partidos: 10, victorias: 8, puntosFavor: 160, puntosContra: 110 },
    { nombre: "Luis", partidos: 0, victorias: 0, puntosFavor: 0, puntosContra: 0 },
    { nombre: "Sofia", partidos: 10, victorias: 7, puntosFavor: 155, puntosContra: 115 }
    ];

    for (let i = 0; i < jugadores.length; i++) {
    let j = jugadores[i];
    
    if (j.partidos > 0) {
        j.winrate = (j.victorias / j.partidos) * 100;
    } else {
        j.winrate = 0;
    }

    j.diferencia = j.puntosFavor - j.puntosContra;
    }

    jugadores.sort(function(a, b) {
    if (b.winrate !== a.winrate) {
        return b.winrate - a.winrate;
    }
    return b.diferencia - a.diferencia;
    });

    for (let i = 0; i < jugadores.length; i++) {
    let j = jugadores[i];
    console.log((i + 1) + ". " + j.nombre + " - Winrate: " + j.winrate + "% - Dif: " + j.diferencia);
    }