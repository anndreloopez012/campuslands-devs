
const party = [
    { nombre: "Aragorn", clase: "Guerrero", nivel: 12, ataque: 25, defensa: 20 },
    { nombre: "Gandalf", clase: "Mago", nivel: 15, ataque: 35, defensa: 10 },
    { nombre: "Legolas", clase: "Arquero", nivel: 11, ataque: 22, defensa: 15 },
    { nombre: "Gimli", clase: "Paladín", nivel: 10, ataque: 15, defensa: 28 },
    { nombre: "Frodo", clase: "Pícaro", nivel: 5, ataque: 8, defensa: 12 }
];



/*
 Calcula el poder total de un personaje basado en la fórmula:
 Poder = (Nivel * 2) + Ataque + Defensa
 */
function calcularPoder(personaje) {
    return (personaje.nivel * 2) + personaje.ataque + personaje.defensa;
}

/*
  Evalúa las estadísticas actuales y sugiere qué atributo entrenar.
  Recomienda subir el valor que sea estrictamente menor.
 */
function sugerirMejora(personaje) {
    if (personaje.ataque < personaje.defensa) {
        return "Entrenar Ataque (+5)";
    } else if (personaje.defensa < personaje.ataque) {
        return "Entrenar Defensa (+5)";
    } else {
        return "Entrenamiento Balanceado (Ataque/Defensa)";
    }
}

// 3. GENERACIÓN DEL REPORTE

function generarReporteParty(listaPersonajes) {
    console.log("==================================================");
    console.log("  REPORTE DE PREPARACIÓN PARA LA MAZORRA ");
    console.log("==================================================\n");

    const personajesDebiles = [];
    const personajesListos = [];

    listaPersonajes.forEach(personaje => {
        const poderTotal = calcularPoder(personaje);
        
        // Creamos un objeto con la información extendida para el reporte
        const estadoPersonaje = {
            ...personaje,
            poder: poderTotal
        };

        // 3. Filtrar personajes con poder menor a 60 (Detección de riesgo)
        if (poderTotal < 60) {
            // 4. Si es débil, calculamos su sugerencia de mejora
            estadoPersonaje.sugerencia = sugerirMejora(personaje);
            personajesDebiles.push(estadoPersonaje);
        } else {
            personajesListos.push(estadoPersonaje);
        }
    });

    // 5. Imprimir el resumen en consola de manera ordenada
    console.log("PERSONAJES LISTOS (Poder ≥ 60):");
    if (personajesListos.length === 0) console.log("   Ninguno");
    personajesListos.forEach(p => {
        console.log(`   • [${p.clase}] ${p.nombre} | Poder: ${p.poder} (Nivel: ${p.nivel})`);
    });

    console.log("\n  PERSONAJES EN RIESGO (Poder < 60):");
    if (personajesDebiles.length === 0) console.log("   ¡Ninguno! La party está completamente lista.");
    personajesDebiles.forEach(p => {
        console.log(`   • [${p.clase}] ${p.nombre} | Poder Actual: ${p.poder}`);
        console.log(`  ACCIÓN SUGERIDA: ${p.sugerencia}`);
    });
    
    console.log("\n==================================================");
}

// Ejecutar el sistema
generarReporteParty(party);