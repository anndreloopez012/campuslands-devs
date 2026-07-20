function diagnosticar(sintomas) {

  const baseConocimiento = {
    "no enciende": "Revisar bujía y sistema eléctrico",
    "vibra": "Revisar balanceo de llantas y tornillería",
    "pierde aceite": "Revisar empaques y retenes",
    "frena poco": "Revisar pastillas de freno y líquido"
  };

  let reporte = [];

  for (let i = 0; i < sintomas.length; i++) {
    let sintomaActual = sintomas[i];
    
    let solucion = baseConocimiento[sintomaActual];

    if (solucion) {
      reporte.push(solucion);
    } else {

      reporte.push("Consultar manual técnico");
    }
  }

  return reporte;
}

const sintomasPiloto = ['vibra', 'frena poco'];
console.log("Reporte de diagnóstico:", diagnosticar(sintomasPiloto));