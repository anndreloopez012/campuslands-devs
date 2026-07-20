// 1. Crear un arreglo de armas
const armas = [
    {
      nombre: "AK-47",
      tipo: "Rifle",
      municion: 30,
      rareza: "Épica"
    },
    {
      nombre: "M4A1",
      tipo: "Rifle",
      municion: 30,
      rareza: "Rara"
    },
    {
      nombre: "Desert Eagle",
      tipo: "Pistola",
      municion: 7,
      rareza: "Común"
    },
    {
      nombre: "Glock 18",
      tipo: "Pistola",
      municion: 17,
      rareza: "Rara"
    },
    {
      nombre: "AWP",
      tipo: "Francotirador",
      municion: 10,
      rareza: "Épica"
    },
    {
      nombre: "Barrett M82",
      tipo: "Francotirador",
      municion: 30,
      rareza: "Legendaria"
    }
  ];
  
  // 2. Filtrar armas con munición mayor o igual a 30
  const armasConMuchaMunicion = armas.filter(arma => arma.municion >= 30);
  
  console.log("=== Armas con munición >= 30 ===");
  console.table(armasConMuchaMunicion);
  
  // 3. Separar rifles, pistolas y francotiradores
  const rifles = armas.filter(arma => arma.tipo === "Rifle");
  const pistolas = armas.filter(arma => arma.tipo === "Pistola");
  const francotiradores = armas.filter(arma => arma.tipo === "Francotirador");
  
  // 4. Marcar como recomendadas las armas raras o épicas
  const armasRecomendadas = armas.map(arma => ({
    ...arma,
    recomendada: arma.rareza === "Rara" || arma.rareza === "Épica"
  }));
  
  console.log("=== Armas recomendadas ===");
  console.table(armasRecomendadas);
  
  // 5. Imprimir un resumen por tipo
  console.log("=== Resumen por tipo ===");
  console.log(`Rifles: ${rifles.length}`);
  console.log(`Pistolas: ${pistolas.length}`);
  console.log(`Francotiradores: ${francotiradores.length}`);