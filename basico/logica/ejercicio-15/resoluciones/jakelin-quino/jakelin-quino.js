// Presupuesto animación 3D: costo por escena y detecta costosas (>1M)
const escenas = [
  { nombre: "Intro", horasModelado: 10, horasRender: 8, artistas: 3 },
  { nombre: "Persecución", horasModelado: 25, horasRender: 15, artistas: 5 },
  { nombre: "Diálogo", horasModelado: 8, horasRender: 5, artistas: 2 },
  { nombre: "Explosión", horasModelado: 30, horasRender: 20, artistas: 6 },
  { nombre: "Final", horasModelado: 12, horasRender: 10, artistas: 4 }
];

const conCosto = escenas.map(e => ({
  ...e,
  costo: e.horasModelado * 40000 + e.horasRender * 25000 + e.artistas * 120000
}));

const total = conCosto.reduce((sum, e) => sum + e.costo, 0);
const costosas = conCosto.filter(e => e.costo > 1000000);
const masCara = conCosto.reduce((a, b) => a.costo > b.costo ? a : b);

console.log(`Total: $${total.toLocaleString()}`);
console.log(`Costosas: ${costosas.length}`);
console.log(`Más cara: ${masCara.nombre} - $${masCara.costo.toLocaleString()}`);