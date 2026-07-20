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