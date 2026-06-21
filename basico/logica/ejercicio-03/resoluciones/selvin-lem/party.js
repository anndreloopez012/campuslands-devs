const party = [
    { nombre: "Mago", nivel: 12, ataque: 35, defensa: 10 },
    { nombre: "Guerrero", nivel: 5, ataque: 10, defensa: 5 }
];

const calcularPoder = (p) => p.nivel * 2 + p.ataque + p.defensa;

const sugerirEntrenamiento = (p) => 
    p.ataque < p.defensa ? "Entrenar Ataque" : "Entrenar Defensa";

const reporte = party.map(p => {
    const poder = calcularPoder(p);
    return {
        ...p,
        poder,
        estado: poder < 60 ? "Débil" : "Apto",
        sugerencia: poder < 60 ? sugerirEntrenamiento(p) : "Ninguna"
    };
});

console.table(reporte);