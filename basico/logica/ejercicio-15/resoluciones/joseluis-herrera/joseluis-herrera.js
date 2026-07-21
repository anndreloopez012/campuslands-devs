const escenas = [
  { nombre: "Escena 1: Bosque Encantado", horasModelado: 15, horasRender: 8, artistas: 3 },
  { nombre: "Escena 2: Batalla Espacial", horasModelado: 25, horasRender: 20, artistas: 5 },
  { nombre: "Escena 3: Interior de Cabaña", horasModelado: 5, horasRender: 2, artistas: 1 },
  { nombre: "Escena 4: Ciudad Cyberpunk", horasModelado: 30, horasRender: 25, artistas: 6 }
];

const escenasCostosas = [];
let costoTotalProyecto = 0;
let escenaMasCostosa = escenas[0];
escenaMasCostosa.costo = (escenaMasCostosa.horasModelado * 40000) + (escenaMasCostosa.horasRender * 25000) + (escenaMasCostosa.artistas * 120000);

for (let i = 0; i < escenas.length; i++) {
  let e = escenas[i];
  
  let costoEscena = (e.horasModelado * 40000) + (e.horasRender * 25000) + (e.artistas * 120000);
  e.costo = costoEscena;

  costoTotalProyecto = costoTotalProyecto + costoEscena;

  if (costoEscena > 1000000) {
    escenasCostosas.push(e);
  }

  if (costoEscena > escenaMasCostosa.costo) {
    escenaMasCostosa = e;
  }
}

console.log("--- REPORTE DE PRODUCCIÓN 3D ---");
console.log("Costo Total del Proyecto: $" + costoTotalProyecto);
console.log("Escena Más Costosa: " + escenaMasCostosa.nombre + " (Costo: $" + escenaMasCostosa.costo + ")");

console.log("\n--- ESCENAS CON COSTO MAYOR A 1,000,000 ---");
for (let i = 0; i < escenasCostosas.length; i++) {
  let ec = escenasCostosas[i];
  console.log("Escena: " + ec.nombre + " | Costo: $" + ec.costo);
}