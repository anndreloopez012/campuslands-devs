const COSTO_HORA_MODELADO = 40000;
const COSTO_HORA_RENDER = 25000;
const COSTO_ARTISTA = 120000;
const LIMITE_ESCENA_COSTOSA = 1000000;

const escenas = [
  { nombre: "Intro del bosque", horasModelado: 10, horasRender: 8, artistas: 3 },
  { nombre: "Batalla final", horasModelado: 20, horasRender: 15, artistas: 6 },
  { nombre: "Dialogo cocina", horasModelado: 4, horasRender: 2, artistas: 1 },
  { nombre: "Persecucion ciudad", horasModelado: 15, horasRender: 12, artistas: 5 },
];

function calcularCostoEscena(escena) {
  const costoModelado = escena.horasModelado * COSTO_HORA_MODELADO;
  const costoRender = escena.horasRender * COSTO_HORA_RENDER;
  const costoArtistas = escena.artistas * COSTO_ARTISTA;

  return costoModelado + costoRender + costoArtistas;
}

function esEscenaCostosa(costo) {
  return costo > LIMITE_ESCENA_COSTOSA;
}

function procesarEscenas(listaEscenas) {
  const escenasConCosto = listaEscenas.map((escena) => ({
    nombre: escena.nombre,
    horasModelado: escena.horasModelado,
    horasRender: escena.horasRender,
    artistas: escena.artistas,
    costo: calcularCostoEscena(escena),
  }));

  const escenasCostosas = escenasConCosto.filter((escena) => esEscenaCostosa(escena.costo));

  return { escenasConCosto, escenasCostosas };
}

function calcularCostoTotalProyecto(escenasConCosto) {
  return escenasConCosto.reduce((acumulado, escena) => acumulado + escena.costo, 0);
}

function encontrarEscenaMasCostosa(escenasConCosto) {
  return escenasConCosto.reduce((masCostosa, escenaActual) =>
    escenaActual.costo > masCostosa.costo ? escenaActual : masCostosa
  );
}

const { escenasConCosto, escenasCostosas } = procesarEscenas(escenas);
const costoTotalProyecto = calcularCostoTotalProyecto(escenasConCosto);
const escenaMasCostosa = encontrarEscenaMasCostosa(escenasConCosto);

console.log("Escenas con costo calculado:");
console.log(escenasConCosto);

console.log("\nEscenas costosas (costo > 1000000):");
console.log(escenasCostosas);

console.log("\nCosto total del proyecto:");
console.log(costoTotalProyecto);

console.log("\nEscena más costosa:");
console.log(escenaMasCostosa);