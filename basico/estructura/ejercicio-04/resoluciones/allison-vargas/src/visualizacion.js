/**
 * Muestra el catálogo de autos de forma ordenada en la consola
 * @param {Array} listaAutos 
 */
export function mostrarCatalogo(listaAutos) {
    console.log("=== CATÁLOGO DE AUTOS DE LUJO ===");
    
    if (!listaAutos || listaAutos.length === 0) {
        console.log("⚠️ El catálogo se encuentra vacío actualmente.");
        return;
    }

    listaAutos.forEach(auto => {
        const precioFormateado = auto.precio_usd > 0 ? `$${auto.precio_usd.toLocaleString()}` : "Precio No Disponible / Reservado";
        const anioFormateado = auto.anio > 0 ? auto.anio : "Año no especificado";
        const estado = auto.disponible ? "🟢 Disponible" : "🔴 Vendido / Reservado";

        console.log(`\n🚗 ${auto.marca} ${auto.modelo} (${anioFormateado})`);
        console.log(`   Precio: ${precioFormateado}`);
        console.log(`   Estado: ${estado}`);
        console.log(`   Ref. Imagen: assets/cars/${auto.imagen}`);
    });
}