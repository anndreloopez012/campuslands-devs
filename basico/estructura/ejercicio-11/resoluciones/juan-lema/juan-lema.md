# Proyecto de arquitectura 3D — Juan Lema

## Tematica

Diseno 3D de arquitectura. Base de carpetas ordenada para un proyecto de
edificio, separando planos, modelos, materiales, renders y documentacion,
tal como lo organizaria un equipo tecnico real.

## Estructura de carpetas

```
juan-lema/
├── planos/
│   ├── borradores/
│   │   └── fachada-principal-v1.md
│   └── finales/
│       ├── fachada-principal.md
│       └── planta-primer-nivel.md
├── modelos/
│   ├── borradores/
│   │   └── volumen-base-v1.md
│   └── finales/
│       └── volumen-fachada-principal.md
├── materiales/
│   ├── borradores/
│   │   └── concreto-visto-v1.md
│   └── finales/
│       ├── concreto-visto.md
│       └── vidrio-templado.md
├── renders/
│   ├── borradores/
│   │   └── fachada-principal-preview.md
│   └── finales/
│       └── fachada-principal.md
├── docs/
│   ├── convenciones.md      # reglas de nombres del proyecto
│   └── plantilla-entrega.md # plantilla para futuras entregas
└── juan-lema.md              # este archivo (explicacion y evidencia)
```

## Como se conecta cada carpeta

- `planos/` define las vistas base (fachada, plantas) que luego se usan
  como referencia para construir los `modelos/`.
- `modelos/` toma esas referencias y genera los volumenes 3D; cada modelo
  final corresponde a una vista definida en `planos/finales/`.
- `materiales/` se aplica sobre los `modelos/finales/` (por ejemplo,
  `concreto-visto` y `vidrio-templado` se usan en `volumen-fachada-principal`).
- `renders/` es la salida visual final: un modelo con sus materiales ya
  aplicados, renderizado en alta calidad.
- `docs/convenciones.md` es la referencia que explica por que todo se
  llama como se llama, y `docs/plantilla-entrega.md` sirve para futuras
  entregas del mismo proyecto.

Flujo: `planos/` (referencia) → `modelos/` (volumen 3D) → `materiales/`
(acabados) → `renders/` (salida final), con `docs/` documentando el
proceso completo.

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: requisitos del proyecto (que vistas, que materiales).
   - Proceso: pasar de boceto (plano) a volumen (modelo) a acabado
     (material) hasta llegar a una imagen final (render).
   - Salida: una carpeta ordenada donde cualquier companero de equipo
     encuentra lo que busca sin preguntar.
2. Separe cada tipo de archivo en su propia carpeta (`planos/`, `modelos/`,
   `materiales/`, `renders/`) para no mezclar etapas distintas del proceso.
3. Dentro de cada carpeta separe `borradores/` de `finales/`, para que
   quede claro que esta aprobado y que todavia esta en revision.
4. Documente la convencion de nombres en `docs/convenciones.md` antes de
   nombrar los archivos, para no improvisar nombres a mitad de camino.

## Notas tecnicas

- Los nombres de vista siguen el formato `tipo-de-vista[-version].md`,
  documentado en `docs/convenciones.md` (ejemplo: `fachada-principal`).
- Dentro de `borradores/` se usa sufijo de version (`-v1`, `-v2`) para
  llevar historial; dentro de `finales/` no se usa sufijo porque solo
  debe existir una version aprobada por vista.
- Los archivos de este ejercicio son `.md` porque no se genera contenido
  3D real; cada archivo describe el contenido que tendria ese asset
  (plano, modelo, material o render) y su estado.

## Validacion (dos casos)

Caso normal — vista completa con las cuatro etapas del proceso:

```
fachada-principal:
  planos/finales/fachada-principal.md         -> Final
  modelos/finales/volumen-fachada-principal.md -> Final
  materiales/finales/concreto-visto.md         -> Final
  materiales/finales/vidrio-templado.md        -> Final
  renders/finales/fachada-principal.md         -> Final
```

Caso limite — vista que todavia no tiene version final: la carpeta
`planos/borradores/fachada-principal-v1.md` existe pero su correspondiente
`planos/finales/` para esa version no, lo cual es valido: significa que la
vista sigue en revision y no debe usarse como referencia para `modelos/`
hasta que exista su version final. Si `finales/` de alguna carpeta llegara
vacia, la entrega simplemente indica que esa etapa aun no tiene contenido
aprobado, sin romper la estructura general del proyecto.
