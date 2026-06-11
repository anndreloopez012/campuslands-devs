// 1. Crear un arreglo de armas con nombre, tipo, municion y rareza.
// 2. Filtrar las armas con municion mayor o igual a 30.
// 3. Separar rifles, pistolas y francotiradores.
// 4. Marcar como recomendadas las armas raras o épicas.
// 5. Imprimir un resumen por tipo.

console.log("-------------- Ejercicio 02: git-------------------")

const armasDisponibles = [
    { nombre: "AK-47", tipo: "rifle", municion: 45, rareza: "epica" },
    { nombre: "M4A1", tipo: "rifle", municion: 20, rareza: "comun" },
    { nombre: "Ghost", tipo: "pistola", municion: 35, rareza: "rara" },
    { nombre: "Classic", tipo: "pistola", municion: 12, rareza: "comun" },
    { nombre: "Operator", tipo: "francotirador", municion: 30, rareza: "legendaria" },
    { nombre: "Marshal", tipo: "francotirador", municion: 35, rareza: "epica" }
];

function procesarInventario(armas) {
    const resumen = {
        rifles: [],
        pistolas: [],
        francotiradores: []
    };

    armas.forEach(arma => {
        if (arma.municion >= 30) {
            const esRecomendada = arma.rareza === "rara" || arma.rareza === "epica";
            const armaProcesada = {
                nombre: arma.nombre,
                municion: arma.municion,
                rareza: arma.rareza,
                recomendada: esRecomendada ? "SÍ" : "NO"
            };

            if (arma.tipo === "rifle") {
                resumen.rifles.push(armaProcesada);
            } else if (arma.tipo === "pistola") {
                resumen.pistolas.push(armaProcesada);
            } else if (arma.tipo === "francotirador") {
                resumen.francotiradores.push(armaProcesada);
            }
        }
    });
    imprimirResumen(resumen);
}

function imprimirResumen(resumen) {
    console.log("=== RESUMEN DE CARGAS DE COMBATE ===");
    console.log("\n--- RIFLES ---");
    console.table(resumen.rifles);
    console.log("\n--- PISTOLAS ---");
    console.table(resumen.pistolas);
    console.log("\n--- FRANCOTIRADORES ---");
    console.table(resumen.francotiradores);
}

procesarInventario(armasDisponibles);
