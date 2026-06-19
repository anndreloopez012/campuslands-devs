# Ejercicio 03 — Gestor de personajes RPG

**Alumna:** Maria Montepeque  
**Dificultad:** Media  
**Temática:** Videojuegos RPG

---

## Cómo pensé el problema

Identifiqué tres etapas claramente separadas:

1. **Datos de entrada:** definir cada personaje con sus cuatro atributos numéricos.
2. **Proceso:** calcular poder, detectar quién es débil y decidir qué entrenar.
3. **Salida:** un reporte legible que muestre el estado de toda la party.

Mantuve cada paso en su propia función para que cada una hiciera una sola cosa. Eso hace más fácil leer el código y validar cada parte por separado.

---

## Solución

### Archivo: `gestor-party.js`

```js
// Ejercicio 03 - Gestor de personajes RPG
// Maria Montepeque

const party = [
  { nombre: "Aldric",   clase: "Guerrero", nivel: 10, ataque: 40, defensa: 30 },
  { nombre: "Lyra",     clase: "Maga",     nivel: 12, ataque: 35, defensa: 10 },
  { nombre: "Finn",     clase: "Arquero",  nivel:  4, ataque: 18, defensa: 12 },
  { nombre: "Sera",     clase: "Clérigo",  nivel:  5, ataque: 10, defensa: 20 },
  { nombre: "Kael",     clase: "Asesino",  nivel:  3, ataque: 14, defensa:  8 },
];

// Paso 2: calcular poder de cada personaje
function calcularPoder(personaje) {
  return personaje.nivel * 2 + personaje.ataque + personaje.defensa;
}

// Paso 3: filtrar personajes débiles (poder < 60)
function esDebil(personaje) {
  return calcularPoder(personaje) < 60;
}

// Paso 4: sugerir qué estadística entrenar
function sugerirMejora(personaje) {
  if (personaje.ataque <= personaje.defensa) {
    return "Entrenar ATAQUE";
  }
  return "Entrenar DEFENSA";
}

// Paso 5: mostrar reporte
function mostrarReporte(party) {
  console.log("===========================================");
  console.log("        REPORTE DE LA PARTY RPG           ");
  console.log("===========================================\n");

  const debiles = party.filter(esDebil);

  party.forEach((personaje) => {
    const poder = calcularPoder(personaje);
    const estado = poder >= 60 ? "✅ Listo" : "⚠️  Débil";

    console.log(`${personaje.nombre} (${personaje.clase})`);
    console.log(`  Nivel: ${personaje.nivel} | ATK: ${personaje.ataque} | DEF: ${personaje.defensa}`);
    console.log(`  Poder total: ${poder} → ${estado}`);

    if (poder < 60) {
      console.log(`  Sugerencia: ${sugerirMejora(personaje)}`);
    }
    console.log("");
  });

  console.log("-------------------------------------------");
  console.log(`Total de personajes: ${party.length}`);
  console.log(`Listos para la mazmorra: ${party.length - debiles.length}`);
  console.log(`Necesitan entrenamiento: ${debiles.length}`);
  console.log("===========================================");
}

mostrarReporte(party);
```

---

## Decisiones de diseño

| Decisión | Razón |
|---|---|
| Una función por responsabilidad | `calcularPoder`, `esDebil` y `sugerirMejora` hacen una sola cosa cada una |
| Nombres de contexto RPG | `party`, `personaje`, `poder`, `ataque`, `defensa` — nada genérico |
| Condición `ataque <= defensa` en sugerencia | Si son iguales, tiene más sentido priorizar ataque (estadística ofensiva) |
| `party.filter(esDebil)` al inicio del reporte | Calcula el total de débiles una sola vez en lugar de contarlos de nuevo al final |

---

## Validación

### Caso normal — mago del README (nivel 12, ATK 35, DEF 10)

```
Lyra (Maga)
  Nivel: 12 | ATK: 35 | DEF: 10
  Poder total: 69 → ✅ Listo
```

Cálculo: `12 * 2 + 35 + 10 = 69` ✅ Coincide con el ejemplo del README.

---

### Caso límite — personaje en el borde exacto (poder = 60)

Un personaje con nivel 5, ataque 25 y defensa 25 tiene poder exactamente 60.

```
5 * 2 + 25 + 25 = 60
```

`esDebil` devuelve `false` porque la condición es `poder < 60` (estricto). El personaje con poder 60 **sí está listo** — lo que es correcto: el umbral es "menor a 60", no "menor o igual".

---

### Caso con party vacía

```js
mostrarReporte([]);
```

Salida:
```
===========================================
        REPORTE DE LA PARTY RPG           
===========================================

-------------------------------------------
Total de personajes: 0
Listos para la mazmorra: 0
Necesitan entrenamiento: 0
===========================================
```

No lanza errores. `forEach` y `filter` sobre un arreglo vacío simplemente no iteran.

---

## Output completo de la party

```
===========================================
        REPORTE DE LA PARTY RPG           
===========================================

Aldric (Guerrero)
  Nivel: 10 | ATK: 40 | DEF: 30
  Poder total: 90 → ✅ Listo

Lyra (Maga)
  Nivel: 12 | ATK: 35 | DEF: 10
  Poder total: 69 → ✅ Listo

Finn (Arquero)
  Nivel: 4 | ATK: 18 | DEF: 12
  Poder total: 38 → ⚠️  Débil
  Sugerencia: Entrenar DEFENSA

Sera (Clérigo)
  Nivel: 5 | ATK: 10 | DEF: 20
  Poder total: 40 → ⚠️  Débil
  Sugerencia: Entrenar ATAQUE

Kael (Asesino)
  Nivel: 3 | ATK: 14 | DEF: 8
  Poder total: 28 → ⚠️  Débil
  Sugerencia: Entrenar DEFENSA

-------------------------------------------
Total de personajes: 5
Listos para la mazmorra: 2
Necesitan entrenamiento: 3
===========================================
```

---

## Comandos Git

```bash
# Desde la rama dev
git checkout dev
git pull origin dev
git checkout -b ejercicio-03-maria-montepeque

# Después de crear los archivos
git add resoluciones/maria-montepeque/
git status

git commit -m "feat(ejercicio-03): gestor de party RPG con poder, filtro y sugerencias - Maria Montepeque"
git push origin ejercicio-03-maria-montepeque
```
