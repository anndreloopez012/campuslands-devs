// Ejercicio 05 - Logica - Juan Lema
// Tabla de futbol sala: calcula puntos, diferencia de goles y ordena equipos.

const equipos = [
  { nombre: "Halcones FS", victorias: 4, empates: 1, derrotas: 0, golesFavor: 18, golesContra: 7 },
  { nombre: "Los Tigres", victorias: 3, empates: 1, derrotas: 1, golesFavor: 14, golesContra: 9 },
  { nombre: "Rayo Sur", victorias: 3, empates: 0, derrotas: 2, golesFavor: 12, golesContra: 12 },
  { nombre: "Union Norte", victorias: 1, empates: 2, derrotas: 2, golesFavor: 9, golesContra: 11 },
  { nombre: "Deportivo Cuenca", victorias: 0, empates: 0, derrotas: 5, golesFavor: 3, golesContra: 17 },
];

function calcularPuntos(equipo) {
  return equipo.victorias * 3 + equipo.empates;
}

function calcularDiferencia(equipo) {
  return equipo.golesFavor - equipo.golesContra;
}

function calcularEstadisticas(equipo) {
  return {
    ...equipo,
    puntos: calcularPuntos(equipo),
    diferencia: calcularDiferencia(equipo),
  };
}

function ordenarTabla(equiposConEstadisticas) {
  return [...equiposConEstadisticas].sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    return b.diferencia - a.diferencia;
  });
}

function imprimirTabla(equiposOrdenados) {
  if (equiposOrdenados.length === 0) {
    console.log("No hay equipos para mostrar en la tabla.");
    return;
  }

  console.log("Pos | Equipo             | Pts | DG");
  console.log("----|--------------------|-----|----");

  equiposOrdenados.forEach((equipo, indice) => {
    const posicion = indice + 1;
    const nombre = equipo.nombre.padEnd(19, " ");
    const diferenciaTexto = equipo.diferencia >= 0 ? `+${equipo.diferencia}` : `${equipo.diferencia}`;
    console.log(`${String(posicion).padEnd(3)} | ${nombre} | ${String(equipo.puntos).padEnd(3)} | ${diferenciaTexto}`);
  });
}

function generarTabla(listaEquipos) {
  const conEstadisticas = listaEquipos.map(calcularEstadisticas);
  const ordenados = ordenarTabla(conEstadisticas);
  imprimirTabla(ordenados);
  return ordenados;
}

// Caso normal
generarTabla(equipos);

// Caso limite: lista vacia
console.log("\n--- Caso limite: sin equipos ---");
generarTabla([]);

// Caso limite: equipo sin partidos jugados (todo en cero)
console.log("\n--- Caso limite: equipo sin partidos jugados ---");
generarTabla([
  { nombre: "Nuevo Ingreso FS", victorias: 0, empates: 0, derrotas: 0, golesFavor: 0, golesContra: 0 },
]);