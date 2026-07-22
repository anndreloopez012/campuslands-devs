const inventarioEscenas = [
  { nombre: "Batalla Inicial", horasModelado: 12, horasRender: 24, artistas: 3 },
  { nombre: "Primer Plano Personaje", horasModelado: 4, horasRender: 8, artistas: 1 },
  { nombre: "Persecución en la Ciudad", horasModelado: 20, horasRender: 48, artistas: 4 },
  { nombre: "Créditos Finales", horasModelado: 2, horasRender: 4, artistas: 1 },
  { nombre: "Transformación Épica", horasModelado: 15, horasRender: 36, artistas: 3 }
];

const procesarCostosAnimacion = (escenas) => {
  const escenasConCosto = escenas.map(escena => {
    const costoTotal = (escena.horasModelado * 40000) + 
                       (escena.horasRender * 25000) + 
                       (escena.artistas * 120000);
    return {
      ...escena,
      costo: costoTotal
    };
  });

  const escenasCostosas = escenasConCosto.filter(escena => escena.costo > 1000000);

  const costoTotalProyecto = escenasConCosto.reduce((acumulador, escena) => acumulador + escena.costo, 0);

  const escenaMasCostosa = escenasConCosto.reduce((max, escena) => escena.costo > max.costo ? escena : max, escenasConCosto[0]);

  return {
    escenasConCosto,
    escenasCostosas,
    costoTotalProyecto,
    escenaMasCostosa
  };
};

const generarReporteEstudio = () => {
  const resultado = procesarCostosAnimacion(inventarioEscenas);

  console.log("--- REPORTE GENERAL DE COSTOS ---");
  resultado.escenasConCosto.forEach(escena => {
    console.log(`Escena: ${escena.nombre} | Costo total: $${escena.costo.toLocaleString()}`);
  });

  console.log("\n--- ALERTAS: ESCENAS QUE SUPERAN EL $1,000,000 ---");
  if (resultado.escenasCostosas.length === 0) {
    console.log("No hay escenas que superen el límite establecido.");
  } else {
    resultado.escenasCostosas.forEach(escena => {
      console.log(`⚠️ Alta Inversión -> Escena: ${escena.nombre} | Costo: $${escena.costo.toLocaleString()}`);
    });
  }

  console.log("\n--- RESUMEN FINANCIERO DEL PROYECTO ---");
  console.log(`Costo total presupuestado: $${resultado.costoTotalProyecto.toLocaleString()}`);
  console.log(`Escena con mayor impacto económico: "${resultado.escenaMasCostosa.nombre}" ($${resultado.escenaMasCostosa.costo.toLocaleString()})`);
};

generarReporteEstudio();