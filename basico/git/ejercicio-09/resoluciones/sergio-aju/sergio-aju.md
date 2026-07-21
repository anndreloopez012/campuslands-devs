<<<<<<< HEAD
# Ejercicio 09: Ramas sobre Ramas (Sci-Fi Catalog)

**Alumno:** Sergio Ajú

## Explicación del Problema
El reto consiste en organizar el flujo de trabajo de un proyecto mediante una estructura jerárquica de ramas:
1. `feature/catalogo-sci-fi`: Rama principal de la funcionalidad.
2. `feature/catalogo-sci-fi/posters`: Rama secundaria para una tarea específica.

Al finalizar, se integra la información de forma ascendente, asegurando que los cambios atómicos se mantengan organizados antes de integrarlos al `dev` principal.

## Flujo de Trabajo
1. Creación de rama base desde `dev`.
2. Creación de rama secundaria desde la base.
3. Realización de commits independientes.
4. Fusión (merge) hacia la rama principal de la feature.
5. Fusión hacia `dev`.

## Evidencia de validación
- `git log --oneline --graph --all` muestra la bifurcación y la unión posterior de las ramas.
=======
# Ejercicio Git: Ramas sobre Ramas (Sci-Fi)

**Autor:** 

Sergio Ajù

## Explicación del flujo
El objetivo fue trabajar con ramas jerárquicas (ramas sobre ramas). El razonamiento seguido fue aislar el trabajo de "posters" para que no interfiriera con la lógica principal del catálogo hasta que estuviera listo. 

1. Se creó `feature/catalogo-sci-fi` para cambios estructurales del catálogo.
2. Se creó `feature/catalogo-sci-fi/posters` para la parte visual.
3. Se integraron los cambios de forma ascendente para mantener un historial limpio.

## Comandos ejecutados

```bash
# 1. Crear rama base desde dev
git checkout dev
git checkout -b feature/catalogo-sci-fi

# 2. Crear rama secundaria
git checkout -b feature/catalogo-sci-fi/posters

# 3. Realizar cambios y commits
touch posters.txt
git add posters.txt
git commit -m "feat: agregar lista inicial de posters"

# 4. Fusionar secundaria en la principal (feature/catalogo-sci-fi)
git checkout feature/catalogo-sci-fi
git merge feature/catalogo-sci-fi/posters

# 5. Fusionar principal en dev
git checkout dev
git merge feature/catalogo-sci-fi
>>>>>>> 90785ce542dcdf35e0ce0f4c7d1d92ce3928f010
