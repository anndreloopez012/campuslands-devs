# Git Revert: Gestión de errores en base de datos de autos

**Autor:** 

Sergio Ajù

## Razonamiento del problema
El objetivo es deshacer un commit erróneo (agregar un auto incorrecto) sin alterar el historial del proyecto. A diferencia de `git reset`, que borraría el historial y causaría conflictos en equipos, `git revert` crea un commit nuevo que invierte los cambios del commit erróneo.

## Comandos ejecutados



### ¿Por qué revert conserva el historial?

git revert no es destructivo. Al crear un nuevo commit que compensa el anterior, Git mantiene una trazabilidad completa. Esto permite que cualquier colaborador pueda ver tanto el error original como la corrección posterior, lo cual es una mejor práctica para la auditoría de código.


