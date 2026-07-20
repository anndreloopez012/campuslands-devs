# Ejercicio: Bitácora de Viajes Extremos

**Alumno:** Sergio Ricardo Ajú Miranda

## Descripción
Sistema de gestión para reservas de turismo extremo. La lógica valida la edad mínima para actividades de alto riesgo (paracaidismo) y calcula automáticamente el impuesto del 12% sobre el costo base.

## Lógica implementada
1. **Validación:** Se filtra el arreglo original para excluir a menores de 18 años que soliciten paracaidismo.
2. **Transformación:** Se calcula el costo total (Costo Base + 12% IVA) por cada reserva aprobada.
3. **Resumen:** Se genera un objeto legible con la información del cliente y su saldo final.

## Casos de prueba incluidos en el código
- Caso Normal: Cliente mayor de edad con actividad aprobada.
- Caso Límite: Cliente de 17 años intentando reservar paracaidismo (debe ser rechazado).