# Ejercicio: Deshacer Cambios con `git revert`

## Objetivo

Aprender a deshacer un cambio realizado en un repositorio utilizando el comando `git revert`, sin eliminar el historial de commits. Este método es la forma recomendada para revertir cambios en proyectos compartidos, ya que mantiene un registro completo de todas las modificaciones.

---

# Objetivos de aprendizaje

Al finalizar este ejercicio podrás:

- Crear un commit con un cambio incorrecto.
- Revertir ese cambio utilizando `git revert`.
- Comprender la diferencia entre `git revert` y `git reset`.
- Revisar el historial de cambios con `git log`.
- Entender por qué `git revert` conserva el historial del proyecto.

---

# Escenario

Supongamos que en un proyecto se agrega por error un automóvil que no debería formar parte del catálogo.

Ejemplo del archivo `autos.js`:

```javascript
const autos = [
    { marca: "Ferrari", modelo: "SF90" },
    { marca: "Bugatti", modelo: "Chiron" },

    // Auto agregado por error
    { marca: "Auto Incorrecto", modelo: "Prueba" }
];
```

El objetivo será eliminar este cambio sin borrar el historial del repositorio.

---

# Paso 1. Crear el commit con el cambio incorrecto

Agregar los cambios al área de preparación:

```bash
git add .
```

Crear el commit:

```bash
git commit -m "Agregar auto incorrecto al catálogo"
```

Verificar el historial:

```bash
git log --oneline
```

Ejemplo:

```text
a35f7b2 Agregar auto incorrecto al catálogo
92d5c18 Crear catálogo inicial
```

---

# Paso 2. Revertir el commit

Para deshacer el cambio sin eliminar el historial, utilizar:

```bash
git revert HEAD
```

También es posible indicar el identificador del commit:

```bash
git revert a35f7b2
```

Git abrirá el editor de texto para confirmar el mensaje del nuevo commit.

Guardar y cerrar el editor para completar la operación.

---

# Paso 3. No utilizar `git reset`

Durante este ejercicio **no debe utilizarse**:

```bash
git reset
```

Ni tampoco:

```bash
git reset --hard
```

El propósito es aprender a deshacer cambios sin modificar el historial existente.

---

# Paso 4. Revisar el historial

Consultar nuevamente el historial del repositorio:

```bash
git log --oneline
```

Resultado esperado:

```text
b71c2f4 Revert "Agregar auto incorrecto al catálogo"
a35f7b2 Agregar auto incorrecto al catálogo
92d5c18 Crear catálogo inicial
```

Observa que el commit original continúa existiendo, pero ahora hay un nuevo commit que revierte sus cambios.

---

# ¿Por qué `git revert` conserva el historial?

El comando `git revert` **no elimina ni modifica commits existentes**. En su lugar, crea un **nuevo commit** que aplica los cambios inversos al commit seleccionado.

Esto ofrece varias ventajas:

- Mantiene un historial completo de todas las acciones realizadas.
- Permite identificar cuándo se introdujo un cambio y cuándo fue revertido.
- Facilita las auditorías y el seguimiento del proyecto.
- Evita problemas al trabajar con repositorios compartidos.
- No reescribe el historial, por lo que es seguro utilizarlo incluso después de haber compartido los cambios con otros colaboradores.

En contraste, `git reset` puede mover el puntero de la rama y, dependiendo de la opción utilizada, eliminar o modificar el historial visible, lo que puede generar conflictos cuando varias personas trabajan sobre el mismo repositorio.

---

# Comandos utilizados

```bash
git add .
git commit -m "Agregar auto incorrecto al catálogo"

git log --oneline

git revert HEAD

git log --oneline
```

---

# Resultado esperado

Al finalizar el ejercicio habrás aprendido a:

- Crear un commit con un cambio incorrecto.
- Revertir ese cambio utilizando `git revert`.
- Mantener un historial limpio y completo.
- Consultar el historial de commits con `git log`.
- Comprender por qué `git revert` es la opción recomendada para deshacer cambios en proyectos colaborativos.

---

# Conclusión

`git revert` es la herramienta adecuada para deshacer cambios cuando el historial ya forma parte del trabajo compartido. En lugar de eliminar información, crea un nuevo commit que revierte los cambios anteriores, preservando el historial del proyecto y facilitando la colaboración, el seguimiento y la recuperación de información cuando sea necesario.
