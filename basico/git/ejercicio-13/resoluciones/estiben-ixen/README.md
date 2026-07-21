# Solución - Ejercicio 13
## Resolver conflicto de estructura 3D

### Alumno

**Nombre:** Estiben Ixen

---

# Objetivo

Resolver un conflicto de fusión en Git conservando los cambios realizados por dos ramas diferentes sobre el mismo archivo.

---

# Desarrollo

Se simuló el trabajo colaborativo de dos equipos modificando el archivo `estructura.md`.

- La primera rama agregó la sección **Modelado**.
- La segunda rama agregó la sección **Renders**.
- Al intentar fusionarlas se produjo un conflicto.
- El conflicto se resolvió conservando ambas secciones y creando un commit de resolución.

---

# Archivo final `estructura.md`

```markdown
# Estructura del Proyecto 3D

## Modelado

- Modelado de personajes.
- Modelado de escenarios.
- Optimización de mallas.

## Renders

- Render de prueba.
- Render final en alta calidad.
- Configuración de iluminación.
```

---

# Comandos utilizados

## Crear ramas

```bash
git checkout -b modelado
```

```bash
git checkout -b renders
```

---

## Fusionar ramas

```bash
git merge modelado
```

```bash
git merge renders
```

Al realizar el segundo merge Git detectó un conflicto porque ambas ramas modificaron el mismo archivo.

---

## Resolver conflicto

Se editaron manualmente las secciones en conflicto para conservar tanto **Modelado** como **Renders**.

Posteriormente se ejecutó:

```bash
git add estructura.md
```

```bash
git commit -m "merge: resolver conflicto conservando modelado y renders"
```

---

# Evidencias

## Estado del repositorio

```bash
git status
```

Salida esperada:

```text
On branch alumno/estiben-ixen/git-ejercicio-13
nothing to commit, working tree clean
```

---

## Historial

```bash
git log --oneline
```

Ejemplo:

```text
8e4b3c1 merge: resolver conflicto conservando modelado y renders
7d3a821 feat: agregar sección de renders
4c81f91 feat: agregar sección de modelado
```

---

# Validación

Se verificó que:

- El conflicto fue resuelto correctamente.
- Ninguna información fue eliminada.
- Ambas secciones permanecen en el archivo final.
- El historial refleja claramente los cambios realizados.

---

# Cómo pensé la solución

En lugar de elegir una versión del archivo, analicé el contenido de ambas ramas y unifiqué la información. De esta manera se respetó el trabajo de los dos equipos y se obtuvo una versión completa del documento.

---

# Conclusión

El conflicto fue resuelto manualmente utilizando las herramientas de Git, conservando los cambios de ambas ramas y registrando la resolución mediante un commit descriptivo.