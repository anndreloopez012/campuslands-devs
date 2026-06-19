# Ejercicio 09 — Trabajo con ramas sobre ramas en película sci-fi

**Nombre:** Maria Montepeque

---

## Cómo pensé el problema

Este ejercicio pide practicar el patrón de **rama derivada de otra rama feature**, algo que sucede cuando una funcionalidad grande se divide en partes. En este caso, el catálogo de películas sci-fi es la rama principal de la feature, y los posters son una subtarea dentro de ella.

El orden importa:
1. Primero se fusiona la rama hija en la rama madre.
2. Luego la rama madre (ya completa) se fusiona en `dev`.

Esto evita conflictos y mantiene la historia del proyecto limpia.

---

## Solución completa

### Paso 1 — Partir desde `dev`

```bash
git checkout dev
git pull origin dev
```

Siempre se parte desde `dev` actualizado para no trabajar sobre código desactualizado.

---

### Paso 2 — Crear la rama personal de trabajo

```bash
git checkout -b maria-montepeque/ejercicio-09
```

Salida esperada:
```
Switched to a new branch 'maria-montepeque/ejercicio-09'
```

---

### Paso 3 — Crear la rama feature principal

```bash
git checkout -b feature/catalogo-sci-fi
```

Salida esperada:
```
Switched to a new branch 'feature/catalogo-sci-fi'
```

---

### Paso 4 — Hacer un commit en `feature/catalogo-sci-fi`

Se crea el archivo base del catálogo:

```bash
# Crear archivo representativo del catálogo
cat > catalogo-sci-fi.md << 'EOF'
# Catálogo Sci-Fi

Lista curada de películas de ciencia ficción para el sistema de reservas.

## Películas incluidas

| id             | título              | año  | director              |
|----------------|---------------------|------|-----------------------|
| dune-2021      | Dune                | 2021 | Denis Villeneuve      |
| arrival-2016   | Arrival             | 2016 | Denis Villeneuve      |
| annihilation-2018 | Annihilation     | 2018 | Alex Garland          |
| interstellar-2014 | Interstellar     | 2014 | Christopher Nolan     |
| ex-machina-2014   | Ex Machina       | 2014 | Alex Garland          |
EOF

git add catalogo-sci-fi.md
git commit -m "feat(catalogo): agrega archivo base del catálogo sci-fi con 5 películas"
```

Salida esperada:
```
[feature/catalogo-sci-fi a3f1c02] feat(catalogo): agrega archivo base del catálogo sci-fi con 5 películas
 1 file changed, 15 insertions(+)
 create mode 100644 catalogo-sci-fi.md
```

---

### Paso 5 — Crear la rama secundaria desde la rama feature

```bash
git checkout -b feature/catalogo-sci-fi/posters
```

Salida esperada:
```
Switched to a new branch 'feature/catalogo-sci-fi/posters'
```

Esta rama nace **desde** `feature/catalogo-sci-fi`, no desde `dev`. Eso significa que hereda el commit del paso anterior.

---

### Paso 6 — Hacer un commit en `feature/catalogo-sci-fi/posters`

Se crea el archivo de rutas de posters:

```bash
cat > posters-sci-fi.md << 'EOF'
# Posters del Catálogo Sci-Fi

Rutas de imágenes de posters para cada película del catálogo.

## Convención de nombres

Formato: `posters/{id}-poster.jpg`

## Listado de posters

| id                 | ruta del poster                          |
|--------------------|------------------------------------------|
| dune-2021          | posters/dune-2021-poster.jpg             |
| arrival-2016       | posters/arrival-2016-poster.jpg          |
| annihilation-2018  | posters/annihilation-2018-poster.jpg     |
| interstellar-2014  | posters/interstellar-2014-poster.jpg     |
| ex-machina-2014    | posters/ex-machina-2014-poster.jpg       |

## Notas

- Todos los posters deben estar en formato JPG, resolución mínima 300x450px.
- Si una película no tiene poster disponible, se usa `posters/sin-poster.jpg`.
EOF

git add posters-sci-fi.md
git commit -m "feat(posters): agrega rutas de posters para el catálogo sci-fi"
```

