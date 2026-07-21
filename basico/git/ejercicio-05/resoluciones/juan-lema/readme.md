# Ejercicio 05 — Push de rama de taller de motos — Juan Lema

## Tematica

Motos. Registrar el mantenimiento semanal de una moto de taller y subir la
rama personal al remoto para que quede disponible en GitHub.

## Estructura de carpetas

```
basico/git/ejercicio-05/
└── resoluciones/
    └── juan-lema/
        ├── solucion.md   # registro de mantenimiento (entregable)
        └── README.md     # este archivo (explicacion y evidencia)
```

## Comandos utilizados

1. `git checkout dev`
2. `git pull origin dev`
3. `git checkout -b juan-lema-ejercicio-05`
4. `git status`
5. `mkdir -p basico/git/ejercicio-05/resoluciones/juan-lema`
6. `git add basico/git/ejercicio-05/resoluciones/juan-lema/solucion.md`
7. `git commit -m "feat(ejercicio-05): agregar registro de mantenimiento de moto"`
8. `git push -u origin juan-lema-ejercicio-05`
9. `git ls-remote --heads origin` (verificar que la rama existe en el remoto)

## Como pense el problema

Antes de crear la rama, actualice `dev` con `git pull` para no partir de una
base vieja. Cree mi rama con nombre descriptivo (`juan-lema-ejercicio-05`),
trabaje solo dentro de mi carpeta personal y confirme con `git status` antes
de hacer commit. El paso clave del ejercicio es `git push -u origin
nombre-rama`: el flag `-u` (`--set-upstream`) enlaza mi rama local con la
rama remota del mismo nombre, para que en pushes futuros baste con
`git push` sin repetir el nombre completo. Al final verifique con
`git ls-remote --heads origin` que la rama realmente llego al remoto, en
lugar de asumir que el push funciono solo porque no hubo error visible.

## Notas tecnicas

- `git push -u origin juan-lema-ejercicio-05` crea la rama en el remoto si no
  existia y establece el tracking (`upstream`) con la rama local.
- Verificar el push con `git ls-remote --heads origin` o revisando la
  pestana "branches" en GitHub, no solo confiar en la salida de la terminal.
- `main` y `dev` no se modifican en ningun momento; el push solo afecta a la
  rama personal.
- Convencion de commit: `feat(ejercicio-05): descripcion clara`.

## Validacion (dos casos)

**Normal** — push exitoso de la rama personal:

```text
$ git push -u origin juan-lema-ejercicio-05
branch 'juan-lema-ejercicio-05' set up to track 'origin/juan-lema-ejercicio-05'.

$ git ls-remote --heads origin
fef6556...  refs/heads/dev
7f465c5...  refs/heads/juan-lema-ejercicio-05
```

La rama `juan-lema-ejercicio-05` queda visible en el remoto junto a `dev`,
confirmando que el push llego correctamente.

**Limite** — intentar commitear sin cambios en staging (working tree limpio
tras el push):

```text
$ git commit -m "intento vacio"
On branch juan-lema-ejercicio-05
Your branch is up to date with 'origin/juan-lema-ejercicio-05'.
nothing to commit, working tree clean
```

Git rechaza el commit porque no hay nada nuevo en staging, evitando un
commit vacio sin contenido real.