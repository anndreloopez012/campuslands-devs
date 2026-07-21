# Resolución - Ejercicio 10: Revertir idea sin borrar historial

**Camper:** Antonio Canux

## 1. Explicación de cómo pensé el problema

El problema simulaba la necesidad de eliminar una característica errónea (un auto incorrecto) en un entorno colaborativo. Si estuviéramos trabajando solos localmente, podríamos usar `git reset`, pero al estar en un entorno compartido, reescribir la historia arruinaría el trabajo de otros desarrolladores que ya hayan descargado la rama.

Mi estrategia fue:
1. Aislar mi trabajo creando mi propia rama a partir de `dev`.
2. Crear un commit introduciendo el error a propósito (agregando un auto urbano en lugar de un auto de rally).
3. Utilizar `git revert` apuntando al último commit (`HEAD`) para deshacer la acción mediante un **nuevo commit**, en lugar de borrar el pasado.

---

## 2. Ejecución paso a paso y Evidencias (Comandos)

**Paso 1: Preparación de la rama y el entorno**
```bash
git checkout dev
git pull origin dev
git checkout -b feature/antonio-canux-revert-auto
mkdir -p basico/git/ejercicio-10/resoluciones/antonio-canux/
cd basico/git/ejercicio-10/resoluciones/antonio-canux/
```

**Paso 2: Crear el commit con el "auto incorrecto"**
Creé un archivo simulando un inventario donde por error agregué un auto urbano común, en lugar del Subaru Impreza WRX STI que planeaba agregar.

```bash
echo "Auto: Toyota Prius 2010" > inventario_rally.txt
git add inventario_rally.txt
git commit -m "feat: agrega Toyota Prius al catálogo de rally"
```

**Paso 3: Validar el historial antes de revertir**

```bash
git log --oneline -n 2
```

**Salida esperada:**

```bash
a1b2c3d (HEAD -> feature/antonio-canux-revert-auto) feat: agrega Toyota Prius al catálogo de rally
e4f5g6h (origin/dev, dev) commit anterior de la rama dev
```
**Paso 4: Aplicar git revert para deshacer el cambio**
Ejecuté el comando revert apuntando al último commit. Git abrió mi editor de texto para confirmar el mensaje del nuevo commit, el cual dejé por defecto.

```bash
git revert HEAD
```

**Paso 5: Evidencia de Validación (git log)**
Revisé nuevamente el historial para confirmar que la reversión fue exitosa y se generó un nuevo commit.

```bash
git log --oneline -n 3
```

Salida esperada:

```bash
9f8e7d6 (HEAD -> feature/antonio-canux-revert-auto) Revert "feat: agrega Toyota Prius al catálogo de rally"
a1b2c3d feat: agrega Toyota Prius al catálogo de rally
e4f5g6h (origin/dev, dev) commit anterior de la rama dev
```

## 3. Explicación Técnica: ¿Por qué revert conserva el historial?
La diferencia fundamental entre reset y revert radica en cómo deshacen los cambios:

`git reset` viaja en el tiempo. Borra los commits de la línea de tiempo temporalmente (o definitivamente si usamos `--hard`), haciendo como si el error nunca hubiera existido. Esto es peligroso en ramas públicas porque desincroniza los repositorios de tus compañeros.

`git revert` viaja hacia adelante. Lee exactamente qué líneas de código se agregaron o eliminaron en el commit problemático, y genera un nuevo commit que aplica exactamente la acción matemática inversa (si agregaste un archivo, el revert lo borra; si borraste una línea, el revert la vuelve a escribir).

De esta manera, el historial queda intacto como un registro honesto del proyecto: se ve claramente que se cometió un error (commit original) y que posteriormente se corrigió (commit de revert). Esto asegura que nadie en el equipo sufra conflictos de historial al hacer `git pull`.