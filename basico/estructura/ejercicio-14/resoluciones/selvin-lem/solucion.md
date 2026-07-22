# Archivo musical para productores — Solución

## Autor
Shadm

## Planteamiento del problema

De nuevo es un ejercicio de organización de proyecto, esta vez para producción musical. Se piden cinco carpetas raíz (tracks, samples, mixes, masters, docs), un archivo docs/versionado-audio.md que defina la convención de nombres (tipo cancion-v01.wav), un README.md que simule un proyecto real, y una explicación de por qué los masters (versión final, lista para distribución) no se mezclan con borradores (mixes en progreso) — separación necesaria porque un master accidentalmente sobrescrito o confundido con un borrador puede arruinar una entrega.

## Estructura de carpetas

```
basico/estructura/ejercicio-14/resoluciones/shadm-dev/
├── tracks/
│   └── .gitkeep
├── samples/
│   ├── drums/
│   │   └── .gitkeep
│   └── loops/
│       └── .gitkeep
├── mixes/
│   └── .gitkeep
├── masters/
│   └── .gitkeep
├── docs/
│   └── versionado-audio.md
└── README.md
```

## Explicación del razonamiento

- tracks/ guarda material crudo (sin procesar); samples/ guarda recursos reutilizables entre canciones, por eso está subdividido por tipo.
- mixes/ y masters/ están separadas deliberadamente: mixes/ acumula iteraciones (versionadas), masters/ solo contiene la entrega final, sin número de versión, para que no haya ambigüedad sobre cuál es la oficial.
- docs/versionado-audio.md define la convención cancion-vNN.wav para que cualquier persona del equipo entienda el estado de un archivo solo con leer su nombre.
- El README.md simulado documenta el propósito de cada carpeta, como en un proyecto real de estudio.
