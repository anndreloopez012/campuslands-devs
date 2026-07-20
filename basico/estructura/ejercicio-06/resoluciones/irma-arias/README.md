

# App de Reservas Turísticas

## Autora
Irma Arias

## Descripción
Este proyecto propone una estructura modular para una aplicación de reservas turísticas, separando las responsabilidades de cada sección para garantizar un desarrollo limpio y escalable.

## Estructura del Proyecto
- **paginas/**: Aloja los componentes de vista principal (Home, Listado de destinos, Detalle de reserva).
- **componentes/**: Contiene piezas reutilizables de la interfaz, como tarjetas de información o botones de acción.
- **servicios/**: Lógica de comunicación con APIs o manejo de datos.
- **datos/**: Almacenamiento de archivos JSON locales (`destinos.json`) para simular la base de datos.

## Razonamiento Técnico
He optado por esta estructura basada en el principio de separación de conceptos (*Separation of Concerns*). Al dividir la lógica de las vistas y los datos, el código es más fácil de mantener y probar. Además, esto permite que varios desarrolladores trabajen en diferentes partes del sistema simultáneamente sin conflictos.

## Escalabilidad
Para futuras versiones, este proyecto puede crecer añadiendo:
- Una carpeta `assets/` para imágenes de los destinos.
- Una carpeta `utils/` para funciones auxiliares de formato de fechas o moneda.
- `context/` o `store/` para gestionar estados globales del usuario (como favoritos o carrito).

## Evidencia de Validación
La estructura cumple con la separación de módulos solicitada. No existen archivos genéricos y la jerarquía de directorios sigue las mejores prácticas de desarrollo web.
¿Qué sigue ahora?