# Modulo: ordenes

## Que datos guarda

Este modulo guarda cada orden de reparacion que se abre en el taller:

- `id` — identificador unico de la orden.
- `motoPlaca` — referencia a la moto que entra a reparacion (relacion con el modulo `motos`).
- `problema` — descripcion de la falla reportada.
- `estado` — `recibida`, `en_proceso` o `entregada`.
- `mecanico` — nombre de quien atiende la orden.
- `fechaIngreso` — fecha en la que se recibio la moto.

## Ejemplo de dato

```json
{
  "id": "OR-0001",
  "motoPlaca": "P-123ABC",
  "problema": "No enciende, posible falla en bateria",
  "estado": "en_proceso",
  "mecanico": "Ana Gomez",
  "fechaIngreso": "2026-07-15"
}
```

## Por que va separado

Una misma moto puede tener varias ordenes a lo largo de su historial (varias
visitas al taller). Separar las ordenes de la moto permite llevar ese
historial sin duplicar los datos tecnicos del vehiculo en cada visita.