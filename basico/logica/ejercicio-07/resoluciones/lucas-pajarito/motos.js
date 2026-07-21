// ==========================================
// Sistema de Diagnóstico de Motocicletas
// ==========================================

// Función para diagnosticar una lista de síntomas
function diagnosticar(sintomas) {
  const recomendaciones = {
    "no enciende": "Revisar la batería, el sistema eléctrico y la bujía.",
    "vibra": "Inspeccionar el balanceo de las ruedas y los soportes del motor.",
    "pierde aceite": "Verificar empaques, retenes y posibles fugas.",
    "frena poco": "Revisar las pastillas, el disco y el nivel del líquido de frenos."
  };

  const reporte = [];

  sintomas.forEach(sintoma => {
    reporte.push({
      sintoma: sintoma,
      recomendacion:
        recomendaciones[sintoma] || "Se recomienda realizar una revisión general."
    });
  });

  return reporte;
}

// =======================
// Prueba del sistema
// =======================

const sintomasMoto = [
  "no enciende",
  "pierde aceite",
  "frena poco"
];

const reporteFinal = diagnosticar(sintomasMoto);

// =======================
// Mostrar reporte
// =======================

console.log("===== REPORTE DE DIAGNÓSTICO =====\n");

reporteFinal.forEach((item, index) => {
  console.log(`Problema ${index + 1}`);
  console.log(`Síntoma: ${item.sintoma}`);
  console.log(`Recomendación: ${item.recomendacion}`);
  console.log("-----------------------------------");
});