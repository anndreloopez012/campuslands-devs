## Ejercicio 06: Git Pull y Flujo de Trabajo Colaborativo

## Autor: 

Sergio Ajú

## Módulo: Git (Flujos de trabajo)

## 1. Razonamiento del Problema

En un entorno de desarrollo real, el código cambia constantemente porque otros compañeros están trabajando en la misma base. El comando git pull es vital porque nos permite traer los cambios más recientes del servidor a nuestra máquina local antes de empezar a trabajar. Esto garantiza que mi nueva rama nazca desde la versión más actualizada del proyecto, minimizando drásticamente la aparición de conflictos de código (merge conflicts) al momento de integrar mi solución.
2. Proceso Realizado
Paso 1: Actualización del entorno
Bash

# Cambiar a la rama de desarrollo
git checkout dev

# Traer los cambios más recientes del repositorio remoto
git pull origin dev

Paso 2: Creación de rama de trabajo
Bash

# Crear una nueva rama basada en el estado actualizado de dev
git checkout -b feat/tabla-futbol-sergio-aju

Paso 3: Implementación

    Se realizó la lógica para la actualización de la tabla de posiciones (cálculo de puntos por victoria, empate y derrota).

    Se validaron casos de uso:

        Caso normal: Equipo con 3 puntos (1 victoria).

        Caso límite: Equipo con 0 puntos tras varias derrotas (validación para no mostrar valores negativos o nulos).

3. Evidencia de Comandos
Bash

# Verificación de que estamos en la rama correcta y al día
git status
# On branch feat/tabla-futbol-sergio-aju
# nothing to commit, working tree clean

# Historial breve para verificar la integración
git log --oneline -n 3

## 4. ¿Por qué git pull reduce conflictos?

El conflicto ocurre cuando dos personas modifican la misma línea de un archivo. Al hacer git pull antes de crear mi rama, aseguro que mis cambios se realicen sobre la "verdad absoluta" del servidor. Si espero a terminar mi trabajo para actualizar, es muy probable que otros ya hayan modificado los archivos que yo toqué, obligándome a resolver manualmente esos choques. Hacerlo al inicio es una medida preventiva.