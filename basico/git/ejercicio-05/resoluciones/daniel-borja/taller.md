# Ejercicio 05 Git

## Análisis de proyecto
El objetivo de este ejercicio es simular el flujo de trabajo de un taller de motos para publicar y vincular de forma correcta una rama de desarrollo local hacia el repositorio remoto en GitHub.

Requerimientos

Crear una carpeta personal con el formato nombre-apellido (daniel-borja) dentro de la ruta especificada de resoluciones.

Crear un archivo llamado taller.md dentro de esa carpeta.

Primer Commit: Registrar el archivo con los datos del taller de motos en el entorno local.

Ejecutar el comando de envío para subir y rastrear la rama de trabajo en el servidor remoto.

Validar el estado del repositorio mediante los comandos de control correspondientes.

## Resolución
Primer commit

    Navegar a la ruta del ejercicio
    cd "E:\PROGRAMACION\PRACTICE\CAMPUSLANDS-DEVS\campuslands-devs\basico\git\ejercicio-05\resoluciones"

    Crear tu carpeta personal obligatoria
    mkdir daniel-borja

    Entrar a tu carpeta
    cd daniel-borja

    Crear el archivo vacío para la solución
    New-Item taller.md

    Guardar cambios y commit
    git add taller.md
    git commit -m "feat(taller): registrar solución inicial del taller de motos"

Subir rama al remoto

git push -u origin alumno/daniel-borja/ejercicio-05

Verificación del historial
git log --oneline
9a62e23 (HEAD -> alumno/daniel-borja/ejercicio-05, origin/alumno/daniel-borja/ejercicio-05) feat(git): registrar solución inicial