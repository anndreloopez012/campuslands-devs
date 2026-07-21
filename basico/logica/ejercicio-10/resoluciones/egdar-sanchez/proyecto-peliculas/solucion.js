// 1. Definición del listado de películas
const peliculas = [
    { titulo: "El Conjuro", duracionMin: 112, sustos: 18, rating: 7.5 },
    { titulo: "Hereditary", duracionMin: 127, sustos: 12, rating: 7.3 },
    { titulo: "Un Lugar en Silencio", duracionMin: 90, sustos: 15, rating: 7.5 },
    { titulo: "Alien: El octavo pasajero", duracionMin: 117, sustos: 10, rating: 8.5 },
    { titulo: "Scream", duracionMin: 111, sustos: 14, rating: 7.4 },
    { titulo: "La Bruja", duracionMin: 92, sustos: 6, rating: 7.0 },
    { titulo: "Winnie the Pooh: Miel y Sangre", duracionMin: 84, sustos: 20, rating: 2.9 }
  ];
  
  // 2. Filtrar rating mayor o igual a 7.0
  const peliculasCalificadas = peliculas.filter(p => p.rating >= 7.0);
  
  // 3. Acumular películas sin pasar de 360 minutos (6 horas)
  const maraton = [];
  let duracionAcumulada = 0;
  const LIMITE_MINUTOS = 360;
  
  for (const pelicula of peliculasCalificadas) {
    if (duracionAcumulada + pelicula.duracionMin <= LIMITE_MINUTOS) {
      maraton.push(pelicula);
      duracionAcumulada += pelicula.duracionMin;
    }
  }
  
  // 4. Calcular el total de sustos
  const totalSustos = maraton.reduce((acc, p) => acc + p.sustos, 0);
  
  // 5. Mostrar la lista final
  console.log("=== MARATÓN DE NOCHE DE TERROR ===");
  maraton.forEach((p, index) => {
    console.log(`${index + 1}. ${p.titulo} | Rating: ${p.rating} | Duración: ${p.duracionMin} min | Sustos: ${p.sustos}`);
  });
  
  console.log("\n--- RESUMEN DE LA MARATÓN ---");
  const horas = Math.floor(duracionAcumulada / 60);
  const minutos = duracionAcumulada % 60;
  console.log(`Total de películas: ${maraton.length}`);
  console.log(`Duración total: ${duracionAcumulada} min / ${LIMITE_MINUTOS} min (${horas}h ${minutos}m)`);
  console.log(`Total de sustos garantizados: ${totalSustos}`);