# Backend - Torneo Battle Royale

Backend básico para gestionar **partidas** y **equipos** de un torneo battle royale.

## Estructura del proyecto

```
proyecto-battle-royale/
├── README.md
└── src/
    ├── controllers/   → Reciben las peticiones HTTP y devuelven respuestas
    ├── services/      → Contienen la lógica de negocio del torneo
    ├── models/        → Definen la forma de los datos (partidas, equipos)
    └── routes/        → Declaran las URLs disponibles de la API
```

## Responsabilidad de cada carpeta

| Carpeta | Responsabilidad |
|---|---|
| `src/controllers` | Capa de entrada. Recibe la petición (req), valida lo básico, llama al service correcto y arma la respuesta (res). No contiene lógica de negocio. |
| `src/services` | Cerebro de la aplicación. Aquí viven las reglas del torneo: cómo se crea una partida, cómo se calcula el equipo ganador, cuántos jugadores admite un escuadrón, etc. |
| `src/models` | Describen los datos. Definen qué campos tiene una `Partida` o un `Equipo` y sirven de contrato entre capas. |
| `src/routes` | Mapa de la API. Conectan cada URL y método HTTP (GET, POST...) con su controller. |

## Flujo de una petición

```
Cliente → routes → controllers → services → models → respuesta al cliente
```
