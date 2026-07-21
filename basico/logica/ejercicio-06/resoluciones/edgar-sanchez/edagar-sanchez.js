function analizarMotos(motos) {
    const filtradas = motos
      .filter((m) => m.mantenimientoMensual < 500000)
      .map((m) => ({ ...m, relacion: m.hp / m.pesoKg }));
  
    if (filtradas.length === 0) {
      console.log(
        "No hay motos que cumplan con el criterio de mantenimiento."
      );
      return;
    }
  
    const pista = filtradas.reduce((prev, curr) =>
      curr.relacion > prev.relacion ? curr : prev
    );
  
    const economica = filtradas.reduce((prev, curr) =>
      curr.mantenimientoMensual < prev.mantenimientoMensual ? curr : prev
    );
  
    console.log("=== RESULTADOS DE SELECCIÓN ===");
    console.log(
      `Mejor opción para pista: ${pista.marca} ${pista.modelo} (Relación HP/Kg: ${pista.relacion.toFixed(2)})`
    );
    console.log(
      `Mejor opción económica: ${economica.marca} ${economica.modelo} (Mantenimiento: $${economica.mantenimientoMensual})`
    );
  }
  
  const datos = [
    {
      marca: "Yamaha",
      modelo: "R6",
      hp: 118,
      pesoKg: 190,
      mantenimientoMensual: 450000,
    },
    {
      marca: "Kawasaki",
      modelo: "Ninja 400",
      hp: 45,
      pesoKg: 168,
      mantenimientoMensual: 250000,
    },
    {
      marca: "Ducati",
      modelo: "Panigale V4",
      hp: 214,
      pesoKg: 175,
      mantenimientoMensual: 800000,
    },
    {
      marca: "Suzuki",
      modelo: "GSX-R750",
      hp: 150,
      pesoKg: 190,
      mantenimientoMensual: 480000,
    },
  ];
  
  analizarMotos(datos);