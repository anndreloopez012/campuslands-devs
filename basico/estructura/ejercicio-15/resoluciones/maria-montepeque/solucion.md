# Ejercicio 15 — Sistema de carreras urbanas

**Alumna:** Maria Montepeque  
**Rama:** `feat/ejercicio-15-maria-montepeque` (creada desde `dev`)  
**Dificultad:** Básica retadora  
**Temática:** Carreras y vehículos hiperdeportivos

---

## Cómo pensé el problema

El ejercicio pide organizar un simulador de carreras con cuatro entidades principales: pilotos, vehículos, pistas y resultados. El primer paso fue identificar qué pertenece a datos (JSON estático), qué pertenece a lógica (JavaScript) y qué pertenece a documentación (Markdown).

Separé el simulador en dos archivos dentro de `src/simulador/`: uno para **configuración** (parámetros globales que no cambian entre carreras) y otro para **resultados** (la lógica que sí depende de cada carrera). Esto evita mezclar constantes del negocio con funciones de cómputo.

Los datos en `data/` usan el formato `id-año` para vehículos (ej. `bugatti-divo-2022`) y `nombre-apellido` para pilotos, coherente con el campo `id` dentro de cada JSON.

---

## Árbol de carpetas

```
ejercicio-15/
├── data/
│   ├── pilotos/
│   │   ├── andy-wallace.json
│   │   └── mick-doohan.json
│   ├── vehiculos/
│   │   ├── bugatti-divo-2022.json
│   │   └── pagani-huayra-2023.json
│   └── pistas/
│       ├── circuito-ciudad-de-guatemala.json
│       └── nurburgring-nordschleife.json
├── src/
│   └── simulador/
│       ├── configuracion.js
│       ├── resultados.js
│       └── validar.js
├── docs/
│   └── reglas-de-carrera.md
└── solucion.md
```

---

## Propósito de cada carpeta

| Carpeta | Propósito |
|---|---|
| `data/pilotos/` | Perfiles de cada piloto: experiencia, victorias, vehículo asignado |
| `data/vehiculos/` | Ficha técnica de cada hypercar: potencia, peso, velocidad máxima |
| `data/pistas/` | Datos del circuito: longitud, curvas, tipo de superficie |
| `src/simulador/` | Lógica del simulador: configuración global y cálculo de resultados |
| `docs/` | Documentación de reglas de carrera para el equipo técnico |

---

## Archivos de datos destacados

### `data/vehiculos/bugatti-divo-2022.json`
```json
{
  "id": "bugatti-divo-2022",
  "marca": "Bugatti",
  "modelo": "Divo",
  "anio": 2022,
  "potencia_cv": 1500,
  "velocidad_maxima_kmh": 380,
  "peso_kg": 1895,
  "traccion": "AWD",
  "categoria": "hypercar",
  "disponible": true
}
```

### `data/pilotos/mick-doohan.json`
```json
{
  "id": "mick-doohan",
  "nombre": "Mick Doohan",
  "nacionalidad": "Australiano",
  "categoria": "hypercar",
  "experiencia_anios": 20,
  "victorias": 31,
  "vehiculo_asignado": null
}
```
> `vehiculo_asignado: null` representa un piloto registrado pero sin vehículo asignado aún — caso límite válido.

---

## Separación configuración vs resultados

**`src/simulador/configuracion.js`** — valores fijos del campeonato:
```js
const configuracionSimulador = {
  nombreLiga: "Liga Urbana Hypercar 2024",
  temporada: 2024,
  vueltasPorCarrera: 10,
  velocidadMaximaZonaUrbana: 180,
  penalizadorPesoKg: 1500,
  penalizadorSegundos: 5
};
```

**`src/simulador/resultados.js`** — lógica que varía por carrera:
```js
function calcularPuntos(posicion) {
  if (posicion < 1 || posicion > tablasPuntos.length) {
    return 0;
  }
  return tablasPuntos[posicion - 1];
}

function registrarResultadoCarrera(nombrePiloto, posicion, tiempoSegundos) {
  if (!nombrePiloto || nombrePiloto.trim() === "") {
    return { error: "El nombre del piloto no puede estar vacío." };
  }
  if (tiempoSegundos <= 0) {
    return { error: "El tiempo debe ser mayor a cero segundos." };
  }
  const puntos = calcularPuntos(posicion);
  return { piloto: nombrePiloto, posicion, tiempoSegundos, puntos };
}
```

---

## Evidencia de validación

Comando ejecutado:
```bash
node src/simulador/validar.js
```

Salida obtenida:
```
Caso normal: {
  piloto: 'Andy Wallace',
  posicion: 1,
  tiempoSegundos: 3845,
  puntos: 25
}
Caso límite (posición 11): {
  piloto: 'Mick Doohan',
  posicion: 11,
  tiempoSegundos: 3990,
  puntos: 0
}
Caso vacío (nombre vacío): { error: 'El nombre del piloto no puede estar vacío.' }
Caso tiempo en cero: { error: 'El tiempo debe ser mayor a cero segundos.' }
```

### Análisis de los casos

| # | Caso | Entrada | Resultado esperado | ✓ |
|---|------|---------|-------------------|---|
| 1 | Normal | Andy Wallace, pos. 1, 3845 s | `puntos: 25` | ✓ |
| 2 | Límite | Mick Doohan, pos. 11, 3990 s | `puntos: 0` (fuera de tabla) | ✓ |
| 3 | Vacío | nombre `""`, pos. 2 | `error: nombre vacío` | ✓ |
| 4 | Cero | tiempo `0` | `error: tiempo inválido` | ✓ |

---

## Verificación de nombres de variables

```bash
grep -rn "\bcosas\b|\bvarios\b" src/
# Sin resultados — sin nombres genéricos
```

---

## Comandos Git

```bash
git checkout dev
git pull origin dev
git checkout -b feat/ejercicio-15-maria-montepeque

# ... trabajo en la solución ...

git add basico/estructura/ejercicio-15/resoluciones/maria-montepeque/
git commit -m "feat(ejercicio-15): agrega simulador de carreras urbanas con estructura separada por dominio"
git push origin feat/ejercicio-15-maria-montepeque
```
