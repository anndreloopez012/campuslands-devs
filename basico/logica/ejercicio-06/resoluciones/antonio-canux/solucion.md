# Entregable: Comparador de Motos Deportivas

**Camper:** Antonio Canux

## 1. Solución (JavaScript)

```javascript
// 1. Base de datos del taller con las motos deportivas
const motos = [
  { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 201, mantenimientoMensual: 450000 },
  { marca: "Ducati", modelo: "Panigale V4", hp: 214, pesoKg: 198, mantenimientoMensual: 600000 },
  { marca: "Kawasaki", modelo: "Ninja ZX-10R", hp: 203, pesoKg: 206, mantenimientoMensual: 480000 },
  { marca: "Honda", modelo: "CBR600RR", hp: 119, pesoKg: 194, mantenimientoMensual: 300000 },
  { marca: "Suzuki", modelo: "GSX-R1000", hp: 199, pesoKg: 202, mantenimientoMensual: 420000 }
];

// 2. Calcular la relación hp / pesoKg para evaluar el rendimiento
const motosConRendimiento = motos.map(moto => ({
  ...moto,
  relacionPesoPotencia: Number((moto.hp / moto.pesoKg).toFixed(2)) // Redondeado a 2 decimales
}));

// 3. Filtrar las opciones que superan el presupuesto de mantenimiento (< 500,000)
const motosFiltradas = motosConRendimiento.filter(moto => moto.mantenimientoMensual < 500000);

// 4. Ordenar por la mejor relación peso-potencia (de mayor a menor)
const motosOrdenadasParaPista = [...motosFiltradas].sort((a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia);

// 5. Determinar las mejores opciones según la necesidad
const mejorOpcionPista = motosOrdenadasParaPista[0];

const mejorOpcionEconomica = [...motosFiltradas].sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual)[0];

// Imprimir resultados
console.log("--- RESULTADOS DEL TALLER ---");
console.log(`Mejor opción para pista: ${mejorOpcionPista.marca} ${mejorOpcionPista.modelo} (Relación: ${mejorOpcionPista.relacionPesoPotencia})`);
console.log(`Mejor opción económica: ${mejorOpcionEconomica.marca} ${mejorOpcionEconomica.modelo} (Mantenimiento: Q${mejorOpcionEconomica.mantenimientoMensual})`);
```
## Cómo se pensó el problema?

Para resolver este problema, apliqué una secuencia lógica utilizando métodos de arreglos (arrays) que permiten transformar y limpiar los datos paso a paso:

**Transformación (map):** Desde el punto de vista mecánico, la relación peso-potencia es la métrica definitiva para saber qué tan rápido acelerará un vehículo. Utilicé map para recorrer cada moto e inyectarle una nueva propiedad calculada dividiendo los caballos de fuerza (hp) entre el peso en kilogramos (pesoKg).

**Limpieza (filter):** Un vehículo de alto rendimiento no sirve si el cliente no puede mantenerlo. Apliqué filter para descartar inmediatamente cualquier moto cuyo costo mensual de mantenimiento sea de 500,000 o superior.

**Clasificación (sort):** Para encontrar la mejor moto de pista, ordené el arreglo filtrado de mayor a menor basándome en la relación obtenida en el paso 1. Para la opción más económica, tomé el mismo arreglo filtrado y lo ordené de menor a mayor basándome únicamente en la propiedad mantenimientoMensual.

Se utilizó el operador spread ([...]) antes de los métodos sort para evitar mutar el arreglo original filtrado, manteniendo una estructura de datos inmutable y predecible.

## Evidencia de validación

```
--- RESULTADOS DEL TALLER ---
Mejor opción para pista: Yamaha R1 (Relación: 1.00)
Mejor opción económica: Honda CBR600RR (Mantenimiento: Q300000)
```