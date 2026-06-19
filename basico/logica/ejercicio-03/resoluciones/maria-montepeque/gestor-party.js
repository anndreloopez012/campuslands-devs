// Ejercicio 03 - Gestor de personajes RPG
// Maria Montepeque

const party = [
  { nombre: "Aldric",   clase: "Guerrero", nivel: 10, ataque: 40, defensa: 30 },
  { nombre: "Lyra",     clase: "Maga",     nivel: 12, ataque: 35, defensa: 10 },
  { nombre: "Finn",     clase: "Arquero",  nivel:  4, ataque: 18, defensa: 12 },
  { nombre: "Sera",     clase: "Clérigo",  nivel:  5, ataque: 10, defensa: 20 },
  { nombre: "Kael",     clase: "Asesino",  nivel:  3, ataque: 14, defensa:  8 },
];

// Paso 2: calcular poder de cada personaje
function calcularPoder(personaje) {
  return personaje.nivel * 2 + personaje.ataque + personaje.defensa;
}

// Paso 3: filtrar personajes débiles (poder < 60)
function esDebil(personaje) {
  return calcularPoder(personaje) < 60;
}

// Paso 4: sugerir qué estadística entrenar
function sugerirMejora(personaje) {
  if (personaje.ataque <= personaje.defensa) {
    return "Entrenar ATAQUE";
  }
  return "Entrenar DEFENSA";
}

// Paso 5: mostrar reporte
function mostrarReporte(party) {
  console.log("===========================================");
  console.log("        REPORTE DE LA PARTY RPG           ");
  console.log("===========================================\n");

  const debiles = party.filter(esDebil);

  party.forEach((personaje) => {
    const poder = calcularPoder(personaje);
    const estado = poder >= 60 ? "✅ Listo" : "⚠️  Débil";

    console.log(`${personaje.nombre} (${personaje.clase})`);
    console.log(`  Nivel: ${personaje.nivel} | ATK: ${personaje.ataque} | DEF: ${personaje.defensa}`);
    console.log(`  Poder total: ${poder} → ${estado}`);

    if (poder < 60) {
      console.log(`  Sugerencia: ${sugerirMejora(personaje)}`);
    }
    console.log("");
  });

  console.log("-------------------------------------------");
  console.log(`Total de personajes: ${party.length}`);
  console.log(`Listos para la mazmorra: ${party.length - debiles.length}`);
  console.log(`Necesitan entrenamiento: ${debiles.length}`);
  console.log("===========================================");
}

mostrarReporte(party);
