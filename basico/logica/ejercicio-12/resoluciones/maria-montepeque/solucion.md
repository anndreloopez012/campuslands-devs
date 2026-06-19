# Ejercicio 12 — Control de inventario streetwear
**Maria Montepeque**
Ruta: `basico/logica/ejercicio-12/resoluciones/maria-montepeque/`

---

## Cómo pensé el problema

El ejercicio pide tres cosas concretas:
1. Saber si una prenda tiene bajo stock (stock < 5).
2. Calcular cuántas unidades reponer: `ventasSemana * 2 - stock`, sin permitir negativos.
3. Organizar el reporte agrupado por talla.

Separé la lógica en funciones pequeñas para que cada una haga exactamente una cosa:
- `calcularReposicion` aplica la fórmula y protege contra negativos con `Math.max`.
- `analizarPrenda` toma una prenda y devuelve todos sus campos calculados.
- `mostrarReporte` recorre las tallas únicas y muestra la información agrupada.

Esto evita mezclar cálculo y presentación en el mismo bloque.

---

## Solución completa

Archivo: `inventario.js`

```js
// Ejercicio 12 - Control de inventario streetwear
// Maria Montepeque

const prendas = [
  { nombre: "Hoodie Oversized", talla: "S",  stock: 3,  ventasSemana: 8  },
  { nombre: "Hoodie Oversized", talla: "M",  stock: 12, ventasSemana: 5  },
  { nombre: "Cargo Pants",      talla: "M",  stock: 4,  ventasSemana: 6  },
  { nombre: "Cargo Pants",      talla: "L",  stock: 0,  ventasSemana: 4  },
  { nombre: "Bucket Hat",       talla: "U",  stock: 7,  ventasSemana: 2  },
  { nombre: "Tee Grafica",      talla: "XL", stock: 5,  ventasSemana: 0  },
];

function calcularReposicion(stock, ventasSemana) {
  const reposicionBruta = ventasSemana * 2 - stock;
  return Math.max(0, reposicionBruta);
}

function analizarPrenda(prenda) {
  const bajoPedido = prenda.stock < 5;
  const reposicion = calcularReposicion(prenda.stock, prenda.ventasSemana);

  return {
    nombre:      prenda.nombre,
    talla:       prenda.talla,
    stock:       prenda.stock,
    ventasSemana: prenda.ventasSemana,
    bajoPedido,
    reposicion,
  };
}

function mostrarReporte(resultados) {
  console.log("=== REPORTE DE INVENTARIO STREETWEAR ===\n");

  const tallasUnicas = [...new Set(resultados.map(r => r.talla))];

  for (const talla of tallasUnicas) {
    console.log(`--- Talla: ${talla} ---`);
    const prendasDeTalla = resultados.filter(r => r.talla === talla);

    for (const item of prendasDeTalla) {
      const alerta = item.bajoPedido ? "⚠ BAJO STOCK" : "OK";
      console.log(`  ${item.nombre}`);
      console.log(`    Stock actual:   ${item.stock}`);
      console.log(`    Ventas semana:  ${item.ventasSemana}`);
      console.log(`    Estado:         ${alerta}`);
      console.log(`    Reposición:     ${item.reposicion} unidades`);
    }
    console.log();
  }
}

function validar(caso, stock, ventasSemana, esperado) {
  const resultado = calcularReposicion(stock, ventasSemana);
  const ok = resultado === esperado;
  console.log(`[${ok ? "PASS" : "FAIL"}] ${caso}: reposicion=${resultado} (esperado ${esperado})`);
}

// --- Validación ---
console.log("=== VALIDACIÓN ===");
validar("Caso normal (ventas 8, stock 3)",    3, 8, 13);
validar("Caso límite (reposición negativa)",  12, 5, 0);
validar("Caso extremo (stock 0, ventas 0)",   0, 0, 0);
validar("Caso extremo (stock 0, ventas 4)",   0, 4, 8);
console.log();

// --- Reporte principal ---
const resultados = prendas.map(analizarPrenda);
mostrarReporte(resultados);
```

---

## Evidencia de validación

```
=== VALIDACIÓN ===
[PASS] Caso normal (ventas 8, stock 3): reposicion=13 (esperado 13)
[PASS] Caso límite (reposición negativa): reposicion=0 (esperado 0)
[PASS] Caso extremo (stock 0, ventas 0): reposicion=0 (esperado 0)
[PASS] Caso extremo (stock 0, ventas 4): reposicion=8 (esperado 8)

=== REPORTE DE INVENTARIO STREETWEAR ===

--- Talla: S ---
  Hoodie Oversized
    Stock actual:   3
    Ventas semana:  8
    Estado:         ⚠ BAJO STOCK
    Reposición:     13 unidades

--- Talla: M ---
  Hoodie Oversized
    Stock actual:   12
    Ventas semana:  5
    Estado:         OK
    Reposición:     0 unidades
  Cargo Pants
    Stock actual:   4
    Ventas semana:  6
    Estado:         ⚠ BAJO STOCK
    Reposición:     8 unidades

--- Talla: L ---
  Cargo Pants
    Stock actual:   0
    Ventas semana:  4
    Estado:         ⚠ BAJO STOCK
    Reposición:     8 unidades

--- Talla: U ---
  Bucket Hat
    Stock actual:   7
    Ventas semana:  2
    Estado:         OK
    Reposición:     0 unidades

--- Talla: XL ---
  Tee Grafica
    Stock actual:   5
    Ventas semana:  0
    Estado:         OK
    Reposición:     0 unidades
```

---

## Decisiones de diseño

| Decisión | Razón |
|---|---|
| `Math.max(0, reposicionBruta)` | Evita valores negativos sin usar un `if` extra |
| `Set` para tallas únicas | Agrupa sin duplicar, sin necesitar una librería |
| Funciones separadas por responsabilidad | Más fácil de leer y de modificar por partes |
| Caso `ventasSemana: 0` incluido | Verifica que no se sugiera reponer lo que no se vende |

---

## Comandos Git sugeridos

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-12/maria-montepeque
# ... agregar archivos ...
git add resoluciones/maria-montepeque/
git commit -m "ejercicio-12: inventario streetwear - Maria Montepeque"
git push origin ejercicio-12/maria-montepeque
```
