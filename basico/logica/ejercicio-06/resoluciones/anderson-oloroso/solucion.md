# Resolución ejercicio 16 de javascript y git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el análisis de datos de un taller de motocicletas (`taller.js`). Se define un arreglo de objetos con información de potencia, peso y mantenimiento mensual, se calcula la relación peso-potencia ($hp / kg$), se filtran los vehículos con un costo de mantenimiento accesible, se ordenan según su rendimiento y se identifican las mejores alternativas para pista y economía.

```javascript
// 1. Base de datos de motos
const motos = [
  { marca: "Yamaha", modelo: "YZF-R6", hp: 118, pesoKg: 190, mantenimientoMensual: 450000 },
  { marca: "Honda", modelo: "CBR600RR", hp: 121, pesoKg: 193, mantenimientoMensual: 480000 },
  { marca: "Kawasaki", modelo: "Ninja 400", hp: 45, pesoKg: 168, mantenimientoMensual: 250000 },
  { marca: "Ducati", modelo: "Panigale V4", hp: 214, pesoKg: 198, mantenimientoMensual: 750000 },
  { marca: "Suzuki", modelo: "GSX-R750", hp: 148, pesoKg: 190, mantenimientoMensual: 520000 }
];

// 2. Cálculo de relación peso-potencia
const motosConRelacion = motos.map(moto => ({
  ...moto,
  relacionPesoPotencia: Number((moto.hp / moto.pesoKg).toFixed(3))
}));

// 3. Filtrar motos con mantenimiento mensual menor a 500,000
const motosFiltradas = motosConRelacion.filter(moto => moto.mantenimientoMensual < 500000);

// 4. Ordenar de mayor a menor según la relación peso-potencia
const motosOrdenadas = [...motosFiltradas].sort((a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia);

// 5. Selección de mejores opciones
const mejorParaPista = motosOrdenadas[0];
const mejorEconomica = [...motosFiltradas].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual)[0];

console.log("=== Clasificación de Motos ===");
console.log("Motos filtradas y ordenadas por rendimiento:", motosOrdenadas);
console.log("\nMejor opción para pista (Mejor relación HP/Kg):", `${mejorParaPista.marca} ${mejorParaPista.modelo} (${mejorParaPista.relacionPesoPotencia} HP/Kg)`);
console.log("Mejor opción económica (Menor mantenimiento):", `${mejorEconomica.marca} ${mejorEconomica.modelo} ($${mejorEconomica.mantenimientoMensual})`);
```
- Breve explicación

Primero, se construye el listado de motocicletas representando cada una como un objeto con sus especificaciones técnicas. Utilizando el método `.map()`, se calcula la métrica de rendimiento dividiendo los caballos de fuerza (`hp`) entre el peso en kilogramos (`pesoKg`).

A continuación, con `.filter()` se excluyen los modelos cuyo mantenimiento mensual sea mayor o igual a $500,000, garantizando que el taller evalúe únicamente opciones dentro del presupuesto. Posteriormente, mediante `.sort()`, se ordenan las motocicletas de forma descendente en función de su relación peso-potencia para determinar cuál ofrece la mejor aceleración y comportamiento dinámico.

Finalmente, se determina la mejor alternativa para pista (mayor valor de relación HP/Kg) y la más económica (menor costo de mantenimiento). Todo el código JavaScript se ejecuta y valida en consola con Node.js, registrando el avance en la rama `feature/clasificacion-motos` mediante un commit atómico e inspeccionando el historial con Git.