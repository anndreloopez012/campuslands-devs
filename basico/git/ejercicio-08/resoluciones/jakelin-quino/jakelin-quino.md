# Ejercicio 08 Git
## Crear archivo base en dev
echo "1. Bohemian Rhapsody - Queen" > playlist.md
git add playlist.md
git commit -m "base: playlist inicial"

## Crear rama A
git checkout -b feature/playlist-a
echo "1. Hotel California - Eagles" > playlist.md
git add playlist.md
git commit -m "feat: playlist A"

## Crear rama B desde dev
git checkout dev
git checkout -b feature/playlist-b
echo "1. Stairway to Heaven - Led Zeppelin" > playlist.md
git add playlist.md
git commit -m "feat: playlist B"

## Fusionar rama A en dev
git checkout dev
git merge feature/playlist-a

## Intentar fusionar rama B (conflicto)
git merge feature/playlist-b

# Resolver conflicto

## Editar playlist.md dejando ambas canciones
echo "1. Hotel California - Eagles" > playlist.md
echo "2. Stairway to Heaven - Led Zeppelin" >> playlist.md

## Marcar como resuelto
git add playlist.md
git commit -m "merge: resuelto conflicto playlist"

# Evidencia

## Estado durante conflicto
git status

## CONFLICT (content): Merge conflict in playlist.md
## Unmerged paths: playlist.md

## Historial final
``` text
git log --oneline --graph
*   abc123 merge: resuelto conflicto playlist
|\
| * def456 feat: playlist B
* | ghi789 feat: playlist A
|/
* jkl012 base: playlist inicial
```