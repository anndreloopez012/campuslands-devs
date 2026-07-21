// Nombre: Stefani Sanchez
// Ejercicio 07 - Diagnostico rapido de mecanica de motos
//
// Razonamiento: Se crea una funcion diagnosticar(sintomas) que recibe un arreglo
// de sintomas y devuelve recomendaciones especificas por cada sintoma.
// Al final se genera un reporte consolidado.

function diagnosticar(sintomas) {
  const recomendaciones = {
    "no enciende":    "Revisar bateria, bujias y sistema de arranque",
    "vibra":          "Revisar balanceo de ruedas y rodamientos",
    "pierde aceite":  "Revisar juntas, sellos y nivel de aceite",
    "frena poco":     "Revisar pastillas de freno y liquido de frenos",
    "humo negro":     "Revisar mezcla de combustible y filtro de aire",
    "recalienta":     "Revisar sistema de enfriamiento y nivel de liquido",
    "pierde potencia":"Revisar carburador, filtro de aire y bujias",
  };

  const reporte = [];

  sintomas.forEach(sintoma => {
    const recomendacion = recomendaciones[sintoma.toLowerCase()];
    if (recomendacion) {
      reporte.push({ sintoma, recomendacion });
    } else {
      reporte.push({ sintoma, recomendacion: "Sintoma no reconocido, llevar a revision general" });
    }
  });

  return reporte;
}

function generarReporte(piloto, sintomas) {
  console.log(`\n=== DIAGNOSTICO: ${piloto.toUpperCase()} ===`);
  const reporte = diagnosticar(sintomas);
  if (reporte.length === 0) {
    console.log("Sin sintomas reportados.");
    return;
  }
  reporte.forEach((item, i) => {
    console.log(`${i + 1}. Sintoma: "${item.sintoma}" => ${item.recomendacion}`);
  });
}

// Casos de prueba
generarReporte("Piloto A", ["vibra", "frena poco"]);
generarReporte("Piloto B", ["no enciende", "pierde aceite", "humo negro"]);
generarReporte("Piloto C", ["recalienta"]);
generarReporte("Piloto D", []);

// Validacion: vibra y frena poco sugieren balanceo y pastillas
const resultado = diagnosticar(["vibra", "frena poco"]);
console.log("\nValidacion:", resultado[0].recomendacion.includes("balanceo"), "(esperado true)");
console.log("Validacion:", resultado[1].recomendacion.includes("pastillas"), "(esperado true)");
