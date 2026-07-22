# Bitácora de viajes extremos

**Nombre:** [tu-nombre-apellido]

## Cómo pensé el problema

El ejercicio pide validar reservas de una agencia de turismo extremo y
calcular el costo total por viajero, tomando en cuenta una regla de edad
mínima para paracaidismo. Dividí la solución en pasos pequeños siguiendo
el flujo que pide el README: crear datos, validar, calcular impuesto,
filtrar y resumir.

1. **Datos de entrada**: cada reserva es un objeto con `nombre`,
   `destino`, `actividad`, `edad` y `costoBase`. Usé un arreglo de
   objetos porque cada reserva tiene varios campos relacionados entre sí.
2. **Regla de validación**: solo `paracaidismo` exige edad mínima (18
   años). Separé esa regla en su propia función (`requiereEdadMinima`)
   para no dejarla enterrada dentro de un condicional gigante, y así se
   puede extender fácil si mañana agregan otra actividad con restricción.
3. **Cálculo de impuesto**: el 12% se aplica solo sobre reservas ya
   validadas como correctas, para no calcular costos sobre datos
   inválidos.
4. **Filtrado**: en vez de solo descartar las reservas no válidas, las
   guardé también en un arreglo `rechazadas` con el motivo, porque me
   pareció más claro para validar el resultado y mostrar evidencia de
   que la regla sí se está aplicando.
5. **Resumen**: junté las reservas aprobadas en un resumen con el total
   de reservas y el costo total general, que es lo que pide el objetivo
   del ejercicio.

## Evidencia de validación

**Caso normal:** Ana Gómez, 25 años, paracaidismo, costoBase Q800.
Cumple la edad mínima, entra al grupo de aprobadas y su costoTotal
queda en Q896 (Q800 + 12% de impuesto).

**Caso límite:** Carla Ruiz, 16 años, paracaidismo, costoBase Q900.
No cumple la edad mínima de 18 años, por lo que cae en `rechazadas`
con el motivo "Edad insuficiente para paracaidismo (mínimo 18)" y no
se le calcula impuesto.

**Caso límite exacto:** Marta Lima, 18 años, paracaidismo. Al tener
exactamente la edad mínima, sí aprueba (se usa `>=`, no `>`), lo cual
confirma que el límite se está evaluando de forma inclusiva.

Salida al ejecutar el script:

```
Reservas aprobadas:
[
  { nombre: 'Ana Gómez', destino: 'Antigua Guatemala', actividad: 'paracaidismo', edad: 25, costoBase: 800, costoTotal: 896 },
  { nombre: 'Luis Pérez', destino: 'Semuc Champey', actividad: 'senderismo', edad: 17, costoBase: 300, costoTotal: 336 },
  { nombre: 'Diego Sosa', destino: 'Río Dulce', actividad: 'kayak', edad: 20, costoBase: 400, costoTotal: 448 },
  { nombre: 'Marta Lima', destino: 'Tikal', actividad: 'paracaidismo', edad: 18, costoBase: 850, costoTotal: 952 }
]

Reservas rechazadas:
[
  { nombre: 'Carla Ruiz', actividad: 'paracaidismo', edad: 16, motivo: 'Edad insuficiente para paracaidismo (mínimo 18)' }
]

Resumen general:
Total reservas aprobadas: 4
Costo total general: Q2632
```