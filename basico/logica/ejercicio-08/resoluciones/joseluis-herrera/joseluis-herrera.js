const autos = [
    { marca: "Bugatti", modelo: "Chiron", ceroACien: 2.4, precioUSD: 3000000, unidades: 500 },
    { marca: "Rimac", modelo: "Nevera", ceroACien: 1.9, precioUSD: 2200000, unidades: 150 },
    { marca: "Ferrari", modelo: "SF90", ceroACien: 2.5, precioUSD: 500000, unidades: 1000 },
    { marca: "Pininfarina", modelo: "Battista", ceroACien: 1.8, precioUSD: 2500000, unidades: 150 },
    { marca: "Porsche", modelo: "918", ceroACien: 2.6, precioUSD: 845000, unidades: 918 }
];

let filtrados = [];

for (let i = 0; i < autos.length; i++) {
    let autoActual = autos[i];

    if (autoActual.ceroACien < 3) {
        
        if (autoActual.unidades < 500) {
            autoActual.exclusividad = "Extrema";
        } else {
            autoActual.exclusividad = "Regular";
        }

        filtrados.push(autoActual);
    }
}

let sumaPrecios = 0;

for (let i = 0; i < filtrados.length; i++) {
    sumaPrecios = sumaPrecios + filtrados[i].precioUSD;
}

let promedio = sumaPrecios / filtrados.length;

console.log("El precio promedio es: $" + promedio);

filtrados.sort(function(a, b) {
    return a.ceroACien - b.ceroACien;
});

console.log("--- Top 3 Aceleración ---");

let limite = 3;
if (filtrados.length < 3) {
    limite = filtrados.length;
}

for (let i = 0; i < limite; i++) {
    let auto = filtrados[i];
    console.log((i + 1) + ". " + auto.marca + " " + auto.modelo + " - " + auto.ceroACien + "s (" + auto.exclusividad + ")");
}