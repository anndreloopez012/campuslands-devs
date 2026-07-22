# Pull request de laboratorio químico

**Desarrollador:** Selvin Eladio Lem Ical

---

# 1. Pensamiento e Idea del Problema

En un proyecto colaborativo de laboratorio químico, cada integrante del equipo debe entregar su trabajo de forma ordenada para que otro compañero (o el instructor) pueda revisarlo antes de integrarlo al proyecto principal. Subir cambios directamente a `main` sin pasar por una revisión rompe el flujo de trabajo colaborativo y dificulta detectar errores antes de que afecten al resto del equipo.

Para resolver este ejercicio, se planteó un flujo de trabajo dividido en los siguientes pasos:

1. Crear una rama personal a partir de `dev`.
2. Agregar la solución dentro de la carpeta de resoluciones correspondiente.
3. Confirmar el cambio con un commit descriptivo.
4. Subir la rama al repositorio remoto con `git push`.
5. Redactar la descripción del Pull Request, incluyendo objetivo, cambios realizados y evidencia de validación.

---

# 2. Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado.

---

## Paso 1: Crear la rama personal desde dev

### Comando

```
git checkout -b alumno/selvin-lem/ejercicio-14
```

### Explicación

Se crea una rama personal siguiendo la convención de nombres `alumno/nombre-apellido/ejercicio-XX`, partiendo del estado actual de `dev`. Trabajar en una rama propia evita afectar el trabajo de otros compañeros y aísla los cambios de este ejercicio.

---

## Paso 2: Agregar la solución en la carpeta de resoluciones

### Comando

```
mkdir -p basico/git/ejercicio-14/resoluciones/selvin-lem
```

Contenido del archivo `formulas.txt`:

```
Formulas quimicas basicas de laboratorio:
H2O - agua
NaCl - cloruro de sodio
C6H12O6 - glucosa
```

### Explicación

Se crea la carpeta personal `resoluciones/selvin-lem/` respetando el formato obligatorio `nombre-apellido/`, y dentro de ella el archivo con la solución del ejercicio: un listado de fórmulas químicas básicas usadas en el laboratorio.

---

## Paso 3: Confirmar el cambio con un commit

### Comandos

```
git add basico/git/ejercicio-14/resoluciones/selvin-lem/formulas.txt
git commit -m "feat: add basic chemical formulas reference for lab exercise"
```

### Explicación

El commit describe con claridad qué se agregó (referencia de fórmulas químicas básicas) y para qué (el ejercicio de laboratorio), evitando mensajes genéricos.

---

## Paso 4: Subir la rama al repositorio remoto

### Comando

```
git push -u origin alumno/selvin-lem/ejercicio-14
```

### Salida

```
To origin
 * [new branch]      alumno/selvin-lem/ejercicio-14 -> alumno/selvin-lem/ejercicio-14
branch 'alumno/selvin-lem/ejercicio-14' set up to track 'origin/alumno/selvin-lem/ejercicio-14'.
```

### Explicación

El comando `git push -u origin alumno/selvin-lem/ejercicio-14` sube la rama al repositorio remoto y la vincula (`-u`) con su equivalente remota, para que los siguientes `push`/`pull` no necesiten especificar rama y remoto manualmente. Esta rama remota es la que se usará como base del Pull Request.

---

### Explicación

Se valida que el historial de la rama sea limpio y contenga únicamente los commits relevantes para este ejercicio, sin cambios ajenos ni archivos base modificados.

---

# 3. Conclusión

Con esta práctica se logró simular el flujo completo de entrega de un ejercicio como si fuera un Pull Request real: trabajo en rama personal, commit descriptivo, publicación remota y redacción de una descripción clara con objetivo, cambios y evidencia de validación.

Además, se comprendió la importancia de documentar el "por qué" de un cambio y no solo el "qué", ya que es esa descripción la que le permite a un revisor aprobar el trabajo sin necesidad de leer todo el código línea por línea.