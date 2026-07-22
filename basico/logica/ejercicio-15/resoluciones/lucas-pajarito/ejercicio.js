// Lista de escenas del proyecto
const escenas = [
  {
    nombre: "Ciudad Futurista",
    horasModelado: 20,
    horasRender: 15,
    artistas: 3
  },
  {
    nombre: "Bosque Encantado",
    horasModelado: 10,
    horasRender: 8,
    artistas: 2
  },
  {
    nombre: "Estación Espacial",
    horasModelado: 30,
    horasRender: 25,
    artistas: 4
  },
  {
    nombre: "Interior Moderno",
    horasModelado: 12,
    horasRender: 10,
    artistas: 2
  }
];

// Función para analizar el proyecto
function analizarProyecto(listaEscenas) {

  let costoTotal = 0;

  // Calcular costo de cada escena
  listaEscenas.forEach(escena => {
    escena.costo =
      (escena.horasModelado * 40000) +
      (escena.horasRender * 25000) +
      (escena.artistas * 120000);

    costoTotal += escena.costo;
  });

  // Filtrar escenas con costo mayor a 1,000,000
  const escenasCostosas = listaEscenas.filter(
    escena => escena.costo > 1000000
  );

  // Buscar la escena más costosa
  const escenaMasCostosa = listaEscenas.reduce((mayor, actual) => {
    return actual.costo > mayor.costo ? actual : mayor;
  });

  // Mostrar resultados
  console.log("🎬 Escenas del Proyecto\n");

  listaEscenas.forEach(escena => {
    console.log(`Escena: ${escena.nombre}`);
    console.log(`Costo: Q${escena.costo.toLocaleString()}`);
    console.log("---------------------------");
  });

  console.log("\n💰 Escenas con costo mayor a Q1,000,000\n");

  escenasCostosas.forEach(escena => {
    console.log(`${escena.nombre} - Q${escena.costo.toLocaleString()}`);
  });

  console.log("\n📊 Costo total del proyecto:");
  console.log(`Q${costoTotal.toLocaleString()}`);

  console.log("\n🏆 Escena más costosa:");
  console.log(`${escenaMasCostosa.nombre}`);
  console.log(`Costo: Q${escenaMasCostosa.costo.toLocaleString()}`);
}

// Ejecutar análisis
analizarProyecto(escenas);