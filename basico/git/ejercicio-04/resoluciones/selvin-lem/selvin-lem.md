# Resolución de Ejercicio: Commits pequeños de inventario battle royale

**Desarrollador:**    Nombre Apellido

---

## 1. Breve explicación del proceso

Para resolver este ejercicio dividí el trabajo en tres fases, siguiendo el principio de que cada commit debe representar una unidad lógica de cambio, no un conjunto de cambios mezclados:

1. **Fase de Aislamiento (Ramificación):** Antes de tocar cualquier archivo, me ubiqué en `dev` y creé mi propia rama de trabajo para no afectar el código base ni el de mis compañeros.
2. **Fase de Construcción Incremental:** En lugar de escribir todo el archivo `inventario.md` de una sola vez, lo construí en tres etapas (estructura, armas, curaciones y utilidad), guardando un commit por cada etapa completada. Esto refleja la idea de "commits pequeños": cada uno tiene un propósito único y un mensaje claro.
3. **Fase de Verificación (Auditoría):** Utilicé `git log --oneline` para confirmar que el historial reflejara exactamente esas tres divisiones lógicas, y no un solo commit gigante ni cambios desordenados.

---

# Solución Paso a Paso

A continuación se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado para dividir el inventario del battle royale en commits lógicos.

---

### Paso 1: Ubicarme en la rama dev y actualizarla

```
git checkout dev
git pull origin dev

```
### Explicación

Antes de crear cualquier rama nueva, me aseguré de estar parado sobre `dev` y de tenerla actualizada con `git pull`. Esto evita partir de una versión desactualizada del proyecto y previene conflictos innecesarios más adelante.

---

### Paso 2: Crear mi rama personal de trabajo

### Comando

```
git checkout -b alumno/selvin-lem/ejercicio-04  
```

### Explicación

Con `git checkout -b` creo y me muevo en un solo paso a una rama nueva, aislada de `dev` y de `main`. Todo lo que haga a partir de aquí queda contenido en mi propia línea de trabajo hasta que decida integrarlo.

---

### Paso 3: Crear mi carpeta personal dentro de resoluciones

### Comando

```
mkdir -p basico/git/ejercicio-04/resoluciones/selvin-lem
cd basico/git/ejercicio-04/resoluciones/selvin-lem
```

### Explicación

Sigo el formato obligatorio indicado en las instrucciones (`nombre-apellido/`), evitando el error común de usar nombres genéricos como `solucion/`. Todo mi trabajo queda contenido dentro de esta ruta.

---

### Paso 4: Crear el archivo inventario.md con la estructura base

### Contenido inicial de inventario.md

### Comando
```
git add inventario.md
git commit -m "feat: agrega estructura base del inventario"
```
### Explicación

Este primer commit contiene únicamente el esqueleto del inventario: las categorías que existirán, sin detalle todavía. Es un cambio lógico y aislado: define el "qué" antes del "cómo".

---

### Paso 5: Agregar la sección de armas

### Contenido agregado a inventario.md

### Comando
```
git add inventario.md
git commit -m "feat: agrega seccion de armas al inventario"
```
### Explicación

Este segundo commit se enfoca exclusivamente en llenar la categoría de armas definida en el paso anterior. No toco ninguna otra sección, para que el commit represente un solo tipo de cambio.

---

### Paso 6: Agregar la sección de curaciones y utilidad

### Contenido agregado a inventario.md
```
git add inventario.md
git commit -m "feat: agrega curaciones y utilidad al inventario"
```
### Explicación

Este tercer commit completa el inventario agregando las dos categorías restantes. Se mantiene separado de las armas porque conceptualmente son grupos distintos (ofensivo vs. soporte/utilidad).

---

