#  Clonación del Repositorio

## Proceso realizado

Primero se realizó la clonación del repositorio utilizando el comando:

```bash
git clone <url-del-repositorio>
```

Después de clonar el repositorio, se verificó que la clonación se hubiera realizado correctamente ingresando a la carpeta del proyecto y ejecutando:

```bash
git status
```

Con esto se confirmó que el repositorio estaba conectado correctamente y que no existían cambios pendientes.

---

#  Organización y Preparación

Luego se comenzó a organizar la estructura del proyecto agregando carpetas y archivos necesarios para el desarrollo.

Después de realizar los cambios se ejecutó el comando:

```bash
git add .
```

Este comando permitió agregar todos los archivos nuevos y modificaciones al área de preparación de Git.

---

#  Commit Inicial

Finalmente se realizó el primer commit del proyecto para guardar la estructura inicial del repositorio:

```bash
git commit -m "feat: estructura inicial del proyecto"
```

Este commit sirvió para registrar el inicio del proyecto y dejar guardada la organización base de carpetas y archivos.

---

#  Posibles Inconvenientes

Durante el proceso podían ocurrir algunos inconvenientes como:

* Problemas al clonar el repositorio por una URL incorrecta.
* No tener permisos o acceso al repositorio.
* Olvidar ingresar a la carpeta del proyecto antes de ejecutar comandos Git.
* Errores al realizar el commit por no configurar el usuario y correo de Git.
* Archivos vacíos que no aparecían en Git, por lo que fue necesario usar archivos `.gitkeep`.

---

#  Conclusión

Se logró clonar correctamente el repositorio, verificar su estado, organizar la estructura inicial del proyecto y registrar los cambios mediante un commit inicial usando Git.
