
## Alumno:lester Garcia.
# 📂 Estructura del Proyecto de Soldadura

Este repositorio sigue una arquitectura limpia y modular diseñada para registrar prácticas técnicas, control de insumos, gestión de seguridad industrial y almacenamiento seguro de evidencias digitales, previniendo la corrupción de archivos de texto.

---

## 🔍 Especificación y Contenido de Cada Carpeta

### 1. 📂 `practicas/`
* **Propósito:** Destinada exclusivamente a los informes de texto, bitácoras y registros escritos sobre la ejecución de las prácticas de soldadura. Está estrictamente prohibido almacenar imágenes sueltas o archivos binarios pesados en esta ruta.
* **Archivo Clave:** * `bitacora-ejecucion.md`: Documento técnico donde se detallan los procesos aplicados (SMAW, GMAW, GTAW), el tipo de junta, parámetros eléctricos establecidos (amperaje, voltaje) y las observaciones preliminares de la práctica.

### 2. 📂 `materiales/`
* **Propósito:** Almacenar toda la información técnica, hojas de datos y control de los insumos consumibles y metales base utilizados en el taller.
* **Archivo Clave:**
    * `catalogo.md`: Documento centralizado que clasifica los electrodos bajo la normativa AWS (ej. E6013, E7018), los tipos de gases de protección (Argón puro, mezclas de CO₂) y las especificaciones físicas de las placas de metal base.

### 3. 📂 `seguridad/`
* **Propósito:** Espacio normativo y mandatorio para la mitigación de riesgos y la validación de condiciones seguras antes de iniciar cualquier operación que involucre el encendido del arco eléctrico.
* **Archivo Clave:**
    * `checklist.md`: Lista de verificación obligatoria antes del proceso operativo. Evalúa el estado del Equipo de Protección Personal (EPP), la disponibilidad del extractor de humos técnicos, la integridad de los cables de fuerza y el correcto ajuste de la pinza de masa/tierra.

### 4. 📂 `evidencias/`
* **Propósito:** Módulo aislado del resto del repositorio para la salvaguarda, almacenamiento y preservación ordenada de archivos pesados de formato binario y documentos adjuntos oficiales.
* **Subcarpetas Internas:**
    * 📁 `evidencias/imagenes/`: Reservada únicamente para capturas fotográficas en formatos estándar (`.jpg`, `.png`) que muestren el estado físico de la soldadura.
    * 📁 `evidencias/documentos/`: Destinada de manera exclusiva a reportes oficiales o externos en formato comprimido `.pdf`.

---

## 🚫 Regla de Oro: Separación de Medios y Gestión de Evidencias

* **Prohibición de Mezcla:** Para evitar la degradación del repositorio y optimizar el rendimiento del control de versiones, queda explícitamente prohibido incrustar imágenes en código Base64 o almacenar archivos binarios sueltos dentro de las carpetas de informes de texto (`practicas/`). Los reportes en texto plano deben hacer referencia a los archivos multimedia mediante **rutas relativas limpias** que apunten a la carpeta de evidencias.
* **Criterio de Evidencias Aceptadas:**
    1.  **Fotografías Técnicas (`.jpg`, `.png`):** Capturas nítidas y enfocadas de la zona soldada que sirvan para la inspección visual (sanidad del cordón, nivel de penetración, remoción de escoria y alineación geométrica).
    2.  **Reportes Oficiales (`.pdf`):** Certificaciones de calidad de los materiales emitidas por los proveedores o informes formales de Ensayos No Destructivos (END) aplicados (como partículas magnéticas, líquidos penetrantes o ultrasonido).