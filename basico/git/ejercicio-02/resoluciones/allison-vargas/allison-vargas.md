# Clonar Base de Torneo RPG

- **Estudiante:** Allison Vargas
- **Ejercicio:** 02 - Clonar base de torneo RPG
- **Ruta:** `basico/git/ejercicio-02/resoluciones/allison-vargas/`

---

## 1. Contexto del Problema
Se simuló la incorporación a un equipo de desarrollo colaborativo de un videojuego RPG. El objetivo principal fue clonar el repositorio base del proyecto, inspeccionar su estado inicial y determinar la rama activa de trabajo.

---

## 2. Comandos Ejecutados y Flujo de Trabajo

### Paso A: Clonar el repositorio del torneo RPG

Comandos ejecutados:
# Clonación del proyecto remoto hacia el entorno local
git clone https://github.com/campuslands-devs/torneo-rpg-base.git
cd torneo-rpg-base

Salida obtenida:
Cloning into 'torneo-rpg-base'...
remote: Enumerating objects: 12, done.
remote: Total 12 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (12/12), done.

### Paso B: Exploración de estado y rama actual

Comandos ejecutados:
# Verificación de archivos y cambios pendientes
git status

# Identificación de la rama local activa
git branch

Salida obtenida de git status:
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

Salida obtenida de git branch:
* main

---

## 3. Notas de Observación Técnica
1. **Propósito de git clone:** Crea una copia local exacta de un repositorio remoto, descargando su historial completo de commits, ramas y archivos.
2. **Exploración Inicial:** El comando git status confirmó que el entorno clonado está limpio (working tree clean) y sincronizado con la rama principal (main).