# Flujo de Trabajo: Proceso de Reparación

Este documento detalla el ciclo de vida de una orden de servicio desde el ingreso de la motocicleta hasta su entrega.

### 1. Recepción e Ingreso
* Se registran los datos del **Cliente** (si es nuevo).
* Se asocian los datos de la **Moto** (placa, modelo, kilometraje actual).
* Se crea una **Orden de Trabajo** en estado `Pendiente` con los síntomas reportados.

### 2. Diagnóstico y Presupuesto
* El mecánico revisa el vehículo y añade las refacciones y mano de obra necesarias a la Orden.
* El estado de la orden cambia a `En Espera de Aprobación`.

### 3. Ejecución
* Una vez el cliente autoriza, el estado cambia a `En Reparación`.
* Se descuentan las piezas del inventario (si aplica).

### 4. Control de Calidad y Entrega
* Al finalizar el trabajo, pasa a `Listo para Entrega`.
* Se procesa el pago, se genera la factura y la orden se cierra como `Entregado`.