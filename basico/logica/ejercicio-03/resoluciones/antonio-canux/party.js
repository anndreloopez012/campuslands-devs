const party = [
    {nombre: "Depreda", clase: "Guerrero", nivel: 15, ataque: 20, defensa: 18},
    {nombre: "Tut", clase: "Arquera", nivel: 10, ataque: 15, defensa: 12},
    {nombre: "Leshen", clase: "Mago", nivel: 18, ataque: 22, defensa: 13}
]

function calcularPoder(personaje) {
    return personaje.nivel * 2 + personaje.ataque + personaje.defensa
}

function sugerirMejora(personaje) {
    if (personaje.ataque < personaje.defensa) {
        return "Entrenar ataque";
    }
    if (personaje.defensa < personaje.ataque) {
        return "Entrenar defensa";
    }
    return "Entrenar cualquiera";
}

const debiles = party.filter(
    personaje => calcularPoder(personaje) < 60
)

party.forEach(personaje => {
    const poder = calcularPoder(personaje);

    console.log("Nombre:", personaje.nombre);
    console.log("Clase:", personaje.clase);
    console.log("Poder:", poder);

    if (poder < 60) {
        console.log("Estado: Débil");
        console.log("Sugerencia:", sugerirMejora(personaje));
    } else {
        console.log("Estado: Listo para la mazmorra");
    }

    console.log("----------------");
})