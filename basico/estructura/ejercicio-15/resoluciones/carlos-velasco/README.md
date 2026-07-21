# Sistema de Carreras Urbanas

Este ejercicio documenta la creación de una estructura de directorios organizada para un proyecto denominado **Sistema de Carreras Urbanas**, cuyo propósito es servir como base para el desarrollo de un simulador de competencias de vehículos hiperdeportivos. La solución organiza la información relacionada con pilotos, vehículos, pistas, configuración del simulador, resultados y documentación técnica, siguiendo una estructura modular similar a la utilizada en proyectos profesionales de desarrollo de software.

El objetivo principal es aplicar buenas prácticas de organización del sistema de archivos, permitiendo que el proyecto sea escalable, fácil de mantener y comprensible para cualquier integrante del equipo de desarrollo.

---

# Objetivo del ejercicio

Diseñar una estructura de carpetas que permita organizar adecuadamente todos los recursos necesarios para un simulador de carreras urbanas.

La solución debe facilitar la administración de:

- Información de pilotos.
- Catálogo de vehículos.
- Registro de pistas.
- Código fuente del simulador.
- Configuración de la simulación.
- Resultados de las carreras.
- Documentación técnica.

Cada directorio debe cumplir una responsabilidad específica para evitar mezclar información de distinta naturaleza.

---

# Descripción del proceso

Para resolver el ejercicio se diseñó una estructura jerárquica basada en la separación de responsabilidades, una práctica ampliamente utilizada en proyectos de software.

Inicialmente se creó el directorio principal del proyecto y posteriormente se generó la carpeta **data**, destinada al almacenamiento de toda la información utilizada por el simulador.

Dentro de esta carpeta se organizaron tres subdirectorios:

- **pilotos**, donde se almacenan los datos de los participantes.
- **vehiculos**, destinado al catálogo de automóviles utilizados durante las competencias.
- **pistas**, donde se registra la información de los circuitos disponibles.

Posteriormente se creó la carpeta **src**, que contiene el código fuente del sistema. Dentro de ella se agregó el directorio **simulador**, reservado para la lógica principal de la simulación.

Finalmente se creó la carpeta **docs**, destinada a almacenar la documentación técnica del proyecto, incluyendo las reglas de carrera y la descripción del funcionamiento general del simulador.

Como parte de la solución también se incorporó un ejemplo de vehículo y se estableció una separación entre los archivos de configuración del simulador y los resultados generados después de cada carrera.

---

# Herramientas utilizadas

## PowerShell

PowerShell es una consola de automatización que permite administrar el sistema operativo mediante comandos.

Durante este ejercicio fue utilizada para crear la estructura completa de directorios y los archivos de documentación, agilizando la configuración inicial del proyecto.

Su utilización permite reproducir la estructura del proyecto de manera consistente y reducir errores durante la preparación del entorno de trabajo.

---

## Sistema de archivos

El sistema de archivos permite organizar la información mediante directorios y archivos.

Diseñar correctamente esta estructura facilita el mantenimiento del proyecto, mejora la colaboración entre desarrolladores y permite localizar rápidamente cualquier recurso relacionado con la simulación.

---

# Explicación técnica de los comandos

## `mkdir`

El comando **Make Directory** permite crear uno o varios directorios dentro del sistema de archivos.

En este ejercicio fue utilizado para construir toda la estructura principal del simulador.

Ejemplo:

```powershell
mkdir data, src, docs
```

También permite crear varios subdirectorios de manera simultánea:

```powershell
mkdir data/pilotos, data/vehiculos, data/pistas
```

Esta característica simplifica la creación de estructuras complejas.

---

## `cd`

El comando **Change Directory** permite desplazarse entre carpetas.

Fue utilizado para acceder al directorio raíz del proyecto antes de generar la estructura.

Ejemplo:

```powershell
cd sistema-carreras
```

Trabajar desde la carpeta principal garantiza que todos los archivos sean creados en la ubicación correcta.

---

## `New-Item`

El comando **New-Item** permite crear archivos y otros elementos dentro del sistema de archivos.

