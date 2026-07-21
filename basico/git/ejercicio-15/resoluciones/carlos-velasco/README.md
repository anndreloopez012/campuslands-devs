# Checklist Final de Flujo Profesional

Este ejercicio documenta la aplicación de un flujo de trabajo profesional utilizando **Git** para gestionar el desarrollo de una pequeña solución dentro de un proyecto colaborativo. La práctica simula el proceso que sigue un desarrollador antes de entregar una contribución, integrando conceptos como creación de ramas, registro de cambios, sincronización con la rama principal de desarrollo y validación final.

Más que memorizar comandos, el objetivo es comprender cómo cada acción dentro de Git contribuye a mantener un historial organizado, evitar conflictos y garantizar que las entregas sean consistentes con el estado más reciente del proyecto.

---

# Objetivo del ejercicio

Aplicar un flujo de trabajo profesional utilizando Git para preparar una entrega lista para revisión e integración.

La solución debe contemplar las siguientes actividades:

- Crear una rama de trabajo a partir de `dev`.
- Desarrollar una solución independiente.
- Registrar los cambios mediante commits descriptivos.
- Sincronizar la rama de trabajo con la rama `dev`.
- Publicar la rama en el repositorio remoto.
- Verificar que la entrega cumple con todos los requisitos antes de su integración.

Este proceso representa una práctica común en equipos de desarrollo que trabajan bajo metodologías colaborativas.

---

# Descripción del proceso

El ejercicio se resolvió siguiendo un flujo de trabajo organizado y similar al utilizado en proyectos reales.

Inicialmente se actualizó la rama `dev` para asegurar que el entorno de trabajo partiera de la versión más reciente del proyecto.

Posteriormente se creó una rama personal donde se desarrolló la solución solicitada sin afectar el trabajo del resto del equipo.

Una vez completada la implementación, los archivos fueron agregados al área de preparación (*Staging Area*) y registrados mediante un commit con un mensaje claro y descriptivo.

Antes de publicar la contribución, se sincronizó nuevamente la rama de trabajo con `dev` utilizando `git pull`, garantizando que la solución estuviera basada en la versión más reciente del proyecto y reduciendo la posibilidad de conflictos futuros.

Finalmente, la rama fue publicada mediante `git push` y se realizó una revisión general utilizando comandos de verificación para confirmar que la entrega estaba lista para ser revisada mediante un Pull Request.

---

# Herramientas utilizadas

## Git

Git es un sistema de control de versiones distribuido diseñado para registrar cambios y facilitar el trabajo colaborativo.

Durante este ejercicio fue utilizado para gestionar todo el ciclo de desarrollo de la solución, incluyendo:

- creación de ramas;
- administración del historial;
- sincronización con el repositorio remoto;
- actualización con la rama de desarrollo;
- validación del estado del proyecto.

---

## GitHub

GitHub proporciona una plataforma para alojar repositorios Git y administrar contribuciones mediante Pull Requests.

Aunque el ejercicio se centra principalmente en Git, el flujo implementado está pensado para finalizar con una solicitud de integración dentro de GitHub.

---

## PowerShell

PowerShell fue utilizada como consola para ejecutar los comandos de Git y administrar el repositorio desde la línea de comandos.

Su utilización facilita la automatización de tareas y el seguimiento del flujo de trabajo del desarrollador.

---

# Explicación técnica de los comandos

## `git checkout -b`

Crea una nueva rama y cambia automáticamente a ella.

```bash
git checkout -b mi-rama
```

Permite desarrollar nuevas funcionalidades sin modificar directamente la rama principal de desarrollo.

---

## `git add`

Agrega archivos al área de preparación (*Staging Area*).

```bash
git add .
```

Este comando permite seleccionar qué cambios formarán parte del siguiente commit.

---

## `git commit`

Registra permanentemente los cambios preparados dentro del historial del proyecto.

```bash
git commit -m "Agregar solución ejercicio 15"
```

Cada commit representa una unidad lógica de trabajo y facilita el seguimiento de la evolución del proyecto.

---

## `git pull`

Actualiza la rama actual descargando e integrando los cambios existentes en el repositorio remoto.

```bash
git pull origin dev
```

