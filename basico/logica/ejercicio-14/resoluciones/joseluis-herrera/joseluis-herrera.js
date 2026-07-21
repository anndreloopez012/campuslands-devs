const compuestos = [
  { 
    nombre: "Agua", 
    componentes: [
      { simbolo: "H", gramos: 2 },
      { simbolo: "O", gramos: 16 }
    ] 
  },
  { 
    nombre: "Sal de Mesa", 
    componentes: [
      { simbolo: "Na", gramos: 23 },
      { simbolo: "Cl", gramos: 35 }
    ] 
  },
  { 
    nombre: "Compuesto Incompleto", 
    componentes: [
      { simbolo: "C", gramos: 12 },
      { simbolo: "O", gramos: 0 }
    ] 
  }
];

const compuestosValidos = [];

for (let i = 0; i < compuestos.length; i++) {
  let c = compuestos[i];
  let masaTotal = 0;
  let esCompleto = true;

  for (let k = 0; k < c.componentes.length; k++) {
    let comp = c.componentes[k];
    
    if (comp.gramos <= 0) {
      esCompleto = false;
    } else {
      masaTotal = masaTotal + comp.gramos;
    }
  }

  if (esCompleto) {
    c.masaTotal = masaTotal;
    compuestosValidos.push(c);
  }
}

console.log("--- COMPUESTOS VÁLIDOS Y MASA TOTAL ---");
for (let i = 0; i < compuestosValidos.length; i++) {
  let c = compuestosValidos[i];
  console.log("Compuesto: " + c.nombre + " | Masa Total: " + c.masaTotal + "g");
}