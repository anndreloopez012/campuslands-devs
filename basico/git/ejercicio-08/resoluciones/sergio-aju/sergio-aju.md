# Ejercicio 08: Conflicto de Fusión en Playlist

**Autor:** 


**Fecha:** 26 de junio de 2026

## Descripción del Problema
El objetivo de esta práctica es simular un escenario de colaboración donde dos desarrolladores intentan modificar la misma línea de un archivo de texto (`playlist.md`), generando un conflicto de fusión (merge conflict) que debe ser resuelto manualmente para mantener la integridad de los datos.

## Estrategia de Resolución
1. **Análisis:** Identificar el archivo común y la línea específica que recibirá cambios divergentes.
2. **Proceso:** 
   - Crear ramas `rama-a` y `rama-b` desde `dev`.
   - Modificar la línea 2 de `playlist.md` en cada rama de forma distinta.
   - Fusionar `rama-a` a `dev` (éxito).
   - Fusionar `rama-b` a `dev` (generación de conflicto).
3. **Solución:** Editar el archivo manualmente eliminando las marcas de Git (`<<<<`, `====`, `>>>>`) y unificando el contenido de manera lógica.

## Evidencia del Proceso

### 1. Creación y modificación
```bash
git checkout dev
git checkout -b rama-a
# Edición: 1. [Canción A]
git commit -am "feat: agregar cancion A"

git checkout dev
git checkout -b rama-b
# Edición: 1. [Canción B]
git commit -am "feat: agregar cancion B"