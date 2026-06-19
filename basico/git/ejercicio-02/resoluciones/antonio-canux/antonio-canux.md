# Clonación de Proyecto - Torneo RPG

**Nombre del Camper:** Marco Antonio Canux Raquec

## Práctica objetivo

Practicar el uso de comandos de git, no para memorizar, sino entender el funcionamiento de cada uno de ellos, y la importancia de el uso correcto de dichos comandos.

## Comandos utilizados 
- `git clone <url>` → trae una copia completa del repositorio remoto a mi máquina.
- `git branch` / `git branch -a` → lista las ramas. El `-a` muestra también las
  remotas. El `*` marca la rama en la que estamos ubicados.
- `git status` → me dice en qué rama estoy, qué archivos cambiaron y cuáles
  están listos para commit. Lo uso para no realizar commits a elementos no deseados.

## ¿Qué se observó?
- Al momento de realizar el `git clone`, estaremos ubicados en la rama `main`, luego nosotros deberemos cambiar a la rama `dev`, y apartir de allí, crear nuestra propia rama, en mi caso `alumno/antonio-canux/ejercicio-02`. Conforme vamos trabajando y avanzando, debemos utilizar diferentes comandos para conocer el estado de nuestros avances, `git status` y `git add` nos ayudan a checar que elementos he modificado y cuuales estaré próximo a hacer commit.

## Salida de git status actual

````
On branch alumno/antonio-canux/ejercicio-02
Your branch is up to date with 'origin/alumno/antonio-canux/ejercicio-02'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   basico/estructura/ejercicio-02/resoluciones/antonio-canux/antonio-canux.md
        new file:   basico/git/ejercicio-02/resoluciones/antonio-canux/antonio-canux.md
```