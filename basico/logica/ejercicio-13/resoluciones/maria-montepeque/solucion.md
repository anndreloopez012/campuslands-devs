# Ejercicio 13 — Estadísticas de torneo de pingpong

**Alumna:** Maria Montepeque  
**Dificultad:** Media  
**Carpeta:** `basico/logica/ejercicio-13/resoluciones/maria-montepeque/`

---

## Cómo pensé el problema

El ejercicio pide procesar una lista de jugadores de pingpong y calcular su rendimiento. Identifiqué tres etapas:

1. **Entrada:** datos por jugador — nombre, partidos, victorias, puntosFavor, puntosContra.
2. **Proceso:** calcular winrate, diferencia de puntos y promedio de puntos a favor; luego ordenar.
3. **Salida:** ranking en consola, con jugadores sin partidos separados al final.

El caso límite más importante es un jugador con `partidos = 0`, que causaría una división entre cero. Lo manejo antes de cualquier cálculo, devolviendo `null` en las métricas y un mensaje de error descriptivo.

---

## Solución completa

```js
// validar.js - Estadísticas de torneo de pingpong

const jugadores = [
  {
    nombre: "Carlos Ajú",
    partidos: 10,
    victorias: 8,
    puntosFavor: 220,
    puntosContra: 180,
  },
  {
    nombre: "Lucía Tahay",
    partidos: 10,
    victorias: 6,
    puntosFavor: 195,
    puntosContra: 190,
  },
  {
    nombre: "Diego Cúmez",
    partidos: 8,
    victorias: 8,
    puntosFavor: 210,
    puntosContra: 155,
  },
  {
    nombre: "Ana Xoyón",
    partidos: 0,
    victorias: 0,
    puntosFavor: 0,
    puntosContra: 0,
  },
];

function calcularEstadisticas(jugador) {
  if (jugador.partidos === 0) {
    return {
      nombre: jugador.nombre,
      winrate: null,
      diferenciaPuntos: null,
      promedioPuntosFavor: null,
      error: "Sin partidos jugados",
    };
  }

  const winrate = (jugador.victorias / jugador.partidos) * 100;
  const diferenciaPuntos = jugador.puntosFavor - jugador.puntosContra;
  const promedioPuntosFavor = jugador.puntosFavor / jugador.partidos;

  return {
    nombre: jugador.nombre,
    winrate: parseFloat(winrate.toFixed(2)),
    diferenciaPuntos,
    promedioPuntosFavor: parseFloat(promedioPuntosFavor.toFixed(2)),
    error: null,
  };
}

function generarRanking(listaJugadores) {
  const conEstadisticas = listaJugadores.map(calcularEstadisticas);

  const validos = conEstadisticas
    .filter((j) => j.error === null)
    .sort((a, b) => {
      if (b.winrate !== a.winrate) return b.winrate - a.winrate;
      return b.diferenciaPuntos - a.diferenciaPuntos;
    });

  const invalidos = conEstadisticas.filter((j) => j.error !== null);

  return { validos, invalidos };
}

function mostrarResultados(jugadores) {
  const { validos, invalidos } = generarRanking(jugadores);

  console.log("=== RANKING DEL TORNEO DE PINGPONG ===\n");

  validos.forEach((jugador, indice) => {
    console.log(`#${indice + 1} ${jugador.nombre}`);
    console.log(`   Winrate:           ${jugador.winrate}%`);
    console.log(`   Diferencia puntos: ${jugador.diferenciaPuntos}`);
    console.log(`   Promedio puntos:   ${jugador.promedioPuntosFavor}`);
    console.log("");
  });

  if (invalidos.length > 0) {
    console.log("=== JUGADORES SIN PARTIDOS ===\n");
    invalidos.forEach((jugador) => {
      console.log(`  ${jugador.nombre}: ${jugador.error}`);
    });
  }
}

mostrarResultados(jugadores);
```

---

## Lógica de ordenamiento

El ranking usa dos criterios en cascada:

- **Primero:** mayor winrate arriba.
- **Desempate:** mayor diferencia de puntos (puntosFavor − puntosContra).

Esto refleja mejor el rendimiento real: ganar más partidos importa, pero entre iguales gana quien dominó más en marcador.

---

## Evidencia de validación

### Caso normal — jugadores con partidos

```
=== RANKING DEL TORNEO DE PINGPONG ===

#1 Diego Cúmez
   Winrate:           100%
   Diferencia puntos: 55
   Promedio puntos:   26.25

#2 Carlos Ajú
   Winrate:           80%
   Diferencia puntos: 40
   Promedio puntos:   22

#3 Lucía Tahay
   Winrate:           60%
   Diferencia puntos: 5
   Promedio puntos:   19.5
```

### Caso límite — jugador con 0 partidos

```
=== JUGADORES SIN PARTIDOS ===

  Ana Xoyón: Sin partidos jugados
```

El jugador con `partidos = 0` no entra al ranking ni provoca error; recibe un mensaje claro y sus métricas quedan en `null`.

---

## Comandos Git

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-13/maria-montepeque
# trabajo en la solución...
git add resoluciones/maria-montepeque/
git commit -m "ejercicio-13: estadísticas torneo pingpong - Maria Montepeque"
git push origin ejercicio-13/maria-montepeque
```
