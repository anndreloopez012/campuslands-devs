# Ejercicio - 03
## Henrik Anderson Oloroso García

``` javascript
const party = [
  { nombre: "Arthas", clase: "Guerrero", nivel: 15, ataque: 25, defensa: 18 },
  { nombre: "Jaina", clase: "Maga", nivel: 14, ataque: 35, defensa: 8 },
  { nombre: "Uther", clase: "Paladín", nivel: 18, ataque: 20, defensa: 25 },
  { nombre: "Valeera", clase: "Pícaro", nivel: 10, ataque: 22, defensa: 10 },
  { nombre: "Anduin", clase: "Sacerdote", nivel: 8, ataque: 12, defensa: 14 }
];

function calcularPoder(personaje) {
  return (personaje.nivel * 2) + personaje.ataque + personaje.defensa;
}

function sugerirEntrenamiento(personaje) {
  if (personaje.ataque < personaje.defensa) {
    return "Entrenar ATAQUE";
  } else if (personaje.defensa < personaje.ataque) {
    return "Entrenar DEFENSA";
  } else {
    return "Entrenar AMBOS (ataque y defensa están equilibrados)";
  }
}

function generarReporteParty(listaPersonajes) {
  console.log(" REPORTE DE PREPARACIÓN PARA LA MAZMONRA ");

  let poderTotalParty = 0;
  const personajesDebiles = [];

  listaPersonajes.forEach(personaje => {
    const poder = calcularPoder(personaje);
    poderTotalParty += poder;

    console.log(`- [${personaje.clase}] ${personaje.nombre} | Nivel: ${personaje.nivel} | Poder Total: ${poder}`);
    if (poder < 60) {
      personajesDebiles.push({
        ...personaje,
        poderActual: poder
      });
    }
  });

  console.log(` PODER ACUMULADO DE LA PARTY: ${poderTotalParty}`);

  console.log("\n DETECCIÓN DE PERSONAJES DÉBILES (Poder < 60):");
  if (personajesDebiles.length === 0) {
    console.log("¡Excelente! Todos los miembros están listos para la mazmorra.");
  } else {
    personajesDebiles.forEach(debile => {
      const sugerencia = sugerirEntrenamiento(debile);
      console.log(` ${debile.nombre} (Poder: ${debile.poderActual}) -> Sugerencia: ${sugerencia}`);
    });
  }
}

generarReporteParty(party);

```

## Explicacion:
Segui detalladamente las instrucciones para la resolucion, y el codigo es el resultado, que esta mas detallado, listo para ejecutar.