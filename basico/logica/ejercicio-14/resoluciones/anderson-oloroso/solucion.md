# Resolución ejercicio 14 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el sistema de validación de mezclas químicas de un laboratorio educativo (`formulas_quimicas.js`). Se define una lista de compuestos con sus respectivos componentes, se valida que las cantidades ingresadas sean mayores a cero, se calcula la masa total en gramos por compuesto y se filtran aquellos compuestos que se consideran incompletos o defectuosos.

```javascript
// 1 y 2. Registro de compuestos con sus componentes (símbolo y gramos)
const compuestos = [
  {
    nombre: "Solución Salina",
    componentes: [
      { simbolo: "Na", gramos: 22.99 },
      { simbolo: "Cl", gramos: 35.45 },
      { simbolo: "H2O", gramos: 100 }
    ]
  },
  {
    nombre: "Muestra Ácida Incompleta",
    componentes: [
      { simbolo: "H", gramos: 2.02 },
      { simbolo: "S", gramos: 0 }, // Cantidad inválida (<= 0)
      { simbolo: "O", gramos: 64.00 }
    ]
  },
  {
    nombre: "Mezcla de Magnesio y Oxígeno",
    componentes: [
      { simbolo: "Mg", gramos: 24.31 },
      { simbolo: "O", gramos: 16.00 }
    ]
  },
  {
    nombre: "Ensayo con Reactivo Defectuoso",
    componentes: [
      { simbolo: "C", gramos: 12.01 },
      { simbolo: "H", gramos: -1.5 } // Cantidad inválida (<= 0)
    ]
  }
];

// 3, 4 y 5. Procesamiento de masa total y validación de componentes
const evaluacionCompuestos = compuestos.map(compuesto => {
  // Validar si algún componente tiene gramos <= 0
  const tieneComponenteInvalido = compuesto.componentes.some(comp => comp.gramos <= 0);

  // Sumar los gramos para obtener la masa total del compuesto
  const masaTotalGramos = compuesto.componentes.reduce((total, comp) => total + Math.max(0, comp.gramos), 0);

  return {
    ...compuesto,
    masaTotalGramos: Number(masaTotalGramos.toFixed(2)),
    esValido: !tieneComponenteInvalido
  };
});

// Filtrar compuestos completos/válidos e incompletos/inválidos
const compuestosCompletos = evaluacionCompuestos.filter(c => c.esValido);
const compuestosIncompletos = evaluacionCompuestos.filter(c => !c.esValido);

// Muestra de resultados
console.log("=== LABORATORIO EDUCATIVO - CONTROL DE MEZCLAS Y COMPUESTOS ===");

console.log("\n--- COMPUESTOS VÁLIDOS Y MASA TOTAL ---");
compuestosCompletos.forEach((compuesto, index) => {
  console.log(`${index + 1}. ${compuesto.nombre}`);
  console.log(`   - Componentes: ${compuesto.componentes.map(c => `${c.simbolo} (${c.gramos}g)`).join(', ')}`);
  console.log(`   - Masa total: ${compuesto.masaTotalGramos} gramos`);
});

if (compuestosIncompletos.length > 0) {
  console.log("\n--- COMPUESTOS INCOMPLETOS O CON ERRORES (RECHAZADOS) ---");
  compuestosIncompletos.forEach((compuesto, index) => {
    const fallos = compuesto.componentes.filter(c => c.gramos <= 0);
    console.log(`${index + 1}. ${compuesto.nombre}`);
    console.log(`   - Motivo: Contiene componentes con gramos <= 0 -> ${fallos.map(f => `${f.simbolo}:${f.gramos}g`).join(', ')}`);
  });
}
```

- Breve explicación

Primero, se construye la estructura de compuestos en la que cada objeto contiene un nombre y un arreglo de componentes con sus propiedades simbolo y gramos.

A continuación, con el método .map(), se recorre cada compuesto evaluando dos factores clave:

Se utiliza .some() para comprobar si existe al menos un componente con una masa menor o igual a cero (gramos <= 0), lo que marcaría el registro como incompleto o inválido.

Se utiliza .reduce() para sumar los gramos de cada elemento y determinar la masa total en gramos de la mezcla.

Finalmente, mediante el método .filter(), se separan los compuestos válidos de los incompletos, imprimiendo en consola la masa total de las mezclas aprobadas y señalando las inconsistencias de los ensayos rechazados para su posterior corrección en laboratorio.