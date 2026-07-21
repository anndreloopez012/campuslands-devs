# Modelo de Datos: Panel Deportivo Multiliga

## 1. Estructura de Equipos
Los archivos en `data/equipos/` contendrán la lista de clubes separados por liga (ej. `laliga.json`):
- `id`: Identificador único del club.
- `nombre`: Nombre oficial.
- `estadio`: Sede local.

## 2. Estructura de Partidos
Los archivos en `data/partidos/` registrarán los encuentros por liga:
- `id_partido`: Código del encuentro.
- `local` / `visitante`: IDs de los equipos.
- `goles_local` / `goles_visitante`: Marcador final.

## 3. Ejemplo de Tabla de Posiciones
Esta tabla se generaría calculando los puntos a partir de la data de los partidos:

| Pos | Equipo | PJ | G | E | P | GF | GC | DIF | PTS |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Real Madrid | 1 | 1 | 0 | 0 | 2 | 0 | +2 | **3** |
| 2 | FC Barcelona | 1 | 0 | 1 | 0 | 1 | 1 | 0 | **1** |