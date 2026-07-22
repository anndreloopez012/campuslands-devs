# Ejercicio #11 - Viajes extremos

**Camper:** Antonio Canux

## Solución completa (Lógica en JavaScript):

```javascript

const reservas = [
  { nombre: "Laura", destino: "Interlaken", actividad: "paracaidismo", edad: 25, costoBase: 1000 },
  { nombre: "Mateo", destino: "Dubai", actividad: "paracaidismo", edad: 17, costoBase: 1500 },
  { nombre: "Sofía", destino: "Costa Rica", actividad: "bungee jumping", edad: 16, costoBase: 800 },
  { nombre: "Carlos", destino: "Queenstown", actividad: "paracaidismo", edad: 30, costoBase: 1200 }
];

// Función principal para procesar la bitácora
function procesarBitacora(listaReservas) {
  // Validar edad mínima y filtrar reservas no válidas
  const reservasValidas = listaReservas.filter(reserva => {
    // Si la actividad es paracaidismo, la edad debe ser mayor o igual a 18
    if (reserva.actividad.toLowerCase() === 'paracaidismo' && reserva.edad < 18) {
      return false;
    }
    return true;
  });

  // Agregamos impuesto del 12% y generamoa resumen
  const resumenFinal = reservasValidas.map(reserva => {
    const impuesto = reserva.costoBase * 0.12;
    const costoTotal = reserva.costoBase + impuesto;
    
    return {
      viajero: reserva.nombre,
      destino: reserva.destino,
      actividad: reserva.actividad,
      costoTotal: costoTotal
    };
  });

  return resumenFinal;
}

const resultado = procesarBitacora(reservas);
console.log(resultado);
```

## Explicación de cómo pensé el problema:
Para resolver este reto, estructuré los datos iniciales como un arreglo de objetos, lo cual facilita la iteración. Utilicé dos métodos fundamentales de los arreglos en JavaScript para mantener el código declarativo y fácil de leer:

Utilicé Array.prototype.filter() para recorrer las reservas y descartar aquellas que no cumplieran la regla de negocio (ser menor de 18 años e intentar hacer paracaidismo). Esto me devuelve un nuevo arreglo solo con los clientes aprobados.

Luego, encadené lógicamente un Array.prototype.map() sobre las reservas válidas. Esto me permitió tomar el costoBase, multiplicarlo por 0.12 para obtener el impuesto, sumarlo para calcular el costoTotal y finalmente retornar un nuevo objeto formateado que sirve como el "resumen de reservas aprobadas" solicitado en los requisitos.