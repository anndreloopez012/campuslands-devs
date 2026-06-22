// ==========================================
// SERVICIO: booking.js
// ==========================================

function procesarReservaDestino(idDestino, cantidadPasajeros, datosDestino) {
    if (!datosDestino.disponible) {
        console.error("Error en Servicio: El destino seleccionado no cuenta con cupos o disponibilidad.");
        return { exito: false, mensaje: "Destino no disponible." };
    }

    // Caso límite: Validación de reservas con cero o menos pasajeros
    if (cantidadPasajeros <= 0) {
        console.error("Error en Servicio: La cantidad de pasajeros debe ser igual o mayor a 1.");
        return { exito: false, mensaje: "Cantidad de pasajeros invalida." };
    }

    const costoTotal = datosDestino.precioPorNoche * cantidadPasajeros;
    console.log("Servicio: Reserva procesada con exito. Total a facturar: $" + costoTotal + " USD.");
    return { exito: true, total: costoTotal };
}