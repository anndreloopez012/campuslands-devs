// diagnostico.js — Ejercicio 07: Diagnóstico rápido de mecánica

const catalogoCausas = {
  "no enciende":   "Revisar batería, bujía o sistema de combustible.",
  "vibra":         "Revisar balanceo de ruedas y estado de rodamientos.",
  "pierde aceite": "Revisar juntas, retenes y nivel de aceite del motor.",
  "frena poco":    "Revisar pastillas de freno, líquido y calibradores.",
};

function diagnosticar(sintomas) {
  if (!sintomas || sintomas.length === 0) {
    return {
      sintomas: [],
      recomendaciones: [],
      reporte: "No se recibieron síntomas. No es posible generar un diagnóstico.",
    };
  }

  const recomendaciones = sintomas.map(function (sintoma) {
    const causa = catalogoCausas[sintoma.toLowerCase()];
    return {
      sintoma: sintoma,
      causa: causa || "Síntoma no reconocido — llevar a revisión general.",
    };
  });

  const lineasReporte = recomendaciones.map(function (diagnostico) {
    return "• " + diagnostico.sintoma + ": " + diagnostico.causa;
  });

  const reporte =
    "=== REPORTE DE DIAGNÓSTICO ===\n" +
    lineasReporte.join("\n") +
    "\n==============================";

  return {
    sintomas: sintomas,
    recomendaciones: recomendaciones,
    reporte: reporte,
  };
}

// — Caso normal: múltiples síntomas conocidos
const casoNormal = diagnosticar(["vibra", "frena poco"]);
console.log("CASO NORMAL");
console.log(casoNormal.reporte);

// — Caso límite: síntoma desconocido mezclado con uno conocido
const casoLimite = diagnosticar(["no enciende", "hace humo"]);
console.log("\nCASO LÍMITE (síntoma desconocido)");
console.log(casoLimite.reporte);

// — Caso vacío: arreglo sin síntomas
const casoVacio = diagnosticar([]);
console.log("\nCASO VACÍO");
console.log(casoVacio.reporte);
