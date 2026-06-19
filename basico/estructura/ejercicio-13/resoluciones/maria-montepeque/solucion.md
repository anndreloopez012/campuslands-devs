# Ejercicio 13 — Panel deportivo multiliga

**Alumna:** Maria Montepeque  
**Rama:** `ejercicio-13/maria-montepeque` (creada desde `dev`)  
**Ruta de entrega:** `basico/estructura/ejercicio-13/resoluciones/maria-montepeque/`

---

## Cómo pensé el problema

El ejercicio pide construir una base ordenada para un panel de deportes con tres responsabilidades claramente distintas: almacenar datos, calcular resultados y documentar el modelo. Identifiqué esas tres responsabilidades y las separé en carpetas antes de escribir una sola línea de código.

Luego me pregunté cuál era la unidad de crecimiento del proyecto. La respuesta fue la liga: cada vez que se agrega un nuevo torneo, solo hay que crear dos archivos JSON nuevos (uno en `data/equipos/` y otro en `data/partidos/`). Eso define la convención de nombres y la estructura de carpetas.

---

## Árbol de carpetas

```
resoluciones/maria-montepeque/
├── data/
│   ├── equipos/
│   │   ├── liga-apertura.json     ← equipos del Apertura
│   │   └── liga-clausura.json     ← equipos del Clausura
│   └── partidos/
│       ├── liga-apertura.json     ← partidos del Apertura
│       └── liga-clausura.json     ← partidos del Clausura
├── src/
│   ├── tabla-posiciones.js        ← lógica de cálculo de puntos
│   └── validar.js                 ← casos de prueba
└── docs/
    └── modelo-datos.md            ← descripción de entidades y relaciones
```

---

## Decisiones de diseño

### Clave de vinculación entre archivos

El campo `id` del equipo (`comunicaciones-fc`, `municipal-fc`, etc.) es la misma cadena que aparece en los campos `local` y `visitante` de cada partido. Un solo campo tipo `nombre-club` conecta todo el proyecto sin necesidad de claves numéricas separadas.

### Partidos pendientes

Los partidos que aún no se han jugado se incluyen en el archivo JSON con `estado: "pendiente"` y `goles_local: null`. La función `calcularTabla` los omite con un `continue`, así que no afectan la tabla pero el archivo ya queda preparado para actualizar en el futuro.

### Separación datos / lógica / documentación

- `data/` contiene solo JSON sin ninguna función.
- `src/` contiene solo funciones sin datos hardcodeados.
- `docs/` explica el contrato entre ambas partes.

---

## Código fuente

### `src/tabla-posiciones.js`

```js
// tabla-posiciones.js — calcula la tabla de posiciones a partir de partidos finalizados

function calcularTabla(partidos) {
  if (!partidos || partidos.length === 0) {
    return [];
  }

  const posiciones = {};

  for (const partido of partidos) {
    if (partido.estado !== "finalizado") {
      continue;
    }

    const equipoLocal = partido.local;
    const equipoVisitante = partido.visitante;
    const golesLocal = partido.goles_local ?? 0;
    const golesVisitante = partido.goles_visitante ?? 0;

    if (!posiciones[equipoLocal]) {
      posiciones[equipoLocal] = crearRegistroEquipo(equipoLocal);
    }
    if (!posiciones[equipoVisitante]) {
      posiciones[equipoVisitante] = crearRegistroEquipo(equipoVisitante);
    }

    posiciones[equipoLocal].partidos_jugados += 1;
    posiciones[equipoVisitante].partidos_jugados += 1;
    posiciones[equipoLocal].goles_favor += golesLocal;
    posiciones[equipoLocal].goles_contra += golesVisitante;
    posiciones[equipoVisitante].goles_favor += golesVisitante;
    posiciones[equipoVisitante].goles_contra += golesLocal;

    if (golesLocal > golesVisitante) {
      posiciones[equipoLocal].victorias += 1;
      posiciones[equipoLocal].puntos += 3;
      posiciones[equipoVisitante].derrotas += 1;
    } else if (golesLocal < golesVisitante) {
      posiciones[equipoVisitante].victorias += 1;
      posiciones[equipoVisitante].puntos += 3;
      posiciones[equipoLocal].derrotas += 1;
    } else {
      posiciones[equipoLocal].empates += 1;
      posiciones[equipoLocal].puntos += 1;
      posiciones[equipoVisitante].empates += 1;
      posiciones[equipoVisitante].puntos += 1;
    }
  }

  const tabla = Object.values(posiciones);
  tabla.sort((a, b) => b.puntos - a.puntos || b.diferencia_goles - a.diferencia_goles);

  return tabla.map((equipo, indice) => ({
    posicion: indice + 1,
    ...equipo,
    diferencia_goles: equipo.goles_favor - equipo.goles_contra
  }));
}

function crearRegistroEquipo(idEquipo) {
  return {
    equipo: idEquipo,
    partidos_jugados: 0,
    victorias: 0,
    empates: 0,
    derrotas: 0,
    goles_favor: 0,
    goles_contra: 0,
    diferencia_goles: 0,
    puntos: 0
  };
}

module.exports = { calcularTabla };
```

---

## Evidencia de validación

Comando ejecutado:

```bash
node src/validar.js
```

Salida obtenida:

```
=== Caso 1: Partidos normales (incluye pendiente) ===
1. comunicaciones-fc — PJ:1 V:1 E:0 D:0 GF:2 GC:1 DG:1 Pts:3
2. xelajú-mc — PJ:1 V:0 E:1 D:0 GF:0 GC:0 DG:0 Pts:1
3. antigua-gfc — PJ:1 V:0 E:1 D:0 GF:0 GC:0 DG:0 Pts:1
4. municipal-fc — PJ:1 V:0 E:0 D:1 GF:1 GC:2 DG:-1 Pts:0

=== Caso 2: Un solo partido (empate, mínimo de datos) ===
1. cobán-imperial — Pts:1 V:0 E:1
2. deportivo-petapa — Pts:1 V:0 E:1

=== Caso 3: Lista vacía ===
Resultado: arreglo vacío (correcto)
```

### Qué valida cada caso

| Caso | Tipo | Qué comprueba |
|------|------|---------------|
| 1 | Normal | Victoria, empate, partido pendiente omitido correctamente |
| 2 | Límite | Mínimo posible: dos equipos, un partido, goles en cero |
| 3 | Vacío/nulo | Entrada vacía devuelve arreglo vacío sin errores |

---

## Comandos Git sugeridos

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-13/maria-montepeque

# ... trabajar en los archivos ...

git add resoluciones/maria-montepeque/
git commit -m "ejercicio-13: panel deportivo multiliga — Maria Montepeque"
git push origin ejercicio-13/maria-montepeque
```
