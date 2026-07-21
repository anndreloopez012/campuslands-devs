# Ejercicio 06 Git
## Cambiar a rama dev
git checkout dev

## Actualizar dev con cambios remotos
git pull origin dev

## Crear rama personal desde dev actualizada
git checkout -b feature/tabla-futbol-tunombre

## Agregar solución del ejercicio
- mkdir -p basico/git/ejercicio-06/resoluciones/jakelin-quino
- touch basico/git/ejercicio-06/resoluciones/jakelin-quino/tabla-futbol.js

## Confirmar cambios
- git add .
- git commit -m "feat: solución tabla fútbol sala"

## Salida de git pull
``` text
From https://github.com/usuario/repo
 * branch            dev        -> FETCH_HEAD
Already up to date.
```

## Salida de git status
``` text
On branch feature/tabla-futbol
nothing to commit, working tree clean
```

## Explicación de por qué pull reduce conflictos
- git pull trae cambios de otros al branch dev antes de crear rama
- Rama nueva parte del código más actualizado. 
- Menos diferencias entre mi trabajo y cambios de compañeros
- Conflictos más pequeños y fáciles de resolver