# Pull Request de Laboratorio Químico

Este ejercicio documenta el flujo de trabajo para preparar una contribución utilizando **Git** mediante un **Pull Request (PR)**. La práctica simula un entorno de desarrollo colaborativo en un proyecto relacionado con fórmulas químicas, donde cada integrante trabaja de forma independiente sobre una rama y posteriormente propone la integración de sus cambios al repositorio principal.

El objetivo no consiste únicamente en ejecutar comandos de Git, sino en comprender el proceso completo que sigue una contribución dentro de un equipo de desarrollo: creación de una rama, desarrollo de la solución, registro de cambios, publicación en el repositorio remoto y elaboración de una descripción clara para el Pull Request.

---

# Objetivo del ejercicio

Preparar una contribución siguiendo un flujo de trabajo basado en ramas y Pull Requests, simulando un entorno profesional de desarrollo colaborativo.

La solución debe cumplir con las siguientes actividades:

- Crear una rama de trabajo a partir de `dev`.
- Agregar la solución dentro de la carpeta correspondiente.
- Registrar los cambios mediante un commit descriptivo.
- Publicar la rama en el repositorio remoto.
- Elaborar una descripción del Pull Request indicando el objetivo, los cambios realizados y la validación efectuada.

Este procedimiento garantiza que las contribuciones sean revisadas antes de incorporarse a la rama principal del proyecto.

---

# Descripción del proceso

Para resolver el ejercicio se siguió un flujo de trabajo basado en las buenas prácticas de control de versiones con Git.

Inicialmente se creó una rama personal desde la rama `dev`, permitiendo desarrollar la solución de forma aislada sin afectar el trabajo de otros colaboradores.

Posteriormente se creó la carpeta personal dentro del directorio `resoluciones/`, respetando el formato solicitado por el ejercicio, y se agregó el archivo con la solución desarrollada.

Una vez finalizado el trabajo, los cambios fueron preparados mediante el área de *staging* y registrados con un commit descriptivo que documenta el propósito de la modificación.

Después del commit, la rama fue publicada en el repositorio remoto utilizando `git push`, dejando la contribución disponible para revisión.

Finalmente, se redactó la descripción del Pull Request, incluyendo el objetivo de la propuesta, un resumen de los cambios realizados y la validación aplicada para comprobar que la solución cumplía con los requisitos del ejercicio.

---

# Herramientas utilizadas

## Git

Git es un sistema de control de versiones distribuido que permite registrar cambios, administrar el historial del proyecto y facilitar el trabajo colaborativo mediante ramas independientes.

Durante este ejercicio fue utilizado para gestionar todo el ciclo de vida de la contribución, desde la creación de la rama hasta la preparación del Pull Request.

Las funcionalidades empleadas incluyen:

- creación de ramas;
- registro de cambios;
- publicación de ramas;
- seguimiento del historial;
- preparación de contribuciones para revisión.

---

## GitHub

GitHub es una plataforma de alojamiento de repositorios Git que incorpora herramientas para el trabajo colaborativo.

En este ejercicio se simuló el proceso de creación de un Pull Request, mecanismo utilizado para solicitar la revisión e integración de cambios dentro de un proyecto.

Los Pull Requests permiten:

- revisar código antes de fusionarlo;
- discutir modificaciones entre colaboradores;
- validar que la solución cumple los requisitos establecidos;
- mantener un historial organizado de las contribuciones.

---

## PowerShell

PowerShell se utilizó como terminal para ejecutar los comandos de Git y administrar el repositorio desde la línea de comandos.

---

# Explicación técnica de los comandos

## `git checkout -b`

Crea una nueva rama y cambia automáticamente a ella.

```bash
git checkout -b mi-rama
```

En este ejercicio permitió desarrollar la solución sin modificar directamente la rama `dev`.

---

## `git add`

Agrega archivos al área de preparación (*Staging Area*), indicando cuáles serán incluidos en el siguiente commit.

Ejemplo:

```bash
git add .
```

Su utilización garantiza que únicamente los archivos seleccionados formen parte de la contribución.

---

## `git commit`

Registra permanentemente los cambios preparados dentro del historial del repositorio.

