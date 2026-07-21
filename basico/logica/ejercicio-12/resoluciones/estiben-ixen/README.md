# Solución - Control de Stock por Talla

## Nombre

Estiben Ixen

---

## Objetivo

Detectar las prendas con bajo stock y calcular la cantidad sugerida para reponer según las ventas de la semana.

---

## Lógica implementada

1. Se definió un arreglo de prendas con:
   - Nombre
   - Talla
   - Stock
   - Ventas de la semana

2. Para cada prenda se verificó si el stock es menor a 5.

3. Se calculó la reposición utilizando la fórmula:

```text
reposicion = ventasSemana * 2 - stock
```

4. Si el resultado era negativo, se reemplazó por 0 utilizando `Math.max()`.

5. Finalmente se agrupó la información por talla y se mostró un reporte en consola.

---

## Validación

### Caso normal

```text
Nombre: Camiseta Oversize
Stock: 3
Ventas: 6

Bajo stock: true
Reposición: 9
```

### Caso donde no necesita reposición

```text
Nombre: Chaqueta Denim
Stock: 5
Ventas: 2

Reposición: 0
```

---
