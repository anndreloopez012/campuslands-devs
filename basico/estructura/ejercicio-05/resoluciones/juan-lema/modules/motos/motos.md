# Modulo: motos

## Que datos guarda

Este modulo guarda la informacion tecnica de cada moto registrada en el taller:

- `placa` — identificador unico de la moto.
- `marca` y `modelo` — datos generales del vehiculo.
- `anio` — anio de fabricacion.
- `clienteId` — referencia al cliente dueno (relacion con el modulo `clientes`).

## Ejemplo de dato

```json
{
  "placa": "P-123ABC",
  "marca": "Yamaha",
  "modelo": "FZ 150",
  "anio": 2021,
  "clienteId": "C001"
}
```

## Por que va separado

La moto puede cambiar de estado, de dueno o recibir varias ordenes de
reparacion a lo largo del tiempo. Mantenerla como modulo propio permite
consultarla sin depender de los datos del cliente ni de las ordenes.