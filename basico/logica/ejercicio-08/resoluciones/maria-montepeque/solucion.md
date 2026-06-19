# Ejercicio 08 — Catálogo de hiperdeportivos

**Alumna:** Maria Montepeque  
**Carpeta:** `basico/logica/ejercicio-08/resoluciones/maria-montepeque/`  
**Rama:** `feature/ejercicio-08-maria-montepeque` (creada desde `dev`)

---

## Cómo pensé el problema

El ejercicio pide trabajar con una colección de autos y aplicar tres operaciones sobre ella: filtrar, clasificar y ordenar. Separé cada responsabilidad en su propia función para que el código fuera legible y fácil de validar por partes.

**Entrada →** Lista de autos con `marca`, `modelo`, `ceroACien`, `precioUSD` y `unidades`.  
**Proceso →** Filtrar por aceleración < 3s, asignar exclusividad según unidades, calcular promedio de precio, ordenar por tiempo de aceleración.  
**Salida →** Lista filtrada con exclusividad, precio promedio y top 3.

---

## Decisiones de diseño

| Decisión | Razón |
|---|---|
| Funciones separadas por responsabilidad | Cada función hace una sola cosa; es más fácil probar y entender |
| `filtrarPorAceleracion(autos, limiteSeg)` recibe el límite como parámetro | Permite reutilizarla si el umbral cambia |
| `[...autos].sort(...)` copia el arreglo antes de ordenar | No modifica el arreglo original |
| Guarda de catálogo vacío al inicio de `analizarCatalogo` | Evita divisiones por cero y resultados indefinidos |

---

## Estructura de funciones

```
clasificarExclusividad(unidades)
  → "extrema" si unidades < 500, "alta" en caso contrario

filtrarPorAceleracion(autos, limiteSeg)
  → arreglo con solo los autos cuyo ceroACien < limiteSeg

calcularPrecioPromedio(autos)
  → número: suma de precios / cantidad (0 si la lista está vacía)

obtenerTop3PorAceleracion(autos)
  → los 3 autos más rápidos, ordenados de menor a mayor tiempo

analizarCatalogo(autos)
  → orquesta las funciones anteriores y devuelve el resultado completo
```

---

## Validación

### Caso 1 — Normal: catálogo completo (8 autos)

```
====================================================
CASO: Catálogo completo
====================================================

Autos con 0-100 en menos de 3 segundos (7 encontrados):
  • Bugatti Chiron Super Sport — 2.4s | 60 uds    | exclusividad: extrema
  • Koenigsegg Jesko Absolut  — 2.5s | 125 uds   | exclusividad: extrema
  • Rimac Nevera              — 1.97s| 150 uds   | exclusividad: extrema
  • Pagani Huayra R           — 2.8s | 30 uds    | exclusividad: extrema
  • Lamborghini Veneno        — 2.9s | 14 uds    | exclusividad: extrema
  • Ferrari LaFerrari         — 2.9s | 499 uds   | exclusividad: extrema
  • Porsche 918 Spyder        — 2.6s | 918 uds   | exclusividad: alta

Precio promedio: $2,735,714 USD

Top 3 por aceleración:
  1. Rimac Nevera — 1.97s
  2. Bugatti Chiron Super Sport — 2.4s
  3. Koenigsegg Jesko Absolut — 2.5s
```

**¿Qué verifica este caso?**  
- El filtro excluye correctamente el McLaren Speedtail (3.2s).  
- 499 unidades queda como `extrema` (el límite es < 500, y 499 lo cumple).  
- 918 unidades queda como `alta`.  
- El top 3 está ordenado de menor a mayor tiempo.

---

### Caso 2 — Límite: 2.99s incluido, exactamente 3.0s excluido

```
====================================================
CASO: Caso límite (2.99s incluido, 3.0s excluido)
====================================================

Autos con 0-100 en menos de 3 segundos (1 encontrados):
  • Test Límite exacto — 2.99s | 250 uds | exclusividad: extrema

Precio promedio: $1,000,000 USD

Top 3 por aceleración:
  1. Test Límite exacto — 2.99s
```

**¿Qué verifica este caso?**  
- El filtro usa `< 3` (estricto), por lo que 3.0s queda fuera.  
- 2.99s sí entra.  
- 250 unidades → `extrema` (confirma el ejemplo del README).  
- El top 3 funciona aunque haya menos de 3 autos.

---

### Caso 3 — Vacío: catálogo sin autos

```
====================================================
CASO: Catálogo vacío
====================================================
⚠️  El catálogo está vacío o no fue proporcionado.
```

**¿Qué verifica este caso?**  
- No se intenta dividir por cero al calcular el promedio.  
- El programa no lanza un error; devuelve un mensaje controlado.

---

## Comandos Git

```bash
# Crear rama desde dev
git checkout dev
git pull origin dev
git checkout -b feature/ejercicio-08-maria-montepeque

# Agregar archivos
git add basico/logica/ejercicio-08/resoluciones/maria-montepeque/

# Commit
git commit -m "feat(ejercicio-08): solución catálogo hiperdeportivos — Maria Montepeque"

# Subir rama
git push origin feature/ejercicio-08-maria-montepeque
```
