# Ejercicio 03 — Rama personal para jugador MOBA

**Alumna:** Maria Montepeque  
**Temática:** Videojuegos MOBA  
**Dificultad:** Básica retadora

---

## Objetivo

Crear una rama personal desde `dev` y subir mi archivo de solución sin tocar `main`.

---

## Razonamiento del problema

El flujo de trabajo colaborativo en Git requiere que cada persona trabaje en su propia rama para evitar conflictos con el trabajo de otras personas. La rama `main` representa el código estable y no debe tocarse directamente. La rama `dev` es el punto de partida para nuevas tareas.

Este ejercicio simula exactamente eso: soy un desarrollador que acaba de entrar al equipo de un juego MOBA y tengo que agregar mi primer archivo sin interferir con el trabajo de mis compañeros.

---

## Solución paso a paso

### Paso 1 — Cambiar a la rama `dev`

```bash
git checkout dev
```

**¿Por qué?** Antes de crear mi rama, necesito estar parada en `dev`, que es la base de trabajo del equipo. Si creara la rama desde `main`, estaría partiendo del código estable en lugar del código en desarrollo.

**Salida esperada:**
```
Switched to branch 'dev'
Your branch is up to date with 'origin/dev'.
```

---

### Paso 2 — Actualizar `dev` con los últimos cambios

```bash
git pull origin dev
```

**¿Por qué?** Otros compañeros pueden haber subido cambios a `dev` mientras yo no estaba trabajando. Si no hago pull primero, mi rama nueva podría quedar desactualizada desde el inicio, lo que genera conflictos más adelante.

**Salida esperada:**
```
Already up to date.
```
o bien:
```
Updating a1b2c3d..e4f5g6h
Fast-forward
 resoluciones/otro-alumno/ejercicio-03/solucion.md | 30 +++
 1 file changed, 30 insertions(+)
```

---

### Paso 3 — Crear la rama personal

```bash
git checkout -b alumno/maria-montepeque/ejercicio-03
```

**¿Por qué?** El flag `-b` crea la rama y cambia a ella en un solo comando. El nombre sigue el formato `alumno/nombre-apellido/ejercicio-número`, que permite identificar de quién es la rama y a qué ejercicio corresponde.

**Salida esperada:**
```
Switched to a new branch 'alumno/maria-montepeque/ejercicio-03'
```

---

### Paso 4 — Verificar que estoy en la rama correcta

```bash
git status
```

**¿Por qué?** Antes de crear o modificar archivos, confirmo que estoy en mi rama y no en `dev` o `main` por accidente.

**Salida esperada:**
```
On branch alumno/maria-montepeque/ejercicio-03
nothing to commit, working tree clean
```

---

### Paso 5 — Crear la carpeta y el archivo de solución

```bash
mkdir -p basico/git/ejercicio-03/resoluciones/maria-montepeque
```

Luego creo el archivo `solucion.md` dentro de esa carpeta con mi nombre, solución y explicación.

---

### Paso 6 — Agregar el archivo al área de staging

```bash
git add basico/git/ejercicio-03/resoluciones/maria-montepeque/solucion.md
```

**¿Por qué?** `git add` mueve el archivo al área de preparación (staging). Solo agrego mi archivo, no todos los cambios del repositorio, para no incluir cosas que no me corresponden.

**Verificación antes del commit:**
```bash
git status
```

**Salida esperada:**
```
On branch alumno/maria-montepeque/ejercicio-03
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   basico/git/ejercicio-03/resoluciones/maria-montepeque/solucion.md
```

---

### Paso 7 — Hacer el commit con mensaje profesional

```bash
git commit -m "feat(ejercicio-03): agregar solución de rama personal MOBA - Maria Montepeque"
```

**¿Por qué este mensaje?**
- `feat` indica que es una característica nueva (mi archivo de solución).
- `(ejercicio-03)` contextualiza el alcance del cambio.
- El mensaje describe exactamente qué se hizo y quién lo hizo.
- Evita mensajes genéricos como "mi tarea" o "subir archivo".

**Salida esperada:**
```
[alumno/maria-montepeque/ejercicio-03 7c3d2a1] feat(ejercicio-03): agregar solución de rama personal MOBA - Maria Montepeque
 1 file changed, 80 insertions(+)
 create mode 100644 basico/git/ejercicio-03/resoluciones/maria-montepeque/solucion.md
```

---

### Paso 8 — Subir la rama al repositorio remoto

```bash
git push origin alumno/maria-montepeque/ejercicio-03
```

**¿Por qué?** El commit existe solo en mi máquina local. Con `push` lo subo al repositorio remoto para que el instructor y mis compañeros puedan verlo.

**Salida esperada:**
```
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 1.23 KiB | 1.23 MiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
To https://github.com/equipo/repositorio-moba.git
 * [new branch]      alumno/maria-montepeque/ejercicio-03 -> alumno/maria-montepeque/ejercicio-03
```

---

## Verificación final

```bash
git log --oneline -3
```

**Salida esperada:**
```
7c3d2a1 (HEAD -> alumno/maria-montepeque/ejercicio-03, origin/alumno/maria-montepeque/ejercicio-03) feat(ejercicio-03): agregar solución de rama personal MOBA - Maria Montepeque
a1b2c3d (origin/dev, dev) feat: estructura base ejercicio-03
```

```bash
git branch
```

**Salida esperada:**
```
* alumno/maria-montepeque/ejercicio-03
  dev
  main
```

El asterisco confirma que estoy en mi rama personal. `main` y `dev` no fueron modificados.

---

## Resumen de decisiones tomadas

| Decisión | Razón |
|---|---|
| Partir desde `dev` y no desde `main` | `dev` es la rama de trabajo activo; `main` es solo código estable |
| Hacer `pull` antes de crear la rama | Evita trabajar con una base desactualizada |
| Crear la rama con `-b` | Es más eficiente que `git branch` + `git checkout` por separado |
| Agregar solo mi archivo con `git add` | Evito incluir cambios ajenos en mi commit |
| Mensaje de commit descriptivo | Permite entender el cambio sin abrir el archivo |

---

## Analogía MOBA

En un equipo de League of Legends, cada jugador tiene su carril asignado (top, mid, jungle, bot, support). Nadie invade el carril de otro sin coordinación. En Git pasa lo mismo: cada alumna trabaja en su propia rama y no modifica el trabajo de las demás. `main` sería el nexo: solo se toca cuando todo está listo y aprobado.
