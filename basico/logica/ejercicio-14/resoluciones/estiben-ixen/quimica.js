const compuestos = [
    {
        nombre: "Agua",
        componentes: [
            { simbolo: "H", gramos: 2 },
            { simbolo: "O", gramos: 16 }
        ]
    },
    {
        nombre: "Mezcla inválida",
        componentes: [
            { simbolo: "Na", gramos: 10 },
            { simbolo: "Cl", gramos: 0 }
        ]
    }
];

function calcularMasaTotal(compuesto) {
    let masaTotal = 0;

    for (const componente of compuesto.componentes) {
        masaTotal += componente.gramos;
    }

    return masaTotal;
}

function validarComponentes(compuesto) {
    for (const componente of compuesto.componentes) {
        if (componente.gramos <= 0) {
            return false;
        }
    }

    return true;
}

function filtrarCompuestosIncompletos(listaCompuestos) {
    const incompletos = [];

    for (const compuesto of listaCompuestos) {
        if (!validarComponentes(compuesto)) {
            incompletos.push(compuesto.nombre);
        }
    }

    return incompletos;
}

for (const compuesto of compuestos) {
    const masa = calcularMasaTotal(compuesto);
    const valido = validarComponentes(compuesto);

    console.log(`Compuesto: ${compuesto.nombre}`);
    console.log(`Masa total: ${masa} gramos`);
    console.log(`Estado: ${valido ? "Completo" : "Incompleto"}`);
    console.log("-------------------------");
}

const formulasIncompletas = filtrarCompuestosIncompletos(compuestos);

console.log("Fórmulas incompletas:");
console.log(formulasIncompletas);