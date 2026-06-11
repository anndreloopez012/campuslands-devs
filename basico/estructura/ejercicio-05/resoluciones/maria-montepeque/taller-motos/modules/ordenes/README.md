# Módulo `ordenes`

## Qué datos guarda

Cada orden de reparación registra:

| Campo              | Tipo   | Descripción                                                        |
|--------------------|--------|--------------------------------------------------------------------|
| `id`               | string | Identificador único con formato `ord-NNN`.                          |
| `idCliente`        | string | Referencia al dueño (módulo `clientes`).                            |
| `idMoto`           | string | Referencia a la moto que ingresa (módulo `motos`).                  |
| `descripcionFalla` | string | Lo que el cliente reporta al dejar la moto.                         |
| `estado`           | string | Uno de: `recibida`, `en-diagnostico`, `en-reparacion`, `lista`, `entregada`. |
| `fechaIngreso`     | string | Fecha en formato `AAAA-MM-DD`.                                      |
| `costoEstimadoQ`   | number | Costo estimado en quetzales; `0` significa pendiente de diagnóstico.|

## Responsabilidad

Es el módulo que conecta a los otros dos: una orden no puede existir sin un
cliente y una moto válidos, por eso `validarOrden()` verifica ambas referencias
antes de aceptarla. El flujo completo de estados está documentado en
`docs/flujo-reparacion.md`.
