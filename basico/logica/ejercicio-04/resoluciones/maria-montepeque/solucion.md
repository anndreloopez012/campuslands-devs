# Ejercicio 04 — Control de líneas MOBA

**Alumna:** Maria Montepeque  
**Ruta:** `basico/logica/ejercicio-04/resoluciones/maria-montepeque/`  
**Rama:** `feat/ejercicio-04-maria-montepeque` (creada desde `dev`)

---

## Cómo pensé el problema

El ejercicio pide almacenar datos de cinco jugadores MOBA, calcular KDA, validar si el oro supera los 12 000, ordenarlos por KDA y mostrar alertas cuando los objetivos son bajos.

Identifiqué tres partes separadas:

1. **Datos de entrada** → objeto por jugador con `rol`, `nombre`, `kills`, `deaths`, `assists`, `oro` y `objetivos`.
2. **Proceso** → funciones independientes para calcular KDA, validar oro y evaluar un jugador completo.
3. **Salida** → lista ordenada por KDA e impresión de alertas de objetivos.

Separé la lógica en funciones pequeñas con nombres relacionados al contexto MOBA para que cada una haga una sola cosa.

---

## Solución completa

```js
// validar.js — Ejercicio 04: Control de líneas MOBA

const jugadores = [
  { rol: "top",     nombre: "Garen",   kills: 8,  deaths: 2, assists: 3,  oro: 13500, objetivos: 2 },
  { rol: "jungla",  nombre: "Hecarim", kills: 5,  deaths: 0, assists: 10, oro: 11800, objetivos: 5 },
  { rol: "mid",     nombre: "Orianna", kills: 12, deaths: 4, assists: 7,  oro: 15200, objetivos: 1 },
  { rol: "adc",     nombre: "Jinx",    kills: 3,  deaths: 3, assists: 2,  oro: 9800,  objetivos: 0 },
  { rol: "soporte", nombre: "Thresh",  kills: 1,  deaths: 1, assists: 14, oro: 7200,  objetivos: 3 },
];

const casoLimite = { rol: "mid", nombre: "Faker", kills: 10, deaths: 0, assists: 5, oro: 16000, objetivos: 0 };
const casoVacio  = null;

function calcularKDA(kills, deaths, assists) {
  const denominador = Math.max(deaths, 1);
  return (kills + assists) / denominador;
}

function validarOro(oro) {
  return oro > 12000;
}

function evaluarJugador(jugador) {
  if (!jugador) {
    return { error: "Jugador nulo o indefinido — no se puede evaluar." };
  }

  const kda = calcularKDA(jugador.kills, jugador.deaths, jugador.assists);
  const oroBueno = validarOro(jugador.oro);
  const alertaObjetivos = jugador.objetivos < 2
    ? `⚠️  ALERTA: ${jugador.rol} (${jugador.nombre}) tiene pocos objetivos (${jugador.objetivos})`
    : null;

  return {
    nombre: jugador.nombre,
    rol: jugador.rol,
    kda: parseFloat(kda.toFixed(2)),
    oroBueno,
    alertaObjetivos,
  };
}

function ordenarPorKDA(lista) {
  return [...lista].sort((a, b) => b.kda - a.kda);
}

// Evaluación principal
console.log("=== CASO NORMAL: equipo completo ===\n");
const resultados = jugadores.map(evaluarJugador);
const ordenados  = ordenarPorKDA(resultados);

ordenados.forEach((j, i) => {
  console.log(`#${i + 1} ${j.nombre} [${j.rol}] — KDA: ${j.kda} | Oro >12k: ${j.oroBueno}`);
  if (j.alertaObjetivos) console.log(`   ${j.alertaObjetivos}`);
});

// Caso límite: deaths = 0
console.log("\n=== CASO LÍMITE: deaths = 0 ===\n");
const resLimite = evaluarJugador(casoLimite);
console.log(`${resLimite.nombre} [${resLimite.rol}] — KDA: ${resLimite.kda} | Oro >12k: ${resLimite.oroBueno}`);
if (resLimite.alertaObjetivos) console.log(`   ${resLimite.alertaObjetivos}`);

// Caso vacío / null
console.log("\n=== CASO VACÍO: jugador null ===\n");
const resVacio = evaluarJugador(casoVacio);
console.log(resVacio.error);
```

---

## Evidencia de validación

```
=== CASO NORMAL: equipo completo ===

#1 Hecarim [jungla] — KDA: 15   | Oro >12k: false
#2 Thresh  [soporte] — KDA: 15  | Oro >12k: false
#3 Garen   [top]    — KDA: 5.5  | Oro >12k: true
#4 Orianna [mid]    — KDA: 4.75 | Oro >12k: true
   ⚠️  ALERTA: mid (Orianna) tiene pocos objetivos (1)
#5 Jinx    [adc]    — KDA: 1.67 | Oro >12k: false
   ⚠️  ALERTA: adc (Jinx) tiene pocos objetivos (0)

=== CASO LÍMITE: deaths = 0 ===

Faker [mid] — KDA: 15 | Oro >12k: true
   ⚠️  ALERTA: mid (Faker) tiene pocos objetivos (0)

=== CASO VACÍO: jugador null ===

Jugador nulo o indefinido — no se puede evaluar.
```

---

## Comandos Git usados

```bash
git checkout dev
git pull origin dev
git checkout -b feat/ejercicio-04-maria-montepeque
# trabajo en la solución...
git add basico/logica/ejercicio-04/resoluciones/maria-montepeque/
git commit -m "feat(ejercicio-04): solución control de líneas MOBA - Maria Montepeque"
git push origin feat/ejercicio-04-maria-montepeque
```
