// Estudiante: Daniel Borja
// Ejercicio: Gestor de personajes RPG

// 1. Definición de la party inicial
const partyPersonajes = [
    { nombre: "Gandalf", clase: "Mago", nivel: 12, ataque: 35, defensa: 10 }, // Caso Ejemplo README: Poder 69
    { nombre: "Aragorn", clase: "Guerrero", nivel: 15, ataque: 40, defensa: 30 }, // Poder 100
    { nombre: "Legolas", clase: "Arquero", nivel: 5, ataque: 15, defensa: 12 },   // Caso Débil: Poder 37
    { nombre: "Gimli", clase: "Paladín", nivel: 6, ataque: 10, defensa: 35 },     // Caso Débil: Poder 57
    { nombre: "Frodo", clase: "Pícaro", nivel: 1, ataque: 5, defensa: 5 }         // Caso Límite Crítico: Poder 12
];

// 4. Función encargada de evaluar y sugerir mejoras de entrenamiento
function sugerirMejora(personaje) {
    if (personaje.ataque < personaje.defensa) {
        return "Entrenar Ataque (Mejor balance ofensivo)";
    } else if (personaje.defensa < personaje.ataque) {
        return "Entrenar Defensa (Mejor mitigación de daño)";
    } else {
        return "Entrenamiento equilibrado (Atributos iguales)";
    }
}

// 5. Función principal para calcular estadísticas y mostrar el reporte
function gestionarParty(personajes) {
    // Cláusula de guarda para validar datos vacíos o nulos
    if (!personajes || personajes.length === 0) {
        console.log("Error: La party se encuentra vacía. No hay héroes listos.");
        return;
    }

    console.log("=== ANALIZANDO ESTADO DE LA PARTY ANTES DE LA MAZMORRA ===");
    
    const personajesDebiles = [];

    personajes.forEach(personaje => {
        // 2. Aplicar fórmula matemática exacta: Poder = nivel * 2 + ataque + defensa
        const poderTotal = (personaje.nivel * 2) + personaje.ataque + personaje.defensa;
        
        console.log(`-> ${personaje.nombre} (${personaje.clase}) - Poder Total: ${poderTotal}`);

        // 3. Filtrar personajes con poder menor a 60
        if (poderTotal < 60) {
            personajesDebiles.push({
                nombre: personaje.nombre,
                poder: poderTotal,
                sugerencia: sugerirMejora(personaje)
            });
        }
    });

    // Mostrar reporte final de personajes en peligro
    console.log("\n=========================================================");
    console.log("ALERTA: REPORTE DE PERSONAJES DÉBILES (PODER < 60) ⚠️");
    console.log("=========================================================");
    
    if (personajesDebiles.length === 0) {
        console.log("¡Excelente! Todos los miembros de la party están listos para la mazmorra.");
    } else {
        console.table(personajesDebiles);
    }
}

// Inicializar el sistema del gestor RPG
gestionarParty(partyPersonajes);