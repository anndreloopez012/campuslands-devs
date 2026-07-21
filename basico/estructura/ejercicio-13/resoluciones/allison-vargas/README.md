## Solución del Problema
Se organizó la estructura del panel de la siguiente forma para permitir crecimiento multiliga:
1. `data/`: Dividida en `equipos/` y `partidos/`. Dentro de estas se usa un archivo JSON por liga (ej. `laliga.json`).
2. `src/`: Carpeta preparada (con `.gitkeep`) lista para recibir el código fuente de la aplicación en el futuro.
3. `docs/`: Incluye `modelo-datos.md`, donde se documentan las entidades principales y se incluye el diseño de la tabla de posiciones.

## Razonamiento Técnico
Al separar "equipos" y "partidos" en diferentes carpetas de datos, y luego agruparlos por liga mediante archivos individuales, se evita tener un solo archivo gigante y desordenado. Esto permite escalar el proyecto fácilmente el día de mañana agregando `premier.json` o `seriea.json` sin afectar los datos existentes.