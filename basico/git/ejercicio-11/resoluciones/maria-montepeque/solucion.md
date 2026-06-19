# Ejercicio 11 — Stash durante urgencia de kickboxing

**Alumna:** Maria Montepeque
**Rama de trabajo:** `feat/ejercicio-11-maria-montepeque`

---

## Cómo pensé el problema

El escenario representa una situación real de trabajo: estás editando un archivo en tu rama feature pero el trabajo está incompleto, y de repente surge una tarea urgente que requiere cambiar de rama. Hacer commit en ese estado sería incorrecto porque el archivo tiene secciones a medias. Borrar los cambios tampoco es opción porque se perdería el avance.

`git stash` resuelve exactamente eso: guarda el estado actual del directorio de trabajo (cambios sin commitear) en una pila temporal, deja el árbol limpio para que puedas cambiar de rama sin conflictos, y luego permite recuperar esos cambios exactamente donde los dejaste con `git stash pop`.

Los pasos que identifiqué antes de empezar:

1. Partir desde `dev` y crear la rama feature.
2. Crear el archivo de entrenamiento y hacer un commit válido.
3. Modificar el archivo con trabajo incompleto (simular trabajo en progreso).
4. Verificar el estado con `git status` — confirmar que hay cambios sin commitear.
5. Ejecutar `git stash` con mensaje descriptivo para guardar el trabajo.
6. Cambiar a `dev` y resolver la tarea urgente (horario de competencia).
7. Regresar a la rama feature y recuperar el trabajo con `git stash pop`.
8. Confirmar que los cambios volvieron intactos.

---

## Comandos ejecutados (con salida real)

### Paso 1 — Crear la rama feature desde dev

```bash
git checkout dev
git checkout -b feat/ejercicio-11-maria-montepeque
```

```
Switched to a new branch 'feat/ejercicio-11-maria-montepeque'
```

**Por qué:** La rama se crea desde `dev` para heredar su historial. Nunca se trabaja directamente en `main`.

---

### Paso 2 — Crear archivo base y hacer commit

Se creó `rutina-kickboxing.md` con el contenido de calentamiento, técnica de golpes y combinaciones:

```bash
git add rutina-kickboxing.md
git commit -m "feat: agrega rutina base de kickboxing semana 3"
```

```
[feat/ejercicio-11-maria-montepeque db2dcd8] feat: agrega rutina base de kickboxing semana 3
 1 file changed, 13 insertions(+)
 create mode 100644 rutina-kickboxing.md
```

---

### Paso 3 — Modificar el archivo (trabajo en progreso)

Se agregó la sección `## Trabajo de saco` con una nota de que estaba incompleta. En este punto el archivo tiene cambios sin commitear.

---

### Paso 4 — git status antes del stash

```bash
git status
```

```
On branch feat/ejercicio-11-maria-montepeque
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   rutina-kickboxing.md

no changes added to commit (use "git add" and/or "git commit -a")
```

**Interpretación:** Git detecta que `rutina-kickboxing.md` tiene modificaciones que no están en el staging area ni en ningún commit. Si se intentara cambiar de rama aquí sin hacer algo con esos cambios, Git advertiría de un posible conflicto.

---

### Paso 5 — git stash

```bash
git stash push -m "wip: trabajo de saco en progreso — no listo para commit"
```

```
Saved working directory and index state On feat/ejercicio-11-maria-montepeque: wip: trabajo de saco en progreso — no listo para commit
```

**Por qué un mensaje descriptivo:** `git stash list` puede acumular varias entradas. Sin mensaje, todas aparecen como `WIP on <rama>` y es difícil identificar cuál es cuál. Con mensaje queda claro qué contiene cada entrada.

```bash
git status
```

```
On branch feat/ejercicio-11-maria-montepeque
nothing to commit, working tree clean
```

```bash
git stash list
```

```
stash@{0}: On feat/ejercicio-11-maria-montepeque: wip: trabajo de saco en progreso — no listo para commit
```

**El árbol quedó limpio.** El stash actúa como un cajón temporal: los cambios se guardaron ahí y el directorio volvió al estado del último commit.

---

### Paso 6 — Cambiar de rama y resolver urgencia

```bash
git checkout dev
```

Se creó `horario-competencia.md` con el horario del torneo regional y se hizo commit:

```bash
git add horario-competencia.md
git commit -m "feat: agrega horario de competencia regional urgente"
```

```
[dev 825cb13] feat: agrega horario de competencia regional urgente
 1 file changed, 8 insertions(+)
 create mode 100644 horario-competencia.md
```

La tarea urgente quedó resuelta en `dev` sin tocar el trabajo de la rama feature.

---

### Paso 7 — Regresar y recuperar el trabajo

```bash
git checkout feat/ejercicio-11-maria-montepeque
git stash pop
```

```
On branch feat/ejercicio-11-maria-montepeque
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   rutina-kickboxing.md

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (1a141a0810c4c209c289801008968fe06f98601c)
```

**`stash pop` hace dos cosas:** restaura los cambios al directorio de trabajo y elimina esa entrada del stash. Si se quisiera conservar la entrada (para aplicarla en otra rama también), se usaría `git stash apply` en lugar de `pop`.

---

### Paso 8 — Verificar estado final

```bash
git status
```

```
On branch feat/ejercicio-11-maria-montepeque
Changes not staged for commit:
	modified:   rutina-kickboxing.md
```

```bash
git log --oneline --all --graph
```

```
* 825cb13 feat: agrega horario de competencia regional urgente
| * db2dcd8 feat: agrega rutina base de kickboxing semana 3
|/  
* 571fb92 inicio: commit inicial
```

```bash
git stash list
# (vacío — el stash fue consumido por pop)
```

**Interpretación del grafo:** Las dos ramas divergen desde el commit inicial. `dev` tiene el horario de competencia. La rama feature tiene la rutina base. Los cambios en progreso (trabajo de saco) están de vuelta en el directorio de trabajo, listos para completarse y luego commitear.

---

## Evidencia del archivo recuperado

Contenido de `rutina-kickboxing.md` después del `stash pop`:

```markdown
# Rutina de kickboxing — Semana 3

## Calentamiento (10 min)
- Saltar la cuerda: 3 series de 2 minutos
- Rotación de caderas y hombros

## Técnica de golpes
- Jab-cross: 4 series x 20 repeticiones
- Gancho izquierdo: 3 series x 15 repeticiones
- Patada frontal (teep): 3 series x 10 por pierna

## Combinaciones
- Jab → cross → gancho → patada lateral: 5 rounds de 2 min

## Trabajo de saco (EN PROGRESO — no terminar aún)
- Round 1: solo jabs a velocidad máxima
- Round 2: combinaciones libres
```

Los cambios volvieron exactamente como se guardaron. No se perdió nada.

---

## Comandos Git de entrega

```bash
git checkout dev
git pull origin dev
git checkout -b feat/ejercicio-11-maria-montepeque

# ... trabajo en la solución ...

git add basico/git/ejercicio-11/resoluciones/maria-montepeque/
git commit -m "feat(ejercicio-11): documenta flujo de stash durante urgencia de kickboxing"
git push origin feat/ejercicio-11-maria-montepeque
```
