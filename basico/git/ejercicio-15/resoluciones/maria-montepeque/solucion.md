# Ejercicio 15 — Checklist final de flujo profesional

**Nombre:** Maria Montepeque  
**Carpeta:** `basico/git/ejercicio-15/resoluciones/maria-montepeque/`  
**Archivo principal:** `checklist.js`

---

## Cómo pensé el problema

El ejercicio pide integrar el flujo completo de Git (ramas, commits, pull, push y revisión final) usando una temática de ropa y proyectos reales. Interpreté el objetivo como: construir una función que simule el "checklist de entrega profesional" para una colección de prendas, donde cada prenda debe cumplir ciertos requisitos antes de considerarse lista.

Pasos que seguí:

1. Definí qué campos son obligatorios para una prenda: nombre, precio, talla y estado de stock.
2. Construí la función `verificarEntregaProyecto` que recorre la colección y acumula errores por prenda.
3. Agregué una función de presentación `mostrarResultado` para que la salida sea legible.
4. Validé tres casos: colección completa, datos límite/inválidos, y colección vacía.

---

## Flujo Git simulado

```bash
# 1. Crear rama desde dev
git checkout dev
git pull origin dev
git checkout -b feature/ejercicio-15-maria-montepeque

# 2. Trabajar en la solución
# → crear checklist.js con la lógica de validación

# 3. Hacer commit claro
git add resoluciones/maria-montepeque/
git commit -m "feat(ejercicio-15): agrega checklist de entrega para colección de ropa"

# 4. Actualizar con dev antes de entregar
git fetch origin dev
git merge origin/dev
# (resolver conflictos si los hay, luego commit de merge)

# 5. Push y Pull Request
git push origin feature/ejercicio-15-maria-montepeque
# → abrir PR hacia dev con descripción del trabajo realizado

# Verificación final
git status
git log --oneline -5
```

### Salida esperada de `git log --oneline`

```
a3f91bc feat(ejercicio-15): agrega checklist de entrega para colección de ropa
d02c441 Merge branch 'origin/dev' into feature/ejercicio-15-maria-montepeque
...
```

---

## Solución — `checklist.js`

