// scripts/validar-combos.js
// Script de apoyo: valida que cada combo referencie un plato y una bebida
// que realmente existan, y que el precio del combo sea menor al normal.
// No es parte obligatoria del ejercicio, pero documenta como se validarian
// los datos de menu/ en un proyecto real.

const platos = require("../menu/platos.json");
const bebidas = require("../menu/bebidas.json");
const combos = require("../menu/combos.json");

function validarCombos(listaCombos, listaPlatos, listaBebidas) {
  const erroresEncontrados = [];

  for (const combo of listaCombos) {
    const platoExiste = listaPlatos.some((plato) => plato.id === combo.platoId);
    const bebidaExiste = listaBebidas.some((bebida) => bebida.id === combo.bebidaId);

    if (!platoExiste) {
      erroresEncontrados.push(`Combo ${combo.id}: platoId "${combo.platoId}" no existe.`);
    }
    if (!bebidaExiste) {
      erroresEncontrados.push(`Combo ${combo.id}: bebidaId "${combo.bebidaId}" no existe.`);
    }
    if (combo.precioCombo >= combo.precioNormal) {
      erroresEncontrados.push(`Combo ${combo.id}: el precio combo no es menor al precio normal.`);
    }
  }

  return erroresEncontrados;
}

const errores = validarCombos(combos, platos, bebidas);

if (errores.length === 0) {
  console.log("Todos los combos son validos.");
} else {
  console.log("Se encontraron problemas:");
  errores.forEach((error) => console.log(" - " + error));
}
