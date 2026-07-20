# Resolución: Estructura de Catálogo de Autos de Lujo
### Desarrollador: Selvin Lem

### Rama de trabajo: alumno/selvin-lem/ejercicio-04

## Estructura de Archivos Creada
Para cumplir con los requerimientos de un catálogo premium, ordenado y escalable, se diseñó la siguiente arquitectura jerárquica dentro de la ruta obligatoria `basico/estructura/ejercicio-04/resoluciones/selvin-lem/`:

```text
selvin-lem/
│
├── selvin-lem.md                     # Documentación técnica del proyecto y resoluciones
│
├── data/                             # Capa de almacenamiento y persistencia de datos estáticos
│   └── autos.json                    # Base de datos en JSON con la estructura del catálogo premium
│
├── assets/                           # Recursos estáticos y multimedia del proyecto
│   └── cars/                         # Contenedor exclusivo para las imágenes de los vehículos
│       └── .gitkeep                  # Asegura que la carpeta vacía se suba al repositorio
│
├── docs/                             # Documentación técnica y convenciones del equipo
│   └── convenciones-imagenes.md      # Estándar obligatorio para el nombrado de archivos multimedia
│
└── src/                              # Código fuente y lógica del sistema
    ├── visualizacion.js              # Lógica encargada de renderizar e interactuar con la interfaz
    └── validaciones.js               # Validaciones de consistencia de datos (casos normales y límites)
```
---

## Separación de Responsabilidades 
Una estructura profesional de frontend o backend exige modularidad para facilitar el mantenimiento y el trabajo en equipo. La arquitectura de este catálogo se distribuyó bajo el siguiente razonamiento técnico:

* **Persistencia de Datos (data/):** Almacena de forma centralizada la información estructurada de los vehículos en formato JSON. Al aislar los datos del código fuente, cualquier actualización en los precios o especificaciones no requiere modificar la lógica del programa.
* **Recursos Estáticos (assets/cars/):** Un catálogo premium requiere un control estricto de recursos visuales. Mantener las imágenes separadas previene el desorden en el directorio raíz y prepara el proyecto para una futura migración a un servidor de almacenamiento en la nube (como AWS S3 o Cloudinary).
* **Documentación de Convenciones (docs/):** Define las reglas del juego para el equipo de desarrollo. Establecer un estándar de nombrado para los archivos evita la duplicidad de imágenes y errores de rutas rotas (404 Not Found) causados por mayúsculas, espacios o caracteres especiales.
* **Código Fuente (src/):** Desacopla la lógica de visualización (renderizado en el DOM o consola) de la lógica de negocio (validación de datos). Esto permite cambiar el diseño visual en el futuro sin alterar las reglas que verifican si un auto tiene los datos correctos.

---


