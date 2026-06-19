# Solución — Ejercicio 04: Commits pequeños de inventario battle royale

**Nombre:** Maria Montepeque  
**Dificultad:** Básica retadora  
**Temática:** Videojuegos battle royale

---

## Cómo pensé el problema

El objetivo es practicar commits atómicos: cada commit debe representar un cambio lógico independiente, no todo mezclado en uno solo.

Dividí el contenido del inventario en tres momentos claros:

1. **Estructura base** — el esqueleto del archivo (encabezado, jugador, nombre de partida).
2. **Armas** — solo la tabla de armas, con sus columnas relevantes.
3. **Curaciones y utilidad** — items de apoyo y táctica.

Esto simula trabajo real: un desarrollador que primero define la estructura del documento, luego rellena una sección, y luego otra, haciendo commits separados para que el historial sea legible y reversible por partes.

---

## Comandos ejecutados

### Preparación de rama

```bash
git checkout dev
git pull origin dev
git checkout -b feat/ejercicio-04-maria-montepeque
```

**Por qué:** Siempre se trabaja desde `dev` como base. La rama tiene nombre descriptivo que identifica el ejercicio y la persona.

---

### Paso 1 — Crear el archivo con la estructura base

Se crea `inventario.md` con solo el encabezado:

```markdown
# Inventario Battle Royale

## Jugador: Fantasma_GT
## Partida: Zona Final — Servidor Latinoamérica
```

```bash
git add resoluciones/maria-montepeque/ejercicio-04/inventario.md
git commit -m "estructura: agrega encabezado base de inventario battle royale"
```

**Por qué:** El primer commit deja lista la estructura del documento sin mezclar contenido. Si después hay que cambiar el nombre del jugador o el servidor, el cambio queda aislado.

---

### Paso 2 — Agregar sección de armas

Se agrega la tabla de armas al archivo:

```markdown
## Armas

| Arma                    | Munición | Nivel de rareza |
|-------------------------|----------|-----------------|
| Rifle de francotirador  | 12       | Épico           |
| Escopeta táctica        | 28       | Raro            |
| Pistola de respaldo     | 45       | Común           |
```

```bash
git add resoluciones/maria-montepeque/ejercicio-04/inventario.md
git commit -m "inventario: agrega tabla de armas con munición y rareza"
```

**Por qué:** Las armas son un grupo lógico separado. Si el balanceo del juego cambia solo las armas, este commit es el único que se toca o revierte.

---

### Paso 3 — Agregar curaciones y utilidad

Se agrega la segunda tabla al archivo:

```markdown
## Curaciones y Utilidad

| Ítem              | Cantidad | Efecto                        |
|-------------------|----------|-------------------------------|
| Botiquín completo | 2        | Restaura 100 HP               |
| Vendas            | 5        | Restaura 25 HP por uso        |
| Escudo pequeño    | 3        | Otorga 25 de escudo           |
| Granada de humo   | 2        | Cobertura visual por 6 seg    |
| Impulsor          | 1        | Desplazamiento rápido de zona |
```

```bash
git add resoluciones/maria-montepeque/ejercicio-04/inventario.md
git commit -m "inventario: agrega sección de curaciones y utilidad"
```

**Por qué:** La utilidad y las curaciones son categoría diferente a las armas. Separarlas permite buscar, revisar o revertir cambios de forma quirúrgica.

---

## Historial final

```bash
git log --oneline
```

**Salida esperada:**

```
c3d8f21 inventario: agrega sección de curaciones y utilidad
b1a7e09 inventario: agrega tabla de armas con munición y rareza
a4f2c30 estructura: agrega encabezado base de inventario battle royale
```

---

## Contenido final de inventario.md

```markdown
# Inventario Battle Royale

## Jugador: Fantasma_GT
## Partida: Zona Final — Servidor Latinoamérica

---

## Armas

| Arma                    | Munición | Nivel de rareza |
|-------------------------|----------|-----------------|
| Rifle de francotirador  | 12       | Épico           |
| Escopeta táctica        | 28       | Raro            |
| Pistola de respaldo     | 45       | Común           |

---

## Curaciones y Utilidad

| Ítem              | Cantidad | Efecto                        |
|-------------------|----------|-------------------------------|
| Botiquín completo | 2        | Restaura 100 HP               |
| Vendas            | 5        | Restaura 25 HP por uso        |
| Escudo pequeño    | 3        | Otorga 25 de escudo           |
| Granada de humo   | 2        | Cobertura visual por 6 seg    |
| Impulsor          | 1        | Desplazamiento rápido de zona |
```

---

## Validación

| Criterio                                              | Estado |
|-------------------------------------------------------|--------|
| Se crearon exactamente 3 commits con contenido distinto | ✅     |
| Cada commit cubre una sola responsabilidad lógica     | ✅     |
| Los mensajes de commit son descriptivos (no genéricos) | ✅     |
| El archivo vive en `resoluciones/maria-montepeque/`   | ✅     |
| El historial con `--oneline` es legible y ordenado    | ✅     |
| No se trabajó directamente en `main`                  | ✅     |

---

## Reflexión sobre commits atómicos

Un commit grande que diga `"agrega todo el inventario"` es difícil de revisar y de revertir parcialmente. Si después el equipo decide que las granadas de humo no van en el inventario, con commits separados basta con hacer `git revert` al tercer commit. Con todo en uno, hay que editar el archivo a mano.

El historial de Git es documentación del proceso de trabajo, no solo del resultado final.
