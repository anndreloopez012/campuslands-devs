
const armas = [
    { nombre: "Rifle de Asalto", tipo: "Rifle", municion: 35, rareza: "Común" },
    { nombre: "Pistola de Mano", tipo: "Pistola", municion: 15, rareza: "Rara" },
    { nombre: "Francotirador de Precisión", tipo: "Francotirador", municion: 40, rareza: "Épica" },
    { nombre: "Subfusil Compacto", tipo: "Rifle", municion: 25, rareza: "Común" },
    { nombre: "Pistola Silenciada", tipo: "Pistola", municion: 30, rareza: "Rara" },
    { nombre: "Francotirador de Largo Alcance", tipo: "Francotirador", municion: 20, rareza: "Común" }
];

// Filtrar armas con munición >= 30
const armasDisponibles = armas.filter(arma => arma.municion >= 30); 

if (armasDisponibles.length === 0) {
    console.log("No hay armas disponibles con munición suficiente.");
}
else {
    const armasRecomendadas = armasDisponibles.map(arma => {
        if (arma.rareza === "Rara" || arma.rareza === "Épica") {
            return { ...arma, recomendado: true };
        }
        return { ...arma, recomendado: false };
    });
    console.log("Armas recomendadas:");
    armasRecomendadas.forEach(arma => {
        console.log(`- ${arma.nombre} (${arma.tipo}): ${arma.municion} balas, ${arma.rareza}`);
    });
}



