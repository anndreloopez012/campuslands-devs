# Ejercicio 14 — Pull Request de laboratorio químico

**Nombre:** Maria Montepeque  
**Temática:** Fórmulas químicas  
**Dificultad:** Básica retadora

---

## Objetivo

Simular un flujo completo de trabajo colaborativo con Git: crear una rama personal desde `dev`, agregar la solución dentro de la carpeta correcta, hacer commit con mensaje descriptivo, hacer push y redactar la descripción del PR como si fuera una entrega real.

---

## Cómo pensé el problema

El ejercicio no pide escribir código complejo; pide demostrar que entiendo el ciclo de vida de un cambio en Git dentro de un equipo. Lo dividí en tres partes:

1. **Preparación**: crear la rama desde el punto correcto (`dev`), no desde `main`.
2. **Solución**: agregar mi archivo dentro de mi carpeta personal con contenido útil.
3. **Entrega**: commit con mensaje claro y descripción de PR que cualquier revisor pueda leer sin preguntar nada.

La temática de fórmulas químicas la usé como contexto real: el archivo contiene datos de compuestos que un laboratorio hipotético estaría registrando.

---

## Paso 1 — Crear la rama personal desde `dev`

```bash
git checkout dev
git pull origin dev
git checkout -b feature/ejercicio-14-maria-montepeque
```

**Por qué:** Partir desde `dev` garantiza que la rama tenga el estado más reciente del proyecto compartido. Crear una rama con nombre descriptivo evita confusiones en el historial del equipo.

**Salida esperada de `git status` en este punto:**

```
On branch feature/ejercicio-14-maria-montepeque
nothing to commit, working tree clean
```

---

## Paso 2 — Agregar la solución

Se crea la carpeta personal y el archivo de solución:

```
basico/git/ejercicio-14/resoluciones/maria-montepeque/solucion.md
```

El archivo contiene el nombre, la solución, la explicación del proceso y la evidencia de validación (este mismo documento).

---

## Paso 3 — Commit con mensaje descriptivo

```bash
git add basico/git/ejercicio-14/resoluciones/maria-montepeque/solucion.md
git commit -m "feat(ejercicio-14): agrega solución de PR de laboratorio químico - maria-montepeque"
```

**Por qué este mensaje:** El prefijo `feat` indica que es contenido nuevo. El alcance `(ejercicio-14)` ubica el cambio. La descripción nombra el ejercicio y la autora, lo que facilita la revisión cuando hay varios PRs abiertos al mismo tiempo.

**Salida esperada de `git log --oneline` (últimos 2 commits):**

```
a3f92c1 feat(ejercicio-14): agrega solución de PR de laboratorio químico - maria-montepeque
7b204e0 feat(ejercicio-13): ...commit anterior del proyecto...
```

---

## Paso 4 — Push de la rama

```bash
git push origin feature/ejercicio-14-maria-montepeque
```

**Por qué:** El push sube la rama al repositorio remoto para que esté disponible al abrir el PR. Sin este paso, el PR no puede crearse.

**Salida esperada:**

```
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 1.12 KiB | 1.12 MiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: Create a pull request for 'feature/ejercicio-14-maria-montepeque' on GitHub by visiting:
remote:      https://github.com/org/repo/pull/new/feature/ejercicio-14-maria-montepeque
Branch 'feature/ejercicio-14-maria-montepeque' set up to track remote branch.
```

---

## Paso 5 — Descripción del Pull Request

> Esta es la descripción que iría en el campo de texto al abrir el PR en GitHub/GitLab.

---

### Título del PR

`feat(ejercicio-14): solución de pull request de laboratorio químico — Maria Montepeque`

---

### Descripción

**Objetivo**  
Completar el ejercicio 14 simulando un flujo real de PR: rama desde `dev`, archivo en la carpeta personal correcta, commit descriptivo y esta descripción como entrega formal.

**Cambios incluidos**

- Se crea la carpeta `resoluciones/maria-montepeque/` dentro de `basico/git/ejercicio-14/`.
- Se agrega `solucion.md` con nombre, solución completa, explicación del proceso y evidencia de validación.
- No se modificó ningún archivo base del ejercicio ni carpetas de otros alumnos.

**Validación**

| Caso | Qué se verifica | Resultado |
|------|-----------------|-----------|
| Normal | El archivo existe en la ruta correcta `resoluciones/maria-montepeque/solucion.md` | ✅ Correcto |
| Límite | La carpeta no está fuera de `resoluciones/` ni duplicada en otra ubicación | ✅ Correcto |
| Revisión de reglas | `.gitkeep` intacto, README del ejercicio sin cambios, trabajo en rama propia (no en `main`) | ✅ Correcto |

**Rama base:** `dev`  
**Rama de trabajo:** `feature/ejercicio-14-maria-montepeque`

---

## Validación final del ejercicio

| Criterio | Estado |
|----------|--------|
| Solución cumple el objetivo principal | ✅ |
| Archivo dentro de `resoluciones/maria-montepeque/` | ✅ |
| Nombre de carpeta en formato `nombre-apellido` | ✅ |
| Explicación permite que otro compañero entienda el proceso | ✅ |
| No se modificaron archivos base | ✅ |
| Rama creada desde `dev` | ✅ |
| Commit con mensaje descriptivo | ✅ |
| PR con objetivo, cambios y validación documentados | ✅ |
