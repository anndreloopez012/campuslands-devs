
# Modelo de Datos - Panel Deportivo

## Estructura de archivos
Para cada liga (ej. `laliga.json`, `premier.json`), los datos se dividen así:
- `data/equipos/`: JSON con la lista de clubes y sus estadísticas.
- `data/partidos/`: JSON con resultados históricos.

## Ejemplo de Tabla (data/equipos/laliga.json)
```json
{
  "equipo": "Real Madrid",
  "puntos": 0,
  "jugados": 0
}