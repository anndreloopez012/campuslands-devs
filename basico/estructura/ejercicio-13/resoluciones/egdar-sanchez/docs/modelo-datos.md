# Modelo de Datos — Panel Deportivo Multiliga

## Descripción general

Este documento describe la estructura de datos utilizada en el proyecto. Cada liga tiene sus propios archivos de equipos y partidos dentro de las carpetas correspondientes. El campo `id` en ambos archivos es la clave que vincula los registros entre sí.

---

## Entidades

### Equipo

Representa a un club deportivo registrado en una liga.

| Campo       | Tipo     | Descripción                             |
|-------------|----------|-----------------------------------------|
| `id`        | string   | Identificador único: `nombre-club` en minúsculas con guiones |
| `nombre`    | string   | Nombre oficial del equipo               |
| `ciudad`    | string   | Ciudad donde tiene sede el equipo       |
| `fundacion` | number   | Año de fundación                        |
| `estadio`   | string   | Nombre del estadio local                |
| `colores`   | string[] | Lista de colores del uniforme principal |

**Archivo de referencia:** `data/equipos/liga-apertura.json`, `data/equipos/liga-clausura.json`

---

### Partido

Representa un encuentro entre dos equipos dentro de una jornada.

| Campo              | Tipo          | Descripción                                          |
|--------------------|---------------|------------------------------------------------------|
| `id`               | string        | Identificador único del partido: `partido-NNN`       |
| `fecha`            | string (ISO)  | Fecha del partido en formato `YYYY-MM-DD`            |
| `jornada`          | number        | Número de jornada dentro de la liga                  |
| `local`            | string        | `id` del equipo que juega en casa                   |
| `visitante`        | string        | `id` del equipo visitante                           |
| `goles_local`      | number \| null | Goles anotados por el local; `null` si no se jugó  |
| `goles_visitante`  | number \| null | Goles anotados por el visitante; `null` si no se jugó |
| `estadio`          | string        | Nombre del estadio donde se disputa el partido       |
| `estado`           | string        | `"finalizado"` o `"pendiente"`                       |

**Archivo de referencia:** `data/partidos/liga-apertura.json`, `data/partidos/liga-clausura.json`

---

## Relaciones

```
Equipo (id)  ←──── Partido (local)
Equipo (id)  ←──── Partido (visitante)
```

El `id` del equipo en `data/equipos/*.json` es la misma cadena que se usa en los campos `local` y `visitante` dentro de `data/partidos/*.json`.

---

## Convenciones de archivos

- Un archivo por liga dentro de cada subcarpeta.
- Formato de nombre: `liga-[nombre-torneo].json`.
- Los partidos `pendiente` se incluyen en el archivo pero `goles_local` y `goles_visitante` deben ser `null`.
- La lógica de cálculo (tabla de posiciones) vive en `src/` y nunca en los archivos de datos.

---

## Crecimiento futuro

Para agregar una nueva liga basta con:
1. Crear `data/equipos/liga-nueva.json` con los equipos participantes.
2. Crear `data/partidos/liga-nueva.json` con los partidos programados.
3. No es necesario modificar `src/tabla-posiciones.js` porque opera sobre cualquier arreglo de partidos.
