/**
 * GESTOR DE PERSONAJES RPG
 * Solución al desafío de preparación para la mazmorra.
 */

// 1. Definición del arreglo de personajes de la party
const personajesParty = [
    { nombre: "Eldrin", clase: "Mago", nivel: 12, ataque: 35, defensa: 10 }, // Caso de Ejemplo del enunciado
    { nombre: "Grom", clase: "Guerrero", nivel: 15, ataque: 18, defensa: 30 },
    { nombre: "Lyra", clase: "Pícaro", nivel: 8, ataque: 20, defensa: 8 },    // Caso Normal: Personaje débil (< 60 poder)
    { nombre: "Zephyr", clase: "Clérigo", nivel: 1, ataque: 0, defensa: 0 }    // Caso Límite: Valores en cero o nivel inicial
];

/**
 * 2. Calcula el poder total de un personaje según la fórmula dada:
 * Poder = Nivel * 2 + Ataque + Defensa
 */
function calcularPoder(personaje) {
    return (personaje.nivel * 2) + personaje.ataque + personaje.defensa;
}

/**
 * 4. Función que sugiere entrenar el atributo con menor valor (ataque o defensa).
 * Si son iguales, sugiere balancear ambos.
 */
function sugerirMejora(personaje) {
    if (personaje.ataque < personaje.defensa) {
        return "Entrenar Ataque (+ por debajo de la defensa)";
    } else if (personaje.defensa < personaje.ataque) {
        return "Entrenar Defensa (+ por debajo del ataque)";
    } else {
        return "Entrenamiento balanceado (Ataque y Defensa son iguales)";
    }
}

/**
 * 5. Genera y muestra el reporte completo de la party antes de entrar a la mazmorra.
 */
function generarReporteParty(party) {
    console.log("==================================================");
    console.log("      REPORTE DE LA PARTY - PRE-MAZMONRA         ");
    console.log("==================================================\n");

    const personajesDebiles = [];

    party.forEach(personaje => {
        const poderTotal = calcularPoder(personaje);
        
        console.log(`• [${personaje.clase}] ${personaje.nombre}`);
        console.log(`  Nivel: ${personaje.nivel} | Ataque: ${personaje.ataque} | Defensa: ${personaje.defensa}`);
        console.log(`  Poder Total: ${poderTotal}`);

        // 3. Filtrar personajes con poder menor a 60
        if (poderTotal < 60) {
            const sugerencia = sugerirMejora(personaje);
            personajesDebiles.push({
                nombre: personaje.nombre,
                poder: poderTotal,
                sugerencia: sugerencia
            });
            console.log(`  ⚠️ ESTADO: ¡DÉBIL PARA LA MAZMORRA!`);
        } else {
            console.log(`  ✅ ESTADO: Listo para el combate`);
        }
        console.log("--------------------------------------------------");
    });

    // Mostrar sección resumen de alertas de peligro
    console.log("\n==================================================");
    console.log("    RESUMEN DE ALERTA: PERSONAJES DÉBILES (<60)   ");
    console.log("==================================================");
    
    if (personajesDebiles.length === 0) {
        console.log("¡Excelente! Todos los personajes tienen el poder suficiente.");
    } else {
        personajesDebiles.forEach(debil => {
            console.log(`❌ ${debil.nombre} (Poder: ${debil.poder})`);
            console.log(`   💡 Sugerencia: ${debil.sugerencia}`);
        });
    }
    console.log("==================================================");
}
generarReporteParty(personajesParty);