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
    nombre: "Mezcla Incorrecta",
    componentes: [
      { simbolo: "Na", gramos: 23 },
      { simbolo: "Cl", gramos: 0 }
    ]
  }
];

const compuestosIncompletos = [];

for (let compuesto of compuestos) {
  let masaTotal = 0;
  let esValido = true;

  for (let componente of compuesto.componentes) {
    if (componente.gramos <= 0) {
      esValido = false;
    } else {
      masaTotal += componente.gramos;
    }
  }

  console.log(`Compuesto: ${compuesto.nombre}`);
  console.log(`Masa total: ${masaTotal} g`);

  if (!esValido) {
    console.log("Estado: Incompleto");
    compuestosIncompletos.push(compuesto.nombre);
  } else {
    console.log("Estado: Completo");
  }

  console.log("----------------------");
}

console.log("Compuestos incompletos:");
console.log(compuestosIncompletos);