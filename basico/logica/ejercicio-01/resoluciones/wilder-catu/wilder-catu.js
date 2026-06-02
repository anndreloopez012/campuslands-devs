const escuadras = [
    {
        nombre: "Alpha",
        bajas: 5,
        posicion: 1,
        revividos: 2
    },
    {
        nombre: "Bravo",
        bajas: 3,
        posicion: 2,
        revividos: 1
    },
    {
        nombre: "Charlie",
        bajas: 1,
        posicion: 4,
        revividos: 0
    },
    {
        nombre: "Delta",
        bajas: 4,
        posicion: 3,
        revividos: 3
    }
];

// Función para calcular puntos según posición
function calcularPuntosPosicion(posicion) {
    if (posicion === 1) {
        return 20;
    }

    if (posicion === 2) {
        return 14;
    }

    if (posicion === 3) {
        return 10;
    }

    return 4;
}


for (let i = 0; i < escuadras.length; i++) {
    const escuadra = escuadras[i];

    const puntosPorBajas = escuadra.bajas * 3;
    const puntosPorPosicion = calcularPuntosPosicion(escuadra.posicion);

    escuadra.puntosTotales = puntosPorBajas + puntosPorPosicion;
}

escuadras.sort(function (a, b) {
    return b.puntosTotales - a.puntosTotales;
});

console.log("=== RANKING FINAL ===");

for (let i = 0; i < escuadras.length; i++) {
    const escuadra = escuadras[i];

    console.log(
        `${i + 1}. ${escuadra.nombre} - ${escuadra.puntosTotales} puntos`
    );
}


// Al leer el ejercicio, identifiqué que el problema tiene dos partes principales: el cálculo de puntaje y el ordenamiento de los resultados.

// Primero, en el cálculo de puntaje, cada escuadra tiene datos como bajas y posición. Las bajas se convierten 
// en puntos multiplicándolas por 3. La posición sigue reglas fijas: 1 vale 20 puntos, 2 vale 14, 3 vale 10 y cualquier otra posición vale 4. 
// Para no mezclar todo en un solo bloque de código, separé la lógica de la posición en una función llamada calcularPuntosPosicion, 
// lo que ayuda a que sea más fácil de entender.

// Después de eso, el siguiente paso es ordenar. Una vez que cada escuadra tiene su puntaje total, 
// el problema se vuelve simplemente ordenar los objetos por ese valor de mayor a menor usando sort.

// Flujo de solución

// Definir el arreglo de escuadras
// Calcular puntos por bajas y posición
// Guardar el resultado en cada escuadra
// Ordenar por puntaje total
// Mostrar el ranking final

// Evidencia de validación

// Para verificar que todo funcionaba bien, revisé los cálculos manualmente:

// Alpha: 5×3 + 20 = 35
// Bravo: 3×3 + 14 = 23
// Delta: 4×3 + 10 = 22
// Charlie: 1×3 + 4 = 7

// Luego comprobé que el orden final coincidiera con los puntajes:

// Alpha (35)
// Bravo (23)
// Delta (22)
// Charlie (7)