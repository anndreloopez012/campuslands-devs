# Manual de Proceso: Flujo de Reparación de Motocicletas
**Sistema de Gestión de Taller**

Para asegurar un servicio técnico transparente y eficiente, toda motocicleta registrada en el sistema debe avanzar estrictamente a través del siguiente ciclo de estados lógicos:

## Ciclo de Vida de una Orden de Servicio

1. **INGRESADA (En Espera de Diagnóstico):**
   - La moto llega al taller. Se registran datos iniciales, kilometraje, placa y fallas reportadas por el cliente.
   
2. **DIAGNÓSTICO (Evaluación Técnica):**
   - El mecánico asignado revisa el vehículo y genera la lista de repuestos necesarios y las horas de mano de obra estimadas.

3. **APROBACIÓN (Espera de Cliente):**
   - Se le envía la cotización al propietario. La orden permanece pausada hasta recibir confirmación del presupuesto.

4. **EN REPARACIÓN (Trabajo Activo):**
   - Con la aprobación lista, el mecánico interviene la moto en la bahía de trabajo.

5. **PRUEBA DE RUTA (Control de Calidad):**
   - Se realiza un test de conducción en calle para certificar que la falla fue solucionada por completo.

6. **LISTA PARA ENTREGA / FINALIZADA:**
   - La moto pasa al área de lavado, se genera la factura correspondiente y queda lista para que el cliente la retire.