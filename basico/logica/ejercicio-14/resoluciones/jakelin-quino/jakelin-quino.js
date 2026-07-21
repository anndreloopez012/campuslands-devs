// Laboratorio químico: calcula masa total y valida compuestos con gramos > 0
const compuestos = [
  { nombre: "Agua", componentes: [{ simbolo: "H", gramos: 2 }, { simbolo: "O", gramos: 16 }] },
  { nombre: "Sal", componentes: [{ simbolo: "Na", gramos: 23 }, { simbolo: "Cl", gramos: 35.5 }] },
  { nombre: "Glucosa", componentes: [{ simbolo: "C", gramos: 0 }, { simbolo: "H", gramos: 12 }, { simbolo: "O", gramos: 96 }] },
  { nombre: "Metano", componentes: [{ simbolo: "C", gramos: 12 }, { simbolo: "H", gramos: 1 }] }
];

// Calcular masa total y validar
compuestos.forEach(c => {
  const masaTotal = c.componentes.reduce((sum, comp) => sum + comp.gramos, 0);
  const tieneCero = c.componentes.some(comp => comp.gramos <= 0);
  console.log(`\n${c.nombre}:`);
  console.log(`  Masa total: ${masaTotal}g`);
  console.log(`  Componentes: ${c.componentes.map(comp => `${comp.simbolo}(${comp.gramos}g)`).join(', ')}`);
  console.log(`  Estado: ${tieneCero ? 'Incompleto (gramos <= 0)' : 'Válido'}`);
});

// Filtrar compuestos válidos (sin gramos <= 0)
const validos = compuestos.filter(c => 
  c.componentes.every(comp => comp.gramos > 0)
);

console.log(`\n=== COMPUESTOS VÁLIDOS (${validos.length}) ===`);
validos.forEach(c => {
  const masa = c.componentes.reduce((sum, comp) => sum + comp.gramos, 0);
  console.log(`${c.nombre}: ${masa}g`);
});