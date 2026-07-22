# Resolucion ejercicio 07 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se debe crear una rama de trabajo llamada `feature/ranking-pingpong`, agregar el archivo `ranking.md`, realizar un commit con la solución, regresar a la rama local `dev`, fusionar la rama de trabajo y validar el historial de commits.

```bash
git checkout -b feature/ranking-pingpong
touch ranking.md
git add ranking.md
git commit -m "Agrega ranking de pingpong"
git checkout dev
git merge feature/ranking-pingpong
git log --oneline --graph --all
```

- Breve explicación
Primero se crea la rama feature/ranking-pingpong para trabajar de forma independiente en la funcionalidad del ranking. Luego se crea el archivo ranking.md, que contiene la información relacionada con el ranking de pingpong. Con git add ranking.md se agrega el archivo al área de preparación y con git commit se registra el cambio en el historial de la rama.

Después se regresa a la rama local dev utilizando git checkout dev. Desde esta rama se ejecuta git merge feature/ranking-pingpong para fusionar los cambios desarrollados en la rama de trabajo hacia la rama de integración.

Finalmente, se utiliza git log --oneline --graph --all para validar el historial del repositorio y comprobar visualmente la estructura de las ramas y los commits realizados. De esta manera se verifica que la rama feature/ranking-pingpong fue integrada correctamente en dev.