# Git Inicial

**Desarrollador:** Selvin Eladio Lem Ical

---

# 1. Pensamiento e Idea del Problema

En un proyecto de videojuegos tipo *shooter*, la coordinación es importante para mantener un flujo de trabajo organizado. Si un repositorio no se inicializa correctamente desde el inicio, pueden surgir conflictos de versiones y problemas de seguimiento de archivos.

Para resolver este ejercicio, se planteó un flujo básico de trabajo en Git dividido en los siguientes pasos:

1. Crear una carpeta limpia para el proyecto.
2. Inicializar el repositorio Git.
3. Crear el archivo `README.md`.
4. Registrar el archivo en el área de preparación 
5. Realizar un commit y verificar el historial.

---

# 2. Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado.

---

## Paso 1: Crear la carpeta del proyecto y acceder a ella

### Comandos

```
mkdir practica-shooter
cd practica-shooter
```

### Explicación

* El comando `mkdir practica-shooter` crea una nueva carpeta llamada `practica-shooter`, que funcionará como directorio principal del proyecto.
* El comando `cd practica-shooter` permite ingresar a la carpeta recién creada para trabajar dentro de ella.

---

## Paso 2: Inicializar el repositorio Git

### Comando

```
git init
```

### Explicación

El comando `git init` inicializa un repositorio Git vacío dentro del proyecto.

Al ejecutarlo, Git crea una carpeta oculta llamada `.git`, donde se almacenará toda la información relacionada con el control de versiones del proyecto.

---

## Paso 3: Crear el archivo README.md

### Comando

```
echo "# Shooter Project" > README.md    
```

### Explicación

El comando `echo README.md` crea un archivo vacío llamado `README.md`, y dentro del mismo el contenido de "Shooter Project"

Este archivo se utiliza comúnmente para documentar información importante del proyecto, como su descripción, instrucciones o configuraciones básicas.

---

## Paso 4: Verificar el estado del repositorio

### Comando

```
git status
```

### Explicación

El comando `git status` muestra el estado actual del repositorio.

Permite identificar:

* Archivos nuevos.
* Archivos modificados.
* Archivos preparados para commit.
* Cambios pendientes de registrar.

En este caso, Git detectará el archivo `README.md` como un archivo no rastreado.

---

## Paso 5: Agregar el archivo al área de preparación

### Comando

```
git add README.md
```

### Explicación

El comando `git add README.md` agrega el archivo al área de preparación.

Esto indica que el archivo está listo para incluirse en el próximo commit.

---

## Paso 6: Realizar el primer commit

### Comando

```
git commit -m "feat: Initialize repository and add README file from team"
```

### Explicación

El comando `git commit -m "feat: Initialize repository and add README file from team"` guarda el estado actual del proyecto en el historial de Git.

La opción `-m` permite agregar un mensaje descriptivo para identificar fácilmente el cambio realizado.

---

## Paso 7: Verificar el historial de commits

### Comando

```
git log --oneline
90801a1 (HEAD -> main) feat: Initialize repository and add README file from team
```

### Explicación

El comando `git log` muestra el historial de commits realizados en el repositorio.

Esto permite verificar que el commit fue registrado correctamente en el historial del proyecto.

---

# 3. Conclusión

Con esta práctica se logró crear un repositorio Git desde cero, registrar un archivo en el área de preparación y realizar el primer commit del proyecto.

Además, se comprendió el funcionamiento básico de los comandos esenciales de Git para iniciar el control de versiones en un entorno de desarrollo.
