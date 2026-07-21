const compuestos = [
    {
        nombre: "Agua (H₂O)",
        componentes: [
            { simbolo: "H", gramos: 2 },
            { simbolo: "O", gramos: 16 }
        ]
    },
    {
        nombre: "Dióxido de Carbono (CO₂)",
        componentes: [
            { simbolo: "C", gramos: 12 },
            { simbolo: "O", gramos: 32 }
        ]
    },
    {
        nombre: "Metano (CH₄)",
        componentes: [
            { simbolo: "C", gramos: 12 },
            { simbolo: "H", gramos: 0 } 
        ]
    },
    {
        nombre: "Amoníaco (NH₃)",
        componentes: [
            { simbolo: "N", gramos: -5 }, // Caso inválido
            { simbolo: "H", gramos: 3 }
        ]
    }
];

const resultados = compuestos.map(compuesto => {

    const masaTotal = compuesto.componentes.reduce(
        (total, componente) => total + componente.gramos,
        0
    );

    const esValido = compuesto.componentes.every(
        componente => componente.gramos > 0
    );

    return {
        nombre: compuesto.nombre,
        componentes: compuesto.componentes.length,
        masaTotal,
        estado: esValido ? "Válido" : "Incompleto"
    };

});

const incompletos = resultados.filter(
    compuesto => compuesto.estado === "Incompleto"
);
console.log("\n========== RESULTADOS ==========\n");

console.table(resultados);

console.log("\n===== COMPUESTOS INCOMPLETOS =====\n");

console.table(incompletos);