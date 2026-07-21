const inventario = [
    { nombre: "Hoodie Oversize", talla: "M", stock: 3, ventasSemana: 8 },
    { nombre: "T-shirt Graphic", talla: "L", stock: 10, ventasSemana: 5 },
    { nombre: "Jogger Cargo", talla: "S", stock: 2, ventasSemana: 6 }
];

console.log("--- Reporte de Reposición (Streetwear) ---");

inventario.forEach(prenda => {
    const bajoStock = prenda.stock < 5;
    const reposicion = Math.max(0, (prenda.ventasSemana * 2) - prenda.stock);

    console.log(`Prenda: ${prenda.nombre} | Talla: ${prenda.talla}`);
    console.log(`Estado: ${bajoStock ? "ALERTA: Bajo stock" : "Stock óptimo"}`);
    console.log(`Reposición sugerida: ${reposicion} unidades`);
    console.log("-----------------------------------------");
});