Salida esperada:
```
[feature/catalogo-sci-fi/posters d8b4e19] feat(posters): agrega rutas de posters para el catálogo sci-fi
 1 file changed, 22 insertions(+)
 create mode 100644 posters-sci-fi.md
```

---

### Paso 7 — Fusionar la rama secundaria en la rama feature principal

```bash
git checkout feature/catalogo-sci-fi
git merge feature/catalogo-sci-fi/posters
```

Salida esperada:
```
Updating a3f1c02..d8b4e19
Fast-forward
 posters-sci-fi.md | 22 ++++++++++++++++++++++++
 1 file changed, 22 insertions(+)
 create mode 100644 posters-sci-fi.md
```

El merge es **fast-forward** porque no hubo cambios paralelos en `feature/catalogo-sci-fi` mientras se trabajaba en la rama de posters.

---

### Paso 8 — Verificar el estado de `feature/catalogo-sci-fi`

```bash
git log --oneline
```

Salida esperada:
```
d8b4e19 feat(posters): agrega rutas de posters para el catálogo sci-fi
a3f1c02 feat(catalogo): agrega archivo base del catálogo sci-fi con 5 películas
```

Ambos commits ahora están en `feature/catalogo-sci-fi`.

---

### Paso 9 — Fusionar la rama feature en `dev` local

```bash
git checkout dev
git merge feature/catalogo-sci-fi
```

Salida esperada:
```
Updating [hash-base]..d8b4e19
Fast-forward
 catalogo-sci-fi.md | 15 +++++++++++++++
 posters-sci-fi.md  | 22 ++++++++++++++++++++++
 2 files changed, 37 insertions(+)
 create mode 100644 catalogo-sci-fi.md
 create mode 100644 posters-sci-fi.md
```

---

### Paso 10 — Verificar el log final en `dev`

```bash
git log --oneline --graph
```

Salida esperada:
```
* d8b4e19 feat(posters): agrega rutas de posters para el catálogo sci-fi
* a3f1c02 feat(catalogo): agrega archivo base del catálogo sci-fi con 5 películas
* [commits anteriores de dev...]
```

---

## Diagrama de ramas

```
dev
 └── feature/catalogo-sci-fi          ← rama feature principal
       ├── commit: catálogo base
       └── feature/catalogo-sci-fi/posters   ← rama derivada
             └── commit: posters
             
Fusión 1: feature/catalogo-sci-fi/posters → feature/catalogo-sci-fi
Fusión 2: feature/catalogo-sci-fi → dev
```

---

## Por qué este orden de fusión

| Orden | Acción | Razón |
|-------|--------|-------|
| 1° | Fusionar rama hija en rama madre | La hija depende de la madre; fusionarla primero consolida el trabajo antes de integrarlo a dev |
| 2° | Fusionar rama madre en dev | Solo se sube a dev cuando la feature está completa, incluyendo sus sub-tareas |

Si se hiciera al revés (rama hija directo a dev sin pasar por la madre), dev tendría los posters pero no el catálogo base que les da contexto, y la feature quedaría incompleta en dev.

---

## Validación

### Caso normal — rama con contenido

```bash
git checkout feature/catalogo-sci-fi
git log --oneline
# Resultado esperado: 2 commits visibles
```

### Caso límite — rama vacía (sin commits propios)

Si se crea `feature/catalogo-sci-fi/posters` y se fusiona **sin hacer ningún commit**, Git responde:

```bash
git merge feature/catalogo-sci-fi/posters
# Already up to date.
```

Esto no es un error: Git detecta que no hay diferencia y lo indica. Es el comportamiento correcto cuando una rama no aporta cambios nuevos.
