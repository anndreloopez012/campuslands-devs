// Ejercicio 14 - Laboratorio de fórmulas químicas
// Maria Montepeque

const compuestos = [
  {
    nombre: "Agua",
    formula: "H2O",
    componentes: [
      { simbolo: "H", gramos: 2.0 },
      { simbolo: "O", gramos: 16.0 }
    ]
  },
  {
    nombre: "Dióxido de carbono",
    formula: "CO2",
    componentes: [
      { simbolo: "C", gramos: 12.0 },
      { simbolo: "O", gramos: 32.0 }
    ]
  },
  {
    nombre: "Cloruro de sodio",
    formula: "NaCl",
    componentes: [
      { simbolo: "Na", gramos: 23.0 },
      { simbolo: "Cl", gramos: 0 }
    ]
  },
  {
    nombre: "Compuesto vacío",
    formula: "??",
    componentes: []
  }
];

function tieneComponentesInvalidos(compuesto) {
  if (compuesto.componentes.length === 0) return true;

  return compuesto.componentes.some(
    (componente) => componente.gramos <= 0
  );
}

function calcularMasaTotal(compuesto) {
  return compuesto.componentes.reduce(
    (acumulado, componente) => acumulado + componente.gramos,
    0
  );
}

function analizarCompuestos(listaDeCompuestos) {
  const resultados = [];
  const incompletos = [];

  for (const compuesto of listaDeCompuestos) {
    if (tieneComponentesInvalidos(compuesto)) {
      incompletos.push(compuesto.nombre);
      continue;
    }

    const masaTotal = calcularMasaTotal(compuesto);

    resultados.push({
      nombre: compuesto.nombre,
      formula: compuesto.formula,
      masaTotal: masaTotal
    });
  }

  return { resultados, incompletos };
}

const { resultados, incompletos } = analizarCompuestos(compuestos);

console.log("=== Compuestos válidos ===");
for (const resultado of resultados) {
  console.log(`${resultado.nombre} (${resultado.formula}): ${resultado.masaTotal}g`);
}

console.log("\n=== Compuestos incompletos ===");
if (incompletos.length === 0) {
  console.log("Ninguno");
} else {
  for (const nombre of incompletos) {
    console.log(`- ${nombre}`);
  }
}
