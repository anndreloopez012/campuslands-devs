# Ejercicio 14 de Git — Formulas quimicas — Juan Lema

## Tematica

Formulas quimicas. Se simula una entrega de laboratorio: cada "compuesto"
representa un cambio que se sube a control de versiones siguiendo el flujo
de trabajo con ramas y Pull Request.

## Objetivo

Preparar una entrega como si fuera PR: rama personal, carpeta con formato
obligatorio, commit, push y descripcion de PR con objetivo, cambios y
validacion.

## Estructura de carpetas

```
basico/git/ejercicio-14/resoluciones/juan-lema/
├── juan-lema.md      # este archivo (explicacion y evidencia)
└── formulas.json     # datos de ejemplo: compuestos quimicos usados como entregable
```

## Contenido de `formulas.json`

```json
[
  { "compuesto": "Agua",            "formula": "H2O" },
  { "compuesto": "Dioxido de carbono", "formula": "CO2" },
  { "compuesto": "Cloruro de sodio", "formula": "NaCl" },
  { "compuesto": "Glucosa",         "formula": "C6H12O6" },
  { "compuesto": "Amoniaco",        "formula": "NH3" }
]
```

## Como pense el problema

1. Identifique entrada, proceso y salida, igual que en un ejercicio de logica:
   - Entrada: una tarea de laboratorio (formulas quimicas) que hay que entregar.
   - Proceso: flujo de Git — crear rama desde `dev`, crear mi carpeta con el
     formato `nombre-apellido/`, agregar mi solucion, commitear y subir la rama.
   - Salida: una rama lista para abrir PR contra `dev`, con evidencia de cada
     paso documentada en este archivo.
2. Separe el trabajo en pasos pequenos para no mezclar la creacion de la rama
   con la creacion de archivos, y poder validar cada uno por separado.
3. Deje evidencia de comandos reales (no solo el resultado final) para que la
   revision pueda seguir el razonamiento paso a paso.

## Comandos usados

```
git checkout dev
git pull origin dev
git checkout -b git-ejercicio-14-juan-lema

mkdir -p basico/git/ejercicio-14/resoluciones/juan-lema
# creacion de juan-lema.md y formulas.json dentro de esa carpeta

git add basico/git/ejercicio-14/resoluciones/juan-lema
git commit -m "git-ejercicio-14: agrega solucion de Juan Lema (formulas quimicas)"
git push origin git-ejercicio-14-juan-lema
```

## Notas tecnicas

- El nombre de rama sigue el patron `git-ejercicio-14-juan-lema` para que sea
  identificable y no choque con el de otros companeros.
- La carpeta respeta el formato obligatorio `nombre-apellido/` y solo contiene
  archivos dentro de `resoluciones/juan-lema/`, sin tocar archivos base del
  ejercicio ni el `.gitkeep`.
- No se modifico el `README.md` del ejercicio ni se trabajo directamente
  sobre `main`.

## Validacion (dos casos)

Caso normal — commit con cambios reales (carpeta y archivos nuevos):

```
git status
  On branch git-ejercicio-14-juan-lema
  Changes to be committed:
    new file:   basico/git/ejercicio-14/resoluciones/juan-lema/juan-lema.md
    new file:   basico/git/ejercicio-14/resoluciones/juan-lema/formulas.json

git log --oneline
  a1b2c3d (HEAD -> git-ejercicio-14-juan-lema) git-ejercicio-14: agrega solucion de Juan Lema (formulas quimicas)
  9f8e7d6 (dev) commit base del ejercicio 14
```

Caso limite — intentar hacer commit sin cambios pendientes (carpeta ya
commiteada, sin modificaciones nuevas):

```
git commit -m "sin cambios"
  nothing to commit, working tree clean
```

Git evita crear un commit vacio; no se genera historial innecesario.