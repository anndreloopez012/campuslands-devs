
const baseDeDatosFallos = {
    'no enciende': 'Revisar batería, bujía y sistema de combustible.',
    'vibra': 'Revisar balanceo de llantas, presión de aire y ajuste de tornillería.',
    'pierde aceite': 'Revisar empaques, retenes y posibles fugas en el cárter.',
    'frena poco': 'Revisar desgaste de pastillas y nivel de líquido de frenos.'
};

function diagnosticar(listaSintomas) {
    if (!listaSintomas || listaSintomas.length === 0) {
        return "El reporte está vacío. No se detectaron síntomas.";
    }

    let reporte = "--- REPORTE TÉCNICO ---\n";

    listaSintomas.forEach((sintoma) => {
        if (baseDeDatosFallos[sintoma]) {
            reporte += `- ${sintoma.toUpperCase()}: ${baseDeDatosFallos[sintoma]}\n`;
        } else {
            reporte += `- ${sintoma.toUpperCase()}: Síntoma desconocido, realizar inspección visual.\n`;
        }
    });

    return reporte;
}
console.log(diagnosticar(['no enciende', 'vibra']));
console.log(diagnosticar(['frena poco', 'ruido extraño'])); 