```js
// Ejercicio 15 - Checklist final de flujo profesional
// Nombre: Maria Montepeque

const coleccionRopa = [
  { id: 1, nombre: "Camiseta básica", talla: "M", precio: 85, enStock: true },
  { id: 2, nombre: "Pantalón de mezclilla", talla: "32", precio: 320, enStock: true },
  { id: 3, nombre: "Vestido floral", talla: "S", precio: 250, enStock: false },
  { id: 4, nombre: "Sudadera con capucha", talla: "L", precio: 180, enStock: true },
];

function verificarEntregaProyecto(prendas) {
  const checklist = {
    tieneNombre: false,
    tienePrecio: false,
    tieneTalla: false,
    tieneStock: false,
    totalPrendas: 0,
    prendasDisponibles: 0,
    valorInventario: 0,
    errores: [],
  };

  if (!prendas || prendas.length === 0) {
    checklist.errores.push("La colección está vacía o no fue proporcionada.");
    return checklist;
  }

  checklist.totalPrendas = prendas.length;

  for (const prenda of prendas) {
    if (!prenda.nombre || prenda.nombre.trim() === "") {
      checklist.errores.push(`Prenda ID ${prenda.id} no tiene nombre.`);
    } else {
      checklist.tieneNombre = true;
    }

    if (prenda.precio === null || prenda.precio === undefined || prenda.precio < 0) {
      checklist.errores.push(`Prenda ID ${prenda.id} tiene precio inválido: ${prenda.precio}`);
    } else {
      checklist.tienePrecio = true;
    }

    if (!prenda.talla || prenda.talla.trim() === "") {
      checklist.errores.push(`Prenda ID ${prenda.id} no tiene talla definida.`);
    } else {
      checklist.tieneTalla = true;
    }

    if (typeof prenda.enStock !== "boolean") {
      checklist.errores.push(`Prenda ID ${prenda.id} no tiene estado de stock válido.`);
    } else {
      checklist.tieneStock = true;
    }

    if (prenda.enStock === true) {
      checklist.prendasDisponibles += 1;
      checklist.valorInventario += prenda.precio || 0;
    }
  }

  return checklist;
}

function mostrarResultado(etiqueta, resultado) {
  console.log(`\n=== ${etiqueta} ===`);
  console.log(`Total de prendas:       ${resultado.totalPrendas}`);
  console.log(`Prendas disponibles:    ${resultado.prendasDisponibles}`);
  console.log(`Valor en inventario:    Q${resultado.valorInventario.toFixed(2)}`);
  console.log(`Nombre presente:        ${resultado.tieneNombre}`);
  console.log(`Precio presente:        ${resultado.tienePrecio}`);
  console.log(`Talla presente:         ${resultado.tieneTalla}`);
  console.log(`Stock presente:         ${resultado.tieneStock}`);

  if (resultado.errores.length > 0) {
    console.log("Errores encontrados:");
    for (const error of resultado.errores) {
      console.log(`  - ${error}`);
    }
  } else {
    console.log("Sin errores. Colección lista para entrega.");
  }
}

// Caso 1: colección normal con datos completos
const resultadoNormal = verificarEntregaProyecto(coleccionRopa);
mostrarResultado("Caso normal - colección completa", resultadoNormal);

// Caso 2: prenda con precio en cero y sin talla (caso límite)
const coleccionLimite = [
  { id: 10, nombre: "Prenda sin talla", talla: "", precio: 0, enStock: true },
  { id: 11, nombre: "Prenda con precio negativo", talla: "XL", precio: -50, enStock: false },
];
const resultadoLimite = verificarEntregaProyecto(coleccionLimite);
mostrarResultado("Caso límite - datos incompletos o inválidos", resultadoLimite);

// Caso 3: colección vacía
const resultadoVacio = verificarEntregaProyecto([]);
mostrarResultado("Caso vacío - sin prendas", resultadoVacio);
```

---

## Evidencia de validación

```
=== Caso normal - colección completa ===
Total de prendas:       4
Prendas disponibles:    3
Valor en inventario:    Q585.00
Nombre presente:        true
Precio presente:        true
Talla presente:         true
Stock presente:         true
Sin errores. Colección lista para entrega.

=== Caso límite - datos incompletos o inválidos ===
Total de prendas:       2
Prendas disponibles:    1
Valor en inventario:    Q0.00
Nombre presente:        true
Precio presente:        true
Talla presente:         true
Stock presente:         true
Errores encontrados:
  - Prenda ID 10 no tiene talla definida.
  - Prenda ID 11 tiene precio inválido: -50

=== Caso vacío - sin prendas ===
Total de prendas:       0
Prendas disponibles:    0
Valor en inventario:    Q0.00
Nombre presente:        false
Precio presente:        false
Talla presente:         false
Stock presente:         false
Errores encontrados:
  - La colección está vacía o no fue proporcionada.
```

### Verificación de nombres de variables

```bash
grep -n "cosas\|varios\|data\b\|item\b\|temp\b\|arr\b\|obj\b" checklist.js
# → sin resultados: todos los identificadores son descriptivos
```

---

## Checklist de entrega profesional

- [x] Archivo dentro de `resoluciones/maria-montepeque/`
- [x] Nombre de carpeta en formato `nombre-apellido`
- [x] Rama creada desde `dev` (no se trabajó en `main`)
- [x] Commit con mensaje descriptivo usando prefijo `feat`
- [x] Se ejecutó `git merge origin/dev` antes del push
- [x] No se modificaron archivos base del ejercicio
- [x] No se eliminó `.gitkeep`
- [x] Variables con nombres relacionados al contexto (ropa, prendas, colección)
- [x] Tres casos de validación: normal, límite y vacío
- [x] Explicación del razonamiento incluida
