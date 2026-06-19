// ==========================================
// MÓDULO: CLIENTES (clientes.js)
// ==========================================

/**
 * Valida la estructura y campos obligatorios de un nuevo cliente
 */
function registrarCliente(nombre, telefono, nit) {
    // Validación de seguridad para campos vacíos
    if (!nombre || !telefono) {
        console.error("Error Técnico: Nombre y teléfono son datos obligatorios para el registro.");
        return false;
    }
    
    const nuevoCliente = { nombre, telefono, nit: nit || "CF", fechaRegistro: new Date() };
    console.log(`👥 Propietario registrado exitosamente: ${nuevoCliente.nombre}`);
    return nuevoCliente;
}