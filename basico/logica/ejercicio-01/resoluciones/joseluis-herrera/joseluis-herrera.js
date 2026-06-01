let escuadras = [
  { nombre: "Alpha Team", bajas: 8, posicion: 1, revividos: 2 },
  { nombre: "Lobos del Norte", bajas: 3, posicion: 5, revividos: 0 },
  { nombre: "Fénix", bajas: 12, posicion: 2, revividos: 4 },
  { nombre: "Dragones", bajas: 5, posicion: 3, revividos: 1 },
  { nombre: "Escuadrón Suicida", bajas: 2, posicion: 4, revividos: 3 }
];

for (let i = 0; i < escuadras.length; i++) {
  let escuadra = escuadras[i];
  
  let puntosPorBajas = escuadra.bajas * 3;
  let puntosPorPosicion = 0;

  if (escuadra.posicion === 1) {
    puntosPorPosicion = 20;
  } else if (escuadra.posicion === 2) {
    puntosPorPosicion = 14;
  } else if (escuadra.posicion === 3) {
    puntosPorPosicion = 10;
  } else {
    puntosPorPosicion = 4; 
  }

  escuadra.puntosTotales = puntosPorBajas + puntosPorPosicion;
}

escuadras.sort(function(a, b) {
  return b.puntosTotales - a.puntosTotales; 
});

console.log("=== RANKING FINAL DE ESCUADRAS ===");

for (let i = 0; i < escuadras.length; i++) {
  let escuadra = escuadras[i];
  let lugarRanking = i + 1; 
  
  console.log(lugarRanking + "° Lugar: " + escuadra.nombre + " - Puntos: " + escuadra.puntosTotales + " (Quedó en Top " + escuadra.posicion + ")");
}