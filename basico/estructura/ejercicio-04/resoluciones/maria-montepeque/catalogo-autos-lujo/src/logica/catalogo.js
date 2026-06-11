// src/logica/catalogo.js

const fs = require("fs");
const path = require("path");

const rutaDatos = path.join(__dirname, "..", "..", "data", "autos.json");

function cargarCatalogo() {
  const contenido = fs.readFileSync(rutaDatos, "utf8");
  return JSON.parse(contenido);
}

function obtenerAutosDisponibles(autos) {
  return autos.filter((auto) => auto.disponible === true);
}

function esAutoPublicable(auto) {
  const tienePrecioValido = typeof auto.precioUsd === "number" && auto.precioUsd > 0;
  const tieneImagenes = Array.isArray(auto.imagenes) && auto.imagenes.length > 0;
  return tienePrecioValido && tieneImagenes;
}

function formatearPrecio(precioUsd) {
  if (typeof precioUsd !== "number" || precioUsd <= 0) {
    return "Precio bajo consulta";
  }
  return `$${precioUsd.toLocaleString("en-US")} USD`;
}

module.exports = {
  cargarCatalogo,
  obtenerAutosDisponibles,
  esAutoPublicable,
  formatearPrecio,
};
