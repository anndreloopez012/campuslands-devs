Ejercicio 02 - GIT

Análisis de proyecto
A través de una simulacion de trabajo colaborativo se necesita: 

1. Clonar repo de ejemplo
2. cd carpeta
3. git status
4. git branch
5. Documentacion de proceso

Solucion de proyecto
    Paso #1
    Clonar el repositorio 
        Seleccionamos el link URL del repositorio a clonar dentro de la carpeta de VSCode.
    Consola: 
        PS F:\PROGRAMACION\PRACTICE\EJEMPLO EJERCICIO 2> git clone https://github.com/jdanbo/campuslands-devs.git
        Cloning into 'campuslands-devs'...
        remote: Enumerating objects: 1351, done.
        remote: Counting objects: 100% (257/257), done.
        remote: Compressing objects: 100% (129/129), done.
        remote: Total 1351 (delta 186), reused 137 (delta 127), pack-reused 1094 (from 1)
        Receiving objects: 100% (1351/1351), 5.83 MiB | 654.00 KiB/s, done.
        Resolving deltas: 100% (360/360), done.
        Updating files: 100% (100/100), done.

    Paso #2
    Mover a la carpeta clonada
        Accedemos al directorio del proyecto clonado para comenzar a trabajar. 
    Consola: 
        PS F:\PROGRAMACION\PRACTICE\EJEMPLO EJERCICIO 2> cd campuslands-devs
        PS F:\PROGRAMACION\PRACTICE\EJEMPLO EJERCICIO 2\campuslands-devs>

    Paso #3
    Inspeccion de Git status
        Corroboramos que el estado del proyecto que acabamos de clonar.
    Consola: 
        PS F:\PROGRAMACION\PRACTICE\EJEMPLO EJERCICIO 2\campuslands-devs> git status
        On branch main
        Your branch is up to date with 'origin/main'.

        nothing to commit, working tree clean

    Paso #4
    Identificar rama actual
        Confirmamos que estemos ubicados en la rama en la que debemos de trabajar y generamos un historial de lo ultimo que se trabajó.
    Consola: 
        PS F:\PROGRAMACION\PRACTICE\EJEMPLO EJERCICIO 2\campuslands-devs> git branch
        * main
        PS F:\PROGRAMACION\PRACTICE\EJEMPLO EJERCICIO 2\campuslands-devs> git log --oneline -n 3
        5be332a (HEAD -> main, origin/main, origin/HEAD) docs(entregas): agregar guia y reforzar rechazo automatico
        35ffc9a ci(pr): dejar solo validacion de estructura
        df38201 ci(pr): quitar feedback IA por limite de modelos


