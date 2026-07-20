# Pipeline de Animación y Modelado 3D

Este documento establece las reglas de organización, nomenclatura y flujo de trabajo para garantizar el orden del proyecto y evitar la pérdida de información.

## 1. Estructura de Directorios

El proyecto se organiza bajo la siguiente estructura limpia de carpetas:

```text
anderson-oloroso/pipeline-ani...
├── 01-modelado/      # Archivos fuente de geometría y rigs.
├── 02-texturas/      # Mapas, imágenes y materiales aplicados.
├── 03-renders/       # Imágenes y secuencias de prueba.
├── 04-entregas/      # Archivos aprobados finales para el cliente.
├── docs/             # Documentación técnica del proyecto.
│   └── pipeline.md
├── referencias/      # Material visual de soporte e inspiración.
├── test/             # Pruebas temporales y experimentación.
└── versiones/        # Historial de respaldos y archivos obsoletos.
```

---

## 2. Control de Versiones e Historial

Para mantener un registro claro del avance y evitar la corrupción de archivos, se aplican las siguientes reglas:

*   **Prohibición de nombres ambiguos:** Queda estrictamente prohibido usar términos como `_final`, `_bueno` o `_definitivo` en los nombres de archivo.
*   **Formato de nomenclatura:** Todos los archivos de trabajo deben seguir la estructura:  
    `[NombreProyecto]_[Componente]_v[Número de versión]`  
    *Ejemplo:* `escenario_propPrincipal_v001.blend`
*   **Uso de la carpeta /versiones:** Solo el archivo con el número de versión más alto (la versión activa) reside en la carpeta raíz correspondiente (ej. `01-modelado`). Al crear una nueva versión, la versión anterior se mueve inmediatamente a la carpeta `versiones/`.

---

## 3. Flujo de Trabajo y Validación de Entregas

### Gestión de Pruebas (Carpeta `/test` y `/03-renders`)
*   La carpeta `test/` se utiliza exclusivamente para experimentos técnicos, pruebas de herramientas o scripts que no afecten directamente el arte final.
*   La carpeta `03-renders/` almacena salidas visuales intermedias para revisión interna del equipo.

### Regla de Oro para Archivos Finales (Carpeta `/04-entregas`)
*   **Ningún archivo o render se guarda en `04-entregas/` sin aprobación previa.**
*   Esta carpeta debe permanecer impecable. Solo contiene los entregables oficiales que se enviarán al cliente o director del proyecto.

---

## 4. Uso de la Carpeta de Referencias

La carpeta `referencias/` está destinada únicamente a material de consulta pasiva:
*   Imágenes de inspiración, *moodboards* y paletas de color.
*   Hojas de modelo (*model sheets*) y conceptos de diseño.
*   Especificaciones técnicas externas.
*   **Regala:** No se deben mezclar archivos de producción propios dentro de esta carpeta.
