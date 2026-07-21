#  - Conflicto simple en playlist musical

## Planteamiento del problema
Se requería simular un conflicto real de Git modificando la misma línea de un archivo en dos ramas distintas, fusionar ambas y resolver el conflicto manualmente.

## Cómo se llevó a cabo
1. Se creó `playlist.md` base en `dev`.
2. Se crearon dos ramas (`feature/playlist-a` y `feature/playlist-b`) desde el mismo punto.
3. Cada rama modificó la misma línea del archivo con contenido distinto.
4. Se fusionó la primera rama sin problema.
5. Al fusionar la segunda rama, Git generó un conflicto de contenido.
6. Se resolvió el conflicto editando el archivo manualmente y combinando ambas propuestas.
7. Se confirmó la resolución con un commit y se validó el historial.

## Pasos seguidos
- `git checkout dev` + `git pull`
- Crear `playlist.md` base y commitear
- `git checkout -b feature/playlist-a` → modificar línea → commit
- `git checkout dev` → `git checkout -b feature/playlist-b` → modificar línea → commit
- `git checkout dev` → `git merge feature/playlist-a`
- `git merge feature/playlist-b` (conflicto)
- Editar archivo resolviendo marcadores de conflicto
- `git add` + `git commit` de la resolución
- Documentar evidencia y `git push`