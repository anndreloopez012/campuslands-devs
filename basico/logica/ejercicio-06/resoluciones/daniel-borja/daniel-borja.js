// 1. Datos de Entrada: Catálogo de motocicletas bajo análisis del taller
const inventarioMotocicletas = [
    { marca: "Yamaha", modelo: "YZF-R1", hp: 200, pesoKg: 200, mantenimientoMensual: 450000 },    // Ejemplo enunciado: ratio 1.00
    { marca: "Kawasaki", modelo: "Ninja ZX-10R", hp: 203, pesoKg: 206, mantenimientoMensual: 480000 },
    { marca: "Ducati", modelo: "Panigale V4", hp: 214, pesoKg: 198, mantenimientoMensual: 650000 },  // Excluida por filtro (> 500000)
    { marca: "Suzuki", modelo: "GSX-R600", hp: 125, pesoKg: 187, mantenimientoMensual: 320000 },    // Opción económica calificada
    { marca: "Honda", modelo: "CBR300R", hp: 30, pesoKg: 164, mantenimientoMensual: 180000 },       // Caso límite: Baja potencia pero muy barata
    { marca: "Incompleta", modelo: "Prototipe X", hp: 0, pesoKg: 150, mantenimientoMensual: 200000 } // Caso límite: Moto sin motor (0 HP)
];

/** Filtra, calcula indicadores y clasifica las motocicletas deportivas */
function procesarComparativaMotos(motocicletas) {
    console.log("=== SISTEMA ANALÍTICO DE MOTOCICLISMO - TALLER CAMPUSLANDS ===\n");

    // Validar si el arreglo de entrada está vacío
    if (!motocicletas || motocicletas.length === 0) {
        console.log("❌ Error operativo: No hay datos de motocicletas para procesar.");
        return;
    }

    // Paso 2 y 3: Filtrar por costo de mantenimiento (< 500000) y calcular relación Peso-Potencia de forma segura
    const motosCalificadas = motocicletas
        .filter(moto => moto.mantenimientoMensual < 500000)
        .map(moto => {
            // Filtro de seguridad operativa: evitar división por cero o procesamiento de datos corruptos
            const pesoSeguro = moto.pesoKg <= 0 ? 1 : moto.pesoKg;
            const ratioCalculado = (moto.hp / pesoSeguro).toFixed(4);

            return {
                ...moto,
                relacionPesoPotencia: parseFloat(ratioCalculado)
            };
        });

    // Paso 4: Ordenar descendente por la mejor relación peso-potencia
    motosCalificadas.sort((motoA, motoB) => motoB.relacionPesoPotencia - motoA.relacionPesoPotencia);

    // Renderizar listado general filtrado y ordenado
    console.log("MOTOS CLASIFICADAS (MANTENIMIENTO PERMITIDO Y ORDENADAS POR RENDIMIENTO):");
    motosCalificadas.forEach((moto, index) => {
        console.log(`${index + 1}. ${moto.marca} ${moto.modelo} | Ratio: ${moto.relacionPesoPotencia} HP/Kg | Mantenimiento: $${moto.mantenimientoMensual}`);
    });
    console.log("----------------------------------------------------------------------");

    // Paso 5: Mostrar la mejor opción para pista (Top 1 del ordenamiento) y la mejor opción económica
    if (motosCalificadas.length > 0) {
        const mejorOpcionPista = motosCalificadas[0];

        // Para la mejor opción económica, buscamos el menor costo de mantenimiento mensual dentro de las calificadas
        const mejorOpcionEconomica = [...motosCalificadas].sort(
            (motoA, motoB) => motoA.mantenimientoMensual - motoB.mantenimientoMensual
        )[0];

        console.log(` MEJOR OPCIÓN PARA PISTA (Mayor Rendimiento):`);
        console.log(`    ${mejorOpcionPista.marca} ${mejorOpcionPista.modelo} con un ratio de ${mejorOpcionPista.relacionPesoPotencia} HP/Kg.`);
        
        console.log(`\n MEJOR OPCIÓN ECONÓMICA (Menor Mantenimiento Calificado):`);
        console.log(`    ${mejorOpcionEconomica.marca} ${mejorOpcionEconomica.modelo} con un costo mensual de $${mejorOpcionEconomica.mantenimientoMensual}.`);
    } else {
        console.log(" Alerta: Ninguna motocicleta cumple con el umbral económico de mantenimiento.");
    }
    console.log("----------------------------------------------------------------------");
}

// Ejecución controlada del core de negocio
procesarComparativaMotos(inventarioMotocicletas);