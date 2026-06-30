
# Sistema de Carreras Urbanas
**Autora:** Irma Arias

## Razonamiento
El sistema separa los datos (la "entidad" del juego) de la lógica (el "motor" del simulador). Esto permite que el equipo de datos actualice estadísticas de vehículos sin necesidad de modificar el código fuente en `src/simulador`.

## Estructura
- `datos/`: Repositorio de entidades.
- `src/simulador/`: Lógica de cálculo de tiempos.
- `docs/`: Reglas y especificaciones técnicas.