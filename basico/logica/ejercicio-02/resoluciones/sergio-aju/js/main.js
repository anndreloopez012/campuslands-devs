
async function cargarInventario() {
    try {
        const response = await fetch('data.json');
        const armas = await response.json();
        procesarArmas(armas);
    } catch (error) {
        console.error("Error al cargar el inventario:", error);
    }
}

function procesarArmas(armas) {
    const armasFiltradas = armas.filter(arma => arma.municion >= 30);
    
    const reporte = { rifles: [], pistolas: [], francotiradores: [] };

    armasFiltradas.forEach(arma => {
        arma.recomendada = (arma.rareza === 'rara' || arma.rareza === 'epica');
        
        if (reporte[arma.tipo + 's']) {
            reporte[arma.tipo + 's'].push(arma);
        }
    });

    console.log("Inventario Procesado:", reporte);
    // Aquí podrías añadir lógica para mostrarlo en el DOM
}

cargarInventario();