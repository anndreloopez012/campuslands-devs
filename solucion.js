/**
 * EJERCICIO 02: Inventario Táctico de Shooter
 * Desarrollador: Gemini Code Assist
 * 
 * Objetivo: Filtrar, categorizar y recomendar armas basadas en munición y rareza.
 */

// 1. Creación del arreglo de armas con datos iniciales
const inventarioBase = [
    { nombre: "AK-47", tipo: "rifle", municion: 30, rareza: "épica" },
    { nombre: "Glock-18", tipo: "pistola", municion: 20, rareza: "común" },
    { nombre: "AWP", tipo: "francotirador", municion: 5, rareza: "legendaria" },
    { nombre: "M4A4", tipo: "rifle", municion: 30, rareza: "rara" },
    { nombre: "Deagle", tipo: "pistola", municion: 35, rareza: "épica" },
    { nombre: "Barrett M82", tipo: "francotirador", municion: 40, rareza: "rara" },
    { nombre: "MP5", tipo: "subfusil", municion: 45, rareza: "común" },
    { nombre: "Scar-H", tipo: "rifle", municion: 25, rareza: "épica" }
];

/**
 * Procesa el inventario siguiendo las reglas de negocio:
 * - Filtra por munición mínima (30)
 * - Identifica armas recomendadas (Raras o Épicas)
 * - Clasifica por tipo
 */
function procesarInventario(armas) {
    // 2. Filtrar armas con munición >= 30 y 4. Marcar recomendadas
    // Usamos .map después del filtro para no mutar el objeto original (Inmutabilidad)
    const armasFiltradas = armas
        .filter(arma => arma.municion >= 30)
        .map(arma => ({
            ...arma,
            recomendada: ["rara", "épica"].includes(arma.rareza.toLowerCase())
        }));

    // 3. Separar rifles, pistolas y francotiradores
    // Usamos reduce para crear un diccionario categorizado de forma eficiente
    const categoriasValidas = ["rifle", "pistola", "francotirador"];
    
    const resumen = armasFiltradas.reduce((acc, arma) => {
        const tipo = arma.tipo.toLowerCase();
        
        // Solo agrupamos si el tipo está dentro de los requeridos
        if (categoriasValidas.includes(tipo)) {
            if (!acc[tipo]) acc[tipo] = [];
            acc[tipo].push(arma);
        }
        return acc;
    }, {});

    return resumen;
}

// 5. Imprimir resumen por tipo
function imprimirResumen(inventarioProcesado) {
    console.log("=== RECOMENDACIÓN DE CARGA DE COMBATE ===");
    
    for (const tipo in inventarioProcesado) {
        console.log(`\n> CATEGORÍA: ${tipo.toUpperCase()}`);
        
        if (inventarioProcesado[tipo].length === 0) {
            console.log("  No hay armas disponibles que cumplan los requisitos.");
            continue;
        }

        inventarioProcesado[tipo].forEach(arma => {
            const estrella = arma.recomendada ? "[★ RECOMENDADA ★]" : "";
            console.log(`  - ${arma.nombre} | Munición: ${arma.municion} | Rareza: ${arma.rareza} ${estrella}`);
        });
    }
}

// Ejecución de la lógica
try {
    const resultado = procesarInventario(inventarioBase);
    imprimirResumen(resultado);
} catch (error) {
    console.error("Error al procesar el inventario:", error.message);
}