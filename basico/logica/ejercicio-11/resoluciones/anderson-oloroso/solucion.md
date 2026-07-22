# Resolución ejercicio 11 de javascript

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el sistema de validación y facturación de una agencia de turismo extremo (`paracaidismo.js`). Se define un listado de reservas con datos del viajero y actividad, se aplican reglas de restricción por edad mínima para paracaidismo, se calcula el importe final incluyendo un impuesto del 12%, se descartan las solicitudes no válidas y se genera un resumen consolidado de las reservas aprobadas.

```javascript
// 1. Registro inicial de reservas
const reservas = [
  { nombre: "Carlos Gómez", destino: "Dubai", actividad: "paracaidismo", edad: 25, costoBase: 400 },
  { nombre: "Sofía Martínez", destino: "Interlaken", actividad: "paracaidismo", edad: 16, costoBase: 350 },
  { nombre: "Lucas Fernández", destino: "Mendoza", actividad: "trekking", edad: 17, costoBase: 120 },
  { nombre: "Mariana Torres", destino: "Hawaii", actividad: "paracaidismo", edad: 21, costoBase: 450 },
  { nombre: "Mateo Ruiz", destino: "Pucón", actividad: "rafting", edad: 15, costoBase: 90 }
];

const IMPUESTO = 0.12; // 12%

// 2, 3 y 4. Validación de edad, cálculo de costo total e identificación de estado
const procesamientoReservas = reservas.map(reserva => {
  const esParacaidismo = reserva.actividad.toLowerCase() === 'paracaidismo';
  const cumpleEdad = esParacaidismo ? reserva.edad >= 18 : true;
  const costoTotal = Number((reserva.costoBase * (1 + IMPUESTO)).toFixed(2));

  return {
    ...reserva,
    costoTotal,
    aprobada: cumpleEdad,
    motivoRechazo: cumpleEdad ? null : "Requiere ser mayor de 18 años para paracaidismo"
  };
});

// Filtrar únicamente las reservas válidas/aprobadas
const reservasAprobadas = procesamientoReservas.filter(reserva => reserva.aprobada);
const reservasRechazadas = procesamientoReservas.filter(reserva => !reserva.aprobada);

// 5. Generación del resumen final
console.log("=== AGENCIA DE TURISMO EXTREMO - RESUMEN DE RESERVAS ===");

console.log("\n--- RESERVAS APROBADAS ---");
reservasAprobadas.forEach((reserva, index) => {
  console.log(`${index + 1}.${reserva.nombre}`);
  console.log(`   - Destino: ${reserva.destino} | Actividad: ${reserva.actividad} \vert{} Edad:${reserva.edad}`);
  console.log(`   - Costo Base: $${reserva.costoBase} USD \vert{} Costo Total (inc. 12\% impuesto):$${reserva.costoTotal} USD`);
});

if (reservasRechazadas.length > 0) {
  console.log("\n--- RESERVAS NO VÁLIDAS / RECHAZADAS ---");
  reservasRechazadas.forEach((reserva, index) => {
    console.log(`${index + 1}.${reserva.nombre} (${reserva.actividad}) -${reserva.motivoRechazo}`);
  });
}

const totalRecaudado = reservasAprobadas.reduce((total, reserva) => total + reserva.costoTotal, 0);
console.log(`\n Total facturado en reservas aprobadas: $${totalRecaudado.toFixed(2)} USD`);
```

- Breve explicación

Primero, se define la estructura de las reservas iniciales especificando los datos clave del cliente, actividad elegida y precio base. Mediante el método `.map()`, se evalúa la regla de negocio: si la actividad es paracaidismo, se valida que el cliente tenga al menos 18 años; en caso contrario, se aprueba la reserva.

A continuación, en el mismo recorrido se calcula el costo total incrementando un 12% de impuesto sobre el costo base (`costoBase * 1.12`). Luego, mediante el método `.filter()`, se separan las reservas aprobadas de las rechazadas para descartar las solicitudes no válidas de la lista principal.

Finalmente, se recorre el arreglo de reservas aprobadas con `.forEach()` para construir el desglose detallado en consola, incluyendo además la suma total facturada mediante `.reduce()` para presentar el balance final de la agencia.