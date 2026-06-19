# Ejercicio 14 — Laboratorio de fórmulas químicas

**Alumna:** Maria Montepeque  
**Dificultad:** Media  
**Archivo principal:** `laboratorio.js`

---

## Cómo pensé el problema

El laboratorio guarda compuestos químicos. Cada compuesto tiene un nombre, una fórmula y una lista de componentes con símbolo y gramos. El objetivo es dos cosas:

1. **Calcular la masa total** de cada compuesto sumando los gramos de sus componentes.
2. **Detectar compuestos incompletos**: aquellos que no tienen componentes, o que tienen algún componente con gramos ≤ 0.

Separé la solución en tres funciones pequeñas para que cada una haga una sola cosa:

- `tieneComponentesInvalidos(compuesto)` — decide si un compuesto está incompleto.
- `calcularMasaTotal(compuesto)` — suma los gramos de los componentes válidos.
- `analizarCompuestos(listaDeCompuestos)` — recorre todos los compuestos y construye dos listas: resultados válidos e incompletos.

---

## Código

```js
// Ejercicio 14 - Laboratorio de fórmulas químicas
// Maria Montepeque

const compuestos = [
  {
    nombre: "Agua",
    formula: "H2O",
    componentes: [
      { simbolo: "H", gramos: 2.0 },
      { simbolo: "O", gramos: 16.0 }
    ]
  },
  {
    nombre: "Dióxido de carbono",
    formula: "CO2",
    componentes: [
      { simbolo: "C", gramos: 12.0 },
      { simbolo: "O", gramos: 32.0 }
    ]
  },
  {
    nombre: "Cloruro de sodio",
    formula: "NaCl",
    componentes: [
      { simbolo: "Na", gramos: 23.0 },
      { simbolo: "Cl", gramos: 0 }    // caso límite: gramos = 0
    ]
  },
  {
    nombre: "Compuesto vacío",
    formula: "??",
    componentes: []                    // caso vacío: sin componentes
  }
];

function tieneComponentesInvalidos(compuesto) {
  if (compuesto.componentes.length === 0) return true;

  return compuesto.componentes.some(
    (componente) => componente.gramos <= 0
  );
}

function calcularMasaTotal(compuesto) {
  return compuesto.componentes.reduce(
    (acumulado, componente) => acumulado + componente.gramos,
    0
  );
}

function analizarCompuestos(listaDeCompuestos) {
  const resultados = [];
  const incompletos = [];

  for (const compuesto of listaDeCompuestos) {
    if (tieneComponentesInvalidos(compuesto)) {
      incompletos.push(compuesto.nombre);
      continue;
    }

    const masaTotal = calcularMasaTotal(compuesto);

    resultados.push({
      nombre: compuesto.nombre,
      formula: compuesto.formula,
      masaTotal: masaTotal
    });
  }

  return { resultados, incompletos };
}

const { resultados, incompletos } = analizarCompuestos(compuestos);

console.log("=== Compuestos válidos ===");
for (const resultado of resultados) {
  console.log(`${resultado.nombre} (${resultado.formula}): ${resultado.masaTotal}g`);
}

console.log("\n=== Compuestos incompletos ===");
if (incompletos.length === 0) {
  console.log("Ninguno");
} else {
  for (const nombre of incompletos) {
    console.log(`- ${nombre}`);
  }
}
```

---

## Casos de prueba

### Caso normal — H2O y CO2
Compuestos con todos sus componentes con gramos mayores a cero.  
Se espera que aparezcan en la sección de válidos con su masa calculada.

### Caso límite — NaCl con Cl en 0 gramos
Un componente con `gramos: 0` hace que el compuesto entero sea marcado como incompleto.

### Caso vacío — Compuesto sin componentes
Si el arreglo de componentes está vacío, el compuesto también es incompleto.

---

## Evidencia de ejecución

```
$ node laboratorio.js

=== Compuestos válidos ===
Agua (H2O): 18g
Dióxido de carbono (CO2): 44g

=== Compuestos incompletos ===
- Cloruro de sodio
- Compuesto vacío
```

---

## Comandos Git

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-14/maria-montepeque
# ... trabajo en la solución ...
git add resoluciones/maria-montepeque/
git commit -m "ejercicio-14: laboratorio de fórmulas químicas - Maria Montepeque"
git push origin ejercicio-14/maria-montepeque
```
