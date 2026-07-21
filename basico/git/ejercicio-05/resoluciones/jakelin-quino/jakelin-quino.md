# Ejercicio 05 Git

## Verificar rama actual
git branch

## Hacer commit de la solución
- git add .
- git commit -m "feat: estructura taller de motos"

## Subir rama al remoto
git push -u origin feature/taller-motos

## Salida esperada

```text
Enumerando objetos: 12, listo.
Contando objetos: 100% (12/12), listo.
Compresión delta: 100% (8/8), listo.
Escribiendo objetos: 100% (12/12), 2.34 KiB | 1.17 MiB/s, listo.
Total 12 (delta 4), reusados 0 (delta 0), pack-reusados 0
remote: Resolving deltas: 100% (4/4), completed with 2 local objects.
remote: 
remote: Create a pull request for 'feature/taller-motos' on GitHub by visiting:
remote:      https://github.com/usuario/repo/pull/new/feature/taller-motos
remote: 
To https://github.com/usuario/repo.git
 * [new branch]      feature/taller-motos -> feature/taller-motos
Branch 'feature/taller-motos' set up to track remote branch 'feature/taller-motos' from 'origin'.
```

## Verificar rama en remoto
git branch -r
  - origin/dev
  - origin/feature/taller-motos
  - origin/main