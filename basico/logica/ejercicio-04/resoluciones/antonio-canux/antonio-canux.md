# Ejercicio 04 — Control de líneas MOBA

**Camper:** Antonio Canux

---

## Cómo se pensó la resolución?

El ejercicio pide almacenar datos de jugadores MOBA, calcular KDA, y luego validar si el oro supera los 12 000, ordenarlos por KDA y mostrar alertas cuando los objetivos son bajos.

Se identificaron las siguientes tres partes:

1. **Entrada:** objeto por jugador con `rol`, `nombre`, `kills`, `deaths`, `assists`, `oro` y `objetivos`.
2. **Proceso:** funciones independientes para calcular KDA, validar oro y evaluar un jugador completo.
3. **Salida:** lista ordenada por KDA e impresión de alertas de objetivos.

---

## Comandos Git usados

```bash
git checkout dev
git pull origin dev
git checkout -b alumno/antonio-canux/ejercicio-04
git add basico/logica/ejercicio-04/resoluciones/antonio-canux/
git commit -m "feat: Solucionar ejercicio numero 4 de lógica."
git push origin alumno/antonio-canux/ejercicio-04
```
