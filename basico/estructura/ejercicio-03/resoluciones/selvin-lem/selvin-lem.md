# Resolución: Estructura de Backend para Torneo Battle Royale
### Desarrollador: Selvin Lem

### Rama de trabajo: alumno/selvin-lem/ejercicio-03

## Estructura de Archivos Creada
Para simular un entorno de producción real, escalable y ordenado para el torneo, se diseñó la siguiente arquitectura jerárquica dentro de la ruta obligatoria:

```text
selvin-lem/
│
├── selvin-lem.md                           # Documentación técnica del proyecto backend
└── src/                                # Código fuente de la aplicación
    │
    ├── controladores-partidas/         # (src/controllers) Manejo de peticiones y respuestas HTTP
    │   └── controlador-torneo.js       # Gestiona el flujo de entrada/salida de los eventos del juego
    │
    ├── servicios-logica/               # (src/services) Reglas de negocio y cálculos del Battle Royale
    │   └── calculador-puntuacion.js    # Calcula puntos por bajas (kills) y posición en el mapa
    │
    ├── modelos-datos/                  # (src/models) Estructuras y moldes de la información
    │   └── esquema-escuadra.js         # Define las propiedades de un equipo (jugadores, estado, equipo)
    │
    └── rutas-acceso/                   # (src/routes) Definición de los puntos de entrada (Endpoints)
        └── mapa-rutas.js               # Conecta las URLs con sus respectivos controladores
```
---
## Separación de Responsabilidades 
Un backend profesional no puede resolver la persistencia de datos, las reglas de juego y la recepción de usuarios en un solo lugar. He distribuido la arquitectura bajo el siguiente razonamiento:

**Rutas de Acceso (src/routes):** Es la frontera de nuestra aplicación. Su única función es saber a qué URL está llamando el usuario (por ejemplo, /api/torneo/iniciar) y redirigir esa petición al controlador correcto. No sabe cómo se calcula un punto, solo sabe guiar el tráfico.

**Controladores (src/controllers):** Actúan como recepcionistas. Reciben la petición del cliente, extraen los datos necesarios y validan que no vengan vacíos. Inmediatamente delegan el trabajo duro a los servicios. Cuando el servicio responde, el controlador se encarga de contestar de manera amigable (Códigos HTTP 200, 400, 500).

**Servicios (src/services):** Aquí vive el "cerebro" del Battle Royale. En esta capa se maneja la lógica pura: determinar si una escuadra fue eliminada, procesar el emparejamiento (matchmaking) o calcular el multiplicador de puntos según la zona del mapa.

**Modelos (src/models):** Es el plano arquitectónico de nuestros datos. Garantiza que toda escuadra o jugador que entre al sistema tenga obligatoriamente un nombre, una ID única y un contador de bajas válido, evitando que se procesen datos corruptos o vacíos.