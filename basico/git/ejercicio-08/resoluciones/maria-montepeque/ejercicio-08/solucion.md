# Ejercicio 08 — Conflicto simple en playlist musical

**Alumna:** Maria Montepeque  
**Rama de entrega:** `ejercicio-08/maria-montepeque`  
**Dificultad:** Básica retadora

---

## Cómo pensé el problema

El ejercicio pide simular un conflicto real en Git: dos personas editan la misma línea del mismo archivo en ramas distintas. Cuando Git intenta fusionar ambas, no sabe cuál versión conservar y lo marca como conflicto. Mi trabajo es entender qué representa cada versión y tomar una decisión coherente.

Elegí el contexto de una playlist porque permite que el conflicto sea claro y humano: una rama propone la versión en vivo de una canción, la otra propone la versión acústica. La resolución lógica fue incluir ambas referencias en la misma entrada.

---

## Paso 1 — Punto de partida compartido

Creé un repositorio con un commit inicial en `main`, luego una rama `dev` desde ahí.

```
git init repo-musica
git checkout -b dev
```

`playlist.md` inicial:

```markdown
# Mi Playlist Favorita

1. Bohemian Rhapsody - Queen
2. Hotel California - Eagles
3. Stairway to Heaven - Led Zeppelin
```

`git log --oneline` en este punto:

```
df6c539 feat: agregar playlist inicial con tres canciones
```

---

## Paso 2 — Crear dos ramas desde el mismo commit

Ambas ramas nacen del mismo punto: el commit `df6c539` en `dev`.

```
git checkout -b feature/version-rock
```

```
git checkout dev
git checkout -b feature/version-clasica
```

**Por qué importa:** si ambas ramas nacen del mismo commit, Git puede detectar exactamente qué cambió en cada una. El ancestro común es la base del algoritmo de merge.

---

## Paso 3 — Modificar la misma línea en cada rama

**En `feature/version-rock`:**  
La línea 2 quedó así:

```
2. Hotel California - Eagles (versión en vivo 1977)
```

Commit generado:

```
feat: agregar version en vivo de Hotel California y cancion de Nirvana
```

**En `feature/version-clasica`:**  
La línea 2 quedó así:

```
2. Hotel California - Eagles (álbum Hell Freezes Over, acústica)
```

Commit generado:

```
feat: agregar version acustica de Hotel California e Imagine de Lennon
```

Ambas ramas modificaron exactamente la misma línea del mismo archivo. Eso garantiza el conflicto en el merge.

---

## Paso 4 — Primer merge sin conflicto

```
git checkout dev
git merge feature/version-rock
```

Salida:

```
Updating df6c539..7f6966a
Fast-forward
 playlist.md | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-
```

Git usó **fast-forward** porque `dev` no tenía commits nuevos. No hubo conflicto.

`git log --oneline` tras el primer merge:

```
7f6966a feat: agregar version en vivo de Hotel California y cancion de Nirvana
df6c539 feat: agregar playlist inicial con tres canciones
```

---

## Paso 5 — Segundo merge con conflicto

```
git merge feature/version-clasica
```

Salida:

```
Auto-merging playlist.md
CONFLICT (content): Merge conflict in playlist.md
Automatic merge failed; fix conflicts and then commit the result.
```

`git status`:

```
On branch dev
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  both modified:   playlist.md
```

Contenido de `playlist.md` con marcadores de conflicto:

```
# Mi Playlist Favorita

1. Bohemian Rhapsody - Queen
<<<<<<< HEAD
2. Hotel California - Eagles (versión en vivo 1977)
3. Stairway to Heaven - Led Zeppelin
4. Smells Like Teen Spirit - Nirvana
=======
2. Hotel California - Eagles (álbum Hell Freezes Over, acústica)
3. Stairway to Heaven - Led Zeppelin
4. Imagine - John Lennon
>>>>>>> feature/version-clasica
```

**Qué significan los marcadores:**

| Marcador | Significado |
|---|---|
| `<<<<<<< HEAD` | Inicio de la versión actual (dev con feature/version-rock) |
| `=======` | Separador entre las dos versiones |
| `>>>>>>> feature/version-clasica` | Fin de la versión entrante |

---

## Paso 6 — Decisión de resolución

Ninguna versión es incorrecta. Ambas aportan información válida sobre la misma canción. La decisión fue **combinar ambas referencias** en una sola línea coherente, y conservar las canciones adicionales de ambas ramas.

`playlist.md` resuelta:

```markdown
# Mi Playlist Favorita

1. Bohemian Rhapsody - Queen
2. Hotel California - Eagles (versión en vivo 1977 y acústica Hell Freezes Over)
3. Stairway to Heaven - Led Zeppelin
4. Smells Like Teen Spirit - Nirvana
5. Imagine - John Lennon
```

Comandos para cerrar la resolución:

```
git add playlist.md
git commit -m "fix: resolver conflicto en playlist combinando ambas versiones de Hotel California"
```

---

## Evidencia final

`git log --oneline`:

```
11bd473 fix: resolver conflicto en playlist combinando ambas versiones de Hotel California
22ca64f feat: agregar version acustica de Hotel California e Imagine de Lennon
7f6966a feat: agregar version en vivo de Hotel California y cancion de Nirvana
df6c539 feat: agregar playlist inicial con tres canciones
```

`git status`:

```
On branch dev
nothing to commit, working tree clean
```

---

## Resumen de aprendizajes

- Un conflicto ocurre cuando **dos ramas modifican la misma línea** del mismo archivo a partir del mismo ancestro.
- Git no decide por sí solo cuál versión es correcta; lo marca y espera una decisión humana.
- Los marcadores `<<<<<<<`, `=======` y `>>>>>>>` dividen visualmente las dos versiones en conflicto.
- Después de editar el archivo, hay que ejecutar `git add` para indicarle a Git que el conflicto fue resuelto.
- La resolución no tiene que elegir uno u otro: puede combinar ambos si tiene sentido en el contexto.
