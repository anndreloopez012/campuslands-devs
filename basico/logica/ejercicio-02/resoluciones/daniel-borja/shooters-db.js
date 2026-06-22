// 1. BD inicial de armas contexto de ejemplo
const inventarioArmas = [
    { nombre: "Vandal", tipo: "rifle", municion: 25, rareza: "epica" },       // Caso límite: munición < 30 pero es épica
    { nombre: "Phantom", tipo: "rifle", municion: 30, rareza: "rara" },       // Pasa filtro y recomendada
    { nombre: "Ghost", tipo: "pistola", municion: 45, rareza: "comun" },      // Pasa filtro, no recomendada
    { nombre: "Operator", tipo: "francotirador", municion: 5, rareza: "legendaria" }, // No pasa filtro de munición
    { nombre: "Sheriff", tipo: "pistola", municion: 36, rareza: "epica" },     // Pasa filtro y recomendada
    { nombre: "Marshal", tipo: "francotirador", municion: 40, rareza: "rara" }  // Pasa filtro y recomendada
];

function procesarInventario(armas) {
    // Caso de validación límite: Si el arreglo viene vacío
    if (!armas || armas.length === 0) {
        console.log("Alerta: No hay armas disponibles en el inventario.");
        return;
    }

    // 2. Filtrar las armas con municion mayor o igual a 30
    const armasFiltradas = armas.filter(arma => arma.municion >= 30);

    // 3 y 4. Clasificación por tipo y marcado de recomendadas (raras o épicas)
    const resumen = {
        rifles: [],
        pistolas: [],
        francotiradores: []
    };

    armasFiltradas.forEach(arma => {
        // Evaluar si es recomendada por su rareza (rara o epica)
        const esRecomendada = arma.rareza === "rara" || arma.rareza === "epica";
        
        // Estructurar el objeto del reporte final
        const informacionArma = {
            nombre: arma.nombre,
            municion: arma.municion,
            rareza: arma.rareza,
            recomendada: esRecomendada ? "SÍ (Carga Eficiente)" : "NO"
        };

        // Separar en sus respectivas categorías
        if (arma.tipo === "rifle") {
            resumen.rifles.push(informacionArma);
        } else if (arma.tipo === "pistola") {
            resumen.pistolas.push(informacionArma);
        } else if (arma.tipo === "francotirador") {
            resumen.francotiradores.push(informacionArma);
        }
    });

    // 5. Imprimir el resumen final estructurado en consola
    console.log("==== RESUMEN DE CARGAS DE COMBATE RECOMENDADAS ====");
    console.log(JSON.stringify(resumen, null, 2));
}

// Ejecución del proceso de análisis táctico
procesarInventario(inventarioArmas);