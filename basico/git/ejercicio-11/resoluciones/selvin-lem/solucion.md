# Stash durante urgencia de kickboxing

**Desarrollador:** Selvin Eladio Lem Ical

---

# 1. Pensamiento e Idea del Problema

En un proyecto de gestión de entrenamientos de kickboxing, es común estar editando un archivo (por ejemplo, una rutina de sparring) y que surja una tarea urgente que obligue a cambiar de contexto de trabajo, como preparar la convocatoria de un torneo. Si en ese momento se hace un commit incompleto solo para "guardar" el avance, se ensucia el historial del proyecto con cambios a medio terminar.

Para resolver este ejercicio, se planteó un flujo de trabajo dividido en los siguientes pasos:

1. Modificar el archivo `entrenamiento.txt` con un ajuste de la rutina.
2. Verificar el estado del repositorio con `git status`.
3. Guardar el trabajo temporal con `git stash`, sin comprometerlo en el historial.
4. Cambiar de rama para atender la tarea urgente (convocatoria del torneo).
5. Regresar a la rama original y recuperar el trabajo guardado con `git stash pop`.

---

# 2. Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado.

---

## Paso 1: Modificar el archivo de entrenamiento

### Comando

```
echo "Rutina de sparring: 5 rounds de 3 minutos - ajuste de intensidad" > entrenamiento.txt
```

### Explicación

Se modifica el archivo `entrenamiento.txt`, que ya existía en el repositorio con un commit previo (`feat: add training file`), cambiando la rutina de 3 a 5 rounds. Este cambio queda en el área de trabajo sin ser confirmado (sin commit).

---

## Paso 2: Verificar el estado del repositorio

### Comando

```
git status
```

### Salida

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   entrenamiento.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

### Explicación

El comando `git status` confirma que el archivo `entrenamiento.txt` fue modificado pero no está preparado ni comprometido. En este punto surge la urgencia de atender otra tarea, por lo que no conviene hacer un commit incompleto solo para no perder el cambio.

---

## Paso 3: Guardar el trabajo temporal con git stash

### Comando

```
git stash
```

### Salida

```
Saved working directory and index state WIP on master: 007b0ee feat: add training file
```

### Explicación

El comando `git stash` guarda los cambios pendientes (el ajuste de la rutina) en una pila temporal y deja el árbol de trabajo limpio, como si el cambio nunca se hubiera hecho. Esto permite cambiar de tarea sin perder el avance y sin generar un commit incompleto.

Al verificar nuevamente con `git status`, el repositorio confirma:

```
On branch master
nothing to commit, working tree clean
```

---

## Paso 4: Cambiar de rama para atender la tarea urgente

### Comandos

```
git checkout -b urgencia-torneo
echo "Tarea urgente: preparar convocatoria del torneo" > convocatoria.txt
git add convocatoria.txt
git commit -m "feat: add urgent tournament call task"
```

### Explicación

* `git checkout -b urgencia-torneo` crea y cambia a una nueva rama, simulando la atención de la tarea urgente sin mezclarla con el trabajo de entrenamiento.
* Se crea el archivo `convocatoria.txt` con la tarea urgente y se confirma con un commit independiente.
* De esta forma, la rama `master` queda intacta (limpia, gracias al stash) mientras se resuelve la urgencia en su propia rama.

---

## Paso 5: Regresar a master y recuperar el trabajo con git stash pop

### Comandos

```
git checkout master
git stash pop
```

### Salida

```
Switched to branch 'master'
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   entrenamiento.txt

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (6007bdeda15abfe89f406e9a985f6441bdf8493b)
```

### Explicación

Al volver a la rama `master` y ejecutar `git stash pop`, Git restaura el cambio guardado (el ajuste de 5 rounds en `entrenamiento.txt`) y elimina el registro de la pila de stash, ya que fue aplicado exitosamente. El archivo queda exactamente como estaba antes de guardar el stash, listo para continuar el trabajo.

---

# 3. Conclusión

Con esta práctica se logró interrumpir un cambio en progreso sin perder el avance ni generar un commit incompleto, usando `git stash` como mecanismo temporal de almacenamiento. Esto permitió atender una tarea urgente en una rama distinta y, posteriormente, recuperar el trabajo original con `git stash pop`, manteniendo el historial del proyecto limpio y ordenado.

Además, se comprendió que `git stash` es una herramienta clave para el manejo de contextos de trabajo múltiples, evitando mezclar tareas no relacionadas en un mismo commit.