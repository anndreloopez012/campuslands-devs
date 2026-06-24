# Ejercicio 05 — Tabla de fútbol sala

**Camper:** Antonio Canux  

---

## Cómo pensé el problema

1. **Entrada:** Los datos con los que cada equipo cuenta al inicio: victorias, empates, derrotas, goles a favor y goles en contra.
2. **Desarrollo:** Se calculan los puntos y diferencia de goles por equipo, para luego ordenar la tabla de acuerdo a dos criterios: los puntos obtenidos y las diferencias de goles.
3. **Salida:** Imprimir la tabla con posición y todas las columnas necesarios para una fácil comprensión.

---
## Resultado de resolución
### Caso normal — cinco equipos

```
### === TABLA DE CLASIFICACIÓN DE FÚTBOL SALA ===

| Pos | Equipo | Pts | PJ | V | E | D | GF | GC | DG |
| ---------------------------------------------------|
| 1 | Barça | 18 | 8 | 6 | 0 | 2 | 28 | 18 | +10 |
| 2 | Inter | 17 | 8 | 5 | 2 | 1 | 24 | 15 | +9 |
| 3 | Paraíso | 17 | 8 | 5 | 2 | 1 | 22 | 16 | +6 |
| 4 | ElPozo | 15 | 8 | 4 | 3 | 1 | 20 | 14 | +6 |
| 5 | Palma | 10 | 8 | 3 | 1 | 4 | 15 | 19 | -4 |
```

## Comandos Git

```bash
git checkout dev
git pull origin dev
git checkout -b alumno/antonio-canux/ejercicio-05
git add basico/logica/ejercicio-05/resoluciones/antonio-canux/
git commit -m "feat: Resolver ejercicio numero 5 de lógica"
git push origin alumno/antonio-canux/ejercicio-05
```
