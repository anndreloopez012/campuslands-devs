# Reglas de carrera — Sistema de Carreras Urbanas

## Requisitos de participación

- Todo piloto debe tener un `vehiculo_asignado` válido antes de inscribirse.
- El vehículo debe tener `disponible: true` en su archivo de datos.
- La categoría del piloto debe coincidir con la categoría del vehículo.

## Durante la carrera

- La velocidad máxima permitida en zonas urbanas es de 180 km/h.
- Cualquier colisión descalifica al piloto responsable.
- Los vehículos con `peso_kg` mayor a 1500 reciben un penalizador de 5 segundos por vuelta.

## Puntuación

| Posición | Puntos |
|----------|--------|
| 1°       | 25     |
| 2°       | 18     |
| 3°       | 15     |
| 4°       | 12     |
| 5°       | 10     |

## Descalificación automática

- `victorias` en negativo → piloto con datos corruptos, no se admite.
- `potencia_cv` igual a 0 → vehículo inválido, no puede competir.
- Pista con `longitud_km` igual a 0 → circuito no registrado, carrera suspendida.
