# RESOLVER EJERCICIO-06 ESTRUCTURA
## Desarrollador:
Edgar Manolo Polanco Sánchez

## Estructura del Proyecto

### Carpetas Principales
* **`pages/`**: Contiene las vistas principales o páginas de la aplicación.
* **`components/`**: Almacena componentes de interfaz reutilizables.
* **`services/`**: Maneja la lógica de peticiones, APIs y consumo de datos.
* **`data/`**: Almacena archivos de datos estáticos o mocks.

### Archivos Específicos
* **`data/destinos.json`**: Guarda la información estática de los destinos turísticos (nombres, imágenes, precios, descripciones).
* **`components/card-destino.md`**: Documentación técnica con la estructura, props y uso del componente visual de tarjeta de destino.

### Escalabilidad del Proyecto
El proyecto crecerá agregando nuevos módulos específicos sin usar nombres genéricos (como `cosas` o `varios`):
* **Páginas:** Se añadirán vistas como `pages/reserva.html` o `pages/contacto.html`.
* **Componentes:** Se incluirán elementos reutilizables específicos como `components/navbar.html` o `components/footer.html`.
* **Servicios:** Se crearán módulos de consulta específicos como `services/clima-service.js` o `services/reservas-service.js`.
* **Datos:** Se integrarán nuevos modelos descriptivos como `data/hoteles.json` o `data/guias.json`.
