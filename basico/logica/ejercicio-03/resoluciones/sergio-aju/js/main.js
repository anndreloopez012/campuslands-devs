const party = [
    { nombre: "Valerius", clase: "Guerrero", nivel: 10, ataque: 30, defensa: 20 },
    { nombre: "Elora", clase: "Maga", nivel: 12, ataque: 35, defensa: 10 },
    { nombre: "Kael", clase: "Arquero", nivel: 5, ataque: 15, defensa: 5 }
  ];
  
  function calcularPoder(p) {
    return (p.nivel * 2) + p.ataque + p.defensa;
  }
  
  function sugerirEntrenamiento(p) {
    return p.ataque < p.defensa ? "Entrenar Ataque" : "Entrenar Defensa";
  }
  
  const partyProcesada = party.map(p => ({
    ...p,
    poderTotal: calcularPoder(p),
    mejora: sugerirEntrenamiento(p)
  }));
  
  const debiles = partyProcesada.filter(p => p.poderTotal < 60);
  
  console.log("--- Reporte de la Party ---");
  console.table(partyProcesada);
  
  console.log("--- Personajes que requieren entrenamiento ---");
  console.table(debiles);