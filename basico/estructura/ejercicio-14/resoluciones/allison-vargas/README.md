## Solución del Problema
Se organizó la estructura de un proyecto musical técnico dividida en 5 módulos:

1. `tracks/`: Almacenamiento de pistas individuales e instrumentos grabados (con `.gitkeep`).
2. `samples/`: Librería de efectos, loops y muestras sonoras reutilizables (con `.gitkeep`).
3. `mixes/`: Contenedor de versiones previas y maquetas (`cancion-v01.wav`).
4. `masters/`: Carpeta exclusiva para exportaciones finales procesadas (`cancion-master-v01.wav`).
5. `docs/`: Documentación del estándar de versionado y convenciones de trabajo (`versionado-audio.md`).

## Razonamiento Técnico
Se estableció una regla estricta de nomenclatura (`cancion-v01.wav`) y se fundamentó la importancia de aislar los masters finales de los borradores de mezcla. Esto garantiza un control de versiones ordenado, protege las entregas comerciales y previene sobreescrituras accidentales durante la producción.