En este ejercicio fue utilizado para generar la documentación técnica y algunos archivos de ejemplo.

Ejemplo:

```powershell
New-Item docs/reglas-carrera.md
```

---

# Organización del proyecto

La estructura fue diseñada siguiendo el principio de separación de responsabilidades.

Los datos utilizados por el simulador permanecen dentro de la carpeta **data**, mientras que la lógica del sistema se almacena en **src**.

La documentación técnica se mantiene completamente independiente para facilitar su consulta sin interferir con el desarrollo del software.

Asimismo, los archivos de configuración del simulador permanecen separados de los resultados obtenidos durante las carreras, evitando sobrescribir información y permitiendo conservar el historial de simulaciones realizadas.

---

# Solución implementada

La solución consiste en construir una estructura modular preparada para soportar el crecimiento del simulador.

Cada componente del proyecto cumple una función específica:

- **pilotos** almacena la información de los corredores.
- **vehiculos** contiene el catálogo de automóviles.
- **pistas** registra las características de los circuitos.
- **simulador** concentra la lógica principal del sistema.
- **docs** almacena las reglas y documentación técnica.
- **config** contiene los parámetros utilizados para ejecutar las simulaciones.
- **resultados** conserva el historial de carreras ejecutadas.

Esta organización facilita la incorporación de nuevas funcionalidades sin modificar la estructura existente.

---

# Comandos utilizados

```powershell
# Crear directorio principal
mkdir sistema-carreras

# Acceder al proyecto
cd sistema-carreras

# Crear estructura principal
mkdir data, src, docs, config, resultados

# Crear subdirectorios de datos
mkdir data/pilotos, data/vehiculos, data/pistas

# Crear directorio del simulador
mkdir src/simulador

# Crear documentación
New-Item docs/reglas-carrera.md

# Crear ejemplo de vehículo
New-Item data/vehiculos/vehiculo-ejemplo.json

# Crear README del proyecto
New-Item README.md
```

---

# Estructura del proyecto

```plaintext
sistema-carreras/
├── config/
├── data/
│   ├── pilotos/
│   ├── pistas/
│   └── vehiculos/
│       └── vehiculo-ejemplo.json
├── docs/
│   └── reglas-carrera.md
├── resultados/
├── src/
│   └── simulador/
└── README.md
```

### Descripción de la estructura

| Directorio | Función |
|------------|---------|
| config | Contiene la configuración utilizada por el simulador. |
| data | Almacena toda la información utilizada por el sistema. |
| pilotos | Registra los datos de los corredores participantes. |
| vehiculos | Contiene el catálogo de vehículos disponibles. |
| pistas | Guarda la información de los circuitos. |
| src | Contiene el código fuente del proyecto. |
| simulador | Implementa la lógica principal de la simulación. |
| resultados | Conserva el historial de carreras ejecutadas. |
| docs | Almacena la documentación técnica y las reglas del proyecto. |

---

# Validación de la solución

Para comprobar que el ejercicio fue resuelto correctamente se verificó que:

- Se creó la estructura solicitada por el enunciado.
- Cada carpeta cumple una responsabilidad claramente definida.
- Existe un archivo de ejemplo dentro del catálogo de vehículos.
- La documentación técnica fue almacenada dentro de **docs**.
- La configuración del simulador permanece separada de los resultados obtenidos.
- La organización permite incorporar nuevos pilotos, vehículos, pistas o simulaciones sin modificar la estructura existente.

---

# Conclusión

Este ejercicio permitió aplicar principios fundamentales de organización de proyectos mediante la construcción de una arquitectura de directorios clara, modular y escalable.

La separación entre datos, código fuente, configuración, resultados y documentación mejora significativamente la mantenibilidad del proyecto y facilita el trabajo colaborativo entre los integrantes del equipo.

Además, mantener los resultados independientes de la configuración evita la pérdida de información, favorece la trazabilidad de las simulaciones y sigue prácticas utilizadas en proyectos profesionales de desarrollo de software.

---

## Autor

**Carlos Velasco**