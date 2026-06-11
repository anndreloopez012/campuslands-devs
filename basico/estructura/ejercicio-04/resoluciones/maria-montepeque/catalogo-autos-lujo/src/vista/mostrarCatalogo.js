// src/vista/mostrarCatalogo.js

const {
  cargarCatalogo,
  obtenerAutosDisponibles,
  esAutoPublicable,
  formatearPrecio,
} = require("../logica/catalogo");

function construirFichaAuto(auto) {
  const lineas = [
    `${auto.marca} ${auto.modelo} (${auto.anio})`,
    `  Motor: ${auto.motor} | ${auto.potenciaHp} HP`,
    `  Color: ${auto.color}`,
    `  Precio: ${formatearPrecio(auto.precioUsd)}`,
    `  Estado: ${esAutoPublicable(auto) ? "Publicable" : "Pendiente de completar"}`,
  ];
  return lineas.join("\n");
}

function mostrarCatalogo() {
  const catalogo = cargarCatalogo();
  const autosDisponibles = obtenerAutosDisponibles(catalogo.autos);

  console.log(`=== ${catalogo.catalogo} ===\n`);

  if (autosDisponibles.length === 0) {
    console.log("No hay autos disponibles en este momento.");
    return;
  }

  autosDisponibles.forEach((auto) => {
    console.log(construirFichaAuto(auto));
    console.log("");
  });
}

mostrarCatalogo();
