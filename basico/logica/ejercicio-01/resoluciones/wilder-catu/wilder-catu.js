const escuadras = [
    {
      nombre: "Shadow Hunters",
      bajas: 8,
      posicion: 1,
      revividos: 3
    },
    {
      nombre: "Night Wolves",
      bajas: 5,
      posicion: 2,
      revividos: 2
    },
    {
      nombre: "Fire Squad",
      bajas: 6,
      posicion: 3,
      revividos: 1
    },
    {
      nombre: "Dark Ravens",
      bajas: 4,
      posicion: 5,
      revividos: 4
    }
  ];
  
  // 2. Funcion para calcular puntos segun la posicion
  function calcularPuntos(escuadra) {
    let puntosPosicion = 0;
  
    if (escuadra.posicion === 1) {
      puntosPosicion = 20;
    } else if (escuadra.posicion === 2) {
      puntosPosicion = 14;
    } else if (escuadra.posicion === 3) {
      puntosPosicion = 10;
    } else {
      puntosPosicion = 4;
    }
  
    // Puntos totales
    return (escuadra.bajas * 3) + puntosPosicion;
  }
  
  // 3. Agregar puntos a cada escuadra
  escuadras.forEach(escuadra => {
    escuadra.puntos = calcularPuntos(escuadra);
  });
  
  // 4. Ordenar de mayor a menor puntaje
  escuadras.sort((a, b) => b.puntos - a.puntos);
  
  // 5. Mostrar ranking
  console.log("===== RANKING FINAL =====");
  
  escuadras.forEach((escuadra, index) => {
    console.log(
      `${index + 1}. ${escuadra.nombre} | Posición: ${escuadra.posicion} | Puntos: ${escuadra.puntos}`
    );
  });