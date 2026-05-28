const escuadrasTorneo = [
    { nombre: 'Nova', bajas: 8, posicion: 1, revividos: 2 },
    { nombre: 'Alpha Team', bajas: 12, posicion: 4, revividos: 1 },
    { nombre: 'Shadows', bajas: 5, posicion: 2, revividos: 4 },
    { nombre: 'Apex Predators', bajas: 15, posicion: 3, revividos: 0 },
    { nombre: 'Vipers', bajas: 2, posicion: 8, revividos: 3 }
];

const tablaRows = document.getElementById('rows');
const btnCalcular = document.getElementById('btn-calcular');

function pintarTabla(escuadras, mostrarPuntos = false) {
    tablaRows.innerHTML = ''; 

    escuadras.forEach((escuadra, indice) => {
        const fila = document.createElement('tr');
        
        const puestoVisual = mostrarPuntos ? `${indice + 1}°` : '-';
        const puntosVisual = mostrarPuntos ? `<strong>${escuadra.puntosTotales} pts</strong>` : 'Pendiente';

        fila.innerHTML = `
            <td>${puestoVisual}</td>
            <td>${escuadra.nombre}</td>
            <td>${escuadra.bajas}</td>
            <td>Top ${escuadra.posicion}</td>
            <td>${escuadra.revividos}</td>
            <td>${puntosVisual}</td>
        `;
        
        tablaRows.appendChild(fila);
    });
}

function calcularPuntajeTotal(escuadra) {
    const puntosPorBajas = escuadra.bajas * 3;
    let puntosPorPosicion = 0;
    
    if (escuadra.posicion === 1) {
        puntosPorPosicion = 20;
    } else if (escuadra.posicion === 2) {
        puntosPorPosicion = 14;
    } else if (escuadra.posicion === 3) {
        puntosPorPosicion = 10;
    } else {
        puntosPorPosicion = 4;
    }
    
    return puntosPorBajas + puntosPorPosicion;
}

function procesarYOrdenarRanking() {
    const rankingProcesado = escuadrasTorneo.map(escuadra => {
        return {
            ...escuadra, 
            puntosTotales: calcularPuntajeTotal(escuadra)
        };
    });

    rankingProcesado.sort((a, b) => b.puntosTotales - a.puntosTotales);

    pintarTabla(rankingProcesado, true);
    
    btnCalcular.textContent = "Ranking Actualizado";
    btnCalcular.disabled = true;
    btnCalcular.style.background = "#1f2937";
    btnCalcular.style.cursor = "not-allowed";
}

document.addEventListener('DOMContentLoaded', () => {
    pintarTabla(escuadrasTorneo, false);
    
    btnCalcular.addEventListener('click', procesarYOrdenarRanking);
});