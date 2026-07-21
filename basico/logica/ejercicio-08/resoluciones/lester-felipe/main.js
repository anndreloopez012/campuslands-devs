// Definición del inventario de hiperdeportivos (Datos iniciales)
const inventarioHiperdeportivos = [
    { marca: "Bugatti", modelo: "Chiron Super Sport", ceroACien: 2.2, precioUSD: 3900000, unidades: 30 },
    { marca: "Koenigsegg", modelo: "Jesko Absolut", ceroACien: 2.5, precioUSD: 3000000, unidades: 125 },
    { marca: "Rimac", modelo: "Nevera", ceroACien: 1.81, precioUSD: 2400000, unidades: 150 },
    { marca: "Ferrari", modelo: "LaFerrari", ceroACien: 2.9, precioUSD: 1400000, unidades: 499 },
    { marca: "McLaren", modelo: "P1", ceroACien: 2.8, precioUSD: 1300000, unidades: 375 },
    { marca: "Pagani", modelo: "Huayra Roadster", ceroACien: 3.1, precioUSD: 2600000, unidades: 100 }, // No entrará por aceleración
    { marca: "Porsche", modelo: "918 Spyder", ceroACien: 2.6, precioUSD: 1100000, unidades: 918 }
];

// Función principal para procesar el sistema del club de lujo
function procesarHiperdeportivos(autos) {
    console.log("=== SISTEMA DE CLASIFICACIÓN: CLUB DE HIPERDEPORTIVOS ===\n");

    // Filtrar los que hacen el 0-100 km/h en menos de 3 segundos
    const autosFiltrados = autos.filter(auto => auto.ceroACien < 3.0);

    // Clasificar exclusividad: unidades < 500 es "Extrema", de lo contrario "Alta"
    // Usamos .map() para mantener la inmutabilidad de los datos originales
    const autosClasificados = autosFiltrados.map(auto => {
        return {
            ...auto,
            exclusividad: auto.unidades < 500 ? "Extrema" : "Alta"
        };
    });

    // Calcular el precio promedio de los autos que cumplieron el filtro inicial
    const sumaPrecios = autosClasificados.reduce((acumulador, auto) => acumulador + auto.precioUSD, 0);
    const precioPromedio = autosClasificados.length > 0 ? sumaPrecios / autosClasificados.length : 0;

    //  Obtener el Top 3 por aceleración (menor tiempo de 0-100 km/h es mejor)
    // Usamos [...array] para no alterar el orden del arreglo clasificado
    const topTresAceleracion = [...autosClasificados]
        .sort((a, b) => a.ceroACien - b.ceroACien)
        .slice(0, 3);

    // --- PRESENTACIÓN DE RESULTADOS ---
    
    console.log(` VEHÍCULOS QUE CUMPLEN EL FILTRO (0-100 km/h < 3s) Y SU EXCLUSIVIDAD:`);
    console.log("---------------------------------------------------------------------");
    autosClasificados.forEach(auto => {
        console.log(`• ${auto.marca} ${auto.modelo} | 0-100: ${auto.ceroACien}s | Unidades: ${auto.unidades} | Exclusividad: ${auto.exclusividad}`);
    });

    console.log("\n---------------------------------------------------------------------");
    console.log(` PRECIO PROMEDIO DEL GRUPO FILTRADO: $${precioPromedio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`);
    console.log("---------------------------------------------------------------------\n");

    console.log("TOP 3 VEHÍCULOS CON MEJOR ACELERACIÓN:");
    console.log("---------------------------------------------------------------------");
    topTresAceleracion.forEach((auto, indice) => {
        console.log(`${indice + 1}. ${auto.marca} ${auto.modelo} (${auto.ceroACien} segundos)`);
    });
}

// Ejecutar el programa
procesarHiperdeportivos(inventarioHiperdeportivos);