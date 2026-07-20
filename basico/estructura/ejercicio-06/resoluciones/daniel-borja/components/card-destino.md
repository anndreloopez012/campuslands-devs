# Componente Visual: CardDestino

## Descripción
Este componente se encarga de renderizar la tarjeta visual de cada destino turístico dentro del catálogo, mostrando la información básica del viaje de forma elegante y limpia.

## Propiedades (Props) Requeridas
- `nombre` (String): El título del destino turístico.
- `precio` (Number): Costo expresado en dólares estadounidenses.
- `disponible` (Boolean): Estado de reservas de la locación.

## Casos de Comportamiento Límite
- Si `disponible` es falso, el componente debe deshabilitar el botón de "Reservar Ahora" y renderizar una etiqueta roja con la leyenda "Agotado".
- Si `cuposRestantes` es menor o igual a 2, se debe inyectar una alerta visual parpadeante que diga "¡Últimos lugares!".