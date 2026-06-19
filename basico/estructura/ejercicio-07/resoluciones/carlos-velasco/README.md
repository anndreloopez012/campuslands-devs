# Biblioteca de ciencia ficción

Se ha completado la creación de la infraestructura jerárquica para el proyecto **Biblioteca-SciFi**. Este ejercicio se centró en la organización lógica de directorios para la gestión de datos de libros, portadas y plantillas de reseñas, asegurando un entorno de trabajo limpio y ordenado para futuros desarrollos.

* **Descripción del proceso:** * **Generación de Directorios:** Se ejecutó el comando `mkdir` para establecer una estructura anidada que separa claramente los componentes del sistema (`books`, `data`, `covers`, `review`).
* **Creación de Archivos Base:** Se utilizaron comandos de tipo `ni` (New-Item) para inicializar los archivos de trabajo necesarios, incluyendo un `README.md` para documentación, archivos `.json` para la gestión de información y una plantilla de Markdown para las reseñas.


* **Tecnologías:** Entorno de desarrollo (PowerShell/Terminal) y gestión estructurada de archivos mediante comandos del sistema.

### Comandos de Git y Shell Utilizados

```bash
# Creación de la estructura de directorios anidada
mkdir biblioteca-scifi, biblioteca-scifi/books, biblioteca-scifi/books/data, biblioteca-scifi/books/covers, review

# Creación de los archivos de configuración y datos iniciales
ni README.md, biblioteca-scifi/books/data/libro-01.json, biblioteca-scifi/books/covers/libro.json, review/plantilla-resena.md

# Registro de la nueva estructura en el control de versiones
git add .
git commit -m "feat(estructura): Ejercicio 07 finalizado"

# Sincronización con el repositorio remoto
git push -u origin alumnos/carlos-velasco/ejercicio-07

```

### Evidencia

**Creación de directorios:**


**Creación de archivos base:**


---

**Estructura del Proyecto:**

```text
biblioteca-scifi/
├── books/
│   ├── data/
│   │   └── libro-01.json
│   └── covers/
│       └── libro.json
├── review/
│   └── plantilla-resena.md
└── README.md

```

**Hecho por:**

* *Carlos Velasco*