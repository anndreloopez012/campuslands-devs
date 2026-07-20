
# Gestión de Menú Urbano

## Autora
Irma Arias

## Descripción
Este proyecto implementa una estructura modular para la gestión de un sistema de menú gastronómico, separando eficazmente los datos de negocio de los recursos multimedia y la documentación técnica.

## Estructura del Proyecto
- **menu/**: Contiene los archivos JSON que almacenan la información de platos, bebidas y combinaciones.
- **recursos/fotos/**: Carpeta dedicada exclusivamente al almacenamiento de imágenes.
- **docs/**: Documentación relevante, incluyendo las reglas de negocio y precios.
- **scripts/**: Espacio reservado para la lógica de procesamiento de datos.

## Razonamiento Técnico
He tomado la decisión de separar los datos (`.json`) de las imágenes (`recursos/fotos`) por tres razones principales:
1. **Optimización de rendimiento:** Los archivos de datos son ligeros, mientras que las imágenes requieren mayor ancho de banda; separarlos permite una carga más eficiente.
2. **Escalabilidad:** Al crecer el catálogo, podremos migrar las imágenes a un servicio de almacenamiento en la nube (CDN) sin alterar la lógica de los datos.
3. **Mantenimiento:** Facilita la creación de copias de seguridad (backups) y la gestión de permisos, ya que los archivos de configuración y los activos multimedia tienen ciclos de vida distintos.

## Validación
- La estructura de directorios sigue los requerimientos solicitados.
- Se han utilizado nombres descriptivos en lugar de nombres genéricos, facilitando la comprensión del proyecto para otros desarrolladores.