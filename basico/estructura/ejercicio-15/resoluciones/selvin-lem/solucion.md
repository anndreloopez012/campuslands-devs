# Sistema de carreras urbanas — Solución

## Autor
Shadm

## Planteamiento del problema

Otro ejercicio de organización, ahora para un simulador de carreras urbanas con vehículos hiperdeportivos. Se piden cinco carpetas base (data/pilotos, data/vehiculos, data/pistas, src/simulador, docs), un ejemplo de vehículo, documentación de las reglas de carrera, y una separación clara entre configuración (datos de entrada: pilotos, vehículos, pistas) y resultados (salida generada tras simular una carrera) — para no mezclar lo que el sistema recibe con lo que el sistema produce.

## Estructura de carpetas

```
basico/estructura/ejercicio-15/resoluciones/shadm-dev/
├── data/
│   ├── pilotos/
│   │   └── temporada-2026.json
│   ├── vehiculos/
│   │   └── catalogo.json
│   ├── pistas/
│   │   └── circuito-central.json
│   └── resultados/
│       └── .gitkeep
├── src/
│   └── simulador/
│       └── .gitkeep
├── docs/
│   ├── reglas-carrera.md
│   └── modelo-datos.md
└── solucion.md
```

## Explicación del razonamiento

- data/pilotos, data/vehiculos y data/pistas son catálogos de configuración: definen quién corre, con qué y dónde. data/resultados es distinto: es salida generada, no algo que se escribe a mano.
- src/simulador/ queda separado de data/ porque contiene lógica (código), no datos, separación estándar entre código y datos en cualquier proyecto real.
- docs/reglas-carrera.md documenta las reglas de negocio (cómo se calcula el ganador) independientemente de la implementación, para que cualquiera entienda el sistema sin leer código.
- docs/modelo-datos.md justifica explícitamente por qué configuración y resultados están separados, cumpliendo el paso 4 del enunciado.
