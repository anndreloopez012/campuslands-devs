# Ejercicio 03 — Creación de Rama Personal y Profesional

**Camper:** Antonio Canux

---

## Objetivo

Que el camper sea cpaz de crear una rama personal desde `dev` y subir su archivo de solución sin tocar `main` ni afectae el trabajo de sus compañeros.

---

## Razonamiento del problema

El flujo de trabajo colaborativo dentro de Git, requiere que cada persona trabaje dentro de su propia rama a partir de una general (en este caso `dev`) para evitar conflictos con el trabajo de otras personas. Nuestra rama `main` representa el código estable y por lo tanto, no debe trabajarse en ella directamente. La rama `dev` es el punto de partida para cada camper, para la realización de los ejercicios.

---

## Solución

### Paso 1 — Cambiar a la rama `dev`

```bash
git checkout dev
```
Antes de empezar a trabajar, se debe crear una rama personal, la cuál partirá de la rama `dev`, por lo cual nos movilizamos a ella.

**Salida esperada:**
```
Switched to branch 'dev'
Your branch is up to date with 'origin/dev'.
```

---

### Paso 2 — Actualizar `dev`

```bash
git pull origin dev
```
Mientras nosotros no estamos trabajando, otros compañeros parte del desarrollo puede que hayan hecho cambios, y debo estar actualizado a esso cambios para evitar futuros conflictos

**Salida esperada:**
```
Already up to date.
```

---

### Paso 3 — Crear la rama personal

```bash
git checkout -b alumno/antonio-canux/ejercicio-03
```

Creamos nuestra rama personal, en la cual tendremos autorizado trabajar nuestra parte del proyecto, en este caso, realizar el ejercicio 03.

**Salida esperada:**
```
Switched to a new branch 'alumno/antonio-canux/ejercicio-03'
```

---

### Paso 4 — Verificar de la rama actual

```bash
git status
```

Para estar completamente seguros del nuestro correcto proceder, debemos fijarnos de estar en nuestra rama, lo cual podemos hacerlo utilizando este comando.

**Salida esperada:**
```
On branch alumno/antonio-canux/ejercicio-03
nothing to commit, working tree clean
```

---

### Paso 5 — Crear la carpeta de la resolución

```bash
mkdir -p basico/git/ejercicio-03/resoluciones/antonio-canux
```

Luego se crea el archivo `solucion.md` dentro de esa carpeta con el nombre del camper, solución y explicación.

---

### Paso 6 — Agregar el archivo al área de staging

```bash
git add basico/git/ejercicio-03/resoluciones/antonio-canux/solucion.md
```

Utilizando el comando `git add` movemos el archivo al área de preparación (staging). Nos aseguramos de agregar solamente los archivos que nos competen, y evitar agregar otros documentos que no estén relacionados a nuestra resolución.

---

### Paso 7 — Realizar el commit de manera profesional

```bash
git commit -m "feat: Agregar resolución del ejercicio #3 de git"
```

---

### Paso 8 — Subir nuestra rama al repositorio remoto

```bash
git push origin alumno/antonio-canux/ejercicio-03
```