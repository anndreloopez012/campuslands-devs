// ==========================================
// MÓDULO: MOTOS (motos.js)
// ==========================================

/**
 * Registra las especificaciones de la motocicleta ligada a un propietario
 */
function asociarMotocicleta(placa, marca, modelo, cilindraje) {
    // Validación: Las motos deben tener placa identificable y cilindraje válido
    if (!placa || !marca || cilindraje <= 0) {
        console.error("Error Técnico: Datos del vehículo inválidos o cilindraje en cero.");
        return null;
    }

    const fichaMoto = { placa: placa.toUpperCase(), marca, modelo, cilindraje };
    console.log(`Vehículo verificado en el sistema: [${fichaMoto.marca} - Placa: ${fichaMoto.placa}]`);
    return fichaMoto;
}