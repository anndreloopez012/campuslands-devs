# Checklist final de flujo profesional

**Desarrollador:** Selvin Eladio Lem Ical

---

# 1. Pensamiento e Idea del Problema

En un proyecto real de gestión de inventario de ropa, varios integrantes del equipo trabajan en paralelo sobre la misma rama `dev`. Si al momento de entregar el trabajo no se actualiza la rama personal con los últimos cambios del equipo, se corre el riesgo de generar conflictos innecesarios al integrar, o incluso de sobrescribir avances de otros compañeros sin darse cuenta.

Para resolver este ejercicio, se planteó un flujo de trabajo profesional completo, dividido en los siguientes pasos:

1. Crear una rama personal a partir de `dev`.
2. Trabajar en una solución pequeña y bien delimitada.
3. Confirmar el avance con un commit claro.
4. Actualizar la rama personal con los últimos cambios de `dev` antes de entregar.
5. Preparar un checklist de entrega profesional que valide todo el flujo.

---

# 2. Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado.

---

## Paso 1: Crear la rama personal desde dev

### Comando

```
git checkout -b alumno/selvin-lem/ejercicio-15
```

### Explicación

Se crea la rama personal `alumno/selvin-lem/ejercicio-15` a partir de `dev`, siguiendo la convención de nombres definida para el equipo. Esto aísla el trabajo individual sin afectar el avance de otros compañeros.

---

## Paso 2: Trabajar la solución del ejercicio

### Comando

```
mkdir -p basico/git/ejercicio-15/resoluciones/selvin-lem
```

Contenido del archivo `inventario.txt`:

```
Inventario basico de tienda de ropa:
Camisa talla M - 20 unidades
Pantalon talla 32 - 15 unidades
```

### Explicación

Se crea la carpeta personal respetando el formato `nombre-apellido/` y dentro de ella un archivo con una solución pequeña: un inventario básico de una tienda de ropa.

---

## Paso 3: Confirmar el avance con un commit claro

### Comandos

```
git add basico/git/ejercicio-15/resoluciones/selvin-lem/inventario.txt
git commit -m "feat: add basic clothing inventory for exercise solution"
```

### Explicación

El mensaje del commit describe con precisión qué se agregó y en qué contexto, evitando mensajes genéricos y facilitando la revisión posterior.

---

## Paso 4: Actualizar la rama con los últimos cambios de dev

### Comandos

```
git checkout dev
git pull origin dev
git checkout alumno/selvin-lem/ejercicio-15
git merge dev -m "merge: update branch with latest changes from dev"
```

### Salida

```
git log --oneline --all --graph

*   b485745 merge: update branch with latest changes from dev
|\
| * 67ca6e7 feat: add clothing categories base file
* | d24a5e3 feat: add basic clothing inventory for exercise solution
|/
* 86438e7 chore: initialize repository
```

### Explicación

Antes de entregar, se actualiza la rama `dev` local con `git pull` para traer el trabajo más reciente del equipo (en este caso, un compañero agregó un archivo de categorías de ropa). Luego, se fusiona `dev` dentro de la rama personal con `git merge dev`, integrando ambos historiales sin perder ningún cambio. El grafo confirma que la rama personal quedó al día con el resto del equipo.

---

## Paso 5: Subir la rama actualizada al remoto

### Comando

```
git push -u origin alumno/selvin-lem/ejercicio-15
```

### Salida

```
To origin
 * [new branch]      alumno/selvin-lem/ejercicio-15 -> alumno/selvin-lem/ejercicio-15
branch 'alumno/selvin-lem/ejercicio-15' set up to track 'origin/alumno/selvin-lem/ejercicio-15'.
```

### Explicación

Se publica la rama ya actualizada en el repositorio remoto, dejándola lista para la revisión final, sin conflictos pendientes con `dev`.

---

---

# 3. Conclusión

Con esta práctica se logró integrar en un solo flujo los conceptos de ramas, commits, actualización con `pull`, publicación con `push` y revisión final mediante un checklist, simulando cómo se entrega trabajo en un equipo real de desarrollo.

Además, se comprendió que actualizar la rama personal con `dev` antes de entregar no es un paso opcional, sino una práctica que previene conflictos mayores y asegura que el trabajo final sea compatible con los avances del resto del equipo.