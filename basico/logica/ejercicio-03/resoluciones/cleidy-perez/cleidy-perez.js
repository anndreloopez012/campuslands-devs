const personajes =[
    {
        nombre: "Juan",
        clase: "Epico",
        nivel: 10,
        ataque: 20,
        defensa: 15

    },
    {
        nombre: "María",
        clase: "Medio",
        nivel: 9,
        ataque: 28,
        defensa: 30

    },
]

function calcularPoder(){
    const poderes = personajes.map(personaje => ({
        ...personaje,
        poder : personaje.nivel* 2+ personaje.ataque+personaje.defensa
        
    }));

    const entrenamiento = poderes.filter(
        personaje => personaje.poder< 60
    );
    
}

function sugerirEntrenamiento(personaje){
    if (personaje.ataque < personaje.defensa){
        return "Entrenar ataque";

    }else if (personaje.defensa < personaje.ataque){
        return "Entrenar defensa";

    }else {
        return "Ataque y defensa están equlibrados";
    }
}

console.log("Reporte de la party");

poderes.forEach (personaje =>{
    console.log(`
        Nombre: ${personaje.nombre};
        Clase: ${personaje.clase}
        Nivel: ${personaje.nivel}
        Ataque: ${personaje.ataque}
        Defensa: ${personaje.defensa}
        Poder: ${personaje.poder}
        Sugerencia: ${sugerirEntrenamiento(personaje)}
`
)
});

console.log("Personaje que necesitan entrenamiento");

entrenamiento.forEach(personaje=>{
      console.log(
        `${personaje.nombre} (${personaje.clase}) - Poder: ${personaje.poder}`
    );
})