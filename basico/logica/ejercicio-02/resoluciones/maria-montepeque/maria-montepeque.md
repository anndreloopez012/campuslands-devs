# Inventario táctico de shooter — Solución

**Autora:** María Montepeque
**Carpeta:** `basico/logica/ejercicio-02/resoluciones/maria-montepeque/`

## Cómo pensé el problema

Lo separé en entrada, proceso y salida:

- **Entrada:** un arreglo de armas, donde cada arma es `{ nombre, tipo, municion, rareza }`.
- **Proceso:**
  1. Filtrar las armas con `municion >= 30`, descartando además valores vacíos, no numéricos o en cero.
  2. Marcar como recomendadas las armas de rareza `rara` o `epica`.
  3. Separar el resultado en `rifle`, `pistola` y `francotirador`.
- **Salida:** un resumen impreso por consola, agrupado por tipo, que muestra munición, rareza y si el arma es recomendada.

Dividí la lógica en funciones pequeñas (una por responsabilidad) para que cada paso se lea y se pruebe por separado, y usé constantes (`MUNICION_MINIMA` y `RAREZAS_RECOMENDADAS`) para no dejar números ni reglas sueltas dentro del código.

## Solución completa

```javascript
const arsenal = [
  { nombre: "AK-47",        tipo: "rifle",         municion: 45, rareza: "epica" },
  { nombre: "Desert Eagle", tipo: "pistola",       municion: 28, rareza: "rara" },
  { nombre: "AWP",          tipo: "francotirador", municion: 30, rareza: "legendaria" },
  { nombre: "Glock-18",     tipo: "pistola",       municion: 51, rareza: "comun" },
  { nombre: "M4A4",         tipo: "rifle",         municion: 90, rareza: "rara" },
  { nombre: "Scout",        tipo: "francotirador", municion: 10, rareza: "comun" },
  { nombre: "USP-S",        tipo: "pistola",       municion: 0,  rareza: "epica" },
];

const MUNICION_MINIMA = 30;
const RAREZAS_RECOMENDADAS = ["rara", "epica"];

function filtrarPorMunicion(armas, minimo) {
  if (!Array.isArray(armas) || armas.length === 0) {
    return [];
  }

  return armas.filter((arma) => {
    const municionValida = typeof arma.municion === "number" && arma.municion > 0;
    return municionValida && arma.municion >= minimo;
  });
}

function separarPorTipo(armas) {
  const grupos = {
    rifle: [],
    pistola: [],
    francotirador: [],
  };

  armas.forEach((arma) => {
    if (grupos[arma.tipo]) {
      grupos[arma.tipo].push(arma);
    }
  });

  return grupos;
}

function marcarRecomendadas(armas) {
  return armas.map((arma) => ({
    ...arma,
    recomendada: RAREZAS_RECOMENDADAS.includes(arma.rareza),
  }));
}

function imprimirResumen(grupos) {
  for (const tipo in grupos) {
    const armas = grupos[tipo];
    console.log(`\n=== ${tipo.toUpperCase()} (${armas.length}) ===`);

    if (armas.length === 0) {
      console.log("  Sin armas disponibles en esta categoría.");
      continue;
    }

    armas.forEach((arma) => {
      const etiqueta = arma.recomendada ? "★ RECOMENDADA" : "";
      console.log(`  ${arma.nombre} | ${arma.municion} balas | ${arma.rareza} ${etiqueta}`.trim());
    });
  }
}

function generarCargaDeCombate(armas, minimo) {
  const disponibles = filtrarPorMunicion(armas, minimo);
  const conRecomendacion = marcarRecomendadas(disponibles);
  return separarPorTipo(conRecomendacion);
}

console.log("########## CASO NORMAL: arsenal completo ##########");
imprimirResumen(generarCargaDeCombate(arsenal, MUNICION_MINIMA));

console.log("\n\n########## CASO LÍMITE: arreglo vacío ##########");
imprimirResumen(generarCargaDeCombate([], MUNICION_MINIMA));
```

## Cómo ejecutarlo

```bash
node solucion.js
```

## Validación

Probé dos casos, uno normal y uno límite:

- **Caso normal:** el arsenal completo. Incluye la AWP con exactamente 30 balas (borde del filtro `>= 30`) y la USP-S con 0 balas, que aunque es épica queda descartada por no tener munición. El ejemplo del enunciado se cumple: el AK-47 (45 balas, épica) aparece como recomendado.
- **Caso límite:** un arreglo vacío `[]`, para confirmar que el programa no falla cuando no hay datos.

### Evidencia de salida

```text
########## CASO NORMAL: arsenal completo ##########

=== RIFLE (2) ===
AK-47 | 45 balas | epica ★ RECOMENDADA
M4A4 | 90 balas | rara ★ RECOMENDADA

=== PISTOLA (1) ===
Glock-18 | 51 balas | comun

=== FRANCOTIRADOR (1) ===
AWP | 30 balas | legendaria


########## CASO LÍMITE: arreglo vacío ##########

=== RIFLE (0) ===
  Sin armas disponibles en esta categoría.

=== PISTOLA (0) ===
  Sin armas disponibles en esta categoría.

=== FRANCOTIRADOR (0) ===
  Sin armas disponibles en esta categoría.
```

## Nota

Según el enunciado, "recomendada" aplica solo a las armas raras o épicas, por eso la AWP (legendaria) no aparece marcada. Para incluir la rareza legendaria bastaría con agregarla al arreglo `RAREZAS_RECOMENDADAS`.