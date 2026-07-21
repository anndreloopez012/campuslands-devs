# Flujo de reparacion

Este documento describe el recorrido que sigue una moto dentro del taller,
desde que el cliente la ingresa hasta que la retira.

## Pasos del flujo

1. **Ingreso del cliente**
   Se busca o se crea el registro en `modules/clientes`. Si el cliente es
   nuevo, se guarda su nombre y telefono.

2. **Registro de la moto**
   Si la moto no existe en `modules/motos`, se registra con su placa, marca,
   modelo y el `clienteId` que la relaciona con el dueno.

3. **Apertura de la orden**
   Se crea una nueva orden en `modules/ordenes` con `estado: "recibida"`,
   la placa de la moto y la descripcion del problema.

4. **Diagnostico y reparacion**
   El mecanico asignado cambia el `estado` de la orden a `"en_proceso"`
   mientras trabaja en la moto.

5. **Entrega**
   Al terminar, el `estado` cambia a `"entregada"` y la orden queda como
   historial permanente asociado a la moto.

## Diagrama simple

```
Cliente ---(dueno de)---> Moto ---(genera)---> Orden de reparacion
   |                         |                        |
 nombre                   placa                    estado
 telefono                 marca/modelo            mecanico
```

## Relacion entre modulos

- `clientes` → `motos`: un cliente puede tener varias motos.
- `motos` → `ordenes`: una moto puede tener varias ordenes (su historial).
- `config/settings.example.json` define valores generales del taller que no
  pertenecen a ningun cliente, moto u orden en particular (por ejemplo el
  nombre del taller o el horario de atencion).