# Resolución: Merge de Ranking de Pingpong

**Autor:** estiben ixen
**Fecha:** 26 de junio de 2026
**Ejercicio:** 11  cambio de tarea (Git)

## razonamiento:

1. Razonamiento del problema
En el trabajo colaborativo, es muy común que debas cambiar de tarea repentinamente (una "urgencia de combate"). Si estás a mitad de un cambio en un archivo pero no quieres hacer un commit porque el trabajo está incompleto o "sucio", git stash es la herramienta ideal. Funciona como un estante temporal donde guardas tus cambios en pausa para recuperar tu rama a un estado limpio (HEAD) y volver a ella más tarde sin perder ni un solo avance.

2. Proceso de resolución
Para simular la urgencia, seguí este flujo de trabajo:

Trabajo en curso: Modifiqué el archivo entrenamiento.md agregando una rutina de "Patadas circulares".

Detección de urgencia: Antes de hacer commit, me di cuenta de que debía arreglar un bug urgente en otra parte.

Guardado temporal: Ejecuté git stash para limpiar mi área de trabajo.

Cambio de contexto: Cambié de rama para realizar el parche necesario.

Recuperación: Regresé a mi rama original y ejecuté git stash pop para retomar mi entrenamiento.

3. Evidencia de comandos y validación
Aquí el historial de los comandos ejecutados en la terminal para resolver la urgencia:

```Bash


# 1. Modificación y verificación
git status
# Salida: modified: entrenamiento.md

# 2. Guardar cambios en el "stash"
git stash
# Salida: Saved working directory and index state WIP on dev: ...

# 3. Verificar que el área está limpia
git status
# Salida: nothing to commit, working tree clean

# 4. Recuperar el trabajo (después de la urgencia)
git stash pop
# Salida: Dropped refs/stash@{0}
```