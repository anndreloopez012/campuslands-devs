# Modelo de Datos - Proyecto Fútbol

## 1. Estructura de Equipos (`data/equipos/`)
Cada archivo por liga almacena un arreglo de objetos con la información institucional de los clubes:
* `id`: Identificador único del equipo (ej. `ame`, `rma`).
* `nombre`: Nombre oficial del club.
* `ciudad`: Ciudad de origen.
* `estadio`: Nombre del recinto deportivo.

## 2. Estructura de Partidos (`data/partidos/`)
Registra los encuentros disputados o programados:
* `id_partido`: Identificador único del encuentro.
* `jornada`: Número de jornada o fecha.
* `local`: ID del equipo local.
* `visitante`: ID del equipo visitante.
* `goles_local`: Goles anotados por el equipo local (null si no se ha jugado).
* `goles_visitante`: Goles anotados por el equipo visitante.
* `estado`: Estatus del partido (`programado`, `en_curso`, `finalizado`).