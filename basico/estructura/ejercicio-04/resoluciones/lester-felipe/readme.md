#  Carros de lujo(Estructura)
### Alumno:Lester Garcia.

---

## 📂 Arquitectura y Estructura de Carpetas

A continuación, se detalla la función y responsabilidad de cada carpeta y lo que esta dentro de cada una de ellas.

### 📁 `src/`
Es el núcleo del código fuente de la aplicación. Todo el desarrollo operativo y lógico reside aquí.

* ### 📁 `config/`
  Contiene los archivos de configuración del sistema. Aquí se centralizan las conexiones a la base de datos y las configuraciones de servicios externos de almacenamiento. Separar estas configuraciones de la lógica del servidor demuestra madurez arquitectónica.
  * `db.js`: Conexión y ajustes de la base de datos.
  * `storage.js`: Configuración de herramientas de carga de archivos (como Multer) para validar formatos de alta calidad (`.webp`, `.png`) y limitar el peso de los archivos.

* ### 📁 `controladores/`
  Actúa como la fachada o recepción de nuestra agencia. Se encarga exclusivamente de interceptar la petición HTTP, validar que los parámetros de entrada del cliente sean correctos (filtros de búsqueda, IDs) y delegar el trabajo a la capa de servicios. **No contiene lógica de negocio**.

* ### 📁 `Acceso/`
  Funciona como el filtro de acceso exclusivo del proyecto. Intercepta las solicitudes para ejecutar validaciones técnicas o de seguridad antes de que lleguen a los controladores.
  * `authAcceso.js`: Controla que los autos hiper-exclusivos o preventas solo sean accesibles por usuarios verificados o asesores.
  * `cargasAcceso.js`: Valida dimensiones físicas de las imágenes o inyecta marcas de agua del catálogo antes de guardarlas.

* ### 📁 `modelos/`
  El archivador oficial del sistema. Define la estructura exacta, los esquemas y los tipos de datos que se almacenarán en la base de datos.
  * `Car.js`: Estructura para especificaciones técnicas premium (motores, aceleración, acabados) y URLs de imágenes.
  * `Brand.js`: Registro de casas matrices históricas (Ferrari, Porsche, Aston Martin).

* ### 📁 `rutas/`
  Es la ventanilla de atención. Mapea e interconecta los endpoints de la API (como `GET /api/cars/:id`) de forma limpia directamente con sus controladores correspondientes.

* ### 📁 `servicios/`
  **El cerebro del proyecto**. Aquí reside toda la lógica de negocio y la experiencia del dominio de autos de lujo. Los controladores le piden datos a esta capa, la cual procesa la información compleja.
  * `carServicio.js`: Filtra vehículos por criterios de alta gama (motores V12, disponibilidad exclusiva, rangos de precio).
  * `docServicio.js`: Gestiona la exportación dinámica de contratos de reserva o fichas técnicas en PDF.

* ### 📄 `app.js`
  El punto de entrada principal de la aplicación. Inicializa el servidor, carga los middlewares globales y activa las rutas.

---

### 📁 `public/`
Directorio dedicado a servir archivos estáticos públicos. Maneja de manera independiente el almacenamiento de recursos en el servidor.

* ### 📁 `cargas/`
  * `📁 imagenes/`: Almacén de fotografías en alta resolución de la flota de vehículos.
  * `📁 docs/`: Manuales oficiales, catálogos en PDF y documentación técnica imprimible.

---

### Archivos de Raíz (`/`)
* `📄 .env`: Archivo protegido para almacenar de manera segura credenciales confidenciales y variables de entorno.
* `📄 package.json`: Manifiesto del proyecto que gestiona las dependencias necesarias para la ejecución del servidor.
* `📄 README.md`: Guía de bienvenida y documentación técnica del proyecto.