const compuestos = [
    { nombre: "Agua (H2O)", componentes: [{ simbolo: "H", gramos: 2 }, { simbolo: "O", gramos: 16 }] },
    { nombre: "Dióxido de Carbono", componentes: [{ simbolo: "C", gramos: 12 }, { simbolo: "O", gramos: 32 }] },
    { nombre: "Incompleto", componentes: [{ simbolo: "A", gramos: 0 }, { simbolo: "B", gramos: 5 }] }
];

function procesarCompuestos(lista) {
    return lista
        // Paso 1: Filtrar compuestos donde TODOS los componentes tengan gramos > 0
        .filter(compuesto => 
            compuesto.componentes.every(c => c.gramos > 0)
        )
        // Paso 2: Calcular masa total de los compuestos válidos
        .map(compuesto => {
            const masaTotal = compuesto.componentes.reduce((acc, c) => acc + c.gramos, 0);
            return {
                nombre: compuesto.nombre,
                masaTotal: masaTotal + "g"
            };
        });
}

const reportes = procesarCompuestos(compuestos);
console.log("Reporte de Laboratorio:", reportes);
