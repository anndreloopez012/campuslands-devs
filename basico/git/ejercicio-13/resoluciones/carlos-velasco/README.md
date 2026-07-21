# Resolver Conflicto de Estructura 3D

Este ejercicio documenta el proceso de resolución de un conflicto de fusión (merge conflict) utilizando **Git**, simulando un escenario de trabajo colaborativo dentro de un proyecto de animación 3D. El objetivo consiste en integrar los cambios realizados por dos equipos de desarrollo sobre un mismo archivo, preservando el trabajo de ambas áreas sin perder información.

La práctica permite comprender cómo Git detecta conflictos cuando dos ramas modifican una misma sección de un archivo y cómo estos pueden resolverse de forma manual siguiendo buenas prácticas de control de versiones.

---

# Objetivo del ejercicio

Simular un entorno de desarrollo colaborativo donde dos ramas realizan modificaciones diferentes sobre el archivo `estructura.md`, generando un conflicto durante la fusión.

La solución debe conservar las aportaciones de ambas ramas y registrar la resolución mediante un nuevo commit, garantizando la integridad del historial del proyecto.

---

# Descripción del proceso

Para resolver el ejercicio se siguió un flujo de trabajo basado en ramas, simulando la colaboración entre dos equipos responsables de distintas áreas de un proyecto de animación 3D.

Inicialmente se trabajó desde una rama personal creada a partir de la rama `dev`, respetando el flujo de trabajo establecido para el repositorio.

Posteriormente se crearon dos ramas independientes, cada una representando un equipo de desarrollo:

- Una rama incorporó la sección correspondiente al **modelado 3D**.
- La segunda rama añadió la sección relacionada con los **renders**.

Ambas ramas modificaron el mismo archivo (`estructura.md`), provocando que Git detectara un conflicto durante el proceso de fusión.

Una vez identificado el conflicto, se editaron manualmente las secciones marcadas por Git, eliminando los indicadores de conflicto y conservando la información aportada por ambos equipos.

Finalmente, se validó que el archivo estuviera correctamente integrado y se creó un commit que registró oficialmente la resolución del conflicto.

---

# Herramientas utilizadas

## Git

Git es un sistema de control de versiones distribuido que permite administrar los cambios realizados sobre un proyecto, registrar su historial y facilitar el trabajo colaborativo mediante ramas independientes.

En este ejercicio fue utilizado para simular un entorno de desarrollo donde diferentes equipos modifican un mismo archivo y posteriormente integran sus cambios.

Las principales funcionalidades empleadas fueron:

- creación de ramas;
- cambio entre ramas;
- fusión de cambios (merge);
- resolución manual de conflictos;
- registro del historial mediante commits.

---

## PowerShell

PowerShell se utilizó como terminal para ejecutar los comandos de Git y administrar el repositorio desde la línea de comandos.

Su utilización permite automatizar tareas de desarrollo y trabajar de forma más eficiente sin depender de interfaces gráficas.

---

# Explicación técnica de los comandos

## `git checkout -b`

Este comando crea una nueva rama y cambia automáticamente a ella.

Su sintaxis es:

```bash
git checkout -b nombre-rama
```

En este ejercicio permitió crear ramas independientes para representar el trabajo de diferentes áreas del proyecto.

---

## `git add`

El comando `git add` mueve los cambios realizados al área de preparación (**Staging Area**), indicando a Git qué archivos formarán parte del siguiente commit.

Ejemplo:

```bash
git add estructura.md
```

Después de resolver el conflicto fue necesario ejecutar este comando para indicar que el archivo ya había sido corregido.

---

## `git commit`

Registra permanentemente los cambios preparados dentro del historial del repositorio.

Sintaxis:

```bash
git commit -m "mensaje"
```

En este ejercicio se utilizó tanto para registrar los cambios realizados por cada rama como para documentar la resolución del conflicto.

---

## `git merge`

Permite integrar los cambios provenientes de otra rama.

Ejemplo:

```bash
git merge renders
```

Cuando Git detecta modificaciones incompatibles sobre una misma sección del archivo, detiene automáticamente el proceso y solicita la intervención del desarrollador para resolver el conflicto.

---

## `git status`

