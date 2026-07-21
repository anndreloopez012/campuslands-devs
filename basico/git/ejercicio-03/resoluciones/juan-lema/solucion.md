# Ejercicio 03 — Rama personal para jugador MOBA — Juan Lema

## Tematica

Videojuegos MOBA. Crear una rama personal desde `dev` y subir un archivo de
solucion sin tocar `main`.

## Estructura de carpetas

    basico/git/ejercicio-03/
    └── resoluciones/
        └── juan-lema/
            └── solucion.md

## Comandos utilizados

1. `git checkout dev`
2. `git pull origin dev`
3. `git checkout -b alumno/juan-lema/ejercicio-03`
4. `git status`
5. `mkdir -p basico/git/ejercicio-03/resoluciones/juan-lema`
6. `git add basico/git/ejercicio-03/resoluciones/juan-lema/solucion.md`
7. `git commit -m "feat(ejercicio-03): agregar solucion de rama personal MOBA - Juan Lema"`
8. `git push origin alumno/juan-lema/ejercicio-03`

## Como pense el problema

Parti desde `dev` actualizado (no desde `main`, que es codigo estable), cree
mi rama con el formato `alumno/nombre-apellido/ejercicio-numero`, verifique
con `git status` antes de agregar y commitear, y solo subi mi propio archivo
al staging para no arrastrar cambios ajenos.

## Notas tecnicas

- Convencion de rama: `alumno/nombre-apellido/ejercicio-numero`.
- Mensaje de commit tipo `feat(ejercicio-03): ...`.
- `main` y `dev` no se modifican en ningun momento.

## Validacion (dos casos)

**Normal** — flujo completo sube la rama sin errores; `git branch` muestra el
asterisco en `alumno/juan-lema/ejercicio-03` y `dev`/`main` quedan intactos.

**Limite** — intentar `git commit` sin nada en staging devuelve:

    On branch alumno/juan-lema/ejercicio-03
    nothing to commit, working tree clean

---

# Pull Request — Ejercicio 03 — Juan Lema

## Descripción

Creación de rama personal desde `dev` y subida de `solucion.md` sin
modificar `main`.

## Rama de trabajo

- Rama origen: `alumno/juan-lema/ejercicio-03`
- Rama destino: `dev`

## Validación

- [x] Mi solución está dentro de `resoluciones/nombre-apellido/`.
- [x] No dejé archivos sueltos directamente dentro de `resoluciones/`.
- [x] No modifiqué respuestas de otros alumnos.
- [x] No borré archivos base del repositorio.
- [x] Revisé `git status` antes de subir.

## Notas para revisión

Solo se agregó el archivo propio; no se usó `git add .` en ningún momento.