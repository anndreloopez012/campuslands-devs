// ==========================================
// MÓDULO: ÓRDENES (ordenes.js)
// ==========================================

/**
 * Inicializa una orden de trabajo en el taller conectando cliente y moto
 */
function crearOrdenReparacion(idOrden, clienteObj, motoObj, observaciones) {
    // CASO LÍMITE DE VALIDACIÓN: Prevenir órdenes sin cliente o sin vehículo asignado
    if (!idOrden || !clienteObj || !motoObj) {
        console.warn("Operación Rechazada: No se puede abrir una orden de trabajo si faltan entidades clave.");
        return null;
    }

    const ordenDeServicio = {
        idOrden,
        cliente: clienteObj.nombre,
        placaMoto: motoObj.placa,
        observaciones,
        estado: "INGRESADA",
        totalPresupuesto: 0
    };

    console.log(`📋 Orden Abierta [ID: ${idOrden}] para la moto de placas [${ordenDeServicio.placaMoto}].`);
    return ordenDeServicio;
}