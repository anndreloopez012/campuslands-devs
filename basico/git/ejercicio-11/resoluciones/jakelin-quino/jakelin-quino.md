# Ejercicio 11 Git

## Comandos básicos de Git

| Comando | Qué hace | Ejemplo |
|---------|----------|---------|
| `git init` | Inicia un repositorio Git | `git init` |
| `git add <archivo>` | Agrega archivos al área de staging | `git add .` (agrega todo) |
| `git commit -m "mensaje"` | Guarda los cambios con un mensaje | `git commit -m "Agrega archivo"` |
| `git status` | Muestra el estado de los archivos | `git status` |
| `git log --oneline` | Muestra historial de commits resumido | `git log --oneline` |

---

## Comandos de ramas (branch)

| Comando | Qué hace | Ejemplo |
|---------|----------|---------|
| `git branch` | Lista todas las ramas | `git branch` |
| `git checkout -b <rama>` | Crea una nueva rama y cambia a ella | `git checkout -b feature/nueva` |
| `git checkout <rama>` | Cambia a otra rama | `git checkout dev` |
| `git merge <rama>` | Fusiona una rama con la actual | `git merge feature/posters` |
| `git branch -d <rama>` | Elimina una rama | `git branch -d feature/antigua` |

---

## Comandos para deshacer cambios

| Comando | Qué hace | Cuándo usarlo |
|---------|----------|---------------|
| `git revert <commit>` | Crea un nuevo commit que deshace los cambios | Para deshacer sin borrar historial |
| `git reset --hard <commit>` | Borra commits y cambios (peligroso) | Solo en local, nunca en equipo |
| `git reset --soft <commit>` | Deshace commits pero mantiene cambios | Para rehacer commits |

---

## Comandos de stash (guardar trabajo temporal)

| Comando | Qué hace | Ejemplo |
|---------|----------|---------|
| `git stash` | Guarda cambios sin commit y limpia el directorio | `git stash` |
| `git stash save "mensaje"` | Guarda con un mensaje descriptivo | `git stash save "WIP: rutina"` |
| `git stash list` | Muestra todos los stashes guardados | `git stash list` |
| `git stash pop` | Recupera el último stash y lo elimina | `git stash pop` |
| `git stash apply` | Recupera el stash pero NO lo elimina | `git stash apply` |
| `git stash drop` | Elimina un stash sin recuperarlo | `git stash drop stash@{0}` |