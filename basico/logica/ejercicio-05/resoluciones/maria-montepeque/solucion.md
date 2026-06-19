# Ejercicio 05 — Tabla de fútbol sala

**Alumna:** Maria Montepeque  
**Rama:** `feat/ejercicio-05-maria-montepeque`  
**Ruta:** `basico/logica/ejercicio-05/resoluciones/maria-montepeque/`

---

## Cómo pensé el problema

Identifiqué tres partes separadas:

1. **Datos de entrada** → cada equipo tiene nombre, victorias, empates, derrotas, goles a favor y goles en contra.
2. **Proceso** → calcular puntos y diferencia de goles por equipo, luego ordenar la tabla con dos criterios: puntos primero, diferencia como desempate.
3. **Salida** → imprimir la tabla con posición y todas las columnas estándar de una liga.

Dividí la solución en funciones pequeñas, cada una con una sola responsabilidad, para que el flujo sea fácil de leer y de modificar.

---

## Funciones y su propósito

| Función | Propósito |
|---|---|
| `calcularPuntos(victorias, empates)` | Devuelve `victorias * 3 + empates` |
| `calcularDiferencia(golesFavor, golesContra)` | Devuelve la diferencia de goles |
| `construirFila(equipo)` | Agrega `puntos` y `diferencia` al objeto del equipo |
| `ordenarTabla(filas)` | Ordena por puntos desc, diferencia desc como desempate |
| `imprimirTabla(filas)` | Imprime la tabla con formato de columnas alineadas |
| `generarTabla(listaEquipos)` | Función principal; maneja lista vacía antes de procesar |

---

## Solución completa

```js
// validar.js — Ejercicio 05: Tabla de fútbol sala

const equipos = [
  { nombre: "Halcones FC",    victorias: 4, empates: 1, derrotas: 0, golesFavor: 18, golesContra: 7  },
  { nombre: "Tigres Sala",    victorias: 3, empates: 2, derrotas: 0, golesFavor: 14, golesContra: 8  },
  { nombre: "Rayo Indoor",    victorias: 2, empates: 1, derrotas: 2, golesFavor: 10, golesContra: 11 },
  { nombre: "Cóndores",       victorias: 1, empates: 0, derrotas: 4, golesFavor: 6,  golesContra: 16 },
  { nombre: "Sombra Azul",    victorias: 0, empates: 0, derrotas: 5, golesFavor: 3,  golesContra: 20 },
];

const equipoEmpate = { nombre: "Empate Puro", victorias: 0, empates: 5, derrotas: 0, golesFavor: 10, golesContra: 10 };

function calcularPuntos(victorias, empates) {
  return victorias * 3 + empates;
}

function calcularDiferencia(golesFavor, golesContra) {
  return golesFavor - golesContra;
}

function construirFila(equipo) {
  const puntos     = calcularPuntos(equipo.victorias, equipo.empates);
  const diferencia = calcularDiferencia(equipo.golesFavor, equipo.golesContra);
  return { ...equipo, puntos, diferencia };
}

function ordenarTabla(filas) {
  return [...filas].sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    return b.diferencia - a.diferencia;
  });
}

function imprimirTabla(filas) {
  console.log("\nPos | Equipo           | PJ | V  | E  | D  | GF | GC | Dif | Pts");
  console.log("----+------------------+----+----+----+----+----+----+-----+----");
  filas.forEach((fila, indice) => {
    const pos    = String(indice + 1).padStart(3);
    const nombre = fila.nombre.padEnd(16);
    const pj     = String(fila.victorias + fila.empates + fila.derrotas).padStart(3);
    const v      = String(fila.victorias).padStart(3);
    const e      = String(fila.empates).padStart(3);
    const d      = String(fila.derrotas).padStart(3);
    const gf     = String(fila.golesFavor).padStart(3);
    const gc     = String(fila.golesContra).padStart(3);
    const dif    = String(fila.diferencia).padStart(4);
    const pts    = String(fila.puntos).padStart(3);
    console.log(`${pos} | ${nombre} | ${pj} | ${v} | ${e} | ${d} | ${gf} | ${gc} | ${dif} | ${pts}`);
  });
}

function generarTabla(listaEquipos) {
  if (!listaEquipos || listaEquipos.length === 0) {
    console.log("Sin equipos registrados — la tabla está vacía.");
    return;
  }
  const filas     = listaEquipos.map(construirFila);
  const ordenadas = ordenarTabla(filas);
  imprimirTabla(ordenadas);
}

// Caso normal: cinco equipos con resultados distintos
console.log("=== CASO NORMAL: Liga de fútbol sala ===");
generarTabla(equipos);

// Caso límite: equipo con solo empates (0 victorias, 0 derrotas)
console.log("\n=== CASO LÍMITE: equipo con puro empate ===");
generarTabla([equipoEmpate, equipos[0]]);

// Caso vacío
console.log("\n=== CASO VACÍO: lista sin equipos ===");
generarTabla([]);
```

---

## Evidencia de validación

### Caso normal — cinco equipos

```
Pos | Equipo           | PJ | V  | E  | D  | GF | GC | Dif | Pts
----+------------------+----+----+----+----+----+----+-----+----
  1 | Halcones FC      |   5 |   4 |   1 |   0 |  18 |   7 |   11 |  13
  2 | Tigres Sala      |   5 |   3 |   2 |   0 |  14 |   8 |    6 |  11
  3 | Rayo Indoor      |   5 |   2 |   1 |   2 |  10 |  11 |   -1 |   7
  4 | Cóndores         |   5 |   1 |   0 |   4 |   6 |  16 |  -10 |   3
  5 | Sombra Azul      |   5 |   0 |   0 |   5 |   3 |  20 |  -17 |   0
```

✅ Halcones FC con 4V 1E 0D tiene **13 puntos** — coincide con el ejemplo del README.

### Caso límite — equipo con 5 empates y 0 victorias

```
Pos | Equipo           | PJ | V  | E  | D  | GF | GC | Dif | Pts
----+------------------+----+----+----+----+----+----+-----+----
  1 | Halcones FC      |   5 |   4 |   1 |   0 |  18 |   7 |   11 |  13
  2 | Empate Puro      |   5 |   0 |   5 |   0 |  10 |  10 |    0 |   5
```

✅ Un equipo con puro empate acumula puntos (`empates * 1`) sin romper el cálculo.

### Caso vacío — lista sin equipos

```
Sin equipos registrados — la tabla está vacía.
```

✅ La función maneja la lista vacía sin lanzar errores.

---

## Comandos Git

```bash
git checkout dev
git pull origin dev
git checkout -b feat/ejercicio-05-maria-montepeque
# crear archivos de solución
git add basico/logica/ejercicio-05/resoluciones/maria-montepeque/
git commit -m "feat(ejercicio-05): tabla de fútbol sala con ordenamiento por puntos y diferencia"
git push origin feat/ejercicio-05-maria-montepeque
```
