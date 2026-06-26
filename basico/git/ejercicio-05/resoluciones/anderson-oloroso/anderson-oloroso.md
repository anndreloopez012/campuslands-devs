# Ejercicio 05 de Git

## Henrik Anderson Oloroso García

## Resolución

1. Confirma que estás en tu rama: Ejecutar `git branch -a` para visualizar todas las ramas sin importar si sean remotas o locales.

2. Haz commit de tu solución: Antes de hacer el commit, es necesario ejecutar lo siguiente:

    a. `git status` para verificar que no se hayan modificado otros archivos.

    b. `git add .` para agregar todos los archivos y carpetas.

    c. Ahora si ejecutar `git commit -m "Texto de referencia"` para hacer el commit.

3. Ejecuta `git push -u origin nombre-rama` para subir la rama que se creó, sin embargo aun no está fusionada.

4. Verifica que la rama exista en GitHub: Si el `git push` en el apartado de ramas en github tiene que aparecer o si funcionó perfectamente, tiene que mostrar un texto similar al siguiente:
```
Enumerating objects: 19, done.
Counting objects: 100% (19/19), done.
Delta compression using up to 16 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (14/14), 1.49 KiB | 72.00 KiB/s, done.
Total 14 (delta 3), reused 2 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote: 
remote: Create a pull request for 'anderson-oloroso/estructura-ejercicio-05' on GitHub by visiting:
remote:      https://github.com/Anderson-Oloroso/campuslands-devs/pull/new/anderson-oloroso/estructura-ejercicio-05
remote: 
To https://github.com/Anderson-Oloroso/campuslands-devs.git
 * [new branch]      anderson-oloroso/estructura-ejercicio-05 -> anderson-oloroso/estructura-ejercicio-05
branch 'anderson-oloroso/estructura-ejercicio-05' set up to track 'origin/anderson-oloroso/estructura-ejercicio-05'.
```

