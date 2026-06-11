# README.md

# Ranking de escuadras battle royale

## Autor

Stefani Sánchez

---

## Explicación del problema

El objetivo del ejercicio es calcular el puntaje total de varias escuadras de un torneo battle royale y generar un ranking ordenado de mayor a menor puntaje.

Cada escuadra tiene:

* nombre
* bajas
* posicion
* revividos

Los puntos se calculan así:

* Cada baja vale 3 puntos.
* Posición 1 = 20 puntos.
* Posición 2 = 14 puntos.
* Posición 3 = 10 puntos.
* Otras posiciones = 4 puntos.

---

## Cómo pensé la solución

Primero identifiqué:

* Datos de entrada.
* Proceso para calcular puntos.
* Resultado esperado.

Después:

1. Creé un arreglo de objetos.
2. Hice una función para calcular puntos por posición.
3. Calculé el puntaje total.
4. Ordené las escuadras.
5. Mostré el ranking final.

---

## Validaciones realizadas

### Caso normal

Nova:

* 8 bajas = 24 puntos
* posición 1 = 20 puntos
* total = 44 puntos

### Caso límite

Ghost:

* 0 bajas = 0 puntos
* posición 3 = 10 puntos
* total = 10 puntos

---

## Resultado esperado

```bash id="8r7h0o"
===== RANKING FINAL =====

1. Nova - 44 pts
2. Shadow - 29 pts
3. Ghost - 10 pts
4. Titan - 10 pts
```

---

```
