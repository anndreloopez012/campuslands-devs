# Ejercicio 13 — Resolver conflicto de estructura 3D

**Nombre:** Maria Montepeque

---

## Cómo pensé el problema

Dos áreas de trabajo (modelado y renders) modificaron el mismo archivo `estructura.md` en ramas separadas. Al intentar integrar ambas ramas en `dev`, Git no pudo decidir cuál versión era la correcta porque ambas editaron la misma zona del archivo. La tarea fue resolver ese conflicto manteniendo el contenido de las dos áreas, sin eliminar ninguna.

La decisión de resolución fue sencilla: ambas secciones son válidas y complementarias, así que la solución correcta es conservarlas las dos en el archivo final.

---

## Solución completa

### Paso 1 — Crear la rama de trabajo propia

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-13/maria-montepeque
```

### Paso 2 — Crear el archivo base compartido

`estructura.md` inicial:

```markdown
# Estructura del proyecto 3D

Archivo compartido del proyecto de animación.
```

```bash
git add estructura.md
git commit -m "inicial: estructura base del proyecto 3D"
```

### Paso 3 — Rama del área de modelado

```bash
git checkout -b feature/modelado-3d
```

Se agrega la sección de modelado a `estructura.md`:

```markdown
## Modelado 3D

- modelos/personajes/
- modelos/escenarios/
- modelos/props/

Software: Blender 4.1
Formatos: .blend, .fbx, .obj
```

```bash
git add estructura.md
git commit -m "modelado: agrega sección de modelado 3D con carpetas y formatos"
```

### Paso 4 — Rama del área de renders

```bash
git checkout dev
git checkout -b feature/renders
```

Se agrega la sección de renders a `estructura.md` (misma zona que el área de modelado):

```markdown
## Renders

- renders/previzualizacion/
- renders/final/
- renders/compositing/

Motor: Cycles
Resolución: 1920x1080
```

```bash
git add estructura.md
git commit -m "renders: agrega sección de renders con carpetas y configuración"
```

### Paso 5 — Primer merge (sin conflicto)

```bash
git checkout dev
git merge feature/modelado-3d --no-ff -m "merge: integra sección de modelado 3D"
```

Salida:

```
Merge made by the 'ort' strategy.
 estructura.md | 9 +++++++++
 1 file changed, 9 insertions(+)
```

### Paso 6 — Segundo merge (genera conflicto)

```bash
git merge feature/renders --no-ff
```

Salida:

```
Auto-merging estructura.md
CONFLICT (content): Merge conflict in estructura.md
Automatic merge failed; fix conflicts and then commit the result.
```

`git status` en ese momento:

```
On branch dev
You have unmerged paths.

Unmerged paths:
  (use "git add <file>...") to mark resolution)
	both modified:   estructura.md
```

El archivo con marcadores de conflicto:

```
<<<<<<< HEAD
## Modelado 3D

- modelos/personajes/
- modelos/escenarios/
- modelos/props/

Software: Blender 4.1
Formatos: .blend, .fbx, .obj
=======
## Renders

- renders/previzualizacion/
- renders/final/
- renders/compositing/

Motor: Cycles
Resolución: 1920x1080
>>>>>>> feature/renders
```

### Paso 7 — Resolución del conflicto

Se eliminan los marcadores `<<<<<<<`, `=======` y `>>>>>>>` y se conservan **ambas secciones**:

```markdown
# Estructura del proyecto 3D

Archivo compartido del proyecto de animación.

## Modelado 3D

- modelos/personajes/
- modelos/escenarios/
- modelos/props/

Software: Blender 4.1
Formatos: .blend, .fbx, .obj

## Renders

- renders/previzualizacion/
- renders/final/
- renders/compositing/

Motor: Cycles
Resolución: 1920x1080
```

```bash
git add estructura.md
git commit -m "merge: resuelve conflicto conservando modelado y renders — Maria Montepeque"
```

---

## Evidencia de validación

### `git log --oneline` después de resolver

```
2ac6bd9 merge: resuelve conflicto conservando modelado y renders — Maria Montepeque
1c4ee13 merge: integra sección de modelado 3D
b5b259f renders: agrega sección de renders con carpetas y configuración
046bb77 inicial: estructura base del proyecto 3D
e6013a7 modelado: agrega sección de modelado 3D con carpetas y formatos
```

### `git status` después del commit de resolución

```
On branch dev
nothing to commit, working tree clean
```

### Verificación del archivo resuelto

```bash
cat estructura.md
```

Salida:

```
# Estructura del proyecto 3D

Archivo compartido del proyecto de animación.

## Modelado 3D

- modelos/personajes/
- modelos/escenarios/
- modelos/props/

Software: Blender 4.1
Formatos: .blend, .fbx, .obj

## Renders

- renders/previzualizacion/
- renders/final/
- renders/compositing/

Motor: Cycles
Resolución: 1920x1080
```

Ambas secciones presentes. Ningún marcador de conflicto en el archivo. El historial refleja el proceso completo.

---

## Por qué se generó el conflicto

Git marca conflicto cuando dos ramas modifican **exactamente la misma zona de un archivo** y no puede decidir automáticamente cuál cambio prevalece. En este caso, `feature/modelado-3d` y `feature/renders` agregaron contenido en la misma posición del archivo (debajo de la línea introductoria), por lo que Git no tuvo forma de saber si debía poner primero modelado, primero renders, o ambos.

La resolución manual consiste en abrir el archivo, leer qué aportó cada rama y escribir la versión final que tiene sentido para el proyecto. Aquí ambas secciones son complementarias, así que la decisión fue mantenerlas las dos en orden lógico: primero modelado (producción de assets), luego renders (uso de esos assets).

---

## Comandos Git sugeridos para entrega

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-13/maria-montepeque

# ... pasos de la solución ...

git add resoluciones/maria-montepeque/
git commit -m "ejercicio-13: resolver conflicto de estructura 3D — Maria Montepeque"
git push origin ejercicio-13/maria-montepeque
```
