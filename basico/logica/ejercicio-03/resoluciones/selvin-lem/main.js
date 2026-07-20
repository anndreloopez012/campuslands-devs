const escuadraAventureros = [
    { nombre: "Eldrin", clase: "Mago", nivel: 12, ataque: 35, defensa: 10 },
    { nombre: "Valeria", clase: "Guerrera", nivel: 15, ataque: 20, defensa: 45 },
    { nombre: "Pip", clase: "Pícaro", nivel: 5, ataque: 12, defensa: 8 }, 
    { nombre: "Kael", clase: "Paladín", nivel: 0, ataque: 0, defensa: 0 } 
];

const PODER_MINIMO_REQUERIDO = 60;

function calcularPoderTotal(personaje) {
    if (!personaje || personaje.nivel < 0 || personaje.ataque < 0 || personaje.defensa < 0) {
        return 0;
    }
    
    const poderCombate = (personaje.nivel * 2) + personaje.ataque + personaje.defensa;
    return poderCombate;
}

function sugerirMejoraEntrenamiento(personaje) {
    if (personaje.ataque === personaje.defensa) {
        return "Entrenar balanceado (Ataque y Defensa por igual)";
    }
    
    if (personaje.ataque < personaje.defensa) {
        return "Entrenar en el campo de tiro (Potenciar Ataque)";
    } else {
        return "Entrenar con escudo pesado (Potenciar Defensa)";
    }
}

function generarReporteMazmora(party) {
    console.log("==================================================");
    console.log("    REPORTE ESTRATÉGICO: PREPARACIÓN DE PARTY     ");
    console.log("==================================================\n");

    const personajesDebiles = [];

    party.forEach((aventurero) => {
        const poderTotal = calcularPoderTotal(aventurero);
        const estadoSupervivencia = poderTotal >= PODER_MINIMO_REQUERIDO ? "APTO " : "PELIGRO DEBILIDAD ";

        console.log(`Héroe: ${aventurero.nombre} | Clase: ${aventurero.clase}`);
        console.log(`- Poder de Combate: ${poderTotal} pts [${estadoSupervivencia}]`);
        console.log(`- Atributos base -> Nivel: ${aventurero.nivel} | Ataque: ${aventurero.ataque} | Defensa: ${aventurero.defensa}`);
        console.log("--------------------------------------------------");

        // Clasifica y filtra personajes con poder menor a 60
        if (poderTotal < PODER_MINIMO_REQUERIDO) {
            personajesDebiles.push({
                ...aventurero,
                poderActual: poderTotal
            });
        }
    });
    console.log("\n==================================================");
    console.log("         ALERTAS DEL GREMIO DE AVENTUREROS        ");
    console.log("==================================================");

    if (personajesDebiles.length === 0) {
        console.log("¡Excelente! Toda la party está lista para la mazmorra.");
    } else {
        console.log(`¡Atención! Se detectaron ${personajesDebiles.length} personajes débiles para este nivel:\n`);
        
        personajesDebiles.forEach((debil) => {
            const recomendacion = sugerirMejoraEntrenamiento(debil);
            console.log(` ALERTA: ${debil.nombre} (Poder: ${debil.poderActual} de ${PODER_MINIMO_REQUERIDO} requeridos)`);
            console.log(`Sugerencia del instructor: ${recomendacion}\n`);
        });
    }
    console.log("==================================================");
}

generarReporteMazmora(escuadraAventureros);