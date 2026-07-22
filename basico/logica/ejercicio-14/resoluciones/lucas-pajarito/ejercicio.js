// Lista de compuestos químicos
const compuestos = [
  {
    nombre: "Agua",
    componentes: [
      { simbolo: "H", gramos: 2 },
      { simbolo: "O", gramos: 16 }
    ]
  },
  {
    nombre: "Dióxido de Carbono",
    componentes: [
      { simbolo: "C", gramos: 12 },
      { simbolo: "O", gramos: 32 }
    ]
  },
  {
    nombre: "Compuesto Inválido",
    componentes: [
      { simbolo: "Na", gramos: 23 },
      { simbolo: "Cl", gramos: 0 }
    ]
  },
  {
    nombre: "Amoniaco",
    componentes: [
      { simbolo: "N", gramos: 14 },
      { simbolo: "H", gramos: 3 }
    ]
  }
];

// Función para analizar los compuestos
function analizarCompuestos(lista) {
  const compuestosValidos = [];

  for (const compuesto of lista) {

    let totalGramos = 0;
    let esValido = true;

    for (const componente of compuesto.componentes) {

      // Validación
      if (componente.gramos <= 0) {
        console.log(
          `⚠️ El compuesto "${compuesto.nombre}" es inválido. El componente ${componente.simbolo} tiene gramos incorrectos.`
        );
        esValido = false;
        break;
      }

      totalGramos += componente.gramos;
    }

    if (esValido) {
      compuesto.totalGramos = totalGramos;
      compuestosValidos.push(compuesto);
    }
  }

  return compuestosValidos;
}

// Procesar información
const resultado = analizarCompuestos(compuestos);

// Mostrar resultados
console.log("\n🧪 Compuestos válidos\n");

resultado.forEach(compuesto => {
  console.log(`Compuesto: ${compuesto.nombre}`);
  console.log(`Total de gramos: ${compuesto.totalGramos} g`);
  console.log("Componentes:");

  compuesto.componentes.forEach(componente => {
    console.log(`- ${componente.simbolo}: ${componente.gramos} g`);
  });

  console.log("-----------------------------");
});