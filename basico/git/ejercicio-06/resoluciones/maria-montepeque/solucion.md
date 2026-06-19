# Ejercicio 06 — Pull antes de modificar tabla de fútbol

**Nombre:** Maria Montepeque

---

## Objetivo

Practicar la actualización del repositorio local antes de comenzar a trabajar, usando `git pull` desde `dev`, para reducir la probabilidad de conflictos al integrar cambios.

---

## Cómo pensé el problema

Antes de tocar cualquier archivo, necesito asegurarme de que mi copia local refleja el estado actual del repositorio remoto. Si no hago `pull`, podría estar trabajando sobre una versión desactualizada y generar conflictos al momento del merge o pull request. El flujo correcto es: actualizar → crear rama → trabajar → commit → push.

---

## Solución paso a paso

### Paso 1 — Cambiar a `dev`

```bash
git checkout dev
```

**¿Por qué?**  
`dev` es la rama base de trabajo. Nunca se trabaja directamente en `main`. Cambiar a `dev` garantiza que la nueva rama saldrá desde el punto de integración correcto.

---

### Paso 2 — Ejecutar `git pull`

```bash
git pull origin dev
```

**Salida esperada:**

```
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
Unpacking objects: 100% (3/3), done.
From https://github.com/usuario/repo
 * branch            dev -> FETCH_HEAD
Updating a1b2c3d..f4e5d6c
Fast-forward
 basico/git/ejercicio-06/README.md | 1 +
 1 file changed, 1 insertion(+)
```

**¿Por qué?**  
`git pull` descarga los cambios remotos y los integra en la rama local. Si otro compañero ya subió avances a `dev`, yo los recibiré antes de crear mi rama, lo que significa que parto desde la versión más reciente.

---

### Paso 3 — Crear una rama nueva desde `dev`

```bash
git checkout -b feat/ejercicio-06-maria-montepeque
```

**Salida esperada:**

```
Switched to a new branch 'feat/ejercicio-06-maria-montepeque'
```

**¿Por qué?**  
Cada entrega vive en su propia rama. Esto aísla el trabajo, facilita la revisión y evita contaminar `dev` con cambios sin revisar.

---

### Paso 4 — Agregar la solución

```bash
mkdir -p basico/git/ejercicio-06/resoluciones/maria-montepeque
# Crear o copiar el archivo solucion.md en esa carpeta
git add basico/git/ejercicio-06/resoluciones/maria-montepeque/solucion.md
git commit -m "feat(ejercicio-06): agrega solucion pull antes de modificar tabla"
```

**Salida esperada de `git status` antes del commit:**

```
On branch feat/ejercicio-06-maria-montepeque
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file: basico/git/ejercicio-06/resoluciones/maria-montepeque/solucion.md
```

**Salida esperada de `git log --oneline` tras el commit:**

```
a9f1c2e (HEAD -> feat/ejercicio-06-maria-montepeque) feat(ejercicio-06): agrega solucion pull antes de modificar tabla
f4e5d6c (origin/dev, dev) feat: actualiza tabla liga guatemalteca jornada 12
```

---

### Paso 5 — Push de la rama

```bash
git push origin feat/ejercicio-06-maria-montepeque
```

---

## ¿Por qué `git pull` reduce conflictos?

Cuando varias personas trabajan en el mismo repositorio, el estado remoto cambia constantemente. Si comienzo a trabajar sin actualizar, mi rama parte de un punto desactualizado.

**Escenario sin `pull`:**

```
Remoto:  A → B → C   (C tiene cambios de otro compañero en tabla.json)
Local:   A → B       (trabajo sobre B sin saber que existe C)

Al hacer merge: Git tiene que reconciliar C y mi trabajo → posible conflicto.
```

**Escenario con `pull` antes de crear la rama:**

```
Remoto:  A → B → C
Local:   A → B → C   (actualizado)

Creo mi rama desde C. Mi trabajo coexiste limpiamente con los cambios anteriores.
```

**Conclusión:** El `pull` garantiza que la base de mi rama es la más reciente. Mientras menos diferencia haya entre mi punto de partida y el estado remoto, menos probabilidad de conflicto al integrar.

---

## Contexto de fútbol aplicado

Imaginemos que el repositorio contiene una tabla de posiciones de la liga guatemalteca. Varios compañeros actualizan resultados después de cada jornada.

- Si hago `pull`, recibo los resultados de jornadas que otros ya subieron.
- Mi rama parte desde la tabla correcta y actualizada.
- Al hacer merge, Git solo tiene que agregar mis cambios nuevos, sin contradecir los anteriores.

Si no hago `pull`, podría estar trabajando con la tabla de la jornada 10 mientras el remoto ya tiene la 12. Al integrar, Git no sabría cuál versión de los puntos de cada equipo es la correcta.

---

## Validación

### Caso normal — rama creada desde `dev` actualizado

```bash
git checkout dev
git pull origin dev
git checkout -b feat/ejercicio-06-maria-montepeque
git log --oneline -3
```

**Resultado esperado:** el primer commit de la lista coincide con el último de `origin/dev`.

### Caso límite — repositorio sin cambios remotos nuevos

```bash
git pull origin dev
# Salida: Already up to date.
```

**Resultado esperado:** Git informa que no hay nada nuevo. El flujo continúa exactamente igual; el `pull` no rompe nada aunque no haya cambios.

---

## Archivos entregados

```
basico/git/ejercicio-06/resoluciones/maria-montepeque/
└── solucion.md
```
