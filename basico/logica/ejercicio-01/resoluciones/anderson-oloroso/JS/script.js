const escuadras = [
{nombre: "Nova", bajas: 8, posicion: 1, revividos: 2},
{nombre: "Vortex", bajas: 7, posicion: 2, revividos: 1},
{nombre: "Kairo", bajas: 6, posicion: 3, revividos: 0},
{nombre: "Raven", bajas: 5, posicion: 4, revividos: 3},
{nombre: "Zephyr", bajas: 4, posicion: 5, revividos: 0},
{nombre: "Astra", bajas: 3, posicion: 6, revividos: 1},
{nombre: "Blitz", bajas: 2, posicion: 7, revividos: 0},
{nombre: "Echo", bajas: 2, posicion: 8, revividos: 0},
{nombre: "Nyx", bajas: 1, posicion: 9, revividos: 0},
{nombre: "Orion", bajas: 0, posicion: 10, revividos: 0}
]

function tops(escuadra) {
    let puntaje = 0
    if (escuadra.posicion === 1) {
        puntaje += 20
    } else if (escuadra.posicion === 2) {
        puntaje += 14
        } else if (escuadra.posicion === 3) {
            puntaje += 10
        }
        return puntaje
    }   

const puntajes = escuadras.map(escuadra => {
    let puntaje = 0
    puntaje += escuadra.bajas * 3   
    const puntosPosicion = tops(escuadra)
    puntaje += puntosPosicion
    return {nombre: escuadra.nombre, puntaje: puntaje, posicion: escuadra.posicion, puntosPosicion: puntosPosicion}
})

puntajes.sort((a, b) => b.puntaje - a.puntaje)
puntajes.forEach((escuadra, index) => {
    console.log(`${index + 1}. ${escuadra.nombre} - ${escuadra.puntaje} puntos - Posición: ${escuadra.posicion} - Puntos por posición: ${escuadra.puntosPosicion}`)
})