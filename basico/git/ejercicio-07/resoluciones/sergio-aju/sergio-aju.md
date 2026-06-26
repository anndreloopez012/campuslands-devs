## Ejercicio 07: Merge de Ranking de Ping-Pong

## Autor: 

Sergio Ajú

## Módulo: Git (Integración de Ramas)
## 1. Razonamiento del Problema

El comando git merge es el mecanismo estándar para integrar el trabajo desarrollado en una rama de características (feature branch) hacia nuestra rama de integración (dev). Al realizar esta acción, consolidamos el historial de trabajo y hacemos que los cambios individuales sean parte del proyecto central.

## 2. Flujo de Trabajo Ejecutado
Paso 1: Creación de la rama de trabajo
Bash

git checkout -b feature/ranking-pingpong

Paso 2: Desarrollo y Commit

    Se creó el archivo ranking.md con la tabla de posiciones actual.

    Commit: git commit -m "feat: agregar ranking inicial de jugadores"

Paso 3: Fusión a la rama de integración
Bash

# Regreso a la base de integración
git checkout dev

# Integración del trabajo
git merge feature/ranking-pingpong

3. Validación del Historial

Para confirmar que el merge fue exitoso, utilizamos:
Bash

git log --oneline --graph -n 5

Esta salida nos permite visualizar cómo las dos líneas de tiempo se han unido en un único punto común en dev.
4. ¿Qué aprendí sobre el Merge?

    El merge toma el historial de la rama secundaria y lo aplica sobre la rama destino.

    Si no hay modificaciones conflictivas en los mismos archivos entre ambas ramas, Git realiza un Fast-forward (o merge automático), lo cual es el escenario ideal de trabajo colaborativo.