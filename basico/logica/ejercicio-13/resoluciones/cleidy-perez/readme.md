# 🏓 Estadísticas de Torneo de Ping Pong

Un sistema sencillo para calcular la efectividad de los participantes de un torneo interno y definir la tabla de posiciones.

---

## 💡 ¿Cómo se pensó la solución?

1. **Protección de datos:** Antes de realizar cualquier cálculo, confirmamos que el jugador haya participado en al menos un partido para no hacer cálculos sobre cero.
2. **Cálculo de efectividad:** Evaluamos a cada jugador según su porcentaje de victorias (`winrate`) y la diferencia de puntos a favor vs. puntos en contra.
3. **Generación del Ranking:** Ordenamos a los jugadores poniendo arriba a quienes tienen mayor porcentaje de victorias. Si hay un empate, pasa adelante quien tenga mejor diferencia de puntos.

---

## 📊 Evidencia de Validación

Evaluamos a 4 participantes con diferentes resultados:

* **Sofía (1º puesto):** 80% de victorias y **+40** diferencia de puntos.
* **Carlos (2º puesto):** 80% de victorias y **+30** diferencia de puntos *(pierde el desempate por puntos)*.
* **Luis (3º puesto):** 50% de victorias y **-5** diferencia de puntos.
* **Ana (4º puesto):** 0 partidos jugados *(se registra con 0% de efectividad de forma segura)*.

### Vista previa del resultado:

```text
┌─────────┬──────────┬─────────┬──────────┬───────────┬─────────┬──────────────────┐
│ (index) │ posicion │ nombre  │ partidos │ victorias │ winrate │ diferenciaPuntos │
├─────────┼──────────┼─────────┼──────────┼───────────┼─────────┼──────────────────┤
│    0    │    1     │ 'Sofia' │    10    │     8     │   80    │        40        │
│    1    │    2     │'Carlos' │    10    │     8     │   80    │        30        │
│    2    │    3     │ 'Luis'  │    8     │     4     │   50    │        -5        │
│    3    │    4     │  'Ana'  │    0     │     0     │    0    │        0         │
└─────────┴──────────┴─────────┴──────────┴───────────┴─────────┴──────────────────┘