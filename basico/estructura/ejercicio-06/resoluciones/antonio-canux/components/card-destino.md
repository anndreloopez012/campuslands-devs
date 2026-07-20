# Componente: CardDestino

## Descripción
El componente `CardDestino` renderiza la información principal de un lugar turístico en un formato de tarjeta visual. Está diseñado para ser utilizado en layouts de cuadrícula (grids) dentro de las vistas de búsqueda o en el catálogo de la página de inicio.

## Propiedades (Props) requeridas
- `id` (string): Identificador único del destino.
- `nombre` (string): Nombre visible del lugar.
- `precio` (number): Costo por noche de reserva.
- `imagen` (string): Ruta o URL de la fotografía representativa.

## Comportamiento y Eventos
- **onClick**: Al hacer clic en cualquier parte de la tarjeta, el usuario es redirigido a la vista de detalles del destino (`/destinos/:id`).
- **Renderizado condicional**: Si el destino no tiene disponibilidad, la tarjeta aplica un filtro de escala de grises y deshabilita el botón de reserva.