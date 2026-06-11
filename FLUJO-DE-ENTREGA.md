# Flujo de entrega de ejercicios

Esta guía explica qué debe hacer un alumno desde que empieza un ejercicio hasta que su solución queda aceptada en la rama `dev`.

El objetivo es evitar errores comunes como subir archivos a `main`, dejar archivos sueltos en `resoluciones/`, borrar archivos base o mezclar respuestas de varios alumnos.

## Idea principal

Cada alumno trabaja en su propia rama y entrega su solución mediante un Pull Request hacia `dev`.

```text
dev -> rama del alumno -> Pull Request -> revisión del profesor -> merge a dev
```

Nunca se trabaja directamente sobre `main`.

## 1. Actualizar la rama `dev`

Antes de empezar cualquier ejercicio, actualiza tu repositorio local:

```bash
git checkout dev
git pull origin dev
```

Esto evita trabajar con una versión vieja del proyecto.

## 2. Crear una rama propia

Crea una rama personal desde `dev`.

Formato recomendado:

```text
alumno/nombre-apellido/ejercicio-XX
```

Ejemplo:

```bash
git checkout -b alumno/juan-perez/ejercicio-01
```

No uses `main` ni `dev` como rama de trabajo.

## 3. Crear tu carpeta dentro de `resoluciones/`

Cada ejercicio tiene una carpeta `resoluciones/`. Dentro de esa carpeta debes crear una carpeta con tu nombre y apellido.

Formato obligatorio:

```text
basico/<area>/ejercicio-XX/resoluciones/nombre-apellido/
```

Ejemplo para lógica:

```text
basico/logica/ejercicio-01/resoluciones/juan-perez/juan-perez.js
```

Ejemplo para estructura:

```text
basico/estructura/ejercicio-01/resoluciones/juan-perez/README.md
```

Ejemplo para Git:

```text
basico/git/ejercicio-01/resoluciones/juan-perez/evidencia.md
```

## 4. Qué no se debe hacer

No subas archivos así:

```text
basico/logica/ejercicio-01/juan-perez.js
basico/logica/ejercicio-01/resoluciones/juan-perez.js
basico/logica/ejercicio-01/resoluciones/image.png
basico/estructura/ejercicio-01/assets/
```

No borres archivos base como:

```text
.gitkeep
README.md
CONTRIBUTING.md
```

No modifiques respuestas de otros alumnos.

## 5. Revisar cambios antes del commit

Antes de hacer commit, revisa qué archivos cambiaste:

```bash
git status
```

Debes confirmar que solo aparecen archivos dentro de tu carpeta personal.

Ejemplo correcto:

```text
basico/logica/ejercicio-01/resoluciones/juan-perez/juan-perez.js
```

Si ves archivos fuera de tu carpeta, corrige antes de continuar.

## 6. Hacer commit con estándar

Este repositorio usa mensajes de commit con formato profesional.

Formato:

```text
tipo(area): mensaje claro
```

Ejemplos:

```bash
git add basico/logica/ejercicio-01/resoluciones/juan-perez/
git commit -m "feat(logica): resolver ejercicio 01"
```

```bash
git commit -m "feat(estructura): resolver ejercicio 01"
git commit -m "feat(git): agregar evidencia del ejercicio 01"
git commit -m "fix(logica): corregir calculo de puntaje"
```

Tipos comunes:

| Tipo | Uso |
| --- | --- |
| `feat` | Agregar una solución nueva. |
| `fix` | Corregir un error. |
| `docs` | Cambiar documentación. |
| `style` | Ajustar formato sin cambiar lógica. |
| `refactor` | Reorganizar sin cambiar resultado. |
| `test` | Agregar pruebas o evidencias. |
| `chore` | Tareas de mantenimiento. |

## 7. Subir la rama

Después del commit, sube tu rama a GitHub:

```bash
git push -u origin alumno/juan-perez/ejercicio-01
```

Si ya habías subido esa rama antes, después solo necesitas:

```bash
git push
```

## 8. Crear Pull Request

En GitHub:

1. Entra al repositorio.
2. Haz clic en `Compare & pull request`.
3. Verifica la rama base.

Debe quedar así:

```text
base: dev
compare: alumno/juan-perez/ejercicio-01
```

No debe quedar así:

```text
base: main
```

Los Pull Requests hacia `main` serán rechazados.

## 9. Completar la descripción del Pull Request

El Pull Request debe explicar:

- Qué ejercicio resolviste.
- Qué archivos agregaste.
- Cómo probaste o validaste la solución.
- Si tuviste algún problema.

Ejemplo:

```text
Resolví el ejercicio 01 de lógica.
Agregué mi solución en resoluciones/juan-perez/.
Validé el ranking con varios equipos y revisé que los puntos se ordenaran correctamente.
```

## 10. Esperar revisión del profesor

El profesor revisará:

- El PR apunta a `dev`.
- No apunta a `main`.
- La entrega está dentro de `resoluciones/nombre-apellido/`.
- No hay archivos sueltos en `resoluciones/`.
- No se borraron archivos base.
- No se modificaron respuestas de otros alumnos.
- El código o la estructura cumple el objetivo del ejercicio.
- El commit usa un mensaje claro.

## 11. Si el ejercicio está correcto

El profesor aprobará el PR y hará merge hacia `dev`.

Cuando eso pase, tu ejercicio queda entregado oficialmente.

## 12. Si el ejercicio tiene errores

El profesor dejará comentarios en el Pull Request.

Debes corregir en la misma rama:

```bash
git status
git add basico/logica/ejercicio-01/resoluciones/juan-perez/
git commit -m "fix(logica): corregir validacion de ranking"
git push
```

No necesitas abrir otro PR si sigues usando la misma rama. GitHub actualiza el Pull Request automáticamente.

## 13. Checklist antes de pedir revisión

Antes de pedir revisión, confirma:

- Estoy trabajando en mi rama personal.
- Mi rama salió desde `dev`.
- Mi Pull Request apunta a `dev`.
- No abrí PR hacia `main`.
- Mi entrega está en `resoluciones/nombre-apellido/`.
- No dejé archivos sueltos en `resoluciones/`.
- No borré `.gitkeep`.
- No modifiqué archivos base sin autorización.
- No modifiqué respuestas de otros alumnos.
- Mi commit usa el estándar del repositorio.
- Revisé mi solución antes de subirla.

## Resumen rápido

```bash
git checkout dev
git pull origin dev
git checkout -b alumno/juan-perez/ejercicio-01
```

Crear solución en:

```text
basico/<area>/ejercicio-XX/resoluciones/juan-perez/
```

Luego:

```bash
git status
git add basico/<area>/ejercicio-XX/resoluciones/juan-perez/
git commit -m "feat(area): resolver ejercicio XX"
git push -u origin alumno/juan-perez/ejercicio-XX
```

Finalmente, abrir Pull Request hacia:

```text
dev
```
