# Flujo de reparación

Toda moto que entra al taller pasa por estos estados, en este orden:

```
recibida → en-diagnostico → en-reparacion → lista → entregada
```

## 1. Recibida

- El recepcionista registra al cliente (módulo `clientes`) si es nuevo.
- Registra la moto (módulo `motos`) si es la primera vez que ingresa.
- Crea la orden (módulo `ordenes`) con la falla reportada por el cliente.
- El `costoEstimadoQ` arranca en `0` porque aún no hay diagnóstico.

## 2. En diagnóstico

- Un mecánico revisa la moto y confirma o corrige la falla reportada.
- Se actualiza `costoEstimadoQ` con el presupuesto real.
- Se contacta al cliente (teléfono del módulo `clientes`) para aprobar.

## 3. En reparación

- Solo se entra a este estado si el cliente aprobó el presupuesto.
- El mecánico ejecuta el trabajo y registra repuestos usados.

## 4. Lista

- La moto pasó la prueba de ruta y queda en espera de retiro.
- Se avisa al cliente que puede pasar a recogerla.

## 5. Entregada

- El cliente paga y firma la orden.
- Se actualiza el `kilometraje` de la moto para el historial.
- La orden queda cerrada y sirve como historial de la moto.

## Reglas del flujo

- Una orden no puede saltarse estados (por ejemplo, de `recibida` a `lista`).
- Una orden sin cliente o sin moto válidos no se acepta.
- Una orden `entregada` no se puede modificar; si la falla regresa, se abre una orden nueva.
