const escenas = [
    {
        nombre: "Ciudad Futurista",
        horasModelado: 12,
        horasRender: 15,
        artistas: 4
    },
    {
        nombre: "Bosque Encantado",
        horasModelado: 8,
        horasRender: 10,
        artistas: 2
    },
    {
        nombre: "Batalla Espacial",
        horasModelado: 25,
        horasRender: 30,
        artistas: 6
    },
    {
        nombre: "Interior Casa",
        horasModelado: 5,
        horasRender: 4,
        artistas: 1
    }
];
const resumenEscenas = escenas.map(escena => {

    const costo =
        (escena.horasModelado * 40000) +
        (escena.horasRender * 25000) +
        (escena.artistas * 120000);

    return {
        nombre: escena.nombre,
        horasModelado: escena.horasModelado,
        horasRender: escena.horasRender,
        artistas: escena.artistas,
        costo
    };

});
const escenasCostosas = resumenEscenas.filter(
    escena => escena.costo > 1000000
);

const costoTotal = resumenEscenas.reduce(
    (total, escena) => total + escena.costo,
    0
);

const escenaMasCostosa = resumenEscenas.reduce(
    (mayor, actual) =>
        actual.costo > mayor.costo ? actual : mayor
);
console.log("\n========== COSTOS POR ESCENA ==========\n");

console.table(resumenEscenas);

console.log("\n===== ESCENAS COSTOSAS =====\n");

console.table(escenasCostosas);

console.log("\nCosto total del proyecto:");

console.log(`Q${costoTotal.toLocaleString()}`);

console.log("\nEscena con mayor costo:");

console.table([escenaMasCostosa]);