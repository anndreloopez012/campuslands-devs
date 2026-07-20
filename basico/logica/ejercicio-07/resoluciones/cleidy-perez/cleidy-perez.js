/**
 * Genera un reporte de causas mecánicas basado en un arreglo de síntomas.
 * @param {string[]} sintomas - Lista de síntomas detectados en el vehículo.
 * @returns {string} Reporte final estructurado.
 */
function diagnosticar(sintomas) {
 
    const baseConocimiento = {
        'no enciende': 'Posible fallo en la batería, terminales sulfatadas, alternador o bujías defectuosas.',
        'vibra': 'Podría deberse a problemas de alineación, neumáticos deformados o soportes de motor desgastados.',
        'pierde aceite': 'Fuga potencial en el cárter, empaque de la tapa de punterías o filtro de aceite mal ajustado.',
        'frena poco': 'Alerta crítica de seguridad: Pastillas de freno gastadas, nivel bajo de líquido o burbujas de aire en las líneas.'
    };

   
    if (!Array.isArray(sintomas) || sintomas.length === 0) {
        return '❌ Error: Debe proporcionar un arreglo válido con al menos un síntoma.';
    }

    const recomendaciones = sintomas.map((sintoma, indice) => {
    
        const sintomaLimpio = sintoma.trim().toLowerCase();
        
      
        const causaMecanica = baseConocimiento[sintomaLimpio] 
            ? baseConocimiento[sintomaLimpio] 
            : 'Síntoma desconocido. Se requiere una revisión por computadora en taller.';

        return `${indice + 1}. [Síntoma] "${sintoma.trim()}":\n   [Recomendación] ${causaMecanica}`;
    });

    // 3. Generación del reporte final
    return [
        '=============================================',
        '    REPORTE DE DIAGNÓSTICO MECÁNICO    ',
        '=============================================',
        `Fecha de evaluación: ${new Date().toLocaleDateString()}`,
        `Síntomas analizados: ${sintomas.length}\n`,
        ...recomendaciones,
        '\n============================================='
    ].join('\n');
}


const sintomasAuto1 = ['no enciende', 'frena poco', 'ruido raro'];
console.log(diagnosticar(sintomasAuto1));


const sintomasAuto2 = ['pierde aceite'];
console.log(diagnosticar(sintomasAuto2));