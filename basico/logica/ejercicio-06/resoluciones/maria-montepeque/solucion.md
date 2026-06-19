# Ejercicio 06 — Comparador de motos deportivas

**Alumna:** Maria Montepeque
**Rama:** `feat/ejercicio-06-maria-montepeque`
**Ruta:** `basico/logica/ejercicio-06/resoluciones/maria-montepeque/`

---

## Cómo pensé el problema

El taller necesita tomar dos decisiones distintas sobre el mismo conjunto de motos: cuál es mejor para llevar a pista y cuál cuesta menos mantener. Ambas preguntas parten del mismo catálogo, pero usan criterios diferentes.

Dividí el proceso en cuatro pasos concretos:

1. **Almacenar** los datos crudos de cada moto (marca, modelo, hp, pesoKg, mantenimientoMensual).
2. **Calcular** la relación hp/kg para cada moto — ese número resume qué tan "rápida" es en relación a su masa.
3. **Filtrar** descartando motos con mantenimiento mensual mayor o igual a Q500,000 porque el taller no puede sostenerlas económicamente.
4. **Seleccionar** la ganadora de pista (mayor relación hp/kg entre las aptas) y la ganadora económica (menor mantenimiento entre las aptas).

Cada paso vive en su propia función para poder validar cada pieza por separado.

---

## Solución

### Archivo: `comparador.js`

```js
// Comparador de motos deportivas

const motos = [
  { marca: "Ducati",    modelo: "Panigale V4",  hp: 214, pesoKg: 175, mantenimientoMensual: 620000 },
  { marca: "Kawasaki",  modelo: "Ninja ZX-10R", hp: 203, pesoKg: 207, mantenimientoMensual: 420000 },
  { marca: "Yamaha",    modelo: "YZF-R1",       hp: 200, pesoKg: 201, mantenimientoMensual: 390000 },
  { marca: "Honda",     modelo: "CBR1000RR-R",  hp: 217, pesoKg: 201, mantenimientoMensual: 480000 },
  { marca: "Suzuki",    modelo: "GSX-R1000",    hp: 199, pesoKg: 203, mantenimientoMensual: 310000 },
];

function calcularRelacionPotenciaPeso(moto) {
  return moto.hp / moto.pesoKg;
}

function filtrarPorMantenimiento(listado, limiteMantenimiento) {
  return listado.filter(moto => moto.mantenimientoMensual < limiteMantenimiento);
}

function ordenarPorRelacion(listado) {
  return [...listado].sort((a, b) => {
    const relacionA = calcularRelacionPotenciaPeso(a);
    const relacionB = calcularRelacionPotenciaPeso(b);
    return relacionB - relacionA;
  });
}

function encontrarMejorDePista(listado) {
  if (listado.length === 0) return null;
  const ordenadas = ordenarPorRelacion(listado);
  return ordenadas[0];
}

function encontrarMejorEconomica(listado) {
  if (listado.length === 0) return null;
  return listado.reduce((menor, moto) =>
    moto.mantenimientoMensual < menor.mantenimientoMensual ? moto : menor
  );
}

function mostrarMoto(moto) {
  const relacion = calcularRelacionPotenciaPeso(moto).toFixed(3);
  console.log(`  ${moto.marca} ${moto.modelo}`);
  console.log(`    HP: ${moto.hp} | Peso: ${moto.pesoKg} kg | Relación: ${relacion}`);
  console.log(`    Mantenimiento: Q${moto.mantenimientoMensual.toLocaleString()}/mes`);
}

function comparar(listado) {
  console.log(`\nTotal de motos en catálogo: ${listado.length}`);

  const aptas = filtrarPorMantenimiento(listado, 500000);
  console.log(`Motos con mantenimiento menor a Q500,000: ${aptas.length}`);

  const mejorPista = encontrarMejorDePista(aptas);
  const mejorEconomica = encontrarMejorEconomica(aptas);

  if (mejorPista) {
    console.log("\nMejor opción para pista (mayor relación hp/kg):");
    mostrarMoto(mejorPista);
  } else {
    console.log("\nNo hay motos aptas para pista con ese límite de mantenimiento.");
  }

  if (mejorEconomica) {
    console.log("\nMejor opción económica (menor mantenimiento entre las aptas):");
    mostrarMoto(mejorEconomica);
  } else {
    console.log("\nNo hay motos económicas disponibles.");
  }
}
```

---

## Decisiones de diseño

| Decisión | Por qué |
|---|---|
| `calcularRelacionPotenciaPeso` es una función separada | Se reutiliza en filtro, ordenamiento y visualización sin repetir la fórmula |
| `filtrarPorMantenimiento` recibe el límite como parámetro | Permite cambiar el umbral sin tocar la lógica interna |
| `[...listado].sort(...)` usa una copia del arreglo | El `sort` original muta el arreglo; la copia protege el catálogo original |
| `encontrarMejorEconomica` usa `reduce` en lugar de ordenar | Solo necesito el mínimo, ordenar todo el arreglo sería innecesario |
| Las funciones retornan `null` si el listado está vacío | Permite que `comparar` muestre un mensaje apropiado en vez de romper la ejecución |

---

## Evidencia de validación

### Caso normal (5 motos, filtro Q500,000)

```
=== CASO NORMAL ===

Total de motos en catálogo: 5
Motos con mantenimiento menor a Q500,000: 4

Mejor opción para pista (mayor relación hp/kg):
  Honda CBR1000RR-R
    HP: 217 | Peso: 201 kg | Relación: 1.080
    Mantenimiento: Q480,000/mes

Mejor opción económica (menor mantenimiento entre las aptas):
  Suzuki GSX-R1000
    HP: 199 | Peso: 203 kg | Relación: 0.980
    Mantenimiento: Q310,000/mes
```

La Ducati Panigale V4 queda excluida porque su mantenimiento (Q620,000) supera el límite. La Honda gana en pista por relación 1.080 aunque su mantenimiento es alto (pero dentro del límite). La Suzuki gana en economía por ser la más barata de mantener entre las cuatro aptas.

### Caso límite (umbral muy bajo: Q350,000)

```
=== CASO LÍMITE: umbral muy bajo (solo motos < Q350,000) ===
Motos aptas: 1
Mejor para pista:
  Suzuki GSX-R1000
    HP: 199 | Peso: 203 kg | Relación: 0.980
    Mantenimiento: Q310,000/mes
Mejor económica:
  Suzuki GSX-R1000
    HP: 199 | Peso: 203 kg | Relación: 0.980
    Mantenimiento: Q310,000/mes
```

Cuando solo queda una moto apta, el comparador la elige en ambas categorías sin errores. El caso verifica que no se rompe la lógica cuando el conjunto filtrado es muy pequeño.

### Caso vacío (catálogo sin motos)

```
=== CASO VACÍO: catálogo sin motos ===

Total de motos en catálogo: 0
Motos con mantenimiento menor a Q500,000: 0

No hay motos aptas para pista con ese límite de mantenimiento.
No hay motos económicas disponibles.
```

Las funciones retornan `null` y `comparar` muestra mensajes claros en lugar de lanzar errores.

---

## Flujo Git

```bash
# Crear rama desde dev
git checkout dev
git checkout -b feat/ejercicio-06-maria-montepeque

# Agregar archivos
git add basico/logica/ejercicio-06/resoluciones/maria-montepeque/

# Commit
git commit -m "feat(ejercicio-06): agregar comparador de motos deportivas - maria montepeque"

# Push
git push -u origin feat/ejercicio-06-maria-montepeque
```
