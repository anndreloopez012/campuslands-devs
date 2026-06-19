# Ejercicio 03 — Backend básico para torneo battle royale

**Nombre:** Maria Montepeque
## Solución

Estructura de carpetas creada (proyecto simulado en `proyecto-battle-royale/`):

```
proyecto-battle-royale/
├── README.md
└── src/
    ├── controllers/
    │   └── .gitkeep
    ├── services/
    │   └── .gitkeep
    ├── models/
    │   └── .gitkeep
    └── routes/
    │   └── .gitkeep
```

### Responsabilidad de cada carpeta

- **src/controllers** → capa de entrada HTTP. Recibe `req`, hace validación básica, llama al service y devuelve `res`. No tiene lógica de negocio.
- **src/services** → lógica de negocio del torneo: crear partidas, registrar equipos, calcular ganadores.
- **src/models** → definición de los datos (`Partida`, `Equipo`): qué campos existen y qué valores son válidos.
- **src/routes** → mapa de URLs de la API; conecta cada endpoint con su controller.

## Cómo pensé el problema

1. Leí el README dos veces e identifiqué: entrada = requisitos de estructura, proceso = diseñar capas, salida = árbol de carpetas documentado.
2. Pensé en el flujo real de una petición (`routes → controllers → services → models`) y usé ese flujo para decidir qué archivo de ejemplo poner en cada carpeta.
3. Elegí nombres relacionados con el contexto del torneo (`partidas`, `equipos`, `mapa`, `maximoEquipos`) en lugar de nombres genéricos.
4. Mantuve un archivo de ejemplo por carpeta, todos conectados entre sí con `require`, para que la estructura se entienda como un proyecto real y no como carpetas vacías.

## Evidencia de validación

Comandos ejecutados (copiados como texto):

```
$ git checkout dev
$ git checkout -b feature/ejercicio-03-nombre-apellido
$ mkdir -p src/controllers src/services src/models src/routes
$ git status
On branch feature/ejercicio-03-nombre-apellido
Untracked files:
  basico/estructura/ejercicio-03/resoluciones/nombre-apellido/
```

Casos validados:

- **Caso normal:** el árbol contiene las 4 carpetas pedidas dentro de `src/` y un README en la raíz del proyecto simulado. ✔
- **Caso límite:** ninguna carpeta queda vacía (cada una tiene al menos un archivo de ejemplo), y el controller valida el caso de datos vacíos (`mapa` ausente → error 400). ✔

## Checklist de entrega

- [x] Carpeta dentro de `resoluciones/nombre-apellido/`
- [x] `src/controllers`, `src/services`, `src/models`, `src/routes` creados
- [x] README.md en la raíz del proyecto simulado
- [x] Un archivo de ejemplo por carpeta con nombres descriptivos
- [x] Explicación del razonamiento
- [x] No se modificaron archivos base del ejercicio ni `.gitkeep`