En este ejercicio fue utilizado para sincronizar la rama personal con los cambios más recientes de `dev` antes de entregar la solución.

---

## `git push`

Publica la rama local en el repositorio remoto.

```bash
git push origin mi-rama
```

Permite compartir la contribución con el resto del equipo y preparar su revisión.

---

## `git status`

Muestra el estado actual del repositorio.

Permite comprobar:

- archivos modificados;
- archivos preparados para commit;
- conflictos pendientes;
- estado de sincronización de la rama.

Es uno de los comandos más utilizados durante el desarrollo para verificar que el repositorio se encuentra en condiciones adecuadas.

---

## `git log --oneline`

Presenta un resumen del historial de commits.

```bash
git log --oneline
```

Facilita comprobar que la solución quedó registrada correctamente antes de ser entregada.

---

# Solución implementada

La solución siguió un flujo de trabajo profesional orientado a minimizar errores durante la integración de cambios.

Se creó una rama independiente desde `dev`, donde se desarrolló la solución solicitada.

Posteriormente se registraron los cambios mediante un commit descriptivo y se sincronizó la rama con la versión más reciente de `dev` para evitar posibles conflictos.

Finalmente, la rama fue publicada en el repositorio remoto y se realizó una revisión utilizando comandos de validación para comprobar que todos los archivos se encontraban correctamente organizados y que el repositorio no presentaba cambios pendientes.

---

# Comandos utilizados

```bash
# Actualizar la rama de desarrollo
git checkout dev
git pull origin dev

# Crear una nueva rama de trabajo
git checkout -b carlos-velasco-ejercicio15

# Verificar el estado del repositorio
git status

# Agregar los cambios
git add .

# Registrar la solución
git commit -m "Agregar solución ejercicio 15"

# Actualizar nuevamente desde dev
git pull origin dev

# Publicar la rama
git push origin carlos-velasco-ejercicio15

# Revisar el historial
git log --oneline

# Verificar estado final
git status
```

---

# Checklist de entrega profesional

Antes de considerar finalizada la entrega se verificó el siguiente listado:

| Validación | Estado |
|------------|--------|
| Rama creada desde `dev` | ✅ |
| Carpeta personal creada correctamente | ✅ |
| Solución ubicada en la ruta solicitada | ✅ |
| Commit con mensaje descriptivo | ✅ |
| Rama sincronizada con `dev` | ✅ |
| Cambios publicados mediante `git push` | ✅ |
| Sin conflictos pendientes | ✅ |
| `git status` limpio | ✅ |
| Historial de commits verificado | ✅ |
| Proyecto listo para Pull Request | ✅ |

---

# Flujo de trabajo aplicado

```plaintext
Repositorio
      │
      ▼
Actualizar rama dev
      │
      ▼
Crear rama personal
      │
      ▼
Desarrollar solución
      │
      ▼
git add
      │
      ▼
git commit
      │
      ▼
git pull origin dev
      │
      ▼
Resolver conflictos (si existen)
      │
      ▼
git push
      │
      ▼
Validación final
      │
      ▼
Pull Request
```

---

# Validación de la solución

Para comprobar que el ejercicio fue resuelto correctamente se verificó que:

- La rama fue creada desde `dev`.
- La solución se encuentra dentro de la carpeta `resoluciones/nombre-apellido/`.
- El commit documenta claramente los cambios realizados.
- La rama fue sincronizada con la última versión de `dev`.
- El repositorio no presenta conflictos ni cambios pendientes.
- La rama fue publicada correctamente en el repositorio remoto.
- La solución se encuentra lista para ser revisada mediante un Pull Request.

---

# Conclusión

Este ejercicio permitió integrar en un único flujo de trabajo las operaciones fundamentales utilizadas durante el desarrollo colaborativo con Git.

La práctica demuestra la importancia de mantener un historial organizado mediante commits descriptivos, trabajar sobre ramas independientes, sincronizar regularmente la rama de desarrollo y validar el estado del repositorio antes de entregar una contribución.

Seguir este procedimiento reduce significativamente la aparición de conflictos, mejora la trazabilidad de los cambios y facilita el trabajo colaborativo dentro de proyectos de desarrollo de software de cualquier tamaño.

---

## Autor

**Carlos Velasco**