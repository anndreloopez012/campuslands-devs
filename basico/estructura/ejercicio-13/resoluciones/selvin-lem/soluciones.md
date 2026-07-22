# Panel deportivo multiliga — Solución

## Autor
Shadm

## Planteamiento del problema

Este ejercicio también es de organización, no de código ejecutable: hay que estructurar un proyecto de panel deportivo multiliga. Se piden cuatro carpetas base (data/equipos, data/partidos, src, docs), un archivo docs/modelo-datos.md que defina cómo se relacionan equipos, partidos y tablas, archivos separados por liga (para que cada liga tenga su propio espacio de datos), y un ejemplo de tabla de posiciones. La estructura debe quedar preparada para escalar (agregar más ligas o temporadas sin reordenar todo).

## Estructura de carpetas

```
basico/estructura/ejercicio-13/resoluciones/shadm-dev/
├── data/
│   ├── equipos/
│   │   ├── liga-nacional-gt.json
│   │   └── premier-league.json
│   └── partidos/
│       ├── liga-nacional-gt.json
│       └── premier-league.json
├── src/
│   └── .gitkeep
├── docs/
│   ├── modelo-datos.md
│   └── ejemplo-tabla.md
└── solucion.md
```

## Explicación del razonamiento

- data/ separa equipos de partidos porque son entidades distintas con distinto ciclo de vida (los equipos cambian poco, los partidos se agregan constantemente).
- Cada liga tiene su propio archivo dentro de equipos/ y partidos/, así agregar una liga nueva es solo sumar un archivo, no reestructurar nada.
- docs/modelo-datos.md deja explícito que la tabla de posiciones no se guarda, se calcula a partir de los partidos, evitando duplicar datos que se pueden derivar.
- src/ queda vacía con .gitkeep porque el ejercicio pide estructura, no lógica de cálculo todavía; queda lista para cuando se implemente el cálculo real de tablas.
