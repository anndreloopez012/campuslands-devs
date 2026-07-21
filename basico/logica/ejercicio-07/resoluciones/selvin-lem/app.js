const RECOMENDACIONES = {
  "no enciende": "Revisar batería, bujía y sistema de encendido.",
  "vibra": "Revisar balanceo de ruedas y estado de rodamientos.",
  "pierde aceite": "Revisar empaques, retenes y nivel de aceite.",
  "frena poco": "Revisar pastillas, disco de freno y nivel de líquido de frenos.",
};

function diagnosticarSintoma(sintoma) {
  const sintomaNormalizado = sintoma.trim().toLowerCase();
  return RECOMENDACIONES[sintomaNormalizado] ?? "Síntoma no reconocido, revisar con especialista.";
}

function diagnosticar(sintomas) {
  if (sintomas.length === 0) {
    return { sintomas: [], recomendaciones: [], reporte: "No se reportaron síntomas." };
  }

  const recomendaciones = sintomas.map((sintoma) => ({
    sintoma,
    recomendacion: diagnosticarSintoma(sintoma),
  }));

  const reporte = recomendaciones
    .map((item) => `- ${item.sintoma}: ${item.recomendacion}`)
    .join("\n");

  return { sintomas, recomendaciones, reporte };
}

// Caso normal
console.log(diagnosticar(["vibra", "frena poco"]).reporte);

console.log(diagnosticar([]).reporte);
console.log(diagnosticar(["motor hace ruido raro"]).reporte);