# Ejercicio 04 - Realización de commits pequeños 

**Camper:** Antonio Canux

---

## Cómo se pensó el problema?

El principal objetivo de este ejercicio es enseñar una buena práctica de Git: hacer commits pequeños y con un propósito claro.

La idea no es crear un archivo completo y luego hacer un único commit, sino construirlo por etapas.:

1. **Estructura base** — las partes principales del documento.
2. **Armas** — se registran armas.
3. **Curaciones y utilidad** — se registran items de apoyo y táctica.

---

## Comandos ejecutados

### Preparación de rama

```bash
git checkout dev
git pull origin dev
git checkout -b alumno/antonio-canux/ejercicio-04
```

---

### Paso 1 — Crear el archivo con la estructura base

Se crea `inventario.md` con solo el encabezado:

```markdown
# Inventario Battle Royale

## Armas

## Curaciones

## Utilidad
```

```bash
git add resoluciones/antonio-canux/ejercicio-04/inventario.md
git commit -m "feat: Crear estructura base del inventario"
```

---

### Paso 2 — Agregar sección de armas

Se agrega la tabla de armas al archivo:

```markdown
# Inventario Battle Royale

## Armas

- Rifle de asalto
- Escopeta táctica
- Francotirador

## Curaciones

## Utilidad
```

```bash
git add resoluciones/antonio-canux/ejercicio-04/inventario.md
git commit -m "feat: Agregar armas al inventario"
```

---

### Paso 3 — Agregar curaciones y utilidad

Se agrega la segunda tabla al archivo:

```markdown
# Inventario Battle Royale

## Armas

- Rifle de asalto
- Escopeta táctica
- Francotirador

## Curaciones

- Botiquín
- Vendajes
- Poción de escudo

## Utilidad

- Granada
- Trampa
- Bomba de humo
```

```bash
git add resoluciones/antonio-canux/ejercicio-04/inventario.md
git commit -m "feat: Agregar curaciones y objetos de utilidad"
```

---

## Historial final

```bash
git log --oneline
```

**Salida esperada:**

```
570bbcc (HEAD -> alumno/antonio-canux/ejercicio-04) feat: Agregar curaciones y objetos de utilidad
3520fd9 feat: Agregar armas al inventario
da5ca0d feat: Crear estructura base de inventario
```
