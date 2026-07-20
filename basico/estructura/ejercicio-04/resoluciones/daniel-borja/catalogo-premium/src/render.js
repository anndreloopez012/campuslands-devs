// Función para simular el pintado de tarjetas de autos premium sin mezclar con el HTML
function mostrarCatalogo(listaAutos) {
    // Caso límite: si el inventario viene vacío o no responde
    if (!listaAutos || listaAutos.length === 0) {
        console.warn("[Catálogo Premium]: Alerta, el inventario se encuentra vacío.");
        return;
    }
    
    listaAutos.forEach(auto => {
        const estado = auto.disponibilidad ? "Disponible" : "Reservado";
        console.log(`[RENDER CARD]: ${auto.marca} ${auto.modelo} (${auto.año}) - USD ${auto.precioUSD} [${estado}]`);
    });
}