# Commits pequeños de inventario battle royale — Juan Lema

## Tematica

Videojuegos battle royale. Dividir la construccion de un inventario de
escuadra en commits pequeños y logicos, en lugar de subir todo de una vez.

## Estructura de carpetas

```
basico/git/ejercicio-04/
└── resoluciones/
    └── juan-lema/
        ├── inventario.md
        └── README.md
```

## Comandos utilizados

```bash
git checkout dev
git pull origin dev
git checkout -b juan-lema-ejercicio-04

# 1) crear inventario.md con la estructura general
git add basico/git/ejercicio-04/resoluciones/juan-lema/inventario.md
git commit -m "feat(inventario): agregar estructura base del inventario"

# 2) agregar la seccion de armas al mismo archivo
git add basico/git/ejercicio-04/resoluciones/juan-lema/inventario.md
git commit -m "feat(inventario): agregar seccion de armas"

# 3) agregar curaciones y utilidad
git add basico/git/ejercicio-04/resoluciones/juan-lema/inventario.md
git commit -m "feat(inventario): agregar curaciones y utilidad"

git log --oneline
git push origin juan-lema-ejercicio-04
```

## Como pense el problema

El objetivo no era escribir el inventario completo de golpe, sino mostrar
que cada cambio con un proposito distinto merece su propio commit. Separe
el trabajo en tres momentos naturales del inventario: primero la estructura
(mochila, chaleco, casco), despues las armas, y por ultimo curaciones y
utilidad. Cada commit toca el mismo archivo (`inventario.md`) pero agrega
una seccion diferente, así el historial cuenta la historia de como se
construyo el inventario en vez de aparecer como un solo cambio gigante.
Trabaje siempre sobre mi rama personal (`dev` → `juan-lema-ejercicio-04`)
para no tocar `main` ni `dev` directamente.

## Notas tecnicas

- Un commit pequeño y con mensaje claro (`feat(inventario): ...`) es mas
  facil de revisar y de revertir si algo sale mal, que un commit gigante
  con todo mezclado.
- Los tres commits modifican el mismo archivo pero en momentos distintos,
  por eso `git add` se ejecuta cada vez antes de cada commit, no una sola
  vez al final.
- Convencion de mensaje: `tipo(alcance): descripcion corta en presente`.

## Validacion (dos casos)

**Normal** — historial muestra los tres commits en orden, del mas reciente
al mas antiguo:

```text
$ git log --oneline
bc7b96a feat(inventario): agregar curaciones y utilidad
4992902 feat(inventario): agregar seccion de armas
c07dc06 feat(inventario): agregar estructura base del inventario
```

**Limite** — intentar un commit sin cambios nuevos en staging no crea un
commit vacio:

```text
$ git status --short
(sin salida = working tree limpio)

$ git commit -m "intento vacio"
On branch juan-lema-ejercicio-04
nothing to commit, working tree clean
```

Esto confirma que Git bloquea commits vacios y que cada uno de los tres
commits reales corresponde a un cambio concreto en `inventario.md`.