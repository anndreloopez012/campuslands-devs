# Ejercicio 08 Git

## Análisis de proyecto
El objetivo de este ejercicio es simular y resolver un conflicto de fusión en un archivo de playlist musical al intentar integrar dos ramas independientes que modificaron la misma línea de texto de forma simultánea.

Requerimientos

    Crear una carpeta personal con el formato nombre-apellido (daniel-borja) dentro de la ruta especificada de resoluciones del ejercicio 08.

    Crear el archivo playlist.md dentro de la carpeta personal y realizar un commit inicial.

    Crear dos ramas divergentes (rama-rock y rama-pop) desde el mismo punto del historial.

    Modificar la misma línea del archivo playlist.md en ambas ramas con contenido distinto.

    Fusionar la primera rama de manera limpia en la rama del ejercicio.

    Provocar el conflicto de texto al intentar fusionar la segunda rama e implementar una resolución coherente.

    Validar la correcta integración de los cambios ejecutando el comando log simplificado.

## Resolución

Navegar a la ruta del ejercicio 08
cd "E:\PROGRAMACION\PRACTICE\CAMPUSLANDS-DEVS\campuslands-devs\basico\git\ejercicio-08\resoluciones"

Crear tu carpeta personal obligatoria
mkdir daniel-borja

Entrar a tu carpeta
cd daniel-borja

Crear el archivo vacío playlist.md
New-Item playlist.md

Guardar el archivo e indexar cambios iniciales
git add playlist.md

Confirmar el commit base de la playlist
git commit -m "feat(playlist): crear archivo inicial para la playlist musical"

Crear y cambiar a la primera rama de desarrollo
git checkout -b rama-rock

Modificar la primera línea de playlist.md agregando una canción de Rock en VS Code, guardar y hacer commit
git add playlist.md
git commit -m "feat(playlist): agregar pista de rock en la linea uno"

Regresar a la rama base para crear la segunda rama divergente
git checkout alumno/daniel-borja/ejercicio-08

Crear y cambiar a la segunda rama de desarrollo
git checkout -b rama-pop

Modificar la misma primera línea de playlist.md agregando una canción de Pop en VS Code, guardar y hacer commit
git add playlist.md
git commit -m "feat(playlist): agregar pista de pop en la linea uno"

Regresar a la rama principal del ejercicio para preparar la fusión
git checkout alumno/daniel-borja/ejercicio-08

Fusionar la primera rama de forma limpia
git merge rama-rock

Intentar fusionar la segunda rama para generar intencionalmente el conflicto de texto
git merge rama-pop

Abrir playlist.md en VS Code, remover las marcas de conflicto (<<<<<<<, =======, >>>>>>>), ordenar ambas canciones de forma coherente, guardar el archivo y marcarlo como resuelto
git add playlist.md

Finalizar la fusión confirmando el commit de resolución
git commit -m "fix(playlist): resolver conflicto de fusion combinando los temas de rock y pop"

Verificación del historial
git log --oneline

    PS E:\PROGRAMACION\PRACTICE\CAMPUSLANDS-DEVS\campuslands-devs\basico\git\ejercicio-08\resoluciones\daniel-borja> git commit -m "fix(playlist): resolver conflicto de fusion combinando los temas de rock y pop"
    [alumno/daniel-borja/ejercicio-08 bb3cf79] fix(playlist): resolver conflicto de fusion combinando los temas de rock y pop
    PS E:\PROGRAMACION\PRACTICE\CAMPUSLANDS-DEVS\campuslands-devs\basico\git\ejercicio-08\resoluciones\daniel-borja> git log --oneline
    bb3cf79 (HEAD -> alumno/daniel-borja/ejercicio-08) fix(playlist): resolver conflicto de fusion combinando los temas de rock y pop
    7544aff (rama-pop) feat(playlist): agregar pista de pop en la linea uno
    5d425e6 (rama-rock) feat(playlist): agregar pista de rock en la linea uno
    14d3e54 feat(playlist): crear archivo inicial para la playlist musical
    a087d53 feat(logica): solucion ejercicio 08
    5058a0e feat(estructura): solucion ejercicio 08
    bf268c5 (origin/dev, dev) fix(git): update README.md with new instructions
    86d5a7a (alumno/daniel-borja/ejercicio-07) feat(git): "Actualizacion entregable README"
    :...skipping...
    bb3cf79 (HEAD -> alumno/daniel-borja/ejercicio-08) fix(playlist): resolver conflicto de fusion combinando los temas de rock y pop
    7544aff (rama-pop) feat(playlist): agregar pista de pop en la linea uno
    5d425e6 (rama-rock) feat(playlist): agregar pista de rock en la linea uno