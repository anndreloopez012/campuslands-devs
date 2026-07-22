#  Push de rama de taller de motos

## Planteamiento del problema
Se requería subir una rama personal al remoto, partiendo de `dev`, con evidencia del proceso en una carpeta con formato `nombre-apellido/`.

## Cómo se llevó a cabo
1. Se actualizó `dev` local con `git pull`.
2. Se creó una rama personal desde `dev`.
3. Se creó la carpeta `resoluciones/selvin-lem/` con el archivo de evidencia.
4. Se agregaron los cambios al staging (`git add`).
5. Se hizo commit con mensaje descriptivo.
6. Se hizo push con `-u origin alumno/selvin-lem/ejercicio-05` para trackear la rama remota.
7. Se verificó el log y el estado del repositorio.

## Pasos seguidos
- `git checkout dev`
- `git pull origin dev`
- `git checkout -b alumno/selvin-lem/ejercicio-05`
- `mkdir -p basico/git/ejercicio-05/resoluciones/selvin-lem`
- `git add .`
- `git commit -m "finalizar el ejericio-05, github."`
- `git push -u origin * alumno/selvin-lem/ejercicio-05`
