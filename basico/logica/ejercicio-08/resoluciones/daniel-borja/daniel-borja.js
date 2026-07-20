// 1. Datos de Entrada: Colección inicial de vehículos hiperdeportivos para el club de lujo
const catalogoHiperdeportivos = [
    { marca: "Bugatti", modelo: "Chiron Super Sport", ceroACien: 2.2, precioUSD: 3900000, unidades: 30 },  // Caso ejemplo: < 500 unidades
    { marca: "Koenigsegg", modelo: "Jesko Absolut", ceroACien: 2.5, precioUSD: 3000000, unidades: 125 },
    { marca: "Rimac", modelo: "Nevera", ceroACien: 1.81, precioUSD: 2400000, unidades: 150 },
    { marca: "Porsche", modelo: "911 GT3 RS", ceroACien: 3.2, precioUSD: 2300000, unidades: 1200 },       // Excluido por aceleración (> 3s)
    { marca: "Ferrari", modelo: "LaFerrari", ceroACien: 2.6, precioUSD: 1400000, unidades: 499 },
    { marca: "Prototipo", modelo: "Concept Zero", ceroACien: 0.0, precioUSD: 0, unidades: 1 }            // Caso límite: Valores en cero
];

//Clasificacion de exclusividad basada en las reglas de negocio
function procesarCatalogoClub(autos) {
    console.log("=== SISTEMA ANALÍTICO DE EXCLUSIVIDAD - CLUB HIPERDEPORTIVOS ===\n");

    // Cláusula de salvaguarda (Guard Clause) contra arreglos nulos o corruptos
    if (!autos || !Array.isArray(autos) || autos.length === 0) {
        console.log("❌ Error operativo: El catálogo de entrada está vacío o no es válido.");
        return;
    }

    // Paso 2 y 3: Filtrar autos que aceleran en menos de 3 segundos y calcular exclusividad
    const autosCalificados = autos
        .filter(auto => auto.ceroACien > 0 && auto.ceroACien < 3.0) // Mayor a 0 para omitir prototipos corruptos
        .map(auto => {
            // Clasificación de exclusividad basada en las reglas de negocio
            const nivelExclusividad = auto.unidades < 500 ? "EXTREMA" : "ESTÁNDAR DELUXE";
            return {
                ...auto,
                exclusividad: nivelExclusividad
            };
        });

    // Paso 4: Calcular precio promedio global de los autos que originalmente ingresaron al club
    // Filtramos los que tienen precio válido para evitar corromper la división del promedio
    const autosConPrecioValido = autos.filter(auto => auto.precioUSD > 0);
    const sumaPrecios = autosConPrecioValido.reduce((acumulador, auto) => acumulador + auto.precioUSD, 0);
    const precioPromedio = autosConPrecioValido.length > 0 ? sumaPrecios / autosConPrecioValido.length : 0;

    // Paso 5: Obtener el Top 3 de los autos calificados ordenados por aceleración (Menor tiempo = más rápido)
    const topTresAceleracion = [...autosCalificados]
        .sort((autoA, autoB) => autoA.ceroACien - autoB.ceroACien)
        .slice(0, 3);

    // --- IMPRESIÓN DEL INFORME TÉCNICO ---
    console.log(`📊 Indicador Financiero Central:`);
    console.log(`   👉 Precio Promedio del Catálogo Global: $${precioPromedio.toLocaleString('en-US')} USD`);
    console.log("----------------------------------------------------------------------");

    console.log(`🏎️ TOP 3 - HIPERDEPORTIVOS MÁS RÁPIDOS EN 0-100 KM/H:`);
    topTresAceleracion.forEach((auto, indice) => {
        console.log(`   [${indice + 1}] ${auto.marca} ${auto.modelo}`);
        console.log(`        Aceleración: ${auto.ceroACien}s | Precio: $${auto.precioUSD.toLocaleString('en-US')} USD`);
        console.log(`        Producción: ${auto.unidades} uds. | Exclusividad: ★ ${auto.exclusividad} ★`);
    });
    console.log("----------------------------------------------------------------------");
}

// Ejecución controlada de la solución
procesarCatalogoClub(catalogoHiperdeportivos);