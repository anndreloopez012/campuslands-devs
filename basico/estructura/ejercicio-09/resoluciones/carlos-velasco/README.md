# Organización de estudio de tatuajes

## Estructura y Configuración del Proyecto: Estudio-Tatuajes

Se ha finalizado la implementación de la estructura de directorios y archivos base para el proyecto **Estudio-Tatuajes**. Esta arquitectura está orientada a la gestión organizada de las operaciones del estudio, incluyendo la agenda, perfiles de clientes, catálogo de diseños (activos y terminados) y el repositorio de referencias creativas.

* **Descripción del proceso:** * **Arquitectura de Directorios:** Se utilizó el comando `mkdir` para definir un sistema jerárquico que permite la separación clara de responsabilidades: `agenda`, `clientes`, `disenos` (con subcarpetas de estado) y `referencias` (con `moodboards`).
* **Inicialización de Archivos:** Se empleó el comando `ni` (New-Item) para generar los archivos de trabajo iniciales (`citas.json`, `ficha-cliente.md`) y los archivos de control `.gitkeep` para asegurar que las carpetas vacías sean rastreadas por el sistema de control de versiones.


* **Tecnologías:** Entorno de terminal (PowerShell), estructuración de datos y control de versiones con Git.

### Comandos de Git y Shell Utilizados

```bash
# Creación de la estructura de directorios
mkdir estudio-tatuajes/agenda, estudio-tatuajes/clientes, estudio-tatuajes/disenos, estudio-tatuajes/disenos/activos, estudio-tatuajes/disenos/terminados, estudio-tatuajes/referencias, estudio-tatuajes/referencias/moodboards

# Inicialización de archivos de datos y control
ni estudio-tatuajes/agenda/citas.json, estudio-tatuajes/clientes/ficha-cliente.md
ni estudio-tatuajes/disenos/activos/.gitkeep, estudio-tatuajes/disenos/terminados/.gitkeep, estudio-tatuajes/referencias/moodboards/.gitkeep

# Registro y consolidación de cambios en el repositorio
git add .
git commit -m "feat(estructura): ejercicios 09 finalizado"

# Sincronización con el repositorio remoto
git push -u origin alumnos/carlos-velasco/ejercicio-09

```

### Evidencia
![evidencia](./imagenes/evidencia.png)

![evidencia1](./imagenes/evidencia01.png)

![evidencia2](./imagenes/evidencia02.png)



---

**Estructura del Proyecto:**

```text
estudio-tatuajes/
├── agenda/
│   └── citas.json
├── clientes/
│   └── ficha-cliente.md
├── disenos/
│   ├── activos/
│   └── terminados/
└── referencias/
    └── moodboards/

```

**Hecho por:**

* *Carlos Velasco*