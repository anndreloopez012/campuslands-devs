# solucion de ejercicio

* **Estudiante:** Brandon Estiben Ixen Teleguario
* **Fecha:** Junio 2026
* **Módulo:** estructura basica.

-----
## Propósito:
 Demostrar el manejo de ramas jerárquicas (ramas sobre ramas) en un entorno de desarrollo colaborativo.

* 1. Proceso de Resolución
Para este ejercicio, seguí un flujo de trabajo de "ramificación por capas":

Inicio: Partí desde dev y creé la rama base feature/catalogo-sci-fi.

* Ramificación: Desde feature/catalogo-sci-fi, creé la sub-rama feature/catalogo-sci-fi/posters para trabajar de forma aislada en una funcionalidad específica.

* Desarrollo: Realicé cambios y commits en la rama secundaria, luego la fusioné hacia la principal.

Integración: Finalmente, subí los cambios a dev.

* 2. Comandos Ejecutados (Bitácora)
Aquí tienes el historial de los comandos utilizados para completar la tarea:

```Bash


    # 1. Crear rama base desde dev
    git checkout dev
    git checkout -b feature/catalogo-sci-fi

    # 2. Crear rama secundaria
    git checkout -b feature/catalogo-sci-fi/posters

    # 3. Realizar cambios y commits (Ejemplo)
    touch posters.md
    git add posters.md
    git commit -m "feat: agregar lógica de carga de posters"

    # 4. Fusionar secundaria en principal
    git checkout feature/catalogo-sci-fi
    git merge feature/catalogo-sci-fi/posters

    # 5. Fusionar principal en dev local
    git checkout dev
    git merge feature/catalogo-sci-fi
    3. Explicación del Razonamiento
    Decidí utilizar ramas jerárquicas (slash notation) porque permiten organizar visualmente el trabajo en el historial de Git.
```

* ¿Por qué fusionar al final en dev? Porque dev es nuestra rama de integración constante; al fusionar al final, aseguramos que solo el código probado y consolidado llegue a la rama principal de desarrollo.

* 1. Evidencia de Validación
Ejecuté git log --graph --oneline para verificar que el historial refleje la unión de las ramas:

```bash

Plaintext


*   Merge branch 'feature/catalogo-sci-fi' into dev
|\  
| *   Merge branch 'feature/catalogo-sci-fi/posters' into feature/catalogo-sci-fi
| |\  
| | * commit final de posters
| |/  
| * commit base de catalogo
|/  
* commit en dev

```