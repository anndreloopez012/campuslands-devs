# Resolución de Ejercicio: Clonar Base de Torneo RPG

**Desarrollador:**    Selvin Lem

---

## 1. Breve explicación d

Para abordar este problema, dividí la tarea en tres fases críticas:
1. **Fase de Réplica (Clonación):** Descargar de forma segura el estado actual del proyecto para trabajar en un entorno local aislado.
2. **Fase de Reconocimiento (Exploración):** Usar herramientas de diagnóstico de Git (`status`, `branch`, `log`) para identificar en qué punto de la línea de tiempo me encuentro y verificar el repositorio antes de realizar cambios.
3. **Fase de Aislamiento (Ramificación):** Siguiendo las instrucciones de trabajo colaborativo, aseguré no trabajar sobre la rama principal o `dev` directamente, sino crear propia para proteger el código base.

---

# Solución Paso a Paso

A continuación, se muestra el proceso realizado en consola junto con la explicación de cada comando utilizado para la auditoría y preparación del entorno del Torneo RPG.

---

### paso 1: Clonar repositorio
```
git clone https://github.com/anndreloopez012/campuslands-devs.git

```
### Explicación:
El comando git clone descarga una copia exacta del repositorio remoto  y la guarda en una nueva carpeta local en mi computadora, manteniendo todo el historial de versiones. 

---

## Paso 2: Acceder a la carpeta clonada

### Comando

```
cd campuslands-devs      
```

### Explicación

El comando cd campus-devs me permite ingresar a la carpeta que Git acaba de crear. Toda acción o comando de Git que ejecute a partir de ahora afectará únicamente a este proyecto.

---
## Paso 3: Verificar el estado inicial del repositorio

### Comando

```
git status    
```

### Explicación

El comando git status se utilizó para realizar un diagnóstico inicial. Nos permite identificar en qué rama nos encontramos por defecto tras la clonación (usualmente main) y comprobar que el árbol de trabajo esté limpio, es decir, sin cambios pendientes por guardar.

---
## Paso 4: Cambiar a la rama de desarrollo (dev)

### Comando

```
git checkout dev  
```

### Explicación

El comando git checkout dev nos mueve de la rama principal a la rama dev, dev es la rama base donde se integra el trabajo del equipo antes de ir a producción, y es el punto de partida obligatorio para las tareas de los desarrolladores.

---
## Paso 5: Crear rama propio

### Comando

```
git branch alumno/selvin-lem
```

### Explicación

El comando git branch cumple la función de crea una nueva rama independiente.

Esto asegura el aislamiento: cualquier cambio que haga a partir de ahora no afectará a la rama dev ni a mis compañeros hasta que yo decida compartirlo.

---
## Paso 6: Cambiar a la rama de desarrollo (dev)

### Comando

```
git checkout alumno/selvin-lem
```

### Explicación
git checkout ayuda a saltarnbos dentro de la rama que se creó, en este caso alumno/selvin-lem.

---
## Paso 7: Validar el estadoo de rama

### Comando

```
git status
```

### Explicación

Al ejecutar git status se confirma si de verdad estamos en la rama que se creó para trabajar con tranquilidad.

---