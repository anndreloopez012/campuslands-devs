# Resolución de Ejercicio: Rama personal para jugador MOBA

**Desarrollador:**    Selvin Lem

---

## 1. Breve explicación del procesos

Para resolver este ejercicio, seguí un flujo de trabajo basado en el aislamiento de ramas para mantener la integridad del repositorio principal:

1. **Sincronización:** Actualizar el entorno local para trabajar sobre la versión más reciente del código.
2. **Aislamiento:** Crear una rama específica desde dev para evitar conflictos directos con el flujo principal del proyecto.
3. **Validación:** Asegurar que el entorno de trabajo esté limpio y posicionado correctamente mediante comandos de diagnóstico.
---

# Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado para la auditoría y preparación del entorno del Torneo RPG.

---

### paso 1: Cambiar a la rama de desarrollo
```
git checkout dev

```
### Explicación:
Este comando asegura que me encuentre en la rama base (dev) antes de intentar crear mi propia rama, garantizando que el punto de partida sea el correcto.

---

## Paso 2: Actualizar el repositorio local

### Comando

```
git pull origin dev   
```

### Explicación

Ejecuto pull para traer los cambios más recientes del servidor y evitar conflictos de versiones al momento de integrar mi trabajo posteriormente.

---
## Paso 3: Crear rama personal

### Comando

```
git branch alumno/selvin-lem/ejercicio-03 
```

### Explicación

Utilizo git branch para crear mi espacio de trabajo aislado, siguiendo la nomenclatura requerida que identifica al alumno y al ejercicio específico.

---
## Paso 4: Cambiar a la rama creada

### Comando

```
git checkout alumno/selvin-lem/ejercicio-03
```

### Explicación

Con este comando desplazo el puntero de trabajo (HEAD) hacia mi nueva rama personal para comenzar a trabajar en ella.

---
## Paso 5: Validar entorno de trabajo

### Comando

```
git status
```

### Explicación

Verifico que la rama actual sea la correcta y confirmo que no existan cambios pendientes, dejando el área de trabajo lista para realizar la entrega.
---