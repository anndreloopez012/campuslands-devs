# Resolución de Ejercicio: Rama Personal para Jugador MOBA

**Desarrollador:** Selvin Lem  
**Rama de trabajo:** `alumno/selvin-lem/ejercicio-03`  

---

## 1. Breve explicación del proceso

Para abordar este problema de trabajo colaborativo en el entorno de videojuegos MOBA, dividí la tarea en tres fases estratégicas de control de versiones:
1. **Fase de Sincronización (Actualización):** Asegurar que mi espacio local cuente con las últimas mecánicas, parches y cambios que el equipo ha subido a la rama de desarrollo central (`dev`).
2. **Fase de Aislamiento (Ramificación con Formato):** Crear y posicionarme en una rama exclusiva para mi rol de desarrollador usando la nomenclatura estricta requerida (`alumno/nombre-apellido/ejercicio-03`), garantizando que la rama principal permanezca intacta.
3. **Fase de Confirmación Segura (Registro del Progreso):** Guardar los archivos de resolución de manera ordenada dentro de mi carpeta personal, verificando el estado del árbol de trabajo antes y después de cada acción para evitar fugas de código o conflictos.

---

# Solución Paso a Paso

A continuación, se detalla el flujo de comandos ejecutados en la consola para preparar el entorno de desarrollo del módulo de jugadores MOBA.

---

### paso 1:Cambiar a la rama de desarrollo base (dev)
```
git checkout dev

```
### Explicación:
El comando git checkout dev nos traslada a la rama de integración del equipo. Es fundamental posicionarse aquí antes de iniciar cualquier tarea, ya que dev contiene el código base más reciente del proyecto sobre el cual debemos construir nuestra solución.

---

## Paso 2: Traer las últimas actualizaciones del servidor

### Comando

```
git pull origin dev  
```

### Explicación

El comando git pull descarga y fusiona de inmediato los últimos cambios que otros desarrolladores hayan subido al repositorio remoto en la rama dev. Esto evita desfases de código y minimiza la aparición de conflictos de fusión (merge conflicts) más adelante.

---
## Paso 3: Crear y saltar a la rama de trabajo personalizada

### Comando

```
git checkout -b alumno/selvin-lem/ejercicio-03
```

### Explicación

Utilicé el parámetro -b junto a git checkout para realizar dos acciones clave en una sola línea: crea la nueva rama independiente bajo el formato estricto alumno/selvin-lem/ejercicio-03 y automáticamente me mueve dentro de ella. A partir de este momento, todo lo que programe estará completamente aislado.

---
## Paso 4: Validar el estado del espacio de trabajo y la ruta actual

### Comando

```
git status
```

### Explicación

Ejecuto git status como herramienta de diagnóstico rápido. El sistema nos confirma en texto que nos encontramos exitosamente en la rama alumno/selvin-lem/ejercicio-03 y que el árbol de trabajo está limpio, listo para recibir los nuevos archivos de resolución sin arrastrar cambios antiguos.

---
## Paso 5: Confirmar los cambios de manera profesional

### Comando

```
git add basico/git/ejercicio-03/resoluciones/selvin-lem/
git commit -m "feat: registrar entorno y rama de trabajo para modulo de jugador MOBA"
```

### Explicación

Primero, indexo únicamente el contenido de mi carpeta personal con git add, respetando la regla de no tocar archivos base ni soluciones ajenas. Posteriormente, ejecuto git commit con un mensaje descriptivo y profesional bajo el estándar de la industria, dejando claro qué funcionalidad añade este cambio al historial del proyecto.

---
## Paso 6: Verificación del historial de confirmaciones (Log)

### Comando

```
git log --oneline -n 1
```

### Explicación
El comando git log --oneline -n 1 nos muestra el último registro resumido del historial. Sirve como validación final para auditar que el commit se guardó correctamente con su identificador único (Hash) y el mensaje asignado en el paso anterior.

---