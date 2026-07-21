# Ejercicio: Resolución de Conflictos en Git

## Objetivo

El propósito de este ejercicio es aprender cómo Git maneja los conflictos cuando dos ramas modifican la misma línea de un archivo y posteriormente se intenta fusionarlas.

Al finalizar el ejercicio serás capaz de:

- Crear ramas.
- Realizar cambios en distintas ramas.
- Fusionar ramas (`merge`).
- Identificar un conflicto.
- Resolver el conflicto manualmente.
- Finalizar la fusión correctamente.

---

# Requisitos

- Git instalado.
- Un repositorio inicializado.
- Un archivo llamado `playlist.md`.

Si el repositorio aún no existe:

```bash
git init
touch playlist.md
```

Agregar contenido inicial al archivo:

```text
# Playlist

1. Bohemian Rhapsody
```

Guardar el archivo:

```bash
git add playlist.md
git commit -m "Agregar playlist inicial"
```

---

# Paso 1. Crear dos ramas desde el mismo punto

Crear la primera rama:

```bash
git branch rama-a
```

Crear la segunda rama:

```bash
git branch rama-b
```

Verificar las ramas disponibles:

```bash
git branch
```

Resultado esperado:

```text
* main
  rama-a
  rama-b
```

---

# Paso 2. Modificar la misma línea en ambas ramas

## Cambios en la rama A

Cambiar a la rama:

```bash
git checkout rama-a
```

Modificar el archivo `playlist.md`.

Ejemplo:

```text
# Playlist

1. Hotel California
```

Guardar los cambios:

```bash
git add playlist.md
git commit -m "Modificar canción en rama A"
```

---

## Cambios en la rama B

Regresar a la rama principal:

```bash
git checkout main
```

Cambiar a la segunda rama:

```bash
git checkout rama-b
```

Modificar exactamente la misma línea del archivo.

Ejemplo:

```text
# Playlist

1. Imagine
```

Guardar:

```bash
git add playlist.md
git commit -m "Modificar canción en rama B"
```

---

# Paso 3. Fusionar la primera rama

Regresar a la rama principal:

```bash
git checkout main
```

Fusionar la primera rama:

```bash
git merge rama-a
```

Como no existen cambios previos en `main`, la fusión será automática.

---

# Paso 4. Intentar fusionar la segunda rama

Ejecutar:

```bash
git merge rama-b
```

Git detectará que ambas ramas modificaron la misma línea.

Se mostrará un mensaje similar a:

```text
Auto-merging playlist.md
CONFLICT (content): Merge conflict in playlist.md
Automatic merge failed; fix conflicts and then commit the result.
```

---

# Paso 5. Resolver el conflicto

Abrir el archivo `playlist.md`.

Git mostrará algo parecido a:

```text
# Playlist

<<<<<<< HEAD
1. Hotel California
=======
1. Imagine
>>>>>>> rama-b
```

Los marcadores significan:

- `<<<<<<< HEAD` → contenido de la rama actual.
- `=======` → separador.
- `>>>>>>> rama-b` → contenido proveniente de la rama que se intenta fusionar.

Eliminar los marcadores y dejar una versión coherente.

Ejemplo:

```text
# Playlist

1. Hotel California
2. Imagine
```

Guardar el archivo.

Agregar los cambios:

```bash
git add playlist.md
```

Finalizar la fusión:

```bash
git commit -m "Resolver conflicto entre rama-a y rama-b"
```

---

# Verificar el historial

Visualizar el historial de commits:

```bash
git log --oneline --graph --all
```

También puedes utilizar:

```bash
git log --graph --decorate --oneline
```

---

# Comandos utilizados

```bash
git init
git branch
git branch rama-a
git branch rama-b
git checkout rama-a
git checkout rama-b
git checkout main
git add .
git commit -m "mensaje"
git merge rama-a
git merge rama-b
git log --oneline --graph --all
git log --graph --decorate --oneline
```

---

# Resultado esperado

Al finalizar el ejercicio habrás aprendido a:

- Crear ramas desde un mismo punto.
- Modificar el mismo archivo en ramas diferentes.
- Fusionar cambios correctamente.
- Identificar un conflicto de Git.
- Resolver conflictos manualmente.
- Completar una fusión después de resolver un conflicto.

Este ejercicio representa uno de los escenarios más comunes en proyectos colaborativos, donde varios desarrolladores modifican simultáneamente un mismo archivo.
