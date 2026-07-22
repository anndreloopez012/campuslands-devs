# Proyecto de organización de archivos musicales — Juan Lema

## Tematica

Música. Estructura de carpetas para un proyecto de producción musical, separando
canciones, samples, mezclas, masters y documentación.

## Objetivo

Separar canciones, samples, mezclas y documentación para que un equipo técnico
pueda ubicar cualquier archivo sin ambigüedad, siguiendo una convención de
versionado clara.

## Estructura de carpetas

```
juan-lema/
├── tracks/
│   ├── cancion-v01.wav
│   └── cancion-v02.wav
├── samples/
│   └── .gitkeep
├── mixes/
│   └── mezcla-cancion-v02.wav
├── masters/
│   └── master-cancion-v02.wav
├── docs/
│   └── versionado-audio.md
└── juan-lema.md   # este archivo (explicacion y evidencia)
```

## Como se conecta cada carpeta

- `tracks/` guarda las grabaciones o composiciones originales, sin procesar.
- `samples/` guarda fragmentos reutilizables (loops, percusiones, texturas) que
  alimentan las canciones de `tracks/`.
- `mixes/` guarda versiones ya mezcladas de una canción de `tracks/` (balance de
  volumen, paneo, efectos), pero todavia no aprobadas como version final.
- `masters/` guarda unicamente la version final aprobada, lista para publicar.
- `docs/versionado-audio.md` documenta la convencion de nombres para que
  cualquier persona del equipo entienda el flujo sin preguntar.

Flujo: `tracks/` (materia prima) → `samples/` (complemento) → `mixes/` (borrador
procesado) → `masters/` (version final), con `docs/` explicando las reglas.

## Convencion de versionado

Todo archivo de audio sigue el formato:

```
nombre-cancion-vNN.wav
```

- `nombre-cancion`: en minusculas y con guiones, sin espacios ni acentos.
- `vNN`: numero de version con dos digitos (`v01`, `v02`, ...), que aumenta cada
  vez que se genera una nueva mezcla o revision.

Ejemplo: `cancion-v01.wav` (primer borrador) → `cancion-v02.wav` (segunda
revision) → `mezcla-cancion-v02.wav` (esa version ya mezclada) →
`master-cancion-v02.wav` (esa version aprobada como final).

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: archivos de audio sueltos (canciones, samples, mezclas).
   - Proceso: clasificarlos segun su etapa dentro del flujo de produccion.
   - Salida: una estructura de carpetas que cualquier productor pueda leer sin
     explicacion adicional.
2. Separe las carpetas por **etapa del proceso** y no por tipo de instrumento,
   porque lo que importa para el equipo es saber "que tan terminado esta" un
   archivo, no de que instrumento viene.
3. Documente la convencion de nombres en `docs/versionado-audio.md` para que
   el orden no dependa de memorizar reglas no escritas.

## Por que los masters no se mezclan con los borradores

Un `master` es la version final, ya aprobada, que se va a publicar o entregar.
Un archivo en `mixes/` todavia puede cambiar. Si ambos vivieran en la misma
carpeta, existiria el riesgo de:

- Sobrescribir por error la version final con un borrador.
- Publicar por accidente una mezcla que aun no fue aprobada.
- Perder trazabilidad de cual archivo es realmente el definitivo.

Separarlos fisicamente en carpetas distintas evita ese riesgo sin depender de
que alguien recuerde revisar bien antes de actuar.

## Notas tecnicas

- Los nombres de carpeta van siempre en minusculas y en ingles (`tracks`,
  `samples`, `mixes`, `masters`, `docs`) para mantener consistencia con otros
  proyectos del equipo.
- Cada carpeta que no tiene archivos de ejemplo lleva un `.gitkeep` para que
  Git la registre igual, ya que Git no versiona carpetas vacias.

## Validacion (dos casos)

Caso normal — proyecto con todas las etapas presentes:

```
tracks/cancion-v01.wav
tracks/cancion-v02.wav
samples/sample-bateria-v01.wav
mixes/mezcla-cancion-v02.wav
masters/master-cancion-v02.wav
```

Cada archivo esta en la carpeta que corresponde a su etapa, y el nombre indica
version y estado (mezcla o master).

Caso limite — cancion sin samples (por ejemplo, una pista solo de voz sin
loops ni percusiones externas): la carpeta `samples/` queda vacia pero se
mantiene en el repositorio gracias a `samples/.gitkeep`, sin romper la
estructura general ni obligar a eliminar la carpeta.
