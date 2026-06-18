
# Ejercicio 06: App de Reservas Turísticas

**Nombre:** Irma Arias

## Arquitectura del Proyecto
- **paginas/**: Vistas finales que ve el usuario (ej. `inicio.js`, `detalle-reserva.js`).
- **componentes/**: Elementos UI reutilizables. `card-destino.md` contiene la documentación de diseño de la tarjeta de destino.
- **servicios/**: Lógica de negocio y conexión con APIs externas.
- **data/**: `destinos.json` almacena la base de datos de los lugares turísticos.

## Explicación del Razonamiento
He separado el proyecto en capas (Vistas, Componentes y Servicios). Esta organización permite que, si el proyecto crece, podamos añadir nuevas funcionalidades o cambiar el diseño de los componentes sin afectar la lógica de los datos. Evité nombres genéricos para que cualquier otro desarrollador entienda el propósito de cada carpeta de inmediato.

## Estructura de Datos (destinos.json)
```json
[
  {
    "id": "dest-001",
    "nombre": "Lago de Atitlán",
    "precio": 200,
    "disponible": true
  }
]