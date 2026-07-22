# Resolución ejercicio 08 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula un escenario de conflicto de fusión en un archivo colaborativo de música (`playlist.md`). Se crean dos ramas independientes desde el mismo punto de origen, se modifica la misma línea en ambas, se fusiona la primera rama sin problemas y luego, al intentar fusionar la segunda, se genera y resuelve el conflicto manualmente antes de finalizar la integración.

```bash
git checkout -b feature/rock-playlist
echo "Canción principal: Bohemian Rhapsody" > playlist.md
git add playlist.md
git commit -m "Agrega cancion de rock principal"

git checkout main
git checkout -b feature/pop-playlist
echo "Canción principal: Thriller" > playlist.md
git add playlist.md
git commit -m "Agrega cancion de pop principal"

git checkout main
git merge feature/rock-playlist

git merge feature/pop-playlist

echo "Canción principal: Bohemian Rhapsody / Thriller (Edición Colaborativa)" > playlist.md
git add playlist.md
git commit -m "Resuelve conflicto combinando las canciones principales"

git log --oneline --graph --all
```

- Breve explicación

Primero, se crea y selecciona la rama `feature/rock-playlist` para modificar la primera línea del archivo `playlist.md` agregando un tema de rock, registrando los cambios con un commit. Luego, regresando al punto de partida en `main`, se crea la rama `feature/pop-playlist` para modificar exactamente esa misma línea con una canción de pop y registrar su respectivo commit.

A continuación, se vuelve a la rama principal `main` y se fusiona exitosamente `feature/rock-playlist`. Al intentar fusionar `feature/pop-playlist`, Git detecta que ambas ramas modificaron la misma línea del mismo archivo desde su último punto en común y detiene el proceso notificando un conflicto.

Finalmente, se abre `playlist.md`, se elimina la marcación de conflicto realizada por Git y se define una versión combinada y coherente. Se agrega el archivo resuelto al área de preparación con `git add playlist.md` y se concluye la integración mediante un nuevo commit. Con `git log --oneline --graph --all` se verifica que el árbol de ramas refleja la resolución limpia del conflicto.