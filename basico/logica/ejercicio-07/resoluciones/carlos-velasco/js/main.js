function diagnosticar(sintomas) {
  const baseConocimiento = {
    "no enciende": "Revisar bujía y sistema eléctrico",
    "vibra": "Revisar balanceo de llantas y tornillería",
    "pierde aceite": "Revisar empaques y retenes",
    "frena poco": "Revisar pastillas de freno y líquido"
  };

  if (!sintomas || sintomas.length === 0) return "No se reportaron síntomas.";

  const reporte = sintomas.map(s => baseConocimiento[s] || "Consultar manual técnico");
  
  return reporte;
}

const sintomasPiloto = ['vibra', 'frena poco'];
console.log("Reporte de diagnóstico:", diagnosticar(sintomasPiloto));