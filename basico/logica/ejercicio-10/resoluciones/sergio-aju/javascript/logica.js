const catalogo = [
    { titulo: "SustoEnLaOscuridad", duracionMin: 100, sustos: 5, rating: 8.5 },
    { titulo: "NocheEterna", duracionMin: 120, sustos: 8, rating: 6.0 }, // Debe filtrarse
    { titulo: "ElSusurro", duracionMin: 90, sustos: 4, rating: 7.5 },
    { titulo: "AtaqueFantasma", duracionMin: 150, sustos: 10, rating: 9.0 },
    { titulo: "MiedoReal", duracionMin: 110, sustos: 6, rating: 7.2 }
  ];
  
  const LIMITE_TIEMPO_MINUTOS = 360;
  
  const peliculasAptas = catalogo.filter(p => p.rating >= 7);
  
  const maraton = [];
  let tiempoAcumulado = 0;
  let totalSustos = 0;
  
  for (const pelicula of peliculasAptas) {
    if (tiempoAcumulado + pelicula.duracionMin <= LIMITE_TIEMPO_MINUTOS) {
      maraton.push(pelicula);
      tiempoAcumulado += pelicula.duracionMin;
      totalSustos += pelicula.sustos;
    }
  }
  
  console.log("Maratón organizada:", maraton);
  console.log(`Duración total: ${tiempoAcumulado} minutos`);
  console.log(`Total de sustos: ${totalSustos}`);