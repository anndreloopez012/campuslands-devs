# Ejercicio 07 Git

## Análisis de proyecto
El objetivo de este ejrcicio es simular la integración de características en un entorno colaborativo mediante la fusión (merge) de una rama de desarrollo de ranking de pingpong hacia la rama de integración local dev.

Requerimientos

    Crear y cambiar a una rama de trabajo llamada feature/ranking-pingpong.

    Crear una carpeta personal con el formato nombre-apellido (daniel-borja) dentro de la ruta especificada de resoluciones del ejercicio 07.

    Crear el archivo ranking.md dentro de la carpeta personal.

    Registrar el contenido del ranking mediante un commit lógico dentro de la rama feature.

    Regresar a la rama base dev local y aplicar la fusión del historial con el comando git merge.

    Validar la correcta integración de los cambios ejecutando el comando log simplificado.

## Resolución

Creación de rama de trabajo y desarrollo
git checkout -b feature/ranking-pingpong

Navegar a la ruta del ejercicio 07
cd "E:\PROGRAMACION\PRACTICE\CAMPUSLANDS-DEVS\campuslands-devs\basico\git\ejercicio-07\resoluciones"

Crear tu carpeta personal obligatoria
mkdir daniel-borja

Entrar a tu carpeta
cd daniel-borja

Crear el archivo vacío ranking.md
New-Item ranking.md

Guardar el archivo e indexar cambios en la rama feature
git add ranking.md

Confirmar el commit en la rama feature
git commit -m "feat(pingpong): agregar tabla de posiciones de la liga de pingpong"

Regresar a la rama dev principal local
git checkout dev

Fusionar los cambios de la rama alumno/daniel-borja/ejercicio-07 hacia dev
git merge alumno/daniel-borja/ejercicio-07

Verificación del historial
git log --oneline