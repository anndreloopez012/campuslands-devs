// Ejercicio 07 - Logica
// Diagnostico rapido de mecanica (tematica: motos)
// Autor: Juan Lema

// Catalogo de sintomas -> posible causa y recomendacion
const CATALOGO_SINTOMAS = {
  "no enciende": {
    causa: "falla en el sistema electrico o falta de combustible",
    recomendacion: "revisar bateria, bujia y nivel de gasolina",
  },
  "vibra": {
    causa: "desbalance en las llantas o piezas sueltas",
    recomendacion: "revisar balanceo de llantas y ajuste de tornilleria",
  },
  "pierde aceite": {
    causa: "fuga en empaques o carter danado",
    recomendacion: "revisar empaques del motor y nivel de aceite",
  },
  "frena poco": {
    causa: "pastillas desgastadas o aire en el sistema de frenos",
    recomendacion: "revisar pastillas de freno y purgar el sistema",
  },
};

// Evalua un sintoma individual y devuelve su diagnostico
function evaluarSintoma(sintoma) {
  const info = CATALOGO_SINTOMAS[sintoma];

  if (!info) {
    return {
      sintoma,
      reconocido: false,
      causa: "sintoma no registrado en el catalogo",
      recomendacion: "consultar con un mecanico especializado",
    };
  }

  return {
    sintoma,
    reconocido: true,
    causa: info.causa,
    recomendacion: info.recomendacion,
  };
}

// Recibe un arreglo de sintomas y devuelve el diagnostico de cada uno
function diagnosticar(sintomas) {
  if (!Array.isArray(sintomas) || sintomas.length === 0) {
    return [];
  }

  return sintomas.map(evaluarSintoma);
}

// Genera un reporte de texto legible a partir del diagnostico
function generarReporte(sintomas) {
  const diagnosticos = diagnosticar(sintomas);

  if (diagnosticos.length === 0) {
    return "No se reportaron sintomas. No es posible generar un diagnostico.";
  }

  const encabezado = "=== Reporte de diagnostico ===";
  const detalle = diagnosticos
    .map((d, i) => {
      const estado = d.reconocido ? "" : " (no reconocido)";
      return `${i + 1}. Sintoma: ${d.sintoma}${estado}\n   Posible causa: ${d.causa}\n   Recomendacion: ${d.recomendacion}`;
    })
    .join("\n");

  return `${encabezado}\n${detalle}`;
}

// ---- Validacion ----

// Caso normal
console.log(generarReporte(["vibra", "frena poco"]));

console.log("\n");

// Caso limite: arreglo vacio
console.log(generarReporte([]));

console.log("\n");

// Caso extra: sintoma no registrado en el catalogo
console.log(generarReporte(["motor recalienta"]));

module.exports = { diagnosticar, generarReporte, evaluarSintoma };