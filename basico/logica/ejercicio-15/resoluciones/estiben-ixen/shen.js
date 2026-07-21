const escenas = [
    {
        nombre: "Ciudad Futurista",
        horasModelado: 10,
        horasRender: 8,
        artistas: 3
    },
    {
        nombre: "Bosque Encantado",
        horasModelado: 15,
        horasRender: 12,
        artistas: 4
    },
    {
        nombre: "Interior Casa",
        horasModelado: 6,
        horasRender: 5,
        artistas: 2
    }
];

function calcularCosto(escena) {
    return (
        escena.horasModelado * 40000 +
        escena.horasRender * 25000 +
        escena.artistas * 120000
    );
}

let costoTotalProyecto = 0;
let escenaMasCostosa = escenas[0];
const escenasCostosas = [];

for (const escena of escenas) {
    const costo = calcularCosto(escena);
    costoTotalProyecto += costo;

    if (costo > calcularCosto(escenaMasCostosa)) {
        escenaMasCostosa = escena;
    }

    if (costo > 1000000) {
        escenasCostosas.push({
            nombre: escena.nombre,
            costo: costo
        });
    }

    console.log(`Escena: ${escena.nombre}`);
    console.log(`Costo: $${costo}`);
    console.log("---------------------------");
}

console.log("Costo total del proyecto: $" + costoTotalProyecto);

console.log("\nEscenas costosas:");
console.log(escenasCostosas);

console.log("\nEscena más costosa:");
console.log({
    nombre: escenaMasCostosa.nombre,
    costo: calcularCosto(escenaMasCostosa)
});