// Anàlisis de problema
// Se necesita realizar el ranking y puntaje total de una escuadra. 
// Se debe tener nombre, bajas, posicion y revividos.
// Ejemplo base: Entrada: [{nombre:'Nova', bajas:8, posicion:1, revividos:2}]. Salida esperada: 1. Nova - 44 pts.

//Datos de entrada + ejemplo
const escuadras = [
    { nombre: 'Nova', bajas: 8, posicion: 1, revividos:2 },
    { nombre: 'Alpha', bajas: 12, posicion: 4, revividos:1 },
    { nombre: 'Shadow', bajas: 5, posicion: 2, revividos:3 }
];

//Puntaje por cada escuadra
for (let i = 0; i < escuadras.length; i++) {
    let escuadra = escuadras[i];
    let puntosPosicion = 4;

    if (escuadra.posicion === 1) {
        puntosPosicion = 20;
    }
    if (escuadra.posicion === 2) {
        puntosPosicion = 14;
    }
    if (escuadra.posicion === 3) {
        puntosPosicion = 10;
    }

    escuadra.puntos = (escuadra.bajas * 3) + puntosPosicion;
}

//Funcion para ranking
escuadras.sort((a, b) => b.puntos - a.puntos);

// Salida esperada
// Ejemplo 1. Nova - 44 pts
for (let i = 0; i < escuadras.length; i++) {
    let numero = i + 1;
    console.log(numero + ". " + escuadras[i].nombre + " - " + escuadras[i].puntos + " pts.");
}

