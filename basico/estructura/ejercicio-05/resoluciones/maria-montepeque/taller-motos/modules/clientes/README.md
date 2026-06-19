# Módulo `clientes`

## Qué datos guarda

Cada cliente del taller se registra con:

| Campo      | Tipo   | Descripción                                  |
|------------|--------|----------------------------------------------|
| `id`       | string | Identificador único con formato `cli-NNN`.   |
| `nombre`   | string | Nombre completo del cliente.                 |
| `telefono` | string | Teléfono de contacto para avisar la entrega. |
| `correo`   | string | Correo para enviar cotizaciones y facturas.  |

## Responsabilidad

Este módulo solo conoce a las personas. No guarda nada sobre motos ni órdenes;
las órdenes referencian al cliente por su `id`.
