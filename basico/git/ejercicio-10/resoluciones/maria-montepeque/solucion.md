# Ejercicio 10 — Revertir idea sin borrar historial

**Nombre:** Maria Montepeque  
**Carpeta:** `basico/git/ejercicio-10/resoluciones/maria-montepeque/`  
**Rama:** `ejercicio-10/maria-montepeque` (creada desde `dev`)

---

## Contexto del problema

Se trabaja con un catálogo de autos. En algún momento del proyecto se hace un commit
con datos incorrectos (un auto con marca y año inválidos). El objetivo es deshacer
ese commit sin eliminar su rastro del historial, usando `git revert`.

---

## Proceso paso a paso

### Paso 1 — Estado inicial del repositorio

Se parte con tres commits existentes:

```
dfe310a feat: agregar Mazda 3 al catálogo
b873414 feat: agregar auto-999 MarcaFalsa (dato incorrecto)
ed54121 feat: agregar catálogo inicial con Toyota Corolla y Honda Civic
```

El commit `b873414` contiene un auto con datos inválidos:

```json
{ "id": "auto-999", "marca": "MarcaFalsa", "modelo": "ModeloInventado", "anio": 1800 }
```

### Paso 2 — Identificar el commit a revertir

```bash
git log --oneline
```

Se identifica el hash del commit problemático: `b873414`.

### Paso 3 — Ejecutar git revert

```bash
git revert b873414 --no-edit
```

Git intentó aplicar el reverso del commit `b873414`. Como ese archivo fue modificado
también por el commit posterior (`dfe310a` con el Mazda 3), Git detectó un conflicto
porque no podía saber automáticamente cómo combinar los cambios.

Salida del conflicto:

```
CONFLICT (content): Merge conflict in catalogo/autos.json
error: could not revert b873414...
hint: After resolving the conflicts, mark them with git add <pathspec>,
hint: then run git revert --continue.
```

### Paso 4 — Resolver el conflicto manualmente

El archivo quedó con marcadores de conflicto:

```
<<<<<<< HEAD
  (versión actual con auto-999 y Mazda 3)
=======
  (versión sin auto-999)
>>>>>>> parent of b873414
```

Se editó el archivo para conservar el Mazda 3 (que es correcto) y eliminar
únicamente el `auto-999` (el incorrecto):

```json
[
  { "id": "auto-001", "marca": "Toyota", "modelo": "Corolla", "anio": 2022 },
  { "id": "auto-002", "marca": "Honda", "modelo": "Civic", "anio": 2021 },
  { "id": "auto-003", "marca": "Mazda", "modelo": "3", "anio": 2023 }
]
```

Luego se marcó como resuelto y se completó el revert:

```bash
git add catalogo/autos.json
git revert --continue --no-edit
```

### Paso 5 — Verificar el historial final

```bash
git log --oneline
```

Salida:

```
05f8e26 Revert "feat: agregar auto-999 MarcaFalsa (dato incorrecto)"
dfe310a feat: agregar Mazda 3 al catálogo
b873414 feat: agregar auto-999 MarcaFalsa (dato incorrecto)
ed54121 feat: agregar catálogo inicial con Toyota Corolla y Honda Civic
```

El commit del error (`b873414`) sigue visible. Se agregó un nuevo commit (`05f8e26`)
que contiene el efecto inverso.

---

## Catálogo final validado

```json
[
  { "id": "auto-001", "marca": "Toyota", "modelo": "Corolla", "anio": 2022 },
  { "id": "auto-002", "marca": "Honda", "modelo": "Civic", "anio": 2021 },
  { "id": "auto-003", "marca": "Mazda", "modelo": "3", "anio": 2023 }
]
```

El `auto-999` fue eliminado. Los demás autos están intactos.

---

## ¿Por qué revert conserva el historial?

`git revert` no borra ni modifica commits existentes. En cambio, crea un **nuevo commit**
que aplica el efecto contrario al commit que se quiere deshacer.

Esto es importante porque:

- En proyectos colaborativos, otros compañeros pueden haber clonado o basado trabajo
  en los commits existentes. Si se borrara el commit con `git reset`, sus repositorios
  quedarían en conflicto.
- El historial completo permite saber qué pasó, cuándo y por qué se deshizo algo.
  Es una traza de auditoría.
- `git reset` reescribe la historia, lo que es peligroso en ramas compartidas.
  `git revert` es la operación segura para trabajo en equipo.

En resumen: `revert` dice *"esto estuvo mal y lo corrijo"*, mientras que `reset`
dice *"esto nunca existió"*. En un equipo, lo primero es transparente y seguro;
lo segundo puede romper el trabajo de otros.

---

## Caso límite considerado

Durante el revert apareció un **conflicto de merge**. Esto ocurre cuando el commit
a revertir no es el más reciente, porque Git no puede aplicar el reverso de forma
automática sin afectar commits posteriores.

La resolución manual es parte del proceso: se elige qué conservar (Mazda 3) y qué
eliminar (auto-999), y luego se continúa con `--continue`.

Este es el caso límite más importante de `git revert`: cuando hay commits encima
del que se quiere revertir.

---

## Comandos resumen

```bash
# Crear rama desde dev
git checkout dev
git checkout -b ejercicio-10/maria-montepeque

# Ver el historial para identificar el commit problemático
git log --oneline

# Revertir el commit incorrecto
git revert <hash-del-commit-incorrecto> --no-edit

# Si hay conflicto: resolver manualmente, luego
git add <archivo-con-conflicto>
git revert --continue --no-edit

# Verificar resultado
git log --oneline
```
