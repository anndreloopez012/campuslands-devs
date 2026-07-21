# Ejercicio Git 10 — Revertir idea sin borrar historial — Juan Lema

## Tematica

Autos. Se simula un catalogo de autos donde por error se agrega un modelo
que no debia estar (un Ford Pinto 1978), y se corrige el error usando
`git revert` en lugar de `git reset`, para no perder el registro de lo
que paso.

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: catalogo base de autos (Corolla, Civic).
   - Proceso: un commit agrega por error un auto que no corresponde
     (Pinto 1978); otro commit lo revierte.
   - Salida: catalogo limpio, con el historial completo visible en `git log`.
2. En vez de usar `git reset` (que borraria el commit del historial como si
   nunca hubiera existido), use `git revert`, que crea un commit nuevo que
   deshace los cambios del commit senalado.
3. Verifique con `git log --oneline` que ambos commits (el error y su
   correccion) quedan visibles, y con el contenido del archivo que el auto
   incorrecto ya no aparece.

## Comandos usados

```bash
git checkout -b git-ejercicio-10-juan-lema-v2 dev

# Commit base correcto
git add basico/git/ejercicio-10/resoluciones/juan-lema/autos.md
git commit -m "feat(git-10): agrega catalogo base de autos"

# Commit con el error (auto incorrecto)
git add basico/git/ejercicio-10/resoluciones/juan-lema/autos.md
git commit -m "feat(git-10): agrega auto incorrecto (Pinto 1978) al catalogo"

# Correccion sin perder historial
git revert --no-edit fc53ec7
```

## Evidencia — `git log --oneline`

```
f90c0bb Revert "feat(git-10): agrega auto incorrecto (Pinto 1978) al catalogo"
fc53ec7 feat(git-10): agrega auto incorrecto (Pinto 1978) al catalogo
c6aeeba feat(git-10): agrega catalogo base de autos
8e5e89d chore: dev base
c06adcf chore: init repo
```

Los cuatro commits siguen presentes: el commit del error (`fc53ec7`) no
desaparecio, solo se le agrego un commit nuevo (`f90c0bb`) que deshace su
contenido. Cualquiera puede revisar el historial y entender que paso y por
que.

## Por que `revert` conserva el historial (y `reset` no)

- `git reset` mueve el puntero de la rama hacia atras y, en su modo `--hard`,
  descarta los commits posteriores: es como si el error nunca se hubiera
  commiteado. Esto es riesgoso en ramas compartidas porque reescribe el
  historial que otros companeros ya pudieron haber descargado.
- `git revert` no borra nada: crea un commit **nuevo** cuyo diff es el
  opuesto del commit senalado. El historial queda completo, se puede ver
  cuando se cometio el error y cuando se corrigio, y es seguro usarlo en
  ramas compartidas porque no reescribe commits existentes.

## Validacion (dos casos)

**Caso normal** — se agrega el auto incorrecto y se revierte ese commit:
el archivo `autos.md` vuelve a mostrar solo Corolla y Civic, y `git status`
queda limpio (`nothing to commit, working tree clean`).

**Caso limite** — intentar revertir el mismo commit del error una segunda
vez (`git revert fc53ec7` otra vez, despues de ya haberlo revertido): Git
detecta que el cambio que intenta aplicar ya no tiene efecto sobre el
contenido actual (el diff resultante esta vacio) y responde
`nothing to commit, working tree clean` sin crear un commit nuevo ni generar
error, en vez de duplicar la correccion.