# Checklist final de flujo profesional — Juan Lema

## Tematica

Ropa y proyectos reales. Simulo el lanzamiento de la coleccion "Otono 2026"
de una marca de ropa, integrando ramas, commits, pull y una revision final
de entrega, tal como pide el ejercicio.

## Estructura de carpetas

```
juan-lema/
├── checklist-entrega.md  # solucion: checklist de entrega + tabla de prendas
└── juan-lema.md           # este archivo (explicacion y evidencia)
```

## Flujo de Git seguido

1. Cree mi rama desde `dev`: `git-ejercicio-15-juan-lema`.
2. Trabaje en mi solucion: `checklist-entrega.md` dentro de mi carpeta
   personal, y la commiteé con un mensaje claro.
3. Mientras tanto, simule que `dev` avanzo (otro companero subio el
   catalogo base de prendas directo a `dev`), para tener un caso real
   de divergencia entre ramas.
4. Actualice mi rama con `dev` antes de entregar (`git pull origin dev`,
   simulado aqui con `git merge dev` porque no hay remoto real en el
   sandbox).
5. Prepare el checklist final de entrega profesional (seccion siguiente).

## Comandos usados

```
git checkout dev
git checkout -b git-ejercicio-15-juan-lema

mkdir -p basico/git/ejercicio-15/resoluciones/juan-lema
# creacion de checklist-entrega.md dentro de esa carpeta

git add basico/git/ejercicio-15/resoluciones/juan-lema/checklist-entrega.md
git commit -m "git-ejercicio-15: agrega checklist de entrega (coleccion ropa)"

git pull origin dev
# (equivalente local usado para validar: git merge dev)

git push origin git-ejercicio-15-juan-lema
```

## Como pense el problema

1. Identifique entrada, proceso y salida, igual que en un ejercicio de logica:
   - Entrada: una tarea real (checklist de entrega de una coleccion de ropa)
     mas el hecho de que `dev` puede avanzar mientras yo trabajo.
   - Proceso: crear rama, trabajar en mi solucion, commitear, traer los
     cambios de `dev` antes de entregar, y armar el checklist final.
   - Salida: una rama actualizada con `dev`, sin conflictos, lista para
     abrir PR, con evidencia de cada paso.
2. Separe el trabajo en pasos pequenos (rama, archivo, commit, pull, checklist)
   para poder validar cada uno por separado y no mezclar la creacion de
   contenido con la sincronizacion de ramas.
3. Deje evidencia de comandos reales, incluyendo el momento en que `dev`
   avanzo en paralelo, para que la revision pueda seguir el razonamiento
   completo y no solo el resultado final.

## Notas tecnicas

- El nombre de rama sigue el patron `git-ejercicio-15-nombre-apellido` para
  que sea identificable y no choque con el de otros companeros.
- La carpeta respeta el formato obligatorio `nombre-apellido/` y solo
  contiene archivos dentro de `resoluciones/juan-lema/`, sin tocar archivos
  base del ejercicio ni el `.gitkeep`.
- No se modifico el `README.md` del ejercicio ni se trabajo directamente
  sobre `main`.
- La actualizacion con `dev` se hizo con `merge` (no `rebase`) para conservar
  el historial de ambas ramas y que quede visible en `git log --graph` que
  hubo trabajo en paralelo.

## Validacion (dos casos)

Caso normal — actualizo mi rama con `dev` despues de que avanzo en paralelo:

```
git log --oneline --graph --all
*   f55f5a9 merge: actualiza rama con dev antes de entrega (git pull origin dev)
|\
| * 1669756 feat(ejercicio-15): agrega catalogo base de prendas
* | 2b41e01 git-ejercicio-15: agrega checklist de entrega (coleccion ropa)
|/
* d15a49b chore: commit base del ejercicio 15

git status
On branch git-ejercicio-15-juan-lema
nothing to commit, working tree clean
```

Caso limite — intentar hacer commit sin cambios pendientes (rama ya
actualizada y sin modificaciones nuevas):

```
git commit -m "sin cambios"
On branch git-ejercicio-15-juan-lema
nothing to commit, working tree clean
```

Git evita crear un commit vacio; no se genera historial innecesario. El
`git push` se documenta como parte del flujo, aunque en este sandbox no
existe un remoto real configurado.