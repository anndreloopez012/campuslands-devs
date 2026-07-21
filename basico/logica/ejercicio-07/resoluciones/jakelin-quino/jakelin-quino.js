// Diagnóstico por síntoma
function diagnosticar(sintomas) {
  const causas = {
    'no enciende': 'Revisar batería, bujías y sistema eléctrico',
    'vibra': 'Revisar balanceo de ruedas y soportes de motor',
    'pierde aceite': 'Revisar juntas, empaques y nivel de aceite',
    'frena poco': 'Revisar pastillas, discos y líquido de frenos'
  };

  const recomendaciones = sintomas
    .filter(s => causas[s])
    .map(s => `🔧 ${s}: ${causas[s]}`);

  return recomendaciones.length 
    ? recomendaciones
    : ['No se detectaron síntomas conocidos. Revisión general recomendada'];
}

// Casos de prueba
const caso1 = ['vibra', 'frena poco'];
const caso2 = ['no enciende'];
const caso3 = ['ruido extraño'];
const caso4 = [];

console.log(diagnosticar(caso1));
console.log(diagnosticar(caso2));
console.log(diagnosticar(caso3));
console.log(diagnosticar(caso4));