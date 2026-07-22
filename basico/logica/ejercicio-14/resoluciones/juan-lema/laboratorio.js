// solucion.js
// Laboratorio de formulas quimicas — Juan Lema

// Cada compuesto tiene un nombre y una lista de componentes.
// Cada componente tiene un simbolo (string) y una cantidad en gramos (number).
const compuestos = [
  {
    nombre: "Agua",
    componentes: [
      { simbolo: "H", gramos: 2 },
      { simbolo: "O", gramos: 16 },
    ],
  },
  {
    nombre: "Sal",
    componentes: [
      { simbolo: "Na", gramos: 23 },
      { simbolo: "Cl", gramos: 35.5 },
    ],
  },
  {
    nombre: "Compuesto invalido",
    componentes: [
      { simbolo: "X", gramos: 0 },
      { simbolo: "Y", gramos: 5 },
    ],
  },
  {
    nombre: "Compuesto vacio",
    componentes: [],
  },
];

// Suma los gramos de todos los componentes de un compuesto.
function calcularMasaTotal(compuesto) {
  return compuesto.componentes.reduce((total, comp) => total + comp.gramos, 0);
}

// Un compuesto es valido si tiene al menos un componente
// y ninguno de sus componentes tiene gramos <= 0.
function esCompuestoValido(compuesto) {
  if (compuesto.componentes.length === 0) return false;
  return compuesto.componentes.every((comp) => comp.gramos > 0);
}

// Devuelve solo los compuestos que estan incompletos o mal formados.
function filtrarCompuestosIncompletos(listaCompuestos) {
  return listaCompuestos.filter((compuesto) => !esCompuestoValido(compuesto));
}

// Procesa el laboratorio completo: calcula masa total por compuesto
// y separa los validos de los incompletos.
function procesarLaboratorio(listaCompuestos) {
  const validos = listaCompuestos
    .filter(esCompuestoValido)
    .map((compuesto) => ({
      nombre: compuesto.nombre,
      masaTotal: calcularMasaTotal(compuesto),
    }));

  const incompletos = filtrarCompuestosIncompletos(listaCompuestos).map(
    (compuesto) => compuesto.nombre
  );

  return { validos, incompletos };
}

// --- Ejecucion / validacion ---
const resultado = procesarLaboratorio(compuestos);

console.log("Compuestos validos:");
resultado.validos.forEach((c) =>
  console.log(`- ${c.nombre}: ${c.masaTotal}g`)
);

console.log("\nCompuestos incompletos:");
if (resultado.incompletos.length === 0) {
  console.log("Ninguno.");
} else {
  resultado.incompletos.forEach((nombre) => console.log(`- ${nombre}`));
}