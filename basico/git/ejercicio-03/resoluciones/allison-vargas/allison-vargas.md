# Bitácora de Desarrollo: Configuración de Rama y Aislamiento en el Ecosistema MOBA

## 1. Introducción y Planteamiento del Escenario

En el desarrollo de software colaborativo aplicado a plataformas de videojuegos en línea (tipo MOBA), múltiples desarrolladores iteran simultáneamente sobre componentes críticos como balance de héroes, emparejamiento (matchmaking) y estadísticas de partida. 

Modificar directamente la línea base de producción (`main`) o carecer de una estrategia de ramificación limpia provoca colisiones de código y fallos críticos en el servidor. Este ejercicio simula la incorporación de un nuevo colaborador al equipo de desarrollo del MOBA, cuyo primer reto consiste en aislar su espacio de trabajo utilizando una rama de características derivada exclusivamente de la rama de integración (`dev`).

---

## 2. Análisis del Problema y Requisitos de Arquitectura

Para resolver satisfactoriamente la tarea, se identificaron los siguientes parámetros operativos y restricciones:

* **Origen de Rama:** La bifurcación debe nacer estrictamente desde `dev`, omitiendo la rama `main` para preservar la estabilidad del software liberado.
* **Nomenclatura Estandarizada:** La ruta de entrega local debe respetar rigurosamente la jerarquía `basico/git/ejercicio-03/resoluciones/allison-vargas/`.
* **Trazabilidad y Evidencia:** Cada comando ejecutado debe estar justificado bajo una perspectiva analítica de ingeniería, demostrando comprensión del árbol de commits.

---

## 3. Proceso de Implementación Técnico (Paso a Paso)

### Fase Inicial: Sincronización con el Servidor y Apuntamiento en Entorno de Desarrollo
Antes de generar una nueva línea de cambios, es mandatorio sincronizar el estado local con el repositorio remoto para capturar las últimas actualizaciones del equipo.

Comando ejecutado:
git checkout dev
git pull origin dev

Análisis técnico:
Desplazarse a `dev` garantiza que la línea base de trabajo contenga los avances integrados más recientes. El comando `git pull` previene el aislamiento prematuro y reduce drásticamente la probabilidad de futuros conflictos de fusión (merge conflicts).

---

### Fase de Bifurcación: Creación de la Rama Personalizada
Con el entorno base sincronizado, se procede a levantar el espacio de trabajo individual aplicando la nomenclatura requerida por los estándares del equipo.

Comando ejecutado:
git checkout -b alumno/allison-vargas/ejercicio-03

Análisis técnico:
El modificador `-b` agiliza la operación combinando la creación de la rama y el cambio inmediato de contexto (head). La estructura `alumno/allison-vargas/ejercicio-03` otorga visibilidad directa al equipo de control de calidad sobre quién audita y resuelve el requerimiento actual.

---

### Fase de Verificación Estructural y Creación de Artefactos
Para asegurar la integridad del árbol de directorios antes de registrar cambios, se valida el estado actual del repositorio.

Comando ejecutado:
git status

Análisis técnico:
Permite confirmar que el directorio de trabajo se encuentra limpio y que el sistema operativo reconoce el apuntamiento en la nueva rama de características. A continuación, se genera la carpeta personal de entrega mediante la herramienta de automatización local.

Comando de creación de ruta y archivo:
New-Item -Path "basico/git/ejercicio-03/resoluciones/allison-vargas/README.md" -ItemType File -Force

---

### Fase de Empaquetado y Versionado Profesional (Commit)
Una vez redactada esta documentación técnica en el archivo de resolución, se procede a preparar el paquete de cambios para su inclusión en el historial del sistema de control de versiones.

Comando ejecutado:
git add basico/git/ejercicio-03/resoluciones/allison-vargas/README.md
git commit -m "feat(ejercicio-03): estructurar documentación y aislamiento de rama MOBA - Allison Vargas"

Análisis técnico:
Se selecciona explícitamente el archivo propio evitando agregar modificaciones ajenas (staging selectivo). El mensaje de confirmación implementa las especificaciones de commits convencionales (`feat`), facilitando la lectura automatizada del registro de cambios del proyecto.

---

### Fase de Publicación Remota
Para hacer visibles los avances ante la revisión del panel técnico, se sincroniza la rama local con el repositorio centralizado en GitHub.

Comando ejecutado:
git push -u origin alumno/allison-vargas/ejercicio-03

Análisis técnico:
El parámetro `-u` (upstream) enlaza la rama local con su contraparte remota, simplificando ejecuciones futuras de comandos de sincronización mediante un simple `git push` o `git pull`.

---

## 4. Validación y Pruebas de Integridad del Flujo

Para comprobar la correcta ejecución de la tarea, se auditaron los registros locales del historial de versiones.

Comando de auditoría:
git log --oneline -n 3
git branch -a

Resultados obtenidos en consola:
* Visualización del commit actual apuntando correctamente a `alumno/allison-vargas/ejercicio-03`.
* Ausencia de alteraciones en la rama `main` o `dev`.
* Integridad estructural de la carpeta de entregables sin interferir con las rutas de otros compañeros.

---

## 5. Conclusiones y Buenas Prácticas del Flujo MOBA

La correcta segmentación de ramas en entornos de desarrollo basados en Git refleja una analogía directa con la distribución de roles dentro de una partida de MOBA: cada integrante ejerce su labor en un carril asignado (top, mid, jungle) sin invadir el espacio operativo de los demás jugadores. La sincronización oportuna mediante `pull` y el respeto absoluto hacia la rama estática (`main`) garantizan que el producto final funcione de manera robusta y escalable.