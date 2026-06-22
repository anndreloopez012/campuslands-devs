# solucion de ejercicio 03

* **Estudiante:** Brandon Estiben Ixen Teleguario
* **Fecha:** Junio 2026
* **Módulo:** estructura basica.

# Razonamiento:
    Para poder trabajar de una mejor manera este trabajo colaborativo es necesario tener en cuenta que no estamos trabajando solos con el repositorio ya que tenemos mas integrantes a los cuales denominamos colaboradores.
    Para poder trabajar de la mejor manera necesitamos trabajar en ramas separadas para evitar errores o problemas a la hora de subir todos los cambios nuevos que se realizan en cualquier momento

# Comandos a utilizar para poder trabajar con ramas, commits, cambiar de ramas, etc.

 - git remote -v 0 para checar en que reposiorio estamos parados.
- git pull  = para traer todos los archivos, ramas del remoto
 - git branch -a = para ver todas las ramas que tiene el repositorio (todas las ramas que estan en el remoto)
 - git status = ver el estado y verificar los cambio que se pueden hacer.
 - cd = para ingresar a las carpetas desde la terminal de visual studio code
 - touch = pra crear un archivo desde la terminal.
 - mkdir = para crear una carpeta.
 - git add . para agregar los cambios a confirmar
 - git commit = para guardar los cambios en el repositorio
 - git pull -u origin nombe-de-la-rama = para mandar los cambios a el remoto.
  - git checkout/switch para cambiar de rama.

 # Comit realizado.
    camper@campus-H610M-K-V2:~/Documentos/shen/ejercicio/campuslands-devs-6$ git commit -m "feat(git): ejercicio 06"
    [soluciones-estiben e75b326] feat(git): ejercicio 06
    1 file changed, 26 insertions(+)
    create mode 100644 basico/git/ejercicio-05/resoluciones/estiben-ixen/README.md

# push realizado:
 ```
    camper@campus-H610M-K-V2:~/Documentos/shen/ejercicio/campuslands-devs-6$ git push -u origin soluciones-estiben
Enumerando objetos: 27, listo.
Contando objetos: 100% (27/27), listo.
Compresión delta usando hasta 12 hilos
Comprimiendo objetos: 100% (16/16), listo.
Escribiendo objetos: 100% (20/20), 2.66 KiB | 682.00 KiB/s, listo.
Total 20 (delta 4), reusados 2 (delta 0), pack-reusados 0
remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
remote: 
remote: Create a pull request for 'soluciones-estiben' on GitHub by visiting:
remote:      https://github.com/ixenbrandonestiben-lang/campuslands-devs/pull/new/soluciones-estiben
remote: 
To https://github.com/ixenbrandonestiben-lang/campuslands-devs.git
 * [new branch]      soluciones-estiben -> soluciones-estiben
Rama 'soluciones-estiben' configurada para hacer seguimiento a la rama remota 'soluciones-estiben' de 'origin'.
 ```