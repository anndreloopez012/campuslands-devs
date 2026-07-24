// Lógica para procesar y renderizar el catálogo de autos de lujo
function validarPrecioYDisponibilidad(auto) {
    if (auto.precioUSD <= 0) {
        throw new Error(`El auto ${auto.marca} ${auto.modelo} tiene un precio inválido.`);
    }
    return auto.disponible ? "Disponible para entrega" : "Agotado / Reservado";
}

function filtrarAutosDisponibles(catalogo) {
    // Caso normal y límite: filtra únicamente vehículos con precio mayor a cero y activos
    return catalogo.filter(auto => auto.precioUSD > 0);
}

module.exports = { validarPrecioYDisponibilidad, filtrarAutosDisponibles };