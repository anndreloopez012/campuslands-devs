const Personajes = [
  { Nombre: "Kakot", Clase: "Mago", Nivel: 20, Ataque: 10, Defensa: 30 },
  { Nombre: "Eldrin", Clase: "Guerrero", Nivel: 12, Ataque: 10, Defensa: 20 },
  { Nombre: "Lyra", Clase: "Pícaro", Nivel: 28, Ataque: 125, Defensa: 85 },
  { Nombre: "Valeria", Clase: "Paladín", Nivel: 35, Ataque: 120, Defensa: 160 }
];


Personajes.forEach((personaje) => {
  personaje.Poder = personaje.Nivel * 2 + personaje.Ataque + personaje.Defensa
  
})

let personajedebil = Personajes.filter(p  => p.Poder < 60)
let personajefuerte = Personajes.filter(p => p.Poder >= 60)

 console.log("====REPORTE PERSONAJE=====")
console.log("Este personaje necesita entrenamiento", personajedebil)
console.log("Estos son los personajes Fuertes", personajefuerte)
console.log("  ")

