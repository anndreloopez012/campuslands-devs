const inventario = [
    { nombre: "AK-47", tipo: "Rifle", municion: 45, rareza: "Epica" },
    { nombre: "Glock", tipo: "Pistola", municion: 15, rareza: "Comun" },
    { nombre: "AWP", tipo: "Francotirador", municion: 10, rareza: "Legendaria" },
    { nombre: "M4A1", tipo: "Rifle", municion: 30, rareza: "Rara" },
    { nombre: "Desert Eagle", tipo: "Pistola", municion: 35, rareza: "Epica" }
  ];
  
  function procesarInventario(armas) {
    const armasListas = armas.filter(arma => arma.municion >= 30);
    armasListas.forEach(arma => {
      arma.esRecomendada = ["Epica", "Legendaria", "Rara"].includes(arma.rareza);
    });
    return armasListas;
  }
  const resultado = procesarInventario(inventario);
  console.log("--- Reporte de Cargas de Combate ---");
  console.table(resultado);