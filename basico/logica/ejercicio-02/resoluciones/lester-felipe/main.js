console.log("Hola mundo");
const inventarioArmas = [
    { nombre: "AK-47", tipo: "rifle", municion: 30, rareza: "común" },
    { nombre: "M4A1", tipo: "rifle", municion: 30, rareza: "épica" },
    { nombre: "Glock 19", tipo: "pistola", municion: 15, rareza: "común" },
    { nombre: "Desert Eagle", tipo: "pistola", municion: 7, rareza: "rara" },
    { nombre: "AWP", tipo: "francotirador", municion: 5, rareza: "legendaria" },
    { nombre: "Barrett .50", tipo: "francotirador", municion: 10, rareza: "épica" },
    { nombre: "P90", tipo: "rifle", municion: 50, rareza: "rara" },
    { nombre: "Usp-S", tipo: "pistola", municion: 12, rareza: "común" }
];

function procesarCargaCombate(armas) {
    // Estructura para separar por tipo según el requerimiento 3 y 5
    const resumen = {
        rifles: [],
        pistolas: [],
        francotiradores: []
    };

    armas.forEach(arma => {
        //filtrar armas con munición suficiente para ranked
        
        const pasaFiltroMunicion = arma.municion >= 30;
        
        // REQUISITO 4: Marcar como recomendadas si son 'rara' o 'épica'
        const esRecomendada = arma.rareza === "rara" || arma.rareza === "épica";

        // Creamos la copia del objeto con el nuevo atributo analizado
        const armaAnalizada = {
            ...arma,
            recomendada: esRecomendada
        };

        // REQUISITO 3: Clasificar y separar por tipo
        if (arma.tipo === "rifle" && pasaFiltroMunicion) {
            resumen.rifles.push(armaAnalizada);
        } else if (arma.tipo === "pistola") {
            // Las pistolas no suelen llegar a 30 balas, las incluimos por utilidad de respaldo
            resumen.pistolas.push(armaAnalizada);
        } else if (arma.tipo === "francotirador") {
            // Un francotirador con 30 balas sería un error de balanceo, se evalúa por su impacto
            resumen.francotiradores.push(armaAnalizada);
        }
    });

    return resumen;
}

function mostrarReporteRanked(resumen) {
    console.log("=== REPORTE DE CARGA PARA RANKED ===");
    
    for (const tipo in resumen) {
        console.log(`\n🔹 CATEGORÍA: ${tipo.toUpperCase()}`);
        if (resumen[tipo].length === 0) {
            console.log("   Ninguna arma disponible para esta categoría.");
            continue;
        }
        
        resumen[tipo].forEach(arma => {
            const tagRecomendado = arma.recomendada ? "⭐ [RECOMENDADA]" : "";
            console.log(`   - ${arma.nombre} | Munición: ${arma.municion} | Rareza: ${arma.rareza} ${tagRecomendado}`);
        });
    }
    console.log("\n====================================");
}

// Ejecución del programa
const arsenalProcesado = procesarCargaCombate(inventarioArmas);
mostrarReporteRanked(arsenalProcesado);