```bash
git commit -m "Agregar solución ejercicio 14"
```

Cada commit representa un punto de control que facilita el seguimiento de la evolución del proyecto.

---

## `git push`

Envía la rama local al repositorio remoto.

```bash
git push origin mi-rama
```

Este comando permite compartir la solución con el resto del equipo y preparar la creación del Pull Request.

---

## `git status`

Muestra el estado actual del repositorio.

Permite verificar:

- archivos modificados;
- archivos preparados para commit;
- estado de la rama;
- sincronización con el repositorio remoto.

Es una herramienta fundamental para validar que el repositorio se encuentra en condiciones adecuadas antes de realizar un commit o un push.

---

## `git log --oneline`

Presenta un historial resumido de los commits realizados.

Ejemplo:

```bash
git log --oneline
```

Facilita comprobar que la contribución quedó registrada correctamente.

---

# Solución implementada

La solución consistió en preparar una contribución siguiendo el flujo de trabajo recomendado para proyectos colaborativos.

Se creó una rama independiente desde `dev`, donde se desarrolló la solución solicitada. Posteriormente se registraron los cambios mediante un commit descriptivo y se publicaron en el repositorio remoto utilizando `git push`.

Como parte del ejercicio también se redactó una descripción del Pull Request, estructurada en tres apartados:

- **Objetivo:** describe el propósito de la contribución.
- **Cambios realizados:** resume las modificaciones efectuadas.
- **Validación:** explica cómo se comprobó que la solución cumple los requisitos del ejercicio.

Este procedimiento facilita la revisión del trabajo antes de su integración y mantiene un historial claro de las contribuciones realizadas.

---

# Comandos utilizados

```bash
# Crear una rama desde dev
git checkout dev
git checkout -b carlos-velasco-ejercicio14

# Verificar el estado del repositorio
git status

# Agregar la solución
git add .

# Registrar los cambios
git commit -m "Agregar solución ejercicio 14"

# Publicar la rama en el repositorio remoto
git push origin carlos-velasco-ejercicio14

# Verificar historial
git log --oneline
```

---

# Ejemplo de descripción del Pull Request

## Objetivo

Incorporar la solución correspondiente al ejercicio 14 de Git, respetando la estructura solicitada por el repositorio y documentando el proceso de desarrollo.

### Cambios realizados

- Se creó la carpeta personal dentro de `resoluciones/`.
- Se agregó el archivo con la solución del ejercicio.
- Se documentó el procedimiento seguido para resolver el problema.

### Validación

- Se verificó que todos los archivos se encuentran dentro de la carpeta correspondiente.
- Se comprobó que la rama fue publicada correctamente.
- Se confirmó que el historial contiene el commit de la solución.
- La estructura cumple las reglas establecidas por el ejercicio.

---

# Flujo de trabajo aplicado

```plaintext
dev
│
├── Crear rama personal
│
├── Desarrollar solución
│
├── git add
│
├── git commit
│
├── git push
│
└── Crear Pull Request
        │
        ├── Objetivo
        ├── Cambios realizados
        └── Validación
```

---

# Validación de la solución

Para comprobar que el ejercicio fue resuelto correctamente se verificó que:

- La rama fue creada a partir de `dev`.
- La solución se encuentra dentro de `resoluciones/nombre-apellido/`.
- El commit registra correctamente los cambios realizados.
- La rama fue publicada en el repositorio remoto.
- La descripción del Pull Request incluye el objetivo, los cambios y la validación.
- El repositorio no presenta cambios pendientes según `git status`.

---

# Conclusión

El ejercicio permitió comprender el flujo de trabajo utilizado en equipos de desarrollo que emplean Git y GitHub para gestionar contribuciones mediante Pull Requests.

Más allá del uso de comandos individuales, se reforzó la importancia de documentar adecuadamente cada contribución, mantener un historial claro de cambios y facilitar el proceso de revisión antes de integrar nuevas funcionalidades al proyecto.

El uso de ramas independientes, commits descriptivos y Pull Requests constituye una práctica esencial para garantizar la calidad del software y mejorar la colaboración entre los integrantes de un equipo de desarrollo.

---

## Autor

**Carlos Velasco**