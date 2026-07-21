const prendas = [
  { nombre: "Camiseta Oversize", talla: "M", stock: 3, ventasSemana: 10 },
  { nombre: "Hoodie Urbano", talla: "L", stock: 2, ventasSemana: 6 },
  { nombre: "Pantalón Cargo", talla: "S", stock: 8, ventasSemana: 4 },
  { nombre: "Gorra Snapback", talla: "Única", stock: 1, ventasSemana: 5 }
];

for (let i = 0; i < prendas.length; i++) {
  let p = prendas[i];
  
  if (p.stock < 5) {
    p.bajoStock = true;
  } else {
    p.bajoStock = false;
  }

  let calculoReposicion = (p.ventasSemana * 2) - p.stock;

  if (calculoReposicion > 0) {
    p.reposicion = calculoReposicion;
  } else {
    p.reposicion = 0;
  }
}

console.log("--- REPORTE DE STOCK Y REPOSICIÓN ---");
for (let i = 0; i < prendas.length; i++) {
  let p = prendas[i];
  console.log("Prenda: " + p.nombre + " | Talla: " + p.talla + " | Stock: " + p.stock + " | Bajo Stock: " + p.bajoStock + " | Reposición sugerida: " + p.reposicion);
}