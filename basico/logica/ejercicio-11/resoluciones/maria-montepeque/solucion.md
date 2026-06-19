# Ejercicio 11 — Bitácora de viajes extremos

**Alumna:** Maria Montepeque  
**Ruta:** `basico/logica/ejercicio-11/resoluciones/maria-montepeque/`

---

## Cómo pensé el problema

El ejercicio pide procesar reservas de turismo extremo aplicando tres reglas:

1. **Validar edad mínima:** solo paracaidismo exige 18 años; otras actividades no tienen restricción.
2. **Calcular costo total:** aplicar 12% de impuesto sobre el `costoBase`.
3. **Separar aprobadas de rechazadas** y generar un resumen legible.

Antes de validar reglas de negocio, conviene descartar reservas con campos vacíos o valores en cero, porque no tiene sentido calcular costos sobre datos incompletos.

Dividí la lógica en tres funciones pequeñas:

| Función | Responsabilidad |
|---|---|
| `esReservaValida(reserva)` | Devuelve `true`/`false` según las reglas |
| `calcularCostoTotal(costoBase)` | Aplica el impuesto del 12% |
| `procesarReservas(listaReservas)` | Separa aprobadas y rechazadas |
| `mostrarResumen(aprobadas, rechazadas)` | Imprime el resultado final |

---

## Datos de entrada

```js
const reservas = [
  { nombre: "Carlos Fuentes",  destino: "Interlaken", actividad: "paracaidismo", edad: 25, costoBase: 850 },
  { nombre: "Lucía Mendoza",   destino: "Interlaken", actividad: "paracaidismo", edad: 17, costoBase: 850 },
  { nombre: "Andrés Palma",    destino: "Queenstown", actividad: "bungee",       edad: 20, costoBase: 400 },
  { nombre: "Sofía Recinos",   destino: "Moab",       actividad: "paracaidismo", edad: 18, costoBase: 750 },
  { nombre: "ReservaVacía",    destino: "",           actividad: "paracaidismo", edad: 0,  costoBase: 0  },
];
```

---

## Casos de prueba cubiertos

| Caso | Descripción | Resultado esperado |
|---|---|---|
| Normal | Carlos, 25 años, paracaidismo | ✔ Aprobada — Q952.00 |
| Límite | Sofía, exactamente 18 años, paracaidismo | ✔ Aprobada — Q840.00 |
| Rechazo por edad | Lucía, 17 años, paracaidismo | ✘ Rechazada |
| Datos en cero | ReservaVacía, edad 0, costoBase 0 | ✘ Rechazada |

---

## Evidencia de ejecución

```
=== RESERVAS APROBADAS ===
✔ Carlos Fuentes | paracaidismo en Interlaken | Edad: 25 | Total: Q952.00
✔ Andrés Palma | bungee en Queenstown | Edad: 20 | Total: Q448.00
✔ Sofía Recinos | paracaidismo en Moab | Edad: 18 | Total: Q840.00

=== RESERVAS RECHAZADAS ===
✘ Lucía Mendoza — Razón: edad insuficiente para paracaidismo (17 años)
✘ ReservaVacía — Razón: datos incompletos o en cero
```

---

## Comandos Git sugeridos

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-11/maria-montepeque
# ... agregar archivos ...
git add resoluciones/maria-montepeque/
git commit -m "ejercicio-11: validación de reservas de turismo extremo"
git push origin ejercicio-11/maria-montepeque
```
