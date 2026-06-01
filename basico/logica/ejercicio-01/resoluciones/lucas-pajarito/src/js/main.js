const escuadras = [
  { nombre: "Nova", bajas: 8, posicion: 2, revividos: 2 },
  { nombre: "Shadow", bajas: 6, posicion: 4, revividos: 1 },
  { nombre: "Blaze", bajas: 7, posicion: 1, revividos: 3 },
  { nombre: "Vortex", bajas: 5, posicion: 3, revividos: 0 },
  { nombre: "Titan", bajas: 4, posicion: 5, revividos: 2 },
  { nombre: "Phoenix", bajas: 9, posicion: 6, revividos: 4 },
  { nombre: "Raven", bajas: 3, posicion: 7, revividos: 1 },
  { nombre: "Falcon", bajas: 2, posicion: 8, revividos: 0 },
  { nombre: "Specter", bajas: 5, posicion: 9, revividos: 2 },
  { nombre: "Drako", bajas: 1, posicion: 10, revividos: 1 }
];

// Calcular puntos
escuadras.forEach(escuadra => {
  let puntosPosicion = 4;

  if (escuadra.posicion === 1) {
    puntosPosicion = 20;
  } else if (escuadra.posicion === 2) {
    puntosPosicion = 14;
  } else if (escuadra.posicion === 3) {
    puntosPosicion = 10;
  }

  escuadra.puntos = (escuadra.bajas * 3) + puntosPosicion;
});

// Ordenar
escuadras.sort((a, b) => b.puntos - a.puntos);

// Mostrar en consola
console.table(
  escuadras.map((escuadra, index) => ({
    ranking: index + 1,
    nombre: escuadra.nombre,
    puntos: escuadra.puntos
  }))
);

// Mostrar en HTML
const tbody = document.querySelector("#tablaRanking tbody");

escuadras.forEach((escuadra, index) => {
  tbody.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${escuadra.nombre}</td>
      <td>${escuadra.puntos}</td>
    </tr>
  `;
});