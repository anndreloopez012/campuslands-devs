# Panel Deportivo Multiliga

Este ejercicio documenta la organización de la estructura base de un proyecto denominado **Panel Deportivo Multiliga**, cuyo objetivo es preparar un entorno ordenado para almacenar información relacionada con equipos, partidos y tablas de clasificación de diferentes ligas deportivas.

La solución se enfoca en aplicar buenas prácticas de organización de archivos y directorios, permitiendo que el proyecto pueda crecer de forma escalable y manteniendo una separación clara entre los datos, la documentación y los archivos fuente.

---

## Objetivo del ejercicio

Construir una estructura de directorios que simule la base de un proyecto real, organizando adecuadamente la información correspondiente a:

- Equipos deportivos.
- Partidos.
- Documentación técnica.
- Código fuente.

La organización debe facilitar el mantenimiento del proyecto y permitir la incorporación de nuevas ligas, temporadas o funcionalidades sin modificar la estructura existente.

---

# Descripción del proceso

Para resolver el ejercicio se siguió una estrategia de organización basada en la separación de responsabilidades.

En primer lugar, se creó el directorio principal del proyecto y posteriormente se generaron las carpetas necesarias para clasificar cada tipo de información.

La carpeta **data** almacena la información utilizada por la aplicación y se divide en dos categorías principales:

- **equipos**, destinada al almacenamiento de archivos relacionados con los equipos participantes.
- **partidos**, destinada al registro de encuentros deportivos.

Posteriormente se creó la carpeta **src**, reservada para el código fuente del proyecto, permitiendo mantener separada la lógica de programación respecto a los datos.

Finalmente se creó la carpeta **docs**, donde se almacena la documentación técnica del proyecto. Dentro de ella se agregó el archivo **modelo-datos.md**, cuyo propósito es describir la estructura de los datos que utilizará el sistema.

Como parte del diseño también se definieron archivos independientes para cada liga deportiva y se preparó una estructura capaz de incorporar nuevas competiciones sin necesidad de reorganizar el proyecto.

---

# Herramientas utilizadas

## PowerShell

PowerShell es una consola de administración y automatización desarrollada por Microsoft que permite interactuar con el sistema operativo mediante comandos.

En este ejercicio fue utilizada para crear directorios, generar archivos y organizar la estructura del proyecto de forma rápida y reproducible.

Su utilización evita realizar tareas manuales desde el explorador de archivos y facilita la automatización del proceso de inicialización del proyecto.

---

## Sistema de archivos

El sistema de archivos representa la organización física y lógica de carpetas y documentos dentro del sistema operativo.

Diseñar correctamente esta estructura permite mantener un proyecto ordenado, facilita el trabajo colaborativo y reduce la posibilidad de errores cuando el proyecto aumenta de tamaño.

---

# Explicación técnica de los comandos

## `mkdir`

El comando **Make Directory** crea uno o varios directorios dentro del sistema de archivos.

Durante este ejercicio se utilizó para construir la estructura principal del proyecto y sus subdirectorios.

Su sintaxis básica es:

```powershell
mkdir nombre_carpeta
```

También permite crear varias carpetas simultáneamente:

```powershell
mkdir carpeta1, carpeta2, carpeta3
```

Esto reduce considerablemente el tiempo necesario para preparar un proyecto nuevo.

---

## `New-Item`

Este comando crea nuevos elementos dentro del sistema de archivos.

Dependiendo del parámetro utilizado puede generar:

- archivos
- carpetas
- enlaces

En este ejercicio fue utilizado para crear el archivo:

```text
modelo-datos.md
```

Su sintaxis básica es:

```powershell
New-Item ruta/del/archivo.md
```

---

## `cd`

El comando **Change Directory** permite desplazarse entre directorios.

Fue utilizado para posicionarse en la carpeta raíz del proyecto antes de comenzar la creación de la estructura.

Ejemplo:

```powershell
cd panel-deportivo
```

Trabajar desde la raíz garantiza que todos los archivos se creen en la ubicación correcta.

---

# Solución implementada

La solución consiste en construir una estructura modular preparada para proyectos deportivos que puedan administrar múltiples ligas.

Cada componente tiene una responsabilidad específica:

- **data/equipos** almacena la información de los equipos.
- **data/partidos** contiene los registros de los encuentros deportivos.
- **docs** centraliza la documentación técnica.
- **src** se reserva para el desarrollo del código fuente.
- **modelo-datos.md** documenta cómo estarán organizados los datos del sistema.

Además, se definieron archivos independientes para cada liga deportiva, permitiendo que el proyecto pueda ampliarse fácilmente con nuevas competiciones sin alterar la organización existente.

Este enfoque mejora la mantenibilidad del proyecto, facilita el trabajo colaborativo y sigue principios comunes utilizados en proyectos de desarrollo de software.

---

# Comandos utilizados

```powershell
# Crear el directorio principal
mkdir panel-deportivo

# Acceder al proyecto
cd panel-deportivo

# Crear estructura principal
mkdir data, src, docs

# Crear subdirectorios de datos
mkdir data/equipos, data/partidos

# Crear documentación técnica
New-Item docs/modelo-datos.md

# Crear archivos por liga (ejemplo)
New-Item data/equipos/liga-nacional.json
New-Item data/equipos/liga-internacional.json

# Crear ejemplo de tabla
New-Item data/tabla-posiciones.json
```

---

# Evidencia

![Evidencia](./images/Evidencia_01.png)

La evidencia muestra la ejecución de los comandos en PowerShell y la estructura final generada, verificando que todas las carpetas y archivos fueron creados correctamente conforme a los requisitos del ejercicio.

---

# Estructura del proyecto

```plaintext
deportivo-multiliga/
├── data/
│   ├── equipos/
│   │   ├── liga-nacional.json
│   │   └── liga-internacional.json
│   ├── partidos/
│   └── tabla-posiciones.json
├── docs/
│   └── modelo-datos.md
└── src/
```

### Descripción de la estructura

| Directorio | Función |
|------------|---------|
| data | Almacena la información utilizada por el sistema. |
| equipos | Contiene archivos relacionados con los equipos participantes. |
| partidos | Guarda la información de los encuentros deportivos. |
| docs | Documentación técnica del proyecto. |
| src | Código fuente de la aplicación. |

---

# Validación de la solución

Para verificar que el ejercicio fue resuelto correctamente se comprobó que:

- Se creó la estructura solicitada.
- Los directorios se encuentran organizados según el enunciado.
- El archivo **modelo-datos.md** existe dentro de la carpeta **docs**.
- La estructura permite agregar nuevas ligas sin modificar la organización existente.
- El proyecto mantiene una separación clara entre datos, documentación y código.

---

# Conclusión

Este ejercicio permitió aplicar principios fundamentales de organización de proyectos mediante el uso de PowerShell y la administración del sistema de archivos.

Aunque la solución consiste únicamente en crear una estructura de carpetas y archivos, el diseño implementado sigue criterios utilizados en proyectos reales, donde la separación de responsabilidades mejora la mantenibilidad, facilita el trabajo colaborativo y permite escalar el proyecto conforme aumentan los requerimientos.

La utilización de comandos de PowerShell demuestra además cómo la automatización puede reducir tiempos de configuración, disminuir errores manuales y garantizar que todos los integrantes de un equipo trabajen bajo una misma estructura de proyecto.

---

**Autor**

Carlos Velasco