// 1. Definición de los personajes
const party = [
    { nombre: "Arthas", clase: "Guerrero", nivel: 10, ataque: 20, defensa: 35 },
    { nombre: "Jaina", clase: "Maga", nivel: 8, ataque: 30, defensa: 10 },
    { nombre: "Thrall", clase: "Chamán", nivel: 12, ataque: 25, defensa: 20 },
    { nombre: "Uther", clase: "Paladín", nivel: 5, ataque: 15, defensa: 15 }
];

function obtenerSugerencia(pj) {
    return pj.ataque < pj.defensa 
        ? "Entrenar Ataque" 
        : "Entrenar Defensa";
}

function generarReporte(arr) {
    console.log("=== REPORTE DE LA PARTY ===");
    
    arr.forEach(pj => {
        const poder = (pj.nivel * 2) + pj.ataque + pj.defensa;
        console.log(`Personaje: ${pj.nombre} | Poder: ${poder}`);
        if (poder < 60) {
            console.log(`   > ¡Alerta! Personaje débil. Sugerencia: ${obtenerSugerencia(pj)}`);
        }
    });
    const poderTotal = arr.reduce((acc, pj) => acc + ((pj.nivel * 2) + pj.ataque + pj.defensa), 0);
    console.log("===========================");
    console.log(`Poder total del equipo: ${poderTotal}`);
}

generarReporte(party);