// ==========================================
// VISTA / PÁGINA: home.js
// ==========================================

function inicializarPantallaInicio(listaDestinos) {
    console.log("Capa Pages: Inicializando la vista principal del catálogo turistico.");
    
    if (!listaDestinos || listaDestinos.length === 0) {
        console.warn("Advertencia: No se encontraron destinos disponibles para construir la pantalla.");
        return "Disculpe, no hay opciones de viaje en este momento.";
    }

    console.log("Capa Pages: Renderizando un total de " + listaDestinos.length + " tarjetas de destinos en el inicio.");
}