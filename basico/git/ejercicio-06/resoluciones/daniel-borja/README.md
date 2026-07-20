# Ejercicio 06 Git

## Análisis de proyecto
Simular la actualización de una tabla de posiciones de fútbol para aprender cómo sincronizar el repositorio local mediante Git Pull antes de iniciar cualquier cambio.

Requerimientos

    Cambiar a la rama base dev local para preparar la sincronización.

    Ejecutar el comando git pull para descargar e integrar los últimos cambios del servidor remoto.

    Crear la nueva rama de trabajo oficial siguiendo el formato alumno/daniel-borja/ejercicio-06.

    Crear una carpeta personal con el formato nombre-apellido (daniel-borja) dentro de la ruta especificada de resoluciones.

    Crear un archivo llamado tabla.md que incluya una simulación de la tabla de posiciones y la explicación técnica de cómo el Pull previene conflictos.

    Registrar los cambios en un commit lógico y subir la rama al entorno remoto.

## Resolución
Cambiar a la rama dev principal
git checkout dev

Crear y cambiar instantáneamente a tu rama del ejercicio
git pull origin dev
git checkout -b alumno/daniel-borja/ejercicio-06

Primer commit - Navegar a la ruta del ejercicio 06
cd "E:\PROGRAMACION\PRACTICE\CAMPUSLANDS-DEVS\campuslands-devs\basico\git\ejercicio-06\resoluciones"

Crear tu carpeta personal obligatoria
mkdir daniel-borja

Entrar a tu carpeta
cd daniel-borja

Crear el archivo vacío tabla.md
New-Item tabla.md

