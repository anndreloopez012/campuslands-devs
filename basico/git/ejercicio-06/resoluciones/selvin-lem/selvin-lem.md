# Resumen - Pull antes de modificar tabla de fútbol

## Planteamiento del problema
Se requería practicar la actualización de la rama `dev` antes de empezar a trabajar, para entender por qué el pull previo reduce conflictos al fusionar cambios.

## Cómo se llevó a cabo
1. Se cambió a la rama `dev`.
2. Se ejecutó `git pull origin dev` para traer los últimos cambios remotos.
3. Se creó una rama nueva desde `dev` ya actualizado.
4. Se agregó la carpeta de evidencia con la solución documentada.
5. Se hizo commit y push de la rama con tracking (`-u`).

## Pasos seguidos
- `git checkout dev`
- `git pull origin dev`
- `git checkout -b alumno/selvin-lem/ejercicio-06`
- `mkdir -p basico/git/ejercicio-06/resoluciones/selvin-lem`
- `git add .`
- `git commit -m "feat: finalizar el ejericio-06, git." `
- `git push -u origin alumno/selvin-lem/ejercicio-06`