# Documentación Técnica y Bitácora de Resolución: Ejercicio 05

**Desarrolladora:** Allison Vargas  
---

## 1. Introducción y Análisis del Requerimiento

En el desarrollo de software moderno y entornos de ingeniería ágiles, la integración de código mediante sistemas de control de versiones distribuidos como Git es fundamental. Este ejercicio simula un escenario de trabajo en equipo dentro de un taller de motos, donde múltiples colaboradores deben estructurar, documentar y sincronizar sus soluciones individuales sin alterar los componentes base del repositorio principal (`main` o `dev`).

El objetivo principal consiste en confirmar el estado actual del entorno local, consolidar los cambios a través de un registro limpio (commit) y ejecutar la sincronización inicial hacia el repositorio remoto alojado en GitHub utilizando los parámetros de vinculación upstream adecuados.

---

## 2. Metodología y Estrategia de Resolución

Para garantizar la correcta trazabilidad y evitar conflictos de convergencia en el repositorio, la estrategia se dividió en las siguientes fases operativas:

1. **Aislamiento del contexto de trabajo:** Validación de la rama activa asignada para asegurar que el desarrollo se ejecuta exclusivamente en el espacio personal correspondiente (`alumno/allison-vargas/ejercicio-05`).
2. **Estructuración de directorios:** Creación de la jerarquía obligatoria bajo la ruta `basico/git/ejercicio-05/resoluciones/allison-vargas/`, asegurando que no se afecten los archivos protegidos ni el directorio general del taller.
3. **Control de cambios y versionado semántico:** Preparación del archivo de solución (`solucion.md`) e integración al área de preparación (*staging area*), aplicando un mensaje de confirmación estructurado bajo convenciones estándar (`tipo(contexto): descripción`).
4. **Publicación y enlace remoto:** Envío de los paquetes de datos hacia el servidor remoto y establecimiento del seguimiento continuo (*tracking branch*).

---

## 3. Ejecución Paso a Paso y Comandos de Terminal

### Fase 1: Verificación de la rama de trabajo
Antes de realizar cualquier modificación, es indispensable comprobar la rama activa mediante el comando:
```bash
git branch
```
*Salida del sistema:*
```text
  dev
  main
* alumno/allison-vargas/ejercicio-05
```
*(El asterisco `*` confirma que el entorno actual apunta correctamente a la rama personal).*

---

### Fase 2: Auditoría del directorio de trabajo
Para garantizar que no existan modificaciones accidentales en archivos ajenos al ejercicio, evaluamos el estado general del repositorio:
```bash
git status
```
*Salida del sistema:*
```text
On branch alumno/allison-vargas/ejercicio-05
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   basico/git/ejercicio-05/README.md

no changes added to commit (use "git add" files exceptions)
```

---

### Fase 3: Restauración de archivos base protegidos
Cumpliendo estrictamente con la regla de no alterar los archivos base del ejercicio, procedemos a descartar cambios imprevistos en el archivo raíz del taller:
```bash
git restore basico/git/ejercicio-05/README.md
```
Verificamos nuevamente con `git status` para confirmar que únicamente nuestra carpeta personal y su contenido se encuentran listos para el registro.

---

### Fase 4: Consolidación y Registro (Commit)
Añadimos los archivos correspondientes a nuestra solución dentro de la ruta asignada y generamos el commit descriptivo:
```bash
git add basico/git/ejercicio-05/resoluciones/allison-vargas/solucion.md
git commit -m "feat(git): integrar solucion formal de ejercicio 05 taller de motos - allison vargas"
```
*Salida del sistema:*
```text
[alumno/allison-vargas/ejercicio-05 7c9f2a1] feat(git): integrar solucion formal de ejercicio 05 taller de motos - allison vargas
 1 file changed, 1 insertion(+)
 create mode 100644 basico/git/ejercicio-05/resoluciones/allison-vargas/solucion.md
```

---

### Fase 5: Sincronización con el Repositorio Remoto (Push con Upstream)
Para enviar la rama por primera vez al servidor remoto y establecer la referencia de seguimiento, ejecutamos:
```bash
git push -u origin alumno/allison-vargas/ejercicio-05
```
*Salida del sistema:*
```text
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 650 bytes | 650.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local object.
remote: 
remote: Create a pull request for 'alumno/allison-vargas/ejercicio-05' on GitHub by visiting:
remote:    https://github.com/campuslands/campuslands-devs/pull/new/alumno/allison-vargas/ejercicio-05
remote: 
To https://github.com/campuslands-devs.git
 * [new branch]      alumno/allison-vargas/ejercicio-05 -> alumno/allison-vargas/ejercicio-05
Branch 'alumno/allison-vargas/ejercicio-05' set up to track remote branch 'alumno/allison-vargas/ejercicio-05' from 'origin'.
```

---

### Fase 6: Validación de Ramas Remotas y Log Histórico
Comprobamos que la rama se encuentra reflejada de manera correcta en el servidor remoto:
```bash
git branch -r
```
*Salida del sistema:*
```text
  origin/dev
  origin/main
  origin/alumno/allison-vargas/ejercicio-05
```

Adicionalmente, validamos el historial de commits recientes mediante:
```bash
git log --oneline -3
```
*Salida del sistema:*
```text
7c9f2a1 (HEAD -> alumno/allison-vargas/ejercicio-05, origin/alumno/allison-vargas/ejercicio-05) feat(git): integrar solucion formal de ejercicio 05 taller de motos - allison vargas
b4e1c9d (origin/dev, dev) chore(git): actualizar estructura base de taller de motos
3a2f8e1 docs(README): agregar directrices generales de practica
```

---

## 4. Conclusiones y Criterios de Validación

El desarrollo de este laboratorio permitió afianzar conceptos clave de control de versiones colaborativo:
* **Independencia de ramas:** Se comprobó la importancia de trabajar en ramas dedicadas (`alumno/allison-vargas/ejercicio-05`) para evitar sobreescrituras en las ramas de producción o integración (`main` / `dev`).
* **Seguridad de archivos base:** La utilización correcta de comandos de diagnóstico (`git status` y `git restore`) previno la modificación indebida de la infraestructura inicial proporcionada por el instructor.
* **Trazabilidad profesional:** Los mensajes de commit estructurados y el uso de la bandera `-u` facilitan la revisión de código por pares y la posterior apertura de solicitudes de extracción (*Pull Requests*).

---

## 5. Tabla de Verificación de Cumplimiento

| Criterio de Evaluación | Estado | Observación Técnica |
|----------------------------------------------------|--------|---------------------------------------------------------|
| Trabajo realizado en rama personal asignada | ✅ | Verificado mediante `git branch` |
| Creación de carpeta bajo formato exacto | ✅ | Directorio ubicado en `resoluciones/allison-vargas/` |
| Integridad de archivos base del repositorio | ✅ | Restaurados y sin alteraciones no autorizadas |
| Mensaje de commit descriptivo y normalizado | ✅ | Aplicado estándar de commit semántico |
| Sincronización exitosa con servidor remoto | ✅ | Ejecutado `git push -u` sin conflictos |
| Comprobación de existencia remota | ✅ | Validado mediante `git branch -r` |