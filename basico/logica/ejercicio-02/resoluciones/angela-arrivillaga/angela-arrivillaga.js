// arreglo de armas
const inventarioArmas = [
    { nombre: "Vandal", tipo: "rifle", municion: 90, rareza: "epica" },
    { nombre: "Phantom", tipo: "rifle", municion: 25, rareza: "rara" }, // Caso: Menos de 30 balas
    { nombre: "Ghost", tipo: "pistola", municion: 45, rareza: "comun" },
    { nombre: "Classic", tipo: "pistola", municion: 0, rareza: "comun" },  // Caso límite: Balas en cero
    { nombre: "Operator", tipo: "francotirador", municion: 35, rareza: "legendaria" },
    { nombre: "Marshal", tipo: "francotirador", municion: 40, rareza: "rara" }
];

// filtro de armas
const armasConMunicionSuficiente = inventarioArmas.filter(arma => {
    return arma.municion >= 30;
});

// clasificar armas por tipo y rareza
const rifles = [];
const pistolas = [];
const francotiradores = [];

armasConMunicionSuficiente.forEach(arma => {
    // rareza
    if (arma.rareza === "rara" || arma.rareza === "epica" || arma.rareza === "legendaria") {
        arma.recomendada = true;
    } else {
        arma.recomendada = false;
    }

    // tipo
    if (arma.tipo === "rifle") {
        rifles.push(arma);
    } else if (arma.tipo === "pistola") {
        pistolas.push(arma);
    } else if (arma.tipo === "francotirador") {
        francotiradores.push(arma);
    }
});

// imprimir
console.log("=== INVENTARIO TÁCTICO RECOMENDADO PARA RANKED ===");

console.log("\n--- RIFLES ---");
console.log(rifles);

console.log("\n--- PISTOLAS ---");
console.log(pistolas);

console.log("\n--- FRANCOTIRADORES ---");
console.log(francotiradores);


/* EXPLICACIÓN DE LA SOLUCIÓN:

Para resolver este problema, primero ESTRUCTURE los datos de entrada en 
un arreglo de objetos donde cada arma tiene sus propiedades bien definidas

El proceso lo dividi en dos etapas claras:
1. Use el metodo "filter" para limpiar el inventario, 
   dejando fuera las armas que no cumplian con el minimo de 30 balas 
2. Con la lista ya limpia, use un "ForEach" para recorrer las armas 
   restantes. Revise mediante condicionales si su rareza sumaba valor 
   tactico para marcarla como "recomendada" y las clasifique en sus 
   respectivos contenedores.

Por ultimo, la salida organiza el inventario agrupado por categoria
*/