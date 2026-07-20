# Ejercicio 01 - Inicializar repo de equipo esports
**Estudiante:** Juan Lema | **Temática:** shooters

## Proceso
`git init` crea el repo (`.git`); el README nuevo queda *untracked*. `git add`
lo pasa a staging y `git commit` fija ese punto con mensaje claro. Trabajé en
rama propia (`dev` → `juan-lema-ejercicio-01`) sin tocar `main`.

## Comandos

```bash
mkdir practica-esports && cd practica-esports
git init
git checkout -b dev
git checkout -b juan-lema-ejercicio-01
git add README.md
git commit -m "docs: agregar README inicial del equipo esports de shooters"
git log --oneline
```
## Evidencia
```text
$ git log --oneline
597e0c6 docs: agregar README inicial del equipo esports de shooters
$ git status
nothing to commit, working tree clean
# Caso límite: commit sin cambios
$ git commit -m "intento vacio"
nothing to commit, working tree clean
```
Commit `597e0c6` registrado; el caso límite confirma que Git no permite
commits vacíos sin cambios en staging.