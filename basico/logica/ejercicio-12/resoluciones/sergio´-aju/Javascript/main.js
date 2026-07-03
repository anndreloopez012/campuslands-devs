const prendas = [
    { nombre: "Camiseta Oversize", talla: "L", stock: 3, ventasSemana: 8 },
    { nombre: "Pantalón Cargo", talla: "M", stock: 10, ventasSemana: 2 }
  ];
  
  prendas.forEach(prenda => {
    let necesitaReposicion = prenda.stock < 5;
    let reposicionSugerida = Math.max(0, (prenda.ventasSemana * 2) - prenda.stock);
    
    console.log(`Prenda: ${prenda.nombre} (Talla: ${prenda.talla})`);
    console.log(`Estado: ${necesitaReposicion ? 'BAJO STOCK' : 'OK'}`);
    console.log(`Reposición sugerida: ${reposicionSugerida}\n`);
  });