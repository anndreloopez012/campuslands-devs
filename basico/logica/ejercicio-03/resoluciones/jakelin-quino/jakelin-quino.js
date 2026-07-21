// Calcula poder de personajes, filtra débiles y sugiere mejoras
// Usamos un array de objetos para guardar nombre, clase, nivel, ataque y defensa
// Poder = nivel*2 + ataque + defensa
// Si poder < 60, mostramos personajes débiles y sugerimos entrenar el atributo menor

const personajes = [
  { nombre: "Aragorn", clase: "Guerrero", nivel: 10, ataque: 25, defensa: 20 },
  { nombre: "Legolas", clase: "Arquero", nivel: 8, ataque: 30, defensa: 12 },
  { nombre: "Gandalf", clase: "Mago", nivel: 12, ataque: 35, defensa: 10 },
  { nombre: "Frodo", clase: "Ladrón", nivel: 5, ataque: 10, defensa: 8 }
];

personajes.forEach(p => {
  p.poder = p.nivel * 2 + p.ataque + p.defensa;
});

const debiles = personajes.filter(p => p.poder < 60);

function sugerirMejora(personaje) {
  if (personaje.ataque < personaje.defensa) {
    return "Entrenar ataque";
  } else if (personaje.defensa < personaje.ataque) {
    return "Entrenar defensa";
  } else {
    return "Entrenar ambos";
  }
}

console.log("=== REPORTE DE LA PARTY ===");
personajes.forEach(p => {
  console.log(`${p.nombre} (${p.clase}) - Poder: ${p.poder}`);
});

console.log("\n=== PERSONAJES DÉBILES ===");
debiles.forEach(p => {
  console.log(`${p.nombre} - Poder: ${p.poder} - Sugerencia: ${sugerirMejora(p)}`);
});