# Stash durante urgencia de kickboxing — Juan Lema

## Tematica

Kickboxing. Simulacion de una urgencia de trabajo: tengo un cambio a medias
en la rutina de entrenamiento y debo atender otra tarea sin perder ese
avance ni hacer un commit incompleto.

## Estructura de carpetas

```
basico/git/ejercicio-11/
└── resoluciones/
    └── juan-lema/
        └── README.md
```

## Contexto simulado

- `entrenamiento.md` ya existia en `dev` con la rutina base (sombra, costal,
  patadas circulares).
- Empiezo a agregar una tecnica nueva (combo gancho + patada giratoria) pero
  no la termino de definir.
- Surge una tarea urgente: corregir el horario de la clase del sabado.
- Guardo el trabajo incompleto con `git stash`, resuelvo la urgencia, y
  despues recupero y termino el trabajo guardado.

## Comandos utilizados

```bash
git checkout dev
git checkout -b git/ejercicio-11-juan-lema

# 1. Modifico el archivo de entrenamiento (trabajo a medias)
#    -> agrego seccion "Nueva tecnica en progreso"
git status --short

# 2. Guardo el trabajo sin commitear
git stash push -m "wip: combo gancho + patada giratoria sin terminar"
git stash list
git status --short

# 3. Simulo la tarea urgente en el arbol limpio
#    -> creo/corrijo horario.md
git add horario.md
git commit -m "fix: corregir horario de clase del sabado"

# 4. Recupero el trabajo guardado
git stash pop
git status --short

# 5. Termino la tecnica y hago el commit final
git add entrenamiento.md
git commit -m "docs: completar combo gancho + patada giratoria tras recuperar stash"
```

## Como pense el problema

El objetivo era no perder trabajo incompleto ni ensuciar el historial con un
commit a medias. `git stash` guarda los cambios del working directory y del
staging en una pila separada, dejando el arbol de trabajo limpio como si
nunca hubiera tocado nada; eso me permitio atender la tarea urgente
(corregir el horario) sobre una base limpia, commitearla de forma
independiente, y despues traer de vuelta mi trabajo pendiente con
`git stash pop` (que aplica el ultimo stash y lo elimina de la pila) para
terminarlo con calma y recien ahi hacer el commit definitivo. Use
`git status --short` en cada paso para confirmar el estado exacto del
arbol de trabajo antes de decidir el siguiente comando.

## Notas tecnicas

- `git stash push -m "..."` es preferible a `git stash` a secas porque el
  mensaje identifica el contenido guardado cuando hay varios stashes.
- `git stash pop` aplica y elimina el stash de la pila; `git stash apply`
  lo aplicaria sin eliminarlo (no lo necesite aca porque solo tenia un
  cambio pendiente).
- Trabaje en la rama `git/ejercicio-11-juan-lema` creada desde `dev`, sin
  tocar `main` en ningun momento.

## Validacion (dos casos)

**Caso normal** — modifico `entrenamiento.md`, guardo con `git stash push`,
`git status --short` queda vacio, hago otro commit (`horario.md`), recupero
con `git stash pop` y el archivo vuelve con mis cambios pendientes:

```
$ git stash list
stash@{0}: On git/ejercicio-11-juan-lema: wip: combo gancho + patada giratoria sin terminar

$ git log --oneline
eb7bdff docs: completar combo gancho + patada giratoria tras recuperar stash
da0ecc8 fix: corregir horario de clase del sabado
1f7f3b5 docs: agregar rutina base de entrenamiento kickboxing
```

**Caso limite** — intentar `git stash push` cuando no hay cambios pendientes
en el arbol de trabajo:

```
$ git stash push -m "intento sin cambios"
No local changes to save
```

Git detecta que no hay nada que guardar y no crea un stash vacio.