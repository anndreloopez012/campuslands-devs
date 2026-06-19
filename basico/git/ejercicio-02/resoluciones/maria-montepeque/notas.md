# Ejercicio 02 - Clonar base de torneo RPG

**Nombre:** María Montepeque
**Rama de trabajo:** `alumno/maria-montepeque/ejercicio2`
**Fecha:** (completa)

---

## Objetivo del ejercicio

Practicar `git clone` y la exploración inicial de un repositorio: clonar,
entrar a la carpeta, revisar el estado y reconocer en qué rama estoy parada.

## Comandos usados y para qué sirve cada uno

- `git clone <url>` → trae una copia completa del repositorio remoto a mi máquina.
- `git branch` / `git branch -a` → lista las ramas. El `-a` muestra también las
  remotas. El `*` marca la rama en la que estoy parada.
- `git status` → me dice en qué rama estoy, qué archivos cambiaron y cuáles
  están listos para commit. Lo uso para no commitear cosas por error.
- `git log --oneline --graph --all` → muestra el historial y de qué rama "cuelga"
  la mía.

## Qué observé

- Estoy parada en la rama `alumno/maria-montepeque/ejercicio2`.
- Mi rama fue creada desde `dev` (lo confirmé con el grafo: mi commit queda
  justo encima de `upstream/dev`), tal como pide el README.
- El repositorio es un fork: tengo dos remotos, `origin` (mi copia) y
  `upstream` (el repo original del campus).
- Mi carpeta personal `resoluciones/maria-montepeque/` ya existe con su `.gitkeep`.

### Salida de `git status`

```
PS C:\Users\majoz\Desktop\campuslands-devs-maria-montepeque> git status
On branch alumno/maria-montepeque/ejercicio2
Your branch is up to date with 'origin/alumno/maria-montepeque/ejercicio2'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        basico/git/ejercicio-02/resoluciones/maria-montepeque/

nothing added to commit but untracked files present (use "git add" to track)

```

## Cómo pensé el problema

Primero leí los 5 pasos del README. Entendí que lo importante no era solo
correr comandos, sino confirmar mi punto de partida antes de trabajar: saber
en qué rama estoy, que salga de `dev`, y que mi carpeta esté en la ruta
correcta. Por eso revisé las ramas y el historial antes de crear este archivo,
para validar que todo estuviera en orden y no tocar archivos base ni el README.

## Validación

- [ ] El archivo está dentro de `resoluciones/maria-montepeque/`.
- [ ] La carpeta usa el formato `nombre-apellido/`.
- [ ] No modifiqué el README del ejercicio.
- [ ] No borré `.gitkeep`.
- [ ] No trabajé directamente en `main`.