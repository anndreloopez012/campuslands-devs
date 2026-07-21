// Nombre: Stefani Sanchez
// Ejercicio 14 - Laboratorio de formulas quimicas
//
// Razonamiento: Se crean compuestos con sus componentes (simbolo y gramos).
// Se suma la masa total por compuesto. Se valida que ningun componente tenga gramos <= 0.
// Se filtran los compuestos incompletos (con componentes invalidos).

const compuestos = [
  {
    nombre: "Agua (H2O)",
    componentes: [
      { simbolo: "H", gramos: 2.02 },
      { simbolo: "O", gramos: 16.00 },
    ],
  },
  {
    nombre: "Sal Comun (NaCl)",
    componentes: [
      { simbolo: "Na", gramos: 22.99 },
      { simbolo: "Cl", gramos: 35.45 },
    ],
  },
  {
    nombre: "Dioxido de Carbono (CO2)",
    componentes: [
      { simbolo: "C",  gramos: 12.01 },
      { simbolo: "O",  gramos:  0    }, // componente invalido
    ],
  },
  {
    nombre: "Amoniaco (NH3)",
    componentes: [
      { simbolo: "N",  gramos: 14.01 },
      { simbolo: "H",  gramos: -1.5  }, // gramos negativos = invalido
    ],
  },
  {
    nombre: "Glucosa (C6H12O6)",
    componentes: [
      { simbolo: "C",  gramos: 72.06 },
      { simbolo: "H",  gramos: 12.12 },
      { simbolo: "O",  gramos: 96.00 },
    ],
  },
];

function validarComponentes(componentes) {
  return componentes.every(c => c.gramos > 0);
}

function calcularMasa(componentes) {
  return componentes.reduce((suma, c) => suma + c.gramos, 0);
}

function procesarCompuestos(lista) {
  const completos   = [];
  const incompletos = [];

  lista.forEach(compuesto => {
    const esCompleto = validarComponentes(compuesto.componentes);
    if (esCompleto) {
      const masaTotal = calcularMasa(compuesto.componentes);
      completos.push({ ...compuesto, masaTotal: masaTotal.toFixed(2) });
    } else {
      const invalidos = compuesto.componentes
        .filter(c => c.gramos <= 0)
        .map(c => `${c.simbolo} (${c.gramos}g)`);
      incompletos.push({ ...compuesto, componentesInvalidos: invalidos });
    }
  });

  return { completos, incompletos };
}

const { completos, incompletos } = procesarCompuestos(compuestos);

console.log("=== COMPUESTOS VALIDOS ===");
completos.forEach(c => {
  console.log(`${c.nombre} | Masa total: ${c.masaTotal} g`);
  c.componentes.forEach(comp => console.log(`   ${comp.simbolo}: ${comp.gramos}g`));
});

console.log("\n=== FORMULAS INCOMPLETAS ===");
incompletos.forEach(c => {
  console.log(`${c.nombre} | Componentes invalidos: ${c.componentesInvalidos.join(", ")}`);
});

// Validacion: H2O tiene H y O con gramos > 0 => completo
const testAgua = compuestos.find(c => c.nombre.includes("H2O"));
console.log(`\nValidacion: H2O completa => ${validarComponentes(testAgua.componentes)} (esperado true)`);
console.log(`Validacion: masa H2O => ${calcularMasa(testAgua.componentes).toFixed(2)} g (esperado 18.02)`);
