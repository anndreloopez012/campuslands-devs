# Modulo: clientes

## Que datos guarda

Este modulo guarda la informacion de las personas duenas de las motos que
entran al taller:

- `id` — identificador unico del cliente.
- `nombre` — nombre completo.
- `telefono` — numero de contacto.
- `motos` — lista de placas asociadas a ese cliente (relacion con el modulo `motos`).

## Ejemplo de dato

```json
{
  "id": "C001",
  "nombre": "Luis Marroquin",
  "telefono": "5555-1234",
  "motos": ["P-123ABC"]
}
```

## Por que va separado

Un cliente puede tener mas de una moto, y una moto siempre pertenece a un
cliente. Separarlos evita repetir el nombre y telefono del dueno cada vez
que se registra una moto nueva.