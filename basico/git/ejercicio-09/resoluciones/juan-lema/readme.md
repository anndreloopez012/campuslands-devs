# Ejercicio 09 — Ramas sobre ramas (catálogo sci-fi) — Juan Lema

## Temática

Películas y ciencia ficción. Se simula la creación de un catálogo con dos
partes de trabajo independientes (listado de películas y posters), cada una
en su propia rama, para luego integrarlas siguiendo el flujo pedido.

## Objetivo del ejercicio

Crear una rama secundaria a partir de una rama feature, trabajar en ambas por
separado, y fusionarlas en el orden correcto: primero la secundaria en la
principal, y luego la principal en `dev` local.

## Cómo pensé el problema

1. Identifiqué el flujo pedido como una secuencia de 5 pasos: crear
   `feature/catalogo-sci-fi` → crear `feature/catalogo-sci-fi/posters` desde
   esa rama → commits separados en cada una → fusionar secundaria en
   principal → fusionar principal en `dev`.
2. Antes de programar nada, dividí el trabajo en dos responsabilidades
   claras, una por rama:
   - `feature/catalogo-sci-fi`: listado base de películas (`catalogo/peliculas.js`).
   - `feature/catalogo-sci-fi/posters`: mapeo de posters por película
     (`catalogo/posters.js`), como una funcionalidad que depende del catálogo
     pero se desarrolla aparte.
3. Al intentar crear la subrama con el nombre exacto pedido
   (`feature/catalogo-sci-fi/posters`) mientras `feature/catalogo-sci-fi`
   seguía existiendo, Git lo rechazó. Esto no es un error de sintaxis sino
   una limitación real de cómo Git guarda las ramas: los nombres de rama se
   guardan como rutas de archivo dentro de `refs/heads/`, y un mismo nombre
   no puede ser al mismo tiempo un archivo (`feature/catalogo-sci-fi`) y una
   carpeta que contiene otro archivo (`feature/catalogo-sci-fi/posters`).
4. Investigué el error y en vez de cambiar el nombre pedido, resolví el
   conflicto de referencias así:
   - Guardé el SHA del último commit de `feature/catalogo-sci-fi`.
   - Borré temporalmente esa rama (su commit seguía existiendo, solo se
     quitó el nombre/puntero).
   - Creé `feature/catalogo-sci-fi/posters` apuntando a ese mismo SHA, hice
     el commit de posters ahí.
   - Como el commit de posters ya tenía como padre al commit del catálogo,
     "fusionar la secundaria en la principal" resultó ser un fast-forward:
     recreé el nombre `feature/catalogo-sci-fi` apuntando directamente a la
     punta de `feature/catalogo-sci-fi/posters` (mismo contenido, sin
     necesidad de un commit de merge adicional porque no había divergencia).
   - Finalmente fusioné `feature/catalogo-sci-fi` en `dev` con
     `git merge --no-ff` para dejar explícito en el historial que fue una
     integración de feature.

## Comandos usados (resumen en orden)

```bash
git checkout -b feature/catalogo-sci-fi
# ... crear catalogo/peliculas.js ...
git add catalogo/peliculas.js
git commit -m "feat(catalogo): agregar listado base de peliculas sci-fi"

# Intento directo de la subrama (falla por la limitacion de Git explicada arriba)
git checkout -b feature/catalogo-sci-fi/posters
# fatal: cannot lock ref 'refs/heads/feature/catalogo-sci-fi/posters':
# 'refs/heads/feature/catalogo-sci-fi' exists

# Workaround: liberar el nombre sin perder el commit
FEATURE_SHA=$(git rev-parse feature/catalogo-sci-fi)
git checkout dev
git branch -D feature/catalogo-sci-fi
git checkout -b feature/catalogo-sci-fi/posters $FEATURE_SHA

# ... crear catalogo/posters.js ...
git add catalogo/posters.js
git commit -m "feat(posters): agregar mapeo de posters por pelicula"

# Fusionar secundaria en principal (fast-forward: se recrea el nombre en la misma punta)
POSTERS_SHA=$(git rev-parse feature/catalogo-sci-fi/posters)
git checkout dev
git branch -D feature/catalogo-sci-fi/posters
git checkout -b feature/catalogo-sci-fi $POSTERS_SHA

# Fusionar principal en dev local
git checkout dev
git merge feature/catalogo-sci-fi --no-ff -m "merge: incorporar feature/catalogo-sci-fi (incluye posters) a dev"
```

## Estructura final del catálogo

```
catalogo/
├── peliculas.js   # listado base (rama feature/catalogo-sci-fi)
└── posters.js     # mapeo de posters (rama feature/catalogo-sci-fi/posters)
```

## Validación

**Caso normal — historial final en `dev` con ambos commits integrados:**

```
*   7155c4b (HEAD -> dev) merge: incorporar feature/catalogo-sci-fi (incluye posters) a dev
|\
| * aab3f8b (feature/catalogo-sci-fi) feat(posters): agregar mapeo de posters por pelicula
| * 45dab81 feat(catalogo): agregar listado base de peliculas sci-fi
|/
* 470771e (main) chore: init catalogo sci-fi
```

`git status` tras el merge confirma que no quedó nada pendiente:

```
On branch dev
nothing to commit, working tree clean
```

**Caso límite — conflicto de nombres de rama:** intentar crear
`feature/catalogo-sci-fi/posters` mientras `feature/catalogo-sci-fi` existe
falla con `fatal: cannot lock ref ... exists`. Se documentó como parte del
proceso (ver sección "Cómo pensé el problema") en lugar de ignorarlo o
renombrar la rama pedida, ya que entender por qué ocurre es el aprendizaje
central del ejercicio.

## Ramas resultantes

```
  dev                        (rama de trabajo final, con el merge)
  feature/catalogo-sci-fi    (principal, ya fusionada en dev)
  main
```