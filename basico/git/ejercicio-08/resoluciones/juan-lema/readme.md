# Conflicto simple en playlist musical — Juan Lema

## Tematica

Musica. Se simula el trabajo de dos personas que editan al mismo tiempo una
playlist colaborativa (`playlist.md`), provocando un conflicto real de Git
que despues se resuelve dejando una version coherente.

## Estructura de carpetas

```
juan-lema/
├── playlist.md      # archivo en conflicto (version ya resuelta)
└── juan-lema.md      # este archivo (explicacion y evidencia)
```

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: un archivo `playlist.md` con 3 canciones, ubicado en `dev`.
   - Proceso: dos ramas distintas modifican la misma linea (la pista 2),
     una fusion se aplica limpia y la segunda provoca conflicto.
   - Salida: un archivo final donde ambas propuestas conviven, sin perder
     ninguna de las dos canciones agregadas.
2. Cree dos ramas desde el mismo punto de `dev` (`feature/orden-rock` y
   `feature/orden-pop`) para asegurar que ambas partieran del mismo commit
   base y el conflicto fuera real, no por historiales distintos.
3. Fusione primero `feature/orden-rock`: al no haber cambios previos en
   `dev`, Git resolvio la fusion en modo fast-forward, sin conflicto.
4. Al fusionar `feature/orden-pop`, Git no pudo decidir automaticamente
   entre "Stairway to Heaven" y "Levitating" porque ambas ramas cambiaron
   la misma linea 4. Ahi aparecio el conflicto.
5. Resolvi el conflicto a mano: en lugar de elegir una sola cancion,
   conserve las dos, renumerando la lista para que quedara coherente.

## Comandos usados

```bash
git checkout -b dev
# ... commit base con playlist.md ...

git checkout -b feature/orden-rock dev
# edito la pista 2 -> Stairway to Heaven - Led Zeppelin
git commit -m "feature/orden-rock: cambia pista 2 por un clasico de rock"

git checkout -b feature/orden-pop dev
# edito la misma pista 2 -> Levitating - Dua Lipa
git commit -m "feature/orden-pop: cambia pista 2 por un tema pop"

git checkout dev
git merge feature/orden-rock
# fusion limpia (fast-forward)

git merge feature/orden-pop
# CONFLICT (content): Merge conflict in playlist.md
```

## Marcado del conflicto (evidencia)

```
1. Bohemian Rhapsody - Queen
<<<<<<< HEAD
2. Stairway to Heaven - Led Zeppelin
=======
2. Levitating - Dua Lipa
>>>>>>> feature/orden-pop
3. Shape of You - Ed Sheeran
```

## Resolucion aplicada

Se edito el archivo a mano, se quitaron los marcadores (`<<<<<<<`, `=======`,
`>>>>>>>`) y se conservaron ambas canciones en lugar de descartar una:

```
1. Bohemian Rhapsody - Queen
2. Stairway to Heaven - Led Zeppelin
3. Levitating - Dua Lipa
4. Shape of You - Ed Sheeran
```

Luego:

```bash
git add playlist.md
git commit -m "resolve: fusionar orden-rock y orden-pop conservando ambas pistas"
```

## Validacion (dos casos)

Caso normal — fusion sin conflicto (`feature/orden-rock` a `dev`):
Git aplica un fast-forward automatico porque `dev` no tenia cambios propios
todavia. No se genera ningun marcador de conflicto.

Caso limite — fusion con conflicto (`feature/orden-pop` a `dev`):
Ambas ramas modificaron la misma linea del archivo, por lo que Git no puede
decidir por si solo. El merge se detiene, marca el archivo como
`both modified` en `git status`, y exige resolucion manual antes de poder
hacer commit.

## Evidencia de `git log`

```
*   67b84ce (HEAD -> dev) resolve: fusionar orden-rock y orden-pop conservando ambas pistas
|\
| * 2cbac4b (feature/orden-pop) feature/orden-pop: cambia pista 2 por un tema pop
* | 4bfabc3 (feature/orden-rock) feature/orden-rock: cambia pista 2 por un clasico de rock
|/
* 365d5c8 base: playlist inicial en dev
```

## Evidencia de `git status` tras resolver

```
On branch dev
nothing to commit, working tree clean
```