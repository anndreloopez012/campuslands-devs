# Solución - Ejercicio 13
## Estadísticas de torneo de pingpong

### Alumno

**Nombre:** Estiben Ixen

---

# Objetivo

Calcular el porcentaje de victorias, el promedio de puntos por partido, la diferencia de puntos y generar un ranking de jugadores.

---

# Desarrollo

Se creó un arreglo con la información de cada jugador:

- Nombre.
- Partidos jugados.
- Victorias.
- Puntos a favor.
- Puntos en contra.

Posteriormente se calcularon los siguientes indicadores:

- Porcentaje de victorias.
- Promedio de puntos por partido.
- Diferencia de puntos.

Finalmente los jugadores fueron ordenados por porcentaje de victorias y, en caso de empate, por diferencia de puntos.

---

# Fórmulas utilizadas

## Porcentaje de victorias

```text
(victorias / partidos) * 100
```

Si el jugador no ha disputado partidos, el resultado es **0**.

---

## Promedio de puntos

```text
puntosFavor / partidos
```

Si el jugador no tiene partidos registrados, el promedio es **0**.

---

## Diferencia de puntos

```text
puntosFavor - puntosContra
```

---

# Validación

### Caso normal

```text
Partidos: 10
Victorias: 8

Porcentaje de victorias: 80%
```

### Caso límite

```text
Partidos: 0

Porcentaje de victorias: 0%
Promedio de puntos: 0
```

La validación evita divisiones entre cero.

---

# Cómo pensé la solución

Primero calculé todas las estadísticas de cada jugador y posteriormente generé el ranking ordenando primero por porcentaje de victorias y después por diferencia de puntos para desempatar.

---

# Conclusión

La solución cumple con todos los requisitos del ejercicio, valida jugadores sin partidos, calcula correctamente las estadísticas solicitadas y genera un ranking ordenado.