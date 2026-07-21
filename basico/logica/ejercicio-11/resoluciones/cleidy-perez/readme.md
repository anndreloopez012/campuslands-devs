# 🪂 Bitácora de Viajes Extremos

¡Bienvenido a la Bitácora de Viajes Extremos! Este programa nos ayuda a organizar los viajes de aventura, asegurándonos de cumplir con las normas de seguridad y calculando el precio final para cada pasajero.

---

## 📌 ¿De qué trata este proyecto?

El objetivo principal es revisar las solicitudes de reserva de los viajeros para confirmar que cumplan las reglas básicas (como la edad requerida para deportes de riesgo) y calcular cuánto debe pagar cada uno incluyendo los impuestos aplicables.

---

## 🧠 ¿Cómo pensamos y resolvimos el problema?

Para hacer la verificación de forma ordenada, seguimos un camino simple de 3 pasos:

1. **Revisión de Seguridad (Filtro):**  
   Analizamos a cada viajero. Si alguien eligió la actividad de **paracaidismo** pero es menor de 18 años, la reserva no se aprueba por motivos de seguridad.

2. **Cálculo de Tarifas (Impuestos):**  
   Tomamos el costo base de la excursión y le sumamos un **12% de impuesto** para obtener la tarifa final exacta.

3. **Presentación de Resultados:**  
   Armamos una lista limpia con los viajeros aprobados y su precio final a abonar.

---

## ✅ Evidencia de Validación

Para poner a prueba el sistema, ingresamos 4 reservas de prueba:

* **Laura (25 años, Paracaidismo):** Aprobada ✅ (Es mayor de 18).
* **Carlos (16 años, Paracaidismo):** Rechazada ❌ (Es menor de edad para paracaidismo).
* **Ana (17 años, Trekking):** Aprobada ✅ (Trekking no requiere mayoría de edad).
* **Mateo (18 años, Paracaidismo):** Aprobada ✅ (Cumple la edad justa).

### Ejemplo del resultado en pantalla:

```text
=== RESUMEN DE RESERVAS APROBADAS ===
┌─────────┬──────────┬─────────────┬──────────────┬──────┬───────────┬────────────┐
│ (index) │  nombre  │   destino   │  actividad   │ edad │ costoBase │ costoTotal │
├─────────┼──────────┼─────────────┼──────────────┼──────┼───────────┼────────────┤
│    0    │ 'Laura'  │  'Mendoza'  │'paracaidismo'│  25  │    150    │   168.00   │
│    1    │  'Ana'   │   'Salta'   │  'trekking'  │  17  │    80     │   89.60    │
│    2    │ 'Mateo'  │  'Córdoba'  │'paracaidismo'│  18  │    200    │   224.00   │
└─────────┴──────────┴─────────────┴──────────────┴──────┴───────────┴────────────┘