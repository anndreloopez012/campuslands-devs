# Resolver conflicto de estructura 3D

**Desarrollador:** Selvin Eladio Lem Ical

---

# 1. Pensamiento e Idea del Problema

En un proyecto de animación 3D es común que dos áreas distintas del pipeline (por ejemplo, modelado y renders) documenten su avance en el mismo archivo de estructura. Si ambas áreas modifican la misma sección del archivo en ramas separadas, al intentar integrar el trabajo Git no puede decidir por sí solo cuál versión conservar, y se genera un conflicto de fusión.

Para resolver este ejercicio, se planteó un flujo de trabajo dividido en los siguientes pasos:

1. Crear una rama `modelado` que agrega su sección a `estructura.md`.
2. Crear una rama `renders` que agrega su propia sección al mismo archivo, en la misma posición.
3. Generar el conflicto al intentar fusionar ambas ramas.
4. Resolver el conflicto conservando el contenido de las dos áreas.
5. Confirmar la resolución con un commit de merge.

---

# 2. Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado.

---

## Paso 1: Crear el archivo base de estructura

### Comandos

```
git init
echo "# Estructura del proyecto 3D" > estructura.md
echo "" >> estructura.md
echo "## Areas del pipeline" >> estructura.md
git add estructura.md
git commit -m "feat: add base project structure file"
```

### Explicación

Se crea el archivo `estructura.md` con un encabezado base común, que servirá como punto de partida compartido para ambas áreas del proyecto.

---

## Paso 2: Crear la rama modelado y agregar su sección

### Comandos

```
git checkout -b modelado
```

Contenido agregado al final de `estructura.md`:

```
## Modelado
- Personaje principal: 12000 poligonos
- Props de escenario: bajo poly
```

```
git add estructura.md
git commit -m "feat: add modeling section to structure"
```

### Explicación

Desde la rama `modelado`, se agrega la sección correspondiente al área de modelado, justo después del encabezado base.

---

## Paso 3: Crear la rama renders y agregar su sección

### Comandos

```
git checkout master
git checkout -b renders
```

Contenido agregado al final de `estructura.md` (partiendo del mismo punto que `modelado`, ya que `renders` se crea desde `master`):

```
## Renders
- Motor: Cycles
- Resolucion: 1920x1080 a 24fps
```

```
git add estructura.md
git commit -m "feat: add renders section to structure"
```

### Explicación

Desde `master`, se crea la rama `renders` y se agrega su propia sección en la misma posición del archivo donde `modelado` agregó la suya. Esto es intencional para provocar el conflicto en el siguiente paso.

---

## Paso 4: Generar el conflicto al fusionar

### Comando

```
git checkout modelado
git merge renders
```

### Salida

```
Auto-merging estructura.md
CONFLICT (content): Merge conflict in estructura.md
Automatic merge failed; fix conflicts and then commit the result.
```

### Explicación

Git detecta que ambas ramas modificaron la misma región del archivo (el final de `estructura.md`) desde un mismo punto de partida, por lo que no puede fusionar automáticamente. El archivo queda marcado con los delimitadores de conflicto:

```
<<<<<<< HEAD
## Modelado
- Personaje principal: 12000 poligonos
- Props de escenario: bajo poly
=======
## Renders
- Motor: Cycles
- Resolucion: 1920x1080 a 24fps
>>>>>>> renders
```

---

## Paso 5: Resolver el conflicto conservando ambas secciones

### Acción

Se edita manualmente `estructura.md`, eliminando los marcadores `<<<<<<<`, `=======` y `>>>>>>>`, y dejando ambas secciones una debajo de la otra:

```
# Estructura del proyecto 3D

## Areas del pipeline

## Modelado
- Personaje principal: 12000 poligonos
- Props de escenario: bajo poly

## Renders
- Motor: Cycles
- Resolucion: 1920x1080 a 24fps
```

### Explicación

En lugar de descartar el trabajo de una de las dos áreas, se decide conservar ambas secciones, ya que la información de modelado y de renders no es excluyente sino complementaria dentro del mismo documento de estructura.

---

## Paso 6: Confirmar la resolución con un commit de merge

### Comandos

```
git add estructura.md
git commit -m "merge: resolve structure conflict keeping modeling and renders sections"
```


# 3. Conclusión

Con esta práctica se logró simular y resolver un conflicto real de fusión entre dos áreas de trabajo (modelado y renders) que editaron la misma sección de un archivo compartido, respetando el aporte de ambas partes en lugar de sobrescribir una con la otra.

Además, se comprendió que un conflicto de Git no es un error a evitar a toda costa, sino una señal de que dos cambios se superponen y requieren una decisión humana informada para integrarlos correctamente.