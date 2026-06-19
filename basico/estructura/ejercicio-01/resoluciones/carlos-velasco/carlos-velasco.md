# Documentación de Estructura de Proyecto: Ejercicio 01

## Introducción

Este documento detalla el proceso técnico realizado para la inicialización y estructuración del entorno de trabajo correspondiente al `ejercicio-01`. El objetivo es establecer una jerarquía de archivos estandarizada que facilite la escalabilidad, el mantenimiento y la organización de los recursos del proyecto, siguiendo las mejores prácticas de desarrollo de software.

---

## Objetivo de la Estructura

La arquitectura implementada busca separar claramente las responsabilidades dentro del repositorio:

* **`src/`**: Contenedor del código fuente principal.
* **`assets/`**: Gestión de recursos estáticos (imágenes, audio, cartografía).
* **`docs/`**: Documentación técnica complementaria.
* **`tests/`**: Suite de pruebas para asegurar la calidad del código.

---

## Proceso de Configuración y Ejecución

A continuación, se detalla paso a paso la secuencia de comandos ejecutados en la terminal para la puesta en marcha del proyecto.

### 1. Preparación del Entorno

Se realizó la clonación del repositorio central y la preparación de la rama de trabajo:

```bash
# Clonación del repositorio en la ruta local definida
git clone "https://github.com/anndreloopez012/campuslands-devs.git" "C:\Users\CARLOS\Documents\Repositorios Locales\campuslands-devs"

# Cambio a la rama de desarrollo principal
git checkout dev

# Creación y cambio a la rama personal de trabajo (Feature Branch)
git checkout -b alumno/carlos-velasco/ejercicio-01

```

### 2. Navegación al Directorio Objetivo

Se accedió a la ruta específica dentro del árbol de directorios del proyecto donde se alojarán las soluciones:

```bash
cd basico/estructura/ejercicio-01/resoluciones

```

### 3. Creación de la Estructura de Carpetas

Se ejecutó la creación del directorio personal y su sub-estructura lógica para el desarrollo:

```bash
# Crear directorio principal del desarrollador
mkdir carlos-velasco
cd carlos-velasco

# Crear directorios base de la aplicación
mkdir src assets docs tests

# Configuración del sub-directorio de recursos (assets)
cd assets
mkdir images maps audio

# Creacion de documentacion
cd ..
touch carlos-velasco.md
ni carlos-velasco.md
```

---

## Resumen de la Estructura Final

La jerarquía resultante tras la ejecución de los comandos anteriores es la siguiente:

```text
carlos-velasco/
├── src/
├── assets/
│   ├── images/
│   ├── maps/
│   └── audio/
├── docs/
├── tests/
│   
└── carlos-velasco.md

```

---
