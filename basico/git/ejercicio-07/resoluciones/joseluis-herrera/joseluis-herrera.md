## Resumen 
En este ejercicio se realizo el siguiente ejercicio se realizo el cambio de una combinacion de ramas en el cual se utilizo el comando merge para unir las ramas.

## Comandos utilizando 

# Crear y moverse a la rama de trabajo
git checkout dev
git checkout -b feature/ranking-pingpong

# Crear el archivo con los datos
git add ranking.md
git commit -m "feat: agregar tabla de ranking de pingpong"

# Regresar a dev y realizar el merge
git checkout dev
git merge feature/ranking-pingpong
```