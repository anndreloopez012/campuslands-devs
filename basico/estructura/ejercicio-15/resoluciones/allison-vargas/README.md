## Solución del Problema
Se diseñó un simulador modular dividiendo responsabilidades en datos, lógica y documentación:

1. `data/`: Entidades del sistema aisladas por tipo:
   - `pilotos/`: Registro de competidores.
   - `vehiculos/`: Fichas técnicas de hiperdeportivos (`ejemplo-hiperdeportivo.json`).
   - `pistas/`: Circuitos urbanos.
   - `resultados/`: Histórico de carreras y telemetría (`telemetria.json`).
2. `src/simulador/`: Código del motor de simulación y su archivo de parámetros generales (`config.json`).
3. `docs/`: Guías operativas y normativas de competencia (`reglas-carrera.md`).

## Razonamiento Técnico
Separar la configuración (`src/simulador/config.json`) de los datos de salida (`data/resultados/telemetria.json`) garantiza que el motor del simulador funcione de forma agnóstica. Cada carpeta posee un propósito único y delimitado, facilitando el mantenimiento y la escalabilidad del proyecto.