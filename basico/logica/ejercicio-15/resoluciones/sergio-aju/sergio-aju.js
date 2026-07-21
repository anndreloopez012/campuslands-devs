const escenasAnimacion = [
    {
        nombre: "Escena 1: Persecución en la Ciudad",
        horasModelado: 10,
        horasRender: 8,
        artistas: 3
    },
    {
        nombre: "Escena 2: Vuelo sobre el Cañón",
        horasModelado: 15,
        horasRender: 12,
        artistas: 4
    },
    {
        nombre: "Escena 3: Conversación en Interiores",
        horasModelado: 4,
        horasRender: 2,
        artistas: 1
    },
    {
        nombre: "Escena 4: Batalla Masiva Final",
        horasModelado: 25,
        horasRender: 30,
        artistas: 6
    }
];
const TARIFA_MODELADO = 40000;
const TARIFA_RENDER = 25000;
const TARIFA_ARTISTA = 120000;
const LIMITE_COSTO_ALTO = 1000000;
function calcularCostoEscena(escena) {
    return (escena.horasModelado * TARIFA_MODELADO) +
           (escena.horasRender * TARIFA_RENDER) +
           (escena.artistas * TARIFA_ARTISTA);
}
const escenasConCosto = escenasAnimacion.map(escena => {
    const costoTotalEscena = calcularCostoEscena(escena);
    return {
        ...escena,
        costoTotal: costoTotalEscena
    };
});
const escenasCostosas = escenasConCosto.filter(escena => escena.costoTotal > LIMITE_COSTO_ALTO);
const costoTotalProyecto = escenasConCosto.reduce((acumulador, escena) => acumulador + escena.costoTotal, 0);
let escenaMasCostosa = escenasConCosto[0];
for (let i = 1; i < escenasConCosto.length; i++) {
    if (escenasConCosto[i].costoTotal > escenaMasCostosa.costoTotal) {
        escenaMasCostosa = escenasConCosto[i];
    }
}
console.log("=== REPORTE FINANCIERO: ESTUDIO DE ANIMACIÓN 3D ===");
console.log(`Costo total del proyecto: $${costoTotalProyecto.toLocaleString()}`);
console.log("\n--- Detalle por Escena ---");
escenasConCosto.forEach(escena => {
    console.log(`- ${escena.nombre}: $${escena.costoTotal.toLocaleString()}`);
});

console.log("\n--- Escenas Costosas (> $1,000,000) ---");
if (escenasCostosas.length > 0) {
    escenasCostosas.forEach(escena => {
        console.log(`* ${escena.nombre} con un costo de $${escena.costoTotal.toLocaleString()}`);
    });
} else {
    console.log("No hay escenas que superen el límite.");
}

console.log("\n--- Escena Más Costosa ---");
console.log(`🏆 ${escenaMasCostosa.nombre} (Total: $${escenaMasCostosa.costoTotal.toLocaleString()})`);