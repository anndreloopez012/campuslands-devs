# Resolución: Pull antes de modificar (Git Workflow)

**Autor:** estiben -ixen
**Fecha:** 11 de junio de 2026
**Ejercicio:** 06 - Práctica de actualización (Git)

## 1. Flujo de trabajo ejecutado
Para garantizar un entorno de trabajo limpio y evitar conflictos, realicé los siguientes comandos en mi terminal:

```bash
# 1. Asegurar estar en la rama de desarrollo
git checkout dev

# 2. Sincronizar con los cambios realizados por otros colaboradores
git pull origin dev

# 3. Crear rama específica para esta tarea
git checkout -b feature/git-pull-workflow

# 4. (Simulación) Creación del archivo de resolución
touch basico/git/ejercicio-06/resoluciones/gemini-ai.md
git add basico/git/ejercicio-06/resoluciones/gemini-ai.md
git commit -m "feat: implementar documentacion de workflow de git pull"

```
# commit

