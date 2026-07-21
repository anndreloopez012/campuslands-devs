# Ejercicio 10 — Pipeline de animación 3D — Juan Lema

## Temática

Cortometraje animado en 3D llamado **"El Faro Olvidado"**: un farero y un
acantilado como escenario principal. Se usa esta temática para poder
mostrar un pipeline real de modelado → texturas → renders → entregas.

## Estructura de carpetas

```
juan-lema/
├── 01-modelado/
│   ├── final_personaje-farero_v02.md
│   └── final_escenario-acantilado_v01.md
├── 02-texturas/
│   ├── final_personaje-farero_v01.md
│   └── final_escenario-acantilado_v02.md
├── 03-renders/
│   ├── prueba_toma-01_v01.md
│   ├── prueba_toma-01_v02.md
│   ├── final_toma-01_v03.md
│   └── prueba_toma-02_v01.md      # caso limite (ver Validacion)
├── 04-entregas/
│   └── final_toma-01_v03.md       # copia exacta del render aprobado
├── docs/
│   └── pipeline.md                # convencion de nombres y versiones
├── referencias/
│   ├── moodboard.md
│   └── paleta-colores.md
└── juan-lema.md                   # este archivo
```

Cada archivo `.md` simula el asset real (modelo, textura o render), ya que
el entregable es de organización de estructura, no assets 3D binarios.

## Cómo pensé el problema

El punto clave del ejercicio es no confundir archivos finales con pruebas,
así que usé una sola convención de nombres para las cuatro etapas:

```
[estado]_[elemento]_v[NN].md    → estado: "prueba" o "final"
```

- Toda prueba se conserva como historial, nunca se borra.
- Solo un archivo `final_` por elemento puede existir.
- Únicamente los `final_` se copian a `04-entregas/`.

Detalle completo en `docs/pipeline.md`. `referencias/` queda fuera del
pipeline (moodboard, paleta de colores) porque no son assets versionables.

## Validación (dos casos)

- **Normal (toma-01):** dos pruebas (`v01` sombra dura, `v02` reflejo
  plano) antes del `final_toma-01_v03.md`, único copiado a `04-entregas/`.
- **Límite (toma-02):** escena sin objetos en cámara → render vacío
  registrado como `prueba_`, nunca avanza a `04-entregas/`. Confirma que
  un caso límite no rompe el pipeline ni genera un entregable inválido.
