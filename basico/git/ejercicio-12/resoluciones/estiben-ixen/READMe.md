# Resolución: Merge de Ranking de Pingpong
**Fecha:** julio 2026
**Ejercicio:** 12

---

# Objetivo

Escribir commits profesionales, claros y fáciles de entender para mantener un historial limpio del proyecto.

---

# Desarrollo

Se creó la carpeta personal:

```text
resoluciones/
└── estiben-ixen/
    └── README.md

```

Posteriormente se realizaron tres cambios pequeños, cada uno acompañado de un commit descriptivo.

---

# Commits realizados

## Commit 1

```bash
git add .
git commit -m "docs: crear estructura inicial de la solución"
```

**Descripción**

Se creó la carpeta personal y el archivo `README.md` donde se documentará la solución.

---

## Commit 2

```bash
git add .
git commit -m "docs: agregar solución y explicación del ejercicio"
```

**Descripción**

Se documentó la solución, el razonamiento seguido y la forma en que se desarrolló el ejercicio.

---

## Commit 3

```bash
git add .
git commit -m "docs: incorporar evidencias y validar la entrega"
```

**Descripción**

Se agregaron las evidencias de validación y se verificó que la entrega cumpliera con los requisitos.

---

# Evidencias

## Estado del repositorio

```bash
git status
```

## Historial de commits

```bash
git log --oneline
```

Ejemplo:

```text
c4d81af docs: incorporar evidencias y validar la entrega
9d34b22 docs: agregar solución y explicación del ejercicio
3ab29d8 docs: crear estructura inicial de la solución
```

---

# Validación realizada

Se verificó que:

- La carpeta se encuentra dentro de `resoluciones/estiben-ixen/`.
- No se modificó el `README.md` del ejercicio.
- No se eliminaron archivos `.gitkeep`.
- No se modificaron archivos de otros estudiantes.
- Se trabajó desde una rama creada a partir de `dev`.
- Los mensajes de commit son claros, específicos y utilizan un verbo de acción.

---

# Cómo pensé la solución

Dividí el trabajo en cambios pequeños para que cada commit representara una única responsabilidad. Esto permite que cualquier desarrollador pueda comprender fácilmente qué cambio se realizó en cada paso y facilita el mantenimiento del historial del proyecto.

---

# Conclusión

El ejercicio fue completado siguiendo las buenas prácticas de Git, utilizando commits descriptivos, validando el estado del repositorio y manteniendo un historial ordenado y comprensible.