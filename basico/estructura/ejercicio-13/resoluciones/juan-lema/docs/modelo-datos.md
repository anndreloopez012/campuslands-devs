# Modelo de datos — Panel deportivo multiliga

## Equipo

Representa un equipo dentro de una liga. Vive en `data/equipos/<liga>.json`
como un arreglo de equipos.

| Campo    | Tipo   | Descripcion                          |
|----------|--------|---------------------------------------|
| id       | string | Identificador corto y unico del equipo|
| nombre   | string | Nombre visible del equipo              |
| ciudad   | string | Ciudad de origen del equipo            |

## Partido

Representa un enfrentamiento entre dos equipos de la misma liga. Vive en
`data/partidos/<jornada>.json`, agrupado por jornada.

| Campo          | Tipo   | Descripcion                              |
|----------------|--------|--------------------------------------------|
| liga           | string | Liga a la que pertenece la jornada          |
| jornada        | number | Numero de jornada dentro de la liga         |
| local          | string | `id` del equipo local                        |
| visitante      | string | `id` del equipo visitante                    |
| golesLocal     | number | Goles anotados por el equipo local          |
| golesVisitante | number | Goles anotados por el equipo visitante      |

## Tabla de posiciones (derivada)

No se guarda en disco: se calcula en `src/tabla.js` a partir de `equipos` +
`partidos`. Cada fila resulta de acumular, por equipo:

- `jugados`, `ganados`, `empatados`, `perdidos`
- `golesFavor`, `golesContra`
- `puntos` (3 por victoria, 1 por empate, 0 por derrota)

Criterio de orden: primero por `puntos` descendente, y en caso de empate,
por diferencia de goles (`golesFavor - golesContra`) descendente.

## Relacion entre archivos

```
data/equipos/liga-nacional.json  ─┐
data/partidos/jornada-1.json     ─┼─► src/tabla.js ─► tabla de posiciones (consola)
data/partidos/jornada-2.json     ─┘
```

Cada partido referencia equipos por `id`, no por nombre, para evitar
duplicar informacion y para que un cambio de nombre de equipo no rompa
los partidos ya registrados.
