// ==========================================
// LOGICA DE NEGOCIO: menu-manager.js
// ==========================================

/**
 * Calcula el valor de un combo aplicando el descuento reglamentario
 */
function calcularPrecioCombo(precioPlato, precioBebida, porcentajeDescuento) {
    // Caso limite: Prevenir operaciones con valores en cero o negativos
    if (precioPlato <= 0 || precioBebida <= 0) {
        console.error("Error en Script: Los componentes del combo deben tener un precio mayor a cero.");
        return 0;
    }

    if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
        console.error("Error en Script: El porcentaje de descuento no es valido.");
        return 0;
    }

    const precioRegular = precioPlato + precioBebida;
    const descuento = precioRegular * (porcentajeDescuento / 100);
    const precioComboFinal = precioRegular - descuento;

    console.log("Script: Operacion completada. Precio individual acumulado: Q" + precioRegular + " | Precio Combo: Q" + precioComboFinal);
    return precioComboFinal;
}