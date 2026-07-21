# - Trabajo con ramas sobre ramas en película sci-fi

## Planteamiento del problema
Se requería crear una rama secundaria basada en una rama feature existente, hacer commits separados en cada una, y fusionar en el orden correcto: secundaria → principal → dev.

## Cómo se llevó a cabo
1. Se creó `feature/catalogo-sci-fi` desde `dev` y se hizo un commit con el catálogo base.
2. Se creó `feature/catalogo-sci-fi/posters` desde la rama principal (no desde dev).
3. Se hizo un commit separado agregando la sección de posters.
4. Se fusionó primero la rama secundaria (`posters`) dentro de la principal (`catalogo-sci-fi`).
5. Se fusionó luego la rama principal dentro de `dev` local.
6. Se validó el historial completo con `git log --oneline --graph`.

## Pasos seguidos
- `git checkout dev` + `git pull`
- `git checkout -b feature/catalogo-sci-fi` → commit base
- `git checkout -b feature/catalogo-sci-fi/posters` → commit posters
- `git checkout feature/catalogo-sci-fi` → `git merge feature/catalogo-sci-fi/posters`
- Documentar evidencia y `git push`