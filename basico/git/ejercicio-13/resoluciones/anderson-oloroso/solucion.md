# Resolución ejercicio 13 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula un conflicto de integración en un flujo de trabajo de animación 3D (`estructura.md`). Se crean dos ramas paralelas desde el mismo punto: una enfocada en el área de modelado y otra en el área de renders. Al editar la misma sección del archivo se genera un conflicto de fusión, el cual se resuelve manualmente integrando y conservando el trabajo realizado por ambas áreas en una versión final unificada.

```bash
git checkout dev
git checkout -b feature/modelado
echo "# Proyecto Animación 3D\n\n## Sección Modelado\n- Maya / Blender: Malla base de personaje" > estructura.md
git add estructura.md
git commit -m "Agrega estructura y especificaciones de modelado 3D"

git checkout dev
git checkout -b feature/renders
echo "# Proyecto Animación 3D\n\n## Sección Renders\n- Arnold / Cycles: Configuración de iluminación y pases" > estructura.md
git add estructura.md
git commit -m "Agrega estructura y especificaciones de renders"

git checkout dev
git merge feature/modelado

git merge feature/renders

echo "# Proyecto Animación 3D\n\n## Sección Modelado\n- Maya / Blender: Malla base de personaje\n\n## Sección Renders\n- Arnold / Cycles: Configuración de iluminación y pases" > estructura.md
git add estructura.md
git commit -m "Resuelve conflicto integrando secciones de modelado y renders"

git log --oneline --graph --all
```

- Breve explicación

Primero, se crean las ramas `feature/modelado` y `feature/renders` a partir de `dev`. En cada una de ellas se trabaja sobre el archivo `estructura.md` especificando las tareas de sus respectivas áreas y registrando sus correspondientes commits.

A continuación, se regresa a la rama `dev` y se fusiona primero `feature/modelado` de forma limpia. Al intentar fusionar `feature/renders`, Git identifica que ambas ramas reescribieron la estructura inicial del mismo archivo y detiene el proceso notificando un conflicto de fusión.

Finalmente, en lugar de descartar una de las dos contribuciones, se edita `estructura.md` combinando la información de ambas áreas para conservar tanto los detalles de modelado como los de renders. Se marca el conflicto como resuelto con `git add estructura.md` y se concluye el merge mediante un commit de resolución, validando la integración completa del pipeline 3D con `git log --oneline --graph --all`.