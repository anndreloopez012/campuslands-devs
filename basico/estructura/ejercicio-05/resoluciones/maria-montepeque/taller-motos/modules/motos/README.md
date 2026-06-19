# Módulo `motos`

## Qué datos guarda

Cada motocicleta registrada en el taller tiene:

| Campo         | Tipo   | Descripción                                          |
|---------------|--------|------------------------------------------------------|
| `id`          | string | Identificador único con formato `moto-NNN`.          |
| `idCliente`   | string | Referencia al dueño (módulo `clientes`).             |
| `marca`       | string | Marca de la moto (Honda, Yamaha, etc.).              |
| `modelo`      | string | Modelo comercial.                                    |
| `anio`        | number | Año de fabricación.                                  |
| `placa`       | string | Placa de circulación, útil para identificarla rápido.|
| `kilometraje` | number | Kilometraje al último registro, en km.               |

## Responsabilidad

Este módulo solo describe vehículos. La relación con el dueño es por `idCliente`
y el historial de reparaciones vive en el módulo `ordenes`.
