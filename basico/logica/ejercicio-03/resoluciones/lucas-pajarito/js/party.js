const personajes = [
    {
        name:"Atalanta",
        class:"Mago",
        level:12,
        atack:20,
        defy:12,
    },
    {
        name:"Leonidas",
        class:"Guerrero",
        level:35,
        atack:28,
        defy:18,
    },
    {
        name:"Selene",
        class:"Arquero",
        level:18,
        atack:24,
        defy:10,
    },
    {
        name:"Drako",
        class:"Berserker",
        level:42,
        atack:35,
        defy:8,
    },
    {
        name:"Aurora",
        class:"Sacerdotisa",
        level:15,
        atack:15,
        defy:20,
    },
    {
        name:"Fenrir",
        class:"Paladín",
        level:48,
        atack:22,
        defy:25,
    },
    {
        name:"Orion",
        class:"Cazador",
        level:27,
        atack:26,
        defy:14,
    },
    {
        name:"Nyx",
        class:"Asesino",
        level:39,
        atack:32,
        defy:9,
    },
    {
        name:"Magnus",
        class:"Caballero",
        level:31,
        atack:27,
        defy:22,
    },
    {
        name:"Luna",
        class:"Hechicera",
        level:20,
        atack:23,
        defy:13,
    },
    {
        name:"Ragnar",
        class:"Vikingo",
        level:45,
        atack:34,
        defy:16,
    },
    {
        name:"Kai",
        class:"Monje",
        level:10,
        atack:18,
        defy:19,
    },
    {
        name:"Valeria",
        class:"Bruja",
        level:24,
        atack:25,
        defy:11,
    },
    {
        name:"Titan",
        class:"Defensor",
        level:50,
        atack:19,
        defy:28,
    },
    {
        name:"Ezio",
        class:"Pícaro",
        level:33,
        atack:29,
        defy:12,
    },
    {
        name:"Freya",
        class:"Invocadora",
        level:16,
        atack:21,
        defy:17,
    }
];

personajes.forEach(personaje => {
    personaje.power = (personaje.level * 2) + personaje.atack + personaje.defy;
});

const personajesDebiles = personajes.filter(personaje => personaje.power < 60);

function sugerirEntrenamiento(personaje) {
    if (personaje.atack < personaje.defy) {
        return "Entrenar Ataque";
    } else if (personaje.defy < personaje.atack) {
        return "Entrenar Defensa";
    } else {
        return "Ataque y Defensa están equilibrados";
    }
}

// 4. Mostrar reporte de la party
console.log("===== REPORTE DE LA PARTY =====\n");

personajes.forEach(personaje => {
    console.log(`
Nombre: ${personaje.name}
Clase: ${personaje.class}
Nivel: ${personaje.level}
Ataque: ${personaje.atack}
Defensa: ${personaje.defy}
Poder: ${personaje.power}
Sugerencia: ${sugerirEntrenamiento(personaje)}
-------------------------------------
`);
});

console.log("===== PERSONAJES CON PODER MENOR A 60 =====\n");

if (personajesDebiles.length > 0) {
    personajesDebiles.forEach(personaje => {
        console.log(`${personaje.name} - Poder: ${personaje.power}`);
    });
} else {
    console.log("No hay personajes con poder menor a 60.");
}