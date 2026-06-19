# Ejercicio 07 — Diagnóstico rápido de mecánica

**Alumna:** Maria Montepeque
**Archivo principal:** `diagnostico.js`

---

## Cómo pensé el problema

Identifiqué tres partes:

1. **Datos de entrada** → un arreglo de síntomas en texto (`["vibra", "frena poco"]`).
2. **Proceso** → una función `diagnosticar(sintomas)` que recorre cada síntoma, busca su causa en un catálogo y construye un reporte.
3. **Salida** → un objeto con el arreglo original, las recomendaciones individuales y un reporte formateado listo para imprimir.

Separé el catálogo de causas del proceso de diagnóstico para que agregar nuevos síntomas sea tan simple como añadir una línea al objeto `catalogoCausas`, sin tocar la lógica de la función.

---

## Decisiones de diseño

- **`catalogoCausas`** — objeto estático que mapea síntoma → recomendación. Actúa como base de conocimiento del mecánico.
- **`diagnosticar(sintomas)`** — recibe el arreglo, valida que no esté vacío, genera una recomendación por síntoma y devuelve el reporte.
- **Síntoma desconocido** — en lugar de fallar, devuelve `"Síntoma no reconocido — llevar a revisión general."`, cubriendo entradas inesperadas sin romper el flujo.
- **Arreglo vacío** — devuelve un mensaje especial sin intentar procesar nada, evitando reportes en blanco o errores silenciosos.

---

## Solución

```js
const catalogoCausas = {
  "no enciende":   "Revisar batería, bujía o sistema de combustible.",
  "vibra":         "Revisar balanceo de ruedas y estado de rodamientos.",
  "pierde aceite": "Revisar juntas, retenes y nivel de aceite del motor.",
  "frena poco":    "Revisar pastillas de freno, líquido y calibradores.",
};

function diagnosticar(sintomas) {
  if (!sintomas || sintomas.length === 0) {
    return {
      sintomas: [],
      recomendaciones: [],
      reporte: "No se recibieron síntomas. No es posible generar un diagnóstico.",
    };
  }

  const recomendaciones = sintomas.map(function (sintoma) {
    const causa = catalogoCausas[sintoma.toLowerCase()];
    return {
      sintoma: sintoma,
      causa: causa || "Síntoma no reconocido — llevar a revisión general.",
    };
  });

  const lineasReporte = recomendaciones.map(function (diagnostico) {
    return "• " + diagnostico.sintoma + ": " + diagnostico.causa;
  });

  const reporte =
    "=== REPORTE DE DIAGNÓSTICO ===\n" +
    lineasReporte.join("\n") +
    "\n==============================";

  return {
    sintomas: sintomas,
    recomendaciones: recomendaciones,
    reporte: reporte,
  };
}
```

---

## Evidencia de validación

### Caso normal — síntomas del ejemplo del README

```
diagnosticar(["vibra", "frena poco"])

=== REPORTE DE DIAGNÓSTICO ===
• vibra: Revisar balanceo de ruedas y estado de rodamientos.
• frena poco: Revisar pastillas de freno, líquido y calibradores.
==============================
```

### Caso límite — síntoma desconocido mezclado con uno conocido

```
diagnosticar(["no enciende", "hace humo"])

=== REPORTE DE DIAGNÓSTICO ===
• no enciende: Revisar batería, bujía o sistema de combustible.
• hace humo: Síntoma no reconocido — llevar a revisión general.
==============================
```

### Caso vacío — arreglo sin síntomas

```
diagnosticar([])

No se recibieron síntomas. No es posible generar un diagnóstico.
```

---

## Comandos Git sugeridos

```bash
git checkout dev
git pull origin dev
git checkout -b feature/ejercicio-07-maria-montepeque
# ... trabajar en los archivos ...
git add resoluciones/maria-montepeque/
git commit -m "feat(ej07): diagnóstico de mecánica con condicionales y catálogo de causas"
git push origin feature/ejercicio-07-maria-montepeque
```
