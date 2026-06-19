// ==========================================
// LÓGICA DE VISUALIZACIÓN: catalog.js
// ==========================================

/**
 * Filtra y muestra la lista de autos disponibles en stock
 * @param {Array} carList - Arreglo de objetos provenientes de data/autos.json
 */
function renderPremiumCatalog(carList) {
    // CASO LÍMITE DE VALIDACIÓN: Si el archivo de datos está vacío
    if (!carList || carList.length === 0) {
        console.warn("Catálogo Vacío: No hay vehículos registrados actualmente para mostrar.");
        return "Disculpe, nuestro showroom exclusivo se encuentra en renovación.";
    }

    console.log(`Procesando un total de ${carList.length} vehículos de alta gama...`);

    // Recorremos los autos para simular el montaje en la interfaz
    carList.forEach(auto => {
        const stockStatus = auto.inStock ? "DISPONIBLE IMMEDIATE" : "RESERVADO / AGOTADO";
        console.log(`[${auto.brand} ${auto.model}] - Potencia: ${auto.horsepower} HP | Estado: ${stockStatus}`);
    });
}

console.log("Script src/catalog.js cargado de forma modular.");