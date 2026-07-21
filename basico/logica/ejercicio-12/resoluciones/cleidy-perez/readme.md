# 🏷️ Control de Inventario Streetwear

Sistema para identificar prendas con poco inventario disponible y sugerir cuántas unidades volver a pedir.

---

## 💡 ¿Cómo se pensó la solución?

1. **Detección de bajo stock:** Si a una prenda le quedan menos de 5 unidades, se le asigna la alerta de stock bajo.
2. **Sugerencia de reposición:** Para no quedarnos sin mercancía, tomamos el doble de lo vendido en la semana y le restamos lo que queda disponible. Si el resultado es menor a cero, la sugerencia queda en `0` para evitar números negativos.

---

## 📊 Evidencia de Validación

Probamos el código con 4 productos y obtuvimos este reporte final:

* **Hoodie Oversize (Talla M):** Quedan 3 unidades (Bajo stock: Sí) ➡️ **Recomienda pedir 13**.
* **Polera Graphic (Talla L):** Quedan 2 unidades (Bajo stock: Sí) ➡️ **Recomienda pedir 8**.
* **Pantalón Cargo (Talla S):** Quedan 10 unidades (Bajo stock: No) ➡️ **Recomienda pedir 0**.
* **Polera Basic (Talla M):** Quedan 4 unidades (Bajo stock: Sí) ➡️ **Recomienda pedir 0** (las ventas fueron muy bajas).

### Vista previa en consola:

```text
┌─────────┬───────────────────┬───────┬───────┬──────────────┬───────────┬────────────────────┐
│ (index) │      nombre       │ talla │ stock │ ventasSemana │ bajoStock │ reposicionSugerida │
├─────────┼───────────────────┼───────┼───────┼──────────────┼───────────┼────────────────────┤
│    0    │ 'Hoodie Oversize' │  'M'  │   3   │      8       │   true    │         13         │
│    1    │ 'Polera Graphic'  │  'L'  │   2   │      5       │   true    │         8          │
│    2    │ 'Pantalón Cargo'  │  'S'  │  10   │      2       │   false   │         0          │
│    3    │  'Polera Basic'   │  'M'  │   4   │      1       │   true    │         0          │
└─────────┴───────────────────┴───────┴───────┴──────────────┴───────────┴────────────────────┘