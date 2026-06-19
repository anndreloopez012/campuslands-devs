# Ejercicio 15 — Presupuesto de estudio de animación 3D

**Alumna:** Maria Montepeque  
**Ruta:** `basico/logica/ejercicio-15/resoluciones/maria-montepeque/`

---

## Cómo pensé el problema

El ejercicio pide trabajar con escenas de animación 3D donde cada una tiene tres variables numéricas: horas de modelado, horas de render y cantidad de artistas. A partir de esos valores se calcula un costo usando una fórmula fija.

Dividí la solución en partes pequeñas:

1. **Datos**: definir las escenas como objetos con campos descriptivos.
2. **Cálculo**: una función `calcularCosto` que aplica la fórmula y devuelve un número.
3. **Transformación**: usar `.map()` para enriquecer cada escena con su costo calculado.
4. **Filtrado**: usar `.filter()` para aislar las escenas que superan $1,000,000.
5. **Acumulación**: usar `.reduce()` para sumar el costo total.
6. **Máximo**: usar `.reduce()` comparando costos para encontrar la escena más cara.
7. **Guarda de entrada vacía**: si la lista es vacía o nula, salir temprano con un mensaje.

---

## Fórmula

```
costo = horasModelado × 40,000 + horasRender × 25,000 + artistas × 120,000
```

Verificación con el ejemplo del README (10h modelado, 8h render, 3 artistas):

```
10 × 40,000 = 400,000
 8 × 25,000 = 200,000
 3 × 120,000 = 360,000
Total        = 960,000 ✓
```

---

## Código

```js
// Ejercicio 15 - Presupuesto de estudio de animación 3D

const escenas = [
  { nombre: "Apertura del portal",    horasModelado: 10, horasRender: 8,  artistas: 3 },
  { nombre: "Batalla en el desierto", horasModelado: 20, horasRender: 15, artistas: 5 },
  { nombre: "Ciudad flotante",        horasModelado: 5,  horasRender: 3,  artistas: 1 },
  { nombre: "Cierre estelar",         horasModelado: 18, horasRender: 12, artistas: 4 },
];

function calcularCosto(escena) {
  return (
    escena.horasModelado * 40000 +
    escena.horasRender   * 25000 +
    escena.artistas      * 120000
  );
}

function analizarPresupuesto(listaEscenas) {
  if (!listaEscenas || listaEscenas.length === 0) {
    console.log("Sin escenas para analizar.");
    return;
  }

  const escenasConCosto = listaEscenas.map(escena => ({
    ...escena,
    costo: calcularCosto(escena),
  }));

  const escenasCostosas = escenasConCosto.filter(e => e.costo > 1_000_000);

  const costoTotal = escenasConCosto.reduce((suma, e) => suma + e.costo, 0);

  const escenaMasCostosa = escenasConCosto.reduce((max, e) =>
    e.costo > max.costo ? e : max
  );

  console.log("=== Costo por escena ===");
  escenasConCosto.forEach(e => {
    console.log(`  ${e.nombre}: $${e.costo.toLocaleString()}`);
  });

  console.log("\n=== Escenas costosas (> $1,000,000) ===");
  if (escenasCostosas.length === 0) {
    console.log("  Ninguna escena supera el límite.");
  } else {
    escenasCostosas.forEach(e => {
      console.log(`  ${e.nombre}: $${e.costo.toLocaleString()}`);
    });
  }

  console.log(`\n=== Costo total del proyecto ===`);
  console.log(`  $${costoTotal.toLocaleString()}`);

  console.log(`\n=== Escena más costosa ===`);
  console.log(`  ${escenaMasCostosa.nombre}: $${escenaMasCostosa.costo.toLocaleString()}`);
}

// --- Validaciones ---

console.log(">>> CASO NORMAL (4 escenas variadas)");
analizarPresupuesto(escenas);

console.log("\n>>> CASO LÍMITE (escena en el borde: costo = $960,000, no supera el millón)");
const escenaLimite = [
  { nombre: "Escena límite", horasModelado: 10, horasRender: 8, artistas: 3 },
];
analizarPresupuesto(escenaLimite);

console.log("\n>>> CASO VACÍO (lista sin escenas)");
analizarPresupuesto([]);
```

---

## Evidencia de validación

```
>>> CASO NORMAL (4 escenas variadas)
=== Costo por escena ===
  Apertura del portal: $960,000
  Batalla en el desierto: $1,775,000
  Ciudad flotante: $395,000
  Cierre estelar: $1,500,000

=== Escenas costosas (> $1,000,000) ===
  Batalla en el desierto: $1,775,000
  Cierre estelar: $1,500,000

=== Costo total del proyecto ===
  $4,630,000

=== Escena más costosa ===
  Batalla en el desierto: $1,775,000

>>> CASO LÍMITE (escena en el borde: costo = $960,000, no supera el millón)
=== Costo por escena ===
  Escena límite: $960,000

=== Escenas costosas (> $1,000,000) ===
  Ninguna escena supera el límite.

=== Costo total del proyecto ===
  $960,000

=== Escena más costosa ===
  Escena límite: $960,000

>>> CASO VACÍO (lista sin escenas)
Sin escenas para analizar.
```

---

## Comandos Git sugeridos

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-15/maria-montepeque
# ... agregar archivos ...
git add basico/logica/ejercicio-15/resoluciones/maria-montepeque/
git commit -m "feat(ej-15): presupuesto animacion 3D - Maria Montepeque"
git push origin ejercicio-15/maria-montepeque
```
