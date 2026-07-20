
function diagnosticar(listaSintomas) {
    console.log("=== SISTEMA DE DIAGNÓSTICO MAESTRO - TALLER CAMPUSLANDS RACING ===");
    console.log(`Fecha de Inspección: ${new Date().toLocaleDateString()}`);
    console.log("------------------------------------------------------------------");

    // Caso Límite / Filtro de seguridad operativa 1: Validación de arreglo vacío, nulo o datos corruptos
    if (!listaSintomas || !Array.isArray(listaSintomas) || listaSintomas.length === 0) {
        console.log("❌ ALERTA: Ficha técnica rechazada. No se registraron síntomas en la orden de entrada.");
        console.log("==================================================================\n");
        return;
    }

    let contadorFallosConocidos = 0;
    let contadorSintomasDesconocidos = 0;

    // Procesamiento secuencial del arreglo de síntomas mediante iteración funcional
    listaSintomas.forEach((sintomaCrudo, indice) => {
        // Normalización del texto para evitar fallos por mayúsculas o espacios extraños introducidos por el usuario
        const sintoma = sintomaCrudo.trim().toLowerCase();
        let recomendacion = "";

        // Evaluación lógica condicional de los síntomas estipulados en el requerimiento
        switch (sintoma) {
            case 'no enciende':
                recomendacion = "Revisar carga de batería, estado de la bujía y flujo del sistema de inyección o carburador.";
                contadorFallosConocidos++;
                break;
            case 'vibra':
                recomendacion = "Verificar balanceo de rines, apriete de los soportes del motor y tensión de la cadena de transmisión.";
                contadorFallosConocidos++;
                break;
            case 'pierde aceite':
                recomendacion = "Inspeccionar empaques del cárter, tapón de drenaje y retenedores de las barras de suspensión.";
                contadorFallosConocidos++;
                break;
            case 'frena poco':
                recomendacion = "Sugerir cambio urgente de pastillas de freno, purga del líquido hidráulico y limpieza de discos.";
                contadorFallosConocidos++;
                break;
            default:
                // Caso Límite / Control preventivo 2: El síntoma no se encuentra mapeado en el diccionario core
                recomendacion = "Síntoma no tipificado en el manual básico de carrera. Requiere desmontaje e inspección avanzada en banco de pruebas.";
                contadorSintomasDesconocidos++;
                break;
        }

        // Renderizado atómico del síntoma evaluado
        const indicador = sintomaCrudo === sintoma ? "•" : "⚠ (Texto Normalizado) •";
        console.log(`${indicador} Síntoma [0${indice + 1}]: "${sintomaCrudo}"`);
        console.log(`  🔧 Diagnóstico: ${recomendacion}\n`);
    });

    // 5. Generación de métricas cuantitativas del Reporte Final
    console.log("----------------------- RESUMEN OPERATIVO -----------------------");
    console.log(`Anomalías Tipificadas y Mapeadas: ${contadorFallosConocidos}`);
    console.log(`Anomalías No Reconocidas (Inspección Manual): ${contadorSintomasDesconocidos}`);
    console.log(`Total de Eventos Evaluados: ${listaSintomas.length}`);
    console.log("==================================================================\n");
}

// ==================================================================
// PRUEBAS DE VALIDACIÓN Y CONTROL DE CALIDAD
// ==================================================================

// Caso de Validación 1: Prueba Normal (Uso estándar basado en el ejemplo del enunciado)
const ordenTrabajoPilotoA = ['vibra', 'frena poco'];
diagnosticar(ordenTrabajoPilotoA);

// Caso de Validación 2: Prueba Extrema / Casos Límite combinados
// Evalúa normalización de texto, síntomas no mapeados y datos atípicos
const ordenTrabajoPilotoB = ['  NO ENCIENDE ', 'pierde aceite', 'falla de embrague'];
diagnosticar(ordenTrabajoPilotoB);

// Caso de Validación 3: Prueba de Bloqueo de Seguridad (Datos Vacíos)
const ordenTrabajoVacia = [];
diagnosticar(ordenTrabajoVacia);