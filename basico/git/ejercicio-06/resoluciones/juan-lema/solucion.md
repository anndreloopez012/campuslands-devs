# Ejercicio Git 06 — Pull antes de trabajar (fútbol) — Juan Lema

## Temática
Fútbol. Antes de crear una rama nueva, se actualiza `dev` con `git pull`
para evitar partir de una versión desactualizada del repositorio.

## Objetivo
Practicar `git pull` antes de comenzar a trabajar y entender por qué reduce
conflictos al integrar cambios.

## Ubicación
```
basico/git/ejercicio-06/resoluciones/juan-lema/juan-lema.md
```

## Comandos utilizados

```bash
git checkout dev
git pull origin dev
git checkout -b git-06-juan-lema
mkdir -p basico/git/ejercicio-06/resoluciones/juan-lema
git add basico/git/ejercicio-06/resoluciones/juan-lema/juan-lema.md
git commit -m "git-06: agrega resolucion de Juan Lema (pull antes de trabajar)"
git push origin git-06-juan-lema
```

## Validación

**Normal** — `dev` traía cambios remotos:
```
$ git pull origin dev
Fast-forward
 1 file changed, 12 insertions(+)
```

**Límite** — `dev` ya estaba al día:
```
$ git pull origin dev
Already up to date.
```

## Conclusión
Hacer `pull` antes de ramificar asegura partir del mismo punto que el resto
del equipo, reduciendo conflictos al abrir el PR.