Muestra el estado actual del repositorio.

Este comando permite verificar:

- archivos modificados;
- conflictos pendientes;
- archivos preparados para commit;
- estado general de la rama.

Durante la resolución fue utilizado para confirmar cuándo el conflicto había sido solucionado correctamente.

---

## `git log --oneline`

Presenta un historial resumido de los commits del repositorio.

Ejemplo:

```bash
git log --oneline
```

Su utilización permitió verificar que el commit correspondiente a la resolución del conflicto quedó registrado correctamente.

---

# Solución implementada

La solución consistió en simular el trabajo paralelo de dos equipos responsables de diferentes componentes del proyecto de animación.

La primera rama agregó información relacionada con el proceso de **modelado 3D**, mientras que la segunda incorporó contenido referente a los **renders finales**.

Al intentar fusionar ambas ramas, Git detectó modificaciones sobre la misma sección del archivo `estructura.md`, generando un conflicto de fusión.

Para resolverlo, se analizaron las diferencias propuestas por ambas ramas y se decidió conservar ambas secciones, eliminando únicamente los marcadores automáticos de conflicto generados por Git.

Una vez validado el contenido final del archivo, este fue agregado nuevamente al área de preparación y se creó un commit de resolución.

Este procedimiento garantiza que ninguna contribución realizada por los equipos de trabajo sea descartada, manteniendo la integridad de la documentación del proyecto.

---

# Comandos utilizados

```bash
# Crear rama para modelado
git checkout -b modelado

# Editar estructura.md
git add estructura.md
git commit -m "Agregar sección de modelado"

# Volver a la rama principal de trabajo
git checkout dev

# Crear rama para renders
git checkout -b renders

# Editar estructura.md
git add estructura.md
git commit -m "Agregar sección de renders"

# Regresar a la rama de trabajo
git checkout dev

# Fusionar primera rama
git merge modelado

# Fusionar segunda rama (genera conflicto)
git merge renders

# Editar manualmente estructura.md
# Conservar ambas secciones

git add estructura.md

git commit -m "Resolver conflicto conservando modelado y renders"

# Verificar estado
git status

# Verificar historial
git log --oneline
```

---

# Evidencia

La evidencia muestra la ejecución de los comandos utilizados durante la creación de las ramas, la aparición del conflicto de fusión, la resolución manual del archivo `estructura.md` y el registro del commit final. Asimismo, puede incluir la salida de `git status` y `git log --oneline` para comprobar que el repositorio quedó en un estado consistente y sin conflictos pendientes.

---

# Flujo de trabajo aplicado

```plaintext
dev
│
├── modelado
│      └── Agrega sección de modelado
│
├── renders
│      └── Agrega sección de renders
│
└── Merge
       │
       ├── Conflicto detectado
       │
       ├── Resolución manual
       │
       └── Commit de resolución
```

---

# Validación de la solución

Para comprobar que el ejercicio fue resuelto correctamente se verificó que:

- Se trabajó desde una rama creada a partir de `dev`.
- Se generaron dos ramas independientes con modificaciones diferentes sobre el mismo archivo.
- Git detectó correctamente el conflicto durante el proceso de fusión.
- Se conservaron las aportaciones de ambas ramas dentro de `estructura.md`.
- El conflicto fue resuelto manualmente eliminando los marcadores generados por Git.
- Se registró un commit que documenta la resolución del conflicto.
- El comando `git status` confirmó que el repositorio quedó limpio y sin conflictos pendientes.
- El historial del repositorio refleja correctamente la integración de los cambios.

---

# Conclusión

La resolución de conflictos es una de las competencias fundamentales en el trabajo colaborativo con Git. Este ejercicio permitió comprender cómo el sistema de control de versiones administra cambios concurrentes sobre un mismo archivo y por qué es necesario que el desarrollador intervenga cuando existen modificaciones incompatibles.

Además de practicar el uso de comandos esenciales como `git merge`, `git status` y `git commit`, se fortaleció la comprensión del flujo de trabajo basado en ramas, una estrategia ampliamente utilizada en equipos de desarrollo de software para integrar contribuciones de múltiples colaboradores de manera segura y organizada.

---

## Autor

**Carlos Velasco**