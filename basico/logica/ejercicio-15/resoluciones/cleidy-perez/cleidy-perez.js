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
    artistas: 5
  },
  {
    nombre: "Batalla Final",
    horasModelado: 20,
    horasRender: 15,
    artistas: 6
  }
];

let costoTotalProyecto = 0;
let escenasCostosas = [];
let escenaMasCostosa = null;
let mayorCosto = 0;

for (let escena of escenas) {
  const costo =
    (escena.horasModelado * 40000) +
    (escena.horasRender * 25000) +
    (escena.artistas * 120000);

  costoTotalProyecto += costo;

  console.log(`Escena: ${escena.nombre}`);
  console.log(`Costo: Q${costo}`);
  console.log("-------------------------");

  if (costo > 1000000) {
    escenasCostosas.push({
      nombre: escena.nombre,
      costo: costo
    });
  }

  if (costo > mayorCosto) {
    mayorCosto = costo;
    escenaMasCostosa = {
      nombre: escena.nombre,
      costo: costo
    };
  }
}

console.log("Costo total del proyecto: Q" + costoTotalProyecto);

console.log("\nEscenas con costo mayor a Q1,000,000:");
console.log(escenasCostosas);

console.log("\nEscena más costosa:");
console.log(escenaMasCostosa);